"use client"

import React, { useEffect, useMemo, useState } from "react"
import { useParams, usePathname } from "next/navigation"
import Link from "next/link"
import { WaitlistForm } from "@/components/waitlist-form"
import { getCopy, normalizeLocale, type Locale } from "@/lib/i18n"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getWaitlistCount } from "@/app/actions/waitlist"
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
  Users,
  TrendingUp,
  DollarSign,
  Sparkles,
  Gift,
  Award,
  Target,
} from "lucide-react"

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
const Logo = ({ className, size = "default", inverted = false }: { className?: string; size?: "sm" | "default" | "lg"; inverted?: boolean }) => {
  const sizeClasses = {
    sm: "h-8 w-auto",
    default: "h-10 w-auto",
    lg: "h-14 w-auto",
  }

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <img
        src="/images/wuriepay-logo.png"
        alt="WuriePay"
        className={cn(sizeClasses[size], inverted && "brightness-0 invert")}
      />
      <span
        className={cn(
          "font-bold",
          size === "sm" && "text-lg",
          size === "default" && "text-xl",
          size === "lg" && "text-2xl"
        )}
      >
        <span className={inverted ? "text-background" : "text-foreground"}>Wurie</span>
        <span className="text-[#00A86B]">Pay</span>
      </span>
    </div>
  )
}

function useLocale(): Locale {
  const params = useParams<{ locale?: string }>()
  return normalizeLocale(params?.locale)
}

// Header
const Header = ({ copy, locale }: { copy: ReturnType<typeof getCopy>; locale: Locale }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToWaitlist = () => {
    const waitlistSection = document.getElementById("waitlist-form")
    if (waitlistSection) {
      waitlistSection.scrollIntoView({ behavior: "smooth", block: "center" })
    }
    setIsOpen(false)
  }

  const otherLocale: Locale = locale === "fr" ? "en" : "fr"
  const otherLabel = otherLocale === "fr" ? copy.nav.french : copy.nav.english

  const switchHref = useMemo(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : ""
    const nextPath = pathname.replace(/^\/(en|fr)(\/|$)/, `/${otherLocale}$2`)
    return `${nextPath}${hash}`
  }, [pathname, otherLocale])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled && "border-b bg-background/80 backdrop-blur-lg"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {copy.nav.features}
            </a>
            <a href="#solution" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {copy.nav.solution}
            </a>
            <a href="#security" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {copy.nav.security}
            </a>
            <a href="#team" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              {copy.nav.team}
            </a>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Button onClick={scrollToWaitlist} className="bg-[#00A86B] hover:bg-[#00A86B]/90">
              {copy.nav.joinWaitlist}
            </Button>

            <Button asChild variant="outline">
              <Link href={switchHref} aria-label={copy.nav.language}>
                {otherLabel}
              </Link>
            </Button>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" aria-label="Toggle menu">
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
                <a href="#features" className="block text-sm font-medium">
                  {copy.nav.features}
                </a>
                <a href="#solution" className="block text-sm font-medium">
                  {copy.nav.solution}
                </a>
                <a href="#security" className="block text-sm font-medium">
                  {copy.nav.security}
                </a>
                <a href="#team" className="block text-sm font-medium">
                  {copy.nav.team}
                </a>
                <Button onClick={scrollToWaitlist} className="w-full bg-[#00A86B] hover:bg-[#00A86B]/90">
                  {copy.nav.joinWaitlist}
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link href={switchHref}>{otherLabel}</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

// Hero Section with Inline Waitlist
const HeroSection = ({ copy }: { copy: ReturnType<typeof getCopy> }) => {
  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-[#00A86B]/20 blur-3xl" />
        <div className="absolute right-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-teal-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <Badge className="mb-4 w-fit bg-[#00A86B]/10 text-[#00A86B] hover:bg-[#00A86B]/20">
              <Sparkles className="mr-1 h-3 w-3" />
              {copy.hero.badge}
            </Badge>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              {copy.hero.titleA}{" "}
              <span className="text-[#00A86B]">{copy.hero.titleB}</span>
            </h1>

            <p className="mt-6 text-lg text-muted-foreground">{copy.hero.tagline}</p>

            <div className="mt-8 flex flex-wrap gap-4">
              {copy.hero.bullets.map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#00A86B]" />
                  <span className="text-sm">{b}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            id="waitlist-form"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="border-2 overflow-hidden">
              <CardHeader className="relative">
                <div className="absolute -right-4 -top-4 h-24 w-24 opacity-5">
                  <img src="/images/wuriepay-logo.png" alt="" className="h-full w-full object-contain" aria-hidden="true" />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <img src="/images/wuriepay-logo.png" alt="WuriePay" className="h-6 w-auto" />
                  <span className="text-xs font-medium text-muted-foreground">{copy.hero.earlyAccess}</span>
                </div>
                <CardTitle>{copy.hero.waitlistTitle}</CardTitle>
                <CardDescription>{copy.hero.waitlistDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <WaitlistForm idPrefix="hero-" copy={copy} />
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const ProblemSection = ({ copy }: { copy: ReturnType<typeof getCopy> }) => {
  const problems = [
    { icon: DollarSign, title: copy.problem.items[0].title, desc: copy.problem.items[0].desc },
    { icon: Users, title: copy.problem.items[1].title, desc: copy.problem.items[1].desc },
    { icon: TrendingUp, title: copy.problem.items[2].title, desc: copy.problem.items[2].desc },
    { icon: Store, title: copy.problem.items[3].title, desc: copy.problem.items[3].desc },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{copy.problem.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{copy.problem.sub}</p>
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

const SolutionSection = ({ copy }: { copy: ReturnType<typeof getCopy> }) => {
  const pillars = [
    { title: copy.solution.pillars.payments.title, icon: Wallet, features: copy.solution.pillars.payments.features },
    { title: copy.solution.pillars.ai.title, icon: Brain, features: copy.solution.pillars.ai.features },
    { title: copy.solution.pillars.blockchain.title, icon: Globe, features: copy.solution.pillars.blockchain.features },
  ]

  return (
    <section id="solution" className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{copy.solution.heading}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">{copy.solution.sub}</p>
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

const BenefitsSection = ({ copy }: { copy: ReturnType<typeof getCopy> }) => {
  const benefits = [
    { icon: Wallet, title: copy.benefits.items[0].title, desc: copy.benefits.items[0].desc },
    { icon: CreditCard, title: copy.benefits.items[1].title, desc: copy.benefits.items[1].desc },
    { icon: Brain, title: copy.benefits.items[2].title, desc: copy.benefits.items[2].desc },
    { icon: Zap, title: copy.benefits.items[3].title, desc: copy.benefits.items[3].desc },
    { icon: Globe, title: copy.benefits.items[4].title, desc: copy.benefits.items[4].desc },
    { icon: Store, title: copy.benefits.items[5].title, desc: copy.benefits.items[5].desc },
  ]

  return (
    <section id="features" className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{copy.benefits.heading}</h2>
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

const WhyDifferentSection = ({ copy }: { copy: ReturnType<typeof getCopy> }) => {
  const differentiators = [
    { icon: Brain, title: copy.different.items[0].title, desc: copy.different.items[0].desc },
    { icon: Globe, title: copy.different.items[1].title, desc: copy.different.items[1].desc },
    { icon: Zap, title: copy.different.items[2].title, desc: copy.different.items[2].desc },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{copy.different.heading}</h2>
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

const SecuritySection = ({ copy }: { copy: ReturnType<typeof getCopy> }) => {
  const features = [
    { icon: Shield, title: copy.security.items[0].title, desc: copy.security.items[0].desc },
    { icon: Lock, title: copy.security.items[1].title, desc: copy.security.items[1].desc },
    { icon: Eye, title: copy.security.items[2].title, desc: copy.security.items[2].desc },
    { icon: CheckCircle2, title: copy.security.items[3].title, desc: copy.security.items[3].desc },
  ]

  return (
    <section id="security" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#00A86B]/10">
            <img src="/images/wuriepay-logo.png" alt="WuriePay Security" className="h-10 w-auto" />
          </div>
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{copy.security.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{copy.security.sub}</p>
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

const TeamSection = ({ copy }: { copy: ReturnType<typeof getCopy> }) => {
  const founders = copy.team.founders

  return (
    <section id="team" className="bg-muted/30 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl text-balance">{copy.team.heading}</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">{copy.team.sub}</p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {founders.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full overflow-hidden">
                <div className="flex flex-col p-6 sm:p-8">
                  <div className="flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
                    <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border-4 border-[#00A86B]/20 sm:h-32 sm:w-32">
                      <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="mt-4 sm:ml-6 sm:mt-0">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="mt-1 text-sm font-medium text-[#00A86B]">{member.role}</p>
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-[#0A66C2] transition-colors"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{member.bio}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <Card className="border-[#00A86B]/20 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 dark:from-emerald-950/20 dark:to-teal-950/20">
            <CardContent className="p-6 sm:p-8">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#00A86B]/10">
                  <Target className="h-6 w-6 text-[#00A86B]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{copy.team.missionTitle}</h3>
                <p className="mt-3 max-w-2xl text-muted-foreground italic">“{copy.team.missionQuote}”</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

const ReferralSection = ({ copy }: { copy: ReturnType<typeof getCopy> }) => {
  const rewards = [
    { icon: Target, ...copy.referral.rewards[0] },
    { icon: Award, ...copy.referral.rewards[1] },
    { icon: Gift, ...copy.referral.rewards[2] },
  ]

  const shareMessage = encodeURIComponent(copy.referral.shareMessage)
  const shareUrl =
    typeof window !== "undefined" ? encodeURIComponent(window.location.href) : encodeURIComponent("https://wuriepay.com")

  const shareLinks = [
    {
      name: "WhatsApp",
      color: "bg-[#25D366] hover:bg-[#25D366]/90",
      url: `https://wa.me/?text=${shareMessage}%20${shareUrl}`,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      color: "bg-[#1877F2] hover:bg-[#1877F2]/90",
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "Telegram",
      color: "bg-[#0088cc] hover:bg-[#0088cc]/90",
      url: `https://t.me/share/url?url=${shareUrl}&text=${shareMessage}`,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
    },
    {
      name: "X",
      color: "bg-black hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",
      url: `https://twitter.com/intent/tweet?text=${shareMessage}&url=${shareUrl}`,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      color: "bg-[#0A66C2] hover:bg-[#0A66C2]/90",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`,
      icon: (
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      name: "Email",
      color: "bg-gray-600 hover:bg-gray-600/90",
      url: `mailto:?subject=${encodeURIComponent(copy.referral.emailSubject)}&body=${shareMessage}%20${shareUrl}`,
      icon: <Mail className="h-5 w-5" />,
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">{copy.referral.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">{copy.referral.sub}</p>
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
                  <Badge className="mx-auto mt-4 w-fit bg-[#00A86B]/10 text-[#00A86B] hover:bg-[#00A86B]/20">
                    {copy.referral.inviteNFriends(reward.count)}
                  </Badge>
                  <CardTitle className="mt-2">{reward.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{reward.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-lg font-medium">{copy.referral.shareWithFriends}</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:flex md:flex-wrap md:justify-center md:gap-4">
            {shareLinks.map((link, index) => (
              <Button key={index} className={cn("text-white w-full md:w-auto", link.color)} size="lg" asChild>
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${link.name}`}>
                  {link.icon}
                  <span className="ml-2">{link.name}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function LocalizedLandingPage() {
  const locale = useLocale()
  const copy = useMemo(() => getCopy(locale), [locale])

  return (
    <div className="min-h-screen bg-background">
      <Header copy={copy} locale={locale} />
      <main>
        <HeroSection copy={copy} />
        <section className="py-12 text-center border-y bg-muted/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold sm:text-3xl">
              {copy.earlyAccess.heading}
              <br />
              {copy.earlyAccess.subheading}
            </h2>
            <div className="mt-8">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90">
                {copy.earlyAccess.buttonText}
              </button>
            </div>
          </div>
        </section>
        <ProblemSection copy={copy} />
        <SolutionSection copy={copy} />
        <BenefitsSection copy={copy} />
        <WhyDifferentSection copy={copy} />
        <SecuritySection copy={copy} />
        <TeamSection copy={copy} />
        <ReferralSection copy={copy} />
      </main>
      <footer className="border-t bg-muted/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <Logo />
              <p className="mt-4 text-sm text-muted-foreground">{copy.footer.companyLine}</p>
              <p className="mt-2 text-sm text-muted-foreground">{copy.footer.tagline}</p>
              <div className="mt-4 flex gap-4">
                <a
                  href="https://www.linkedin.com/company/wuriegroup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[#0A66C2] transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="https://www.facebook.com/share/1UK6epA3tv/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-[#1877F2] transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="mailto:info@wuriepay.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold">{copy.footer.product}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-foreground">
                    {copy.nav.features}
                  </a>
                </li>
                <li>
                  <a href="#solution" className="hover:text-foreground">
                    {copy.nav.solution}
                  </a>
                </li>
                <li>
                  <a href="#security" className="hover:text-foreground">
                    {copy.nav.security}
                  </a>
                </li>
                <li>
                  <a href="#team" className="hover:text-foreground">
                    {copy.nav.team}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} {copy.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

