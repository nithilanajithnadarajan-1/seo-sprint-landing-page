import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function SemanticFAQ() {
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
    <section className="py-32 bg-[#0F1115]">
      <div className="max-w-[1440px] mx-auto px-20">
        {/* Semantic Keyword Paragraph */}
        <div className="mb-20 text-center">
          <div className="max-w-4xl mx-auto mb-12">
            <p className="text-2xl text-[#E5E7EB] leading-relaxed font-medium">
              We ship an{" "}
              <strong className="text-[#8B5CF6] font-black">SEO sprint</strong>{" "}
              in 2 weeks and support it with{" "}
              <strong className="text-[#22D3EE] font-black">niche edits</strong>,{" "}
              <strong className="text-[#F97316] font-black">unlinked mentions</strong>, and high-quality{" "}
              <strong className="text-[#8B5CF6] font-black">resource pages</strong>. 
              It's one pull request, measurable in Search Console.
            </p>
          </div>
          
          <h2 className="text-7xl font-black text-[#F3F4F6] leading-tight">
            Frequently asked{" "}
            <span className="text-[#8B5CF6]" style={{ fontFamily: 'DM Serif Display, serif' }}>
              questions
            </span>
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-[#151821] border-2 border-white/10 rounded-3xl px-8 data-[state=open]:border-[#8B5CF6]/50 data-[state=open]:shadow-[0_20px_40px_rgba(139,92,246,0.2)] data-[state=open]:bg-[#1A1F2E] transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-black text-[#F3F4F6] hover:text-[#8B5CF6] transition-colors py-8 text-2xl hover:no-underline group">
                  <span className="group-hover:translate-x-2 transition-transform duration-200">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-[#E5E7EB] leading-relaxed pb-8 text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-6 p-8 bg-[#151821] border-2 border-[#8B5CF6]/30 rounded-3xl">
            <div className="text-4xl">🚀</div>
            <div>
              <h3 className="text-2xl font-black text-[#F3F4F6] mb-2">
                Ready to start your sprint?
              </h3>
              <p className="text-[#E5E7EB] font-medium">
                Get your PR in 2 weeks. No contracts, no surprises.
              </p>
            </div>
            <a 
              href="/services/seo-sprint"
              className="px-8 py-4 bg-[#8B5CF6] hover:bg-[#7C3AED] text-[#0F1115] font-black rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(139,92,246,0.4)] whitespace-nowrap"
            >
              Start Sprint
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}