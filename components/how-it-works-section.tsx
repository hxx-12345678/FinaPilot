const steps = [
  { number: "01", title: "Apply Online", description: "Fill out the application form with your details" },
  { number: "02", title: "Application Review", description: "We review every application personally" },
  { number: "03", title: "Onboarding & Demo", description: "Get a personalized walkthrough of FinaPilot" },
  { number: "04", title: "Start Using", description: "Begin using FinaPilot with full support" },
  { number: "05", title: "Provide Feedback", description: "Share insights that shape the product" },
  { number: "06", title: "Scale With Us", description: "Grow together as we expand" },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">How the program works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A simple process to get you started with FinaPilot
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-xl border border-border p-6 h-full">
                <span className="text-4xl font-bold text-foreground mb-4 block">{step.number}</span>
                <h3 className="text-lg font-medium text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
