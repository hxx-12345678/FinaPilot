import { FileSpreadsheet, TrendingDown, AlertTriangle, Database, ClipboardList, FileText } from "lucide-react"

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Excel Dependency",
    description: "Teams still rely on error-prone spreadsheets for critical financial decisions",
  },
  {
    icon: TrendingDown,
    title: "Inaccurate Forecasts",
    description: "Static models can't adapt to rapidly changing business conditions",
  },
  {
    icon: AlertTriangle,
    title: "No Risk Modeling",
    description: "Unable to simulate scenarios or understand potential outcomes",
  },
  {
    icon: Database,
    title: "Scattered Data",
    description: "Financial data fragmented across multiple disconnected tools",
  },
  {
    icon: ClipboardList,
    title: "No Audit Trail",
    description: "Missing governance, approvals, and compliance documentation",
  },
  {
    icon: FileText,
    title: "Manual Reporting",
    description: "Hours wasted creating board decks and stakeholder reports",
  },
]

export function ProblemSection() {
  return (
    <section id="problem" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">Financial planning is broken</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Finance teams are held back by outdated tools and fragmented workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 border border-border hover:border-accent/30 transition-colors"
            >
              <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
