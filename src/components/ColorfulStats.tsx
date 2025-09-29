export function ColorfulStats() {
  const stats = [
    {
      number: "+14%",
      label: "Sign-ups",
      description: "10 days, pricing microcopy",
      bgColor: "#B2F75E", // Citrus Lime
      textColor: "#0E1C2E",
      pattern: "diagonal-lines"
    },
    {
      number: "62→92", 
      label: "SEO",
      description: "title/meta/canonical/images",
      bgColor: "#8B5CF6", // Accent Purple
      textColor: "#FBFBFB",
      pattern: "dots"
    },
    {
      number: "-22%",
      label: "Bounce", 
      description: "onboarding nudge",
      bgColor: "#FF6B6B", // Neon Coral
      textColor: "#FBFBFB",
      pattern: "grid"
    }
  ];

  const getPatternStyle = (pattern: string, color: string) => {
    const patternColor = pattern === 'diagonal-lines' ? '#0E1C2E' : '#FBFBFB';
    
    switch (pattern) {
      case 'diagonal-lines':
        return {
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, ${patternColor}15 10px, ${patternColor}15 12px)`
        };
      case 'dots':
        return {
          backgroundImage: `radial-gradient(circle at 50% 50%, ${patternColor}15 2px, transparent 2px)`,
          backgroundSize: '20px 20px'
        };
      case 'grid':
        return {
          backgroundImage: `linear-gradient(${patternColor}15 1px, transparent 1px), linear-gradient(90deg, ${patternColor}15 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        };
      default:
        return {};
    }
  };

  return (
    <section className="py-24" style={{ backgroundColor: '#FBFBFB' }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-6xl md:text-7xl font-black leading-tight mb-6"
            style={{ 
              fontFamily: 'Fraunces, serif',
              color: '#0E1C2E'
            }}
          >
            Real{" "}
            <span 
              style={{ 
                fontFamily: 'Archivo Black, sans-serif',
                color: '#8B5CF6'
              }}
            >
              results
            </span>
          </h2>
          <p 
            className="text-2xl font-medium"
            style={{ color: '#0E1C2E' }}
          >
            Measured improvements from recent client work.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
              onClick={() => {
                // 90-sec teardown modal would open here
                console.log(`Opening teardown for ${stat.label}`);
              }}
            >
              {/* Background Pattern */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity"
                style={{
                  backgroundColor: stat.bgColor,
                  ...getPatternStyle(stat.pattern, stat.bgColor)
                }}
              />
              
              {/* Main Slab */}
              <div 
                className="relative rounded-3xl p-12 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-4"
                style={{ 
                  backgroundColor: stat.bgColor,
                  borderColor: stat.bgColor,
                  color: stat.textColor
                }}
              >
                {/* Number */}
                <div 
                  className="text-7xl md:text-8xl font-black leading-none mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ fontFamily: 'Archivo Black, sans-serif' }}
                >
                  {stat.number}
                </div>
                
                {/* Label */}
                <div 
                  className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-wide"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {stat.label}
                </div>
                
                {/* Description */}
                <p 
                  className="text-lg font-medium leading-relaxed opacity-90"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {stat.description}
                </p>
                
                {/* Click indicator */}
                <div className="absolute top-6 right-6 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <a 
            href="#case-studies"
            className="inline-flex items-center space-x-4 px-8 py-4 rounded-full font-black text-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ 
              backgroundColor: '#0E1C2E',
              color: '#FBFBFB',
              fontFamily: 'Space Grotesk, sans-serif'
            }}
          >
            <span>View 90-second teardowns</span>
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#0E1C2E' }}>
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}