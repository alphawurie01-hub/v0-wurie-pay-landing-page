"use client"

import { useActionState, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { joinWaitlist, type WaitlistFormState } from "@/app/actions/waitlist"
import { ArrowRight, CheckCircle2, Loader2, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

// All countries list
const allCountries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
  "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cabo Verde", "Cambodia",
  "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Brazzaville)", "Congo (Kinshasa)",
  "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
  "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Fiji", "Finland", "France",
  "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
  "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland",
  "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kuwait",
  "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico",
  "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Mozambique", "Myanmar", "Namibia", "Nauru",
  "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman",
  "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
  "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
  "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
  "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
]

interface WaitlistFormProps {
  variant?: "default" | "compact"
  idPrefix?: string
  className?: string
}

export function WaitlistForm({ variant = "default", idPrefix = "", className }: WaitlistFormProps) {
  const [state, formAction, isPending] = useActionState<WaitlistFormState | null, FormData>(joinWaitlist, null)
  const [country, setCountry] = useState("")

  // Reset form on success
  useEffect(() => {
    if (state?.success) {
      setCountry("")
    }
  }, [state?.success])

  if (state?.success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn("flex flex-col items-center justify-center py-8 text-center", className)}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#00A86B]/10">
          <CheckCircle2 className="h-8 w-8 text-[#00A86B]" />
        </div>
        <h3 className="mt-4 text-xl font-semibold">You&apos;re on the list!</h3>
        <p className="mt-2 text-muted-foreground">{state.message}</p>
      </motion.div>
    )
  }

  const isCompact = variant === "compact"

  return (
    <form action={formAction} className={cn("space-y-4", className)}>
      <AnimatePresence>
        {state?.message && !state.success && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive"
          >
            <AlertCircle className="h-4 w-4 shrink-0" />
            {state.message}
          </motion.div>
        )}
      </AnimatePresence>

      {isCompact ? (
        <>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`${idPrefix}name`}>Full Name</Label>
              <Input
                id={`${idPrefix}name`}
                name="name"
                placeholder="Alpha Bah"
                required
                aria-invalid={!!state?.errors?.name}
                className={cn(state?.errors?.name && "border-destructive")}
              />
              {state?.errors?.name && (
                <p className="text-xs text-destructive">{state.errors.name[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${idPrefix}phone`}>Phone Number</Label>
              <Input
                id={`${idPrefix}phone`}
                name="phone"
                type="tel"
                placeholder="+232 76 000 000"
                aria-invalid={!!state?.errors?.phone}
                className={cn(state?.errors?.phone && "border-destructive")}
              />
              {state?.errors?.phone && (
                <p className="text-xs text-destructive">{state.errors.phone[0]}</p>
              )}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`${idPrefix}email`}>Email Address</Label>
              <Input
                id={`${idPrefix}email`}
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                aria-invalid={!!state?.errors?.email}
                className={cn(state?.errors?.email && "border-destructive")}
              />
              {state?.errors?.email && (
                <p className="text-xs text-destructive">{state.errors.email[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor={`${idPrefix}country`}>Country</Label>
              <Select name="country" value={country} onValueChange={setCountry} required>
                <SelectTrigger 
                  className={cn("w-full", state?.errors?.country && "border-destructive")}
                  aria-invalid={!!state?.errors?.country}
                >
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  {allCountries.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {state?.errors?.country && (
                <p className="text-xs text-destructive">{state.errors.country[0]}</p>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="space-y-2">
            <Label htmlFor={`${idPrefix}name`}>Full Name</Label>
            <Input
              id={`${idPrefix}name`}
              name="name"
              placeholder="Alpha Bah"
              required
              aria-invalid={!!state?.errors?.name}
              className={cn(state?.errors?.name && "border-destructive")}
            />
            {state?.errors?.name && (
              <p className="text-xs text-destructive">{state.errors.name[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${idPrefix}phone`}>Phone Number</Label>
            <Input
              id={`${idPrefix}phone`}
              name="phone"
              type="tel"
              placeholder="+232 76 000 000"
              aria-invalid={!!state?.errors?.phone}
              className={cn(state?.errors?.phone && "border-destructive")}
            />
            {state?.errors?.phone && (
              <p className="text-xs text-destructive">{state.errors.phone[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${idPrefix}email`}>Email Address</Label>
            <Input
              id={`${idPrefix}email`}
              name="email"
              type="email"
              placeholder="you@example.com"
              required
              aria-invalid={!!state?.errors?.email}
              className={cn(state?.errors?.email && "border-destructive")}
            />
            {state?.errors?.email && (
              <p className="text-xs text-destructive">{state.errors.email[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${idPrefix}country`}>Country</Label>
            <Select name="country" value={country} onValueChange={setCountry} required>
              <SelectTrigger 
                className={cn("w-full", state?.errors?.country && "border-destructive")}
                aria-invalid={!!state?.errors?.country}
              >
                <SelectValue placeholder="Select your country" />
              </SelectTrigger>
              <SelectContent>
                {allCountries.map((c) => (
                  <SelectItem key={c} value={c}>
                    {c}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {state?.errors?.country && (
              <p className="text-xs text-destructive">{state.errors.country[0]}</p>
            )}
          </div>
        </>
      )}

      <Button 
        type="submit" 
        className="w-full bg-[#00A86B] hover:bg-[#00A86B]/90" 
        size="lg"
        disabled={isPending}
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Joining...
          </>
        ) : (
          <>
            Join the Waitlist
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>
    </form>
  )
}
