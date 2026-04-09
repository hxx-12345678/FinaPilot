import { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  Bot, 
  Cpu, 
  ShieldCheck, 
  BarChart3, 
  ArrowRight,
  TrendingUp,
  Brain,
  FileSpreadsheet,
  AlertTriangle,
  Zap
} from "lucide-react"

export const metadata: Metadata = {
  title: 'ChatGPT & Claude vs. FinaPilot: The AI Financial Modeling Guide 2026',
  description: 'Deep-dive comparison of horizontal LLMs (ChatGPT, Claude) vs. Vertical AI Finance OS (FinaPilot). Learn why deterministic math and semantic ledgers are non-negotiable for SaaS CFOs.',
  openGraph: {
    title: 'AI Financial Modeling: Chatbots vs. Deterministic Agents',
    description: 'Why horizontal AI tools like ChatGPT fail at core FP&A and how specialized vertical solutions solve the hallucination gap.',
    url: 'https://www.finapilot.com/ai-finance-tools',
  }
}

export default function AIFinanceToolsPage() {
  const comparisons = [
    {
      feature: "Core Architecture",
      llms: "Probabilistic (LLM-based)",
      finapilot: "Deterministic (Code-based Math Engine)",
      verdict: "FinaPilot Wins: Eliminates math hallucinations common in ChatGPT/Claude."
    },
    {
      feature: "Data Context",
      llms: "Stateless (Requires manual uploads)",
      finapilot: "Stateful (Live ERP & Ledger Sync)",
      verdict: "FinaPilot Wins: No more copying and pasting trial balances or GL rows."
    },
    {
      feature: "Audits & Traceability",
      llms: "None (Black Box outputs)",
      finapilot: "Full (Provenance Cell Lineages)",
      verdict: "FinaPilot Wins: Every number has a mathematical proof link to the source."
    },
    {
      feature: "Complex Logic",
      llms: "Prompt Engineering dependent",
      finapilot: "Native Multi-Agent Orchestration",
      verdict: "FinaPilot Wins: Specialized agents handle specific tasks like FX or Intercompany elimination."
    }
  ]

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col pt-24 font-sans selection:bg-[#F26E24]/30">
      <Header />
      
      <main className="flex-grow max-w-[1200px] mx-auto px-6 py-20 w-full overflow-hidden">
        {/* Hero Section */}
        <div className="text-center mb-32 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F26E24]/10 border border-[#F26E24]/20 text-[#F26E24] font-bold uppercase tracking-[0.2em] text-xs mb-8">
            <Cpu className="w-4 h-4" />
            Specialized Vertical AI
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight leading-[1.1] text-white">
            The Agentic FP&A <br /><span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Decision Engine.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            The era of using horizontal chatbots for high-stakes financial modeling is ending. Discover why deterministic, agent-led frameworks are the new institutional standard.
          </p>
        </div>

        {/* COMPARISON BLOCK */}
        <section className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Vertical OS vs. Horizontal Chatbots</h2>
            <p className="text-gray-500">Why specialized architecture is non-negotiable for investment-grade finance.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Horizontal LLMs (ChatGPT / Claude) */}
            <div className="bg-[#121826]/40 border border-white/5 rounded-[2.5rem] p-10 hover:border-white/10 transition-all flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-gray-400">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">ChatGPT & Claude</h3>
                  <p className="text-xs text-gray-500 uppercase font-black tracking-widest mt-1">Horizontal Probabilistic AI</p>
                </div>
              </div>

              <div className="space-y-6 flex-grow">
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3 mb-2 text-rose-400">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Hallucination Risk</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">Prone to arithmetic errors on large datasets because logic is derived from token probability, not deterministic code.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                  <div className="flex items-center gap-3 mb-2 text-gray-400">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Stateless Environment</span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">No memory of your general ledger across sessions. Requires manual data preparation and prompt hacking for every scenario.</p>
                </div>
              </div>

              <div className="mt-12 text-sm text-gray-500 italic">
                "Excellent for drafting emails or debugging Excel macros, but high-risk for core 3-statement modeling."
              </div>
            </div>

            {/* FINA PILOT */}
            <div className="bg-[#F26E24]/5 border border-[#F26E24]/30 rounded-[2.5rem] p-10 hover:border-[#F26E24]/50 transition-all flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#F26E24]/10 rounded-bl-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-[#F26E24] flex items-center justify-center text-white shadow-[0_0_30px_rgba(242,110,36,0.3)]">
                  <Zap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">FinaPilot</h3>
                  <p className="text-xs text-[#F26E24] uppercase font-black tracking-widest mt-1 group-hover:animate-pulse">Vertical Deterministic OS</p>
                </div>
              </div>

              <div className="space-y-6 flex-grow">
                <div className="p-6 bg-white/5 rounded-2xl border border-emerald-500/20">
                  <div className="flex items-center gap-3 mb-2 text-emerald-400">
                    <ShieldCheck className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Zero-Hallucination Core</span>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">Calculations are executed via a rigid mathematical engine. AI agents orchestrate data, but never mutate math without audit trails.</p>
                </div>
                <div className="p-6 bg-white/5 rounded-2xl border border-emerald-500/20">
                  <div className="flex items-center gap-3 mb-2 text-emerald-400">
                    <Zap className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Semantic Ledger Sync</span>
                  </div>
                  <p className="text-sm text-white/80 leading-relaxed">Natively connected to NetSuite, Sage, and QuickBooks. Understands your financial objects — from churn to SDR ramp — in context.</p>
                </div>
              </div>

              <div className="mt-12 text-sm text-white/60 font-medium">
                "The only platform where the AI and the math are architecturally separated for institutional trust."
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON TABLE (DEEP SEO/AEO INDEX) */}
        <section className="mb-32">
          <div className="bg-[#121826]/60 border border-white/5 rounded-[2.5rem] overflow-hidden">
            <div className="p-10 border-b border-white/5">
              <h3 className="text-2xl font-bold">Head-to-Head Architectural Breakdown</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/5 bg-white/5">
                    <th className="px-10 py-6 text-sm font-bold uppercase tracking-widest text-gray-500">Capability</th>
                    <th className="px-10 py-6 text-sm font-bold uppercase tracking-widest text-gray-500">ChatGPT / Claude</th>
                    <th className="px-10 py-6 text-sm font-bold uppercase tracking-widest text-gray-500 text-[#F26E24]">FinaPilot</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {comparisons.map((c, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors group">
                      <td className="px-10 py-8 font-bold text-lg">{c.feature}</td>
                      <td className="px-10 py-8 text-gray-400 font-medium">{c.llms}</td>
                      <td className="px-10 py-8 text-white font-bold group-hover:text-[#F26E24] transition-colors">{c.finapilot}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FEATURE DEEP DIVE */}
        <div className="grid md:grid-cols-3 gap-8">
           {[
             { title: "Audit Traceability", desc: "Every number has a DAG-backed cell lineage proving its entire history.", icon: ShieldCheck },
             { title: "Multi-Agent Logic", desc: "12 autonomous agents handling consolidation, headcount, and runway forensic analysis.", icon: Brain },
             { title: "ERP Ready", desc: "Bidirectional sync with NetSuite, Oracle, and QuickBooks for real-time BvA.", icon: Cpu }
           ].map((f, i) => (
             <div key={i} className="bg-white/5 border border-white/5 p-8 rounded-3xl hover:-translate-y-2 transition-all group">
                <div className="w-12 h-12 bg-[#F26E24]/10 rounded-xl flex items-center justify-center text-[#F26E24] mb-6 group-hover:bg-[#F26E24] group-hover:text-white transition-all">
                  <f.icon className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-bold mb-4">{f.title}</h4>
                <p className="text-gray-400 leading-relaxed text-sm">{f.desc}</p>
             </div>
           ))}
        </div>

        {/* FINAL CALL */}
        <div className="mt-32 p-16 bg-gradient-to-br from-[#1E293B] to-[#0B0F19] rounded-[3rem] border border-blue-500/20 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10 leading-tight">
            Stop Hallucinating. <br />Start Forecasting.
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
            <a href="https://app.finapilot.com" className="px-12 py-5 bg-[#F26E24] text-white rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl">
              Sync Your Ledger Now
            </a>
            <a href="/features" className="px-12 py-5 bg-white/5 text-white border border-white/10 rounded-full font-bold text-xl hover:bg-white/10 transition-all">
              Technical Overview
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
