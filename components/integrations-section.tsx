"use client"

import { Database, Link2, ShieldCheck, FileSpreadsheet } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const integrations = [
  { name: "QuickBooks", icon: "📊", category: "Accounting", desc: "Pilot implementation support" },
  { name: "Xero", icon: "📈", category: "Accounting", desc: "Custom ledger mapping" },
  { name: "Zoho Books", icon: "📑", category: "Accounting", desc: "Architecture roadmap" },
  { name: "Stripe", icon: "💵", category: "Payments", desc: "Custom intake pipeline" },
  { name: "Razorpay", icon: "💳", category: "Payments", desc: "Custom intake pipeline" },
  { name: "Plaid", icon: "🏦", category: "Banking", desc: "Connector in co-build" },
  { name: "SAP S/4HANA", icon: "🏢", category: "ERP", desc: "Enterprise mapping lab" },
  { name: "Oracle Cloud", icon: "🔶", category: "ERP", desc: "Enterprise mapping lab" },
  { name: "Salesforce", icon: "☁️", category: "CRM", desc: "Pipeline mapping support" },
  { name: "Slack", icon: "💬", category: "Alerts", desc: "Custom alert ingestion" },
  { name: "Asana", icon: "✅", category: "Workflow", desc: "Governance pilot feature" },
  { name: "ClearTax", icon: "📋", category: "Compliance", desc: "Audit architecture draft" },
]

const categories = [
  { label: "Accounting", color: "text-blue-400", bg: "bg-blue-500/10" },
  { label: "Payments", color: "text-green-400", bg: "bg-green-500/10" },
  { label: "Banking", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { label: "ERP", color: "text-purple-400", bg: "bg-purple-500/10" },
  { label: "CRM", color: "text-orange-400", bg: "bg-orange-500/10" },
  { label: "Alerts", color: "text-pink-400", bg: "bg-pink-500/10" },
]

export function IntegrationsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section className="py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] relative overflow-hidden section-divider" ref={ref}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-premium text-[10px] font-bold uppercase tracking-widest text-accent mb-6">
            <Link2 className="w-3 h-3" />
            Secure Data Ingestion
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            <span className="text-gradient-accent">Ingestion Architecture</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            FinaPilot's architecture is engineered for high-integrity ingestion from your most critical ledgers. During our pilot phase, we co-build custom connectors for your specific ERP structure.
          </p>
        </div>

        {/* Category pills */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.2s' }}>
          {categories.map((cat, i) => (
            <div key={i} className={`px-3 py-1.5 rounded-full ${cat.bg} border border-white/10 text-[10px] font-bold uppercase tracking-widest ${cat.color}`}>
              {cat.label}
            </div>
          ))}
        </div>

        {/* Integration grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
          {integrations.map((integration, i) => (
            <div
              key={i}
              className={`glass-premium glass-hover rounded-2xl p-4 sm:p-5 border border-white/10 text-center group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + i * 50}ms` }}
            >
              <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform">{integration.icon}</div>
              <p className="text-xs font-bold text-white mb-1 leading-tight">{integration.name}</p>
              <p className="text-[9px] text-accent/80 font-bold uppercase tracking-wider mb-2">{integration.category}</p>
              <p className="text-[9px] text-white/60 leading-tight hidden sm:block">{integration.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className={`mt-14 max-w-2xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.8s' }}>
          <div className="glass-premium rounded-2xl p-6 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                 <FileSpreadsheet className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                 <p className="text-sm font-bold text-white">Universal Data Intake</p>
                 <p className="text-xs text-white/60 mt-1">Full support for mapped CSV/Excel uploads from Day 1.</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/5">
               <ShieldCheck className="w-4 h-4 text-green-400" />
               <span className="text-[10px] font-bold text-white uppercase tracking-widest">Encrypted Pipeline</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
