import { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  GitBranch, 
  Zap, 
  TrendingUp, 
  Database, 
  Network, 
  Box, 
  Presentation, 
  Calculator, 
  BellRing, 
  BarChart3, 
  Scale, 
  Users,
  BrainCircuit,
  Bot,
  ShieldCheck,
  CheckCircle2
} from "lucide-react"

export const metadata: Metadata = {
  title: 'Platform Features & AI Agent Architecture | FinaPilot FP&A',
  description: 'Deep dive into FinaPilot’s 12 core capabilities. Learn how our Semantic Ledger, Multi-Agent AI framework, and DAG-backed traceability replace legacy enterprise FP&A software.',
  openGraph: {
    title: 'FinaPilot Deep-Dive Capability List & AI Architecture',
    description: 'Explore the prioritized features that CFOs use to completely orchestrate their financial models. Zero-hallucination agentic AI natively integrated.',
    url: 'https://www.finapilot.com/features',
  }
}

export default function FeaturesPage() {
  return (
    <>
      <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col pt-24 font-sans selection:bg-[#F26E24]/30">
        <Header />
        <main className="flex-grow max-w-[1400px] mx-auto px-6 py-20 w-full overflow-hidden">
          
          <div className="text-center mb-20 max-w-4xl mx-auto">
             <div className="inline-flex items-center space-x-2 bg-[#F26E24]/10 border border-[#F26E24]/20 rounded-full px-4 py-2 mb-6">
                <BrainCircuit className="w-4 h-4 text-[#F26E24]" />
                <span className="text-sm font-bold tracking-widest text-[#F26E24] uppercase">The Architecture of Intelligence</span>
             </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-white to-gray-400 bg-clip-text text-transparent leading-tight tracking-tight">
              Platform Capabilities
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 leading-relaxed">
              FinaPilot isn't just an aggregator—it's an active orchestration engine. Discover the 12 prioritized systems driving zero-hallucination, institutional-grade finance.
            </p>
          </div>

          {/* HIGHEST PRIORITY: The Multi-Agent AI Core & Foundation */}
          <div className="mb-24 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
             
             <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Priority 1: The Autonomous Semantic Core</h2>
               <p className="text-gray-400 max-w-2xl mx-auto text-lg">The foundational architecture that differentiates FinaPilot from legacy logic. Built for trust, scale, and autonomous intelligence.</p>
             </div>

             <div className="grid lg:grid-cols-2 gap-8 relative z-10">
                {/* Agentic Framework */}
                <div className="bg-gradient-to-br from-[#0d121c] to-[#121826] border border-blue-500/20 p-10 rounded-[2rem] hover:border-blue-500/40 transition-all shadow-2xl group">
                   <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      <Bot className="w-7 h-7 text-blue-400" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-4">Multi-Agent AI Orchestration</h3>
                   <p className="text-gray-400 leading-relaxed mb-6">
                     Unlike traditional tools that wait for you to input a formula, FinaPilot deploys a 12-agent cluster continuously working in the background. Different agents monitor headcount pipeline delays, check FX rate discrepancies, and instantly draft natural-language variance attribution reports when actuals miss targets.
                   </p>
                   <div className="bg-[#080B14] p-5 rounded-xl border border-white/5">
                      <span className="text-xs font-bold uppercase text-emerald-400 tracking-wider">How This Benefits You</span>
                      <p className="text-sm text-gray-300 mt-2 font-medium">Replaces dozens of hours your FP&A team spends diagnosing "why" a number changed. The UI acts as a conversational partner—ask it questions about the model, and the agents run the simulation instantly.</p>
                   </div>
                </div>

                <div className="grid gap-8">
                   {/* Semantic Ledger */}
                   <div className="bg-[#121826] border border-white/10 p-8 rounded-3xl hover:border-[#F26E24]/30 transition-all flex flex-col md:flex-row gap-6 items-start">
                      <div className="p-3 bg-[#F26E24]/10 rounded-xl shrink-0"><Database className="w-6 h-6 text-[#F26E24]" /></div>
                      <div>
                         <h3 className="text-xl font-bold text-white mb-2">Semantic Ledger Mapping</h3>
                         <p className="text-gray-400 text-sm leading-relaxed mb-4">Unifies disparate ERP, CRM, and HRIS sources. Normalizes unpredictable trial balances from massive datasets into a single, object-oriented semantic format.</p>
                         <ul className="text-xs text-gray-400 space-y-1">
                            <li className="flex items-center"><CheckCircle2 className="w-3 h-3 text-emerald-400 mr-2" /> <strong>Benefit:</strong> Never manually map a broken ERP trial balance to a GL code again.</li>
                         </ul>
                      </div>
                   </div>

                   {/* Audit-grade Traceability */}
                   <div className="bg-[#121826] border border-white/10 p-8 rounded-3xl hover:border-[#F26E24]/30 transition-all flex flex-col md:flex-row gap-6 items-start">
                      <div className="p-3 bg-[#F26E24]/10 rounded-xl shrink-0"><ShieldCheck className="w-6 h-6 text-[#F26E24]" /></div>
                      <div>
                         <h3 className="text-xl font-bold text-white mb-2">Audit-Grade Traceability (Zero Hallucination)</h3>
                         <p className="text-gray-400 text-sm leading-relaxed mb-4">A massive competitive advantage. Uses DAG-backed cell lineages (SOC 2 level). Utilizing our Provenance Drawer, every calculation trace is mathematically proven back to the source document.</p>
                         <ul className="text-xs text-gray-400 space-y-1">
                            <li className="flex items-center"><CheckCircle2 className="w-3 h-3 text-emerald-400 mr-2" /> <strong>Benefit:</strong> 100% board confidence. Eradicates the hidden #REF! errors found in massive spreadsheets.</li>
                         </ul>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* PRIORITY 2: Predictive Forecasting & Logic Engines */}
          <div className="mb-24">
             <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Priority 2: Predictive Forecasting & Agility</h2>
               <p className="text-gray-400 max-w-2xl mx-auto text-lg">Stress-test your assumptions and look into the future with institutional-grade computational structures.</p>
             </div>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Monte Carlo Runway",
                    desc: "Calculate 10,000+ probabilistic outcome distributions on cash runway survival rates to mathematically isolate market risk bounds.",
                    icon: <BarChart3 className="w-6 h-6 text-purple-400" />,
                    benefit: "Transforms static 'Base/Worst' cases into rigorous, probabilistic risk assessments.",
                    borderClass: "hover:border-purple-500/40",
                    bgClass: "bg-purple-500/10"
                  },
                  {
                    title: "Branch-Based Scenario Planning",
                    desc: "Create isolated GitHub-style forks of your baseline budget. Model extreme acquisitions or churn conditions without corrupting the master file.",
                    icon: <GitBranch className="w-6 h-6 text-[#F26E24]" />,
                    benefit: "Run infinite scenarios concurrently. Merges approved scenarios seamlessly into the master plan.",
                    borderClass: "hover:border-[#F26E24]/40",
                    bgClass: "bg-[#F26E24]/10"
                  },
                  {
                    title: "Real-time What-IF",
                    desc: "Tweak variables like SDR ramp-time, compute costs, or vendor churn and watch the cascading effects ripple across all three financial statements in milliseconds.",
                    icon: <Zap className="w-6 h-6 text-amber-400" />,
                    benefit: "Accelerates executive decision-making during fast-moving board meetings.",
                    borderClass: "hover:border-amber-500/40",
                    bgClass: "bg-amber-500/10"
                  },
                  {
                    title: "AI Forecasting Engine",
                    desc: "AI-driven predictive trajectory analysis. Our specific forecasting agents analyze historical run-rates to generate seasonality-adjusted momentum forecasts automatically.",
                    icon: <TrendingUp className="w-6 h-6 text-emerald-400" />,
                    benefit: "Removes human bias from baseline projections, establishing a ground-truth purely from historical momentum.",
                    borderClass: "hover:border-emerald-500/40",
                    bgClass: "bg-emerald-500/10"
                  },
                  {
                    title: "Atomic Model Architecture",
                    desc: "Built on a hyperblock dimensional structure mapping. Replaces brittle cell-references with fluid objects that scale infinitely.",
                    icon: <Box className="w-6 h-6 text-rose-400" />,
                    benefit: "Prevents your model from snapping under the weight of billions of trial balance lines. Built for Pre-IPO scale.",
                    borderClass: "hover:border-rose-500/40",
                    bgClass: "bg-rose-500/10"
                  },
                  {
                    title: "Resource Allocations",
                    desc: "Complex Headcount & CAPEX optimization logic perfectly mapped to varied compliance, taxation zones, and benefits loads.",
                    icon: <Users className="w-6 h-6 text-indigo-400" />,
                    benefit: "Stops HR and Finance from fighting over the hiring pipeline sync. Accurate to the penny.",
                    borderClass: "hover:border-indigo-500/40",
                    bgClass: "bg-indigo-500/10"
                  }
                ].map((feat, i) => (
                   <div key={i} className={`bg-[#121826] border border-white/5 p-8 rounded-2xl transition-all shadow-lg flex flex-col h-full ${feat.borderClass} group`}>
                      <div className={`p-4 rounded-xl w-fit mb-6 transition-transform group-hover:scale-110 ${feat.bgClass}`}>
                        {feat.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{feat.desc}</p>
                      <div className="pt-4 border-t border-white/10 mt-auto">
                         <span className="text-[11px] font-black uppercase tracking-widest text-gray-500 block mb-1">CFO Benefit</span>
                         <p className="text-gray-300 text-sm font-medium">{feat.benefit}</p>
                      </div>
                   </div>
                ))}
             </div>
          </div>

          {/* PRIORITY 3: Execution & Board Reporting */}
          <div>
             <div className="text-center mb-12">
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Priority 3: Execution & Board Reporting</h2>
               <p className="text-gray-400 max-w-2xl mx-auto text-lg">Don't just model the data—communicate it securely to investors and stakeholders.</p>
             </div>
             
             <div className="grid md:grid-cols-3 gap-6">
                
                <div className="bg-[#121826] border border-white/10 p-8 rounded-3xl hover:border-emerald-500/30 transition-all flex flex-col gap-4 items-start col-span-1 md:col-span-1">
                   <div className="p-3 bg-emerald-500/10 rounded-xl shrink-0"><Scale className="w-6 h-6 text-emerald-400" /></div>
                   <h3 className="text-xl font-bold text-white">Budget vs Actual Attribution</h3>
                   <p className="text-gray-400 text-sm leading-relaxed">Synthesizes millions of data points instantly to write executive summaries explaining exactly WHY a variance occurred across departments.</p>
                   <ul className="text-xs text-gray-400 space-y-1 mt-auto pt-4">
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 shrink-0" /> <strong>Benefit:</strong> Saves 4-5 days of painful end-of-month close reporting workflows.</li>
                   </ul>
                </div>

                <div className="bg-[#121826] border border-white/10 p-8 rounded-3xl hover:border-emerald-500/30 transition-all flex flex-col gap-4 items-start col-span-1 md:col-span-1">
                   <div className="p-3 bg-emerald-500/10 rounded-xl shrink-0"><Calculator className="w-6 h-6 text-emerald-400" /></div>
                   <h3 className="text-xl font-bold text-white">Financial Modeling</h3>
                   <p className="text-gray-400 text-sm leading-relaxed">Professional DCF, SaaS, and LBO 3-statement modeling logic modules entirely natively designed for investment-grade analysis.</p>
                   <ul className="text-xs text-gray-400 space-y-1 mt-auto pt-4">
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 shrink-0" /> <strong>Benefit:</strong> No need to build complex amortization structures from scratch. Out-of-the-box GAAP GAAP readiness.</li>
                   </ul>
                </div>

                <div className="bg-[#121826] border border-white/10 p-8 rounded-3xl hover:border-emerald-500/30 transition-all flex flex-col gap-4 items-start col-span-1 md:col-span-1">
                   <div className="p-3 bg-emerald-500/10 rounded-xl shrink-0"><Presentation className="w-6 h-6 text-emerald-400" /></div>
                   <h3 className="text-xl font-bold text-white">Live Investor Dashboards</h3>
                   <p className="text-gray-400 text-sm leading-relaxed">Surface exact, sanitized metric subsets to your board via secure, auto-updating web portals linked to your live models.</p>
                   <ul className="text-xs text-gray-400 space-y-1 mt-auto pt-4">
                      <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-emerald-400 mr-2 shrink-0" /> <strong>Benefit:</strong> Eliminates static PDF exports. Investors get real-time reads on MRR or EBITDA without accessing the master ledger.</li>
                   </ul>
                </div>

             </div>
          </div>

          
          {/* CTA */}
          <div className="mt-32 p-12 lg:p-16 bg-gradient-to-br from-[#121826] to-[#0B0F19] border border-[#F26E24]/30 rounded-[3rem] text-center relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F26E24]/10 rounded-full blur-[120px] pointer-events-none"></div>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Experience Autonomous FP&A Today</h3>
            <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-4xl mx-auto relative z-10 leading-relaxed">
              Don't let legacy logic slow down your growth. Sync your historical data in minutes using our intuitive import wizards and immediately access the Multi-Agent orchestrator.
            </p>
            <a href="https://app.finapilot.com" className="relative z-10 inline-flex items-center justify-center px-14 py-6 rounded-full bg-gradient-to-r from-[#F26E24] to-[#f58646] text-white font-bold text-xl hover:shadow-[0_0_50px_rgba(242,110,36,0.4)] transition-all focus:ring focus:ring-[#F26E24]/50 hover:scale-105 border border-white/10">
              Start Your Live FinaPilot Orchestration
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
