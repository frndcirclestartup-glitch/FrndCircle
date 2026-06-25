"use client"

import { usePathname } from "next/navigation"
import { ArrowUpRight } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { SectionLabel } from "./section-label"
import { activities } from "@/lib/activities-data"

export function ActivitiesSection() {
  const pathname = usePathname()

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (pathname === "/") {
      e.preventDefault()
      const element = document.getElementById(targetId)
      if (element) {
        const headerOffset = 100
        const elementPosition = element.getBoundingClientRect().top + window.scrollY
        window.scrollTo({ top: elementPosition - headerOffset, behavior: "smooth" })
      }
    }
  }

  return (
    <section id="activities" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <SectionLabel index="03">What to do</SectionLabel>
            <h2 className="font-sans text-4xl md:text-6xl font-bold leading-[1.05] tracking-[-0.01em] text-foreground text-balance">
              Discover activities that spark real friendships
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground leading-relaxed text-pretty">
            From board game nights to bike rides, join over 5,000+ FrndCircle members experiencing thousands of activities every month across your city.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <ScrollReveal key={activity.slug} delay={(index % 3) * 100}>
              <a
                href={pathname === "/" ? "#waitlist" : "/#waitlist"}
                onClick={(e) => handleSmoothScroll(e, "waitlist")}
                className="group relative rounded-3xl overflow-hidden aspect-[4/5] block cursor-pointer"
              >
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Purple theme tint overlay */}
                <div className="absolute inset-0 bg-primary/20 mix-blend-color pointer-events-none transition-opacity duration-300 group-hover:bg-primary/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-medium text-white">{activity.title}</h3>
                    <p className="text-sm text-white/70 mt-1">{activity.tagline}</p>
                  </div>
                  <span className="w-10 h-10 shrink-0 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <ArrowUpRight className="w-4 h-4 text-white" aria-hidden="true" />
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
