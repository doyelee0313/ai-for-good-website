import { Badge } from "@/components/ui/badge"
import { BookOpen, Users, Heart, Leaf, Globe } from "lucide-react"

const sdgGoals = [
  {
    icon: BookOpen,
    title: "AI Literacy for All",
    description: "Equip learners with core AI skills for life & employability",
    sdg: "SDG 4.1 | 4.4",
    detail: "Skills for employment and livelihoods",
  },
  {
    icon: Users,
    title: "Empowering Educators",
    description: "Enable educators to integrate AI into learning systems",
    sdg: "SDG 4.6 | 4.c",
    detail: "Scale teacher capacity and AI diffusion",
  },
  {
    icon: Heart,
    title: "Inclusive Access",
    description: "Expand AI learning to underserved & under-represented communities",
    sdg: "SDG 4.5",
    detail: "Reduce disparities and ensure equitable access",
  },
  {
    icon: Leaf,
    title: "Responsible AI & Governance",
    description: "Promote safe, trustworthy, and human-centric AI use",
    sdg: "SDG 4.7",
    detail: "Support sustainable development and citizenship",
  },
  {
    icon: Globe,
    title: "Sustainable Ecosystem Building",
    description: "Strengthen institutions and partnerships to scale AI for Good sustainably",
    sdg: "SDG 4.b",
    detail: "Expand global capacity-building effort",
  },
]

export function SDGSection() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">UN Sustainable Development Goals</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Advancing SDG 4 in the AI Era
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Driving inclusive, equitable AI education — aligned to UN SDG 4: Quality Education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sdgGoals.map((goal) => (
            <div
              key={goal.title}
              className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <goal.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{goal.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{goal.description}</p>
              <div className="flex items-center gap-2 pt-4 border-t border-border">
                <span className="text-xs font-medium text-primary">{goal.sdg}</span>
                <span className="text-xs text-muted-foreground">— {goal.detail}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
