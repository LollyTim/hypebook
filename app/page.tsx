import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhyMattersSection } from "@/components/why-matters-section"
import { FeaturedGuidesSection } from "@/components/featured-guides-section"
import { EcosystemSection } from "@/components/ecosystem-section"
import { OpenSourceSection } from "@/components/open-source-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <HeroSection />
        <AboutSection />
        <WhyMattersSection />
        <FeaturedGuidesSection />
        <EcosystemSection />
        <OpenSourceSection />
        <Footer />
      </main>
    </>
  )
}
