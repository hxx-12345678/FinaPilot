"use client"

import { Link2, ShieldCheck, FileSpreadsheet, Lock } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const seamlessSync = [
  { name: "Excel (.XLSX)", icon: "📊", status: "live" },
  { name: "CSV Bulk Upload", icon: "📄", status: "live" },
]

const designPartnerIntegrations = [
  { name: "SAP S/4HANA", icon: "🏢" },
  { name: "Oracle Financials", icon: "🔶" },
  { name: "QuickBooks Online", icon: "📈" },
  { name: "Xero", icon: "📑" },
  { name: "Zoho Books", icon: "📒" },
  { name: "Stripe", icon: "💵" },
  { name: "Razorpay", icon: "💳" },
  { name: "Plaid", icon: "🏦" },
  { name: "ClearTax", icon: "📋" },
  { name: "Asana", icon: "✅" },
  { name: "Salesforce", icon: "☁️" },
  { name: "Slack", icon: "💬" },
]

export function IntegrationsSection() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section id="integrations" className="py-24 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0F19] relative overflow-hidden section-divider" ref={ref}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-accent mb-6">
            <Link2 className="w-3.5 h-3.5" />
            Integrations
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 tracking-tight">
            Works with your <span className="text-gradient-accent">existing tools.</span>
          </h2>
          <p className="text-base sm:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Start with Excel and CSV uploads on day one. Native ERP and accounting connectors roll out directly to verified Design Partners.
          </p>
        </div>

        {/* ═══ SEAMLESS SYNC — Day 1 Ready ═══ */}
        <div className={`max-w-4xl mx-auto mb-10 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-2 h-2 rounded-full bg-emerald-400" />
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Seamless Sync — Available Now</h3>
          </div>
          <div className="grid grid-cols-2 gap-3 max-w-lg mx-auto">
            {seamlessSync.map((item, i) => (
              <div
                key={i}
                className="glass-premium rounded-2xl p-5 sm:p-6 border border-emerald-500/15 text-center group hover:border-emerald-500/30 transition-all"
              >
                <div className="text-2xl sm:text-3xl mb-2.5 group-hover:scale-110 transition-transform">{item.icon}</div>
                <p className="text-xs font-bold text-white mb-1.5 leading-tight">{item.name}</p>
                <div className="px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 inline-block">
                  Live
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══ DESIGN PARTNERS ONLY ═══ */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
          <div className="glass-premium rounded-2xl p-6 sm:p-8 border border-white/5">
            <div className="flex items-center gap-3 mb-3">
              <div className="px-2.5 py-1 rounded-lg text-[9px] font-bold uppercase tracking-wider text-accent bg-accent/10 border border-accent/20">
                Design Partners Only
              </div>
            </div>
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-2xl">
              FinaPilot utilizes SOC 2 encrypted pipeline infrastructure to securely mirror ERP ledgers. <a href="/trust" className="text-white font-semibold underline decoration-accent/30 hover:decoration-accent transition-all">Verify our security and compliance architecture</a> before syncing your production data.
            </p>
            
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
              {designPartnerIntegrations.map((item, i) => (
                <div
                  key={i}
                  className={`glass-premium rounded-xl p-3 sm:p-4 border border-white/5 text-center group hover:border-accent/15 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${400 + i * 30}ms` }}
                >
                  <div className="text-xl sm:text-2xl mb-1.5 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <p className="text-[10px] font-semibold text-white/70 leading-tight">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <div className={`mt-10 max-w-2xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.6s' }}>
          <div className="glass-premium rounded-xl p-5 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <FileSpreadsheet className="w-5 h-5 text-accent shrink-0" />
              <div className="text-left">
                 <p className="text-sm font-semibold text-white">Universal Data Intake</p>
                 <p className="text-xs text-white/40 mt-0.5">Full support for mapped Excel/CSV uploads from Day 1.</p>
              </div>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5">
               <Lock className="w-3.5 h-3.5 text-emerald-400" />
               <span className="text-[10px] font-semibold text-white/60 uppercase tracking-wider">SOC 2 Encrypted Pipeline</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
