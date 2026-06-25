"use client"

import { useEffect, useRef, type ReactNode } from "react"

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode
  className?: string
  delay?: number
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const reveal = () => el.classList.add("is-visible")

    // Respect reduced motion: show immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal()
      return
    }

    // If the element is already within (or above) the viewport on mount,
    // reveal it right away so content is never stuck hidden.
    const inView = () => {
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      return rect.top < vh && rect.bottom > 0
    }
    if (inView()) {
      reveal()
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            reveal()
            observer.unobserve(el)
          }
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    )
    observer.observe(el)

    // Safety net: if the observer never fires (race conditions, iframes,
    // fast scrolls), reveal once the element scrolls into view.
    const onScroll = () => {
      if (inView()) {
        reveal()
        cleanup()
      }
    }
    const cleanup = () => {
      observer.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
    window.addEventListener("scroll", onScroll, { passive: true })

    return cleanup
  }, [])

  return (
    <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  )
}
