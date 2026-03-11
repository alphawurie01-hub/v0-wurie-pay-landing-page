"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Field, FieldLabel } from "@/components/ui/field"
import { ArrowRight, Sparkles } from "lucide-react"

const countries = [
  "Sierra Leone", "Nigeria", "Ghana", "Kenya", "South Africa", 
  "Tanzania", "Uganda", "Ethiopia", "Senegal", "Cameroon",
  "United States", "United Kingdom", "Canada", "France", "Germany"
]

export function HeroSection() {
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
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-primary/10 text-primary border-primary/20 hover:bg-primary/15">
              <Sparkles className="w-4 h-4 mr-2" />
              Launching Soon
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground text-balance">
              The Future of Finance in Africa{" "}
              <span className="text-primary">Starts Here</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Send money, pay bills, and manage your finances with AI — all inside one secure financial platform designed for Africa.
            </p>

            {/* Mobile app mockup for mobile view */}
            <div className="lg:hidden flex justify-center">
              <PhoneMockup />
            </div>

            {/* Waitlist Form */}
            <div className="bg-card rounded-2xl p-6 sm:p-8 shadow-lg border border-border/50">
              {isSubmitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">You&apos;re on the list!</h3>
                  <p className="text-muted-foreground">We&apos;ll notify you when WuriePay launches.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Join the Early Access Waitlist</h3>
                  
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
                        Join the Early Access Waitlist
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Early access users will receive priority onboarding and exclusive beta features.
                  </p>
                </form>
              )}
            </div>
          </div>

          {/* Right content - Phone mockup */}
          <div className="hidden lg:flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
      
      {/* Phone frame */}
      <div className="relative bg-[#1a1a1a] rounded-[3rem] p-3 shadow-2xl">
        <div className="bg-background rounded-[2.5rem] overflow-hidden w-72">
          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Shot%202026-02-14%20at%204.03.22%20AM-8OpcurHBhV7hxosnloCKgdN93t2HFz.png"
            alt="WuriePay App - Wallet Dashboard showing balance of 10,975,000.04 GNF with quick actions and popular services"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  )
}
