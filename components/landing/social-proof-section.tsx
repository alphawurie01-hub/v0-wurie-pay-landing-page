"use client"

import { useEffect, useState } from "react"
import { Users } from "lucide-react"

export function SocialProofSection() {
  const [count, setCount] = useState(0)
  const targetCount = 8472

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = targetCount / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= targetCount) {
        setCount(targetCount)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-card border-y border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Users className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                Join the growing community building the future of African finance.
              </h2>
            </div>
          </div>
          
          <div className="flex items-center gap-4 bg-background rounded-2xl px-8 py-4 border border-border/50">
            <div className="text-center">
              <p className="text-4xl sm:text-5xl font-bold text-primary tabular-nums">
                {count.toLocaleString()}+
              </p>
              <p className="text-sm text-muted-foreground mt-1">people already waiting for WuriePay</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
