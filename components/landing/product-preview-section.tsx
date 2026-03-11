import { TrendingUp, Sparkles, Send, Receipt, Building2, Zap, MoreHorizontal } from "lucide-react"
import Image from "next/image"

export function ProductPreviewSection() {
  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Experience the future of finance
          </h2>
          <p className="text-lg text-muted-foreground">
            Designed to make managing money simple, intelligent, and secure.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Wallet Dashboard - Using actual mockup */}
          <div className="bg-card rounded-3xl p-6 border border-border/50 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Wallet Dashboard</h3>
            </div>
            
            {/* Actual mockup balance card */}
            <div className="rounded-2xl overflow-hidden mb-6 shadow-md">
              <Image 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Shot%202026-02-14%20at%204.03.22%20AM%20copy-LxayNz8Zr3l590jwlIA3Cy3fv641JK.png"
                alt="WuriePay Wallet Balance - 10,975,000.04 GNF"
                width={400}
                height={200}
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground mb-3">Quick Actions</p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: Send, label: "Envoyer" },
                  { icon: Receipt, label: "Factures" },
                  { icon: Zap, label: "Recharge" },
                ].map((action, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 p-3 bg-secondary rounded-xl">
                    <div className="w-10 h-10 bg-background rounded-full flex items-center justify-center border border-border">
                      <action.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{action.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Popular Services */}
          <div className="bg-card rounded-3xl p-6 border border-border/50 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <MoreHorizontal className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Popular Services</h3>
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Pay bills and services directly from your wallet</p>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  { name: "EDG", label: "Electricite" },
                  { name: "SEG", label: "Eau" },
                  { name: "CANAL+", label: "TV" },
                  { name: "StarTimes", label: "TV" },
                ].map((service, i) => (
                  <div key={i} className="bg-secondary rounded-xl p-4 text-center hover:bg-accent transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mx-auto mb-2 border border-border">
                      <span className="text-xs font-semibold text-foreground">{service.name.charAt(0)}</span>
                    </div>
                    <p className="text-sm font-medium text-foreground">{service.name}</p>
                    <p className="text-xs text-muted-foreground">{service.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mt-4">
                <p className="text-sm font-medium text-foreground">Recent Transactions</p>
                <p className="text-xs text-muted-foreground mt-1">View all your payment history in one place</p>
                <button className="text-sm font-medium text-primary mt-2 hover:underline">
                  Voir Tout
                </button>
              </div>
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-card rounded-3xl p-6 border border-border/50 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">AI Insights</h3>
            </div>

            <div className="space-y-4">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shrink-0">
                    <Sparkles className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Spending Alert</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {"You've"} spent 40% more on utilities this month. Consider energy-saving practices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-secondary rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-foreground">Monthly Overview</span>
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <div className="space-y-3">
                  {[
                    { category: "Electricity (EDG)", spent: 450000, budget: 500000 },
                    { category: "Water (SEG)", spent: 120000, budget: 150000 },
                    { category: "TV Services", spent: 85000, budget: 100000 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-foreground">{item.category}</span>
                        <span className="text-muted-foreground">{(item.spent/1000).toFixed(0)}K/{(item.budget/1000).toFixed(0)}K GNF</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${item.spent > item.budget ? "bg-destructive" : "bg-primary"}`}
                          style={{ width: `${Math.min((item.spent / item.budget) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-secondary rounded-xl p-4">
                <p className="text-sm font-medium text-foreground mb-2">AI Assistant</p>
                <div className="bg-background rounded-lg p-3 text-xs text-muted-foreground">
                  {"\"Based on your spending patterns, you could save 500,000 GNF per month by bundling your TV subscriptions.\""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
