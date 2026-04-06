"use client"

import { CheckCircle2, Bot, Layers, Zap, Hexagon, Fingerprint, SearchCheck, ShieldCheck } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const capabilities = [
  {
    title: "Traceable Math, Not AI Guesswork",
    desc: "Core calculations use deterministic logic — not LLM predictions. Every assumption change creates a verifiable audit trail.",
    icon: Layers,
    stat: "Deterministic",
  },
  {
    title: "Full Change History",
    desc: "See exactly who changed what assumption and when. Built for teams that need to answer to auditors, boards, and investors.",
    icon: Fingerprint,
    stat: "Audit Ready",
  },
  {
    title: "Human Approval Required",
    desc: "AI agents draft analyses and suggest scenarios, but execute nothing. Every financial output requires explicit human sign-off.",
    icon: SearchCheck,
    stat: "You Decide",
  },
  {
    title: "Understand Why Numbers Changed",
    desc: "Don't just see the variance — understand the exact drivers behind margin changes, revenue shifts, and forecast deviations.",
    icon: Hexagon,
    stat: "Root Cause",
  },
  {
    title: "12 Specialized AI Agents",
    desc: "Risk, compliance, reporting, scenario planning — each agent handles one job well, and reports back to your team for approval.",
    icon: Bot,
    stat: "12 Agents",
  },
  {
    title: "Instant Full-Model Recalculation",
    desc: "Change one growth assumption and watch the entire 3-statement model recalculate across thousands of scenarios in milliseconds.",
    icon: Zap,
    stat: "<4ms",
  },
]

export function CapabilitiesSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] relative overflow-hidden section-divider" ref={ref}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-accent mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            Under the Hood
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Speed you need. <span className="text-gradient-accent">Transparency you trust.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            FinaPilot is fast — but more importantly, it's honest. Every number has a traceable origin, every AI suggestion has an explanation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap, i) => (
             <div
               key={i}
               className={`glass-premium glass-hover p-6 sm:p-7 rounded-2xl border border-white/5 relative overflow-hidden group transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
               style={{ transitionDelay: `${i * 80}ms` }}
             >
                <div className="absolute top-0 right-0 p-4">
                   <div className="px-2.5 py-1 rounded-full bg-accent/10 border border-accent/15 text-[9px] font-semibold uppercase tracking-wider text-accent">
                      {cap.stat}
                   </div>
                </div>

                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-5 border border-white/10 group-hover:bg-accent/10 group-hover:border-accent/20 transition-all">
                  <cap.icon className="w-5 h-5 text-white/40 group-hover:text-accent transition-colors" />
                </div>
                
                <h3 className="text-base font-bold text-white mb-2">{cap.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {cap.desc}
                </p>
             </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-[120px] pointer-events-none" />
    </section>
  )
}
