import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

export function SemanticSection() {
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
    <section className="py-24" style={{ backgroundColor: '#FBFBFB' }}>
      <div className="max-w-6xl mx-auto px-8">
        {/* Semantic Keyword Paragraph - The honest indexable content */}
        <div className="text-center mb-20">
          <div className="max-w-4xl mx-auto mb-16">
            <p 
              className="text-2xl md:text-3xl leading-relaxed font-medium"
              style={{ 
                color: '#0E1C2E',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              We run a 24-hour{" "}
              <strong 
                className="font-black"
                style={{ 
                  color: '#8B5CF6',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}
              >
                SEO sprint
              </strong>{" "}
              and support it with{" "}
              <strong 
                className="font-black"
                style={{ 
                  color: '#FF6B6B',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}
              >
                niche edits
              </strong>,{" "}
              <strong 
                className="font-black"
                style={{ 
                  color: '#B7E7E1',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}
              >
                unlinked mentions
              </strong>, and high-quality{" "}
              <strong 
                className="font-black"
                style={{ 
                  color: '#F8D6C6',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}
              >
                resource pages
              </strong>.{" "}
              One pull request. Measured in Search Console.
            </p>
          </div>
          
          <h2 
            className="text-6xl md:text-7xl font-black leading-tight"
            style={{ 
              fontFamily: 'Fraunces, serif',
              color: '#0E1C2E'
            }}
          >
            Common{" "}
            <span 
              style={{ 
                fontFamily: 'Space Grotesk, sans-serif',
                color: '#8B5CF6'
              }}
            >
              questions
            </span>
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-4 rounded-3xl px-8 data-[state=open]:shadow-2xl transition-all duration-300"
                style={{
                  backgroundColor: '#FBFBFB',
                  borderColor: index % 2 === 0 ? '#CDB7FF' : '#B7E7E1'
                }}
              >
                <AccordionTrigger 
                  className="text-left font-black hover:no-underline py-8 text-xl md:text-2xl group"
                  style={{ 
                    color: '#0E1C2E',
                    fontFamily: 'Space Grotesk, sans-serif'
                  }}
                >
                  <span className="group-hover:translate-x-2 transition-transform duration-200">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent 
                  className="leading-relaxed pb-8 text-lg"
                  style={{ 
                    color: '#0E1C2E',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-20">
          <div 
            className="inline-flex items-center space-x-6 p-8 rounded-3xl border-4"
            style={{
              backgroundColor: '#F8D6C6',
              borderColor: '#8B5CF6'
            }}
          >
            <div className="text-4xl">🚀</div>
            <div>
              <h3 
                className="text-2xl md:text-3xl font-black mb-2"
                style={{ 
                  color: '#0E1C2E',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}
              >
                Start working with Auxil
              </h3>
              <p 
                className="font-medium text-lg"
                style={{ color: '#0E1C2E' }}
              >
                Get your first PR in 2 weeks. No contracts, no surprises.
              </p>
            </div>
            <a 
              href="/services/seo-sprint"
              className="px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 hover:shadow-xl font-black text-xl whitespace-nowrap"
              style={{
                backgroundColor: '#8B5CF6',
                color: '#FBFBFB',
                fontFamily: 'Space Grotesk, sans-serif'
              }}
            >
              Start Sprint
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}