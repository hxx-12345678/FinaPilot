"use client"

import { HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const faqs = [
  {
    question: "Why should an Enterprise move from Anaplan or Pigment to FinaPilot?",
    answer: "Legacy enterprise tools like Anaplan require months of custom scripting and expensive consultants for even basic changes. FinaPilot is an active orchestration engine that deploys in days, using 12 autonomous AI agents to rebuild your financial logic into a structured, real-time environment. We offer 4ms recalculation speeds and DAG-backed data provenance that ensures 100% accuracy without the 'black box' calculations of legacy systems."
  },
  {
    question: "How does FinaPilot solve the AI 'Hallucination' problem in finance?",
    answer: "We decouple cognitive orchestration from financial computation. While we use LLMs to understand intent and automate workflows, all financial logic is executed on a deterministic, Directed Acyclic Graph (DAG) engine. This ensures that every calculation is mathematically rigid and follows immutable laws of accounting — zero probabilistic guessing."
  },
  {
    question: "Does FinaPilot support global multi-entity and multi-currency consolidations?",
    answer: "Yes. FinaPilot is architected for enterprise scale. Our Semantic Ledger unifies data from disparate global ERPs (SAP, Oracle, NetSuite) into a single, object-oriented schema. We handle complex multi-currency translation, intercompany eliminations, and regional variance attribution automatically."
  },
  {
    question: "How does the 'Institutional Provenance' agent work for audits?",
    answer: "Every cell in a FinaPilot model contains its own 'DNA'—a complete lineage map. During an audit, you can click any figure in a board report and see exactly which ERP transaction, assumption change, or manual override created that number. This DAG-backed traceability is designed for SOC 2 Type II environments."
  },
  {
    question: "What is the role of the 12 AI agents in a human-led finance team?",
    answer: "The agents are force multipliers, not replacements. They handle the low-level 'grunt work'—data normalization, anomaly detection, variance drafting, and Monte Carlo simulations. The finance team remains the 'Human-in-the-Loop,' reviewing and approving every strategic output before it reaches the board."
  },
  {
    question: "Can we migrate our existing legacy models without losing logic?",
    answer: "Absolutely. A core part of our Enterprise Partner Program is white-glove migration. Our engineers and financial experts map your exact multidimensional logic into FinaPilot's atomic architecture, resolving circularities and improving model performance by orders of magnitude during the process."
  }
]

export function FAQSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="faq" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] section-divider" ref={ref} aria-label="Frequently asked questions about FinaPilot — AI FP&A, data security, Design Partner Program, Excel migration">
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-accent mb-6">
            <HelpCircle className="w-3.5 h-3.5" />
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
            Frequently Asked <span className="text-gradient-accent">Questions</span>
          </h2>
          <p className="text-base text-white/50">
            Institutional answers about FinaPilot's agentic architecture, enterprise scalability, and deterministic math. <a href="/faq" className="text-white font-semibold underline decoration-accent/30 hover:decoration-accent transition-all">Explore our full technical knowledge base</a>.
          </p>
        </div>

        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
          <Accordion type="single" collapsible className="w-full space-y-2.5">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-premium rounded-xl border border-white/5 px-5 overflow-hidden data-[state=open]:border-accent/20 transition-all"
              >
                <AccordionTrigger className="text-left text-white hover:text-accent transition-colors text-sm font-semibold py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-white/55 leading-relaxed pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
