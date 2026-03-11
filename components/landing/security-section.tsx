import { Shield, Fingerprint, Eye, Lock } from "lucide-react"

const securityFeatures = [
  {
    icon: Fingerprint,
    title: "Secure Identity Verification",
    description: "Advanced KYC with biometric authentication ensures only you can access your account."
  },
  {
    icon: Eye,
    title: "Advanced Fraud Monitoring",
    description: "AI-powered systems detect and prevent suspicious activity in real-time, 24/7."
  },
  {
    icon: Lock,
    title: "Encrypted Infrastructure",
    description: "Bank-grade 256-bit encryption protects every transaction and piece of data."
  },
  {
    icon: Shield,
    title: "Privacy-First Technology",
    description: "Your data belongs to you. We never sell your information to third parties."
  }
]

export function SecuritySection() {
  return (
    <section className="py-20 lg:py-28 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-8">
              <Shield className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">
              Security built into every transaction
            </h2>
            <p className="text-lg text-background/70 leading-relaxed">
              Your financial safety is our top priority. WuriePay employs multiple layers of security to protect your money and personal information at all times.
            </p>
          </div>

          {/* Right content - Feature grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => (
              <div 
                key={index}
                className="bg-background/5 backdrop-blur-sm rounded-2xl p-6 border border-background/10 hover:bg-background/10 transition-colors"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-background mb-2">{feature.title}</h3>
                <p className="text-sm text-background/60 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
