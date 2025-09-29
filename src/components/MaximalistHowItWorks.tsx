export function MaximalistHowItWorks() {
  const steps = [
    {
      title: "DIAGNOSE",
      items: ["crawl", "OEC", "guardrails"],
      chip: "≤ 15 min intake",
      color: "#8B5CF6"
    },
    {
      title: "IMPLEMENT",
      items: ["title/meta", "headings", "internal links", "UX nudges"],
      chip: "1 PR",
      color: "#22D3EE"
    },
    {
      title: "MEASURE", 
      items: ["GSC CTR 14d vs 14d", "Lighthouse", "a11y"],
      chip: "rollback ready",
      color: "#F97316"
    }
  ];

  return (
    <section className="py-32 bg-[#0F1115] relative overflow-hidden">
      {/* Background Marquee */}
      <div className="absolute inset-0 flex items-center pointer-events-none opacity-30" aria-hidden="true">
        <div className="flex whitespace-nowrap marquee">
          <span className="text-6xl font-black text-[#8B5CF6] mr-16" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            seo sprint • niche edits • unlinked mentions • resource pages • digital pr • 
          </span>
          <span className="text-6xl font-black text-[#8B5CF6] mr-16" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            seo sprint • niche edits • unlinked mentions • resource pages • digital pr • 
          </span>
        </div>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-20 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-7xl font-black text-[#F3F4F6] mb-6 leading-tight">
            How the{" "}
            <span className="text-[#8B5CF6]" style={{ fontFamily: 'DM Serif Display, serif' }}>
              SEO sprint
            </span>{" "}
            works
          </h2>
        </div>
        
        <div className="grid grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-[#151821] border-2 border-white/10 rounded-3xl p-12 transition-all duration-300 hover:border-white/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:-translate-y-2 group"
            >
              {/* Chip */}
              <div className="mb-8">
                <div 
                  className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold"
                  style={{ 
                    backgroundColor: `${step.color}20`,
                    border: `2px solid ${step.color}60`,
                    color: step.color
                  }}
                >
                  {step.chip}
                </div>
              </div>
              
              {/* Title */}
              <h3 
                className="text-5xl font-black mb-8 group-hover:scale-105 transition-transform"
                style={{ 
                  fontFamily: 'Archivo Black, sans-serif',
                  color: step.color
                }}
              >
                {step.title}
              </h3>
              
              {/* Items */}
              <ul className="space-y-3">
                {step.items.map((item, itemIndex) => (
                  <li 
                    key={itemIndex}
                    className="text-[#E5E7EB] font-medium flex items-center space-x-3"
                  >
                    <div 
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: step.color }}
                    />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}