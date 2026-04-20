import { Target, Handshake, GraduationCap } from "lucide-react"

const goals = [
  {
    icon: Target,
    title: "UN Sustainable Development Goals",
    subtitle: "SDG 4: Quality Education",
    description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all. With AI for Good, we aim to align ourselves with SDG4 by empowering communities, reducing inequality, and driving progress across other SDGs as we believe that education underpins other goals.",
    highlight: true,
  },
  {
    icon: Handshake,
    title: "Foster Collaboration",
    subtitle: null,
    description: "Collaboration is key to ensuring the widespread adoption and implementation of AI-driven solutions that address community-specific challenges. By partnering with governments, academic institutions, non-profits, and private sector organizations, we hope to create strengthened community networks through shared resources and expertise.",
    highlight: false,
  },
  {
    icon: GraduationCap,
    title: "Upskill Communities",
    subtitle: null,
    description: "AI for Good aims to provide hands-on training programs to equip individuals with the practical skills needed for future-proof careers, enabling them to actively participate in and contribute to a tech-driven economy.",
    highlight: false,
  },
]

export function GoalsSection() {
  return (
    <section id="goals" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Goals
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Driving Inclusive AI Education
          </h3>
        </div>

        <div className="space-y-8">
          {goals.map((goal, index) => (
            <div 
              key={goal.title}
              className={`relative p-8 rounded-2xl border transition-all ${
                goal.highlight 
                  ? "bg-primary/5 border-primary/20" 
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                  goal.highlight ? "bg-primary text-primary-foreground" : "bg-primary/10"
                }`}>
                  <goal.icon className={`w-7 h-7 ${goal.highlight ? "" : "text-primary"}`} />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h4 className="text-xl font-semibold text-foreground">{goal.title}</h4>
                    {goal.subtitle && (
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {goal.subtitle}
                      </span>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
