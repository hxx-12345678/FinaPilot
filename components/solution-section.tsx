"use client"

import { Cpu, ShieldCheck, Database, GitBranch, Terminal, RefreshCw, Zap, Workflow, Search } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const features = [
  { icon: Cpu, label: "Vectorized Compute", desc: "No cell-level lag." },
  { icon: ShieldCheck, label: "Deterministic Engine", desc: "100% mathematical rules." },
  { icon: Database, label: "Centralized Data", desc: "No more broken links." },
  { icon: GitBranch, label: "Version Control", desc: "Roll back any model." },
  { icon: Terminal, label: "Py/SymPy Support", desc: "Advanced quant scripting." },
  { icon: RefreshCw, label: "Real-time Recalc", desc: "4ms global updates." },
  { icon: Zap, label: "Smart Anomalies", desc: "Shapley variance ID." },
  { icon: Workflow, label: "Approval Gates", desc: "CFO sign-off required." },
  { icon: Search, label: "Cell-level Audit", desc: "Who changed what." },
]

export function SolutionSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="solution" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] relative section-divider" ref={ref}>
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 glass-premium text-[10px] font-bold uppercase tracking-widest text-accent mb-6 animate-pulse-glow transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Cpu className="w-3 h-3 text-accent" />
            Vectorized Architecture
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          <div className={`flex-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
              The <span className="text-gradient-accent">Hyperblock™</span> Advantage
            </h2>
            <p className="text-xl text-accent font-semibold mb-4 tracking-wide">
              The Operating System for Finance Professionals
            </p>
            <p className="text-base text-white/70 leading-relaxed mb-10">
              Stop fighting with cell-based limitations. FinaPilot's vectorized DAG engine processes multi-dimensional models with industrial speed, ensuring your 3-statement logic remains unbreakable across 10,000+ scenarios.
            </p>

            <div className="grid grid-cols-3 gap-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center p-3 sm:p-4 rounded-xl glass-premium glass-hover border border-white/5 group transition-all duration-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${300 + index * 60}ms` }}
                >
                  <feature.icon className="w-5 h-5 text-accent mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-white/80 group-hover:text-white transition-colors leading-tight">{feature.label}</span>
                  <span className="text-[8px] text-white/50 mt-1 hidden sm:block leading-tight">{feature.desc}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`flex-1 w-full relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '0.3s' }}>
            {/* Visual Representation of the OS */}
            <div className="glass-premium rounded-[2rem] p-2 sm:p-3 border border-accent/20 relative shadow-2xl bg-[#0d121c]">
               <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-blue-500/10 rounded-[2rem] opacity-50" />
               <div className="bg-black/60 rounded-[1.5rem] border border-white/5 overflow-hidden relative z-10 w-full aspect-[4/3] sm:aspect-[16/10] flex flex-col">
                  {/* Mock Terminal Header */}
                  <div className="h-10 sm:h-12 border-b border-white/5 bg-white/[0.02] flex items-center px-4 justify-between">
                     <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                     </div>
                     <div className="flex items-center gap-2 text-[10px] text-white/40 font-mono tracking-wider">
                        <Terminal className="w-3 h-3" />
                        node: finapilot-compute-01
                     </div>
                  </div>
                  
                  {/* Mock Terminal Body */}
                  <div className="flex-1 p-4 sm:p-6 font-mono text-[10px] sm:text-xs leading-relaxed overflow-hidden relative text-white/50">
                    <div className="absolute top-0 right-0 p-4 opacity-10 blur-[1px]">
                       <ShieldCheck className="w-32 h-32 text-accent" />
                    </div>
                    
                    <p className="text-accent/80 mb-4">$ finapilot connect --source erp --target datalake</p>
                    <p className="text-green-400 mb-2">» Establishing AES-256 secure tunnel... [OK]</p>
                    <p className="mb-4">» Ingesting 2.4M ledger entries... [14ms]</p>
                    
                    <p className="text-accent/80 mt-6 mb-4">$ hyperblock compile --model "FY25_Scenario_A"</p>
                    <p className="text-white/70 mb-1">Building Directed Acyclic Graph (DAG)...</p>
                    <p className="text-green-400 mb-1">» Resolved 4,302 circular references (Interest/Debt loop) via SymPy.</p>
                    <p className="mb-4 text-white/70">» Verifying constraints: Leverage Ratio &lt; 3.0x [PASS]</p>

                    <p className="text-accent/80 mt-6 mb-4">$ auth require --role CFO --action "deploy_model"</p>
                    <p className="text-yellow-400 mb-2 animate-pulse">» Pending Human-in-the-Loop authorization...</p>
                  </div>
               </div>
            </div>
            
            {/* Glowing effect behind the mockup */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/20 blur-[80px] -z-10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
