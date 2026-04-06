"use client"

import { Building2, LineChart, Globe, Lock, ShieldCheck, FileCheck } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const marketProof = [
  {
    value: "80%",
    label: "of finance functions plan to use AI.",
    source: "Gartner Finance Research",
    sourceUrl: "https://www.gartner.com/en/finance/topics/artificial-intelligence-in-finance",
    icon: Building2
  },
  {
    value: "90%",
    label: "of large spreadsheets contain errors.",
    source: "EuSpRIG Research (Panko)",
    sourceUrl: "https://eusprig.org/research-info/",
    icon: LineChart
  },
  {
    value: "73%",
    label: "of US companies have adopted AI.",
    source: "PwC AI Business Survey",
    sourceUrl: "https://www.pwc.com/us/en/tech-effect/ai-analytics/ai-business-survey.html",
    icon: Globe
  }
]

const trustPoints = [
  {
    icon: Lock,
    title: "Your Data Stays Yours",
    desc: "AES-256 encryption at rest, TLS 1.3 in transit. Isolated tenant architecture. We never train AI on your financial data."
  },
  {
    icon: ShieldCheck,
    title: "No AI Hallucinations",
    desc: "Core calculations use deterministic math (not LLMs). AI assists with analysis — all financial logic is verifiable and traceable."
  },
  {
    icon: FileCheck,
    title: "Audit-Ready From Day 1",
    desc: "Every assumption change, human override, and AI suggestion is logged. See who changed what, when, and why — built for SOC 2 readiness."
  }
]

export function SocialProofSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="trust" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] relative section-divider overflow-hidden" ref={ref}>
       <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-accent/3 rounded-full blur-[120px] pointer-events-none" />

       <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-accent mb-6">
                <ShieldCheck className="w-3.5 h-3.5" />
                Why Finance Teams Trust FinaPilot
             </div>
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
                Built for teams that can't afford <span className="text-gradient-accent">guesswork.</span>
             </h2>
             <p className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
                The shift from spreadsheets to AI-powered finance is happening now. But only solutions that combine speed with full transparency will earn CFO trust.
             </p>

             {/* Market Data Cards with real sources */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 max-w-5xl mx-auto mt-12 sm:mt-14">
                {marketProof.map((stat, i) => (
                   <a 
                     key={i}
                     href={stat.sourceUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={`glass-premium rounded-2xl p-7 sm:p-8 border border-white/5 relative overflow-hidden group hover:border-accent/20 transition-all text-left block cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                     style={{ transitionDelay: `${200 + i * 100}ms` }}
                   >
                     <stat.icon className="w-5 h-5 text-white/30 group-hover:text-accent transition-colors mb-4" />
                     <div className="text-3xl sm:text-4xl font-black text-white mb-2 tracking-tight leading-none group-hover:text-accent transition-colors">
                        {stat.value}
                     </div>
                     <p className="text-sm text-white/60 leading-snug font-medium mb-5">
                       {stat.label}
                     </p>
                     <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                        <span className="text-[10px] text-white/30 font-medium">{stat.source}</span>
                        <span className="text-[9px] text-accent/50 group-hover:text-accent transition-colors font-semibold uppercase tracking-wider">Read Report →</span>
                     </div>
                   </a>
                ))}
             </div>
          </div>

          {/* Trust Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 max-w-5xl mx-auto mt-16 sm:mt-20 pt-14 border-t border-white/5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.4s' }}>
             {trustPoints.map((point, i) => (
               <div key={i} className="flex flex-col items-start text-left group">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-5 border border-white/10 group-hover:border-accent/20 transition-colors">
                    <point.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{point.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{point.desc}</p>
               </div>
             ))}
          </div>
       </div>
    </section>
  )
}
