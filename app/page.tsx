import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoryMarquee } from "@/components/category-marquee"
import { FeaturesSection } from "@/components/features-section"
import { StepsSection } from "@/components/steps-section"
import { AppShowcaseSection } from "@/components/app-showcase-section"
import { ActivitiesSection } from "@/components/activities-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CategoryMarquee />
      <FeaturesSection />
      <StepsSection />
      <AppShowcaseSection />
      <ActivitiesSection />
      <StatsSection />
      <TestimonialsSection />
      <AboutSection />
      <CTASection />
      <Footer />
    </main>
  )
}
