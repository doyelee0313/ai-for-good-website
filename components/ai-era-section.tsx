import { Badge } from "@/components/ui/badge"
import { BookOpen, Briefcase, Globe } from "lucide-react"

export function AIEraSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">The Challenge</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            The AI Era is Here — Are We Ready?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            AI is rapidly reshaping how societies learn, work, and participate in the global economy.
            Without deliberate action, AI will widen inequality — leaving behind youth, workers,
            educators, and underserved communities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <BookOpen className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Learn</h3>
            <p className="text-muted-foreground mb-4">AI is reshaping how we learn</p>
            <p className="text-sm text-muted-foreground">
              AI is redefining how knowledge is created, accessed, and applied.
              We are moving from tools to intelligent collaborators.
            </p>
          </div>

          <div className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Briefcase className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Work</h3>
            <p className="text-muted-foreground mb-4">AI is reshaping jobs</p>
            <p className="text-sm text-muted-foreground">
              Automation is reshaping jobs, skills, and economic participation.
              AI is no longer optional — it defines how we work and live.
            </p>
          </div>

          <div className="group p-8 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <Globe className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Global</h3>
            <p className="text-muted-foreground mb-4">AI is reshaping access</p>
            <p className="text-sm text-muted-foreground">
              Without intervention, the AI divide will exclude underserved communities
              from opportunities in the global digital economy.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
