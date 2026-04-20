import { Badge } from "@/components/ui/badge"
import { Coins, Lightbulb, Network, Scale, TrendingUp } from "lucide-react"

const opportunities = [
  {
    icon: Coins,
    title: "Strategic Investment",
    description: "Catalyse high-impact AI for Good initiatives and unlock scalable models",
  },
  {
    icon: Lightbulb,
    title: "Expertise & Thought Leadership",
    description: "Advance domain-driven AI applications and co-create impactful solutions",
  },
  {
    icon: Network,
    title: "Ecosystem Access & Partnerships",
    description: "Activate networks to expand reach across communities and regions",
  },
  {
    icon: Scale,
    title: "Policy & Systems Influence",
    description: "Shape responsible AI adoption and contribute to national and regional agendas",
  },
  {
    icon: TrendingUp,
    title: "Scaling Impact",
    description: "Translate proven initiatives into sustainable, system-level impact",
  },
]

export function CollaborationSection() {
  return (
    <section className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Partner With Us</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Strategic Collaboration Opportunities
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Join us in scaling inclusive AI education and creating lasting impact across Southeast Asia and beyond.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {opportunities.map((item) => (
            <div
              key={item.title}
              className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
