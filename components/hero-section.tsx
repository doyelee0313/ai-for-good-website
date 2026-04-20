import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-16 overflow-hidden bg-background">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm text-primary font-medium mb-8">
          <span className="w-2 h-2 bg-primary rounded-full" />
          LearnAI Initiative
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
          AI for Good
        </h1>

        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty leading-relaxed">
          Bridging the digital divide by making AI resources, tools and knowledge accessible 
          to those who may otherwise lack opportunities, creating meaningful and positive impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button size="lg" asChild>
            <Link href="#initiatives">
              Explore Our Initiatives
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">
              Contact Us
            </Link>
          </Button>
        </div>

        <Link 
          href="#mission" 
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm">Learn More</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </Link>
      </div>
    </section>
  )
}
