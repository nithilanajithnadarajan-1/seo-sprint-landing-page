import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "Will UX nudges hurt SEO?",
      answer: "No. We implement behavioral nudges that improve user experience while maintaining or enhancing SEO performance. All changes are tested for Core Web Vitals impact and can be rolled back if needed."
    },
    {
      question: "How do you measure lift in 14 days?",
      answer: "We compare CTR, engagement metrics, and conversion data from 14 days before vs 14 days after implementation. This window accounts for search engine indexing delays and provides statistically significant results."
    },
    {
      question: "What's in the one PR?",
      answer: "The PR includes optimized title tags, meta descriptions, heading structure, canonical tags, internal linking improvements, and UX nudges. You get a detailed diff showing before/after for every change."
    },
    {
      question: "Do you work with SaaS vs marketplaces?",
      answer: "Yes, we work with both SaaS platforms and marketplaces. Our approach adapts to your business model, whether you're focused on user acquisition, conversion optimization, or marketplace discovery."
    }
  ];

  return (
    <section id="faq" className="py-28 bg-[#0F1115]">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-[#F3F4F6] mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-[#E5E7EB] max-w-2xl mx-auto">
            Everything you need to know about the 24-hour SEO sprint
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-[#151821] border border-white/6 rounded-2xl px-6 data-[state=open]:shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
              >
                <AccordionTrigger className="text-left font-bold text-[#F3F4F6] hover:text-[#8B5CF6] transition-colors py-6 text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#E5E7EB] leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}