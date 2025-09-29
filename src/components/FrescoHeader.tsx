export function FrescoHeader() {
  return (
    <header 
      className="w-full border-b-4 sticky top-0 z-50 backdrop-blur-sm"
      style={{ 
        backgroundColor: 'rgba(251, 251, 251, 0.95)',
        borderColor: '#8B5CF6'
      }}
    >
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <div className="text-3xl font-black relative group">
            <span 
              style={{ 
                fontFamily: 'Fraunces, serif',
                fontStyle: 'italic',
                color: '#8B5CF6'
              }}
            >
              Aux
            </span>
            <span 
              style={{ 
                fontFamily: 'Space Grotesk, sans-serif',
                color: '#0E1C2E'
              }}
            >
              il
            </span>
            {/* Glow effect */}
            <div 
              className="absolute inset-0 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
              style={{ background: 'linear-gradient(45deg, #8B5CF6, #FF6B6B, #B2F75E)' }}
            />
          </div>
          
          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a 
              href="#case-studies" 
              className="font-bold text-lg hover:-translate-y-0.5 transform transition-all duration-200"
              style={{ 
                color: '#0E1C2E',
                fontFamily: 'Space Grotesk, sans-serif'
              }}
            >
              Case Studies
            </a>
            <a 
              href="#24-hour-sprint" 
              className="font-bold text-lg hover:-translate-y-0.5 transform transition-all duration-200"
              style={{ 
                color: '#0E1C2E',
                fontFamily: 'Space Grotesk, sans-serif'
              }}
            >
              24-hour Sprint
            </a>
            <a 
              href="#faq" 
              className="font-bold text-lg hover:-translate-y-0.5 transform transition-all duration-200"
              style={{ 
                color: '#0E1C2E',
                fontFamily: 'Space Grotesk, sans-serif'
              }}
            >
              FAQ
            </a>
            
            {/* Keyword Links */}
            <div className="flex items-center space-x-6 ml-8 pl-8 border-l-4" style={{ borderColor: '#CDB7FF' }}>
              <a href="/services/seo-sprint" className="relative group">
                <span 
                  className="font-black text-lg transition-colors"
                  style={{ 
                    color: '#8B5CF6',
                    fontFamily: 'Space Grotesk, sans-serif'
                  }}
                >
                  SEO Sprint
                </span>
                <div 
                  className="absolute -bottom-1 left-0 w-0 h-1 group-hover:w-full transition-all duration-300 rounded"
                  style={{ backgroundColor: '#8B5CF6' }}
                />
              </a>
              <a href="/services/digital-pr-startups" className="relative group">
                <span 
                  className="font-black text-lg transition-colors"
                  style={{ 
                    color: '#FF6B6B',
                    fontFamily: 'Space Grotesk, sans-serif'
                  }}
                >
                  Digital PR
                </span>
                <div 
                  className="absolute -bottom-1 left-0 w-0 h-1 group-hover:w-full transition-all duration-300 rounded"
                  style={{ backgroundColor: '#FF6B6B' }}
                />
              </a>
            </div>
          </nav>
        </div>
        
        {/* CTA Button */}
        <a
          href="/services/seo-sprint"
          className="relative min-h-14 px-8 py-3 font-black tracking-wider rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95 overflow-hidden group"
          style={{
            background: 'linear-gradient(45deg, #8B5CF6, #FF6B6B, #B2F75E)',
            color: '#FBFBFB',
            fontFamily: 'Space Grotesk, sans-serif'
          }}
        >
          {/* Button shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span className="relative z-10 text-lg">
            Start Sprint
          </span>
        </a>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden transition-colors"
          style={{ color: '#0E1C2E' }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
    </header>
  );
}