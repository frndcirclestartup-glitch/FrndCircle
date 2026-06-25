"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { StoreButton } from "./app-store-buttons"
import { useToast } from "@/hooks/use-toast"

export function CTASection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return

    setLoading(true)
    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit. Please try again.")
      }

      setSubmitted(true)
      toast({
        title: "Joined Waitlist!",
        description: "You have been successfully added to the waitlist.",
      })
    } catch (err: any) {
      toast({
        variant: "destructive",
        title: "Submission failed",
        description: err.message || "Failed to submit. Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="waitlist" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-20 text-center ring-1 ring-inset ring-primary/10 md:py-28">
          {/* Ambient neon glow */}
          <div
            className="absolute left-1/2 top-1/2 h-[480px] w-[480px] rounded-full bg-primary/25 blur-3xl animate-glow-pulse"
            aria-hidden="true"
          />
          <div className="relative z-10 mx-auto max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] text-primary">Coming soon</span>
            <h2 className="mt-6 mb-6 font-serif text-4xl font-bold text-foreground text-balance md:text-6xl">
              Never have another boring week.
            </h2>
            <p className="mb-10 leading-relaxed text-muted-foreground text-pretty">
              FrndCircle is launching soon on iOS and Android. Join the waitlist and we&apos;ll let you know the moment
              it&apos;s ready to download.
            </p>

            {submitted ? (
              <div className="mx-auto flex max-w-md items-center justify-center gap-3 rounded-2xl bg-primary/15 px-6 py-4 text-foreground">
                <Check className="h-5 w-5 text-primary" aria-hidden="true" />
                <p className="text-sm">You&apos;re on the list. We&apos;ll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                <label htmlFor="waitlist-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  disabled={loading}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="flex-1 rounded-full border border-border bg-muted px-5 py-3.5 text-sm text-foreground outline-none ring-2 ring-transparent transition-shadow placeholder:text-muted-foreground focus:ring-primary disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  {loading ? "Joining..." : "Join waitlist"}
                  {!loading && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
                </button>
              </form>
            )}

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <StoreButton store="apple" comingSoon />
              <StoreButton store="google" comingSoon />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
