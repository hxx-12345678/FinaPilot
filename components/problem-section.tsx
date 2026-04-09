"use client"

import { AlertTriangle, Clock, Database, TrendingDown, HelpCircle } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const problems = [
  {
    icon: Database,
    title: "Scattered Data, Zero Visibility",
    desc: "Your finance team wastes 80% of their time pulling data from disconnected ERPs, CRMs, and spreadsheets instead of doing actual analysis.",
    stat: "80%",
    statLabel: "Time lost to data wrangling",
  },
  {
    icon: AlertTriangle,
    title: "Models Break With One Wrong Formula",
    desc: "Your multi-sheet Excel model is one accidental keystroke away from disaster. Hidden circular references and #REF errors create silent risk for every board presentation.",
    stat: "88%",
    statLabel: "Of spreadsheets contain errors",
  },
  {
    icon: Clock,
    title: "Scenario Planning Takes Days, Not Minutes",
    desc: "When the market shifts, your team needs 3 days to rebuild the forecast. By the time the analysis reaches your CFO's desk, the window to act has already closed.",
    stat: "72hrs",
    statLabel: "Average model rebuild time",
  },
  {
    icon: HelpCircle,
    title: "AI Tools Can't Be Trusted for Finance",
    desc: "Generic AI tools hallucinate numbers without proof. No CFO can present AI-generated outputs to investors without understanding exactly how every number was calculated.",
    stat: "0%",
    statLabel: "Tolerance for guesswork",
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
            Stop fighting spreadsheets. Move to <span className="text-accent underline decoration-red-400">SOC 2 architecture ready</span> finance logic.
          </h2>
          <p className="text-base sm:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            You can't run a modern company on brittle spreadsheets. The cost of one formula error or one delayed forecast is too high.
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
              <p className="text-sm text-white/50 mb-8 leading-relaxed">
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
