import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="w-full border-b border-white/6 bg-[#0F1115]">
      <div className="max-w-[1440px] mx-auto px-20 py-6 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-xl font-black text-[#F3F4F6]">SEO Sprint</div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#case-studies" className="text-[#E5E7EB] hover:text-[#F3F4F6] transition-colors">
              Case Studies
            </a>
            <a href="#how-it-works" className="text-[#E5E7EB] hover:text-[#F3F4F6] transition-colors">
              How the 24-hour sprint works
            </a>
            <a href="#faq" className="text-[#E5E7EB] hover:text-[#F3F4F6] transition-colors">
              FAQ
            </a>
            <a href="/services/seo-sprint" className="text-[#8B5CF6] hover:text-[#A78BFA] transition-colors font-medium">
              SEO Sprint
            </a>
            <a href="/services/digital-pr-startups" className="text-[#8B5CF6] hover:text-[#A78BFA] transition-colors font-medium">
              Digital PR
            </a>
          </nav>
        </div>
        
        <Button 
          className="min-h-12 px-5 bg-[#8B5CF6] hover:bg-[#7C3AED] text-[#0F1115] font-bold tracking-wider rounded-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.35)] active:translate-y-0 active:shadow-[0_6px_16px_rgba(0,0,0,0.25)]"
          aria-label="Start SEO sprint"
        >
          Questions
        </Button>
      </div>
    </header>
  );
}