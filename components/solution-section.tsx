import { Brain, BarChart3, GitBranch, Zap, Link, BookOpen, Shield, PieChart, Download } from "lucide-react"

const features = [
  { icon: Brain, label: "AI Forecasting" },
  { icon: BarChart3, label: "Monte Carlo Simulations" },
  { icon: GitBranch, label: "Scenario Planning" },
  { icon: Zap, label: "Real-time Analysis" },
  { icon: Link, label: "Data Connectors" },
  { icon: BookOpen, label: "Semantic Ledger" },
  { icon: Shield, label: "Governance & Approvals" },
  { icon: PieChart, label: "Board Reporting" },
  { icon: Download, label: "One-click Exports" },
]

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">Meet FinaPilot</h2>
            <p className="text-xl text-accent font-medium mb-4">The Finance Operating System</p>
            <p className="text-base text-muted-foreground leading-relaxed mb-8">
              FinaPilot is an AI-powered financial planning and analytics platform that helps finance teams forecast
              accurately, simulate scenarios, manage risk, and make confident decisions.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-4 rounded-lg bg-card border border-border hover:border-accent/30 transition-colors"
                >
                  <feature.icon className="w-5 h-5 text-accent mb-2" />
                  <span className="text-xs text-muted-foreground">{feature.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <div className="bg-card rounded-xl border border-border p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">AI CFO Assistant</p>
                  <p className="text-xs text-muted-foreground">Powered by FinaPilot</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-2">
                    {"What's our runway if we increase hiring by 20%?"}
                  </p>
                </div>
                <div className="bg-accent/10 rounded-lg p-4">
                  <p className="text-sm text-foreground">
                    Based on current burn rate and projected revenue, increasing headcount by 20% would reduce runway
                    from 18 to 14 months. I recommend reviewing the scenario model for optimal hiring pace.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
