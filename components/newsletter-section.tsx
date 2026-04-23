"use client"

import { Mail } from "lucide-react"

export function NewsletterSection() {
  return (
    <div className="mt-32 relative overflow-hidden rounded-[3rem] border border-blue-500/20 bg-gradient-to-br from-[#121826] to-[#0B0F19] p-12 lg:p-20 text-center shadow-[0_50px_100px_rgba(0,0,0,0.5)]">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="w-20 h-20 bg-blue-500/20 rounded-3xl flex items-center justify-center text-blue-400 mx-auto mb-10 shadow-lg border border-blue-500/20">
          <Mail className="w-10 h-10" />
        </div>
        
        <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Stay on the Cutting Edge.</h2>
        <p className="text-xl text-white/70 mb-12 leading-relaxed">
          Join the thousands of forward-thinking CFOs receiving our technical breakdowns on autonomous financial planning.
        </p>
        
        <form 
          className="flex flex-col sm:flex-row items-stretch justify-center gap-4 max-w-xl mx-auto" 
          onSubmit={(e) => {
            e.preventDefault();
            alert("This is to notify the FinaPilot core team that you are interested. You can directly coordinate with the founder (founder@gmail.com) for marketing-related and other contents.");
          }}
        >
          <input 
            type="email" 
            placeholder="name@company.com" 
            required
            className="flex-grow px-8 py-5 rounded-2xl bg-[#0B0F19]/80 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all text-lg font-medium"
          />
          <button type="submit" className="px-10 py-5 bg-gradient-to-r from-blue-600 to-blue-400 text-white rounded-2xl font-bold text-lg hover:shadow-[0_10px_30px_rgba(37,99,235,0.4)] transition-all active:scale-95 whitespace-nowrap">
            Notify Founder
          </button>
        </form>
        
        <p className="text-xs text-white/60 mt-8 font-medium uppercase tracking-[0.2em]">
          Architectural updates only. No marketing fluff.
        </p>
      </div>
    </div>
  )
}
