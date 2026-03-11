"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Field, FieldLabel } from "@/components/ui/field"
import { ArrowRight, Sparkles } from "lucide-react"

const countries = [
  "Sierra Leone", "Nigeria", "Ghana", "Kenya", "South Africa", 
  "Tanzania", "Uganda", "Ethiopia", "Senegal", "Cameroon",
  "United States", "United Kingdom", "Canada", "France", "Germany"
]

export function FinalCtaSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Be among the first to access <span className="text-primary">WuriePay</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join the early access list and receive updates about the upcoming launch. {"We're"} building the future of African finance — and we want you to be part of it.
          </p>

          <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border/50 max-w-xl mx-auto">
            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{"You're"} on the list!</h3>
                <p className="text-muted-foreground">{"We'll"} notify you when WuriePay launches.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Field>
                  <FieldLabel>Full Name</FieldLabel>
                  <Input
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12"
                  />
                </Field>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel>Phone Number</FieldLabel>
                    <Input
                      type="tel"
                      placeholder="+232 XX XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      className="h-12"
                    />
                  </Field>

                  <Field>
                    <FieldLabel>Email Address</FieldLabel>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </Field>
                </div>

                <Field>
                  <FieldLabel>Country</FieldLabel>
                  <Select value={formData.country} onValueChange={(value) => setFormData({ ...formData, country: value })}>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select your country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>{country}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </Field>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Joining..."
                  ) : (
                    <>
                      Join the Waitlist
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
