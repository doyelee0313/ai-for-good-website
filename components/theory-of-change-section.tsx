import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

const stages = [
  {
    title: "Problem / Need",
    content: "Uneven access to AI capabilities, with varying levels of readiness across communities, sectors, and markets",
    color: "bg-red-600/15 border-red-600/30",
  },
  {
    title: "Inputs",
    content: "Cross-sector partnerships, Funding & resources, AI expertise, Platforms, tools, and networks",
    color: "bg-red-500/15 border-red-500/30",
  },
  {
    title: "Activities",
    content: "A portfolio of AI for Good initiatives across: Education, Workforce development, Community programmes, Ecosystem & policy engagement",
    color: "bg-orange-500/15 border-orange-500/30",
  },
  {
    title: "Outputs",
    content: "Programmes delivered across markets, Educators, trainers, and facilitators enabled, Learners, workers, and communities reached at scale",
    color: "bg-orange-400/15 border-orange-400/30",
  },
  {
    title: "Outcomes",
    content: "Build AI literacy, fluency, and practical application, Strengthen employability and productivity, Engage with AI responsibly and safely",
    color: "bg-amber-500/15 border-amber-500/30",
  },
  {
    title: "Impact",
    content: "Inclusive participation in the AI-enabled economy, Expanded access to opportunities, Future-ready workforce and communities",
    color: "bg-amber-400/15 border-amber-400/30",
  },
]

export function TheoryOfChangeSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Approach</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            AI for Good — Theory of Change
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Our systematic approach to creating lasting impact through inclusive AI education and capacity building.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {stages.map((stage, index) => (
            <div key={stage.title} className="relative">
              <div className={`p-5 rounded-2xl border ${stage.color} h-full`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center text-xs font-medium text-foreground">
                    {index + 1}
                  </span>
                  <h3 className="font-semibold text-foreground text-sm">{stage.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{stage.content}</p>
              </div>
              {index < stages.length - 1 && (
                <div className="hidden xl:flex absolute top-1/2 -right-2 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-4 h-4 text-muted-foreground" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
