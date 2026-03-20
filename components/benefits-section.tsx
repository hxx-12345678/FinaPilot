"use client"

import { Check, ShieldCheck } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useCalendly } from "@/components/calendly-provider"

const benefits = [
  { text: "Concierge quantitative Excel migration & onboarding", highlight: true },
  { text: "Full programmatic access to Hyperblock™ Engine", highlight: false },
  { text: "Human-in-the-loop transparent mathematical models", highlight: true },
  { text: "Dedicated implementation success manager (4-hour SLA)", highlight: false },
  { text: "Security Provenance & GDPR compliant audit architectures", highlight: true },
  { text: "Continuous priority roadmap alignment and requests", highlight: false },
  { text: "Guaranteed enterprise service uptime (99.99%)", highlight: false },
  { text: "Bespoke structural regime and scenario labs", highlight: false },
]

export function BenefitsSection() {
  const { ref, isVisible } = useScrollReveal()
  const { openCalendly } = useCalendly()

  return (
    <section id="benefits" className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] section-divider" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <div className={`flex-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-premium border border-white/10 text-[10px] font-bold uppercase tracking-widest text-accent mb-6">
              <ShieldCheck className="w-3 h-3" />
              Pilot Exclusivity
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Enterprise <span className="text-gradient-accent">Pilot Advantages</span>
            </h2>
            <p className="text-base text-white/70 mb-8 leading-relaxed">
              Transforming your finance operations requires a high-touch partnership. We provide the engineering muscle; you provide the financial expertise.
            </p>

            <div className="grid gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${200 + index * 60}ms` }}
                >
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${benefit.highlight ? 'bg-accent/20 border border-accent/40' : 'bg-white/5 border border-white/10'}`}>
                    <Check className={`w-3.5 h-3.5 ${benefit.highlight ? 'text-accent' : 'text-white/60'}`} />
                  </div>
                  <span className={`text-sm leading-relaxed ${benefit.highlight ? 'text-white font-bold' : 'text-white/80'}`}>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`flex-1 w-full max-w-md transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '0.3s' }}>
            <div className="glass-premium rounded-2xl p-8 border border-accent/20 relative overflow-hidden bg-[#0A101D]">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-60" />
              
              <div className="text-center mb-8 relative z-10">
                <p className="text-xs text-accent font-bold uppercase tracking-widest mb-3">Enterprise Implementation</p>
                <p className="text-5xl font-black text-white mb-3 tracking-tighter">Pilot Intake</p>
                <div className="inline-flex px-3 py-1 bg-white/5 border border-white/10 rounded-full">
                  <p className="text-xs text-white/70 font-mono">Custom Enterprise Tier</p>
                </div>
              </div>
              <div className="border-t border-white/10 pt-6 relative z-10">
                <ul className="space-y-4 text-sm mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-white/80 leading-snug">Deep dive architecture review with our Quant Engineers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-white/80 leading-snug">Strict Human-in-the-Loop workflows established</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-white/80 leading-snug">Isolated vault-tenant data setup</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-14 font-bold rounded-xl text-lg group shadow-[0_0_30px_-5px_var(--accent)]"
                  onClick={openCalendly}
                >
                  Secure Pilot Placement
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
