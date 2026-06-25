"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Calendar,
  Clock,
  Users,
  Heart,
  Share2,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Shield,
  Star,
  X,
  Check,
  Smartphone,
} from "lucide-react"
import { StoreButton } from "./app-store-buttons"
import type { Activity } from "@/lib/activities-data"
import { useToast } from "@/hooks/use-toast"

function AnimateIn({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  )
}

export function ActivityDetailClient({
  activity,
  relatedActivities,
}: {
  activity: Activity
  relatedActivities: Activity[]
}) {
  const [isSaved, setIsSaved] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [heroLoaded, setHeroLoaded] = useState(false)
  const [showAppModal, setShowAppModal] = useState(false)
  const [waitlistEmail, setWaitlistEmail] = useState("")
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false)
  const [waitlistLoading, setWaitlistLoading] = useState(false)
  const { toast } = useToast()

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!waitlistEmail.trim()) return

    setWaitlistLoading(true)
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: waitlistEmail,
          activityTitle: activity.title,
        }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit. Please try again.")
      }

      setWaitlistSubmitted(true)
      toast({
        title: "Joined Waitlist!",
        description: `You have been added to the waitlist for ${activity.title}.`,
      })
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: err.message || "Failed to submit. Please try again.",
      })
    } finally {
      setWaitlistLoading(false)
    }
  }

  const openAppModal = () => setShowAppModal(true)
  const closeAppModal = () => setShowAppModal(false)

  useEffect(() => {
    const timer = setTimeout(() => setHeroLoaded(true), 100)
    const onScroll = () => {
      if (window.scrollY < 800) setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const spotsPercentage = ((activity.totalSpots - activity.spotsLeft) / activity.totalSpots) * 100

  return (
    <>
      {/* ───── Get the App Modal ───── */}
      {showAppModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={closeAppModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]" />

          {/* Modal */}
          <div
            className="relative z-10 w-full max-w-md rounded-3xl bg-card border border-border p-8 shadow-2xl shadow-black/30 animate-[modalSlideUp_0.35s_ease-out]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeAppModal}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-secondary/60 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Icon */}
            <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-primary/15 flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-primary" />
            </div>

            <h3 className="text-2xl font-bold text-foreground text-center mb-2">
              Join on the app
            </h3>
            <p className="text-sm text-muted-foreground text-center leading-relaxed mb-8">
              FrndCircle is a mobile experience. Download the app to request to join
              activities, save your favorites, and connect with your community.
            </p>

            {/* App store buttons */}
            <div className="flex flex-col items-center gap-3 mb-8">
              <StoreButton store="apple" comingSoon />
              <StoreButton store="google" comingSoon />
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <span className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted-foreground uppercase tracking-widest">or get notified</span>
              <span className="flex-1 h-px bg-border" />
            </div>

            {/* Waitlist form */}
            {waitlistSubmitted ? (
              <div className="flex items-center justify-center gap-3 rounded-2xl bg-primary/15 px-6 py-4 text-foreground">
                <Check className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="text-sm">You&apos;re on the list! We&apos;ll notify you at launch.</p>
              </div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="flex gap-3">
                <label htmlFor="modal-waitlist-email" className="sr-only">Email address</label>
                <input
                  id="modal-waitlist-email"
                  type="email"
                  required
                  disabled={waitlistLoading}
                  value={waitlistEmail}
                  onChange={(e) => setWaitlistEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="flex-1 rounded-full border border-border bg-muted px-5 py-3 text-sm text-foreground outline-none ring-2 ring-transparent transition-shadow placeholder:text-muted-foreground focus:ring-primary disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={waitlistLoading}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {waitlistLoading ? "Joining..." : "Join"}
                  {!waitlistLoading && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
      {/* ───── Immersive Hero ───── */}
      <section className="relative h-[70vh] min-h-[480px] max-h-[700px] overflow-hidden">
        <img
          src={activity.image}
          alt={activity.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
            heroLoaded ? "scale-100 opacity-100" : "scale-105 opacity-0"
          }`}
          style={{ transform: `scale(${1 + scrollY * 0.0003}) translateY(${scrollY * 0.15}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />

        {/* Back button */}
        <div className="absolute top-24 left-0 right-0 px-6">
          <div className="max-w-6xl mx-auto">
            <Link
              href="/#activities"
              className={`inline-flex items-center gap-2 rounded-full bg-background/60 backdrop-blur-xl border border-border/50 px-4 py-2.5 text-sm text-foreground hover:bg-background/80 transition-all duration-300 ${
                heroLoaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Activities
            </Link>
          </div>
        </div>

        {/* Hero content overlay */}
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10">
          <div className="max-w-6xl mx-auto">
            <div
              className={`transition-all duration-1000 delay-200 ${
                heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 px-3.5 py-1.5 text-xs font-medium text-primary mb-4">
                <Sparkles className="w-3 h-3" />
                {activity.category}
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-3">
                {activity.title}
              </h1>
              <p className="text-lg md:text-xl text-white/70 max-w-xl">{activity.tagline}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Main Content ───── */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 lg:gap-14">
            {/* Left column — Detail content */}
            <div className="space-y-12">
              {/* Quick info pills */}
              <AnimateIn>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">{activity.location}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">{activity.date}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">{activity.time}</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-sm text-foreground">
                      {activity.membersGoing} going · {activity.spotsLeft} spots left
                    </span>
                  </div>
                </div>
              </AnimateIn>

              {/* Description */}
              <AnimateIn delay={100}>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">About this activity</h2>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    {activity.description}
                  </p>
                  {activity.aboutSections.map((section, i) => (
                    <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {section}
                    </p>
                  ))}
                </div>
              </AnimateIn>

              {/* Highlights grid */}
              <AnimateIn delay={200}>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Highlights</h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {activity.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="group rounded-2xl bg-card border border-border p-5 text-center hover:border-primary/40 hover:bg-primary/[0.04] transition-all duration-300"
                      >
                        <span className="text-2xl block mb-2">{h.icon}</span>
                        <p className="text-xs text-muted-foreground mb-1">{h.label}</p>
                        <p className="text-sm font-semibold text-foreground">{h.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              {/* Who it's for */}
              <AnimateIn delay={300}>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Who it&apos;s for</h2>
                  <div className="rounded-2xl bg-card border border-border p-6 space-y-4">
                    {activity.whoItsFor.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimateIn>

              {/* Host profile */}
              <AnimateIn delay={400}>
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Meet your host</h2>
                  <div className="rounded-2xl bg-card border border-border p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <img
                          src={activity.host.avatar}
                          alt={activity.host.name}
                          className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/30"
                        />
                        <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-card" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{activity.host.name}</h3>
                        <p className="text-sm text-primary">{activity.host.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 pt-4 border-t border-border">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-primary fill-primary" />
                        <span className="text-sm text-muted-foreground">4.9 rating</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          {activity.host.activitiesHosted} activities hosted
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Verified host</span>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateIn>

              {/* Tags */}
              <AnimateIn delay={500}>
                <div className="flex flex-wrap gap-2">
                  {activity.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary/50 border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </AnimateIn>
            </div>

            {/* Right column — Sticky CTA sidebar */}
            <div className="lg:relative">
              <div className="lg:sticky lg:top-28 space-y-6">
                <AnimateIn delay={200}>
                  <div className="rounded-3xl bg-card border border-border p-6 shadow-xl shadow-black/10">
                    {/* Capacity bar */}
                    <div className="mb-5">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">
                          <span className="font-semibold text-foreground">{activity.membersGoing}</span> of{" "}
                          {activity.totalSpots} spots filled
                        </span>
                        <span className="text-primary font-medium">{activity.spotsLeft} left</span>
                      </div>
                      <div className="h-2 rounded-full bg-secondary overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                          style={{ width: `${spotsPercentage}%` }}
                        />
                      </div>
                    </div>

                    {/* Schedule */}
                    <div className="space-y-3 mb-6 pb-6 border-b border-border">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-primary shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{activity.date}</p>
                          <p className="text-xs text-muted-foreground">{activity.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-primary shrink-0" />
                        <div>
                          <p className="text-sm font-medium text-foreground">{activity.location}</p>
                          <p className="text-xs text-muted-foreground">{activity.city}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA buttons */}
                    <button
                      id="rsvp-button"
                      onClick={openAppModal}
                      className="w-full relative overflow-hidden rounded-2xl bg-primary text-primary-foreground font-semibold py-4 text-base transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98] mb-3 group"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Request to Join
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                      <span className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </button>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        id="save-button"
                        onClick={openAppModal}
                        className="flex items-center justify-center gap-2 rounded-xl border border-border bg-transparent text-muted-foreground hover:text-foreground hover:border-foreground/30 py-3 text-sm font-medium transition-all duration-300"
                      >
                        <Heart className="w-4 h-4" />
                        Save
                      </button>
                      <button
                        id="share-button"
                        onClick={openAppModal}
                        className="flex items-center justify-center gap-2 rounded-xl border border-border py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all duration-300"
                      >
                        <Share2 className="w-4 h-4" />
                        Share
                      </button>
                    </div>
                  </div>
                </AnimateIn>

                {/* Trust signals */}
                <AnimateIn delay={400}>
                  <div className="rounded-2xl bg-card/50 border border-border/50 p-4 space-y-3">
                    <div className="flex items-center gap-2.5">
                      <Shield className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Verified host & safe meetup</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Users className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Join requests reviewed by host</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-primary" />
                      <span className="text-xs text-muted-foreground">Free to join · No hidden costs</span>
                    </div>
                  </div>
                </AnimateIn>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Related Activities ───── */}
      {relatedActivities.length > 0 && (
        <section className="px-6 py-16 border-t border-border">
          <div className="max-w-6xl mx-auto">
            <AnimateIn>
              <h2 className="text-3xl font-bold text-foreground mb-2">You might also like</h2>
              <p className="text-sm text-muted-foreground mb-10">
                Explore more activities happening in your city
              </p>
            </AnimateIn>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedActivities.map((related, index) => (
                <AnimateIn key={related.slug} delay={index * 100}>
                  <Link
                    href={`/activity/${related.slug}`}
                    className="group relative rounded-3xl overflow-hidden aspect-[4/5] block"
                  >
                    <img
                      src={related.image}
                      alt={related.alt}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-medium text-white">{related.title}</h3>
                        <p className="text-sm text-white/70 mt-1">{related.tagline}</p>
                      </div>
                      <span className="w-10 h-10 shrink-0 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                        <ArrowUpRight className="w-4 h-4 text-white" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </AnimateIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
