import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"

// ═══ LAZY LOAD BELOW-THE-FOLD SECTIONS (Improves TBT & FCP) ═══
const SocialProofSection = dynamic(() => import("@/components/social-proof-section").then(mod => mod.SocialProofSection), { ssr: true })
const ProblemSection = dynamic(() => import("@/components/problem-section").then(mod => mod.ProblemSection), { ssr: true })
const SolutionSection = dynamic(() => import("@/components/solution-section").then(mod => mod.SolutionSection), { ssr: true })
const AgenticSection = dynamic(() => import("@/components/agentic-section").then(mod => mod.AgenticSection), { ssr: true })
const RoleDeepDive = dynamic(() => import("@/components/role-deep-dive").then(mod => mod.RoleDeepDive), { ssr: true })
const IntegrationsSection = dynamic(() => import("@/components/integrations-section").then(mod => mod.IntegrationsSection), { ssr: true })
const HowItWorksSection = dynamic(() => import("@/components/how-it-works-section").then(mod => mod.HowItWorksSection), { ssr: true })
const CapabilitiesSection = dynamic(() => import("@/components/capabilities-section").then(mod => mod.CapabilitiesSection), { ssr: true })
const ProgramSection = dynamic(() => import("@/components/program-section").then(mod => mod.ProgramSection), { ssr: true })
const BenefitsSection = dynamic(() => import("@/components/benefits-section").then(mod => mod.BenefitsSection), { ssr: true })
const FAQSection = dynamic(() => import("@/components/faq-section").then(mod => mod.FAQSection), { ssr: true })
const FinalCTASection = dynamic(() => import("@/components/final-cta-section").then(mod => mod.FinalCTASection), { ssr: true })
const Footer = dynamic(() => import("@/components/footer").then(mod => mod.Footer), { ssr: true })
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
