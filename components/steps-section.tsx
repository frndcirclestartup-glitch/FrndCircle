import { Download, CalendarHeart, HeartHandshake } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { SectionLabel } from "./section-label"

const steps = [
  {
    icon: Download,
    number: "01",
    title: "Download the app",
    description:
      "Grab FrndCircle from the App Store or Google Play and set up your profile in under a minute.",
  },
  {
    icon: CalendarHeart,
    number: "02",
    title: "Find or host activities",
    description:
      "Browse what's happening in your city this week, or host your own plan and watch people tap to join.",
  },
  {
    icon: HeartHandshake,
    number: "03",
    title: "Meet people in real life",
    description:
      "No awkward DMs, no endless matching. Just real conversations over the things you already love doing.",
  },
]

export function StepsSection() {
  return (
    <section id="how-it-works" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="mb-16">
          <SectionLabel index="02">How it works</SectionLabel>
          <h3 className="font-sans text-4xl md:text-6xl font-bold leading-[1.05] tracking-[-0.01em] text-foreground text-balance">
            From download to your first hangout
          </h3>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 110}>
              <div className="group h-full bg-card border border-border rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                <div className="flex items-center justify-between mb-8">
                  <span className="w-12 h-12 rounded-full bg-accent flex items-center justify-center transition-colors duration-300 group-hover:bg-primary/10">
                    <step.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                  </span>
                  <span className="font-sans text-3xl font-bold text-muted-foreground/40">{step.number}</span>
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
