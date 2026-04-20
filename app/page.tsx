import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { GoalsSection } from "@/components/goals-section"
import { InitiativesSection } from "@/components/initiatives-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function AIForGoodPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <MissionSection />
      <GoalsSection />
      <InitiativesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
