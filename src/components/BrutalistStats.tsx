export function BrutalistStats() {
  const stats = [
    {
      number: "+14%",
      label: "Sign-ups",
      description: "10 days, pricing microcopy",
      color: "#F97316", // Orange
      bgPattern: "diagonal-lines"
    },
    {
      number: "62 → 92",
      label: "SEO",
      description: "title/meta/canonical/images",
      color: "#8B5CF6", // Purple
      bgPattern: "dots"
    },
    {
      number: "-22%",
      label: "Bounce",
      description: "onboarding nudge",
      color: "#22D3EE", // Teal
      bgPattern: "grid"
    }
  ];

  return (
    <section className="py-32 bg-[#0F1115]">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center mb-20">
          <h2 className="text-7xl font-black text-[#F3F4F6] mb-6 leading-tight">
            <span style={{ fontFamily: 'Archivo Black, sans-serif' }}>
              Results
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Background Pattern */}
              <div 
                className={`absolute inset-0 rounded-3xl opacity-10 ${getPatternClass(stat.bgPattern)}`}
                style={{ backgroundColor: stat.color }}
              />
              
              {/* Main Slab */}
              <div 
                className="relative bg-[#151821] border-4 rounded-3xl p-12 transition-all duration-300 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] hover:-translate-y-3 group"
                style={{ borderColor: stat.color }}
              >
                {/* Number */}
                <div 
                  className="text-8xl font-black leading-none mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ 
                    fontFamily: 'Archivo Black, sans-serif',
                    color: stat.color
                  }}
                >
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-4xl font-black text-[#F3F4F6] mb-4 uppercase tracking-wide">
                  {stat.label}
                </div>
                
                {/* Description */}
                <p className="text-[#E5E7EB] font-medium text-lg leading-relaxed">
                  {stat.description}
                </p>
                
                {/* Accent Line */}
                <div 
                  className="absolute bottom-0 left-0 h-2 rounded-b-3xl transition-all duration-300 group-hover:h-4"
                  style={{ 
                    backgroundColor: stat.color,
                    width: '100%'
                  }}
                />
                
                {/* Corner Accent */}
                <div 
                  className="absolute top-6 right-6 w-6 h-6 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-300"
                  style={{ backgroundColor: stat.color }}
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-20">
          <a 
            href="#case-studies" 
            className="inline-flex items-center space-x-4 text-2xl font-bold text-[#8B5CF6] hover:text-[#A78BFA] transition-colors group"
          >
            <span>View all case studies</span>
            <div className="w-8 h-8 bg-[#8B5CF6] rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L8 3M13 8L8 13" stroke="#0F1115" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function getPatternClass(pattern: string): string {
  switch (pattern) {
    case 'diagonal-lines':
      return '[background-image:repeating-linear-gradient(45deg,transparent,transparent_10px,currentColor_10px,currentColor_12px)]';
    case 'dots':
      return '[background-image:radial-gradient(circle_at_50%_50%,currentColor_2px,transparent_2px)] [background-size:20px_20px]';
    case 'grid':
      return '[background-image:linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] [background-size:20px_20px]';
    default:
      return '';
  }
}