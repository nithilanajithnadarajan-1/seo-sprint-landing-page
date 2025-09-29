export function CaseStudies() {
  const cases = [
    {
      metric: "+14% sign-ups in 10 days",
      description: "Pricing microcopy + faster above-the-fold.",
      color: "#22D3EE"
    },
    {
      metric: "SEO 62 → 92", 
      description: "Title/meta/canonical + image alts fix.",
      color: "#8B5CF6"
    },
    {
      metric: "-22% bounce",
      description: "Onboarding nudge reduces taps.",
      color: "#22D3EE"
    }
  ];

  return (
    <section id="case-studies" className="py-28 bg-[#0F1115]">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-[#F3F4F6] mb-4">
            Selected case studies
          </h2>
          <p className="text-xl text-[#E5E7EB] max-w-2xl mx-auto">
            Real results from 24-hour sprints
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((caseStudy, index) => (
            <div 
              key={index}
              className="bg-[#151821] border border-white/6 rounded-2xl p-6 transition-all duration-200 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:-translate-y-0.5"
            >
              <div className="mb-4">
                <div 
                  className="inline-flex items-center px-3 py-1 rounded-full"
                  style={{ 
                    backgroundColor: `${caseStudy.color}20`,
                    border: `1px solid ${caseStudy.color}60`
                  }}
                >
                  <span 
                    className="text-sm font-bold"
                    style={{ color: caseStudy.color }}
                  >
                    {caseStudy.metric}
                  </span>
                </div>
              </div>
              
              <p className="text-[#E5E7EB] leading-relaxed">
                {caseStudy.description}
              </p>
              
              <div className="mt-4">
                <a 
                  href="#case-studies" 
                  className="text-sm font-medium hover:translate-x-1 transition-transform inline-block"
                  style={{ color: caseStudy.color }}
                >
                  View details →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}