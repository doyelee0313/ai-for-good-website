import { Badge } from "@/components/ui/badge"

const partners = [
  { name: "ASEAN Foundation", category: "Multilateral" },
  { name: "Google.org", category: "Technology" },
  { name: "IMDA", category: "Government" },
  { name: "AVPN", category: "Philanthropy" },
  { name: "ADB", category: "Multilateral" },
  { name: "Meta", category: "Technology" },
  { name: "Micron Foundation", category: "Philanthropy" },
  { name: "AWS", category: "Technology" },
  { name: "UNDP", category: "Multilateral" },
  { name: "Singapore Youth AI", category: "Community" },
  { name: "National Youth Council", category: "Government" },
  { name: "MUIS", category: "Government" },
]

const categories = ["All", "Technology", "Government", "Multilateral", "Philanthropy", "Community"]

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

        {/* Category Legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.slice(1).map((category) => (
            <span
              key={category}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className={`w-3 h-3 rounded-full ${
                category === "Technology" ? "bg-red-500" :
                category === "Government" ? "bg-orange-500" :
                category === "Multilateral" ? "bg-amber-500" :
                category === "Philanthropy" ? "bg-orange-600" :
                "bg-red-400"
              }`} />
              {category}
            </span>
          ))}
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-all text-center"
            >
              <div className={`w-12 h-12 mx-auto rounded-xl flex items-center justify-center mb-4 ${
                partner.category === "Technology" ? "bg-red-500/10" :
                partner.category === "Government" ? "bg-orange-500/10" :
                partner.category === "Multilateral" ? "bg-amber-500/10" :
                partner.category === "Philanthropy" ? "bg-orange-600/10" :
                "bg-red-400/10"
              }`}>
                <span className={`text-lg font-bold ${
                  partner.category === "Technology" ? "text-red-500" :
                  partner.category === "Government" ? "text-orange-500" :
                  partner.category === "Multilateral" ? "text-amber-500" :
                  partner.category === "Philanthropy" ? "text-orange-600" :
                  "text-red-400"
                }`}>
                  {partner.name.split(" ").map(w => w[0]).join("").slice(0, 2)}
                </span>
              </div>
              <h3 className="font-medium text-foreground text-sm mb-1">{partner.name}</h3>
              <span className="text-xs text-muted-foreground">{partner.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
