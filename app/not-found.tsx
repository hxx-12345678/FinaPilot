import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft, Home, Search, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col pt-24 font-sans">
      <Header />
      
      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center relative overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl px-4">
          <div className="w-20 h-20 bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center mx-auto mb-10 shadow-2xl">
            <Search className="w-10 h-10 text-accent animate-pulse" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-tight">
            Node Not <span className="text-gradient-accent">Found.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/50 mb-12 leading-relaxed font-medium">
            The path you’re looking for doesn’t exist in the FinaPilot graph. <br className="hidden md:block" /> Let’s get you back to the command center.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <Button asChild size="lg" className="bg-accent text-accent-foreground px-8 h-14 text-sm font-bold rounded-xl shadow-2xl hover:scale-105 transition-all w-full sm:w-auto">
              <Link href="/">
                <Home className="mr-2 w-4 h-4" />
                Return to Homepage
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="border-white/10 bg-white/5 text-white px-8 h-14 text-sm font-bold rounded-xl hover:bg-white/10 transition-all w-full sm:w-auto">
              <Link href="/faq">
                <ShieldCheck className="mr-2 w-4 h-4" />
                Visit Security Center
              </Link>
            </Button>
          </div>
          
          <div className="mt-20 pt-10 border-t border-white/5">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30">
               FinaPilot Agentic FP&A Operating System
             </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
