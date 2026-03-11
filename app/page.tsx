import { Navigation } from "@/components/landing/navigation"
import { HeroSection } from "@/components/landing/hero-section"
import { SocialProofSection } from "@/components/landing/social-proof-section"
import { ProblemSection } from "@/components/landing/problem-section"
import { SolutionSection } from "@/components/landing/solution-section"
import { ProductPreviewSection } from "@/components/landing/product-preview-section"
import { BenefitsSection } from "@/components/landing/benefits-section"
import { SecuritySection } from "@/components/landing/security-section"
import { TeamSection } from "@/components/landing/team-section"
import { ReferralSection } from "@/components/landing/referral-section"
import { FinalCtaSection } from "@/components/landing/final-cta-section"
import { Footer } from "@/components/landing/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <div id="waitlist">
        <HeroSection />
      </div>
      
      <SocialProofSection />
      
      <ProblemSection />
      
      <SolutionSection />
      
      <div id="features">
        <ProductPreviewSection />
      </div>
      
      <BenefitsSection />
      
      <div id="security">
        <SecuritySection />
      </div>
      
      <div id="team">
        <TeamSection />
      </div>
      
      <ReferralSection />
      
      <div id="contact">
        <FinalCtaSection />
      </div>
      
      <Footer />
    </main>
  )
}
