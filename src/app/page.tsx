import HeroSection from "@/src/components/hero-section"
import SportsGrid from "@/src/components/sports-grid"
import HowItWorks from "@/src/components/how-it-works"
import CTASection from "@/src/components/cta-section"
import LocateUsSection from "@/src/components/locate-us-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SportsGrid />
      <HowItWorks />
      <CTASection />
      <LocateUsSection />
    </main>
  )
}
