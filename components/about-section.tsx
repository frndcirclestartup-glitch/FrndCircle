import { Heart, ShieldCheck, Zap } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { SectionLabel } from "./section-label"

const values = [
  {
    icon: Zap,
    title: "Action over swiping",
    description: "Skip the endless matching and dry small talk. Simply browse local plans, tap to join, and meet in person. Shared activities take the pressure off.",
    color: "from-primary/20 to-primary/5",
  },
  {
    icon: ShieldCheck,
    title: "Safety is our baseline",
    description: "Every profile is verified, and hosts review and approve all join requests before meetups. We hold high safety and respect standards.",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: Heart,
    title: "Community led, locally bred",
    description: "FrndCircle isn't built on matching algorithms. It's built by active members hosting board games, runs, and brunches in their own neighborhoods.",
    color: "from-tertiary/20 to-tertiary/5",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Dynamic Background Orbs */}
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-[350px] w-[350px] rounded-full bg-primary/10 blur-3xl animate-glow-pulse"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-1/4 h-[350px] w-[350px] rounded-full bg-accent/80 opacity-[0.06] blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Story and Mission */}
          <div className="lg:col-span-3 space-y-6">
            <ScrollReveal>
              <SectionLabel index="06">Our Story</SectionLabel>
              <h2 className="font-sans text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-[-0.01em] text-foreground text-balance">
                We&apos;re building a world with less scrolling and more connecting
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={100} className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
              <p>
                Making new friends as an adult is surprisingly hard. After college or moving to a new city, we get caught up in careers, routines, and daily demands. Standard social apps promise to bring us together, but their business models rely on keeping us glued to screen feeds.
              </p>
              <p>
                FrndCircle was born from a simple observation: <strong>the best friendships are forged when we do things together in the real world.</strong> 
              </p>
              <p>
                We aren&apos;t here to maximize your screen time or sell ads. Our singular goal is to help you close this browser tab, put down your phone, and meet your next group of close friends over a warm coffee or a golden-hour bike ride.
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column - Value Cards */}
          <div className="lg:col-span-2 space-y-6">
            {values.map((val, index) => (
              <ScrollReveal key={val.title} delay={index * 120}>
                <div className="group relative rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-lg overflow-hidden">
                  
                  {/* Subtle hover gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${val.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div className="flex gap-4 relative z-10">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                      <val.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-foreground transition-colors group-hover:text-primary">
                        {val.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {val.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
