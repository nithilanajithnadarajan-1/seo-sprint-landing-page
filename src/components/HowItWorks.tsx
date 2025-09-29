import { Button } from "./ui/button";

export function HowItWorks() {
  const steps = [
    {
      icon: "🔍",
      title: "Diagnose",
      description: "Crawl, pick OEC, set guardrails."
    },
    {
      icon: "⚡",
      title: "Implement", 
      description: "UX nudges + on-page SEO as one PR."
    },
    {
      icon: "📊",
      title: "Measure",
      description: "Compare 14-day CTR windows, rollback ready."
    }
  ];

  return (
    <section id="how-it-works" className="py-28 bg-[#0F1115]">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-[#F3F4F6] mb-4">
            How the <span className="text-[#8B5CF6]">SEO sprint</span> works
          </h2>
        </div>
        
        <div className="grid grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-[#151821] border border-white/6 rounded-2xl p-6 transition-all duration-200 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:-translate-y-0.5"
            >
              <div className="text-2xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-black text-[#F3F4F6] mb-2">{step.title}</h3>
              <p className="text-[#E5E7EB] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center items-center space-x-6">
          <Button 
            className="min-h-12 px-6 bg-[#8B5CF6] hover:bg-[#7C3AED] text-[#0F1115] font-bold tracking-wider rounded-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.35)] active:translate-y-0 active:shadow-[0_6px_16px_rgba(0,0,0,0.25)]"
            aria-label="Start SEO sprint"
          >
            Start 24-hour sprint
          </Button>
          <a 
            href="#case-studies" 
            className="text-[#8B5CF6] hover:text-[#A78BFA] transition-colors font-medium"
          >
            See 90-sec teardown
          </a>
        </div>
      </div>
    </section>
  );
}