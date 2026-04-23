"use client"

import { Cpu, ShieldCheck, Database, GitBranch, RefreshCw, Zap, Search, CheckCircle2, BarChart3, TrendingUp, Layers, LayoutDashboard, Calculator, Activity, PieChart, Users } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const featureCategories = [
  {
    category: "Modeling & Simulation",
    features: [
      { icon: GitBranch, label: "Scenario Planning", desc: "Branch-based multi-track variant modeling." },
      { icon: Zap, label: "Real-time What-IF", desc: "Instant impact analysis on P&L variables." },
      { icon: TrendingUp, label: "Forecasting Engine", desc: "AI-driven predictive trajectory analysis." },
    ]
  },
  {
    category: "Governance & Trust",
    features: [
      { icon: Layers, label: "Semantic Ledger", desc: "Unified schema for disparate ERP sources." },
      { icon: ShieldCheck, label: "Audit-Grade Traceability", desc: "DAG-backed cell lineages (SOC 2 level)." },
      { icon: Cpu, label: "Model Architecture", desc: "Atomic structure for infinite scalability." },
    ]
  },
  {
    category: "Board & Investors",
    features: [
      { icon: LayoutDashboard, label: "Investor Dashboards", desc: "Live, read-only board reporting portals." },
      { icon: Calculator, label: "Financial Modeling", desc: "Professional DCF, SaaS, and LBO modeling." },
      { icon: Activity, label: "Alerts Management", desc: "Autonomous variance & anomaly detection." },
    ]
  },
  {
    category: "Strategic Direction",
    features: [
      { icon: BarChart3, label: "Monte Carlo Runway", desc: "Probabilistic cash survival projections." },
      { icon: PieChart, label: "Budget vs Actual", desc: "Variance gap analysis with attribution." },
      { icon: Users, label: "Resource Allocations", desc: "Headcount & CAPEX optimization logic." },
    ]
  },
]

const outcomes = [
  "Build clean 3-statement models (P&L, Balance Sheet, Cash Flow)",
  "Run 10,000+ Monte Carlo scenarios in under 4 seconds",
  "Track every assumption, change, and override automatically",
  "Generate board-ready reports and variance narratives",
  "Resolve circular references (interest/debt loops) without breaking",
  "AI assists analysis — but humans approve every output",
]

export function SolutionSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="solution" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] relative section-divider" ref={ref} aria-label="FinaPilot platform capabilities — scenario planning, semantic ledger, Monte Carlo, audit traceability, financial modeling">
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-accent mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Cpu className="w-3.5 h-3.5 text-accent" />
            The Platform
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-tight transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            FinaPilot replaces spreadsheets with <span className="text-gradient-accent">structured financial models.</span>
          </h2>
          <p className={`text-base sm:text-lg text-white/70 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            No broken formulas. No black box AI. Just clean, auditable financial logic — powered by 12 AI agents under your full control.
          </p>
        </div>

        {/* Outcome checklist */}
        <div className={`max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid sm:grid-cols-2 gap-3">
            {outcomes.map((outcome, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-sm text-white/75 font-medium leading-relaxed">{outcome}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Categories Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {featureCategories.map((cat, catIdx) => (
            <div 
              key={catIdx} 
              className={`glass-premium rounded-2xl p-6 sm:p-7 border border-white/5 transition-all duration-700 hover:border-accent/15 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + catIdx * 100}ms` }}
            >
              <h3 className="text-xs font-bold text-accent uppercase tracking-wider mb-5">{cat.category}</h3>
              <div className="space-y-4">
                {cat.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 group">
                    <div className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10 group-hover:border-accent/20 transition-colors">
                      <feature.icon className="w-4 h-4 text-white/40 group-hover:text-accent transition-colors" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white leading-tight">{feature.label}</p>
                      <p className="text-xs text-white/40 mt-0.5 leading-snug">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust signal */}
        <div className={`mt-8 p-5 rounded-xl glass-premium border border-accent/15 flex flex-col sm:flex-row items-center gap-4 max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
          <ShieldCheck className="w-6 h-6 text-accent shrink-0" />
          <p className="text-sm text-white/60 leading-relaxed text-center sm:text-left">
            <span className="text-white font-semibold">Human-in-the-loop by design.</span> AI agents suggest forecasts and flag anomalies, but every financial output requires human approval. <a href="/trust" className="text-white font-semibold underline decoration-accent/30 hover:decoration-accent transition-all">Verify our security and trust standards</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
