"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Security", href: "#security" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToWaitlist = () => {
    document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wuriepay-logo-EDnXEa8UX7aE4rzLWQhGkU3Q4vIktk.png" 
              alt="WuriePay"
              className="h-10 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <Button onClick={scrollToWaitlist}>
              Join Waitlist
            </Button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button onClick={scrollToWaitlist} className="mt-2">
                Join Waitlist
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
