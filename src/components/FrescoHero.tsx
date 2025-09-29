import { useEffect, useRef, useState } from 'react';

export function FrescoHero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [needsStroke, setNeedsStroke] = useState(false);
  const [showShadowPlate, setShowShadowPlate] = useState(false);
  
  useEffect(() => {
    // Adaptive contrast checker - simple heuristic based on scroll position
    const checkContrast = () => {
      const scrollY = window.scrollY;
      setNeedsStroke(scrollY % 600 > 300);
    };
    
    // Shadow plate visibility based on intersection with busy background areas
    const checkShadowPlate = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        // Show shadow plate when hero overlaps with middle section of fresco
        setShowShadowPlate(rect.top < viewportHeight * 0.3 && rect.bottom > viewportHeight * 0.7);
      }
    };
    
    const handleScroll = () => {
      checkContrast();
      checkShadowPlate();
    };
    
    // Check every 300ms for contrast adaptation
    const contrastInterval = setInterval(checkContrast, 300);
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(contrastInterval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center" style={{ background: 'transparent' }}>
      {/* Shadow Plate */}
      <div 
        className={`shadow-plate absolute inset-4 z-0 ${showShadowPlate ? '' : 'hidden'}`}
      />
      
      <div ref={heroRef} className="relative z-10 text-center max-w-6xl px-8">
        {/* Hero Title - Dual Style */}
        <h1 className={`hero-title mb-8 ${needsStroke ? 'stroke' : ''}`}>
          <div className="block">
            {/* Fraunces Italic Part */}
            <span 
              className="block text-8xl md:text-9xl lg:text-[128px] leading-none mb-4"
              style={{ 
                fontFamily: 'Fraunces, serif',
                fontStyle: 'italic',
                fontWeight: 900,
                color: '#F8D6C6',
                textShadow: needsStroke ? undefined : '0 4px 8px rgba(14, 28, 46, 0.1)'
              }}
            >
              Shipping
            </span>
            
            {/* Space Grotesk Part */}
            <span 
              className="block text-7xl md:text-8xl lg:text-[112px] leading-tight"
              style={{ 
                fontFamily: 'Space Grotesk, sans-serif',
                fontWeight: 900,
                color: '#0E1C2E',
                letterSpacing: '-0.02em'
              }}
            >
              SEO sprints in 2 weeks
            </span>
          </div>
        </h1>
        
        {/* Subheading */}
        <p 
          className="text-2xl md:text-3xl mb-12 font-medium leading-relaxed"
          style={{ color: '#0E1C2E' }}
        >
          You own the code. One PR. Results in days.
        </p>
        
        {/* CTA Button */}
        <a 
          href="/services/seo-sprint"
          aria-label="Start SEO sprint"
          className="inline-flex items-center px-12 py-6 text-xl font-black rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_20px_40px_rgba(139,92,246,0.3)] active:scale-95"
          style={{ 
            backgroundColor: '#8B5CF6',
            color: '#0E1C2E',
            fontFamily: 'Space Grotesk, sans-serif'
          }}
        >
          Start 24-hour sprint
          <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
        
        {/* Proof Points */}
        <div className="flex items-center justify-center space-x-8 mt-12 text-lg font-medium" style={{ color: '#0E1C2E' }}>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#B2F75E' }}></div>
            <span>Median merge time 6h</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#FF6B6B' }}></div>
            <a href="#case-studies" className="hover:underline font-bold">
              Case studies
            </a>
          </div>
        </div>
      </div>
      
      {/* Evidence Card - Positioned Absolutely */}
      <div className="absolute bottom-20 right-20 z-10 hidden lg:block">
        <div 
          className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border-2 transform hover:scale-105 transition-all duration-300"
          style={{ borderColor: '#CDB7FF' }}
        >
          <div className="text-center">
            <div className="flex items-center justify-between mb-6">
              <div className="text-center">
                <div className="text-sm font-bold text-gray-500 mb-1">BEFORE</div>
                <div className="text-3xl font-black" style={{ color: '#FF6B6B' }}>67</div>
                <div className="text-xs text-gray-500">SEO Score</div>
              </div>
              <div className="mx-6">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-gray-500 mb-1">AFTER</div>
                <div className="text-3xl font-black" style={{ color: '#B2F75E' }}>93</div>
                <div className="text-xs text-gray-500">SEO Score</div>
              </div>
            </div>
            
            {/* Delta Chip */}
            <div 
              className="inline-flex items-center px-4 py-2 rounded-full text-sm font-black"
              style={{ 
                backgroundColor: '#FF6B6B',
                color: '#FBFBFB'
              }}
            >
              +39% improvement (demo)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}