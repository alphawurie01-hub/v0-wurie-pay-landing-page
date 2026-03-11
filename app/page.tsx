"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Wallet,
  CreditCard,
  Brain,
  Zap,
  Globe,
  Store,
  Shield,
  Lock,
  Eye,
  CheckCircle2,
  Menu,
  X,
  Mail,
  ArrowRight,
  Users,
  TrendingUp,
  DollarSign,
  Sparkles,
  Share2,
  Gift,
  Award,
  Target,
} from "lucide-react"

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
  "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru",
  "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman",
  "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal",
  "Qatar", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe",
  "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia",
  "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria",
  "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey",
  "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu",
  "Vatican City", "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
]

// Animated Counter
const AnimatedCounter = ({ value, duration = 2 }: { value: number; duration?: number }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(value * progress))
        animationFrame = requestAnimationFrame(animate)
      } else {
        setCount(value)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [value, duration])

  return <span>{count.toLocaleString()}</span>
}

// Logo Component
const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00A86B]">
        <Wallet className="h-6 w-6 text-white" />
      </div>
      <span className="text-xl font-bold">
        <span className="text-foreground">Wurie</span>
        <span className="text-[#00A86B]">Pay</span>
      </span>
    </div>
  )
}

// Header
const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 z-50 w-full transition-all duration-300",
      isScrolled && "border-b bg-background/80 backdrop-blur-lg"
    )}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />
          
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Features</a>
            <a href="#solution" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Solution</a>
            <a href="#security" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Security</a>
            <a href="#team" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Team</a>
          </div>

          <Button className="hidden md:inline-flex bg-[#00A86B] hover:bg-[#00A86B]/90">
            Join Waitlist
          </Button>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden"
            >
              <div className="space-y-4 py-4">
                <a href="#features" className="block text-sm font-medium">Features</a>
                <a href="#solution" className="block text-sm font-medium">Solution</a>
                <a href="#security" className="block text-sm font-medium">Security</a>
                <a href="#team" className="block text-sm font-medium">Team</a>
                <Button className="w-full bg-[#00A86B] hover:bg-[#00A86B]/90">Join Waitlist</Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

// Hero Section with Inline Waitlist
const HeroSection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", country: "" })

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#00A86B]/20 blur-3xl" />
        <div className="absolute right-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-teal-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <Badge className="mb-4 w-fit bg-[#00A86B]/10 text-[#00A86B] hover:bg-[#00A86B]/20">
              <Sparkles className="mr-1 h-3 w-3" />
              Launching Soon
            </Badge>
            
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              The Future of Finance in Africa{" "}
              <span className="text-[#00A86B]">
                Starts Here
              </span>
            </h1>
            
            <p className="mt-6 text-lg text-muted-foreground">
              Send money, pay bills, and manage your finances with AI — all inside one secure financial platform designed for Africa.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#00A86B]" />
                <span className="text-sm">Secure & Encrypted</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#00A86B]" />
                <span className="text-sm">AI-Powered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#00A86B]" />
                <span className="text-sm">Built for Africa</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Waitlist Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-2">
              <CardHeader>
                <CardTitle>Join the Early Access Waitlist</CardTitle>
                <CardDescription>
                  Early access users will receive priority onboarding and exclusive beta features.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select value={formData.country} onValueChange={(value) => setFormData({ ...formData, country: value })}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        {allCountries.map((country) => (
                          <SelectItem key={country} value={country.toLowerCase().replace(/\s+/g, '-')}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button type="submit" className="w-full bg-[#00A86B] hover:bg-[#00A86B]/90" size="lg">
                    Join the Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Social Proof Section
const SocialProofSection = () => {
  return (
    <section className="border-y bg-muted/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Join the growing community building the future of African finance
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-2">
            <div className="flex items-center gap-2">
              <Users className="h-8 w-8 text-[#00A86B]" />
              <span className="text-4xl font-bold">
                <AnimatedCounter value={12847} />
              </span>
            </div>
            <p className="text-muted-foreground">
              people already waiting for WuriePay
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Problem Section
const ProblemSection = () => {
  const problems = [
    { icon: DollarSign, title: "Cross-border payments are expensive", desc: "High fees drain resources from businesses and families" },
    { icon: Users, title: "Millions remain unbanked", desc: "Traditional banking excludes too many people" },
    { icon: TrendingUp, title: "Financial tools are fragmented", desc: "Managing money requires juggling multiple apps" },
    { icon: Store, title: "Small businesses lack insights", desc: "Entrepreneurs need better financial analytics" },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Financial tools in Africa are outdated
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {"Legacy infrastructure like SWIFT wasn't designed for modern digital economies. It's time for change."}
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 dark:bg-red-900/20">
                    <problem.icon className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="mt-4 text-lg">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{problem.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Solution Section
const SolutionSection = () => {
  const pillars = [
    {
      title: "Payments",
      icon: Wallet,
      features: ["Send and receive money", "Merchant payments", "Bill payments", "Digital wallet"],
    },
    {
      title: "AI Finance",
      icon: Brain,
      features: ["Spending insights", "Smart budgeting", "AI financial assistant", "Credit scoring"],
    },
    {
      title: "Blockchain",
      icon: Globe,
      features: ["Cross-border payments", "Stablecoin wallets", "Decentralized savings"],
    },
  ]

  return (
    <section id="solution" className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Meet WuriePay</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
            WuriePay is a modern fintech platform designed for Africa that combines payments, artificial intelligence, and decentralized finance into one powerful app.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#00A86B]">
                    <pillar.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="mt-4">{pillar.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#00A86B]" />
                        <span className="text-sm">{feature}</span>
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
  )
}



// Key Features Section
const BenefitsSection = () => {
  const benefits = [
    { icon: Wallet, title: "Smart Wallet", desc: "Secure wallet for storing and sending money." },
    { icon: CreditCard, title: "Bill Payments", desc: "Pay utilities and everyday bills easily." },
    { icon: Brain, title: "AI Financial Assistant", desc: "Personal financial insights and recommendations." },
    { icon: Zap, title: "Instant Payments", desc: "Send money instantly to friends and businesses." },
    { icon: Globe, title: "Global Transfers", desc: "Low-cost cross-border payments." },
    { icon: Store, title: "Merchant Tools", desc: "Businesses can accept payments and track revenue." },
  ]

  return (
    <section id="features" className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Key Features</h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#00A86B]">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{benefit.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Why WuriePay Is Different Section
const WhyDifferentSection = () => {
  const differentiators = [
    {
      icon: Brain,
      title: "AI-Powered Finance",
      desc: "Smart tools that help users understand and grow their money.",
    },
    {
      icon: Globe,
      title: "Built for Africa",
      desc: "Designed for African businesses, entrepreneurs, and global remittances.",
    },
    {
      icon: Zap,
      title: "Future-Ready Infrastructure",
      desc: "Built with advanced technology to support modern financial services.",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Why WuriePay Is Different</h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="h-full text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#00A86B]">
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="mt-4">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Security Section
const SecuritySection = () => {
  const features = [
    { icon: Shield, title: "Secure identity verification", desc: "Multi-factor authentication protects your account" },
    { icon: Lock, title: "Advanced fraud monitoring", desc: "Real-time detection keeps your money safe" },
    { icon: Eye, title: "Encrypted financial infrastructure", desc: "Bank-level encryption for all transactions" },
    { icon: CheckCircle2, title: "Privacy-first technology", desc: "Your data is protected and never shared" },
  ]

  return (
    <section id="security" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Security built into every transaction</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Your security is our top priority. We use industry-leading technology to keep your money and data safe.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/20">
                <feature.icon className="h-7 w-7 text-[#00A86B]" />
              </div>
              <h3 className="mt-4 font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Team Section
const TeamSection = () => {
  const team = [
    {
      name: "Alhaji Wurie Jalloh",
      role: "Co-Founder & CEO",
      bio: "Entrepreneur focused on building financial infrastructure for Africa's digital economy.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alhaji&backgroundColor=b6e3f4",
    },
    {
      name: "Hassan Wurie Jalloh",
      role: "Co-Founder & COO",
      bio: "Responsible for operations, partnerships, and scaling the WuriePay platform.",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=hassan&backgroundColor=c0aede",
    },
  ]

  return (
    <section id="team" className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            {"Built by founders committed to Africa's financial future"}
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="overflow-hidden">
                <div className="flex flex-col items-center p-8 text-center sm:flex-row sm:text-left">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-32 w-32 rounded-full"
                  />
                  <div className="mt-4 sm:ml-6 sm:mt-0">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="mt-1 text-sm font-medium text-[#00A86B]">{member.role}</p>
                    <p className="mt-3 text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Referral/Invite Section
const ReferralSection = () => {
  const rewards = [
    { icon: Target, count: 3, title: "Priority Access", desc: "Get early access to WuriePay" },
    { icon: Award, count: 10, title: "Beta Tester Access", desc: "Join our exclusive beta program" },
    { icon: Gift, count: 25, title: "Founder Q&A Session", desc: "Meet the team behind WuriePay" },
  ]

  const shareLinks = [
    { 
      name: "WhatsApp", 
      color: "bg-[#25D366] hover:bg-[#25D366]/90",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      )
    },
    { 
      name: "Facebook", 
      color: "bg-[#1877F2] hover:bg-[#1877F2]/90",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: "Instagram", 
      color: "bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] hover:opacity-90",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: "X", 
      color: "bg-black hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    { 
      name: "Email", 
      color: "bg-gray-600 hover:bg-gray-600/90",
      icon: <Mail className="h-5 w-5" />
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">Move up the waitlist</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Invite friends and move higher in the early access list
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {rewards.map((reward, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#00A86B]">
                    <reward.icon className="h-8 w-8 text-white" />
                  </div>
                  <Badge className="mx-auto mt-4 w-fit bg-[#00A86B]/10 text-[#00A86B] hover:bg-[#00A86B]/20">Invite {reward.count} friends</Badge>
                  <CardTitle className="mt-2">{reward.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{reward.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Share Buttons */}
        <div className="mt-12 text-center">
          <p className="mb-6 text-lg font-medium">Share with friends</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center md:gap-4">
            {shareLinks.map((link, index) => (
              <Button 
                key={index} 
                className={cn("text-white w-full md:w-auto", link.color)}
                size="lg"
              >
                {link.icon}
                <span className="ml-2">{link.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
const FinalCTASection = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", country: "" })

  return (
    <section className="bg-[#00A86B] py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Be among the first to access WuriePay
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Join the early access list and receive updates about the upcoming launch.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="final-name">Full Name</Label>
                    <Input
                      id="final-name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="final-phone">Phone Number</Label>
                    <Input
                      id="final-phone"
                      type="tel"
                      placeholder="+234 800 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="final-email">Email Address</Label>
                    <Input
                      id="final-email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="final-country">Country</Label>
                    <Select value={formData.country} onValueChange={(value) => setFormData({ ...formData, country: value })}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent>
                        {allCountries.map((country) => (
                          <SelectItem key={country} value={country.toLowerCase().replace(/\s+/g, '-')}>
                            {country}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button type="submit" className="w-full bg-[#00A86B] hover:bg-[#00A86B]/90" size="lg">
                  Join the Waitlist
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

// Footer
const Footer = () => {
  return (
    <footer className="border-t bg-muted/30 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">A WurieGroup company</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Building the future of finance in Africa
            </p>
            <div className="mt-4 flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="mailto:hello@wuriepay.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Product</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground">Features</a></li>
              <li><a href="#solution" className="hover:text-foreground">Solution</a></li>
              <li><a href="#security" className="hover:text-foreground">Security</a></li>
              <li><a href="#team" className="hover:text-foreground">Team</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 WuriePay by WurieGroup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// Main App
export default function WuriePayLanding() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SocialProofSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <WhyDifferentSection />
        <SecuritySection />
        <TeamSection />
        <ReferralSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  )
}
