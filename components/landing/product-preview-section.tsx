import { Smartphone, TrendingUp, Sparkles, ArrowUpRight, ArrowDownLeft } from "lucide-react"

export function ProductPreviewSection() {
  return (
    <section className="py-20 lg:py-28 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Experience the future of finance
          </h2>
          <p className="text-lg text-muted-foreground">
            Designed to make managing money simple, intelligent, and secure.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Wallet Dashboard */}
          <div className="bg-card rounded-3xl p-6 border border-border/50 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Smartphone className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Wallet Dashboard</h3>
            </div>
            
            <div className="bg-primary rounded-2xl p-5 text-primary-foreground mb-6">
              <p className="text-sm opacity-80">Available Balance</p>
              <p className="text-3xl font-bold mt-1">$4,285.50</p>
              <div className="flex gap-3 mt-4">
                <button className="flex-1 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-xl py-2 text-sm font-medium transition-colors">
                  <ArrowUpRight className="w-4 h-4 inline mr-1" /> Send
                </button>
                <button className="flex-1 bg-primary-foreground/20 hover:bg-primary-foreground/30 rounded-xl py-2 text-sm font-medium transition-colors">
                  <ArrowDownLeft className="w-4 h-4 inline mr-1" /> Request
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {[
                { name: "Savings", amount: "$2,150.00", percent: "+5.2%" },
                { name: "Investments", amount: "$1,800.00", percent: "+12.8%" },
              ].map((account, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-secondary rounded-xl">
                  <span className="text-sm font-medium text-foreground">{account.name}</span>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-foreground">{account.amount}</span>
                    <span className="text-xs text-primary ml-2">{account.percent}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment Screen */}
          <div className="bg-card rounded-3xl p-6 border border-border/50 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Send Money</h3>
            </div>

            <div className="space-y-4">
              <div className="text-center py-6">
                <p className="text-sm text-muted-foreground mb-2">Enter Amount</p>
                <p className="text-5xl font-bold text-foreground">$250<span className="text-muted-foreground">.00</span></p>
              </div>

              <div className="bg-secondary rounded-xl p-4">
                <p className="text-xs text-muted-foreground mb-2">Send to</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-semibold text-primary">FK</span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Fatmata Kamara</p>
                    <p className="text-xs text-muted-foreground">+232 76 XXX XXX</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "⌫"].map((key, i) => (
                  <button 
                    key={i} 
                    className="h-12 rounded-xl bg-secondary hover:bg-muted text-foreground font-medium transition-colors"
                  >
                    {key}
                  </button>
                ))}
              </div>

              <button className="w-full bg-primary text-primary-foreground rounded-xl py-3 font-semibold">
                Send $250.00
              </button>
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
                      {"You've"} spent 40% more on transport this month. Consider carpooling to save ~$85/month.
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
                    { category: "Food & Groceries", spent: 450, budget: 500 },
                    { category: "Transport", spent: 280, budget: 200 },
                    { category: "Entertainment", spent: 120, budget: 150 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-foreground">{item.category}</span>
                        <span className="text-muted-foreground">${item.spent}/${item.budget}</span>
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
                  {"\"Based on your income pattern, you could save $320 more per month by adjusting your subscriptions.\""}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
