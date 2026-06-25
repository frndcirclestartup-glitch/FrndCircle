"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Lock, Eye, CheckCircle, ArrowRight, Mail, Calendar } from "lucide-react"

const sections = [
  { id: "introduction", label: "1. Introduction" },
  { id: "information-collected", label: "2. Information We Collect" },
  { id: "how-we-use-information", label: "3. How We Use Information" },
  { id: "sharing-information", label: "4. Sharing Your Information" },
  { id: "data-security-retention", label: "5. Security & Retention" },
  { id: "your-rights", label: "6. Your Rights & Choices" },
  { id: "cookies", label: "7. Cookies & Tracking" },
  { id: "childrens-privacy", label: "8. Children's Privacy" },
  { id: "changes-policy", label: "9. Policy Changes" },
  { id: "contact-us", label: "10. Contact Us" },
]

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("introduction")

  useEffect(() => {
    const observers = sections.map((sec) => {
      const el = document.getElementById(sec.id)
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sec.id)
          }
        },
        {
          rootMargin: "-20% 0px -60% 0px", // Trigger when section is in the upper middle area of viewport
        }
      )
      observer.observe(el)
      return { observer, el }
    })

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el)
        }
      })
    }
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const headerOffset = 120
      const elementPosition = element.getBoundingClientRect().top + window.scrollY
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: "smooth",
      })
      setActiveSection(id)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative">
      <Header />

      {/* Decorative Glow Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] rounded-full bg-accent/80 opacity-[0.06] blur-[150px]" />
        <div className="absolute bottom-[20%] left-[5%] w-[450px] h-[450px] rounded-full bg-tertiary/10 blur-[130px]" />
      </div>

      {/* Hero Header */}
      <section className="pt-32 pb-12 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-4 animate-fade-in">
            <Shield className="w-3.5 h-3.5" />
            <span>Privacy Standards Secured</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-primary">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base mb-6">
            We value your trust. This Privacy Policy details how we collect, use, and protect your information when using the FrndCircle platform.
          </p>
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground border-t border-border/40 pt-4 max-w-md mx-auto">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              <span>Last Updated: June 16, 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-primary" />
              <span>GDPR & CCPA Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="pb-24 px-6 relative z-10 flex-grow">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Sidebar - Sticky Table of Contents (Desktop only) */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="sticky top-28 border border-border/40 bg-card/25 backdrop-blur-md rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4 border-b border-border/40 pb-2">
                On This Page
              </h3>
              <nav className="flex flex-col space-y-1">
                {sections.map((sec) => (
                  <a
                    key={sec.id}
                    href={`#${sec.id}`}
                    onClick={(e) => scrollToSection(e, sec.id)}
                    className={`text-sm py-2 px-1 transition-all duration-200 border-l-2 ${
                      activeSection === sec.id
                        ? "text-primary border-primary font-medium pl-3"
                        : "text-muted-foreground border-transparent hover:text-foreground hover:border-border/60 pl-3"
                    }`}
                  >
                    {sec.label}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Legal Content */}
          <main className="lg:col-span-3">
            <div className="border border-border/40 bg-card/15 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-xl space-y-12">
              
              {/* Introduction */}
              <section id="introduction" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2.5 pb-2 border-b border-border/30">
                  <span className="text-primary">1.</span> Introduction
                </h2>
                <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    Welcome to FrndCircle (referred to as &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). FrndCircle is a social discovery community application that facilitates real-world interactions and group activities. We are committed to protecting your personal data and ensuring your privacy.
                  </p>
                  <p>
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our mobile application, or engage with our services. By accessing or using our services, you agree to the collection and use of information in accordance with this policy.
                  </p>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 flex gap-3 text-sm">
                    <Eye className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground/90">
                      <strong>Key Concept:</strong> We believe in minimal data footprint. We only collect information that is strictly necessary to match you with interesting real-life activities and verify members to keep our community safe.
                    </p>
                  </div>
                </div>
              </section>

              {/* Information We Collect */}
              <section id="information-collected" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2.5 pb-2 border-b border-border/30">
                  <span className="text-primary">2.</span> Information We Collect
                </h2>
                <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    To provide our social activity discovery service, we collect personal data that falls into the following categories:
                  </p>
                  
                  <div className="space-y-4 mt-6">
                    <div className="p-5 rounded-2xl bg-card/40 border border-border/40 hover:border-border transition-colors">
                      <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Account & Profile Information
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground pl-3.5">
                        When registering, you provide your name, phone number, date of birth, gender, profile photo, and biography. You can optionally link social accounts (e.g. Instagram) to verify your identity.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-card/40 border border-border/40 hover:border-border transition-colors">
                      <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Geolocation Information
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground pl-3.5">
                        With your consent, we collect precise or approximate location details from your mobile device. This is vital to display local activities (e.g., coffee meetups, hiking trips) and ensure events are shown in your actual city.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-card/40 border border-border/40 hover:border-border transition-colors">
                      <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Activity & Interaction Data
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground pl-3.5">
                        We collect information about the activities you host, join, or express interest in, as well as messages exchanged in group chat rooms dedicated to coordinate the real-life activities.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-card/40 border border-border/40 hover:border-border transition-colors">
                      <h3 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        Device & Usage Data
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground pl-3.5">
                        Technical data including your IP address, device type, operating system version, app version, crashes, and platform activity logs are collected automatically.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section id="how-we-use-information" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2.5 pb-2 border-b border-border/30">
                  <span className="text-primary">3.</span> How We Use Information
                </h2>
                <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    We process your information for purposes based on legitimate business interests, performance of contracts, compliance with legal obligations, and your consent. Specifically, we use it to:
                  </p>
                  
                  <ul className="space-y-2.5 pl-1.5 text-sm md:text-base">
                    {[
                      "Facilitate account creation, user authentication, and profile verification.",
                      "Connect you with other members hosting activities nearby in your city.",
                      "Enable coordinate chats, activity reviews, and host approvals.",
                      "Provide push notifications for status updates on activities (e.g. approved to join).",
                      "Ensure member safety, moderate inappropriate behaviors, and prevent scams.",
                      "Analyze usage statistics to improve FrndCircle's features and user experience.",
                      "Perform legal duties, enforce our terms, and handle disputes."
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Sharing Your Information */}
              <section id="sharing-information" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2.5 pb-2 border-b border-border/30">
                  <span className="text-primary">4.</span> Sharing Your Information
                </h2>
                <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    We do not sell your personal data. We only share information in the following specific circumstances:
                  </p>
                  <div className="space-y-4">
                    <p>
                      <strong>With Other Members:</strong> When you use our services, your profile information (name, bio, photo) is visible to other members. When you request to join an activity, the host is shown your details. When you join, your name and photo are visible to other participants in the activity group and chat.
                    </p>
                    <p>
                      <strong>Service Providers:</strong> We share data with third-party vendors who perform services on our behalf, such as cloud hosting (Vercel, AWS), analytics (Vercel Analytics), SMS/OTP services for authentication, and push notification systems.
                    </p>
                    <p>
                      <strong>Legal Requirements:</strong> We may disclose information if required to do so by law, court order, or to protect the safety, rights, or property of FrndCircle, our members, or the public.
                    </p>
                  </div>
                </div>
              </section>

              {/* Data Security and Retention */}
              <section id="data-security-retention" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2.5 pb-2 border-b border-border/30">
                  <span className="text-primary">5.</span> Security & Retention
                </h2>
                <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal data from unauthorized access, loss, or alteration. All database and API communications are encrypted in transit using SSL/TLS protocols.
                  </p>
                  <p>
                    We retain your personal information only as long as you maintain an active account with FrndCircle. When you request to delete your account, we sanitize and delete your profile data, chat messages, and hosted activity records from our primary production databases within 30 days, subject to legal archiving laws.
                  </p>
                </div>
              </section>

              {/* Your Rights and Choices */}
              <section id="your-rights" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2.5 pb-2 border-b border-border/30">
                  <span className="text-primary">6.</span> Your Rights & Choices
                </h2>
                <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    Depending on your location, you may have statutory rights under local privacy laws (e.g., GDPR in the EU, CCPA in California). These rights include:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="p-4 rounded-xl border border-border/40 bg-card/10">
                      <h4 className="text-xs font-semibold uppercase text-foreground mb-1">Access & Portability</h4>
                      <p className="text-xs text-muted-foreground">Request a copy of the personal information we hold about you at any time.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-border/40 bg-card/10">
                      <h4 className="text-xs font-semibold uppercase text-foreground mb-1">Rectification</h4>
                      <p className="text-xs text-muted-foreground">Update your details or request corrections to inaccurate profiles directly inside the app settings.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-border/40 bg-card/10">
                      <h4 className="text-xs font-semibold uppercase text-foreground mb-1">Erasure (&quot;Right to be Forgotten&quot;)</h4>
                      <p className="text-xs text-muted-foreground">Request full deletion of your account and related records in Settings &gt; Delete Account.</p>
                    </div>
                    <div className="p-4 rounded-xl border border-border/40 bg-card/10">
                      <h4 className="text-xs font-semibold uppercase text-foreground mb-1">Withdraw Consent</h4>
                      <p className="text-xs text-muted-foreground">Toggle off precise location coordinates or disable push notifications in your system settings.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cookies and Tracking Technologies */}
              <section id="cookies" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2.5 pb-2 border-b border-border/30">
                  <span className="text-primary">7.</span> Cookies & Tracking Technologies
                </h2>
                <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    We use cookies and similar tracking technologies (like web beacons, SDKs, and device identifiers) to recognize your device, log session details, and collect technical analytics.
                  </p>
                  <div className="space-y-3">
                    <p>
                      <strong>Essential Cookies:</strong> These cookies are critical to securely deliver the website and app services, e.g. maintaining your session status when logged in.
                    </p>
                    <p>
                      <strong>Performance & Analytics:</strong> We use lightweight analytics tools (like Vercel Analytics) to measure site traffic and feature popularity. These tools do not record personal coordinates or names; they help us optimize server resources.
                    </p>
                    <p>
                      <strong>Managing Cookies:</strong> You can configure your browser to block cookies or notify you when they are set. Please note that parts of our service may not function correctly if you disable cookies.
                    </p>
                  </div>
                </div>
              </section>

              {/* Children's Privacy */}
              <section id="childrens-privacy" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2.5 pb-2 border-b border-border/30">
                  <span className="text-primary">8.</span> Children&apos;s Privacy
                </h2>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  Our services are not intended for or directed to anyone under the age of 18. We do not knowingly collect personal information from minors. If you become aware that a child has provided personal details, please contact us, and we will take immediate steps to delete such accounts.
                </p>
              </section>

              {/* Changes to this Policy */}
              <section id="changes-policy" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2.5 pb-2 border-b border-border/30">
                  <span className="text-primary">9.</span> Policy Changes
                </h2>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  We reserve the right to update this Privacy Policy. Any modifications will be posted directly to this page with an updated &quot;Last Updated&quot; date. We will provide explicit notice in the FrndCircle application if we introduce material changes to how we process your personal coordinates.
                </p>
              </section>

              {/* Contact Us */}
              <section id="contact-us" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2.5 pb-2 border-b border-border/30">
                  <span className="text-primary">10.</span> Contact Us
                </h2>
                <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    If you have questions, concerns, or feedback regarding your privacy, please get in touch with our team:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-2">
                    <a
                      href="mailto:info@frndcircle.com"
                      className="inline-flex items-center gap-3 p-4 rounded-xl border border-border/50 bg-card/20 hover:bg-card/45 hover:border-primary/30 transition-all text-sm group"
                    >
                      <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                      <div>
                        <div className="font-semibold text-foreground">Email Support Team</div>
                        <div className="text-xs text-muted-foreground mt-0.5">info@frndcircle.com</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-primary transition-colors" />
                    </a>
                  </div>
                </div>
              </section>

            </div>
          </main>
          
        </div>
      </section>

      <Footer />
    </div>
  )
}
