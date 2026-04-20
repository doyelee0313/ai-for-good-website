import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

const regions = [
  {
    name: "Southeast Asia",
    countries: [
      "Singapore", "Brunei", "Cambodia", "Indonesia", "Laos",
      "Malaysia", "Myanmar", "Philippines", "Thailand", "Vietnam", "Timor-Leste"
    ],
    status: "active",
  },
  {
    name: "South Asia",
    countries: ["Pakistan", "Sri Lanka", "Bangladesh"],
    status: "active",
  },
  {
    name: "Caribbean",
    countries: ["In Progress"],
    status: "in-progress",
  },
  {
    name: "Pacific Islands",
    countries: ["In Progress"],
    status: "in-progress",
  },
]

export function GlobalReachSection() {
  return (
    <section id="impact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Our Reach</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
            Global Reach and Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            AI Singapore advances AI for Good by turning AI education into scalable social impact
            across Southeast Asia and beyond.
          </p>
        </div>

        {/* World Map Visual */}
        <div className="relative mb-16 p-8 bg-card rounded-3xl border border-border overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg viewBox="0 0 1000 500" className="w-full h-full">
              <ellipse cx="500" cy="250" rx="450" ry="200" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
              <ellipse cx="500" cy="250" rx="300" ry="130" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
              <ellipse cx="500" cy="250" rx="150" ry="60" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
            </svg>
          </div>
          
          <div className="relative grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region) => (
              <div
                key={region.name}
                className={`p-6 rounded-2xl border ${
                  region.status === "active"
                    ? "bg-primary/10 border-primary/30"
                    : "bg-secondary border-border"
                }`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className={`w-5 h-5 ${region.status === "active" ? "text-primary" : "text-muted-foreground"}`} />
                  <h3 className="font-semibold text-foreground">{region.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {region.countries.map((country) => (
                    <span
                      key={country}
                      className={`text-xs px-2 py-1 rounded-full ${
                        region.status === "active"
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {country}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-card rounded-2xl border border-border">
            <span className="text-4xl font-bold text-primary">11</span>
            <p className="text-sm text-muted-foreground mt-2">ASEAN Member States</p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl border border-border">
            <span className="text-4xl font-bold text-primary">100K+</span>
            <p className="text-sm text-muted-foreground mt-2">Learners Reached</p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl border border-border">
            <span className="text-4xl font-bold text-primary">200+</span>
            <p className="text-sm text-muted-foreground mt-2">Master Trainers</p>
          </div>
          <div className="text-center p-6 bg-card rounded-2xl border border-border">
            <span className="text-4xl font-bold text-primary">6,000+</span>
            <p className="text-sm text-muted-foreground mt-2">Downstream Training</p>
          </div>
        </div>
      </div>
    </section>
  )
}
