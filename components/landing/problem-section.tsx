import { AlertTriangle, Globe, Users, BarChart3 } from "lucide-react"

const problems = [
  {
    icon: Globe,
    title: "Cross-border payments are expensive",
    description: "Traditional remittance services charge excessive fees, eating into hard-earned money sent to loved ones."
  },
  {
    icon: Users,
    title: "Millions remain unbanked",
    description: "Over 350 million adults in Africa lack access to basic financial services, limiting economic participation."
  },
  {
    icon: AlertTriangle,
    title: "Financial tools are fragmented",
    description: "Users juggle multiple apps and accounts to manage payments, bills, and savings — creating friction and confusion."
  },
  {
    icon: BarChart3,
    title: "Small businesses lack financial insights",
    description: "Entrepreneurs struggle to track revenue, understand cash flow, and make data-driven decisions."
  }
]

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Financial tools in Africa are outdated
          </h2>
          <p className="text-lg text-muted-foreground">
            Legacy financial infrastructure like SWIFT was not designed for modern digital economies. Africa deserves better.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="group relative bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 bg-destructive/10 rounded-xl flex items-center justify-center shrink-0">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{problem.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
