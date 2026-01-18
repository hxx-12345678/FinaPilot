import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Is the Design Partner Program free?",
    answer:
      "Yes, the Design Partner Program is free during the early access period. Partners receive preferential pricing when we transition to general availability.",
  },
  {
    question: "Who gets accepted into the program?",
    answer:
      "We're looking for finance leaders who are actively managing financial planning, have a genuine need for better tools, and are willing to provide regular feedback to help shape the product.",
  },
  {
    question: "How long is the program?",
    answer:
      "The initial Design Partner Program runs for 6 months, with the option to continue as a preferred customer with exclusive benefits after the program concludes.",
  },
  {
    question: "What kind of support will I receive?",
    answer:
      "Design Partners receive white-glove onboarding, a dedicated success manager, priority support response times, and direct access to our product team.",
  },
  {
    question: "Will pricing change after the program?",
    answer:
      "Design Partners are locked in at preferential pricing for the lifetime of their account, even after the program ends and we launch publicly.",
  },
  {
    question: "Can I leave the program anytime?",
    answer:
      "Yes, you can leave the program at any time with no obligations. We value your participation but understand if your circumstances change.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about the Design Partner Program</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left text-foreground hover:text-foreground">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
