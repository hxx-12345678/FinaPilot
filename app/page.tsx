import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { ProgramSection } from "@/components/program-section"
import { BenefitsSection } from "@/components/benefits-section"
import { AudienceSection } from "@/components/audience-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { SocialProofSection } from "@/components/social-proof-section"
// import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ProgramSection />
      <BenefitsSection />
      <AudienceSection />
      <HowItWorksSection />
      <CapabilitiesSection />
      <SocialProofSection />
      {/* <FAQSection /> */}
      <FinalCTASection />
      <Footer />
    </main>
  )
}
