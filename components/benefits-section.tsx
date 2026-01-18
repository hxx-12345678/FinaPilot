import { Check } from "lucide-react"

const benefits = [
  "Early access to new features",
  "Direct feedback channel with product team",
  "Influence product roadmap",
  "White-glove onboarding",
  "Dedicated success manager",
  "Exclusive partner pricing",
  "Revenue share opportunities",
  "Co-marketing (webinars, case studies)",
  "Priority feature requests",
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">Why become a Design Partner?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              As a Design Partner, you get exclusive benefits that help you succeed while shaping our product.
            </p>

            <div className="grid gap-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full max-w-md">
            <div className="bg-primary text-primary-foreground rounded-xl p-8">
              <div className="text-center mb-6">
                <p className="text-sm opacity-80 mb-2">Limited Spots Available</p>
                <p className="text-5xl font-bold mb-2">10</p>
                <p className="text-sm opacity-80">Design Partners</p>
              </div>
              <div className="border-t border-primary-foreground/20 pt-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Hands-on collaboration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Dedicated support channel</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    <span>Founding partner recognition</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
