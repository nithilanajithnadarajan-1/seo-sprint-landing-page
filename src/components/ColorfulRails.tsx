export function ColorfulRails() {
  const rails = [
    {
      keyword: "seo sprint",
      description: "24-hour fixes", 
      href: "/services/seo-sprint",
      bgColor: "#0E1C2E", // Petrol Ink
      textColor: "#FBFBFB" // Foam White
    },
    {
      keyword: "unlinked mentions",
      description: "reclaim brand links",
      href: "/insights/unlinked-mentions", 
      bgColor: "#CDB7FF", // Lilac Smoke
      textColor: "#0E1C2E" // Petrol Ink
    },
    {
      keyword: "niche edits", 
      description: "contextual placements",
      href: "/insights/niche-edits",
      bgColor: "#B7E7E1", // Sea Mist
      textColor: "#0E1C2E" // Petrol Ink
    },
    {
      keyword: "resource pages",
      description: "linkable assets", 
      href: "/insights/resource-pages",
      bgColor: "#F8D6C6", // Peach Sand
      textColor: "#0E1C2E" // Petrol Ink
    },
    {
      keyword: "digital pr",
      description: "reactive + data study",
      href: "/services/digital-pr-startups",
      bgColor: "#FF6B6B", // Neon Coral
      textColor: "#FBFBFB" // Foam White
    }
  ];

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
            Our core{" "}
            <span 
              style={{ 
                fontFamily: 'Space Grotesk, sans-serif',
                color: '#8B5CF6'
              }}
            >
              services
            </span>
          </h2>
          <p 
            className="text-2xl font-medium"
            style={{ color: '#0E1C2E' }}
          >
            Each rail links to detailed insights and case studies.
          </p>
        </div>
        
        <div className="space-y-6 max-w-4xl mx-auto">
          {rails.map((rail, index) => (
            <a
              key={index}
              href={rail.href}
              className="group block rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden"
              style={{ 
                backgroundColor: rail.bgColor,
                color: rail.textColor
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
              }}
            >
              <div className="flex items-center justify-between relative z-10">
                <div>
                  <div 
                    className="text-3xl md:text-4xl font-black mb-2 group-hover:scale-105 transition-transform"
                    style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                  >
                    {rail.keyword}
                  </div>
                  <div 
                    className="text-lg font-medium opacity-90"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {rail.description}
                  </div>
                </div>
                
                <div className="group-hover:translate-x-2 transition-transform">
                  <svg 
                    className="w-8 h-8" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={3} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                  </svg>
                </div>
              </div>
              
              {/* Subtle pattern overlay */}
              <div 
                className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity"
                style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 12px)'
                }}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}