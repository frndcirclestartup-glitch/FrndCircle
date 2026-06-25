"use client"

import type React from "react"
import { useState } from "react"
import { Menu, X, ArrowUpRight, ArrowRight } from "lucide-react"
import { usePathname } from "next/navigation"

const navLinks = [
  { label: "Features", id: "features" },
  { label: "How it works", id: "how-it-works" },
  { label: "Activities", id: "activities" },
  { label: "Stories", id: "stories" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/") {
      e.preventDefault()
      const element = document.getElementById(targetId)
      if (element) {
        const headerOffset = 100
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" })
        setIsOpen(false)
      }
    }
  }

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <div className="max-w-6xl mx-auto rounded-2xl bg-background/80 backdrop-blur-xl border border-border px-6 py-3">
        <div className="flex items-center justify-between">
          <a href="/" onClick={handleLogoClick} className="flex items-center gap-2 cursor-pointer">
            <svg
              className="w-6 h-6 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="9" cy="9" r="5" />
              <circle cx="15" cy="15" r="5" />
            </svg>
            <span className="text-lg font-medium tracking-tight text-foreground">FrndCircle</span>
          </a>

          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={pathname === "/" ? `#${link.id}` : `/#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center">
            <a
              href={pathname === "/" ? "#waitlist" : "/#waitlist"}
              onClick={(e) => handleSmoothScroll(e, "waitlist")}
              className="relative flex items-center gap-0 bg-primary rounded-full pl-5 pr-1 py-1 transition-all duration-300 group overflow-hidden"
            >
              <span className="text-sm pr-3 text-primary-foreground relative z-10">Get the app</span>
              <span className="w-8 h-8 rounded-full bg-primary-foreground/15 flex items-center justify-center relative z-10">
                <ArrowRight className="w-4 h-4 text-primary-foreground group-hover:opacity-0 absolute transition-opacity duration-300" />
                <ArrowUpRight className="w-4 h-4 text-primary-foreground opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </span>
            </a>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <nav className="md:hidden mt-6 pb-6 flex flex-col gap-4 border-t border-border pt-6" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={pathname === "/" ? `#${link.id}` : `/#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}
            <a
              href={pathname === "/" ? "#waitlist" : "/#waitlist"}
              onClick={(e) => handleSmoothScroll(e, "waitlist")}
              className="mt-2 inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-5 py-2.5 w-fit text-sm"
            >
              Get the app
              <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
