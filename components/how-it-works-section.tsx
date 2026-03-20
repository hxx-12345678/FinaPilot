"use client"

import { Database, Link2, Calculator, LineChart, FileText, ArrowDown, UserCheck, FileSpreadsheet, Hammer } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const steps = [
  {
    icon: Database,
    title: "1. Data Provenance",
    desc: "We establish encrypted pipelines to your ERP, CRM, and raw CSV/Excel. Day 1 provides full traceability of every foundational line-item.",
    highlight: "Secure Intake"
  },
  {
    icon: Hammer,
    title: "2. Co-Build Logic",
    desc: "FinaPilot isn't a rigid black box. Our quant engineers work with you to map your exact ledger architecture into our Hyperblock engine.",
    highlight: "Custom Built"
  },
  {
    icon: LineChart,
    title: "3. Collaborative Forecasting",
    desc: "AI agents suggest 10k Monte Carlo paths based on macroeconomic data. Your FP&A team reviews, adjusts, and approves the final scenario.",
    highlight: "CFO Governance"
  },
  {
    icon: FileText,
    title: "4. Institutional Reporting",
    desc: "Narratives and Board-ready slide decks are auto-drafted containing Shapley variance rationale, awaiting your final sign-off.",
    highlight: "Audit Ready"
  }
]

export function HowItWorksSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="how-it-works" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] section-divider" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-premium border border-white/10 text-[10px] font-bold uppercase tracking-widest text-accent mb-6 animate-pulse-glow">
            <Link2 className="w-3 h-3" />
            Deterministic Workflow
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight uppercase">
            How we <span className="text-gradient-accent">partner & build</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Transitioning from brittle spreadsheets to high-frequency, human-governed quantitative finance is a partnership, not a simple SaaS sign-up.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-6 relative">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative flex flex-col items-center text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${100 + i * 150}ms` }}
              >
                {/* Connecting arrow for mobile */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden absolute -bottom-6 text-white/10 left-1/2 -translate-x-1/2">
                    <ArrowDown className="w-4 h-4" />
                  </div>
                )}
                
                {/* Highlight Badge */}
                <div className="absolute -top-3 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[9px] font-bold text-accent uppercase tracking-widest z-10 hidden lg:block shadow-md">
                   {step.highlight}
                </div>

                <div className="w-20 h-20 glass-premium rounded-2xl flex items-center justify-center mb-6 relative z-0 border border-white/5 shadow-xl bg-[#0d121c]">
                  <step.icon className="w-8 h-8 text-white/70 group-hover:text-accent transition-colors" />
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 tracking-snug">{step.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed max-w-[250px] font-medium">
                  {step.desc}
                </p>

                {/* Mobile Highlight Badge */}
                <div className="lg:hidden mt-4 inline-flex px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-[9px] font-bold text-accent uppercase tracking-widest shadow-md">
                   {step.highlight}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-3xl mx-auto glass-premium rounded-2xl p-6 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-accent/20 shadow-[0_0_50px_-20px_rgba(0,242,255,0.15)] overflow-hidden relative">
            <div className="absolute -right-16 -bottom-16 w-48 h-48 bg-accent/10 blur-[50px] rounded-full" />
            
            <div className="text-center md:text-left relative z-10">
               <h4 className="text-lg font-bold text-white mb-2">Designed for High-Touch Onboarding</h4>
               <p className="text-sm text-white/70 leading-relaxed">During the Enterprise Pilot launch, our quant team builds your initial logic models. Zero implementation risk from your FP&A team.</p>
            </div>
            <div className="flex items-center gap-1.5 px-4 py-2 border border-blue-500/30 bg-blue-500/10 rounded-xl relative z-10 shadow-inner">
               <FileSpreadsheet className="w-4 h-4 text-blue-400" />
               <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400">Excel / ERP Unified</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
