"use client"

import { AlertTriangle, Clock, Database, TrendingDown, HelpCircle } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const problems = [
  {
    icon: Database,
    title: "Global Multi-Entity Fragmentation",
    desc: "Enterprise finance teams lose thousands of hours reconciling disparate data across global ERPs (SAP, Oracle, NetSuite), leading to critical delays in month-end close.",
    stat: "75%",
    statLabel: "Of time lost to data reconciliation",
  },
  {
    icon: AlertTriangle,
    title: "Multidimensional Model Fragility",
    desc: "Legacy multidimensional models and complex spreadsheets are one formula error away from an audit disaster. Hidden circularities create systemic risk in board reporting.",
    stat: "90%",
    statLabel: "Of large models contain errors",
  },
  {
    icon: Clock,
    title: "Scenario Latency in Volatile Markets",
    desc: "Re-forecasting across complex business units takes weeks in legacy tools. By the time the analysis reaches the CFO, the strategic window to act has already closed.",
    stat: "14 Days",
    statLabel: "Average enterprise re-forecast cycle",
  },
  {
    icon: HelpCircle,
    title: "The AI 'Black Box' Audit Crisis",
    desc: "Generic AI tools hallucinate financial data without mathematical proof. Institutional finance cannot deploy probabilistic AI that lacks cell-level data provenance.",
    stat: "100%",
    statLabel: "Requirement for audit traceability",
  },
]

export function ProblemSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section id="problem" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] section-divider" aria-label="FP&A pain points that FinaPilot solves — scattered data, broken Excel formulas, slow scenario planning">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/5 text-xs font-semibold text-red-400 mb-6">
            <TrendingDown className="w-3.5 h-3.5" />
            The Problem
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Stop fighting legacy modeling. Move to <span className="text-accent underline decoration-red-400">Deterministic Agentic AI</span> finance logic.
          </h2>
          <p className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            Global organizations cannot run on brittle spreadsheets or black-box AI. The cost of one attribution error or one delayed forecast is an institutional risk.
          </p>
        </div>

        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {problems.map((problem, i) => (
            <div
              key={i}
              className={`glass-premium p-6 sm:p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-red-500/20 transition-all duration-500 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mb-5 border border-white/10 group-hover:border-red-500/20 transition-colors">
                <problem.icon className="w-5 h-5 text-white/40 group-hover:text-red-400 transition-colors" />
              </div>
              
              <h3 className="text-base font-bold text-white mb-2.5 leading-snug">{problem.title}</h3>
              <p className="text-sm text-white/70 mb-8 leading-relaxed">
                Generic AI tools hallucinate numbers without proof. <a href="/ai-finance-tools" className="text-white hover:text-red-400 font-semibold underline decoration-red-500/30 transition-all">Learn the difference between chatbots and deterministic finance tools</a>.
              </p>
              
              <div className="pt-5 border-t border-white/5 mt-auto">
                <div className="flex items-end gap-2.5">
                  <span className="text-2xl sm:text-3xl font-black text-red-400 leading-none">{problem.stat}</span>
                  <span className="text-[10px] font-semibold text-white/40 uppercase tracking-wider pb-0.5">{problem.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
