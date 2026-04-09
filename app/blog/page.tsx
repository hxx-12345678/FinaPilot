import { Metadata } from 'next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  BookOpen, 
  ChevronRight, 
  Lightbulb, 
  Cpu, 
  BarChart3, 
  Fingerprint, 
  FileText,
  Mail,
  Zap
} from "lucide-react"

export const metadata: Metadata = {
  title: 'Engineering & Strategy Hub | FinaPilot FP&A Insights',
  description: 'Deep architectural breakdowns and strategic guidance on autonomous finance, deterministic auditing, and Monte Carlo forecasting for SaaS CFOs.',
  openGraph: {
    title: 'FinaPilot Engineering & Strategy Hub',
    description: 'The building blocks of autonomous finance. Insights from the FinaPilot development labs.',
    url: 'https://www.finapilot.com/blog',
  }
}

export default function BlogPage() {
  const posts = [
    {
      title: "The Hallucination Crisis in Finance: Why We Built a Deterministic Audit-Trail",
      date: "Oct 24, 2026",
      readTime: "9 min read",
      tag: "Engineering",
      icon: <Fingerprint className="w-6 h-6 text-[#F26E24]" />,
      summary: "LLMs are notoriously bad at basic arithmetic. In our latest whitepaper, we explain how FinaPilot uses LLMs solely for orchestration, while keeping all financial logic within a deterministic, DAG-backed cell lineage system.",
      takeaways: [
        "Deterministic vs Probabilistic Logic",
        "Provenance Search Mechanics",
        "Eliminating #REF! in board decks"
      ]
    },
    {
      title: "Monte Carlo vs. The 'Base Case': Why Probability Wins for SaaS Runway",
      date: "Oct 18, 2026",
      readTime: "12 min read",
      tag: "Strategy",
      icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
      summary: "Most CFOs still use static 'Base, Best, Worst' cases. This article explores why running 10,000 simulations on churn and CAC cycles provides a more accurate survival probability for high-growth startups.",
      takeaways: [
        "Sensitivity Analysis 2.0",
        "Isolating Market Risk Bounds",
        "Board Presentation Best Practices"
      ]
    },
    {
      title: "Automating The Mess: AI-Native Semantic Ledger Mapping",
      date: "Oct 12, 2026",
      readTime: "7 min read",
      tag: "Product Update",
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      summary: "Trial balance mapping is the bane of the modern FP&A team. We deep-dive into our Multi-Agent mapping cluster that unifies disparate NetSuite, Sage, and Quickbooks data without manual intervention.",
      takeaways: [
        "Object-Oriented Ledger Schemas",
        "Disparate Source Normalization",
        "AI Asset Mapping"
      ]
    },
    {
      title: "The Agentic CFO: How Autonomous Agents Run Variance Analysis",
      date: "Oct 05, 2026",
      readTime: "10 min read",
      tag: "Future of Work",
      icon: <Zap className="w-6 h-6 text-amber-400" />,
      summary: "Budget vs Actual (BvA) reporting shouldn't be a post-mortem. Learn how our agents monitor real-time data to flag anomalies and draft variance attribution memos in real-time.",
      takeaways: [
        "Anomaly Detection Algorithms",
        "Natural Language Attribution",
        "Autonomous Stakeholder Alerts"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col pt-24 font-sans selection:bg-[#F26E24]/30">
      <Header />
      
      <main className="flex-grow max-w-[1400px] mx-auto px-6 py-20 w-full overflow-hidden">
        {/* Header Section */}
        <div className="mb-24 relative">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-16">
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-6 text-[#F26E24] font-bold tracking-[0.2em] uppercase text-sm">
                <Lightbulb className="w-5 h-5" />
                <span>Insights</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-white to-white/40 bg-clip-text text-transparent leading-tight tracking-tight">
                Engineering & <br />Strategy Hub
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-2xl">
                The building blocks of autonomous finance. Architectural tear-downs and strategic guidance from the FinaPilot development labs. <a href="/ai-finance-tools" className="text-white font-semibold underline decoration-[#F26E24]/30 hover:decoration-[#F26E24] transition-all">Research the next generation of finance tools →</a>
              </p>
            </div>
            
            <div className="bg-[#121826]/50 border border-white/10 p-6 rounded-2xl flex items-center gap-4 hover:bg-[#121826] transition-colors group cursor-pointer">
              <div className="w-12 h-12 bg-[#F26E24]/20 rounded-xl flex items-center justify-center text-[#F26E24]">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-white uppercase tracking-wider">Research Whitepaper</p>
                <p className="text-xs text-gray-500 mt-1">Foundations of Agentic Finance (2026)</p>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:translate-x-1 transition-transform ml-4" />
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {posts.map((post, i) => (
            <article key={i} className="group flex flex-col bg-[#121826]/40 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-[#F26E24]/30 transition-all hover:bg-[#121826]/80 shadow-2xl">
              <div className="p-10 flex-grow">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-lg border border-white/5">
                      {post.icon}
                    </div>
                    <span className="text-sm font-bold tracking-widest uppercase text-white/60">{post.tag}</span>
                  </div>
                  <div className="text-xs font-medium text-gray-500 flex items-center gap-2">
                    {post.readTime} • {post.date}
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white group-hover:text-[#F26E24] transition-colors leading-tight">
                  {post.title}
                </h2>
                
                <p className="text-gray-400 leading-relaxed mb-8">
                  {post.summary}
                </p>

                <div className="mt-8 pt-8 border-t border-white/5">
                  <h3 className="text-[10px] font-black uppercase tracking-widest text-[#F26E24] mb-4">Key Takeaways</h3>
                  <ul className="space-y-3">
                    {post.takeaways.map((task, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#fbd1bc]" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="px-10 py-8 bg-[#0B0F19]/40 border-t border-white/5 group-hover:bg-[#F26E24]/5 transition-colors">
                <button className="flex items-center justify-between w-full group/btn">
                  <span className="flex items-center gap-3 text-sm font-bold text-white tracking-wide">
                    <FileText className="w-4 h-4 text-[#F26E24]" />
                    Deep Dive Whitepaper
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-[#F26E24] group-hover/btn:border-[#F26E24] transition-all">
                    <ChevronRight className="w-4 h-4 text-white" />
                  </div>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="mt-32 relative overflow-hidden rounded-[3rem] border border-blue-500/20 bg-gradient-to-br from-[#121826] to-[#0B0F19] p-12 lg:p-20 text-center shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="w-20 h-20 bg-blue-500/20 rounded-3xl flex items-center justify-center text-blue-400 mx-auto mb-10 shadow-lg border border-blue-500/20">
              <Mail className="w-10 h-10" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Stay on the Cutting Edge.</h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Join the thousands of forward-thinking CFOs receiving our technical breakdowns on autonomous financial planning.
            </p>
            
            <form className="flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="name@company.com" 
                className="flex-grow px-8 py-5 rounded-2xl bg-[#0B0F19]/80 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-lg font-medium"
              />
              <button className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-2xl font-bold text-lg hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)] transition-all active:scale-95 whitespace-nowrap">
                Subscribe
              </button>
            </form>
            
            <p className="text-xs text-gray-600 mt-8 font-medium uppercase tracking-[0.2em]">
              Architectural updates only. No marketing fluff.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
