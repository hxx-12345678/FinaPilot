"use client"

import { HelpCircle, CheckCircle2, AlertTriangle, ShieldCheck, Activity, BrainCircuit, UserCog } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const faqs = [
  {
    question: "We don't trust AI 'Black Boxes'. How does FinaPilot ensure transparency?",
    answer: "FinaPilot is built on a Human-in-the-Loop (HITL) architecture. We don't hide the math. Our Hyperblock™ engine uses SymPy to ensure all financial logic remains deterministic and mathematically explainable. Every AI action—from generating a base case to running Monte Carlo—leaves a transparent, versioned audit trail. Your FP&A team reviews, validates, and overriding the models. The AI drafts the analysis; the CFO approves the narrative."
  },
  {
    question: "What is the cost structure for the Enterprise Pilot?",
    answer: "FinaPilot offers premium enterprise capabilities tailored to your specific organizational scale, reflective of full-suite advanced forecasting and our 12 proprietary AI agents. Enterprise Pilot partners gain priority onboarding, a dedicated implementation engineering team to migrate legacy Excel models, and direct access to shape our long-term roadmap. Value-based expansion applies to larger data processing needs."
  },
  {
    question: "How does FinaPilot ensure GDPR and data governance?",
    answer: "Data provenance is our core principle. FinaPilot is built for audit readiness and is fully GDPR-ready. All financial models utilize AES-256 encryption at rest and TLS 1.3 in transit. We maintain strict role-based access control (RBAC), immutable granular audit logs (showing exactly who modified which assumption and when), and enterprise single sign-on (SSO). Your financial logic remains inside an isolated tenant ecosystem."
  },
  {
    question: "How does the AI agent system collaborate with my team?",
    answer: "FinaPilot orchestrates 9 specialized AI agents (Strategic, Forecasting, Risk, Reporting, etc.). Think of them as tireless analysts working in parallel. The Risk Agent stress-tests your assumptions against historical macro regimes, while the Reporting Agent drafts variance narratives. They proactively surface anomalies to your team's dashboard for human review. They do not execute financial logic changes without authorization."
  },
  {
    question: "Can I migrate my complex, multi-statement Excel models?",
    answer: "Yes. Our concierge implementation team leads the Excel migration process during the Enterprise Pilot. Our engine handles multi-sheet 3-statement models and resolves complex circular references (like interest expense on revolving debt) natively. We ensure your foundational logic transfers seamlessly into the centralized, scalable FinaPilot environment."
  },
  {
    question: "What makes the Hyperblock™ Engine different from existing Enterprise Tools?",
    answer: "Legacy enterprise EPMs (like Anaplan or Adaptive) require custom scripting and struggle with real-time continuous forecasting. Spreadsheets break under multi-dimensional scale. The Hyperblock™ engine is a proprietary vectorized DAG (Directed Acyclic Graph) compute layer. It recalculates 1M+ rows across 10,000 statistical scenarios in under 4ms, ensuring real-time variance analysis that legacy systems simply cannot match."
  }
]

export function FAQSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="faq" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] section-divider" ref={ref}>
      <div className="max-w-3xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-premium border border-white/10 text-[10px] font-bold uppercase tracking-widest text-accent mb-6">
            <UserCog className="w-3 h-3" />
            Human-Centric Transparency
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Frequently Asked <span className="text-gradient-accent">Questions</span>
          </h2>
          <p className="text-lg text-white/70">
            Clear answers about our Human-in-the-Loop governance, enterprise pricing, and technical architecture.
          </p>
        </div>

        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-premium rounded-xl border border-white/10 px-6 overflow-hidden data-[state=open]:border-accent/30 transition-all bg-[#0d121c]"
              >
                <AccordionTrigger className="text-left text-white hover:text-accent transition-colors text-sm sm:text-base font-bold py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-white/70 leading-relaxed pb-5 pt-1">
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
