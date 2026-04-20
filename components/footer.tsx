import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">AI</span>
              </div>
              <span className="font-semibold text-foreground">AI Singapore</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-md">
              Singapore&apos;s national AI programme, dedicated to building deep national capabilities in AI,
              creating social and economic impacts, and putting Singapore on the world map.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#pillars" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pillars
                </Link>
              </li>
              <li>
                <Link href="#programs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="#partners" className="text-muted-foreground hover:text-foreground transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.aisingapore.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  AI Singapore
                </a>
              </li>
              <li>
                <a
                  href="https://www.smartnation.gov.sg/initiatives/national-ai-strategy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  National AI Strategy
                </a>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AI Singapore. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            AI for the Public Good — for Singapore and the World
          </p>
        </div>
      </div>
    </footer>
  )
}
