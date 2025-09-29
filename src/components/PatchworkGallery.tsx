import { useState } from 'react';

export function PatchworkGallery() {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);
  
  const tiles = [
    {
      type: 'poster',
      title: 'SEO SPRINT',
      font: 'Space Grotesk, sans-serif',
      style: 'stroke-only',
      href: '/services/seo-sprint',
      screenshot: 'PR diff showing title/meta changes'
    },
    {
      type: 'screenshot',
      title: 'Lighthouse Score',
      description: '67 → 92 Performance',
      href: '#case-studies'
    },
    {
      type: 'poster',
      title: 'NICHE\nEDITS',
      font: 'Archivo Black, sans-serif',
      style: 'stacked',
      href: '/insights/niche-edits',
      screenshot: 'Contextual link placement examples'
    },
    {
      type: 'screenshot',
      title: 'A11y Contrast',
      description: 'WCAG AA compliance pass',
      href: '#case-studies'
    },
    {
      type: 'poster',
      title: 'UNLINKED\nMENTIONS',
      font: 'IBM Plex Mono, monospace',
      style: 'underlined',
      href: '/insights/unlinked-mentions',
      screenshot: 'Brand mention tracking dashboard'
    },
    {
      type: 'screenshot',
      title: 'Title/Meta Fix',
      description: 'Before/after optimization',
      href: '#case-studies'
    },
    {
      type: 'poster',
      title: 'RESOURCE\nPAGES',
      font: 'DM Serif Display, serif',
      style: 'checkered',
      href: '/insights/resource-pages',
      screenshot: 'Linkable asset examples'
    },
    {
      type: 'screenshot',
      title: 'GSC CTR Data',
      description: '+76% improvement tracking',
      href: '#case-studies'
    },
    {
      type: 'poster',
      title: 'DIGITAL PR',
      font: 'Inter, sans-serif',
      style: 'diagonal-gradient',
      href: '/services/digital-pr-startups',
      screenshot: 'PR campaign results'
    },
    {
      type: 'screenshot',
      title: 'Internal Links',
      description: 'Site architecture mapping',
      href: '#case-studies'
    },
    {
      type: 'poster',
      title: 'SEO\nSPRINT',
      font: 'Space Grotesk, sans-serif',
      style: 'bold-fill',
      href: '/services/seo-sprint',
      screenshot: '24-hour timeline visualization'
    },
    {
      type: 'screenshot',
      title: 'UX Nudges',
      description: 'Behavioral improvements',
      href: '#case-studies'
    }
  ];

  return (
    <section className="py-32 bg-[#0F1115]">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="text-center mb-20">
          <h2 className="text-7xl font-black text-[#F3F4F6] mb-6 leading-tight">
            Work &{" "}
            <span className="text-[#22D3EE]" style={{ fontFamily: 'DM Serif Display, serif' }}>
              Methods
            </span>
          </h2>
        </div>
        
        <div className="grid grid-cols-4 gap-6">
          {tiles.map((tile, index) => (
            <a
              key={index}
              href={tile.href}
              className="aspect-square bg-[#151821] border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-[#8B5CF6]/50 hover:shadow-[0_20px_40px_rgba(139,92,246,0.2)] hover:-translate-y-1 group overflow-hidden relative"
              onMouseEnter={() => setHoveredTile(index)}
              onMouseLeave={() => setHoveredTile(null)}
            >
              {tile.type === 'poster' ? (
                <div className="h-full flex items-center justify-center relative">
                  {/* Poster Content */}
                  <div 
                    className={`text-center transition-opacity duration-300 ${hoveredTile === index ? 'opacity-0' : 'opacity-100'}`}
                  >
                    <div 
                      className={`font-black text-2xl leading-tight ${getPosterStyle(tile.style)}`}
                      style={{ fontFamily: tile.font }}
                    >
                      {tile.title}
                    </div>
                  </div>
                  
                  {/* Screenshot Overlay */}
                  <div 
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hoveredTile === index ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#8B5CF6]/20 rounded-lg mb-4 mx-auto flex items-center justify-center">
                        <div className="text-[#8B5CF6] text-2xl">📊</div>
                      </div>
                      <p className="text-sm text-[#E5E7EB] font-medium">
                        {tile.screenshot}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-[#22D3EE]/20 rounded-xl mb-4 flex items-center justify-center">
                    <div className="text-[#22D3EE] text-3xl">📈</div>
                  </div>
                  <h3 className="font-black text-lg text-[#F3F4F6] mb-2 group-hover:text-[#22D3EE] transition-colors">
                    {tile.title}
                  </h3>
                  <p className="text-sm text-[#E5E7EB]">
                    {tile.description}
                  </p>
                </div>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function getPosterStyle(style: string): string {
  switch (style) {
    case 'stroke-only':
      return 'text-transparent bg-clip-text bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] [-webkit-text-stroke:2px_#8B5CF6]';
    case 'stacked':
      return 'text-[#F97316] tracking-tighter';
    case 'underlined':
      return 'text-[#22D3EE] [text-decoration:underline] [text-decoration-thickness:4px] [text-underline-offset:8px]';
    case 'checkered':
      return 'text-[#F3F4F6] [background-image:repeating-linear-gradient(45deg,transparent,transparent_2px,rgba(139,92,246,0.3)_2px,rgba(139,92,246,0.3)_4px)] bg-clip-text';
    case 'diagonal-gradient':
      return 'text-transparent bg-clip-text bg-gradient-to-br from-[#8B5CF6] via-[#22D3EE] to-[#F97316] transform rotate-12';
    case 'bold-fill':
      return 'text-[#8B5CF6] bg-[#8B5CF6]/10 px-2 py-1 rounded';
    default:
      return 'text-[#F3F4F6]';
  }
}