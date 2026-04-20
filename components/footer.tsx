import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <div className="w-2 h-6 bg-primary rounded-sm" />
                <div className="w-2 h-6 bg-accent rounded-sm" />
                <div className="w-2 h-6 bg-primary/70 rounded-sm" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-background text-sm leading-tight">AI Singapore</span>
                <span className="text-xs text-background/60 leading-tight">AI for Good</span>
              </div>
            </Link>
            <p className="text-sm text-background/70 max-w-xs">
              Bridging the digital divide through inclusive AI education across Southeast Asia and beyond.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#mission" className="text-background/70 hover:text-background transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#goals" className="text-background/70 hover:text-background transition-colors">
                  Our Goals
                </Link>
              </li>
              <li>
                <Link href="#initiatives" className="text-background/70 hover:text-background transition-colors">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-background/70 hover:text-background transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-background mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://aisingapore.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  AI Singapore
                </a>
              </li>
              <li>
                <a
                  href="https://aisingapore.org/talent/ai-ready-asean/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  AI Ready ASEAN
                </a>
              </li>
              <li>
                <a
                  href="https://aisingapore.org/talent/ai-for-good-educator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  AI for Good (Educator)
                </a>
              </li>
              <li>
                <a
                  href="https://aifundamentals.aisingapore.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-background transition-colors"
                >
                  AI Opportunity Fund
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            &copy; {new Date().getFullYear()} AI Singapore. All rights reserved.
          </p>
          <p className="text-sm text-background/60">
            AI for the Public Good
          </p>
        </div>
      </div>
    </footer>
  )
}
