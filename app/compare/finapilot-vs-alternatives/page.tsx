import { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Check, X, Info, Shield, Layers, Database, Sparkles, Building2, Rocket, Briefcase } from "lucide-react"
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FinaPilot FP&A vs The Market | Complete Competitor Breakdown 2026',
  description: 'Deep dive into how FinaPilot\'s AI-native architecture stacks up against legacy Enterprise EPM (SAP, Oracle, OneStream), Mid-Market tools (Pigment, Anaplan, Vena, Planful), and SMB bridges (Cube, Mosaic, Causal).',
  openGraph: {
    title: 'FinaPilot vs Top FP&A Competitors in 2026',
    description: 'The definitive matrix: FinaPilot vs SAP, Oracle, Pigment, Anaplan, Cube, and more.',
    url: 'https://www.finapilot.com/compare/finapilot-vs-alternatives',
  }
}

export default function ComparePage() {
  return (
    <>
      <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col pt-24 font-sans">
        <Header />
        <main className="flex-grow max-w-[1400px] mx-auto px-6 py-20 w-full">
          <div className="text-center mb-16 max-w-5xl mx-auto">
             <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-6 shadow-xl">
                <Sparkles className="w-4 h-4 text-[#F26E24]" />
                <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">The Definitive FP&A Market Breakdown 2026</span>
             </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-white to-[#F26E24] bg-clip-text text-transparent leading-tight tracking-tight">
              FinaPilot vs. The Market
            </h1>
            <p className="text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto">
              Every FP&A platform claims to solve spreadsheet chaos. Very few actually replace brittle logic with mathematically proven, DAG-backed cell lineage. See exactly why startups to Fortune 500s are ripping out heavy monoliths for Autonomous AI Orchestration.
            </p>
          </div>

          {/* Core Feature Matrix */}
          <div className="mb-24">
             <h2 className="text-3xl font-bold mb-8 text-white px-2">Core Platform Capability Matrix</h2>
             <div className="overflow-x-auto bg-[#121826] rounded-2xl border border-white/10 shadow-2xl">
               <table className="w-full text-left min-w-[1200px]">
                 <thead>
                   <tr className="border-b border-white/10 bg-[#0d121c]">
                     <th className="p-6 text-sm font-bold uppercase tracking-wider text-gray-400 w-[24%] sticky left-0 bg-[#0d121c] z-10 border-r border-white/5">Capability</th>
                     <th className="p-6 text-lg font-bold text-white bg-[#F26E24]/10 w-[19%] border-r border-[#F26E24]/30 shadow-[0_0_20px_rgba(242,110,36,0.1)] text-center">FinaPilot (AI-Native)</th>
                     <th className="p-6 text-sm font-bold text-gray-300 w-[19%] border-r border-white/5 text-center">Enterprise Monoliths<br/><span className="text-xs text-gray-500 font-normal">SAP, Oracle, OneStream</span></th>
                     <th className="p-6 text-sm font-bold text-gray-300 w-[19%] border-r border-white/5 text-center">Modern Mid-Market<br/><span className="text-xs text-gray-500 font-normal">Pigment, Anaplan, Vena</span></th>
                     <th className="p-6 text-sm font-bold text-gray-300 w-[19%] text-center">SMB Solutions<br/><span className="text-xs text-gray-500 font-normal">Cube, Mosaic, Causal</span></th>
                   </tr>
                 </thead>
                 <tbody className="divide-y divide-white/5 text-sm">
                   {[
                     { feature: "Scenario Planning", desc: "Branch-based multi-track variant modeling & Real-time What-IF", fp: true, ent: "Heavy IT required", mid: true, smb: "Basic Scenarios" },
                     { feature: "Forecasting Engine", desc: "AI-driven predictive trajectory analysis", fp: true, ent: "Bolt-on modules", mid: "Manual logic", smb: "Historical trend only" },
                     { feature: "Semantic Ledger", desc: "Unified schema for disparate ERP & HRIS sources", fp: true, ent: "Complex mapping", mid: "Partial", smb: "Basic Integrations" },
                     { feature: "Audit-Grade Traceability", desc: "DAG-backed cell lineages (SOC 2 level)", fp: true, ent: true, mid: "Formula trace", smb: "Spreadsheet-led" },
                     { feature: "Model Architecture", desc: "Atomic structure for infinite scalability", fp: true, ent: "Rigid OLAP Cubes", mid: "Multidimensional", smb: "Spreadsheet-sync" },
                     { feature: "Investor Dashboards", desc: "Live, read-only board reporting portals", fp: true, ent: "Third-party BI needed", mid: true, smb: true },
                     { feature: "Financial Modeling", desc: "Professional DCF, SaaS, and LBO 3-statement modeling", fp: true, ent: true, mid: true, smb: "Template-based" },
                     { feature: "Alerts Management", desc: "Autonomous AI variance & anomaly detection", fp: true, ent: "Rule-based", mid: "Rule-based", smb: "Alerts only" },
                     { feature: "Monte Carlo Runway", desc: "Probabilistic 10,000-iteration cash survival projections", fp: true, ent: "3rd Party Plugin", mid: false, smb: false },
                     { feature: "Budget vs Actual", desc: "Gap analysis with natural language AI attribution", fp: true, ent: "Standard Tables", mid: "Standard Tables", smb: "Basic BvA" },
                     { feature: "Resource Allocations", desc: "Headcount ramp-time & CAPEX optimization logic", fp: true, ent: true, mid: true, smb: "Simple headcount" },
                     { feature: "Time-to-Value", desc: "Average implementation timeline", fp: "Under 14 Days", ent: "6-18 Months", mid: "3-6 Months", smb: "2-6 Weeks" },
                   ].map((row, i) => (
                     <tr key={i} className="hover:bg-white/5 transition-colors">
                       <td className="p-6 sticky left-0 bg-[#121826] z-10 border-r border-white/5 group">
                         <div className="font-bold text-gray-200">{row.feature}</div>
                         <div className="text-xs text-gray-500 mt-1">{row.desc}</div>
                       </td>
                       <td className="p-6 bg-[#F26E24]/5 border-r border-[#F26E24]/30 text-center">
                         {row.fp === true ? (
                            <div className="flex items-center justify-center text-[#F26E24] font-bold"><Check className="w-5 h-5 mr-1" /> Native</div>
                         ) : (
                            <div className="text-[#F26E24] font-bold">{row.fp}</div>
                         )}
                       </td>
                       <td className="p-6 border-r border-white/5 text-center">
                         {row.ent === true ? (
                           <div className="flex items-center justify-center text-emerald-400"><Check className="w-5 h-5" /></div>
                         ) : row.ent === false ? (
                           <div className="flex items-center justify-center text-red-400/80"><X className="w-5 h-5" /></div>
                         ) : (
                           <div className="text-gray-400 font-medium">{row.ent}</div>
                         )}
                       </td>
                       <td className="p-6 border-r border-white/5 text-center">
                         {row.mid === true ? (
                           <div className="flex items-center justify-center text-emerald-400"><Check className="w-5 h-5" /></div>
                         ) : row.mid === false ? (
                           <div className="flex items-center justify-center text-red-400/80"><X className="w-5 h-5" /></div>
                         ) : (
                           <div className="text-gray-400 font-medium">{row.mid}</div>
                         )}
                       </td>
                       <td className="p-6 text-center">
                         {row.smb === true ? (
                           <div className="flex items-center justify-center text-emerald-400"><Check className="w-5 h-5" /></div>
                         ) : row.smb === false ? (
                           <div className="flex items-center justify-center text-red-400/80"><X className="w-5 h-5" /></div>
                         ) : (
                           <div className="text-gray-400 font-medium">{row.smb}</div>
                         )}
                       </td>
                     </tr>
                   ))}
                 </tbody>
               </table>
             </div>
          </div>

          {/* Deep Dive Sections */}
          <div className="space-y-16">

             {/* Enterprise */}
             <div className="bg-[#121826] p-10 md:p-14 rounded-3xl border border-white/10 hover:border-blue-500/30 transition-all">
                <div className="flex items-center gap-4 mb-6">
                   <div className="p-3 bg-blue-500/20 rounded-xl"><Building2 className="w-8 h-8 text-blue-400" /></div>
                   <h3 className="text-3xl md:text-4xl font-bold text-white">vs. Enterprise EPM Suites</h3>
                </div>
                <div className="mb-6 pb-6 border-b border-white/10">
                   <span className="text-gray-400 font-medium">Competitors Analyzed:</span>
                   <div className="flex flex-wrap gap-2 mt-2">
                     {["SAP Analytics Cloud (SAC)", "Oracle Fusion Cloud EPM", "IBM Planning Analytics (TM1)", "OneStream", "Board International"].map(c => (
                        <span key={c} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">{c}</span>
                     ))}
                   </div>
                </div>
                <div className="md:flex gap-10">
                   <div className="md:w-2/3">
                      <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        Legacy Enterprise Performance Management (EPM) solutions were built for a different era. They rely on monolithic, rigid OLAP cubes or heavy ERP ecosystems (like S/4HANA integrations). While they handle global multi-currency consolidations, configuring them requires an army of expensive implementation consultants spanning 6 to 18 months. Any change to a forecasting assumption requires heavy IT intervention.
                      </p>
                      <ul className="space-y-4 text-gray-300">
                         <li className="flex items-start">
                            <Check className="w-6 h-6 text-blue-400 mr-3 shrink-0 mt-0.5" /> 
                            <div>
                               <strong className="text-white block mb-1">The FinaPilot Advantage: Atomic Agility</strong> 
                               FinaPilot strips away the monolithic bloat. Our <strong>Semantic Ledger</strong> instantly unifies trial balances without millions spent on an implementation partner. We give you audit-grade, SOC 2 compliance mapping, but wrapped in a lightweight, modern Multi-Agent AI architecture. Model changes happen in milliseconds, not months.
                            </div>
                         </li>
                      </ul>
                   </div>
                   <div className="md:w-1/3 mt-8 md:mt-0 bg-[#0B0F19] p-6 rounded-xl border border-blue-500/20">
                      <h4 className="text-white font-bold mb-4">Enterprise TCO Truth</h4>
                      <p className="text-sm text-gray-400 mb-4">For every $1 spent on enterprise software licensing, organizations typically spend $2-$3 on consulting and configuration.</p>
                      <div className="text-xs text-rose-400 font-bold uppercase tracking-wider mb-2">Hidden Costs</div>
                      <ul className="text-sm text-gray-300 space-y-2 list-disc pl-4">
                         <li>Implementation Partners</li>
                         <li>Ongoing Model Maintenance</li>
                         <li>Required Admin Certifications</li>
                      </ul>
                   </div>
                </div>
             </div>

             {/* Modern Mid-Market */}
             <div className="bg-[#121826] p-10 md:p-14 rounded-3xl border border-white/10 hover:border-purple-500/30 transition-all">
                <div className="flex items-center gap-4 mb-6">
                   <div className="p-3 bg-purple-500/20 rounded-xl"><Layers className="w-8 h-8 text-purple-400" /></div>
                   <h3 className="text-3xl md:text-4xl font-bold text-white">vs. Modern Mid-Market FP&A</h3>
                </div>
                <div className="mb-6 pb-6 border-b border-white/10">
                   <span className="text-gray-400 font-medium">Competitors Analyzed:</span>
                   <div className="flex flex-wrap gap-2 mt-2">
                     {["Pigment", "Anaplan", "Workday Adaptive Planning", "Vena Solutions", "Planful", "Prophix"].map(c => (
                        <span key={c} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">{c}</span>
                     ))}
                   </div>
                </div>
                <div className="md:flex gap-10">
                   <div className="md:w-2/3">
                      <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        These tools represent a massive step up from Excel. Planners like Pigment and Anaplan utilize multi-dimensional block modeling that handles complex arrays of data efficiently. However, they are still fundamentally <strong>reactive aggregators</strong>. You must manually define every logical rule, build every dashboard from scratch, and actively query for variances. Their AI features are mostly bolt-on conversational bots (Copilots) rather than deeply integrated calculation engines.
                      </p>
                      <ul className="space-y-4 text-gray-300">
                         <li className="flex items-start">
                            <Check className="w-6 h-6 text-purple-400 mr-3 shrink-0 mt-0.5" /> 
                            <div>
                               <strong className="text-white block mb-1">The FinaPilot Advantage: Autonomous Forecasting Engine</strong> 
                               FinaPilot is built natively on a Multi-Agent AI cluster. It doesn't just hold numbers; it thinks. Out of the box, FinaPilot generates robust 10,000-run <strong>Monte Carlo Runway projections</strong> and provides automated, natural-language gap analysis comparing your Budget vs Actuals—telling the CFO exactly *why* numbers deviated without needing a junior analyst to dig through dimensions.
                            </div>
                         </li>
                      </ul>
                   </div>
                   <div className="md:w-1/3 mt-8 md:mt-0 bg-[#0B0F19] p-6 rounded-xl border border-purple-500/20">
                      <h4 className="text-white font-bold mb-4">The "Formula" Bottleneck</h4>
                      <p className="text-sm text-gray-400 mb-4">Even modern tools require highly specific, proprietary formula languages (e.g., Anaplan syntax) which creates a massive key-person dependency risks in finance teams.</p>
                      <div className="text-emerald-400 text-sm font-bold flex items-center">
                         <Check className="w-4 h-4 mr-2" /> FinaPilot uses visual, DAG-backed node lineage.
                      </div>
                   </div>
                </div>
             </div>

             {/* SMB / Startups */}
             <div className="bg-[#121826] p-10 md:p-14 rounded-3xl border border-white/10 hover:border-emerald-500/30 transition-all">
                <div className="flex items-center gap-4 mb-6">
                   <div className="p-3 bg-emerald-500/20 rounded-xl"><Rocket className="w-8 h-8 text-emerald-400" /></div>
                   <h3 className="text-3xl md:text-4xl font-bold text-white">vs. SMB / Excel Spreadsheet Bridges</h3>
                </div>
                <div className="mb-6 pb-6 border-b border-white/10">
                   <span className="text-gray-400 font-medium">Competitors Analyzed:</span>
                   <div className="flex flex-wrap gap-2 mt-2">
                     {["Cube", "Mosaic", "Causal", "Jirav", "Abacum", "DataRails"].map(c => (
                        <span key={c} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/10">{c}</span>
                     ))}
                   </div>
                </div>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  Many SMB solutions, such as Cube or DataRails, act as "bridges." They let you keep your messy Excel spreadsheets as the front-end while syncing them to a cloud database. Others, like Mosaic and Jirav, offer slick out-of-the-box template dashboards. The fatal flaw? They don't fix the underlying problem of <strong>deterministic, fragile logic</strong>. As soon as you add complex M&A scenario planning, or attempt full 3-statement modeling with GAAP capitalization logic, these rigid templates break.
                </p>
                <div className="p-6 bg-[#0B0F19] rounded-xl border border-emerald-500/20 mt-6">
                   <h4 className="text-white font-bold mb-3 flex items-center"><Shield className="w-5 h-5 text-emerald-400 mr-2" /> The FinaPilot Advantage: True Mathematical Lineage</h4>
                   <p className="text-sm text-gray-400">
                     FinaPilot ends spreadsheet reliance entirely without sacrificing flexibility. By using an object-oriented Semantic Ledger, FinaPilot provides SOC-2 level Audit-Grade Traceability. If a metric shifts, trace the lineage instantly back to the exact ERP cell without scanning through hidden `#REF!` errors or infinite `VLOOKUP` loops.
                   </p>
                </div>
             </div>
          </div>

          <div className="mt-24 p-12 bg-gradient-to-br from-[#121826] to-[#0B0F19] border border-[#F26E24]/30 rounded-[2rem] text-center relative overflow-hidden shadow-2xl">
             <div className="absolute top-0 right-0 w-96 h-96 bg-[#F26E24]/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 relative z-10 text-white">Ditch the Monoliths. Escape the Spreadsheets.</h3>
            <p className="text-gray-400 text-xl mb-12 max-w-3xl mx-auto relative z-10">
              Join the hundreds of modern finance teams leveraging true Agentic AI to run 10,000 Monte Carlo simulations, automate gap analysis, and unify P&L data instantly.
            </p>
            <a href="https://app.finapilot.com" className="relative z-10 inline-flex items-center justify-center px-12 py-5 rounded-full bg-gradient-to-r from-[#F26E24] to-[#ff8a47] text-white font-bold text-xl hover:shadow-[0_0_50px_rgba(242,110,36,0.4)] transition-all transform hover:scale-105 border border-white/20">
              Launch Your Pilot Today
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}


