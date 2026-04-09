import { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: 'Frequently Asked Questions (FAQ) | FinaPilot',
  description: 'Find answers to common questions about FinaPilot’s Monte Carlo simulations, multi-entity consolidations, AI forecasting, and CSV integrations.',
  openGraph: {
    title: 'FinaPilot FAQ - AI CFO Responses',
    description: 'Learn how FinaPilot powers financial workflows with AI agents, replacing manual Excel modeling with a dynamic, auditable semantic ledger.',
    url: 'https://www.finapilot.com/faq',
  }
}

export default function FAQPage() {
  const faqs = [
    {
      q: "Why should Startups and SMBs use FinaPilot instead of Excel or basic templates?",
      a: "Startups and SMBs often rely on fragile Excel sheets for headcount planning and cash runway modeling. FinaPilot eliminates the 'VLOOKUP' nightmare and formula breakages right from the start. With our Semantic Ledger and automated Monte Carlo runway projections, early-stage founders and fractional CFOs get an institutional-grade backend on day one, ensuring 100% mathematical accuracy for investor dashboards."
    },
    {
      q: "Why is FinaPilot the right choice for Mid-Market companies over platforms like Pigment or Anaplan?",
      a: "As companies scale into the mid-market, they often switch to tools like Anaplan or Pigment, which require dedicating massive headcount to maintain complex, multidimensional formulas. FinaPilot is an active AI copilot, not a passive aggregator. We seamlessly automate multi-entity consolidations, FX mapping, and provide AI-generated Budget vs. Actual (BvA) variance explanations out-of-the-box, saving hundreds of analyst hours."
    },
    {
      q: "How does FinaPilot scale for Enterprise requirements compared to SAP or Oracle EPM?",
      a: "Legacy enterprise EPM suites like SAP Analytics Cloud or Oracle require 6-18 month implementation pipelines and massive third-party consulting fees for every logic change. FinaPilot’s Atomic Model Architecture scales infinitely but deploys in days. We deliver SOC 2-level Audit-Grade Traceability and visual DAG-backed cell lineage, so global FP&A teams have extreme flexibility without the multimillion-dollar IT lock-in."
    },
    {
      q: "What does Finapilot actually do?",
      a: "Finapilot is an agentic AI FP&A platform. We replace brittle spreadsheets with structured, auditable financial models driven by AI agents. Our engine provides real-time budget vs. actual variance analysis, scenario planning, and automated board reporting."
    },
    {
      q: "Does Finapilot support Monte Carlo forecasting?",
      a: "Yes. Our platform includes native Monte Carlo forecasting tools designed to analyze pipeline risk. Instead of static 'Base, Best, Worst' case scenarios, FinaPilot generates thousands of automated permutations to mathematically prove runway confidence intervals."
    },
    {
      q: "How does the 'Provenance Search' feature ensure trust?",
      a: "AI can hallucinate, which is historically unacceptable in finance. FinaPilot solves this via a proprietary 'Provenance Drawer'. For every metric, KPI, or forecasted number, you can click into the Provenance system to see the exact invoice document, ledger row, or logic block that generated the figure."
    },
    {
      q: "Can I manage multiple subsidiaries or entities?",
      a: "Absolutely. FinaPilot features a robust Multi-Entity Consolidation engine. You can seamlessly unify different charts of accounts, automate intercompany eliminations, and view consolidated investor dashboards in real-time."
    },
    {
      q: "How do I get my historical data into FinaPilot?",
      a: "We support direct API connections to standard ERPs. Additionally, we provide an intelligent CSV/Excel Import Wizard that uses machine learning to automatically map your unstructured trial balance and historical ledgers into our Semantic Ledger format."
    },
    {
      q: "How does headcount planning work in the platform?",
      a: "We have a dedicated Headcount Planning module. It calculates fully-burdened costs (taxes, benefits, equity) automatically based on geolocation. Changes to the headcount plan are routed through our native Approval Management workflows before mutating your master budget snapshot."
    },
    {
      q: "Is there a way to receive alerts when actuals deviate from budget?",
      a: "Yes. The platform includes a dedicated Alerts Management system. You can configure precise threshold guards. If an API sync pulls in actuals that miss your forecasted targets, the system proactively notifies stakeholders with a variance explanation drafted natively by the AI assistant."
    }
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.q,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.a
              }
            }))
          })
        }}
      />
      <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col pt-24 font-sans">
        <Header />
        <main className="flex-grow max-w-4xl mx-auto px-6 py-20 w-full">
          <div className="mb-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-400">Deep-dive answers into the mechanics of the FinaPilot platform and why we beat the market.</p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, i) => (
               <div key={i} className={`bg-[#121826] border ${i < 3 ? 'border-[#F26E24]/30' : 'border-white/5'} rounded-xl p-8 transition-all hover:bg-white/5 relative overflow-hidden`}>
                {i < 3 && (
                   <div className="absolute top-0 left-0 w-1 h-full bg-[#F26E24]/70"></div>
                )}
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  {faq.q}
                </h2>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-20 p-10 bg-gradient-to-br from-[#121826] to-[#0B0F19] border border-white/10 rounded-2xl text-center">
            <h3 className="text-3xl font-bold mb-4">Ready to automate your models?</h3>
            <p className="text-gray-400 text-lg mb-8">Access our CSV import wizards and multi-entity consolidation workflows today.</p>
            <a href="https://app.finapilot.com" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[#F26E24] text-white font-medium hover:bg-[#ff8a47] transition-all">
              Launch App
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

