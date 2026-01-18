import { Rocket, MessageSquare, Clock, Users, DollarSign, Megaphone } from "lucide-react"

const programFeatures = [
  { icon: Rocket, label: "Early access to FinaPilot" },
  { icon: MessageSquare, label: "Direct influence on roadmap" },
  { icon: Clock, label: "Priority support" },
  { icon: Users, label: "Custom onboarding" },
  { icon: DollarSign, label: "Preferential pricing" },
  { icon: Megaphone, label: "Co-marketing opportunities" },
]

export function ProgramSection() {
  return (
    <section id="program" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            What is the Design Partner Program?
          </h2>
          <p className="text-lg text-muted-foreground mb-12">
            The Design Partner Program is for early users who want to shape the future of financial planning software
            alongside our team.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {programFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-3 p-4 rounded-lg bg-background border border-border">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <feature.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground text-left">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
