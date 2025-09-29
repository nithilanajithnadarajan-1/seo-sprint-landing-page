import { Button } from "./ui/button";

export function MaximalistHeader() {
  return (
    <header className="w-full border-b-2 border-[#8B5CF6]/20 bg-[#0F1115] sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-[1440px] mx-auto px-20 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-12">
          {/* Logo */}
          <div className="text-3xl font-black text-[#F3F4F6] relative group">
            <span style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              SEO
            </span>
            <span className="text-[#8B5CF6]" style={{ fontFamily: 'Archivo Black, sans-serif' }}>
              Sprint
            </span>
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B5CF6]/20 to-[#22D3EE]/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </div>
          
          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#case-studies" className="text-[#E5E7EB] hover:text-[#8B5CF6] transition-colors font-bold text-lg hover:-translate-y-0.5 transform transition-all duration-200">
              Case Studies
            </a>
            <a href="#how-it-works" className="text-[#E5E7EB] hover:text-[#22D3EE] transition-colors font-bold text-lg hover:-translate-y-0.5 transform transition-all duration-200">
              24-hour Sprint
            </a>
            <a href="#faq" className="text-[#E5E7EB] hover:text-[#F97316] transition-colors font-bold text-lg hover:-translate-y-0.5 transform transition-all duration-200">
              FAQ
            </a>
            
            {/* Keyword Links */}
            <div className="flex items-center space-x-6 ml-8 pl-8 border-l-2 border-white/10">
              <a href="/services/seo-sprint" className="relative group">
                <span className="text-[#8B5CF6] hover:text-[#A78BFA] transition-colors font-black text-lg">
                  SEO Sprint
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8B5CF6] group-hover:w-full transition-all duration-300" />
              </a>
              <a href="/services/digital-pr-startups" className="relative group">
                <span className="text-[#22D3EE] hover:text-[#67E8F9] transition-colors font-black text-lg">
                  Digital PR
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#22D3EE] group-hover:w-full transition-all duration-300" />
              </a>
            </div>
          </nav>
        </div>
        
        {/* CTA Button */}
        <Button 
          className="min-h-14 px-8 bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] hover:from-[#7C3AED] hover:to-[#0891B2] text-[#0F1115] font-black tracking-wider rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(139,92,246,0.4)] active:translate-y-0 active:shadow-[0_5px_15px_rgba(139,92,246,0.3)] relative overflow-hidden group"
          aria-label="Start SEO sprint"
        >
          {/* Button shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span className="relative z-10 text-lg">
            Questions
          </span>
        </Button>
        
        {/* Mobile Menu Button */}
        <button className="lg:hidden text-[#F3F4F6] hover:text-[#8B5CF6] transition-colors">
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