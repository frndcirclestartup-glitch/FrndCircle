"use client"

import { useRef } from "react"
import { Compass, CalendarPlus, ShieldCheck, MapPin } from "lucide-react"
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion"
import { SectionLabel } from "./section-label"

const features = [
  {
    icon: Compass,
    title: "Discover what's happening",
    description:
      "Open the app and instantly see activities near you this week, filtered to your interests and your neighborhood. No more wondering what to do.",
    span: "lg:col-span-2",
    featured: true,
    gradient: "from-primary/20 via-primary/5 to-transparent",
    glowColor: "rgba(225, 174, 237, 0.15)",
  },
  {
    icon: CalendarPlus,
    title: "Host in seconds",
    description: "Got a plan? Post it in a few taps and watch like-minded people RSVP.",
    span: "lg:col-span-1",
    featured: false,
    gradient: "from-accent/20 via-accent/5 to-transparent",
    glowColor: "rgba(143, 108, 149, 0.15)",
  },
  {
    icon: ShieldCheck,
    title: "A trusted community",
    description: "Verified members and real profiles, so you always know who you're meeting.",
    span: "lg:col-span-1",
    featured: false,
    gradient: "from-accent/20 via-accent/5 to-transparent",
    glowColor: "rgba(143, 108, 149, 0.15)",
  },
  {
    icon: MapPin,
    title: "Built for your city",
    description:
      "From coffee mornings to concert nights, everything is local, so plans turn into real friendships, fast.",
    span: "lg:col-span-2",
    featured: true,
    gradient: "from-primary/20 via-primary/5 to-transparent",
    glowColor: "rgba(225, 174, 237, 0.15)",
  },
]

/* ─── 3D tilt card wrapper ─── */
function TiltCard({
  children,
  className = "",
  glowColor,
}: {
  children: React.ReactNode
  className?: string
  glowColor: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 250, damping: 25 })
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 250, damping: 25 })
  const glowX = useSpring(useTransform(x, [-0.5, 0.5], [0, 100]), { stiffness: 250, damping: 25 })
  const glowY = useSpring(useTransform(y, [-0.5, 0.5], [0, 100]), { stiffness: 250, damping: 25 })

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`relative ${className}`}
    >
      {/* Cursor-following glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([gx, gy]) =>
              `radial-gradient(circle at ${gx}% ${gy}%, ${glowColor}, transparent 60%)`
          ),
        }}
        aria-hidden="true"
      />
      {children}
    </motion.div>
  )
}

/* ─── Animated counter for a number stat ─── */
function AnimatedIcon({ icon: Icon, featured }: { icon: React.ElementType; featured: boolean }) {
  return (
    <motion.span
      className={`relative mb-6 flex h-12 w-12 items-center justify-center rounded-2xl transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground ${
        featured ? "bg-primary/15" : "bg-primary/10"
      }`}
      whileHover={{ scale: 1.1, rotate: -4 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {/* Pulse ring */}
      <motion.span
        className="absolute inset-0 rounded-2xl bg-primary/20"
        initial={{ scale: 1, opacity: 0 }}
        whileHover={{ scale: 1.6, opacity: 0 }}
        transition={{ duration: 0.6, repeat: Infinity, repeatDelay: 0.8 }}
        aria-hidden="true"
      />
      <Icon
        className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary-foreground"
        aria-hidden="true"
      />
    </motion.span>
  )
}

/* ─── Heading with word-stagger ─── */
const headingWords = "Everything you need to fill your calendar with good company".split(" ")

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
}

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      delay: i * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export function FeaturesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  const headingInView = useInView(headingRef, { once: true, margin: "-10% 0px" })
  const gridInView = useInView(gridRef, { once: true, margin: "-5% 0px" })

  return (
    <section id="features" className="px-6 py-24" ref={sectionRef}>
      <div className="mx-auto max-w-6xl">
        {/* ─── Heading ─── */}
        <div className="mb-16 max-w-2xl" ref={headingRef}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={headingInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel index="01">Why FrndCircle</SectionLabel>
          </motion.div>

          <motion.h3
            className="font-sans text-4xl font-bold leading-[1.05] tracking-[-0.01em] text-foreground text-balance md:text-6xl"
            variants={containerVariants}
            initial="hidden"
            animate={headingInView ? "visible" : "hidden"}
          >
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                className="inline-block mr-[0.28em]"
              >
                {word}
              </motion.span>
            ))}
          </motion.h3>
        </div>

        {/* ─── Feature cards ─── */}
        <div className="grid gap-6 lg:grid-cols-3" ref={gridRef}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={feature.span}
              variants={cardVariants}
              initial="hidden"
              animate={gridInView ? "visible" : "hidden"}
              custom={index}
            >
              <TiltCard
                className="h-full"
                glowColor={feature.glowColor}
              >
                <div
                  className={`group relative h-full overflow-hidden rounded-3xl border border-border p-8 transition-all duration-500 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/[0.08] ${
                    feature.featured ? "bg-accent/40 md:p-10" : "bg-card"
                  }`}
                >
                  {/* Ambient gradient blob */}
                  {feature.featured && (
                    <motion.div
                      className="absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
                      initial={{ opacity: 0, scale: 0.6 }}
                      animate={gridInView ? { opacity: 0.7, scale: 1 } : {}}
                      transition={{ duration: 1.2, delay: index * 0.15, ease: "easeOut" }}
                      aria-hidden="true"
                    />
                  )}

                  {/* Shimmer line on hover */}
                  <div className="absolute inset-0 -translate-x-full rounded-3xl bg-gradient-to-r from-transparent via-white/[0.03] to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full" aria-hidden="true" />

                  {/* Icon */}
                  <AnimatedIcon icon={feature.icon} featured={!!feature.featured} />

                  {/* Title */}
                  <motion.h4
                    className={`relative mb-3 font-medium text-foreground ${
                      feature.featured ? "text-2xl" : "text-xl"
                    }`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={gridInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {feature.title}
                  </motion.h4>

                  {/* Description */}
                  <motion.p
                    className="relative text-sm leading-relaxed text-muted-foreground"
                    initial={{ opacity: 0 }}
                    animate={gridInView ? { opacity: 1 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.35 + index * 0.1,
                      ease: "easeOut",
                    }}
                  >
                    {feature.description}
                  </motion.p>

                  {/* Bottom decorative line */}
                  <motion.div
                    className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    aria-hidden="true"
                  />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
