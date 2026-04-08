"use client"

import { HelpCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const faqs = [
  {
    question: "We don't trust AI for financial decisions. How does FinaPilot handle this?",
    answer: "We built FinaPilot with this exact concern in mind. Core financial calculations use deterministic math — not LLMs. AI agents help with analysis, anomaly detection, and report drafting, but every output requires human approval. Your team reviews, validates, and signs off before anything goes to a board or investor. The AI suggests — your CFO decides."
  },
  {
    question: "What is the Design Partner Program?",
    answer: "We're working with 10 selected finance teams to co-build FinaPilot. As a design partner, we rebuild your financial model inside our platform, configure all 12 AI agents for your specific workflows, and give you direct access to our founders. In return, you provide feedback that helps us build a better product. Pricing is discussed during the intro call based on your team size and model complexity."
  },
  {
    question: "How does FinaPilot protect our financial data?",
    answer: "All data is encrypted with AES-256 at rest and TLS 1.3 in transit. We use isolated tenant architecture — your data is never mixed with other customers. We maintain role-based access control, immutable audit logs, and are GDPR-ready. We never train AI models on your financial data."
  },
  {
    question: "What do the 12 AI agents actually do?",
    answer: "Each agent handles a specific finance task: the Risk Agent stress-tests your assumptions against macroeconomic scenarios, the Variance Agent explains plan-vs-actual deviations with mathematical attribution, the Reporting Agent drafts board narratives, the Forecasting Agent runs Monte Carlo simulations, and so on. They work at machine speed but cannot execute any changes without your team's explicit approval."
  },
  {
    question: "Can you migrate our complex Excel models?",
    answer: "Yes — that's a core part of the Design Partner Program. Our team leads the migration process. We handle multi-sheet 3-statement models, resolve circular references (like interest expense on revolving debt), and ensure your financial logic transfers accurately. You provide the knowledge; we handle the technical migration."
  },
  {
    question: "How is FinaPilot different from Anaplan or Adaptive Planning?",
    answer: "Legacy enterprise tools require months of implementation, custom scripting, and expensive consultants. FinaPilot is built for modern finance teams that want speed without sacrificing transparency. We recalculate full models in under 4ms, run 10,000+ Monte Carlo scenarios instantly, and provide cell-level audit trails — all with AI assistance that stays under human control. During the pilot, we do the implementation work with you."
  },
  {
    question: "Can FinaPilot improve our current system, not just replace Excel?",
    answer: "Absolutely. Many Design Partners use FinaPilot alongside their existing tools. Our 12 AI agents can layer on top of your current workflows — adding real-time anomaly detection, automated variance analysis, scenario planning, and board reporting. The goal is to make your existing finance function faster and more accurate, whether you're replacing spreadsheets entirely or augmenting what you already have."
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
            Honest answers about how FinaPilot works, the Design Partner Program, and data security.
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
