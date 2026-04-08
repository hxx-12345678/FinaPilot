import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AgenticSection } from "@/components/agentic-section"
import { SimulatorWidget } from "@/components/simulator-widget"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { RoleDeepDive } from "@/components/role-deep-dive"
import { IntegrationsSection } from "@/components/integrations-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { CapabilitiesSection } from "@/components/capabilities-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { ProgramSection } from "@/components/program-section"
import { BenefitsSection } from "@/components/benefits-section"
import { FAQSection } from "@/components/faq-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { HomePageStructuredData } from "@/components/seo-structured-data"

export default function Home() {
  return (
    <>
      {/* ═══ JSON-LD Structured Data (AEO + Technical SEO) ═══ */}
      {/* Injects Organization, SoftwareApplication, WebSite, FAQPage, and BreadcrumbList schemas */}
      <HomePageStructuredData />

      <main className="min-h-screen bg-[#0B0F19] overflow-x-hidden max-w-full relative" role="main" itemScope itemType="https://schema.org/WebPage">
        {/* Invisible semantic metadata for search engines */}
        <meta itemProp="name" content="FinaPilot — Agentic AI FP&A OS for SaaS CFOs" />
        <meta itemProp="description" content="Replace brittle spreadsheets with structured, auditable financial models powered by 12 autonomous AI agents. Scenario planning, Monte Carlo simulations, semantic ledger, and audit-grade traceability." />
        <meta itemProp="url" content="https://www.finapilot.com" />

        <Header />
        
        {/* 1. Hero — First Impression: Value proposition, metrics, integrations ticker */}
        <HeroSection />
        
        {/* 2. Social Proof — Market validation: Build immediate credibility */}
        <SocialProofSection />

        {/* 3. Problem — Pain Agitation: Show the problems they face */}
        <ProblemSection />

        {/* 4. Solution — The Answer: Structured logic & AI assisted */}
        <SolutionSection />

        {/* 6. Agentic Core — The Differentiator: 12 AI agents */}
        <AgenticSection />

        {/* 7. Role Deep Dive — Personalization: Benefits per role */}
        <RoleDeepDive />

        {/* 8. Integrations — Trust: Show the ecosystem */}
        <IntegrationsSection />

        {/* 9. How It Works — Simplicity: 4-step product flow */}
        <HowItWorksSection />

        {/* 10. Technical Capabilities — Depth: For technical evaluators */}
        <CapabilitiesSection />

        {/* 11. Partner Program — Conversion: Exclusive program details */}
        <ProgramSection />

        {/* 12. Benefits — Value: Why join the partner program */}
        <BenefitsSection />

        {/* 13. FAQ — Objection Handling: Answer every concern */}
        <FAQSection />

        {/* 14. Final CTA — Conversion: Last chance to convert */}
        <FinalCTASection />

        <Footer />
      </main>
    </>
  )
}
