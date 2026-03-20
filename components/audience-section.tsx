"use client"

import { Briefcase, Calculator, TrendingUp, Rocket, Users, Building, UserCheck, LineChart } from "lucide-react"

const audiences = [
  { icon: Briefcase, label: "Institutional CFOs", desc: "Governance, Risk & Strategy" },
  { icon: TrendingUp, label: "Director of FP&A", desc: "Modeling, Forecasting & Variance" },
  { icon: LineChart, label: "PE / VC Portfolio Teams", desc: "Exit Planning & Returns" },
  { icon: Rocket, label: "Growth-Stage Founders", desc: "Scalable Model Architecture" },
  { icon: UserCheck, label: "Strategic Advisors", desc: "Fractional CFO Leadership" },
  { icon: Building, label: "Enterprise Contoller", desc: "Accounting Controls & Audits" },
  { icon: Calculator, label: "Systems Integrators", desc: "Tech Stack Modernization" },
  { icon: Users, label: "Ops & Strategy", desc: "Cross-Functional Drivers" },
]

export function AudienceSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6 tracking-tight">The Precision Network</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            FinaPilot is built for the professionals who drive business outcomes, not just reports.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="flex flex-col items-start text-left p-6 rounded-2xl glass border border-white/5 hover:border-accent/30 transition-all group"
            >
              <div className="w-12 h-12 glass rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <audience.icon className="w-6 h-6 text-accent" />
              </div>
              <span className="text-sm font-bold text-foreground mb-1">{audience.label}</span>
              <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{audience.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
