import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Users, GraduationCap } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm text-muted-foreground mb-8">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          AI Singapore Initiative
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
          Scaling Inclusive AI
          <br />
          <span className="text-primary">from Singapore to the World</span>
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 text-pretty">
          AI Singapore advances AI for Good by turning AI education into scalable social impact
          across Southeast Asia and beyond.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg" className="gap-2">
            Explore Programs <ArrowRight className="w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline">
            Partner With Us
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border">
            <Users className="w-8 h-8 text-primary mb-3" />
            <span className="text-3xl font-bold text-foreground">100,000+</span>
            <span className="text-sm text-muted-foreground">Learners Reached</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border">
            <Globe className="w-8 h-8 text-primary mb-3" />
            <span className="text-3xl font-bold text-foreground">15+</span>
            <span className="text-sm text-muted-foreground">Countries</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-card rounded-2xl border border-border">
            <GraduationCap className="w-8 h-8 text-primary mb-3" />
            <span className="text-3xl font-bold text-foreground">200+</span>
            <span className="text-sm text-muted-foreground">Master Trainers</span>
          </div>
        </div>
      </div>
    </section>
  )
}
