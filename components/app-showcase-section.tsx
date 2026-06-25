"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform, useSpring } from "framer-motion"

const points = [
  "See every plan in your city, all in one feed",
  "RSVP with a single tap, no awkward DMs",
  "Chat with the group before you meet up",
  "Get reminders so you never miss a hangout",
]

/* ─── animation presets ─── */
const ease = [0.22, 1, 0.36, 1] as const

const labelVariants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease } },
}

const headlineWords = "Your next favorite memory is one tap away".split(" ")

const wordContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.15 } },
}

const wordChild = {
  hidden: { opacity: 0, y: 18, filter: "blur(3px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease } },
}

const paragraphVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay: 0.55, ease } },
}

const bulletContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } },
}

const bulletChild = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
}

const phoneVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, delay: 0.3, ease },
  },
}

export function AppShowcaseSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const leftRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)

  const leftInView = useInView(leftRef, { once: true, margin: "-12% 0px" })
  const phoneInView = useInView(phoneRef, { once: true, margin: "-8% 0px" })

  /* scroll-linked parallax for the phone mockup */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const rawPhoneY = useTransform(scrollYProgress, [0, 1], [40, -40])
  const phoneY = useSpring(rawPhoneY, { stiffness: 80, damping: 25 })

  /* ambient glow movement */
  const glowX = useTransform(scrollYProgress, [0, 0.5, 1], [-20, 10, -10])
  const glowScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.08, 0.95])

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-secondary/40 via-card to-background px-6 py-24"
    >
      {/* ── Ambient background glow ── */}
      <motion.div
        className="pointer-events-none absolute right-[10%] top-[20%] -z-0 h-[420px] w-[420px] rounded-full bg-primary/[0.08] blur-3xl"
        style={{ x: glowX, scale: glowScale }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute -left-[5%] bottom-[10%] -z-0 h-[300px] w-[300px] rounded-full bg-accent/[0.06] blur-3xl"
        style={{ x: useTransform(scrollYProgress, [0, 1], [10, -15]) }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-0 lg:grid-cols-12 lg:items-start lg:gap-6">
          {/* ── Left column: copy ── */}
          <div className="lg:col-span-5" ref={leftRef}>
            {/* Section label */}
            <motion.div
              className="mb-4 flex items-center gap-3"
              variants={labelVariants}
              initial="hidden"
              animate={leftInView ? "visible" : "hidden"}
            >
              <span className="font-sans text-xs font-bold tracking-widest text-foreground/70">06</span>
              <motion.span
                className="h-px bg-foreground/30"
                initial={{ width: 0 }}
                animate={leftInView ? { width: 32 } : {}}
                transition={{ duration: 0.5, delay: 0.2, ease }}
                aria-hidden="true"
              />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/70">
                From plan to plans
              </span>
            </motion.div>

            {/* Headline — word-by-word stagger */}
            <motion.h3
              className="font-sans text-4xl font-bold leading-[1.05] tracking-[-0.01em] text-foreground text-balance md:text-6xl"
              variants={wordContainer}
              initial="hidden"
              animate={leftInView ? "visible" : "hidden"}
            >
              {headlineWords.map((word, i) => (
                <motion.span key={i} variants={wordChild} className="inline-block mr-[0.28em]">
                  {word}
                </motion.span>
              ))}
            </motion.h3>

            {/* Supporting paragraph */}
            <motion.p
              className="mt-5 max-w-md text-lg leading-relaxed text-foreground/80 text-pretty"
              variants={paragraphVariants}
              initial="hidden"
              animate={leftInView ? "visible" : "hidden"}
            >
              Browse, join, and show up. Every host is verified, every activity has a group chat, and every plan is
              built for meeting people, not collecting matches.
            </motion.p>

            {/* Bullet list — staggered with hover micro-interactions */}
            <motion.ul
              className="mt-8 space-y-4"
              variants={bulletContainer}
              initial="hidden"
              animate={leftInView ? "visible" : "hidden"}
            >
              {points.map((point) => (
                <motion.li
                  key={point}
                  variants={bulletChild}
                  className="group/bullet flex items-start gap-3 rounded-xl px-3 py-2 -mx-3 transition-colors duration-300 hover:bg-primary/[0.05] cursor-default"
                >
                  <motion.span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <svg
                      className="h-3 w-3"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      aria-hidden="true"
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </motion.span>
                  <span className="font-medium text-foreground transition-colors duration-300 group-hover/bullet:text-primary">
                    {point}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* ── Right column: phone mockup ── */}
          <div
            ref={phoneRef}
            className="lg:col-span-7 lg:-ml-32 lg:flex lg:items-start lg:justify-end lg:pt-0"
          >
            <motion.div
              className="relative mt-12 flex justify-center lg:mt-0 lg:justify-end"
              variants={phoneVariants}
              initial="hidden"
              animate={phoneInView ? "visible" : "hidden"}
              style={{ y: phoneY }}
            >
              {/* Soft glow behind the phone */}
              <motion.div
                className="absolute inset-0 -z-10 mx-auto h-[85%] w-[70%] rounded-[3rem] bg-primary/[0.12] blur-3xl"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={phoneInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                aria-hidden="true"
              />

              <motion.img
                src="/images/app-event-detail.png"
                alt="FrndCircle activity detail screen for a Sunset Bike Ride showing the verified host, people going, group chat preview, location, and a Request to Join button"
                className="h-auto w-full max-w-xs object-contain sm:max-w-sm lg:max-w-sm"
                style={{
                  filter: "drop-shadow(0 24px 48px rgba(0,0,0,0.35))",
                }}
                whileHover={{ scale: 1.02, rotate: -0.5 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
