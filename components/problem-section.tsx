"use client"

import { AlertTriangle, Clock, Database, TrendingDown, Target, HelpCircle } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const problems = [
  {
    icon: Database,
    title: "The Data Plumbing Trap",
    desc: "Your elite finance talent spends 80% of their time reconciling fragmented CSVs and playing data plumber across disjointed ERP/CRM systems, rather than executing high-value strategic analysis.",
    stat: "80%",
    statLabel: "Time lost to data prep",
  },
  {
    icon: AlertTriangle,
    title: "Brittle Spreadsheet Complexity",
    desc: "Multi-layered Excel models are a single keystroke away from catastrophic failure. Hidden circular references and untraceable #REF errors create a massive, ticking liability for board-level reporting.",
    stat: "88%",
    statLabel: "Models contain errors",
  },
  {
    icon: Clock,
    title: "Paralytic Recalculation Speed",
    desc: "When the macro environment shifts, your team needs 3 days to rebuild the 3-statement model. By the time the risk analysis reaches the CFO's desk, the strategic window to act has already closed.",
    stat: "72 Hrs",
    statLabel: "Average pivot time",
  },
  {
    icon: HelpCircle,
    title: "The 'Black Box' AI Fear",
    desc: "Generic AI tools hallucinate financial data without mathematical proof. CFOs cannot legally or ethically present model outputs to investors without an exact, understandable audit trail of how numbers were derived.",
    stat: "0%",
    statLabel: "Tolerance for hallucination",
  },
]

export function ProblemSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal();

  return (
    <section id="problem" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] section-divider">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={headerRef}
          className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-red-500/20 bg-red-500/10 text-[10px] font-bold uppercase tracking-widest text-red-400 mb-6">
            <TrendingDown className="w-3 h-3" />
            The Enterprise Crisis
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Spreadsheets are a <span className="text-red-400">Strategic Liability.</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            The era of managing billion-dollar portfolios on brittle, manual spreadsheet architectures is over. The cost of a single formula error or delayed calculation is simply too high.
          </p>
        </div>

        <div 
          ref={gridRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {problems.map((problem, i) => (
            <div
              key={i}
              className={`glass-premium p-6 sm:p-8 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-red-500/30 transition-all duration-700 ${gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Subtle red gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="w-12 h-12 glass-premium rounded-xl flex items-center justify-center mb-6 border border-white/10 group-hover:border-red-500/30 transition-colors bg-white/5">
                <problem.icon className="w-6 h-6 text-white/50 group-hover:text-red-400 transition-colors" />
              </div>
              
              <h3 className="text-lg font-bold text-white mb-3">{problem.title}</h3>
              <p className="text-sm text-white/60 mb-8 leading-relaxed">
                {problem.desc}
              </p>
              
              <div className="pt-6 border-t border-white/10 mt-auto">
                <div className="flex items-end gap-3">
                  <span className="text-3xl font-black text-red-400 leading-none">{problem.stat}</span>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest pb-1">{problem.statLabel}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center relative z-10">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-1.5 glass-premium rounded-full border border-white/10 bg-black/40">
             <div className="px-6 py-2 text-sm font-bold text-white/70 uppercase tracking-widest flex items-center gap-2">
                <Target className="w-4 h-4 text-accent" />
                The FinaPilot Solution
             </div>
             <div className="w-px h-6 bg-white/20 hidden sm:block" />
             <div className="px-6 py-2">
               <span className="text-xs text-white/50 font-mono">Transition from liability to <span className="text-accent font-bold">Vectorized compute</span></span>
             </div>
          </div>
        </div>
      </div>
    </section>
  )
}
