"use client"

import { CheckCircle2, Bot, Layers, Zap, Hexagon, Fingerprint, SearchCheck } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const capabilities = [
  {
    title: "100% Deterministic Engine",
    desc: "Every assumption change is mathematically traceable. We use programmatic DAG logic—not LLM hallucinations—for core calculations.",
    icon: Layers,
    stat: "SymPy Backed",
  },
  {
    title: "Immutable Audit Logs",
    desc: "Track the exact origin of every cell. See 'who, what, and when' with comprehensive provenance tracking designed for external auditors.",
    icon: Fingerprint,
    stat: "Audit Ready",
  },
  {
    title: "Human Validation Gates",
    desc: "AI agents draft analyses and propose scenarios, but execute nothing. Strict human-in-the-loop gates ensure CFO authority over all outputs.",
    icon: SearchCheck,
    stat: "CFO Approved",
  },
  {
    title: "Shapley Variance Attribution",
    desc: "Don't just see the difference—know the exact mathematical drivers behind margin compression or revenue outperformance.",
    icon: Hexagon,
    stat: "Game Theory Math",
  },
  {
    title: "Multi-Agent Orchestration",
    desc: "12 specialized AI personas (Risk, Compliance, Reporting) work in parallel to stress-test your human-built baseline models.",
    icon: Bot,
    stat: "12 Agents",
  },
  {
    title: "Global Recalculation",
    desc: "Update a single growth assumption and watch the entire 3-statement model instantly recalibrate across 10,000 Monte Carlo paths.",
    icon: Zap,
    stat: "<4ms Speed",
  },
]

export function CapabilitiesSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] relative overflow-hidden section-divider" ref={ref}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-premium border border-white/10 text-[10px] font-bold uppercase tracking-widest text-accent mb-6 animate-pulse-glow">
            <ShieldCheck className="w-3 h-3" />
            Institutional Architecture
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Built for <span className="text-gradient-accent">Trust & Provenance.</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
            FinaPilot pairs the sheer speed of vectorized compute with unrelenting transparency. It's not a black box—it's a high-performance engine governed entirely by your financial expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {capabilities.map((cap, i) => (
             <div
               key={i}
               className={`glass-premium glass-hover p-6 sm:p-8 rounded-[2rem] border border-white/5 relative overflow-hidden group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
               style={{ transitionDelay: `${i * 100}ms` }}
             >
                <div className="absolute top-0 right-0 p-4">
                   <div className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-[9px] font-bold uppercase tracking-widest text-accent">
                      {cap.stat}
                   </div>
                </div>

                <div className="w-12 h-12 glass-premium rounded-xl flex items-center justify-center mb-6 border border-white/10 bg-white/5 group-hover:bg-accent/10 group-hover:border-accent/30 transition-all">
                  <cap.icon className="w-6 h-6 text-white/50 group-hover:text-accent transition-colors" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 tracking-snug">{cap.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed font-medium">
                  {cap.desc}
                </p>
             </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  )
}

function ShieldCheck(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
