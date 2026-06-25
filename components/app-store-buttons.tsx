import type React from "react"
import { cn } from "@/lib/utils"

interface PhoneMockupProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export function PhoneMockup({ src, alt, className }: PhoneMockupProps) {
  return (
    <div className={cn("relative mx-auto", className)} style={{ width: 300 }}>
      {/* Phone frame */}
      <div className="relative rounded-[3rem] border-[10px] border-foreground bg-foreground shadow-2xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 h-6 w-32 rounded-b-2xl bg-foreground" />
        {/* Screen */}
        <div className="relative overflow-hidden rounded-[2.2rem] bg-background aspect-[9/19.5]">
          <img src={src || "/placeholder.svg"} alt={alt} className="h-full w-full object-cover" />
        </div>
      </div>
      {/* Side buttons */}
      <div className="absolute -left-[10px] top-28 h-12 w-[3px] rounded-l bg-foreground/80" />
      <div className="absolute -left-[10px] top-44 h-16 w-[3px] rounded-l bg-foreground/80" />
      <div className="absolute -right-[10px] top-36 h-20 w-[3px] rounded-r bg-foreground/80" />
    </div>
  )
}

interface StoreButtonProps {
  store: "apple" | "google"
  comingSoon?: boolean
  className?: string
}

export function StoreButton({ store, comingSoon = false, className }: StoreButtonProps) {
  const isApple = store === "apple"
  return (
    <a
      href="#waitlist"
      aria-disabled={comingSoon}
      className={cn(
        "group inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background transition-opacity hover:opacity-90",
        className,
      )}
    >
      {isApple ? (
        <svg className="h-7 w-7 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.05 12.04c-.03-2.85 2.33-4.22 2.44-4.28-1.33-1.95-3.4-2.21-4.13-2.24-1.76-.18-3.43 1.03-4.32 1.03-.89 0-2.26-1.01-3.72-.98-1.91.03-3.68 1.11-4.66 2.82-1.99 3.45-.51 8.55 1.42 11.35.94 1.37 2.06 2.91 3.53 2.85 1.42-.06 1.96-.92 3.67-.92 1.71 0 2.2.92 3.7.89 1.53-.03 2.5-1.39 3.43-2.77 1.08-1.59 1.53-3.13 1.55-3.21-.03-.01-2.98-1.14-3.01-4.53zM14.28 4.16c.78-.95 1.31-2.27 1.16-3.58-1.13.05-2.49.75-3.3 1.7-.72.84-1.36 2.18-1.19 3.46 1.26.1 2.55-.64 3.33-1.58z" />
        </svg>
      ) : (
        <svg className="h-7 w-7 shrink-0" viewBox="0 0 24 24" aria-hidden="true">
          <path fill="#EA4335" d="M3.6 2.3c-.2.2-.3.6-.3 1v17.4c0 .4.1.8.3 1l11-11.7L3.6 2.3z" opacity=".9" />
          <path fill="currentColor" d="M3.6 2.3 14.6 9l2.9-3.1L5.6 1.4c-.8-.4-1.6-.4-2 .9z" opacity=".6" />
          <path fill="currentColor" d="m17.5 5.9-2.9 3.1 2.9 3.1 3.4-1.9c1-.6 1-1.8 0-2.4l-3.4-1.9z" opacity=".8" />
          <path fill="currentColor" d="M3.6 21.7 14.6 9l2.9 3.1L5.6 22.6c-.8.4-1.6.4-2-.9z" opacity=".7" />
        </svg>
      )}
      <span className="flex flex-col items-start leading-tight">
        <span className="text-[10px] uppercase tracking-wide text-background/70">
          {comingSoon ? "Coming soon to" : "Download on the"}
        </span>
        <span className="text-base font-medium">{isApple ? "App Store" : "Google Play"}</span>
      </span>
    </a>
  )
}
