export function MiniHubCards() {
  const cards = [
    {
      title: "SEO Sprint",
      keyword: "seo sprint",
      description: "24-hour fixes, one PR.",
      href: "/services/seo-sprint"
    },
    {
      title: "Unlinked Mentions", 
      keyword: "unlinked mentions",
      description: "Find, request, reclaim.",
      href: "/insights/unlinked-mentions"
    },
    {
      title: "Niche Edits",
      keyword: "niche edits", 
      description: "Contextual links that stick.",
      href: "/insights/niche-edits"
    },
    {
      title: "Resource Pages",
      keyword: "resource pages",
      description: "Prospect lists without spam.",
      href: "/insights/resource-pages"
    }
  ];

  return (
    <section className="py-28 bg-[#0F1115]">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-[#F3F4F6] mb-4">
            Validated keyword strategies
          </h2>
          <p className="text-xl text-[#E5E7EB] max-w-2xl mx-auto">
            Proven approaches backed by your own data
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <a 
              key={index}
              href={card.href}
              className="block bg-[#151821] border border-white/6 rounded-2xl p-6 transition-all duration-200 hover:shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 group"
            >
              <div className="mb-4">
                <div className="inline-flex items-center px-3 py-1 bg-[rgba(139,92,246,0.12)] border border-[rgba(139,92,246,0.35)] rounded-full">
                  <span className="text-xs font-bold text-[#8B5CF6]">
                    Keyword: {card.keyword}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl font-black text-[#F3F4F6] mb-2 group-hover:text-[#8B5CF6] transition-colors">
                {card.title}
              </h3>
              
              <p className="text-[#E5E7EB] leading-relaxed">
                {card.description}
              </p>
              
              <div className="mt-4 text-sm text-[#8B5CF6] font-medium group-hover:translate-x-1 transition-transform">
                Learn more →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}