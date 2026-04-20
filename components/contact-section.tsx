import { Button } from "@/components/ui/button"
import { Mail, ExternalLink } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-card rounded-3xl border border-border p-12 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
          </div>

          <div className="relative text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Let&apos;s Build the Future of AI Education Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty">
              Interested in partnering with AI Singapore on AI for Good initiatives?
              We&apos;d love to hear from you.
            </p>

            <div className="bg-background rounded-2xl border border-border p-8 mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">CO</span>
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-foreground">Chandra Ong</h3>
                  <p className="text-sm text-muted-foreground">Head of Programmes & Partnerships</p>
                </div>
              </div>
              <a
                href="mailto:chandra@aisingapore.org"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <Mail className="w-4 h-4" />
                chandra@aisingapore.org
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="gap-2">
                <Mail className="w-4 h-4" />
                Get in Touch
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <a href="https://www.aisingapore.org" target="_blank" rel="noopener noreferrer">
                  Visit AI Singapore <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
