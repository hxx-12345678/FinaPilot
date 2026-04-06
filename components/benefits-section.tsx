"use client"

import { Check, ShieldCheck, Brain } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useCalendly } from "@/components/calendly-provider"

const benefits = [
  { text: "We rebuild your financial model inside FinaPilot", highlight: true },
  { text: "Direct Slack/WhatsApp access to founders — not support tickets", highlight: true },
  { text: "12 AI agents configured and tuned for your business", highlight: true },
  { text: "Custom features built for your specific workflow", highlight: false },
  { text: "Priority influence on product roadmap", highlight: false },
  { text: "Founding member lifetime pricing (locked in)", highlight: false },
  { text: "Weekly check-in calls during pilot", highlight: false },
  { text: "Full audit trail and GDPR-ready architecture", highlight: false },
]

export function BenefitsSection() {
  const { ref, isVisible } = useScrollReveal()
  const { openCalendly } = useCalendly()

  return (
    <section id="benefits" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] section-divider" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <div className={`flex-1 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-accent mb-6">
              <ShieldCheck className="w-3.5 h-3.5" />
              What You Get
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-tight">
              Design Partner <span className="text-gradient-accent">Benefits</span>
            </h2>
            <p className="text-base text-white/50 mb-8 leading-relaxed">
              This is a hands-on partnership where we invest engineering time into your success — and you help us build a better product. Both sides grow together.
            </p>

            <div className="grid gap-3.5">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
                  style={{ transitionDelay: `${200 + index * 50}ms` }}
                >
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${benefit.highlight ? 'bg-accent/20 border border-accent/30' : 'bg-white/5 border border-white/10'}`}>
                    <Check className={`w-3 h-3 ${benefit.highlight ? 'text-accent' : 'text-white/50'}`} />
                  </div>
                  <span className={`text-sm leading-relaxed ${benefit.highlight ? 'text-white font-semibold' : 'text-white/60'}`}>{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`flex-1 w-full max-w-md transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`} style={{ transitionDelay: '0.3s' }}>
            <div className="glass-premium rounded-2xl p-8 border border-accent/15 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-60" />
              
              <div className="text-center mb-7 relative z-10">
                <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">Design Partner Program</p>
                <p className="text-4xl font-black text-white mb-2 tracking-tight">10 Spots</p>
                <p className="text-sm text-white/50">Custom engagement based on team size & complexity</p>
              </div>
              <div className="border-t border-white/10 pt-6 relative z-10">
                <ul className="space-y-3.5 text-sm mb-8">
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-white/70 leading-snug">Full financial model rebuild inside FinaPilot</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-white/70 leading-snug">12 AI agents configured for your workflows</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-white/70 leading-snug">Scenario planning & board reporting setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                    <span className="text-white/70 leading-snug">Weekly calls + dedicated founder access</span>
                  </li>
                </ul>
                <Button
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-13 font-bold rounded-xl text-base group shadow-[0_0_25px_-5px_var(--accent)]"
                  onClick={openCalendly}
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-[11px] text-white/30 text-center mt-3">30 min call · Mutual fit assessment · No obligation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
