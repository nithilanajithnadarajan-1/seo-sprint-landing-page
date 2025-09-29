export function MaximalistFooter() {
  const keywordChips = [
    { keyword: "seo sprint", href: "/services/seo-sprint" },
    { keyword: "unlinked mentions", href: "/insights/unlinked-mentions" },
    { keyword: "niche edits", href: "/insights/niche-edits" },
    { keyword: "resource pages", href: "/insights/resource-pages" }
  ];

  return (
    <footer className="py-20 bg-[#0F1115] border-t-2 border-[#8B5CF6]/20">
      <div className="max-w-[1440px] mx-auto px-20">
        {/* Keyword Chips Navigation */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-black text-[#F3F4F6] mb-8 uppercase tracking-wide">
            Keep Exploring
          </h3>
          <nav className="flex flex-wrap justify-center gap-4">
            {keywordChips.map((chip, index) => (
              <a
                key={index}
                href={chip.href}
                className="group relative px-8 py-4 bg-[#151821] border-2 border-white/10 rounded-full transition-all duration-300 hover:border-[#8B5CF6] hover:bg-[#8B5CF6]/10 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:-translate-y-1"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8B5CF6]/20 to-[#22D3EE]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                
                <span className="relative text-[#E5E7EB] group-hover:text-[#8B5CF6] font-bold transition-colors">
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
            <div className="text-3xl font-black text-[#F3F4F6] mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              SEO Sprint
            </div>
            <p className="text-[#E5E7EB] leading-relaxed mb-6">
              24-hour SEO fixes and behavioral nudges for early-stage startups. 
              One PR. Measurable results.
            </p>
            <div className="flex space-x-4">
              <div className="w-3 h-3 bg-[#8B5CF6] rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-[#22D3EE] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="w-3 h-3 bg-[#F97316] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h4 className="font-black text-[#F3F4F6] mb-6 text-xl uppercase tracking-wide">Services</h4>
            <ul className="space-y-4">
              <li>
                <a href="/services/seo-sprint" className="text-[#8B5CF6] hover:text-[#A78BFA] transition-colors font-bold text-lg hover:translate-x-1 inline-block transform transition-transform">
                  SEO Sprint
                </a>
              </li>
              <li>
                <a href="/services/digital-pr-startups" className="text-[#22D3EE] hover:text-[#67E8F9] transition-colors font-bold text-lg hover:translate-x-1 inline-block transform transition-transform">
                  Digital PR
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-[#E5E7EB] hover:text-[#F3F4F6] transition-colors font-medium hover:translate-x-1 inline-block transform transition-transform">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-[#E5E7EB] hover:text-[#F3F4F6] transition-colors font-medium hover:translate-x-1 inline-block transform transition-transform">
                  How it Works
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h4 className="font-black text-[#F3F4F6] mb-6 text-xl uppercase tracking-wide">Resources</h4>
            <ul className="space-y-4">
              <li>
                <a href="/insights/niche-edits" className="text-[#E5E7EB] hover:text-[#F3F4F6] transition-colors font-medium hover:translate-x-1 inline-block transform transition-transform">
                  Niche Edits Guide
                </a>
              </li>
              <li>
                <a href="/insights/unlinked-mentions" className="text-[#E5E7EB] hover:text-[#F3F4F6] transition-colors font-medium hover:translate-x-1 inline-block transform transition-transform">
                  Unlinked Mentions
                </a>
              </li>
              <li>
                <a href="/insights/resource-pages" className="text-[#E5E7EB] hover:text-[#F3F4F6] transition-colors font-medium hover:translate-x-1 inline-block transform transition-transform">
                  Resource Pages
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[#E5E7EB] hover:text-[#F3F4F6] transition-colors font-medium hover:translate-x-1 inline-block transform transition-transform">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h4 className="font-black text-[#F3F4F6] mb-6 text-xl uppercase tracking-wide">Start Now</h4>
            <div className="space-y-4">
              <a 
                href="/services/seo-sprint"
                className="block w-full px-6 py-3 bg-[#8B5CF6] hover:bg-[#7C3AED] text-[#0F1115] font-black rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(139,92,246,0.4)] text-center"
              >
                Start Sprint
              </a>
              <a 
                href="#case-studies"
                className="block w-full px-6 py-3 border-2 border-[#22D3EE] text-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#0F1115] font-bold rounded-xl transition-all duration-200 hover:-translate-y-1 text-center"
              >
                View Cases
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t-2 border-white/10 pt-12 flex flex-col md:flex-row items-center justify-between">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-[#E5E7EB]">
            <p className="font-medium">© 2024 SEO Sprint. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="hover:text-[#F3F4F6] transition-colors">Privacy</a>
              <a href="/terms" className="hover:text-[#F3F4F6] transition-colors">Terms</a>
              <a href="/accessibility" className="hover:text-[#F3F4F6] transition-colors">Accessibility</a>
            </div>
          </div>
          
          <div className="mt-8 md:mt-0 text-[#E5E7EB] font-medium">
            <span className="text-[#8B5CF6]">Built for early-stage startups.</span>{" "}
            Ship faster, rank higher.
          </div>
        </div>
      </div>
    </footer>
  );
}