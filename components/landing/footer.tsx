import { Twitter, Linkedin, Instagram, Facebook, Mail } from "lucide-react"

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
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
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-xl font-bold text-primary-foreground">W</span>
              </div>
              <span className="text-2xl font-bold text-background">WuriePay</span>
            </div>
            <p className="text-background/60 mb-6 max-w-md">
              The future of finance in Africa. Send money, pay bills, and manage your finances with AI — all in one secure platform.
            </p>
            <p className="text-sm text-background/40">
              A product of <span className="text-primary font-medium">WurieGroup</span>
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
