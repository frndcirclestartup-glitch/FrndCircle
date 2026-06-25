import { Star } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { SectionLabel } from "./section-label"

const testimonials = [
  {
    quote:
      "I moved here knowing nobody. Six months later, my Sunday brunch group feels like family. I genuinely can't remember the last boring weekend.",
    name: "Maya R.",
    initials: "MR",
    detail: "Member since 2024 · Met her closest friends at a book club",
  },
  {
    quote:
      "I'd scroll apps for hours and never actually meet anyone. Here, I hosted one bike ride and twelve people showed up. Three of them are now my best friends.",
    name: "Daniel K.",
    initials: "DK",
    detail: "Hosts weekly rides · 40+ activities attended",
  },
  {
    quote:
      "After years of feeling lonely in a city of millions, this was the first thing that actually worked. Real people, real plans, no pressure.",
    name: "Sofia L.",
    initials: "SL",
    detail: "Member since 2023 · Found her concert crew here",
  },
]

export function TestimonialsSection() {
  return (
    <section id="stories" className="py-24 px-6 bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="mb-16">
          <SectionLabel index="05">Member stories</SectionLabel>
          <h3 className="font-sans text-4xl md:text-6xl font-bold leading-[1.05] tracking-[-0.01em] text-foreground text-balance">
            Real friendships, real experiences
          </h3>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl">
            Hear from FrndCircle members about how they&apos;ve built meaningful friendships and transformed their social lives.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 110}>
              <figure className="flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg">
                <div>
                  <div className="mb-5 flex gap-0.5" aria-label="Rated 5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" aria-hidden="true" />
                    ))}
                  </div>
                  <blockquote className="leading-relaxed text-foreground text-pretty">
                    {"\u201C"}
                    {testimonial.quote}
                    {"\u201D"}
                  </blockquote>
                </div>
                <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-6">
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary"
                    aria-hidden="true"
                  >
                    {testimonial.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-foreground">{testimonial.name}</span>
                    <span className="mt-0.5 block text-xs text-muted-foreground">{testimonial.detail}</span>
                  </span>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
