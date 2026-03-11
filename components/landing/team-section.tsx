import { Linkedin, Twitter } from "lucide-react"

const founders = [
  {
    name: "Alhaji Wurie Jalloh",
    role: "Co-Founder & CEO",
    bio: "Entrepreneur focused on building financial infrastructure for Africa's digital economy.",
    initials: "AW"
  },
  {
    name: "Hassan Wurie Jalloh",
    role: "Co-Founder & COO",
    bio: "Responsible for operations, partnerships, and scaling the WuriePay platform.",
    initials: "HW"
  }
]

export function TeamSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Built by founders committed to Africa&apos;s financial future
          </h2>
          <p className="text-lg text-muted-foreground">
            Our team combines deep expertise in fintech, technology, and African markets to build solutions that work for real people.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 text-center"
            >
              {/* Avatar */}
              <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-primary-foreground">{founder.initials}</span>
              </div>

              {/* Info */}
              <h3 className="text-2xl font-bold text-foreground mb-1">{founder.name}</h3>
              <p className="text-primary font-medium mb-4">{founder.role}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{founder.bio}</p>

              {/* Social links */}
              <div className="flex justify-center gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                  aria-label={`${founder.name} on LinkedIn`}
                >
                  <Linkedin className="w-5 h-5 text-foreground" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center hover:bg-primary/10 transition-colors"
                  aria-label={`${founder.name} on Twitter`}
                >
                  <Twitter className="w-5 h-5 text-foreground" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
