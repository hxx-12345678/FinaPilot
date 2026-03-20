"use client"

import { Bot, LineChart, Shield, Lock, Calculator, PieChart, Activity, UserCog, CheckCircle, Fingerprint, Database, Hammer, Send, Zap, GitBranch, BarChart3 } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const agents = [
  {
    icon: Shield,
    title: "Risk & Compliance Agent",
    desc: "Stress-tests models against 10,000+ macroeconomic shocks based on current ledger topology.",
    status: "Stress-Testing: Active",
    statusColor: "text-red-400 bg-red-400/10 border-red-400/20",
    gradient: "from-red-500/10 via-transparent to-transparent"
  },
  {
    icon: LineChart,
    title: "Variance & Forensic Agent",
    desc: "Provides mathematical Shapley attribution for plan vs actuals. Absolute audit transparency.",
    status: "Attribution: Complete",
    statusColor: "text-accent bg-accent/10 border-accent/20",
    gradient: "from-accent/10 via-transparent to-transparent"
  },
  {
    icon: Calculator,
    title: "Strategic Modeling Agent",
    desc: "Builds baseline 3-statement models and M&A impact paths for CFO review and signing.",
    status: "Baseline: Pending CFO",
    statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
    gradient: "from-blue-500/10 via-transparent to-transparent"
  },
  {
    icon: Bot,
    title: "Reporting Agent",
    desc: "Drafts automated Board decks and variance narratives. Requires human governance sign-off.",
    status: "Drafting Deck",
    statusColor: "text-purple-400 bg-purple-400/10 border-purple-400/20",
    gradient: "from-purple-500/10 via-transparent to-transparent"
  },
  {
    icon: Activity,
    title: "Regime Detection Agent",
    desc: "Monitors real-time API feeds to alert you of structural macroeconomic shifts in the market.",
    status: "Monitoring API",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    gradient: "from-emerald-500/10 via-transparent to-transparent"
  },
  {
    icon: Send,
    title: "Allocation Agent",
    desc: "Proposes optimal capital sweeps and resource allocation based on your current constraints.",
    status: "Optimizing Capital",
    statusColor: "text-orange-400 bg-orange-400/10 border-orange-400/20",
    gradient: "from-orange-500/10 via-transparent to-transparent"
  },
  {
    icon: Database,
    title: "Dataset Cleaning Agent",
    desc: "Automatically maps and sanitizes fragmented ERP data into the Hyperblock format.",
    status: "Dataset Ready",
    statusColor: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20",
    gradient: "from-cyan-500/10 via-transparent to-transparent"
  },
  {
    icon: GitBranch,
    title: "Tax & Jurisdictional Agent",
    desc: "Monitors liability exposure and tax optimization paths across global jurisdictions.",
    status: "Tax Pathing: Active",
    statusColor: "text-emerald-500 bg-emerald-500/10 border-emerald-500/20",
    gradient: "from-emerald-600/10 via-transparent to-transparent"
  },
  {
    icon: Hammer,
    title: "Audit Readiness Agent",
    desc: "Maintains models in 'external auditor ready' state 24/7 with full provenance matching.",
    status: "Audit State: VALID",
    statusColor: "text-white bg-white/5 border-white/10",
    gradient: "from-white/10 via-transparent to-transparent"
  },
  {
    icon: BarChart3,
    title: "Cash Flow Predictor Agent",
    desc: "Simulates daily runway, burn dynamics, and liquidity drift across 10,000 paths.",
    status: "Liquidity Secured",
    statusColor: "text-blue-500 bg-blue-500/10 border-blue-500/20",
    gradient: "from-blue-600/10 via-transparent to-transparent"
  },
  {
    icon: Zap,
    title: "Circular Logic Agent",
    desc: "Resolves complex 3-statement circularity with vectorized accuracy — zero spreadsheet errors.",
    status: "Logic Balanced",
    statusColor: "text-yellow-400 bg-yellow-400/10 border-yellow-400/20",
    gradient: "from-yellow-400/10 via-transparent to-transparent"
  },
  {
    icon: Fingerprint,
    title: "Security & Provenance Agent",
    desc: "Ensuresทุก cell update is cryptographically linked to an authorized human user.",
    status: "Provenance: LOCKED",
    statusColor: "text-rose-400 bg-rose-400/10 border-rose-400/20",
    gradient: "from-rose-500/10 via-transparent to-transparent"
  }
]

export function AgenticSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="agents" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#050810] relative section-divider overflow-hidden" ref={ref}>
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

       <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 glass-premium text-[10px] font-black uppercase tracking-widest text-accent mb-6 animate-pulse-glow">
                <UserCog className="w-3 h-3 text-accent" />
                Human-in-the-Loop Orchestration
             </div>
             <h2 className="text-3xl sm:text-5xl font-black text-white mb-6 tracking-tight">
                Agentic AI Orchestration. <span className="text-gradient-accent text-white">Controlled by You.</span>
             </h2>
             <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed font-medium">
                Meet your 12 specialized AI agents. They analyze, forecast, and document at machine speed—while you maintain absolute governance, approval authority, and final CFO control.
             </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
             {agents.map((agent, i) => (
               <div
                 key={i}
                 className={`glass-premium p-6 sm:p-8 rounded-[2rem] border border-white/10 relative overflow-hidden group hover:border-accent/40 transition-all duration-700 bg-gradient-to-br from-black/60 to-transparent ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                 style={{ transitionDelay: `${i * 80}ms` }}
               >
                 {/* Hover Gradient Overlay */}
                 <div className={`absolute inset-0 bg-gradient-to-br ${agent.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                 
                 <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className="w-12 h-12 glass-premium rounded-xl flex items-center justify-center border border-white/10 bg-white/5 group-hover:scale-110 transition-transform duration-500 group-hover:border-accent/30 group-hover:shadow-[0_0_15px_rgba(0,242,255,0.1)]">
                       <agent.icon className="w-6 h-6 text-white/70 group-hover:text-accent transition-colors" />
                    </div>
                    {/* Status Pill */}
                    <div className={`px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest border ${agent.statusColor} shadow-inner`}>
                       {agent.status}
                    </div>
                 </div>
                 
                 <h3 className="text-lg font-black text-white mb-2 tracking-tight relative z-10 leading-tight group-hover:text-accent transition-colors">{agent.title}</h3>
                 <p className="text-xs text-white/60 leading-relaxed font-medium relative z-10 group-hover:text-white/80 transition-colors">
                   {agent.desc}
                 </p>
               </div>
             ))}
          </div>

          {/* Bottom Security Bar */}
          <div className={`mt-14 max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
             <div className="glass-premium rounded-2xl p-6 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-black uppercase tracking-[0.2em] px-10 shadow-xl bg-black/40">
                <div className="flex items-center gap-3 text-white/50">
                   <Lock className="w-4 h-4 text-white/30" />
                   Isolated Tenant Architecture
                </div>
                <div className="w-px h-6 bg-white/10 hidden md:block" />
                <div className="flex items-center gap-3 text-emerald-400">
                   <CheckCircle className="w-4 h-4 text-emerald-400 animate-pulse" />
                   12/12 Agent Systems Active & Under Governance
                </div>
                <div className="hidden lg:flex items-center gap-3 text-accent/60">
                   <Activity className="w-4 h-4 accent-pulse" />
                   Real-time Logical Recalc
                </div>
             </div>
          </div>
       </div>
    </section>
  )
}
