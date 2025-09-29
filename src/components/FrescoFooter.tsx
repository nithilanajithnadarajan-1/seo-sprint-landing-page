export function FrescoFooter() {
  const keywordChips = [
    { keyword: "seo sprint", href: "/services/seo-sprint", color: "#8B5CF6" },
    { keyword: "unlinked mentions", href: "/insights/unlinked-mentions", color: "#B7E7E1" },
    { keyword: "niche edits", href: "/insights/niche-edits", color: "#FF6B6B" },
    { keyword: "resource pages", href: "/insights/resource-pages", color: "#F8D6C6" }
  ];

  return (
    <footer className="py-20 border-t-4" style={{ backgroundColor: '#0E1C2E', borderColor: '#8B5CF6' }}>
      <div className="max-w-7xl mx-auto px-8">
        {/* Keyword Chips Navigation */}
        <div className="text-center mb-16">
          <h3 
            className="text-2xl font-black mb-8 uppercase tracking-wide"
            style={{ 
              color: '#FBFBFB',
              fontFamily: 'Space Grotesk, sans-serif'
            }}
          >
            Deep links to explore
          </h3>
          <nav className="flex flex-wrap justify-center gap-4">
            {keywordChips.map((chip, index) => (
              <a
                key={index}
                href={chip.href}
                className="group relative px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 border-3"
                style={{
                  backgroundColor: `${chip.color}20`,
                  borderColor: chip.color,
                  color: chip.color
                }}
              >
                {/* Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-sm"
                  style={{ backgroundColor: chip.color }}
                />
                
                <span 
                  className="relative font-black text-lg"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  {chip.keyword}
                </span>
              </a>
            ))}
          </nav>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="col-span-1">
            <div 
              className="text-3xl font-black mb-6"
              style={{ 
                color: '#FBFBFB',
                fontFamily: 'Fraunces, serif'
              }}
            >
              <span style={{ fontStyle: 'italic' }}>Aux</span>
              <span style={{ fontFamily: 'Space Grotesk, sans-serif' }}>il</span>
            </div>
            <p 
              className="leading-relaxed mb-6 font-medium"
              style={{ color: '#CDB7FF' }}
            >
              24-hour SEO fixes and behavioral nudges for early-stage startups. 
              One PR. Measurable results.
            </p>
            <div className="flex space-x-4">
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#8B5CF6' }} />
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#FF6B6B', animationDelay: '0.5s' }} />
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: '#B2F75E', animationDelay: '1s' }} />
            </div>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h4 
              className="font-black mb-6 text-xl uppercase tracking-wide"
              style={{ 
                color: '#FBFBFB',
                fontFamily: 'Space Grotesk, sans-serif'
              }}
            >
              Services
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="/services/seo-sprint" 
                  className="font-bold text-lg hover:translate-x-1 inline-block transform transition-all duration-200"
                  style={{ 
                    color: '#8B5CF6',
                    fontFamily: 'Space Grotesk, sans-serif'
                  }}
                >
                  SEO Sprint
                </a>
              </li>
              <li>
                <a 
                  href="/services/digital-pr-startups" 
                  className="font-bold text-lg hover:translate-x-1 inline-block transform transition-all duration-200"
                  style={{ 
                    color: '#FF6B6B',
                    fontFamily: 'Space Grotesk, sans-serif'
                  }}
                >
                  Digital PR
                </a>
              </li>
              <li>
                <a 
                  href="#case-studies" 
                  className="font-medium hover:translate-x-1 inline-block transform transition-all duration-200"
                  style={{ color: '#CDB7FF' }}
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a 
                  href="#how-it-works" 
                  className="font-medium hover:translate-x-1 inline-block transform transition-all duration-200"
                  style={{ color: '#CDB7FF' }}
                >
                  How it Works
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h4 
              className="font-black mb-6 text-xl uppercase tracking-wide"
              style={{ 
                color: '#FBFBFB',
                fontFamily: 'Space Grotesk, sans-serif'
              }}
            >
              Resources
            </h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="/insights/niche-edits" 
                  className="font-medium hover:translate-x-1 inline-block transform transition-all duration-200"
                  style={{ color: '#CDB7FF' }}
                >
                  Niche Edits Guide
                </a>
              </li>
              <li>
                <a 
                  href="/insights/unlinked-mentions" 
                  className="font-medium hover:translate-x-1 inline-block transform transition-all duration-200"
                  style={{ color: '#CDB7FF' }}
                >
                  Unlinked Mentions
                </a>
              </li>
              <li>
                <a 
                  href="/insights/resource-pages" 
                  className="font-medium hover:translate-x-1 inline-block transform transition-all duration-200"
                  style={{ color: '#CDB7FF' }}
                >
                  Resource Pages
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="font-medium hover:translate-x-1 inline-block transform transition-all duration-200"
                  style={{ color: '#CDB7FF' }}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h4 
              className="font-black mb-6 text-xl uppercase tracking-wide"
              style={{ 
                color: '#FBFBFB',
                fontFamily: 'Space Grotesk, sans-serif'
              }}
            >
              Start Now
            </h4>
            <div className="space-y-4">
              <a 
                href="/services/seo-sprint"
                className="block w-full px-6 py-3 font-black rounded-xl transition-all duration-200 hover:scale-105 hover:shadow-xl text-center"
                style={{
                  backgroundColor: '#8B5CF6',
                  color: '#FBFBFB',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}
              >
                Start Sprint
              </a>
              <a 
                href="#case-studies"
                className="block w-full px-6 py-3 border-2 font-bold rounded-xl transition-all duration-200 hover:scale-105 text-center"
                style={{
                  borderColor: '#B2F75E',
                  color: '#B2F75E',
                  fontFamily: 'Space Grotesk, sans-serif'
                }}
              >
                View Cases
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t-2 pt-12 flex flex-col md:flex-row items-center justify-between" style={{ borderColor: '#CDB7FF' }}>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8" style={{ color: '#CDB7FF' }}>
            <p className="font-medium">© 2024 Auxil. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-white transition-colors">Terms</a>
              <a href="/accessibility" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
          
          <div className="mt-8 md:mt-0 font-medium" style={{ color: '#CDB7FF' }}>
            <span style={{ color: '#8B5CF6' }}>Built for early-stage startups.</span>{" "}
            Ship faster, rank higher.
          </div>
        </div>
      </div>
    </footer>
  );
}