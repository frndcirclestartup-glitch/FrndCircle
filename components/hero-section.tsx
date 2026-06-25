"use client"

import { useEffect, useRef, useState } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  AnimatePresence,
} from "framer-motion"
import {
  Star,
  MapPin,
  Users,
  MessageCircle,
  ShieldCheck,
  Clock,
  Coffee,
  Bike,
  Dice5,
  BookOpen,
  UtensilsCrossed,
  Mountain,
  Camera,
  Palette,
  Sparkles,
} from "lucide-react"
import { StoreButton } from "./app-store-buttons"

/* ═══════════════════════════════════════════
   Animation presets
   ═══════════════════════════════════════════ */
const ease = [0.22, 1, 0.36, 1] as const

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 22, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, delay, ease },
  },
})

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, delay, ease: "easeOut" } },
})

const slideInLeft = (delay = 0) => ({
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay, ease } },
})

/* ═══════════════════════════════════════════
   Activity chip data
   ═══════════════════════════════════════════ */
const activityChips = [
  { icon: Coffee, label: "Coffee Meetups" },
  { icon: Bike, label: "Bike Rides" },
  { icon: Dice5, label: "Board Games" },
  { icon: BookOpen, label: "Book Clubs" },
  { icon: UtensilsCrossed, label: "Brunches" },
  { icon: Mountain, label: "Weekend Hikes" },
  { icon: Camera, label: "Photo Walks" },
  { icon: Palette, label: "Art Nights" },
]

/* ═══════════════════════════════════════════
   Floating social proof cards
   ═══════════════════════════════════════════ */
const floatingCards = [
  {
    icon: Users,
    title: "12 people joining tonight",
    sub: "Sunset Bike Ride · Koramangala",
    position: "left-[-2%] top-[14%]",
    delay: 0.8,
    float: "animate-float-slow",
  },
  {
    icon: Clock,
    title: "4 spots left",
    sub: "Coffee & Conversations · Sunday 10 AM",
    position: "right-[-5%] bottom-[26%]",
    delay: 1.2,
    float: "animate-float-slow",
  },
]

/* ═══════════════════════════════════════════
   Trust signals
   ═══════════════════════════════════════════ */
const trustPoints = [
  "Verified hosts & real profiles",
  "See who's going before you join",
  "Group chat before the meetup",
]

/* ═══════════════════════════════════════════
   Hero Component
   ═══════════════════════════════════════════ */
export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const copyRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  const copyInView = useInView(copyRef, { once: true })
  const phoneInView = useInView(phoneRef, { once: true, margin: "-5%" })

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(t)
  }, [])

  /* scroll-linked parallax */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  })

  const frontPhoneY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -60]), {
    stiffness: 60,
    damping: 20,
  })
  const backPhoneY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -35]), {
    stiffness: 60,
    damping: 20,
  })
  const glowScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.6], [0.6, 0.3])

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative overflow-hidden px-6 pt-32 pb-6 md:pt-40 md:pb-12"
    >
      {/* ── Ambient background ── */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/30 via-background to-background" />
      <motion.div
        className="absolute top-[12%] left-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-primary/[0.14] blur-[100px]"
        style={{ scale: glowScale, opacity: glowOpacity }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute top-[45%] right-[5%] -z-10 h-[380px] w-[380px] rounded-full bg-accent/20 blur-[80px]"
        style={{ opacity: glowOpacity }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute bottom-[10%] left-[8%] -z-10 h-[260px] w-[260px] rounded-full bg-primary/[0.08] blur-[60px]"
        aria-hidden="true"
        animate={{ scale: [1, 1.1, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-8">
          {/* ════════════════════════════════════
              LEFT — Copy Column
              ════════════════════════════════════ */}
          <motion.div
            ref={copyRef}
            className="text-center lg:text-left"
            variants={stagger}
            initial="hidden"
            animate={mounted && copyInView ? "visible" : "hidden"}
          >
            {/* Eyebrow badge */}
            <motion.span
              className="inline-flex items-center gap-2.5 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-primary"
              variants={fadeUp(0)}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-dot" aria-hidden="true" />
              The app for real-life friendships
            </motion.span>

            {/* Headline */}
            <motion.h1
              className="mt-7 font-sans text-[3.25rem] font-bold leading-[0.98] tracking-[-0.02em] text-foreground text-balance sm:text-7xl lg:text-[5.5rem]"
              variants={fadeUp(0.1)}
            >
              Never have another{" "}
              <span className="relative inline-block italic text-primary">
                boring
                <svg
                  className="draw-underline absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 16"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M3 11C40 4 130 2 197 7"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              week.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted-foreground text-pretty lg:mx-0"
              variants={fadeUp(0.25)}
            >
              FrndCircle helps you discover and host activities with like-minded people in your city. Real plans, real
              people, real friendships, right from your phone.
            </motion.p>

            {/* CTA row */}
            <motion.div
              className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start"
              variants={fadeUp(0.4)}
            >
              <StoreButton store="apple" comingSoon />
              <StoreButton store="google" comingSoon />
            </motion.div>

            {/* Social proof */}
            <motion.div
              className="mt-7 flex items-center justify-center gap-3 lg:justify-start"
              variants={fadeUp(0.5)}
            >
              <div className="flex" aria-hidden="true">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Loved by <span className="font-medium text-foreground">12,000+</span> members
              </p>
            </motion.div>

            {/* Trust cues */}
            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start"
              variants={fadeUp(0.6)}
            >
              {trustPoints.map((point) => (
                <span
                  key={point}
                  className="flex items-center gap-2 text-xs text-muted-foreground/80"
                >
                  <ShieldCheck className="h-3.5 w-3.5 text-primary/70" aria-hidden="true" />
                  {point}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* ════════════════════════════════════
              RIGHT — Phone Composition
              ════════════════════════════════════ */}
          <div ref={phoneRef} className="relative flex items-center justify-center">
            {/* Radial glow behind phones */}
            <motion.div
              className="absolute top-1/2 left-1/2 -z-[1] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.1] blur-[80px]"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={phoneInView ? { opacity: 0.8, scale: 1 } : {}}
              transition={{ duration: 1.2, ease: "easeOut" }}
              aria-hidden="true"
            />

            <div className="relative h-[560px] w-full max-w-[560px] md:h-[680px]">
              {/* Back phone — activity detail */}
              <motion.img
                src="/images/phone-activity-transparent.png"
                alt="FrndCircle activity detail screen showing a Sunset Bike Ride with verified host, 12 people going, group chat, and Request to Join button"
                className="pointer-events-none absolute z-0 hidden h-[400px] w-auto object-contain sm:block md:h-[480px]"
                style={{
                  left: "2%",
                  top: "10%",
                  y: backPhoneY,
                  filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.4))",
                }}
                initial={{ opacity: 0, x: -40, rotate: -10 }}
                animate={phoneInView ? { opacity: 0.9, x: 0, rotate: -7 } : {}}
                transition={{ duration: 0.9, delay: 0.4, ease }}
              />

              {/* Front phone — home feed (hero) */}
              <motion.img
                src="/images/phone-feed-transparent.png"
                alt="FrndCircle home feed showing upcoming activities: Sunset Bike Ride, Coffee & Conversations, Weekend Hiking Club, Board Game Night — each with member avatars and going counts"
                className="pointer-events-none relative z-10 mx-auto h-[520px] w-auto object-contain md:h-[640px]"
                style={{
                  y: frontPhoneY,
                  filter: "drop-shadow(0 30px 60px rgba(0,0,0,0.5))",
                }}
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                animate={phoneInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.15, ease }}
              />

              {/* ── Floating social proof cards ── */}
              <AnimatePresence>
                {phoneInView &&
                  floatingCards.map((card) => (
                    <motion.div
                      key={card.title}
                      className={`absolute z-20 hidden items-center gap-2.5 rounded-2xl border border-border/60 bg-card/90 px-4 py-3 shadow-xl backdrop-blur-md ${card.float} md:flex ${card.position}`}
                      initial={{ opacity: 0, scale: 0.85, y: 12 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: card.delay, ease }}
                      aria-hidden="true"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <card.icon className="h-4 w-4 text-primary" />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-xs font-semibold text-foreground">
                          {card.title}
                        </p>
                        <p className="truncate text-[11px] text-muted-foreground">{card.sub}</p>
                      </div>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ════════════════════════════════════
            Activity Chips — below the fold
            ════════════════════════════════════ */}
        <motion.div
          className="mt-14 flex flex-wrap items-center justify-center gap-3 lg:mt-10"
          initial="hidden"
          animate={mounted ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.05, delayChildren: 1.0 } },
          }}
        >
          <motion.span
            className="mr-2 text-xs font-medium uppercase tracking-widest text-muted-foreground/60"
            variants={fadeIn(0.9)}
          >
            Popular activities
          </motion.span>
          {activityChips.map((chip) => (
            <motion.span
              key={chip.label}
              className="group inline-flex cursor-default items-center gap-2 rounded-full border border-border/60 bg-card/50 px-4 py-2 text-sm font-medium text-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:bg-primary/[0.06] hover:text-primary"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
              }}
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
            >
              <chip.icon className="h-3.5 w-3.5 text-primary/60 transition-colors duration-300 group-hover:text-primary" aria-hidden="true" />
              {chip.label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
