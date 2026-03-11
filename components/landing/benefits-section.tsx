import { Zap, Receipt, Brain, Store } from "lucide-react"

const benefits = [
  {
    icon: Zap,
    title: "Send Money Instantly",
    description: "Transfer money quickly and securely to anyone, anywhere in Africa and beyond — with low fees and real-time delivery."
  },
  {
    icon: Receipt,
    title: "Pay Bills Easily",
    description: "Pay utilities, airtime, internet, and everyday expenses from one place. No more juggling multiple apps."
  },
  {
    icon: Brain,
    title: "Understand Your Money",
    description: "AI-powered insights help you track spending, identify patterns, and improve your financial habits automatically."
  },
  {
    icon: Store,
    title: "Built for African Businesses",
    description: "Accept payments, track revenue, and grow your business with tools designed specifically for African entrepreneurs."
  }
]

export function BenefitsSection() {
  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything you need in one app
          </h2>
          <p className="text-lg text-muted-foreground">
            WuriePay brings together all your financial needs with powerful features designed for how Africans actually use money.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group relative bg-background rounded-2xl p-8 border border-border/50 hover:border-primary/30 hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <benefit.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
