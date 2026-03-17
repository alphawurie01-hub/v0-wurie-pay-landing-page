"use server"

import { createClient } from "@/lib/supabase/server"
import { headers } from "next/headers"
import { z } from "zod"

// Zod validation schema for secure input validation
const waitlistSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s'-]+$/, "Name can only contain letters, spaces, hyphens, and apostrophes")
    .transform((val) => val.trim()),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must be less than 255 characters")
    .transform((val) => val.toLowerCase().trim()),
  phone: z
    .string()
    .optional()
    .transform((val) => (val && val.trim() !== "" ? val.trim() : null))
    .pipe(
      z
        .string()
        .regex(/^\+?[0-9\s\-()]{7,20}$/, "Please enter a valid phone number")
        .nullable()
    ),
  country: z
    .string()
    .min(2, "Please select your country")
    .max(100, "Country name is too long")
    .transform((val) => val.trim()),
})

export type WaitlistFormState = {
  success: boolean
  message: string
  waitlistCount?: number
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    country?: string[]
  }
}

// Generate a unique referral code
function generateReferralCode(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let code = ""
  for (let i = 0; i < 8; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return code
}

export async function joinWaitlist(
  _prevState: WaitlistFormState | null,
  formData: FormData
): Promise<WaitlistFormState> {
  try {
    // Extract and sanitize form data
    // Use phone_full (combined country code + number) if available, otherwise fallback to phone
    const phoneFull = formData.get("phone_full") as string
    const phoneField = formData.get("phone") as string
    const phoneValue = phoneFull && phoneFull.trim() !== "" ? phoneFull : phoneField
    
    const rawData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: phoneValue,
      country: formData.get("country") as string,
    }

    // Validate with Zod schema
    const validationResult = waitlistSchema.safeParse(rawData)

    if (!validationResult.success) {
      const fieldErrors = validationResult.error.flatten().fieldErrors
      return {
        success: false,
        message: "Please fix the errors below",
        errors: {
          name: fieldErrors.name,
          email: fieldErrors.email,
          phone: fieldErrors.phone,
          country: fieldErrors.country,
        },
      }
    }

    const validatedData = validationResult.data

    // Get request metadata for security tracking
    const headersList = await headers()
    const ipAddress =
      headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      headersList.get("x-real-ip") ||
      "unknown"
    const userAgent = headersList.get("user-agent") || "unknown"

    const supabase = await createClient()

    // Check for existing email (email uniqueness check)
    const { data: existingUser, error: checkError } = await supabase
      .from("waitlist")
      .select("id, email")
      .eq("email", validatedData.email)
      .maybeSingle()

    if (checkError) {
      console.error("Error checking existing user:", checkError)
      return {
        success: false,
        message: "Unable to verify your email. Please try again.",
      }
    }

    if (existingUser) {
      return {
        success: false,
        message: "This email is already on our waitlist! We'll notify you when we launch.",
        errors: {
          email: ["This email is already registered"],
        },
      }
    }

    // Generate unique referral code
    const referralCode = generateReferralCode()

    // Insert new waitlist entry with all metadata
    const { error: insertError } = await supabase.from("waitlist").insert({
      name: validatedData.name,
      email: validatedData.email,
      phone: validatedData.phone,
      country: validatedData.country,
      status: "pending",
      referral_code: referralCode,
      ip_address: ipAddress,
      user_agent: userAgent,
    })

    if (insertError) {
      console.error("Error inserting waitlist entry:", insertError)

      // Handle unique constraint violation (race condition)
      if (insertError.code === "23505") {
        if (insertError.message?.includes("email")) {
          return {
            success: false,
            message: "This email is already on our waitlist!",
            errors: {
              email: ["This email is already registered"],
            },
          }
        }
        // Referral code collision - retry with new code
        const newReferralCode = generateReferralCode()
        const { error: retryError } = await supabase.from("waitlist").insert({
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          country: validatedData.country,
          status: "pending",
          referral_code: newReferralCode,
          ip_address: ipAddress,
          user_agent: userAgent,
        })

        if (retryError) {
          console.error("Retry insert error:", retryError)
          return {
            success: false,
            message: "Failed to complete registration. Please try again.",
          }
        }
      } else {
        return {
          success: false,
          message: "Failed to join waitlist. Please try again.",
        }
      }
    }

    const waitlistCount = await getWaitlistCount()
    return {
      success: true,
      message: "You're on the list! We'll notify you when WuriePay launches in your region.",
      waitlistCount,
    }
  } catch (error) {
    console.error("Waitlist submission error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}

export async function getWaitlistCount(): Promise<number> {
  try {
    const supabase = await createClient()
    const { count, error } = await supabase
      .from("waitlist")
      .select("id", { count: "exact", head: true })

    if (error) {
      console.error("Error fetching waitlist count:", error)
      return 0
    }

    return count ?? 0
  } catch (error) {
    console.error("Waitlist count error:", error)
    return 0
  }
}

// Helper function to check if email exists (for real-time validation)
export async function checkEmailExists(email: string): Promise<boolean> {
  try {
    const emailSchema = z.string().email()
    const result = emailSchema.safeParse(email)
    if (!result.success) return false

    const supabase = await createClient()
    const { data, error } = await supabase
      .from("waitlist")
      .select("id")
      .eq("email", email.toLowerCase().trim())
      .maybeSingle()

    if (error) {
      console.error("Error checking email:", error)
      return false
    }

    return !!data
  } catch {
    return false
  }
}
