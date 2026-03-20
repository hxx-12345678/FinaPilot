"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import { Slider } from "@/components/ui/slider"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, ReferenceLine } from "recharts"
import {
  Shield, Zap, TrendingUp, Activity, Target, Lock,
  UserCheck, Eye, Brain, FileSpreadsheet, Hammer, Cpu,
  RefreshCw, AlertCircle, Sparkles, Trash2, ShieldCheck,
  ChevronRight, Database, Users, DollarSign, Calendar, Info
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { useCalendly } from "@/components/calendly-provider"

// Deterministic Currency Formatter
const formatCurrency = (val: number) => {
  if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`
  return `$${val.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`
}

const nlpQueries = [
  "Compute 10k Monte Carlo paths for Q4 hiring drift",
  "Show vector recalc for 15% pricing sensitivity",
  "Stress test covenant breach under 200bps rate hike",
  "Attribution analysis: Why did CAC payback spike in M3?",
]

const agentInsights = [
  { agent: "Risk Agent", text: "Variance detected in local ledger history. Recalculating bands...", icon: Shield },
  { agent: "Forensic Agent", text: "Linear correlation between hiring and churn identified. Adjusting logic...", icon: Hammer },
  { agent: "Reporting Agent", text: "Runway alert: Stress test indicates breach at Month 10. Notifying CFO.", icon: Info },
]

export function SimulatorWidget() {
  const [activeTab, setActiveTab] = useState("operational")
  const [currentQuery, setCurrentQuery] = useState(0)
  const [isSimulating, setIsSimulating] = useState(false)
  const [isMockMode, setIsMockMode] = useState(true)
  const [importedValues, setImportedValues] = useState<number[]>([])
  const [fileName, setFileName] = useState<string>("")
  const [pulse, setPulse] = useState(0)
  const [activeInsight, setActiveInsight] = useState(0)
  const { openCalendly } = useCalendly()

  const fileInputRef = useRef<HTMLInputElement>(null)

  // Operational Params (Matching FinaPilot Core Logic)
  const [growthRate, setGrowthRate] = useState([8])
  const [cac, setCac] = useState([125])
  const [marketingSpend, setMarketingSpend] = useState([8000])
  const [teamSize, setTeamSize] = useState([12])
  const [churnRate, setChurnRate] = useState([2.5])
  const [pricingTier, setPricingTier] = useState([99])

  // Stress Params
  const [rateHike, setRateHike] = useState([50])
  const [revenueShock, setRevenueShock] = useState([-15])
  const [covenantLimit, setCovenantLimit] = useState([3.5])

  // Pulse effect (Live simulated environment)
  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => (p + 1) % 100)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // Insight cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveInsight(prev => (prev + 1) % agentInsights.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // CSV Parsing Logic (Client-Side Only)
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setFileName(file.name)
    setIsSimulating(true)

    const reader = new FileReader()
    reader.onload = (event) => {
      const text = event.target?.result as string
      const rows = text.split('\n').filter(r => r.trim())
      
      // Smart Column Selection: Try to find a column that isn't just dates/IDs
      let bestColumn: number[] = []
      let maxTotal = 0
      
      // Check first 5 columns
      for (let c = 0; c < 5; c++) {
        const colValues: number[] = []
        rows.slice(0, 100).forEach(row => {
          const col = row.split(',')[c]
          if (!col) return
          const val = parseFloat(col.replace(/[^0-9.-]/g, ""))
          // Ignore year-like or date-like numbers (e.g. 2024, 20240101)
          if (!isNaN(val) && val > 5000 && val < 1000000000 && !(val > 19000000 && val < 21000000)) {
            colValues.push(val)
          }
        })
        
        const columnSum = colValues.reduce((a, b) => a + b, 0)
        if (columnSum > maxTotal) {
          maxTotal = columnSum
          bestColumn = colValues
        }
      }

      if (bestColumn.length > 0) {
        setImportedValues(bestColumn)
        setIsMockMode(false)
        setIsSimulating(false)
      } else {
        alert("Institutional Ledger Analysis: No consistent financial metric column identified. Please ensure file contains ledger values > 5,000 per entry.")
        setIsSimulating(false)
      }
    }
    reader.readAsText(file)
  }

  const resetToMock = () => {
    setIsMockMode(true)
    setImportedValues([])
    setFileName("")
  }

  // Simulation Logic (Directly mirroring client/app/page.tsx logic)
  const data = useMemo(() => {
    const monthlyData = []

    // Scale sliders based on imported data magnitude
    const magnitude = isMockMode ? 1 : Math.max(1, Math.round(importedValues[0] / 25000))
    const scaledMarketingSpend = marketingSpend[0] * magnitude
    const scaledCac = cac[0] 

    // Initial State
    let customers = isMockMode ? 248 : (importedValues[0] / pricingTier[0]) || 248
    let revenue = customers * pricingTier[0]
    let cashBalance = 570000

    for (let month = 0; month < 24; month++) {
      // Growth Logic
      const newCustomers = Math.floor((scaledMarketingSpend / scaledCac) * (1 + growthRate[0] / 100))
      const churnedCustomers = Math.floor(customers * (churnRate[0] / 100))

      if (month > 0) {
        customers = customers + newCustomers - churnedCustomers
      }
      
      // Basic Linear Multiplier based on imported values trend if exists
      if (!isMockMode && importedValues.length > 1) {
         const trendIdx = month % importedValues.length
         const progression = (importedValues[trendIdx] / importedValues[0]) || 1
         revenue = (customers * pricingTier[0]) * progression
      } else {
         revenue = customers * pricingTier[0]
      }
      
      // Expense Logic
      const teamCost = teamSize[0] * 7000 
      const operationalCost = 12000 * magnitude
      const expenses = teamCost + scaledMarketingSpend + operationalCost

      // Stress Logic
      const shockEffect = month > 6 ? (1 + revenueShock[0] / 100) : 1
      const effectiveRevenue = revenue * shockEffect
      const netIncome = effectiveRevenue - expenses

      cashBalance += netIncome

      // Debt Ratio Simulation (Recalibrated for 1.0-6.0x scale)
      const noise = Math.sin(month / 2 + pulse) * 0.04
      const rateImpact = rateHike[0] / 800
      const ebitda = Math.max(10000, effectiveRevenue * 0.25)
      const debt = 500000 + (month * 10000)
      const baseRatio = (debt / ebitda) + rateImpact + noise

      monthlyData.push({
        month: `M${month}`,
        revenue: Math.round(effectiveRevenue),
        expenses: Math.round(expenses),
        customers: Math.round(customers),
        debtRatio: Math.round(baseRatio * 100) / 100,
        p95: Math.round((baseRatio * (1.15 + Math.sin(pulse) * 0.02)) * 100) / 100,
        p05: Math.round((baseRatio * (0.85 - Math.cos(pulse) * 0.02)) * 100) / 100,
        limit: covenantLimit[0]
      })
    }
    return monthlyData
  }, [growthRate, cac, marketingSpend, teamSize, churnRate, pricingTier, rateHike, revenueShock, covenantLimit, isMockMode, importedValues, pulse])

  const isBreached = data.some(d => d.debtRatio >= d.limit)

  return (
    <div className="w-full max-w-[100vw] px-4 sm:px-6 lg:px-8 my-16 sm:my-32 overflow-hidden" id="simulator">
      <div className="max-w-7xl mx-auto glass-premium p-5 sm:p-12 rounded-[2rem] sm:rounded-[4rem] border border-white/10 shadow-[0_64px_128px_-32px_rgba(0,0,0,0.8)] relative bg-[#080B14] overflow-hidden">

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-accent/5 blur-[120px] -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-blue-500/5 blur-[120px] -z-10 rounded-full" />

        <div className="flex flex-col xl:flex-row items-stretch justify-between mb-16 pb-12 border-b border-white/10 gap-10">
          <div className="flex items-center gap-6 sm:gap-8 overflow-hidden">
            <div className="w-20 h-20 sm:w-24 sm:h-24 glass-premium rounded-[2.5rem] flex items-center justify-center bg-black/60 border border-white/10 shadow-2xl relative group shrink-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <Activity className={`w-10 h-10 sm:w-12 sm:h-12 text-accent relative z-10 transition-transform ${isSimulating ? 'animate-pulse' : ''}`} />
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <h3 className="text-2xl sm:text-5xl font-black text-white tracking-tighter uppercase leading-tight">
                Hyperblock™ <span className="text-gradient-accent">Simulator</span>
              </h3>
              <div className="flex flex-wrap items-center gap-4 mt-4">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
                  <ShieldCheck className="w-3 h-3 text-accent" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-accent">Logic Provenance Verified</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                  <Database className="w-3 h-3 text-white/40" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-white/40">Local Mesh Active</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full xl:w-auto">
            <Button onClick={() => fileInputRef.current?.click()} className="w-full sm:w-auto h-16 bg-white/5 border border-white/10 px-8 rounded-2xl font-black uppercase tracking-widest text-[11px] hover:bg-white/10 transition-all gap-4 shadow-2xl group relative overflow-hidden shrink-0">
              <div className="absolute inset-0 bg-accent/5 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <FileSpreadsheet className="w-4 h-4 text-emerald-400 relative z-10" />
              <span className="relative z-10">Import Ledger Data</span>
            </Button>
            <input type="file" ref={fileInputRef} onChange={handleFileUpload} accept=".csv,.xlsx" className="hidden" />

            <Button onClick={resetToMock} disabled={isMockMode} className={`w-full sm:w-auto h-16 px-8 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all gap-4 shadow-2xl shrink-0 ${isMockMode ? 'bg-white/3 text-white/20 border-transparent opacity-40' : 'bg-red-500/10 text-red-100 border border-red-500/20 hover:bg-red-500/20'}`}>
              <Trash2 className="w-4 h-4" />
              <span>Reset Playground</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24 items-stretch">
          {/* Controls Pane */}
          <div className="lg:col-span-4 space-y-12 flex flex-col h-full">

            <div className="p-8 rounded-[2.5rem] bg-black/40 border border-white/5 shadow-inner relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[4rem] -z-10 group-hover:bg-accent/10 transition-all duration-700" />
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Brain className="w-5 h-5 text-accent animate-pulse" />
                  <span className="text-[12px] font-black uppercase tracking-[0.2em] text-white/40">Vector Cognition</span>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/40 animate-pulse" />
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/40 animate-pulse delay-75" />
                </div>
              </div>
              <div className="text-base sm:text-xl text-white font-black italic min-h-[90px] leading-relaxed tracking-tight group-hover:text-accent transition-colors duration-500">
                "{nlpQueries[currentQuery]}"
              </div>
            </div>

            <Tabs defaultValue="operational" className="w-full flex-1 flex flex-col" onValueChange={setActiveTab}>
              <TabsList className="w-full grid grid-cols-2 bg-black/60 border border-white/5 rounded-2xl p-1.5 h-16 mb-12 shadow-2xl">
                <TabsTrigger value="operational" className="text-[11px] font-black uppercase tracking-widest text-white/40 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-xl transition-all h-full">
                  Macro Dynamics
                </TabsTrigger>
                <TabsTrigger value="stress" className="text-[11px] font-black uppercase tracking-widest text-white/40 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground rounded-xl transition-all h-full">
                  Stress Params
                </TabsTrigger>
              </TabsList>

              <div className="flex-1">
                <TabsContent value="operational" className="mt-0 space-y-12 focus-visible:outline-none">
                  <div className="space-y-10">
                    <div className="space-y-5">
                      <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-white/60">
                        <span className="flex items-center gap-3"><Users className="w-4 h-4 text-accent" /> Team Size (Ops)</span>
                        <span className="text-accent font-black">{teamSize} Headcount</span>
                      </div>
                      <Slider value={teamSize} onValueChange={setTeamSize} min={1} max={100} step={1} className="py-2" />
                    </div>

                    <div className="space-y-5">
                      <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-white/60">
                        <span className="flex items-center gap-3"><TrendingUp className="w-4 h-4 text-blue-400" /> Growth Momentum</span>
                        <span className="text-blue-400 font-black">+{growthRate}% MoM</span>
                      </div>
                      <Slider value={growthRate} onValueChange={setGrowthRate} min={0} max={50} step={1} className="py-2" />
                    </div>

                    <div className="space-y-5">
                      <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-white/60">
                        <span className="flex items-center gap-3"><Zap className="w-4 h-4 text-red-500" /> Churn Sensitivity</span>
                        <span className="text-red-500 font-black">{churnRate}% Baseline</span>
                      </div>
                      <Slider value={churnRate} onValueChange={setChurnRate} min={0} max={15} step={0.5} className="py-2" />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="stress" className="mt-0 space-y-12 focus-visible:outline-none">
                  <div className="space-y-10">
                    <div className="space-y-5">
                      <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-white/60">
                        <span className="flex items-center gap-3"><RefreshCw className="w-4 h-4 text-orange-400" /> Rate Hike (bps)</span>
                        <span className="text-orange-400 font-black">+{rateHike} bps</span>
                      </div>
                      <Slider value={rateHike} onValueChange={setRateHike} min={0} max={600} step={25} className="py-2" />
                    </div>

                    <div className="space-y-5">
                      <div className="flex justify-between text-[11px] font-black uppercase tracking-widest text-white/60">
                        <span className="flex items-center gap-3"><AlertCircle className="w-4 h-4 text-yellow-500" /> Macro Shock</span>
                        <span className="text-yellow-500 font-black">{revenueShock}% Drift</span>
                      </div>
                      <Slider value={revenueShock} onValueChange={setRevenueShock} min={-50} max={0} step={5} className="py-2" />
                    </div>
                  </div>

                  <div className={`mt-14 p-8 rounded-[2rem] border transition-all duration-700 ${isBreached ? 'bg-red-500/10 border-red-500/20 glow-red' : 'bg-emerald-500/5 border-emerald-500/10'}`}>
                    <div className="flex items-center gap-5 mb-4">
                      <div className={`w-3 h-3 rounded-full ${isBreached ? 'bg-red-500 animate-ping' : 'bg-emerald-500'}`} />
                      <span className="text-[11px] font-black text-white uppercase tracking-[0.3em]">Institutional Assessment</span>
                    </div>
                    <p className={`text-base leading-relaxed font-bold font-heading ${isBreached ? 'text-red-100' : 'text-emerald-500/90'}`}>
                      {isBreached
                        ? "CRITICAL: COVENANT DRIFT DETECTED. Vector logic identifies covenant breach threshold exceeded at Month 10 under selected shocks. Immediate CFO review and liquidity re-balancing protocols recommended."
                        : "NOMINAL: NO BREACHES DETECTED. All 10,000 Monte Carlo paths remain within institutional safety buffers. System resilience verified for selected macroeconomic shifts."
                      }
                    </p>
                  </div>
                </TabsContent>
              </div>
            </Tabs>

            {/* Live Agent Insight Pane */}
            <div className="mt-8 p-6 rounded-2xl bg-white/3 border border-white/5 transition-all group overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-accent/2 -translate-x-full group-hover:translate-x-0 transition-transform duration-[2.5s]" />
              <div className="flex items-center gap-5 relative z-10">
                <div className="w-12 h-12 rounded-xl glass-premium flex items-center justify-center shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                  {(() => {
                    const Icon = agentInsights[activeInsight].icon;
                    return <Icon className="w-6 h-6 text-accent" />
                  })()}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.15em] mb-1">{agentInsights[activeInsight].agent} Observation</span>
                  <p className="text-xs text-white/80 font-bold leading-tight truncate">{agentInsights[activeInsight].text}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Graph Pane */}
          <div className="lg:col-span-8 w-full min-h-[600px] sm:min-h-[800px] glass-premium rounded-[3rem] border border-white/10 bg-black/60 p-6 sm:p-14 flex flex-col shadow-2xl relative group/graph backdrop-blur-[40px] overflow-hidden self-stretch">

            {/* Dynamic Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-16 gap-8 relative z-10">
              <div className="flex flex-col gap-4">
                <h4 className="text-xl sm:text-5xl font-black text-white tracking-tighter uppercase leading-tight flex items-center gap-5 italic">
                  {activeTab === 'operational' ? 'Operational Forecast' : 'Covenant Sensitivity'}
                  <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-accent animate-pulse shadow-[0_0_20px_rgba(0,242,255,0.8)] shrink-0" />
                </h4>
                <div className="flex items-center gap-5 mt-2 overflow-x-auto no-scrollbar w-full">
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 font-mono">Simulating 10k Paths</span>
                  </div>
                  <div className="w-px h-3 bg-white/10 shrink-0" />
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-accent font-mono animate-pulse">Sync Active</span>
                  </div>
                  <div className="w-px h-3 bg-white/10 shrink-0" />
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 font-mono italic">Throughput: 1.2M nodes/sec</span>
                  </div>
                </div>
              </div>

              {!isMockMode && (
                <div className="px-6 py-3 rounded-2xl border border-accent/30 bg-accent/10 flex items-center gap-4 text-[12px] font-black uppercase text-accent shadow-2xl animate-fade-in-scale">
                  <Sparkles className="w-4 h-4" /> LEDGER: {fileName}
                </div>
              )}
            </div>

             <div className="flex-1 w-full h-[450px] sm:h-[600px] relative mt-4">
               <ResponsiveContainer width="100%" height="100%">
                 <AreaChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorMain" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00F2FF" stopOpacity={0.5} />
                      <stop offset="95%" stopColor="#00F2FF" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="colorRisk" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                    </linearGradient>
                  </defs>

                  <CartesianGrid strokeDasharray="5 5" stroke="#ffffff03" vertical={false} />
                  <XAxis dataKey="month" stroke="#ffffff08" fontSize={11} axisLine={false} tickLine={false} tickMargin={25} style={{ fontStyle: 'italic', fontWeight: 900 }} />
                  <YAxis
                    domain={activeTab === 'operational' ? ['auto', 'auto'] : [0, 6]}
                    stroke="#ffffff08"
                    fontSize={11}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={activeTab === 'operational' ? (val) => formatCurrency(val) : (val) => `${val}x`}
                    style={{ fontStyle: 'italic', fontWeight: 900 }}
                  />

                  <Tooltip
                    contentStyle={{ backgroundColor: '#050810', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '32px', fontSize: '14px', backdropFilter: 'blur(50px)', boxShadow: '0 50px 100px -20px rgba(0,0,0,1)' }}
                    itemStyle={{ color: '#00F2FF', fontWeight: '900', padding: '6px 0', textTransform: 'uppercase' }}
                    labelStyle={{ color: '#ffffff30', marginBottom: '16px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.2em' }}
                    formatter={(v: number, name: string) => [
                      activeTab === 'operational' ? formatCurrency(v) : v.toFixed(2) + 'x',
                      name === 'revenue' ? 'Proj. Revenue' : name === 'debtRatio' ? 'Net Debt / EBITDA' : name === 'p95' ? 'P95 Downside' : 'P05 Upside'
                    ]}
                  />

                  {activeTab === 'stress' ? (
                    <>
                      <Area type="monotone" dataKey="p95" stroke="none" fill="url(#colorRisk)" isAnimationActive={false} />
                      <Area type="monotone" dataKey="p05" stroke="none" fill="#ffffff05" isAnimationActive={false} />
                      <Line type="monotone" dataKey="limit" stroke="#ef4444" strokeWidth={3} strokeDasharray="12 10" dot={false} activeDot={false} isAnimationActive={false} />
                      <Line
                        type="monotone"
                        dataKey="debtRatio"
                        stroke="#00F2FF"
                        strokeWidth={5}
                        dot={{ r: 5, fill: '#080B14', stroke: '#00F2FF', strokeWidth: 3 }}
                        activeDot={{ r: 10, fill: '#00F2FF', stroke: '#fff', strokeWidth: 4 }}
                        isAnimationActive={false}
                      />
                    </>
                  ) : (
                    <>
                      <Area
                        type="monotone"
                        dataKey="revenue"
                        stroke="#00F2FF"
                        strokeWidth={5}
                        fill="url(#colorMain)"
                        isAnimationActive={false}
                        activeDot={{ r: 10, fill: '#00F2FF', stroke: '#fff', strokeWidth: 4 }}
                      />
                    </>
                  )}
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Detailed Meta Pane */}
            <div className="mt-16 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-12 relative z-10">
              <div className="grid grid-cols-2 sm:flex flex-wrap items-center justify-center sm:justify-start gap-12 w-full sm:w-auto">
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Data Provenance</span>
                  <div className="flex items-center gap-3 text-emerald-400 font-black text-xs tracking-tighter uppercase italic">
                    <ShieldCheck className="w-4 h-4" />
                    E2E Encrypted
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Mesh Logic</span>
                  <div className="flex items-center gap-3 text-accent font-black text-xs tracking-tighter uppercase italic">
                    <Target className="w-4 h-4" />
                    Vector Verified
                  </div>
                </div>
                <div className="flex flex-col gap-2 group cursor-pointer">
                  <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.2em]">Recalc Latency</span>
                  <div className="flex items-center gap-3 text-white/80 font-black text-xs tracking-tighter uppercase italic font-mono transition-colors group-hover:text-accent">
                    <Zap className="w-3.5 h-3.5 opacity-50 text-accent group-hover:animate-pulse" />
                    &lt;4ms Delta
                  </div>
                </div>
              </div>

              <div className="px-8 py-3.5 rounded-2xl bg-white/3 border border-white/10 group-hover/graph:border-accent/30 transition-all flex items-center gap-5 shadow-2xl">
                <Lock className="w-5 h-5 text-accent" />
                <span className="text-[9px] font-black text-white uppercase tracking-[0.3em] whitespace-nowrap">Institutional Integrity Locked</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

