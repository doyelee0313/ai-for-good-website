"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Globe,
  GraduationCap,
  Building2,
  Quote,
  Users,
  Sparkles,
} from "lucide-react";

function sortedCommaList(text: string): string {
  const parts = text
    .split(/,|\n/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (parts.length <= 1) return text.trim();
  parts.sort((a, b) => a.localeCompare(b, "en"));
  return parts.join(", ");
}

const programs = [
  {
    id: "ai-ready-asean",
    title: "AI Ready ASEAN",
    collaborators: ["ASEAN Foundation", "Google.org"],
    targetCountries: "11 ASEAN Member States",
    highlights: [
      "Reach 100,000+ youths, educators, parents, and underserved communities across Singapore and ASEAN",
      "Train 200 Master Trainers to scale AI education, reaching 6,000+ learners through downstream training",
      "Convene national policy dialogues on AI in Education and AI for Youth",
      "Deliver the AI Ready ASEAN Youth Challenge across all 11 ASEAN Member States",
    ],
    testimonial:
      "The training was engaging and illuminating. The trainers broke down complex concepts into simple, digestible steps. It was a real 'aha' moment — realising AI isn't a distant concept, but something we can apply in everyday life.",
    icon: Globe,
  },
  {
    id: "ai-opportunity-fund",
    title: "AI Opportunity Fund: Asia-Pacific",
    collaborators: [
      "Asian Development Bank",
      "Asian Venture Philanthropy Network",
      "Google.org",
    ],
    targetCountries:
      "Bangladesh, Malaysia, Pakistan, Philippines, Singapore, Sri Lanka",
    highlights: [
      "Phase 1: Co-develop regional AI curriculum, enabling scalable AI literacy across diverse markets, develop AI training resources, toolkits, and structured learning pathways, train 50+ trainers across 5 countries to cascade AI literacy within their communities",
      "Phase 2: Reach 10,000+ PMETs, vocational, and university learners across 3 countries",
    ],
    testimonial:
      "What I liked most about this is really the clear programme design and excellent (and patient) facilitation by AI Singapore. They have clearly put in a lot of thought into this programme and have really made it very informative, organised, and quite immersive and practical.",
    icon: Users,
  },
  {
    id: "ai-for-good-educators",
    title: "AI for Good (Educators)",
    collaborators: ["Meta"],
    targetCountries: "Malaysia, Philippines, Thailand",
    highlights: [
      "Design and customise training curriculum for educators across three countries",
      "Conduct inbound Train-the-Trainers in Singapore for 100 educators",
      "Reach 10,000+ community members across respective countries",
      "Convene AI for Good (Educator) Conference in Malaysia",
    ],
    testimonial: null,
    icon: GraduationCap,
  },
  {
    id: "ai-for-good-youth",
    title: "AI for Good (Youth)",
    collaborators: ["Singapore Youth AI"],
    targetCountries: "Singapore",
    highlights: [
      "Equip youth leaders with AI literacy and pedagogy to drive peer-led initiatives",
      "Expand access to AI learning in secondary schools through youth-led outreach",
      "Reach 2,000+ secondary school students across Singapore",
    ],
    testimonial:
      "The hands-on activities and missions made the programme really fun and engaging, and helped us apply what we learned right away. It made the learning more meaningful and gave us the confidence to use AI in real-world situations.",
    icon: Sparkles,
  },
  {
    id: "ai-for-good-community",
    title: "AI for Good (Community)",
    collaborators: ["Micron Foundation"],
    targetCountries: "Singapore",
    highlights: [
      "Equip Social Service Agencies to adapt AI literacy curricula for women, seniors, and underserved communities",
      "Build capacity for trainers to localise and deliver inclusive AI education",
      "Scale community-based AI literacy through partner organisations",
    ],
    testimonial:
      "The programme helped us translate AI concepts into something accessible for our community beneficiaries. It made implementation much more practical and meaningful.",
    icon: Users,
  },
];

const inProgressPrograms = [
  {
    title: "AI for Good Festival",
    description:
      "A gamified AI literacy festival making AI accessible to students from all backgrounds, featuring interactive booths, workshops, and community, youth, and industry showcases.",
    targetCountry: "Singapore",
    collaborators: ["Amazon Web Services", "Micron Foundation"],
  },
  {
    title: "AI for Good (Global)",
    description:
      "Partnering with UNDP to co-develop AI education initiatives that advance inclusive AI readiness and capacity-building across developing regions.",
    targetCountry: "2 ASEAN, 2 Caribbean, 2 Pacific Island countries",
    collaborators: ["United Nations Development Programme"],
  },
];

export function ProgramsSection() {
  const [activeProgram, setActiveProgram] = useState(programs[0].id);
  const [animKey, setAnimKey] = useState(0);
  const currentProgram = programs.find((p) => p.id === activeProgram)!;

  const handleTabChange = (id: string) => {
    if (id === activeProgram) return;
    setActiveProgram(id);
    setAnimKey((k) => k + 1);
  };

  const sortedCollaborators = [...currentProgram.collaborators].sort((a, b) => {
    if (currentProgram.id === "ai-opportunity-fund") {
      const customOrder = [
        "Asian Venture Philanthropy Network",
        "Asian Development Bank",
        "Google.org",
      ];
      return customOrder.indexOf(a) - customOrder.indexOf(b);
    }
    return a.localeCompare(b, "en");
  });

  return (
    <section id="programs" className="section-warm py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance heading-underline">
            AI for Good Initiatives
          </h2>
        </div>

        {/* Programme Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 reveal">
          {programs.map((program) => (
            <Button
              key={program.id}
              variant={activeProgram === program.id ? "default" : "outline"}
              onClick={() => handleTabChange(program.id)}
              className="gap-2 transition-all ripple"
              size="sm"
            >
              <program.icon className="w-4 h-4 shrink-0" />
              <span className="hidden sm:inline">{program.title}</span>
              <span className="sm:hidden">
                {program.title} {/* Show full title on mobile */}
                {/* Show up to 3 words */}
              </span>
            </Button>
          ))}
        </div>

        {/* Active Programme Details */}
        <div
          key={animKey}
          className="bg-background rounded-3xl border border-border p-6 sm:p-8 mb-16 reveal shadow-sm tab-content-enter"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-start gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <currentProgram.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-center text-foreground mt-2">
                  {currentProgram.title}
                </h3>
              </div>

              <div className="space-y-3 mb-6">
                {currentProgram.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs font-semibold text-primary shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              {currentProgram.testimonial && (
                <div className="bg-secondary/50 rounded-2xl p-6 border border-border">
                  <Quote className="w-8 h-8 text-primary/30 mb-2" />
                  <p className="text-sm text-muted-foreground italic leading-relaxed">
                    &ldquo;{currentProgram.testimonial}&rdquo;
                  </p>
                </div>
              )}
            </div>

            <div className="space-y-5">
              <div className="p-4 bg-secondary/50 rounded-xl border border-border">
                <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  Key Collaborators
                </h4>
                <div className="flex flex-wrap gap-2">
                  {sortedCollaborators.map((collab) => (
                    <span
                      key={collab}
                      className="text-xs px-3 py-1 bg-background rounded-full text-muted-foreground border border-border"
                    >
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
                <p className="text-sm text-muted-foreground">
                  {sortedCommaList(currentProgram.targetCountries)}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Programmes */}
        <div className="reveal">
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
            Upcoming Programmes
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {inProgressPrograms.map((program) => {
              const sorted = [...program.collaborators].sort((a, b) =>
                a.localeCompare(b, "en")
              );
              return (
                <div
                  key={program.title}
                  className="p-6 bg-background rounded-2xl border border-border border-dashed hover:border-primary/30 transition-colors"
                >
                  <Badge variant="outline" className="mb-3">
                    Coming Soon
                  </Badge>
                  <h4 className="font-semibold text-foreground mb-2">
                    {program.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2">
                      <span className="font-semibold">Target:</span>{" "}
                      {program.targetCountry}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {sorted.map((collab) => (
                        <span
                          key={collab}
                          className="text-xs px-2 py-0.5 bg-secondary rounded-full text-muted-foreground"
                        >
                          {collab}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
