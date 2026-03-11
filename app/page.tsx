"use client"

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Wallet, 
  Zap, 
  Shield, 
  Globe, 
  Brain, 
  TrendingUp, 
  Users, 
  Lock, 
  CheckCircle,
  ArrowRight,
  DollarSign,
  BarChart3,
  Building2,
  Twitter,
  Linkedin,
  Mail,
  Share2,
  Award,
  Clock
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'

interface FormData {
  name: string
  phone: string
  email: string
  country: string
}

interface WaitlistFormProps {
  onSubmit: (data: FormData) => void
  showHeadline?: boolean
}

function WaitlistForm({ onSubmit, showHeadline = true }: WaitlistFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    country: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      {showHeadline && (
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold mb-2 text-foreground">Join the Early Access Waitlist</h3>
          <p className="text-muted-foreground">
            Early access users will receive priority onboarding and exclusive beta features.
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleInputChange}
          required
          className="h-12"
        />
        <Input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleInputChange}
          required
          className="h-12"
        />
        <Input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          required
          className="h-12"
        />
        <Input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleInputChange}
          required
          className="h-12"
        />
        <Button type="submit" size="lg" className="w-full h-12 text-base">
          Join the Waitlist
          <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </form>
    </div>
  )
}

export default function WuriePayLanding() {
  const [waitlistCount] = useState(5482)

  const handleWaitlistSubmit = (data: FormData) => {
    console.log('Waitlist submission:', data)
    alert('Thank you for joining the waitlist! Check your email for next steps.')
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10 border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,168,107,0.08),transparent_50%)]" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wuriepay-logo-EDnXEa8UX7aE4rzLWQhGkU3Q4vIktk.png"
                alt="WuriePay"
                width={180}
                height={60}
                className="h-14 w-auto"
              />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Value Proposition */}
              <div className="text-center lg:text-left">
                <Badge className="mb-4 px-4 py-2 text-sm" variant="secondary">
                  <Clock className="w-3 h-3 mr-2 inline" />
                  Launching Soon 2026
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance">
                  The Future of Finance in Africa Starts Here
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                  Send money, pay bills, and manage your finances with AI — all inside one secure financial platform designed for Africa.
                </p>
                
                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8">
                  <div className="flex items-center gap-2 text-sm">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="font-medium">Bank-Level Security</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Brain className="w-5 h-5 text-primary" />
                    <span className="font-medium">AI-Powered</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="w-5 h-5 text-primary" />
                    <span className="font-medium">50+ Countries</span>
                  </div>
                </div>

                {/* Phone Mockup - Mobile only */}
                <div className="lg:hidden flex justify-center mb-8">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
                    <div className="relative bg-[#1a1a1a] rounded-[2.5rem] p-2 shadow-2xl">
                      <div className="rounded-[2rem] overflow-hidden w-56">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Shot%202026-02-14%20at%204.03.22%20AM-8OpcurHBhV7hxosnloCKgdN93t2HFz.png"
                          alt="WuriePay App"
                          width={224}
                          height={480}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Waitlist Form + Phone Mockup */}
              <div className="flex flex-col items-center gap-8">
                <Card className="border-2 border-primary/20 shadow-2xl bg-card w-full max-w-md">
                  <CardContent className="pt-6">
                    <WaitlistForm onSubmit={handleWaitlistSubmit} />
                  </CardContent>
                </Card>

                {/* Phone Mockup - Desktop only */}
                <div className="hidden lg:block">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-75" />
                    <div className="relative bg-[#1a1a1a] rounded-[2.5rem] p-2 shadow-2xl">
                      <div className="rounded-[2rem] overflow-hidden w-64">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Shot%202026-02-14%20at%204.03.22%20AM-8OpcurHBhV7hxosnloCKgdN93t2HFz.png"
                          alt="WuriePay App"
                          width={256}
                          height={550}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 bg-muted/30 border-b border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-6 py-3 mb-4">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-lg font-semibold">
                Join <span className="text-primary text-2xl font-bold">{waitlistCount.toLocaleString()}+</span> people already waiting for WuriePay
              </span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join the growing community building the future of African finance — entrepreneurs, freelancers, and innovators are already here.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Financial Tools in Africa Are Outdated
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Traditional systems like SWIFT were not built for {"Africa's"} digital economy
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: <DollarSign className="w-6 h-6 text-primary" />, text: "Sending money internationally is expensive" },
              { icon: <BarChart3 className="w-6 h-6 text-primary" />, text: "Financial tools are fragmented" },
              { icon: <TrendingUp className="w-6 h-6 text-primary" />, text: "Small businesses lack analytics" },
              { icon: <Users className="w-6 h-6 text-primary" />, text: "Many people remain excluded from modern banking" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full border-border bg-card hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      {item.icon}
                    </div>
                    <p className="text-muted-foreground font-medium">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Meet WuriePay</h2>
            <p className="text-xl text-muted-foreground">
              WuriePay is a next-generation financial platform that combines payments, artificial intelligence, and modern financial infrastructure into a single application.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Wallet className="w-8 h-8 text-primary" />,
                title: "Payments",
                features: ["Send and receive money", "Merchant payments", "Bill payments", "Digital wallet"]
              },
              {
                icon: <Brain className="w-8 h-8 text-primary" />,
                title: "AI Finance",
                features: ["Smart financial insights", "Automated budgeting", "Credit scoring", "AI assistant"]
              },
              {
                icon: <Globe className="w-8 h-8 text-primary" />,
                title: "Global Infrastructure",
                features: ["Cross-border payments", "Stable digital assets", "Modern financial rails", "50+ countries"]
              }
            ].map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border bg-gradient-to-br from-card to-card/50 hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center mb-4">
                      {pillar.icon}
                    </div>
                    <CardTitle className="text-2xl">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {pillar.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Simple, Intelligent, and Secure
            </h2>
            <p className="text-xl text-muted-foreground">
              Designed to make managing money effortless
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Phone Mockup */}
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-90" />
                <div className="relative bg-[#1a1a1a] rounded-[3rem] p-3 shadow-2xl">
                  <div className="rounded-[2.5rem] overflow-hidden w-72">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Shot%202026-02-14%20at%204.03.22%20AM-8OpcurHBhV7hxosnloCKgdN93t2HFz.png"
                      alt="WuriePay App - Full Dashboard"
                      width={288}
                      height={620}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>

              {/* Balance Card Preview */}
              <div className="flex flex-col gap-6">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Shot%202026-02-14%20at%204.03.22%20AM%20copy-LxayNz8Zr3l590jwlIA3Cy3fv641JK.png"
                    alt="WuriePay Wallet Balance Card"
                    width={320}
                    height={180}
                    className="w-80 h-auto"
                  />
                </div>
                <div className="text-center md:text-left">
                  <p className="font-semibold text-foreground mb-1">Multi-Currency Wallet</p>
                  <p className="text-sm text-muted-foreground">Support for GNF, SLL, USD, and more</p>
                </div>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-8 italic">
              Wallet dashboard, payment interface, and AI financial insights
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Why Choose WuriePay</h2>
            <p className="text-xl text-muted-foreground">
              Real outcomes for real people
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Zap className="w-8 h-8 text-primary" />,
                title: "Send Money Instantly",
                description: "Transfer money quickly and securely to anyone, anywhere."
              },
              {
                icon: <DollarSign className="w-8 h-8 text-primary" />,
                title: "Pay Bills in Seconds",
                description: "Manage utilities and everyday expenses from one place."
              },
              {
                icon: <Brain className="w-8 h-8 text-primary" />,
                title: "Understand Your Money",
                description: "AI insights help users track spending and plan better finances."
              },
              {
                icon: <Building2 className="w-8 h-8 text-primary" />,
                title: "Built for African Businesses",
                description: "Tools that help entrepreneurs accept payments and grow revenue."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border bg-card hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Security and Trust Built Into the Platform</h2>
            <p className="text-xl text-muted-foreground">
              Your money and data are protected with industry-leading security
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: <Shield className="w-6 h-6 text-primary" />, text: "Secure identity verification" },
              { icon: <Lock className="w-6 h-6 text-primary" />, text: "Advanced fraud monitoring" },
              { icon: <CheckCircle className="w-6 h-6 text-primary" />, text: "Encrypted financial infrastructure" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full border-border bg-card">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      {item.icon}
                    </div>
                    <p className="font-semibold">{item.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">
              Built by Founders Committed to {"Africa's"} Financial Future
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Alhaji Wurie Jalloh",
                role: "Co-Founder & CEO",
                bio: "Entrepreneur focused on building financial technology infrastructure for Africa."
              },
              {
                name: "Hassan Wurie Jalloh",
                role: "Co-Founder & COO",
                bio: "Responsible for operations, partnerships, and scaling the platform."
              }
            ].map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-border bg-card hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-4 mx-auto">
                      <Users className="w-12 h-12 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-center">{founder.name}</CardTitle>
                    <CardDescription className="text-center font-semibold text-primary text-base">{founder.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{founder.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Referral Growth Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className="border-2 border-primary/30 shadow-2xl bg-card">
              <CardHeader className="text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Share2 className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-3xl md:text-4xl mb-4">Move Up the Waitlist</CardTitle>
                <CardDescription className="text-lg">
                  Invite friends and move up the early access list
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{"Invite 3 friends → Priority Access"}</div>
                      <div className="text-sm text-muted-foreground">Get early access to the platform</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{"Invite 10 friends → Beta Testing Access"}</div>
                      <div className="text-sm text-muted-foreground">Help shape the product before launch</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-muted/50 rounded-lg">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">{"Invite 25 friends → Exclusive Founder Call"}</div>
                      <div className="text-sm text-muted-foreground">Direct conversation with the founders</div>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="w-full mt-6" variant="default">
                  <Share2 className="mr-2 w-5 h-5" />
                  Get Your Referral Link
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Final Conversion Section */}
      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="border-2 border-primary/20 shadow-2xl bg-card">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl md:text-4xl mb-4">
                  Be Among the First to Access WuriePay
                </CardTitle>
                <CardDescription className="text-lg">
                  Join the early access list and receive updates about the upcoming launch
                </CardDescription>
              </CardHeader>
              <CardContent>
                <WaitlistForm onSubmit={handleWaitlistSubmit} showHeadline={false} />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wuriepay-logo-EDnXEa8UX7aE4rzLWQhGkU3Q4vIktk.png"
                  alt="WuriePay"
                  width={140}
                  height={50}
                  className="h-10 w-auto"
                />
              </div>
              <p className="text-xs text-muted-foreground mb-1">by WurieGroup</p>
              <p className="text-muted-foreground mb-4">
                {"Africa's"} AI-Powered Financial Platform
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:contact@wuriepay.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="mailto:contact@wuriepay.com" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-muted-foreground text-sm">
            <p>&copy; 2026 WuriePay by WurieGroup. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
