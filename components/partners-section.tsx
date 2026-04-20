import { Badge } from "@/components/ui/badge"
import Image from "next/image"

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
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="relative aspect-[3/2] w-full">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/colla%20white-KthkPr8nsctFttKcAODAeIAx7mfOwv.png"
              alt="AI for Good collaborative ecosystem showing partners: ASEAN Foundation, Google.org, IMDA, AVPN, ADB, Meta, Micron Foundation, AWS, UNDP, Singapore Youth AI, National Youth Council, and MUIS radiating from the AI for Good logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
