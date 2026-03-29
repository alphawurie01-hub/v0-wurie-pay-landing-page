import { Twitter, Linkedin, Facebook, Mail } from "lucide-react"

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/wuriepay", label: "LinkedIn" },
  { icon: Facebook, href: "https://facebook.com/wuriepay", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/wuriepay", label: "X" },
]

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Contact", href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img 
                src="/images/wuriepay-logo.png" 
                alt="WuriePay"
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="text-lg font-bold">
                <span className="text-background">Wurie</span>
                <span className="text-[#00A86B]">Pay</span>
              </span>
            </div>
            <p className="text-sm text-background/60 mb-2">
              A <span className="text-primary font-medium">WurieGroup</span> company
            </p>
            <p className="text-sm text-background/60">
              Building the future of finance in Africa
            </p>
          </div>

          {/* Contact & Social Icons */}
          <div className="flex flex-col sm:items-end gap-4">
            <a 
              href="mailto:info@wuriepay.com" 
              className="flex items-center gap-2 text-background/60 hover:text-primary transition-colors text-sm"
            >
              <Mail className="w-4 h-4" />
              info@wuriepay.com
            </a>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/60 hover:text-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-background/40">
            © {new Date().getFullYear()} WuriePay. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerLinks.map((link, index) => (
              <a 
                key={index}
                href={link.href}
                className="text-sm text-background/60 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
