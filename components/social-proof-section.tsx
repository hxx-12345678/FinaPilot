import { Users, Building, Rocket } from "lucide-react"

export function SocialProofSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Trusted by forward-thinking finance teams
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-8 rounded-xl bg-card border border-border">
            <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-7 h-7 text-foreground" />
            </div>
            <p className="text-lg font-medium text-foreground mb-2">Currently onboarding early partners</p>
            <p className="text-sm text-muted-foreground">Be among the first to experience FinaPilot</p>
          </div>

          <div className="text-center p-8 rounded-xl bg-card border border-border">
            <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mx-auto mb-4">
              <Building className="w-7 h-7 text-foreground" />
            </div>
            <p className="text-lg font-medium text-foreground mb-2">Built with finance leaders</p>
            <p className="text-sm text-muted-foreground">Developed alongside real CFOs and FP&A teams</p>
          </div>

          <div className="text-center p-8 rounded-xl bg-card border border-border">
            <div className="w-14 h-14 bg-muted rounded-xl flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-7 h-7 text-foreground" />
            </div>
            <p className="text-lg font-medium text-foreground mb-2">Used by modern SaaS teams</p>
            <p className="text-sm text-muted-foreground">Designed for fast-moving businesses</p>
          </div>
        </div>
      </div>
    </section>
  )
}
