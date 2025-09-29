import { useEffect, useRef } from 'react';

export function RailSection() {
  const railsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rails = entry.target.querySelectorAll('.rail-bar');
            rails.forEach((rail, index) => {
              setTimeout(() => {
                rail.classList.add('animate-in');
              }, index * 150);
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (railsRef.current) {
      observer.observe(railsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const rails = [
    {
      keyword: "seo sprint",
      description: "24-hour fixes",
      href: "/services/seo-sprint",
      direction: "left"
    },
    {
      keyword: "unlinked mentions", 
      description: "reclaim brand links",
      href: "/insights/unlinked-mentions",
      direction: "right"
    },
    {
      keyword: "niche edits",
      description: "contextual placements", 
      href: "/insights/niche-edits",
      direction: "left"
    },
    {
      keyword: "resource pages",
      description: "linkable assets",
      href: "/insights/resource-pages", 
      direction: "right"
    },
    {
      keyword: "digital pr",
      description: "reactive + data study",
      href: "/services/digital-pr-startups",
      direction: "left"
    }
  ];

  return (
    <section className="py-32 bg-[#0F1115]">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-12 gap-16 items-center">
          {/* Left Content */}
          <div className="col-span-5">
            <h2 className="text-6xl font-black text-[#F3F4F6] leading-tight mb-6">
              The{" "}
              <span className="text-[#8B5CF6]" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
                #1
              </span>{" "}
              sprint for early-stage teams.
            </h2>
            <p className="text-xl text-[#E5E7EB] font-medium leading-relaxed">
              One pull request. Measurable results.
            </p>
          </div>
          
          {/* Right Rails */}
          <div ref={railsRef} className="col-span-7 space-y-4">
            {rails.map((rail, index) => (
              <a
                key={index}
                href={rail.href}
                className={`rail-bar block bg-[#151821] border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:bg-[#1A1F2E] hover:border-[#8B5CF6]/30 hover:shadow-[0_10px_40px_rgba(139,92,246,0.2)] hover:translate-x-3 group transform ${rail.direction === 'right' ? 'translate-x-16 opacity-0' : '-translate-x-16 opacity-0'}`}
                style={{
                  transitionDelay: '0ms'
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-black text-[#F3F4F6] group-hover:text-[#8B5CF6] transition-colors mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {rail.keyword}
                    </div>
                    <div className="text-[#E5E7EB] font-medium">
                      {rail.description}
                    </div>
                  </div>
                  <div className="text-[#8B5CF6] group-hover:translate-x-2 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .rail-bar.animate-in {
          transform: translateX(0) !important;
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
}