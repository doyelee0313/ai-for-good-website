import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const partners = [
  {
    name: "ASEAN Foundation",
    url: "https://aseanfoundation.org/",
    category: "Multilateral",
  },
  {
    name: "Asian Development Bank",
    url: "https://www.adb.org/",
    category: "Multilateral",
  },
  {
    name: "Asian Venture Philanthropy Network",
    url: "https://avpn.asia/",
    category: "Philanthropy Network",
  },
  {
    name: "Amazon Web Services",
    url: "https://aws.amazon.com/",
    category: "Industry",
  },
  {
    name: "Google.org",
    url: "https://www.google.org/",
    category: "Philanthropy",
  },
  { name: "Meta", url: "https://www.meta.com/", category: "Industry" },
  {
    name: "Micron Foundation",
    url: "https://www.micron.com/about/blog/company/community/empowering-communities-the-micron-foundations-mission-to-make-a-difference",
    category: "Philanthropy",
  },
  {
    name: "Singapore Youth AI",
    url: "https://www.sgyouthai.org/",
    category: "Community",
  },
  {
    name: "United Nations Development Programme",
    url: "https://www.undp.org/",
    category: "Multilateral",
  },
];

const categoryColours: Record<string, string> = {
  Multilateral: "bg-blue-500/10 text-blue-600",
  Philanthropy: "bg-purple-500/10 text-purple-600",
  "Philanthropy Network": "bg-purple-500/10 text-purple-600",
  "Public Agency": "bg-green-500/10 text-green-600",
  Industry: "bg-orange-500/10 text-orange-600",
  Community: "bg-rose-500/10 text-rose-600",
};

export function PartnersSection() {
  // Sort partners alphabetically by name
  const sortedPartners = [...partners].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Split partners into two columns
  const midIndex = Math.ceil(sortedPartners.length / 2);
  const leftColumn = sortedPartners.slice(0, midIndex);
  const rightColumn = sortedPartners.slice(midIndex);

  return (
    <section id="partners" className="section-mid py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 heading-underline">
            AI for Good Alliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            AI Singapore would like to thank the following ecosystem partners
            for powering our AI for Good initiatives, enabled through a diverse
            cross-sector network spanning public agencies, multilateral
            institutions, industry, philanthropy, and community partners.
          </p>
        </div>

        <div className="bg-background border border-border rounded-2xl p-6 sm:p-8 reveal shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-3">
              {leftColumn.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl hover:bg-secondary hover:-translate-x-0.5 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                      {partner.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>

            {/* Right Column */}
            <div className="space-y-3">
              {rightColumn.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between gap-3 px-4 py-3 rounded-xl hover:bg-secondary hover:-translate-x-0.5 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary shrink-0" />
                    <span className="text-sm text-foreground font-medium group-hover:text-primary transition-colors">
                      {partner.name}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
