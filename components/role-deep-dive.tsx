"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Rocket, Shield, Target, TrendingUp, Zap, BarChart3, Users, Clock, Brain, ChevronRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

// Deterministic bar heights (no Math.random — prevents hydration mismatch)
const chartBars = [38, 52, 44, 68, 55, 72, 48, 65, 58, 75, 42, 60]

const roles = [
  {
    id: "cfo",
    icon: Shield,
    label: "CFO",
    title: "Strategic Risk & Capital Efficiency",
    benefit: "Reduce Model Risk",
    points: [
      { icon: Shield, text: "Monte Carlo VaR analysis across 10,000+ scenario paths — reviewed and validated by your team" },
      { icon: Zap, text: "Real-time impact of 50bps rate hikes across all debt covenants — with full audit trail" },
      { icon: Target, text: "Zero-error 3-statement logic with proprietary circular reference resolution — human-verifiable at every step" },
    ],
    roi: "30% Reduction in Model Risk",
    painPoint: "We discovered a covenant breach 3 weeks earlier than our spreadsheet process would have caught it. The audit trail made board reporting effortless.",
    mockupLabel: "Risk Dashboard",
    mockupCode: "monte_carlo.run(scenarios=10000).compute_var(p=0.95)",
    mockupResult: "VaR(95%) = $2.4M | Covenant Status: CLEAR",
    stats: [
      { label: "P95 Accuracy", value: "98.2%" },
      { label: "Risk Latency", value: "<4ms" },
    ]
  },
  {
    id: "ceo",
    icon: Rocket,
    label: "CEO",
    title: "Decision Speed & Strategic Clarity",
    benefit: "Market Edge & Growth Velocity",
    points: [
      { icon: Rocket, text: "Board-ready presentations auto-drafted in minutes — your team reviews and approves before delivery" },
      { icon: TrendingUp, text: "Regime detection surfaces structural shifts early — so your strategists can evaluate and act" },
      { icon: Users, text: "Unified view across finance, sales, and operations — no more reconciling disparate data silos" },
    ],
    roi: "15% Faster Strategic Decisions",
    painPoint: "Board prep went from 2 weeks to 2 days. The AI drafts the narrative from live data, and our CFO validates everything before it goes out.",
    mockupLabel: "Board Report Engine",
    mockupCode: "board.generate('Q1 Update', template='investor', format='pptx')",
    mockupResult: "Report Drafted | 12 slides | Ready for Review",
    stats: [
      { label: "Report Speed", value: "2 days" },
      { label: "Data Sources", value: "12+" },
    ]
  },
  {
    id: "fpa",
    icon: BarChart3,
    label: "FP&A Head",
    title: "Speed & Accuracy",
    benefit: "Built for FP&A Teams",
    points: [
      { icon: BarChart3, text: "Handle 1M+ row models with structured logic — every formula readable and auditable" },
      { icon: Clock, text: "Full model recalculation in under 4ms — even across multi-sheet 3-statement models" },
      { icon: Zap, text: "Mathematical variance attribution explains exactly WHY forecasts diverge — no black boxes" },
    ],
    roi: "85% Less Time on Data Prep",
    painPoint: "We finally stopped wrestling with Excel and started analyzing. Variance attribution answers 'Why did we miss?' with mathematical proof, not guesswork.",
    mockupLabel: "Variance Attribution",
    mockupCode: "variance.explain(actual_vs_forecast, method='shapley')",
    mockupResult: "Top Driver: CAC +18% → Revenue Impact: -$340K",
    stats: [
      { label: "Forecast Accuracy", value: "99.2%" },
      { label: "Engine Speed", value: "4ms" },
    ]
  },
  {
    id: "manager",
    icon: Zap,
    label: "Finance Mgr",
    title: "Automation & Velocity",
    benefit: "The Frictionless Month-End",
    points: [
      { icon: Zap, text: "12+ auto-sync integrations: QuickBooks, Xero, Stripe, SAP, Oracle — with reconciliation checks" },
      { icon: Shield, text: "Audit-ready governance & GDPR compliant trails for every cell change — versioned and exportable" },
      { icon: Users, text: "Team collaboration with role-based access, approval workflows, and version-controlled logic" },
    ],
    roi: "4 Days Saved on Close Process",
    painPoint: "Month-end close dropped from 10 days to 6. Integrations sync automatically and we review the reconciliation report each morning.",
    mockupLabel: "Integration Status",
    mockupCode: "connectors.sync_all(schedule='nightly', verify=True)",
    mockupResult: "12/12 Connected | Last Sync: 2 min ago | 0 Errors",
    stats: [
      { label: "Integrations", value: "12+" },
      { label: "Close Time", value: "6 days" },
    ]
  }
]

export function RoleDeepDive() {
  const [activeRole, setActiveRole] = useState("cfo")
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] relative overflow-hidden section-divider" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-premium text-[10px] font-bold uppercase tracking-widest text-accent mb-6">
            <Users className="w-3 h-3" />
            Built For Every Role
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">
            <span className="text-white">One Platform.</span> <span className="text-gradient-accent">Every Finance Role.</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
            Whether you're a CFO managing risk or a Finance Manager closing the books, FinaPilot adapts to your specific challenge — with full human oversight at every step.
          </p>
        </div>

        <Tabs defaultValue="cfo" className="w-full max-w-5xl mx-auto" onValueChange={setActiveRole}>
          <div className={`flex justify-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
            <TabsList className="glass-premium p-1.5 rounded-2xl h-auto border border-white/5 flex flex-wrap justify-center gap-1">
              {roles.map((role) => (
                <TabsTrigger 
                  key={role.id} 
                  value={role.id} 
                  className="px-5 sm:px-8 h-11 sm:h-12 rounded-xl text-[10px] sm:text-xs text-white/70 uppercase font-bold tracking-widest data-[state=active]:bg-accent data-[state=active]:text-accent-foreground transition-all flex items-center gap-1.5 sm:gap-2"
                >
                  <role.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {role.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <div className="relative">
            {roles.map((role) => (
              <TabsContent key={role.id} value={role.id} className="animate-fade-in-scale">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                  <div className="space-y-7">
                    <div>
                        <h4 className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-3">{role.benefit}</h4>
                        <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">{role.title}</h3>
                    </div>
                    
                    <div className="space-y-5">
                      {role.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-4 group">
                          <div className="w-10 h-10 glass-premium rounded-lg flex items-center justify-center shrink-0 border border-white/5 group-hover:border-accent/40 transition-all">
                             <point.icon className="w-5 h-5 text-accent" />
                          </div>
                          <p className="text-white/70 leading-relaxed mt-1 text-sm sm:text-base">{point.text}</p>
                        </div>
                      ))}
                    </div>

                    {/* Testimonial-style quote */}
                    <div className="glass-premium rounded-xl p-5 border border-accent/10 relative">
                      <div className="absolute -top-2 left-4 text-accent text-2xl font-serif">&ldquo;</div>
                      <p className="text-sm text-white/70 italic pl-4 leading-relaxed">{role.painPoint}</p>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                        <div className="flex items-center gap-4">
                            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                            <span className="text-xl sm:text-2xl font-bold text-white">{role.roi}</span>
                        </div>
                        <p className="text-[10px] text-white/40 mt-2 uppercase tracking-widest font-bold">Expected Outcome</p>
                    </div>
                  </div>

                  {/* Visual Mockup Container */}
                  <div className="relative glass-premium rounded-[2rem] p-1 border border-white/5 overflow-hidden shadow-2xl">
                     <div className="absolute inset-0 bg-gradient-to-tr from-accent/5 via-transparent to-blue-500/5 opacity-40" />
                     <div className="p-6 sm:p-8 relative z-10 space-y-5">
                        {/* Top bar */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/60" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                            <div className="w-3 h-3 rounded-full bg-green-500/60" />
                          </div>
                          <span className="text-[9px] font-mono text-white/40 uppercase">{role.mockupLabel}</span>
                        </div>

                        {/* Command */}
                        <div className="w-full rounded-xl bg-black/40 border border-accent/10 p-4">
                          <p className="text-[10px] sm:text-xs font-mono text-accent/80">
                            <span className="text-white/30">$</span> {role.mockupCode}
                          </p>
                        </div>

                        {/* Result */}
                        <div className="w-full rounded-xl bg-black/30 border border-green-500/10 p-4">
                          <p className="text-[10px] sm:text-xs font-mono text-green-400">
                            <span className="text-green-400/50">»</span> {role.mockupResult}
                          </p>
                        </div>

                        {/* Chart — deterministic heights to prevent hydration mismatch */}
                        <div className="w-full h-32 rounded-2xl bg-white/[0.03] border border-white/5 flex items-end justify-between px-4 pb-3 relative overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-b from-transparent to-accent/5" />
                           {chartBars.map((height, i) => (
                             <div
                               key={i}
                               className="w-full bg-accent/30 rounded-t-sm relative z-10"
                               style={{ height: `${height}%`, maxWidth: '6%' }}
                             />
                           ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-3">
                          {role.stats.map((stat, i) => (
                            <div key={i} className="rounded-xl bg-white/[0.03] border border-white/5 px-4 py-3">
                              <p className="text-[9px] text-white/40 uppercase font-bold tracking-wider">{stat.label}</p>
                              <p className="text-lg font-bold text-accent tracking-tighter">{stat.value}</p>
                            </div>
                          ))}
                        </div>
                     </div>
                  </div>
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  )
}
