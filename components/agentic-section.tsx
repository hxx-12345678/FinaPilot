"use client"

import { Bot, LineChart, Shield, Lock, Calculator, Activity, Send, Zap, GitBranch, BarChart3, Fingerprint, Database, CheckCircle, Brain, UserCog } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import SplashCursor from "@/components/splash-cursor"

const agents = [
  {
    icon: Shield,
    title: "Risk & Compliance Agent",
    desc: "Stress-tests your model against macroeconomic scenarios. Flags exposure before it becomes a problem.",
    status: "Active",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  {
    icon: LineChart,
    title: "Variance Analysis Agent",
    desc: "Shows exactly why numbers changed between plan and actual — with mathematical attribution.",
    status: "Active",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  {
    icon: Calculator,
    title: "Financial Modeling Agent",
    desc: "Builds baseline 3-statement models and scenario variants. Drafts — your team approves.",
    status: "Active",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  {
    icon: Bot,
    title: "Reporting Agent",
    desc: "Auto-drafts variance narratives and board presentations from raw data.",
    status: "Active",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  {
    icon: Activity,
    title: "Market Monitoring Agent",
    desc: "Watches macroeconomic indicators and alerts you when market shifts could impact forecasts.",
    status: "Monitoring",
    statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20",
  },
  {
    icon: Send,
    title: "Resource Allocation Agent",
    desc: "Suggests optimal capital allocation and headcount planning based on constraints.",
    status: "Active",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  {
    icon: Database,
    title: "Data Cleaning Agent",
    desc: "Automatically maps and normalizes messy data from different ERPs and CSVs.",
    status: "Ready",
    statusColor: "text-accent bg-accent/10 border-accent/20",
  },
  {
    icon: GitBranch,
    title: "Scenario Planning Agent",
    desc: "Runs Monte Carlo simulations across thousands of paths to show outcomes.",
    status: "Active",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  {
    icon: BarChart3,
    title: "Cash Flow Agent",
    desc: "Simulates daily runway and burn rate dynamics. Flags liquidity risks early.",
    status: "Active",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  {
    icon: Zap,
    title: "Circular Logic Agent",
    desc: "Resolves complex 3-statement circular references (like interest on revolving debt).",
    status: "Active",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  {
    icon: Fingerprint,
    title: "Audit & Provenance Agent",
    desc: "Logs every cell update with full attribution. See exactly who changed what.",
    status: "Locked",
    statusColor: "text-white/60 bg-white/5 border-white/10",
  },
  {
    icon: Brain,
    title: "Anomaly Detection Agent",
    desc: "Spots unusual spending patterns, forecast deviations, and data inconsistencies.",
    status: "Active",
    statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
]

export function AgenticSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="agents" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#050810] relative section-divider overflow-hidden" ref={ref} aria-label="12 autonomous AI agents for FP&A — risk, variance analysis, financial modeling, reporting, scenario planning, Monte Carlo, cash flow, anomaly detection">
       {/* ═══ SPLASH CURSOR (REACT BITS) ═══ */}
       <SplashCursor 
         SIM_RESOLUTION={128}
         DYE_RESOLUTION={1024}
         SPLAT_RADIUS={0.15}
         COLOR_UPDATE_SPEED={8}
         BACK_COLOR={{ r: 0.02, g: 0.03, b: 0.06 }} 
       />
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[140px] pointer-events-none" />

       <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-accent mb-6">
                <UserCog className="w-3.5 h-3.5 text-accent" />
                AI That Assists — You Decide
             </div>
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
                12 Autonomous Agents to compound your finance team's output.<br/>
                <span className="text-white/50 text-2xl sm:text-3xl block mt-2">Zero loss of control.</span>
             </h2>
             <p className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
                Each agent handles a specific finance task — analyzing, forecasting, and flagging issues at machine speed. <a href="/features" className="text-white font-semibold underline decoration-accent/30 hover:decoration-accent transition-all">Explore the full agent architecture and capabilities</a>.
             </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
             {agents.map((agent, i) => (
               <div
                 key={i}
                 className={`glass-premium p-5 sm:p-6 rounded-2xl border border-white/5 relative overflow-hidden group hover:border-accent/30 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,242,255,0.08)] transition-all duration-500 cursor-default ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                 style={{ transitionDelay: `${i * 40}ms` }}
               >
                 <div className="absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-transparent group-hover:from-accent/5 transition-colors duration-500" />
                 <div className="flex justify-between items-start mb-4 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-accent/10 group-hover:border-accent/40 transition-all duration-500">
                       <agent.icon className="w-5 h-5 text-white/50 group-hover:text-accent transition-colors duration-500" />
                    </div>
                    <div className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider border transition-colors duration-500 ${agent.statusColor} group-hover:shadow-[0_0_10px_rgba(52,211,153,0.3)]`}>
                       {agent.status}
                    </div>
                 </div>
                 
                 <h3 className="text-sm font-bold text-white mb-1.5 leading-tight relative z-10 group-hover:text-accent transition-colors duration-500">{agent.title}</h3>
                 <p className="text-xs text-white/45 leading-relaxed relative z-10 group-hover:text-white/70 transition-colors duration-500">
                   {agent.desc}
                 </p>
               </div>
             ))}
          </div>

          {/* Bottom bar */}
          <div className={`mt-10 max-w-3xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.5s' }}>
             <div className="glass-premium rounded-xl p-5 border border-white/5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs font-medium">
                <div className="flex items-center gap-2 text-white/40">
                   <Lock className="w-3.5 h-3.5" />
                   <span>Isolated architecture</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-white/10" />
                <div className="flex items-center gap-2 text-emerald-400">
                   <CheckCircle className="w-3.5 h-3.5" />
                   <span>All agents under human governance</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-white/10" />
                <div className="flex items-center gap-2 text-white/40">
                   <Activity className="w-3.5 h-3.5" />
                   <span>Real-time processing</span>
                </div>
             </div>
          </div>
       </div>
    </section>
  )
}
