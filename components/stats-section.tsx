"use client"
import { useEffect, useState } from "react"

function useCountUp(end: number, duration = 2000, suffix = "") {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      setCount(Math.floor(easeOutQuart * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration, hasStarted])

  return { value: count + suffix, start: () => setHasStarted(true), hasStarted }
}

export function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  const members = useCountUp(12, 2000, "K+")
  const activities = useCountUp(850, 2000, "")
  const cities = useCountUp(23, 2000, "")
  const friendships = useCountUp(94, 2000, "%")

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          members.start()
          activities.start()
          cities.start()
          friendships.start()
        }
      },
      { threshold: 0.3 },
    )

    const section = document.getElementById("community")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [isVisible])

  const stats = [
    { value: members.value, label: "Active members", delay: "delay-200" },
    { value: activities.value, label: "Activities hosted monthly", delay: "delay-300" },
    { value: cities.value, label: "Cities and growing", delay: "delay-400" },
    { value: friendships.value, label: "Say they made a real friend", delay: "delay-500" },
  ]

  return (
    <section id="community" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-card p-8 ring-1 ring-inset ring-border md:p-14 lg:p-16">
          {/* Neon ambient glow */}
          <div
            className="pointer-events-none absolute -right-20 -top-24 h-[420px] w-[420px] rounded-full bg-primary/15 blur-3xl animate-glow-pulse"
            aria-hidden="true"
          />
          {/* Fine grid texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--color-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
            aria-hidden="true"
          />

          {/* Header row */}
          <div className="relative z-10 mb-14 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <div className="mb-5 flex items-center gap-3">
                <span className="font-mono text-xs tracking-widest text-primary">04</span>
                <span className="h-px w-8 bg-primary/50" aria-hidden="true" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  By the numbers
                </span>
              </div>
              <h3 className="font-sans text-4xl font-bold leading-[1.05] tracking-[-0.01em] text-foreground text-balance md:text-5xl">
                A thriving community of real people
              </h3>
            </div>
            <p className="max-w-xs text-base leading-relaxed text-muted-foreground lg:text-right">
              Real members hosting real plans in real cities, and actually making friends along the way.
            </p>
          </div>

          {/* Stat row */}
          <div className="relative z-10 grid grid-cols-2 gap-x-6 gap-y-12 border-t border-border pt-12 lg:grid-cols-4 lg:gap-x-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 lg:px-8 ${
                  index !== 0 ? "lg:border-l lg:border-border" : ""
                } ${isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"} ${stat.delay}`}
              >
                <span className="mb-4 block h-1 w-8 rounded-full bg-primary" aria-hidden="true" />
                <div className="font-serif text-5xl leading-none text-foreground md:text-6xl">{stat.value}</div>
                <p className="mt-3 text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
