import { Twitter, Linkedin, Mail } from "lucide-react"

const socialLinks = [
  { icon: Twitter, href: "https://x.com/wuriepay", label: "X (Twitter)" },
  { icon: Linkedin, href: "https://linkedin.com/company/wuriepay", label: "LinkedIn" },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <img 
                src="/images/wuriepay-logo.png" 
                alt="WuriePay"
                className="h-12 w-auto brightness-0 invert sm:h-14"
              />
              <span className="text-xl font-bold sm:text-2xl">
                <span className="text-background">Wurie</span>
                <span className="text-[#00A86B]">Pay</span>
              </span>
            </div>
            <p className="text-background/60 mb-6 max-w-md">
              Building the future of finance in Africa.
            </p>
            <p className="text-sm text-background/40">
              A <span className="text-primary font-medium">WurieGroup</span> company
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-background mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a 
                href="mailto:hello@wuriepay.com" 
                className="flex items-center gap-2 text-background/60 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                hello@wuriepay.com
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-background mb-4">Follow Us</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-background/60 group-hover:text-primary-foreground transition-colors" />
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
