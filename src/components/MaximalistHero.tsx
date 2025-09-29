import { Button } from "./ui/button";
import { EvidenceCard } from "./EvidenceCard";
import { KeywordCollage } from "./KeywordCollage";

export function MaximalistHero() {
  return (
    <section className="relative min-h-screen bg-[#0F1115] overflow-hidden">
      {/* Keyword Collage Background */}
      <KeywordCollage />
      
      <div className="relative max-w-[1440px] mx-auto px-20 py-28 min-h-screen flex items-center">
        <div className="grid grid-cols-12 gap-12 w-full">
          {/* Left 60% - Content */}
          <div className="col-span-7 space-y-8 z-10 relative">
            <div className="space-y-6">
              <div className="text-sm font-bold text-[#8B5CF6] tracking-[0.2em] uppercase">
                CONSULTING FOR EARLY-STAGE STARTUPS
              </div>
              
              <h1 className="text-8xl font-black text-[#F3F4F6] leading-[0.9] tracking-[-0.02em] max-w-5xl">
                Ship behavioral nudges and on-page{" "}
                <span className="text-[#8B5CF6] font-black" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  SEO
                </span>{" "}
                in 2 weeks.
              </h1>
              
              <p className="text-2xl text-[#E5E7EB] font-medium max-w-2xl leading-relaxed">
                You own the code. One PR. Results in days.
              </p>
            </div>
            
            <div className="space-y-8">
              <Button 
                className="min-h-16 px-12 bg-[#8B5CF6] hover:bg-[#7C3AED] text-[#0F1115] font-black text-xl tracking-wider rounded-2xl transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(139,92,246,0.4)] active:translate-y-0 active:shadow-[0_10px_20px_rgba(139,92,246,0.3)] focus-visible:outline focus-visible:outline-4 focus-visible:outline-[#22D3EE] focus-visible:outline-offset-4"
                aria-label="Start SEO sprint"
              >
                Start 24-hour sprint
              </Button>
              
              <div className="flex items-center space-x-8 text-lg text-[#E5E7EB]">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse"></div>
                  <span className="font-medium">Median merge time 6h</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#22D3EE] rounded-full animate-pulse"></div>
                  <a href="#case-studies" className="hover:text-[#F3F4F6] transition-colors font-medium underline underline-offset-4">
                    Case studies
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right 40% - Evidence Card */}
          <div className="col-span-5 flex justify-center items-center z-10 relative">
            <div className="transform hover:scale-105 transition-transform duration-500">
              <EvidenceCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}