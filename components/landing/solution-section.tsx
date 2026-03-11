import { Wallet, Brain, Globe, CreditCard, PiggyBank, Receipt, Sparkles, TrendingUp, Bot, ShieldCheck, Network, Coins } from "lucide-react"

const pillars = [
  {
    title: "Payments",
    description: "Move money seamlessly",
    icon: Wallet,
    color: "bg-primary",
    features: [
      { icon: CreditCard, label: "Send and receive money" },
      { icon: Receipt, label: "Merchant payments" },
      { icon: PiggyBank, label: "Bill payments" },
      { icon: Wallet, label: "Digital wallet" },
    ]
  },
  {
    title: "AI Finance",
    description: "Intelligent money management",
    icon: Brain,
    color: "bg-primary",
    features: [
      { icon: Sparkles, label: "Smart financial insights" },
      { icon: TrendingUp, label: "Automated budgeting" },
      { icon: Bot, label: "AI financial assistant" },
      { icon: ShieldCheck, label: "Credit scoring" },
    ]
  },
  {
    title: "Global Infrastructure",
    description: "Built for the modern world",
    icon: Globe,
    color: "bg-primary",
    features: [
      { icon: Network, label: "Cross-border payments" },
      { icon: Globe, label: "Modern financial rails" },
      { icon: Coins, label: "Digital asset support" },
      { icon: ShieldCheck, label: "Enterprise security" },
    ]
  }
]

export function SolutionSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Meet <span className="text-primary">WuriePay</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            WuriePay is a modern fintech platform designed for Africa that combines payments, artificial intelligence, and next-generation financial infrastructure into one powerful app.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div 
              key={index}
              className="group relative bg-background rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className={`w-14 h-14 ${pillar.color} rounded-2xl flex items-center justify-center`}>
                  <pillar.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground">{pillar.description}</p>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {pillar.features.map((feature, featureIndex) => (
                  <div 
                    key={featureIndex}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <div className="w-9 h-9 bg-secondary rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{feature.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
