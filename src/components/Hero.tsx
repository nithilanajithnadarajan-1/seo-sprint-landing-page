import { Button } from "./ui/button";
import { EvidenceCard } from "./EvidenceCard";

export function Hero() {
  return (
    <section className="relative min-h-[800px] bg-[#0F1115] overflow-hidden">
      {/* Background gradient mesh - right 40% */}
      <div 
        className="absolute inset-0 opacity-100"
        style={{
          background: `
            radial-gradient(60% 50% at 85% 20%, rgba(139,92,246,0.25), rgba(139,92,246,0) 60%),
            radial-gradient(40% 35% at 60% 80%, rgba(34,211,238,0.18), rgba(34,211,238,0) 60%)
          `
        }}
      />
      
      <div className="relative max-w-[1440px] mx-auto px-20 py-28 grid grid-cols-12 gap-6 items-center">
        {/* Left content - 7 columns */}
        <div className="col-span-7 space-y-6">
          <div className="space-y-4">
            <div className="text-sm font-medium text-[#8B5CF6] tracking-wide uppercase">
              CONSULTING FOR EARLY-STAGE STARTUPS
            </div>
            
            <h1 className="text-7xl font-black text-[#F3F4F6] leading-[1.05] tracking-[-0.01em] max-w-4xl">
              Ship behavioral nudges and on-page <span className="text-[#8B5CF6]">SEO</span> in 2 weeks.
            </h1>
            
            <p className="text-xl text-[#E5E7EB] font-medium max-w-lg">
              You own the code. One PR. Results in days.
            </p>
          </div>
          
          <div className="space-y-4">
            <Button 
              className="min-h-12 px-6 bg-[#8B5CF6] hover:bg-[#7C3AED] text-[#0F1115] font-bold tracking-wider rounded-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.35)] active:translate-y-0 active:shadow-[0_6px_16px_rgba(0,0,0,0.25)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-[#22D3EE] focus-visible:outline-offset-2"
              aria-label="Start SEO sprint"
            >
              Start 24-hour sprint
            </Button>
            
            <div className="flex items-center space-x-6 text-sm text-[#E5E7EB]">
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-[#8B5CF6] rounded-full"></div>
                <span>Median merge time 6h</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-1 h-1 bg-[#8B5CF6] rounded-full"></div>
                <a href="#case-studies" className="hover:text-[#F3F4F6] transition-colors">Case studies</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right visual - 5 columns */}
        <div className="col-span-5 flex justify-center">
          <EvidenceCard />
        </div>
      </div>
    </section>
  );
}