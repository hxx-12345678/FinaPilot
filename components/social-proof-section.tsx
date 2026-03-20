"use client"

import { Building2, LineChart, Globe, Lock, ShieldCheck, FileCheck, CheckCircle2 } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const marketProof = [
  {
    value: "$4.1B",
    label: "Projected value of AI in global FP&A market by 2032.",
    source: "Statista / Fortune Business Insights, 2024",
    icon: LineChart
  },
  {
    value: "54%",
    label: "CFOs actively integrating Agentic AI for scenario forecasting.",
    source: "Gartner Audit Research, 2024",
    icon: Building2
  },
  {
    value: "80%",
    label: "Enterprise financial logic migrating to AI-Verified architectures.",
    source: "McKinsey Global Institute",
    icon: Globe
  }
]

const credibilityPoints = [
  {
    icon: Lock,
    title: "Validated Audit Architecture",
    desc: "Rigorous third-party validation of security, availability, and processing integrity inside our isolated vault-tenant infrastructure."
  },
  {
    icon: ShieldCheck,
    title: "Deterministic Engine",
    desc: "Built entirely on exact mathematical DAGs (Directed Acyclic Graphs). Designed for zero financial hallucination."
  },
  {
    icon: FileCheck,
    title: "100% Audit Provenance",
    desc: "Granular cryptographic logging of all logic steps, assumptions, and human overrides. Exceeds standard Big 4 audit readiness."
  }
]

export function SocialProofSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] relative section-divider overflow-hidden" ref={ref}>
       <div className="absolute top-0 right-0 w-[60%] h-[60%] bg-accent/3 rounded-full blur-[120px] pointer-events-none" />

       <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-premium border border-white/10 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-accent mb-6 bg-black/40">
                Institutional Confidence
             </div>
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 tracking-tight uppercase">
                <span className="text-gradient-accent">Enterprise Grade</span> Protocol
             </h2>
             <p className="text-sm sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed font-medium">
                Engineered for the high-stakes requirements of global finance operations, combining mathematical certainty with industrial security.
             </p>

             {/* Market Data Cards */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mt-12 sm:mt-16">
                {marketProof.map((stat, i) => (
                   <div 
                     key={i} 
                     className="glass-premium rounded-[2.5rem] p-8 sm:p-10 border border-white/5 relative overflow-hidden group hover:border-accent/30 transition-all bg-[#0a0f19] text-left shadow-2xl"
                   >
                     <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10 group-hover:bg-accent/10 transition-colors" />
                     <div className="w-12 h-12 glass-premium rounded-xl flex items-center justify-center mb-6 border border-white/10 bg-white/5 group-hover:scale-110 transition-transform">
                        <stat.icon className="w-6 h-6 text-accent group-hover:text-white transition-colors" />
                     </div>
                     <div className="text-4xl sm:text-5xl font-black text-white mb-3 tracking-tighter leading-none group-hover:text-accent transition-colors">
                        {stat.value}
                     </div>
                     <p className="text-sm sm:text-base text-white/80 leading-snug font-bold mb-6 min-h-[40px]">
                       {stat.label}
                     </p>
                     <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-black font-mono">{stat.source}</span>
                     </div>
                   </div>
                ))}
             </div>
          </div>

          {/* Credibility Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 max-w-5xl mx-auto mt-16 sm:mt-24 pt-16 border-t border-white/10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
             {credibilityPoints.map((point, i) => (
               <div key={i} className="flex flex-col items-center md:items-start text-center md:text-left px-4 group">
                  <div className="w-14 h-14 glass-premium rounded-2xl flex items-center justify-center mb-6 border border-white/10 bg-black/40 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                    <point.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 leading-tight uppercase tracking-tight">{point.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed font-medium group-hover:text-white/70 transition-colors">{point.desc}</p>
               </div>
             ))}
          </div>
          
          <div className="mt-16 sm:mt-24 flex flex-col items-center gap-6">
             <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
             <div className="glass-premium px-8 py-3 rounded-2xl border border-emerald-500/20 inline-flex items-center gap-4 bg-emerald-500/5 shadow-2xl group hover:border-emerald-500/40 transition-all">
                 <CheckCircle2 className="w-5 h-5 text-emerald-400 animate-pulse" />
                 <span className="text-[10px] sm:text-[11px] font-black text-white uppercase tracking-[0.3em]">Institutional Integrity Verified</span>
             </div>
          </div>
       </div>
    </section>
  )
}
