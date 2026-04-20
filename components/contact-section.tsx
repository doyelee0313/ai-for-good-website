"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, ExternalLink } from "lucide-react"
import { useState } from "react"

export function ContactSection() {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Contact Us
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              Get in Touch
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              For further enquiries about AI for Good initiatives, partnership opportunities, 
              or any questions you may have, please reach out to us.
            </p>

            <div className="bg-secondary/50 rounded-2xl p-6 mb-8">
              <h4 className="font-semibold text-foreground mb-4">Email Us</h4>
              <a 
                href="mailto:learn-admin@aisingapore.org"
                className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
              >
                <Mail className="w-5 h-5" />
                learn-admin@aisingapore.org
              </a>
            </div>

            <Button variant="outline" className="gap-2" asChild>
              <a 
                href="https://aisingapore.org" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Visit AI Singapore <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Mailing List Signup */}
          <div className="bg-card rounded-2xl border border-border p-8">
            <h4 className="text-xl font-semibold text-foreground mb-2">
              Mailing List Sign Up
            </h4>
            <p className="text-muted-foreground text-sm mb-6">
              Get the latest AI Singapore news, programme updates and offers directly into your inbox.
            </p>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input 
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input 
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
                  I&apos;m interested in
                </label>
                <select 
                  id="interest"
                  className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option value="">- Select -</option>
                  <option value="general">General information &amp; news from AISG</option>
                  <option value="research">AI Research &amp; Development</option>
                  <option value="programmes">AIAP, AIIP, LADP</option>
                  <option value="events">Events &amp; Workshops</option>
                  <option value="resources">Educational Resources</option>
                  <option value="industry">Industry Applications</option>
                  <option value="learnai">LearnAI programmes</option>
                </select>
              </div>

              <Button type="submit" className="w-full">
                Join Mailing List
              </Button>

              <p className="text-xs text-muted-foreground">
                By submitting this form, you agree to receive updates and news about AI Singapore via email. 
                You can unsubscribe whenever you want.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
