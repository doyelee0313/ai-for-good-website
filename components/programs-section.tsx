"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Users, Globe, GraduationCap, Building2, Sparkles, Quote } from "lucide-react"

const programs = [
  {
    id: "ai-ready-asean",
    title: "AI Ready ASEAN",
    timeline: "May 2025 - Sep 2026",
    collaborators: ["ASEAN Foundation", "Google.org", "IMDA"],
    targetCountries: "11 ASEAN Member States",
    highlights: [
      "Reach 100,000+ youths, educators, parents, and underserved communities across Singapore and ASEAN",
      "Train 200 Master Trainers to scale AI education, reaching 6,000+ learners through downstream training",
      "Convene national policy dialogues on AI in Education and AI for Youth",
      "Deliver the AI Ready ASEAN Youth Challenge across all 11 ASEAN Member States",
    ],
    testimonial: "The training was engaging and illuminating. The trainers broke down complex concepts into simple, digestible steps. It was a real 'aha' moment — realizing AI isn't a distant concept, but something we can apply in everyday life.",
    icon: Globe,
  },
  {
    id: "ai-opportunity-fund",
    title: "AI Opportunity Fund: APAC",
    timeline: "May 2025 - Jun 2027",
    collaborators: ["AVPN", "ADB", "Google.org"],
    targetCountries: "Singapore, Philippines, Pakistan, Sri Lanka, Bangladesh, Malaysia",
    highlights: [
      "Phase 1: Co-develop regional AI curriculum, enabling scalable AI literacy across diverse markets",
      "Develop AI training resources, toolkits, and structured learning pathways",
      "Train 50+ trainers across 5 countries to cascade AI literacy within their communities",
      "Phase 2: Reach 10,000+ PMETs, vocational, and university learners across 3 countries",
    ],
    testimonial: "What I liked most about is really the clear programme design and excellent (and patient) facilitation of AI Singapore. They have clearly put in a lot of thought into this programme and have really made it very informative, organized, and also quite immersive and practical.",
    icon: Users,
  },
  {
    id: "ai-for-good-educators",
    title: "AI for Good (Educators)",
    timeline: "Aug 2024 - Dec 2025",
    collaborators: ["Meta", "NAIO Malaysia"],
    targetCountries: "Malaysia, Thailand, Philippines",
    highlights: [
      "Design and customise training curriculum for educators",
      "Conduct inbound Train-the-Trainers in Singapore for 100 educators across 3 countries",
      "Reach 10,000+ community members across respective countries",
      "Convene AI for Good (Educator) Conference in Malaysia",
    ],
    testimonial: null,
    icon: GraduationCap,
  },
  {
    id: "ai-for-good-youth",
    title: "AI for Good (Youth)",
    timeline: "Jan 2025 - Present",
    collaborators: ["Singapore Youth AI", "National Youth Council"],
    targetCountries: "Singapore",
    highlights: [
      "Equip youth leaders with AI literacy and pedagogy to drive peer-led initiatives",
      "Expand access to AI learning in secondary schools through youth-led outreach",
      "Reach 2,000+ secondary school students across Singapore",
    ],
    testimonial: "The hands-on activities and missions made the programme really fun and engaging, and helped us apply what we learned right away. It made the learning more meaningful and gave us the confidence to use AI in real-world situations.",
    icon: Sparkles,
  },
]

const inProgressPrograms = [
  {
    title: "AI for Good (Community)",
    description: "A Train-the-Trainer programme for Social Service Agencies, enabling them to adapt AI literacy curricula for women, seniors, and underserved communities.",
    targetCountry: "Singapore",
    collaborators: ["Micron Foundation", "United Women Singapore", "Daughters of Tomorrow"],
  },
  {
    title: "AI for Good Festival",
    description: "A gamified AI literacy festival making AI accessible to students from all backgrounds, featuring interactive booths, workshops, and community, youth, and industry showcases.",
    targetCountry: "Singapore",
    collaborators: ["Micron Foundation", "AWS", "ITE", "Republic Polytechnic"],
  },
  {
    title: "AI for Good (Global)",
    description: "Partnering with UNDP to co-develop AI education initiatives that advance inclusive AI readiness and capacity-building across developing regions.",
    targetCountry: "2 ASEAN, 2 Caribbean, 2 Pacific Island countries",
    collaborators: ["UNDP"],
  },
]

export function ProgramsSection() {
  const [activeProgram, setActiveProgram] = useState(programs[0].id)
  const currentProgram = programs.find((p) => p.id === activeProgram)!

  return (
    <section id="programs" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Programs</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            AI for Good Initiatives
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            A portfolio of programs designed to scale inclusive AI education across Southeast Asia and beyond.
          </p>
        </div>

        {/* Program Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {programs.map((program) => (
            <Button
              key={program.id}
              variant={activeProgram === program.id ? "default" : "outline"}
              onClick={() => setActiveProgram(program.id)}
              className="gap-2"
            >
              <program.icon className="w-4 h-4" />
              <span className="hidden sm:inline">{program.title}</span>
              <span className="sm:hidden">{program.title.split(" ").slice(0, 2).join(" ")}</span>
            </Button>
          ))}
        </div>

        {/* Active Program Details */}
        <div className="bg-background rounded-3xl border border-border p-8 mb-16">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <currentProgram.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{currentProgram.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {currentProgram.timeline}
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                {currentProgram.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary shrink-0">
                      {index + 1}
                    </span>
                    <p className="text-muted-foreground">{highlight}</p>
                  </div>
                ))}
              </div>

              {currentProgram.testimonial && (
                <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
                  <Quote className="w-8 h-8 text-primary/30 mb-2" />
                  <p className="text-sm text-muted-foreground italic">
                    &ldquo;{currentProgram.testimonial}&rdquo;
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-6">
              <div className="p-4 bg-secondary/50 rounded-xl border border-border">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  Key Collaborators
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentProgram.collaborators.map((collab) => (
                    <span key={collab} className="text-xs px-3 py-1 bg-background rounded-full text-muted-foreground border border-border">
                      {collab}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-secondary/50 rounded-xl border border-border">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Globe className="w-4 h-4 text-primary" />
                  Target Countries
                </h4>
                <p className="text-sm text-muted-foreground">{currentProgram.targetCountries}</p>
              </div>
            </div>
          </div>
        </div>

        {/* In Progress Programs */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">In Progress</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {inProgressPrograms.map((program) => (
              <div key={program.title} className="p-6 bg-background rounded-2xl border border-border border-dashed">
                <Badge variant="outline" className="mb-3">Coming Soon</Badge>
                <h4 className="font-semibold text-foreground mb-2">{program.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{program.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-2">
                    <span className="font-medium">Target:</span> {program.targetCountry}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {program.collaborators.map((collab) => (
                      <span key={collab} className="text-xs px-2 py-0.5 bg-secondary rounded-full text-muted-foreground">
                        {collab}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
