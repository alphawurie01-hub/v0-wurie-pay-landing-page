"use server"

import { createClient } from "@/lib/supabase/server"

export type WaitlistFormState = {
  success: boolean
  message: string
  errors?: {
    name?: string[]
    email?: string[]
    phone?: string[]
    country?: string[]
  }
}

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Phone validation - allows international format
const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/

export async function joinWaitlist(
  prevState: WaitlistFormState | null,
  formData: FormData
): Promise<WaitlistFormState> {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const country = formData.get("country") as string

  // Validation
  const errors: WaitlistFormState["errors"] = {}

  if (!name || name.trim().length < 2) {
    errors.name = ["Please enter your full name (at least 2 characters)"]
  }

  if (!email || !emailRegex.test(email)) {
    errors.email = ["Please enter a valid email address"]
  }

  if (phone && !phoneRegex.test(phone)) {
    errors.phone = ["Please enter a valid phone number"]
  }

  if (!country || country.trim().length < 2) {
    errors.country = ["Please select your country"]
  }

  // Return validation errors if any
  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please fix the errors below",
      errors,
    }
  }

  try {
    const supabase = await createClient()

    // Check for existing email
    const { data: existingUser, error: checkError } = await supabase
      .from("waitlist")
      .select("id, email")
      .eq("email", email.toLowerCase().trim())
      .maybeSingle()

    if (checkError) {
      console.error("Error checking existing user:", checkError)
      return {
        success: false,
        message: "Something went wrong. Please try again.",
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

    // Insert new waitlist entry
    const { error: insertError } = await supabase.from("waitlist").insert({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      phone: phone?.trim() || null,
      country: country.trim(),
    })

    if (insertError) {
      console.error("Error inserting waitlist entry:", insertError)
      
      // Handle unique constraint violation
      if (insertError.code === "23505") {
        return {
          success: false,
          message: "This email is already on our waitlist!",
          errors: {
            email: ["This email is already registered"],
          },
        }
      }

      return {
        success: false,
        message: "Failed to join waitlist. Please try again.",
      }
    }

    return {
      success: true,
      message: "You're on the list! We'll notify you when WuriePay launches.",
    }
  } catch (error) {
    console.error("Waitlist submission error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
