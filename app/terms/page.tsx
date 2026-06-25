"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Scale, Users, ShieldAlert, Award, FileText, Mail, Calendar, ArrowRight, CheckSquare } from "lucide-react"

const sections = [
  { id: "acceptance", label: "1. Acceptance of Terms" },
  { id: "eligibility", label: "2. Eligibility" },
  { id: "registration", label: "3. Account & Verification" },
  { id: "activities", label: "4. Hosting & Joining" },
  { id: "safety-disclaimer", label: "5. IRL Safety Disclaimer" },
  { id: "conduct", label: "6. User Conduct Rules" },
  { id: "content-license", label: "7. Intellectual Property" },
  { id: "termination", label: "8. Termination" },
  { id: "liability", label: "9. Liability Limitations" },
  { id: "contact-us", label: "10. Contact Us" },
]

export default function TermsAndConditions() {
  const [activeSection, setActiveSection] = useState("acceptance")

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
          rootMargin: "-20% 0px -60% 0px", // Trigger when section is in upper-middle viewport
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
        <div className="absolute top-[8%] right-[-10%] w-[420px] h-[420px] rounded-full bg-primary/10 blur-[130px]" />
        <div className="absolute top-[45%] left-[-12%] w-[480px] h-[480px] rounded-full bg-accent/80 opacity-[0.05] blur-[160px]" />
        <div className="absolute bottom-[15%] right-[5%] w-[400px] h-[400px] rounded-full bg-tertiary/10 blur-[120px]" />
      </div>

      {/* Hero Header */}
      <section className="pt-32 pb-12 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-4 animate-fade-in">
            <Scale className="w-3.5 h-3.5" />
            <span>Community Guidelines Enforced</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground via-foreground to-primary">
            Terms & Conditions
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base mb-6">
            Please read these Terms of Service carefully before accessing or hosting real-life activities with FrndCircle.
          </p>
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground border-t border-border/40 pt-4 max-w-md mx-auto">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-primary" />
              <span>Effective Date: June 16, 2026</span>
            </div>
            <div className="flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-primary" />
              <span>Version 2.1</span>
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
              
              {/* Acceptance of Terms */}
              <section id="acceptance" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2.5 pb-2 border-b border-border/30">
                  <span className="text-primary">1.</span> Acceptance of Terms
                </h2>
                <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    By creating an account, downloading, browsing, or using the FrndCircle mobile application and website (&quot;Services&quot;), you agree to be bound by these Terms and Conditions (&quot;Terms&quot;) and our Privacy Policy.
                  </p>
                  <p>
                    If you do not agree to all of these Terms, you are not authorized to use our Services and must immediately cease access and uninstall the software.
                  </p>
                </div>
              </section>

              {/* Eligibility */}
              <section id="eligibility" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2.5 pb-2 border-b border-border/30">
                  <span className="text-primary">2.</span> Eligibility
                </h2>
                <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    FrndCircle is built for safety and real-world connection. You may only create an account and use the Services if you:
                  </p>
                  <ul className="space-y-2.5 pl-1.5 text-sm md:text-base">
                    {[
                      "Are at least 18 years of age.",
                      "Have never been convicted of a felony or a crime involving violence or harassment.",
                      "Have not been previously suspended or removed from our community platform.",
                      "Are legally permitted to use social networking applications under the laws of your jurisdiction."
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2 items-start">
                        <CheckSquare className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Account Registration & Verification */}
              <section id="registration" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2.5 pb-2 border-b border-border/30">
                  <span className="text-primary">3.</span> Account & Verification
                </h2>
                <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    To use the app, you must create a profile. You agree to provide accurate, complete, and updated information. You are solely responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
                  </p>
                  <p>
                    <strong>Profile Verification:</strong> To ensure the authenticity of the community, we may ask you to upload a valid selfie or connect a social network handle. If we suspect your profile contains false information, or is managed by automated scripts/bots, we reserve the right to suspend your account without prior notice.
                  </p>
                </div>
              </section>

              {/* Hosting & Joining Activities */}
              <section id="activities" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2.5 pb-2 border-b border-border/30">
                  <span className="text-primary">4.</span> Hosting & Joining Activities
                </h2>
                <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    FrndCircle enables verified members to host public or private gatherings (such as coffee catch-ups, running groups, board game nights, or dinners) and enables other members to apply to join.
                  </p>
                  <div className="space-y-3">
                    <p>
                      <strong>Host Rights:</strong> Hosts have the complete discretion to approve or decline requests to join their activity. Hosts must state the activity details honestly and verify that event details match actual location parameters.
                    </p>
                    <p>
                      <strong>Joiner Responsibilities:</strong> If you join an activity, you commit to showing up on time. Repeated unexcused absences (&quot;no-shows&quot;) damage the community and can lead to profile suspensions.
                    </p>
                    <p>
                      <strong>Non-Commercialization:</strong> Gatherings hosted on FrndCircle must be social. You may not host gatherings for the primary purpose of multi-level marketing (MLM), commercial sales pitching, religious proselytizing, or billing attendees entry fees for personal profit.
                    </p>
                  </div>
                </div>
              </section>

              {/* Real-World Safety Disclaimer */}
              <section id="safety-disclaimer" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2.5 pb-2 border-b border-border/30">
                  <span className="text-primary">5.</span> IRL Safety Disclaimer
                </h2>
                <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4">
                  <div className="p-5 rounded-2xl bg-destructive/5 border border-destructive/20 flex gap-4">
                    <ShieldAlert className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-1">CRITICAL SAFETY WARNING</h4>
                      <p className="text-xs md:text-sm text-muted-foreground">
                        FrndCircle is a technology platform that connects people online for real-world (IRL) interaction. We do not conduct background checks, screen criminal history, or verify the mental health/intentions of our members.
                      </p>
                    </div>
                  </div>
                  <p>
                    <strong>Participate at Your Own Risk:</strong> You are solely responsible for your interactions with other members. You agree to take sensible safety precautions when meeting strangers. This includes: meeting in well-lit public places, informing friends or family of your location, and leaving immediately if you feel uncomfortable.
                  </p>
                  <p id="guidelines">
                    <strong>Host Guidelines:</strong> Gatherings should take place in public, shared spaces (cafes, public parks, sports clubs, museums) unless the host and participants have established mutual trust.
                  </p>
                </div>
              </section>

              {/* User Conduct Rules */}
              <section id="conduct" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2.5 pb-2 border-b border-border/30">
                  <span className="text-primary">6.</span> User Conduct Rules
                </h2>
                <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    To foster a safe, inclusive, and welcoming social circle, you agree not to:
                  </p>
                  
                  <ul className="space-y-3 pl-1 text-sm md:text-base">
                    {[
                      "Harass, bully, stalk, intimidate, or abuse any member of the community.",
                      "Use the platform for dating, matchmaking, or solicitations (FrndCircle is strictly for friendships).",
                      "Host events promoting hate speech, extremism, violence, illegal drug use, or sexual acts.",
                      "Spam community chats, post advertising links, or scrape data from the services.",
                      "Impersonate any person or entity, or upload profile pictures that are not of you."
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start">
                        <Users className="w-4.5 h-4.5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>

              {/* Intellectual Property & User Content */}
              <section id="content-license" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2.5 pb-2 border-b border-border/30">
                  <span className="text-primary">7.</span> Intellectual Property & User Content
                </h2>
                <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    <strong>Our Intellectual Property:</strong> All materials, branding, logos, graphics, design layouts, icons, source code, copy, and features of the Services are the exclusive property of FrndCircle and are protected by copyright, trademark, and intellectual property laws. You may not copy, reproduce, modify, or distribute any part of our intellectual property without our explicit written consent.
                  </p>
                  <p>
                    <strong>Your Content:</strong> You retain ownership of any text, photos, and chat messages you upload to the Services (&quot;User Content&quot;). However, by uploading User Content, you grant us a worldwide, royalty-free, perpetual, and sublicensable license to host, store, copy, modify, and display such content to deliver the Services.
                  </p>
                  <p>
                    We reserve the right to review, monitor, and delete any User Content that violates our community standards, at our sole discretion, without prior notice.
                  </p>
                </div>
              </section>

              {/* Account Suspension and Termination */}
              <section id="termination" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2.5 pb-2 border-b border-border/30">
                  <span className="text-primary">8.</span> Termination
                </h2>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  We may suspend, terminate, or restrict your access to all or part of our Services at any time, for any reason or no reason, including if we believe you have violated these Terms. Upon termination, your right to access the mobile application and host/participate in gatherings ends immediately.
                </p>
              </section>

              {/* Limitation of Liability & Disclaimers */}
              <section id="liability" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2.5 pb-2 border-b border-border/30">
                  <span className="text-primary">9.</span> Liability Limitations
                </h2>
                <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4 font-mono text-xs md:text-sm border border-border/30 rounded-2xl p-5 bg-card/5">
                  <p>
                    THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED.
                  </p>
                  <p>
                    IN NO EVENT SHALL FRNDCIRCLE, ITS FOUNDERS, OR PARTNERS BE LIABLE FOR ANY DAMAGES WHATSOEVER (INCLUDING DIRECT, INDIRECT, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR PERSONAL INJURY OR WRONGFUL DEATH) ARISING OUT OF OR IN CONNECTION WITH THE SERVICES OR THE BEHAVIOR OF ANY MEMBER HOSTING OR PARTICIPATING IN AN ACTIVITY IN REAL LIFE.
                  </p>
                  <p>
                    FRNDCIRCLE DOES NOT GUARANTEE THAT EVENTS WILL TAKE PLACE AS PLANNED OR WILL BE SAFE. YOU ENGAGE WITH OTHERS AND MEET IN PERSON SOLELY AT YOUR OWN RISK.
                  </p>
                </div>
              </section>

              {/* Contact Us */}
              <section id="contact-us" className="scroll-mt-28 space-y-4">
                <h2 className="text-2xl font-semibold text-foreground flex items-center gap-2.5 pb-2 border-b border-border/30">
                  <span className="text-primary">10.</span> Contact Us
                </h2>
                <div className="text-muted-foreground text-sm md:text-base leading-relaxed space-y-4">
                  <p>
                    If you have questions, feedback, or need to report a member violation of these Terms, please contact us immediately:
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
