"use client"

import { Button } from "@/components/ui/button"
import { Gift, Users, Star, MessageCircle, Share2 } from "lucide-react"

const rewards = [
  {
    icon: Users,
    friends: 3,
    reward: "Priority Access",
    description: "Skip the line and get early access to WuriePay"
  },
  {
    icon: Star,
    friends: 10,
    reward: "Beta Tester Access",
    description: "Help shape the product with exclusive beta features"
  },
  {
    icon: MessageCircle,
    friends: 25,
    reward: "Exclusive Founder Q&A",
    description: "Join a private session with the WuriePay founders"
  }
]

export function ReferralSection() {
  const handleShare = (platform: string) => {
    const shareText = "Join me on the WuriePay waitlist! The future of finance in Africa starts here."
    const shareUrl = "https://wuriepay.com"
    
    const urls: Record<string, string> = {
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      whatsapp: `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    }
    
    window.open(urls[platform], "_blank", "width=600,height=400")
  }

  return (
    <section className="py-20 lg:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-primary rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full blur-3xl" />
          
          <div className="relative">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <div className="w-16 h-16 bg-primary-foreground/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-primary-foreground" />
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Move up the waitlist
              </h2>
              <p className="text-lg text-primary-foreground/80">
                Invite friends and move higher in the early access list. The more you share, the better your rewards.
              </p>
            </div>

            {/* Rewards grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {rewards.map((reward, index) => (
                <div 
                  key={index}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary-foreground/20"
                >
                  <div className="w-12 h-12 bg-primary-foreground/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <reward.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <p className="text-sm text-primary-foreground/70 mb-2">Invite {reward.friends} friends</p>
                  <h3 className="text-xl font-bold text-primary-foreground mb-2">{reward.reward}</h3>
                  <p className="text-sm text-primary-foreground/70">{reward.description}</p>
                </div>
              ))}
            </div>

            {/* Share buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <span className="text-primary-foreground font-medium flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Share now:
              </span>
              <div className="flex gap-3">
                <Button 
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  onClick={() => handleShare("twitter")}
                >
                  Twitter / X
                </Button>
                <Button 
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  onClick={() => handleShare("whatsapp")}
                >
                  WhatsApp
                </Button>
                <Button 
                  variant="secondary"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  onClick={() => handleShare("facebook")}
                >
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
