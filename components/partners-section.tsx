import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const partners = [
  "ASEAN Foundation",
  "Google.org",
  "IMDA",
  "AVPN",
  "ADB",
  "Meta",
  "Micron Foundation",
  "AWS",
  "UNDP",
  "Singapore Youth AI",
  "National Youth Council",
  "MUIS",
]

export function PartnersSection() {
  return (
    <section id="partners" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Partners</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            A Collaborative Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            AI Singapore&apos;s AI for Good initiatives are powered by a diverse, cross-sector ecosystem
            spanning public agencies, multilateral institutions, industry, philanthropy, and community partners.
          </p>
        </div>

        {/* Ecosystem Illustration */}
        <div className="relative w-full max-w-4xl mx-auto mb-16">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/colla%20white-KthkPr8nsctFttKcAODAeIAx7mfOwv.png"
              alt="AI for Good collaborative ecosystem showing partners radiating from the AI for Good logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {partners.map((partner) => (
            <div
              key={partner}
              className="p-4 rounded-xl bg-secondary/50 border border-border hover:bg-secondary hover:border-primary/20 transition-all text-center"
            >
              <div className="w-10 h-10 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <span className="text-sm font-bold text-primary">
                  {partner.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </span>
              </div>
              <h3 className="text-sm font-medium text-foreground">{partner}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
