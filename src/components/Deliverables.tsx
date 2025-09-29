export function Deliverables() {
  const deliverables = [
    "Title length fixed",
    "Meta description trimmed", 
    "Heading order corrected",
    "Canonical added",
    "Lighthouse score up",
    "Accessibility contrast passes",
    "Internal links mapped",
    "Evidence PR diff (before/after)"
  ];

  return (
    <section className="py-28 bg-[#0F1115]">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-[#F3F4F6] mb-4">
            What you get
          </h2>
          <p className="text-xl text-[#E5E7EB] max-w-2xl mx-auto">
            Key deliverables from your 24-hour SEO sprint
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto">
          {deliverables.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-6 h-6 bg-[#8B5CF6] rounded-full flex items-center justify-center">
                <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                  <path 
                    d="M1 4.5L4 7.5L11 1" 
                    stroke="#0F1115" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[#E5E7EB] font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}