import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { AIEraSection } from "@/components/ai-era-section"
import { PillarsSection } from "@/components/pillars-section"
import { TheoryOfChangeSection } from "@/components/theory-of-change-section"
import { SDGSection } from "@/components/sdg-section"
import { GlobalReachSection } from "@/components/global-reach-section"
import { ProgramsSection } from "@/components/programs-section"
import { PartnersSection } from "@/components/partners-section"
import { CollaborationSection } from "@/components/collaboration-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function AIForGoodPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <AIEraSection />
      <PillarsSection />
      <TheoryOfChangeSection />
      <SDGSection />
      <GlobalReachSection />
      <ProgramsSection />
      <PartnersSection />
      <CollaborationSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
