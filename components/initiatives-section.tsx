import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Users, GraduationCap } from "lucide-react"
import Link from "next/link"

const initiatives = [
  {
    icon: Globe,
    title: "AI Ready ASEAN",
    description: "AI Singapore is the local implementing partner for the AI Ready ASEAN initiative, in partnership with the ASEAN Foundation and supported by Google.org. The initiative is committed to empowering ASEAN citizens to thrive in the era of AI.",
    details: "Running from 2024 to 2026, the programme will engage individuals in AI learning, cultivate Master Trainers, and establish a central e-learning platform, ensuring the region is equipped with the foundational knowledge of AI literacy, thereby helping ASEAN citizens navigate their future with confidence.",
    partners: ["ASEAN Foundation", "Google.org"],
    link: "https://aisingapore.org/talent/ai-ready-asean/",
  },
  {
    icon: GraduationCap,
    title: "AI for Good (Educator) Train-the-Trainer Programme",
    description: "The AI For Good (Educator) Train-the-Trainer Programme aims to #PLUSskill 100 educators from ASEAN and empower them to conduct 40 AI classes for 5,000 students in their home communities.",
    details: "We equip trainers to conduct their own workshops which touch on crucial topics such as Basic AI, Limitations of AI and Responsible AI Use.",
    partners: ["Meta", "NAIO Malaysia"],
    link: "https://aisingapore.org/talent/ai-for-good-educator/",
  },
  {
    icon: Users,
    title: "AI Opportunity Fund: Asia-Pacific",
    description: "AI Singapore, as a Strategic Partner, develops, delivers, and manages the Train-the-Trainer programme with AVPN.",
    details: "AVPN, in collaboration with Google.org and Asian Development Bank (ADB), will support workers across Asia Pacific who are most impacted by workforce transitions that are driven by AI.",
    partners: ["AVPN", "Google.org", "Asian Development Bank"],
    link: "https://aifundamentals.aisingapore.org/",
  },
]

export function InitiativesSection() {
  return (
    <section id="initiatives" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Initiatives
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Programs Making a Difference
          </h3>
        </div>

        <div className="space-y-8">
          {initiatives.map((initiative) => (
            <div 
              key={initiative.title}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-8">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <initiative.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-4">
                      {initiative.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {initiative.description}
                    </p>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {initiative.details}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <div className="flex flex-wrap gap-2">
                        {initiative.partners.map((partner) => (
                          <span 
                            key={partner}
                            className="text-xs font-medium px-3 py-1.5 bg-secondary rounded-full text-muted-foreground"
                          >
                            {partner}
                          </span>
                        ))}
                      </div>
                      <Button variant="ghost" size="sm" className="gap-2 text-primary" asChild>
                        <Link href={initiative.link} target="_blank" rel="noopener noreferrer">
                          Learn More <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
