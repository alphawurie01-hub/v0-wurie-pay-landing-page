"use client"

import { useActionState, useEffect, useState, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { joinWaitlist, checkEmailExists, type WaitlistFormState } from "@/app/actions/waitlist"
import { ArrowRight, CheckCircle2, Loader2, AlertCircle, Check, X } from "lucide-react"
import { cn } from "@/lib/utils"

// Email validation regex for client-side
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Country codes with flags for phone number dropdown
const countryCodes = [
  { code: "+232", country: "Sierra Leone", flag: "🇸🇱" },
  { code: "+234", country: "Nigeria", flag: "🇳🇬" },
  { code: "+233", country: "Ghana", flag: "🇬🇭" },
  { code: "+254", country: "Kenya", flag: "🇰🇪" },
  { code: "+27", country: "South Africa", flag: "🇿🇦" },
  { code: "+20", country: "Egypt", flag: "🇪🇬" },
  { code: "+212", country: "Morocco", flag: "🇲🇦" },
  { code: "+256", country: "Uganda", flag: "🇺🇬" },
  { code: "+255", country: "Tanzania", flag: "🇹🇿" },
  { code: "+237", country: "Cameroon", flag: "🇨🇲" },
  { code: "+225", country: "Ivory Coast", flag: "🇨🇮" },
  { code: "+221", country: "Senegal", flag: "🇸🇳" },
  { code: "+251", country: "Ethiopia", flag: "🇪🇹" },
  { code: "+263", country: "Zimbabwe", flag: "🇿🇼" },
  { code: "+260", country: "Zambia", flag: "🇿🇲" },
  { code: "+267", country: "Botswana", flag: "🇧🇼" },
  { code: "+265", country: "Malawi", flag: "🇲🇼" },
  { code: "+258", country: "Mozambique", flag: "🇲🇿" },
  { code: "+250", country: "Rwanda", flag: "🇷🇼" },
  { code: "+231", country: "Liberia", flag: "🇱🇷" },
  { code: "+220", country: "Gambia", flag: "🇬🇲" },
  { code: "+224", country: "Guinea", flag: "🇬🇳" },
  { code: "+229", country: "Benin", flag: "🇧🇯" },
  { code: "+228", country: "Togo", flag: "🇹🇬" },
  { code: "+1", country: "United States", flag: "🇺🇸" },
  { code: "+44", country: "United Kingdom", flag: "🇬🇧" },
  { code: "+33", country: "France", flag: "🇫🇷" },
  { code: "+49", country: "Germany", flag: "🇩🇪" },
  { code: "+971", country: "UAE", flag: "🇦🇪" },
  { code: "+966", country: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+91", country: "India", flag: "🇮🇳" },
  { code: "+86", country: "China", flag: "🇨🇳" },
]

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
  const [email, setEmail] = useState("")
  const [phoneCode, setPhoneCode] = useState("+232") // Default to Sierra Leone
  const [phoneNumber, setPhoneNumber] = useState("")
  const [customPhoneCode, setCustomPhoneCode] = useState("")
  const [isCustomCode, setIsCustomCode] = useState(false)
  const [emailStatus, setEmailStatus] = useState<"idle" | "checking" | "available" | "taken" | "invalid">("idle")
  const emailCheckTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  // Handle phone code selection
  const handlePhoneCodeChange = (value: string) => {
    if (value === "other") {
      setIsCustomCode(true)
      setPhoneCode("")
      setCustomPhoneCode("")
    } else {
      setIsCustomCode(false)
      setPhoneCode(value)
    }
  }

  // Get the actual phone code to use
  const getPhoneCode = () => isCustomCode ? customPhoneCode : phoneCode

  // Debounced email uniqueness check
  const checkEmail = useCallback(async (emailValue: string) => {
    if (!emailValue || !emailRegex.test(emailValue)) {
      setEmailStatus(emailValue ? "invalid" : "idle")
      return
    }

    setEmailStatus("checking")
    try {
      const exists = await checkEmailExists(emailValue)
      setEmailStatus(exists ? "taken" : "available")
    } catch {
      setEmailStatus("idle")
    }
  }, [])

  // Handle email input change with debounce
  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value
      setEmail(value)

      // Clear previous timeout
      if (emailCheckTimeoutRef.current) {
        clearTimeout(emailCheckTimeoutRef.current)
      }

      // Reset status for immediate feedback
      if (!value) {
        setEmailStatus("idle")
        return
      }

      if (!emailRegex.test(value)) {
        setEmailStatus("invalid")
        return
      }

      // Debounce the server check
      emailCheckTimeoutRef.current = setTimeout(() => {
        checkEmail(value)
      }, 500)
    },
    [checkEmail]
  )

  // Reset form on success
  useEffect(() => {
    if (state?.success) {
      setCountry("")
      setEmail("")
      setPhoneCode("+232")
      setPhoneNumber("")
      setCustomPhoneCode("")
      setIsCustomCode(false)
      setEmailStatus("idle")
      formRef.current?.reset()
    }
  }, [state?.success])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (emailCheckTimeoutRef.current) {
        clearTimeout(emailCheckTimeoutRef.current)
      }
    }
  }, [])

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
    <form ref={formRef} action={formAction} className={cn("space-y-4", className)}>
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
              <div className="flex gap-2">
                {isCustomCode ? (
                  <Input
                    type="tel"
                    placeholder="+XX"
                    value={customPhoneCode}
                    onChange={(e) => setCustomPhoneCode(e.target.value)}
                    className="w-[90px] shrink-0"
                  />
                ) : (
                  <Select value={phoneCode} onValueChange={handlePhoneCodeChange}>
                    <SelectTrigger className="w-[110px] shrink-0">
                      <SelectValue>
                        {countryCodes.find(c => c.code === phoneCode)?.flag} {phoneCode}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      {countryCodes.map((c) => (
                        <SelectItem key={c.code} value={c.code}>
                          <span className="flex items-center gap-2">
                            <span>{c.flag}</span>
                            <span>{c.code}</span>
                            <span className="text-muted-foreground text-xs">{c.country}</span>
                          </span>
                        </SelectItem>
                      ))}
                      <SelectItem value="other">
                        <span className="flex items-center gap-2 text-muted-foreground">
                          Other (enter code)
                        </span>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                )}
                <Input
                  id={`${idPrefix}phone`}
                  name="phone"
                  type="tel"
                  placeholder="76 000 000"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  aria-invalid={!!state?.errors?.phone}
                  className={cn("flex-1", state?.errors?.phone && "border-destructive")}
                />
                <input type="hidden" name="phone_full" value={phoneNumber ? `${getPhoneCode()} ${phoneNumber}` : ""} />
              </div>
              {isCustomCode && (
                <button 
                  type="button" 
                  onClick={() => { setIsCustomCode(false); setPhoneCode("+232"); }}
                  className="text-xs text-primary hover:underline"
                >
                  Back to country list
                </button>
              )}
              {state?.errors?.phone && (
                <p className="text-xs text-destructive">{state.errors.phone[0]}</p>
              )}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor={`${idPrefix}email`}>Email Address</Label>
              <div className="relative">
                <Input
                  id={`${idPrefix}email`}
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                  value={email}
                  onChange={handleEmailChange}
                  aria-invalid={!!state?.errors?.email || emailStatus === "taken" || emailStatus === "invalid"}
                  className={cn(
                    "pr-10",
                    (state?.errors?.email || emailStatus === "taken") && "border-destructive",
                    emailStatus === "available" && "border-[#00A86B]"
                  )}
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  {emailStatus === "checking" && (
                    <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                  )}
                  {emailStatus === "available" && (
                    <Check className="h-4 w-4 text-[#00A86B]" />
                  )}
                  {(emailStatus === "taken" || emailStatus === "invalid") && (
                    <X className="h-4 w-4 text-destructive" />
                  )}
                </div>
              </div>
              {emailStatus === "taken" && !state?.errors?.email && (
                <p className="text-xs text-destructive">This email is already registered</p>
              )}
              {emailStatus === "invalid" && email && !state?.errors?.email && (
                <p className="text-xs text-destructive">Please enter a valid email address</p>
              )}
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
            <div className="flex gap-2">
              {isCustomCode ? (
                <Input
                  type="tel"
                  placeholder="+XX"
                  value={customPhoneCode}
                  onChange={(e) => setCustomPhoneCode(e.target.value)}
                  className="w-[90px] shrink-0"
                />
              ) : (
                <Select value={phoneCode} onValueChange={handlePhoneCodeChange}>
                  <SelectTrigger className="w-[110px] shrink-0">
                    <SelectValue>
                      {countryCodes.find(c => c.code === phoneCode)?.flag} {phoneCode}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {countryCodes.map((c) => (
                      <SelectItem key={c.code} value={c.code}>
                        <span className="flex items-center gap-2">
                          <span>{c.flag}</span>
                          <span>{c.code}</span>
                          <span className="text-muted-foreground text-xs">{c.country}</span>
                        </span>
                      </SelectItem>
                    ))}
                    <SelectItem value="other">
                      <span className="flex items-center gap-2 text-muted-foreground">
                        Other (enter code)
                      </span>
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
              <Input
                id={`${idPrefix}phone`}
                name="phone"
                type="tel"
                placeholder="76 000 000"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                aria-invalid={!!state?.errors?.phone}
                className={cn("flex-1", state?.errors?.phone && "border-destructive")}
              />
              <input type="hidden" name="phone_full" value={phoneNumber ? `${getPhoneCode()} ${phoneNumber}` : ""} />
            </div>
            {isCustomCode && (
              <button 
                type="button" 
                onClick={() => { setIsCustomCode(false); setPhoneCode("+232"); }}
                className="text-xs text-primary hover:underline"
              >
                Back to country list
              </button>
            )}
            {state?.errors?.phone && (
              <p className="text-xs text-destructive">{state.errors.phone[0]}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor={`${idPrefix}email`}>Email Address</Label>
            <div className="relative">
              <Input
                id={`${idPrefix}email`}
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={handleEmailChange}
                aria-invalid={!!state?.errors?.email || emailStatus === "taken" || emailStatus === "invalid"}
                className={cn(
                  "pr-10",
                  (state?.errors?.email || emailStatus === "taken") && "border-destructive",
                  emailStatus === "available" && "border-[#00A86B]"
                )}
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                {emailStatus === "checking" && (
                  <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                )}
                {emailStatus === "available" && (
                  <Check className="h-4 w-4 text-[#00A86B]" />
                )}
                {(emailStatus === "taken" || emailStatus === "invalid") && (
                  <X className="h-4 w-4 text-destructive" />
                )}
              </div>
            </div>
            {emailStatus === "taken" && !state?.errors?.email && (
              <p className="text-xs text-destructive">This email is already registered</p>
            )}
            {emailStatus === "invalid" && email && !state?.errors?.email && (
              <p className="text-xs text-destructive">Please enter a valid email address</p>
            )}
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
        disabled={isPending || emailStatus === "taken" || emailStatus === "checking"}
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
