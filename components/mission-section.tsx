import { Heart, Lightbulb, Users } from "lucide-react"

export function MissionSection() {
  return (
    <section id="mission" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Our Mission
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl text-foreground max-w-4xl mx-auto leading-relaxed text-balance">
            AI for Good is a branch of initiatives under LearnAI, focusing on outreach initiatives 
            to underprivileged communities. This initiative seeks to <span className="text-primary font-semibold">bridge the digital divide</span> by 
            making AI resources, tools and knowledge accessible to those who may otherwise lack opportunities, 
            creating meaningful and positive impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Bridge the Divide</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Making AI accessible to underprivileged and underserved communities worldwide.
            </p>
          </div>

          <div className="text-center p-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Create Opportunities</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Providing resources and knowledge to empower individuals for future-proof careers.
            </p>
          </div>

          <div className="text-center p-8">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Meaningful Impact</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building sustainable communities through education and collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
