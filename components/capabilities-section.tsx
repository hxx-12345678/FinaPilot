import {
  Calculator,
  GitBranch,
  BarChart2,
  AlertTriangle,
  Bot,
  CheckSquare,
  Database,
  FileText,
} from "lucide-react"

const capabilities = [
  { icon: Calculator, title: "Financial Modeling", description: "Build sophisticated models with ease" },
  { icon: GitBranch, title: "Scenario Planning", description: "Compare multiple business scenarios" },
  { icon: BarChart2, title: "Budget vs Actual", description: "Track performance in real-time" },
  { icon: AlertTriangle, title: "Risk Modeling", description: "Monte Carlo simulations for risk analysis" },
  { icon: Bot, title: "AI CFO Assistant", description: "Get instant answers to financial questions" },
  { icon: CheckSquare, title: "Approval System", description: "Multi-level sign-off workflows" },
  { icon: Database, title: "Data Ingestion", description: "Connect Stripe, banks, ERPs" },
  { icon: FileText, title: "Automated Reporting", description: "One-click PDF, PPT, CSV exports" },
]

export function CapabilitiesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">Product Capabilities</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to modernize your finance operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 border border-border hover:border-accent/30 transition-colors"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <capability.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">{capability.title}</h3>
              <p className="text-sm text-muted-foreground">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
