import { Briefcase, Calculator, TrendingUp, Rocket, Users, Building, UserCheck, LineChart } from "lucide-react"

const audiences = [
  { icon: Briefcase, label: "CFOs" },
  { icon: Calculator, label: "Finance Managers" },
  { icon: TrendingUp, label: "FP&A Teams" },
  { icon: Rocket, label: "SaaS Founders" },
  { icon: Users, label: "Finance Consultants" },
  { icon: Building, label: "Accounting Firms" },
  { icon: UserCheck, label: "Fractional CFOs" },
  { icon: LineChart, label: "VC / PE Portfolio Teams" },
]

export function AudienceSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">Who is this program for?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're looking for finance leaders who want to transform how they work
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-background border border-border hover:border-accent/30 transition-colors"
            >
              <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mb-4">
                <audience.icon className="w-7 h-7 text-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">{audience.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
