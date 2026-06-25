import Link from "next/link"
import { Twitter, Linkedin, Instagram } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Activities", href: "#activities" },
    { label: "Get the app", href: "#waitlist" },
  ],
  company: [
    { label: "About", href: "/#about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Blog", href: "#" },
  ],
  legal: [
    { label: "Terms of Service", href: "/terms-of-service" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Cookies", href: "/privacy-policy#cookies" },
    { label: "Guidelines", href: "/terms-of-service#guidelines" },
  ],
  support: [
    { label: "Help Center", href: "#" },
    { label: "Contact", href: "mailto:info@frndcircle.com" },
    { label: "FAQ", href: "#" },
    { label: "Safety", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <svg
                className="w-5 h-5 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <circle cx="9" cy="9" r="5" />
                <circle cx="15" cy="15" r="5" />
              </svg>
              <span className="text-base font-medium text-foreground">FrndCircle</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">Real friendships, made in real life.</p>
            <a href="mailto:info@frndcircle.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors block mb-6">
              info@frndcircle.com
            </a>
            <div className="flex gap-4">
              {[
                { icon: Twitter, label: "Twitter", href: "https://x.com/frndcircle_app" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/frndcircle/about/?viewAsMember=true" },
                { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/frndcircle_app/" },
              ].map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-medium text-foreground mb-4 uppercase tracking-wider">{section}</h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">© 2026 FrndCircle. All rights reserved.</p>
          <p className="text-xs text-muted-foreground">A members-only social discovery community.</p>
        </div>
      </div>
    </footer>
  )
}
