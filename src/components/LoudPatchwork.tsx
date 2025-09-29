import { useState } from 'react';

export function LoudPatchwork() {
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);
  
  const tiles = [
    // Poster tiles with wild treatments
    {
      type: 'poster',
      keyword: 'SEO SPRINT',
      treatment: 'stroke-only',
      font: 'Space Grotesk, sans-serif',
      color: '#8B5CF6',
      href: '/services/seo-sprint',
      proof: 'PR diff showing title/meta optimization'
    },
    {
      type: 'proof',
      title: 'Lighthouse 67→93',
      description: 'Performance boost',
      icon: '⚡',
      color: '#B2F75E',
      href: '#case-studies'
    },
    {
      type: 'poster',
      keyword: 'NICHE\nEDITS',
      treatment: 'stacked',
      font: 'Archivo Black, sans-serif', 
      color: '#FF6B6B',
      href: '/insights/niche-edits',
      proof: 'Contextual link placement examples'
    },
    {
      type: 'proof',
      title: 'A11y Pass',
      description: 'WCAG AA compliance',
      icon: '♿',
      color: '#CDB7FF',
      href: '#case-studies'
    },
    {
      type: 'poster',
      keyword: 'UNLINKED\nMENTIONS',
      treatment: 'underlined',
      font: 'IBM Plex Mono, monospace',
      color: '#B7E7E1', 
      href: '/insights/unlinked-mentions',
      proof: 'Brand mention tracking dashboard'
    },
    {
      type: 'proof',
      title: 'Title/Meta Fix', 
      description: 'Before/after optimization',
      icon: '📝',
      color: '#F8D6C6',
      href: '#case-studies'
    },
    {
      type: 'poster',
      keyword: 'RESOURCE\nPAGES',
      treatment: 'checkered',
      font: 'Fraunces, serif',
      color: '#0E1C2E',
      href: '/insights/resource-pages',
      proof: 'Linkable asset gallery'
    },
    {
      type: 'proof',
      title: 'GSC CTR Data',
      description: '+76% improvement tracking', 
      icon: '📊',
      color: '#8B5CF6',
      href: '#case-studies'
    },
    {
      type: 'poster',
      keyword: 'DIGITAL\nPR',
      treatment: 'diagonal-gradient',
      font: 'Fraunces, serif',
      color: '#FF6B6B',
      href: '/services/digital-pr-startups',
      proof: 'PR campaign case studies'
    },
    {
      type: 'proof',
      title: 'Internal Links',
      description: 'Site architecture mapping',
      icon: '🔗', 
      color: '#B2F75E',
      href: '#case-studies'
    },
    {
      type: 'poster',
      keyword: 'SEO\nSPRINT',
      treatment: 'bold-fill',
      font: 'Space Grotesk, sans-serif',
      color: '#CDB7FF',
      href: '/services/seo-sprint',
      proof: '24-hour timeline visualization'
    },
    {
      type: 'proof',
      title: 'Behavioral Nudges',
      description: 'UX improvements',
      icon: '🎯',
      color: '#F8D6C6', 
      href: '#case-studies'
    }
  ];

  const getTreatmentStyles = (treatment: string, color: string) => {
    switch (treatment) {
      case 'stroke-only':
        return {
          WebkitTextStroke: `3px ${color}`,
          color: 'transparent',
          fontWeight: 900
        };
      case 'stacked':
        return {
          color: color,
          fontWeight: 900,
          letterSpacing: '-0.02em',
          lineHeight: 0.8
        };
      case 'underlined':
        return {
          color: color,
          fontWeight: 700,
          textDecoration: 'underline',
          textDecorationThickness: '4px',
          textUnderlineOffset: '8px',
          letterSpacing: '0.06em'
        };
      case 'checkered':
        return {
          color: color,
          fontWeight: 900,
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(139,92,246,0.3) 2px, rgba(139,92,246,0.3) 4px)',
          WebkitBackgroundClip: 'text'
        };
      case 'diagonal-gradient':
        return {
          background: `linear-gradient(45deg, ${color}, #8B5CF6, #B2F75E)`,
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          fontWeight: 900,
          fontStyle: 'italic'
        };
      case 'bold-fill':
        return {
          color: '#0E1C2E',
          backgroundColor: `${color}40`,
          padding: '8px 12px',
          borderRadius: '12px',
          fontWeight: 900
        };
      default:
        return { color: color, fontWeight: 700 };
    }
  };

  return (
    <section className="py-24" style={{ backgroundColor: '#FBFBFB' }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 
            className="text-6xl md:text-7xl font-black leading-tight mb-6"
            style={{ 
              fontFamily: 'Fraunces, serif',
              color: '#0E1C2E'
            }}
          >
            Visual{" "}
            <span 
              style={{ 
                fontFamily: 'Archivo Black, sans-serif',
                color: '#FF6B6B'
              }}
            >
              proof
            </span>
          </h2>
          <p 
            className="text-2xl font-medium"
            style={{ color: '#0E1C2E' }}
          >
            Service art that reveals case studies on hover.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tiles.map((tile, index) => (
            <a
              key={index}
              href={tile.href}
              className="aspect-square bg-white rounded-3xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl group relative overflow-hidden border-2"
              style={{ borderColor: tile.color }}
              onMouseEnter={() => setHoveredTile(index)}
              onMouseLeave={() => setHoveredTile(null)}
            >
              {tile.type === 'poster' ? (
                <div className="h-full flex items-center justify-center text-center relative">
                  {/* Poster Content */}
                  <div 
                    className={`transition-opacity duration-300 ${hoveredTile === index ? 'opacity-0' : 'opacity-100'}`}
                  >
                    <div 
                      className="text-xl md:text-2xl leading-tight"
                      style={{
                        fontFamily: tile.font,
                        ...getTreatmentStyles(tile.treatment, tile.color)
                      }}
                    >
                      {tile.keyword}
                    </div>
                  </div>
                  
                  {/* Proof Overlay */}
                  <div 
                    className={`absolute inset-0 flex flex-col items-center justify-center text-center p-4 transition-opacity duration-300 ${hoveredTile === index ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <div 
                      className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center text-2xl"
                      style={{ backgroundColor: `${tile.color}20` }}
                    >
                      📊
                    </div>
                    <p 
                      className="text-sm font-bold"
                      style={{ color: tile.color }}
                    >
                      {tile.proof}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div 
                    className="w-16 h-16 rounded-2xl mb-4 flex items-center justify-center text-2xl"
                    style={{ backgroundColor: `${tile.color}20` }}
                  >
                    {tile.icon}
                  </div>
                  <h3 
                    className="font-black text-lg mb-2 group-hover:scale-110 transition-transform"
                    style={{ 
                      color: tile.color,
                      fontFamily: 'Space Grotesk, sans-serif'
                    }}
                  >
                    {tile.title}
                  </h3>
                  <p 
                    className="text-sm font-medium"
                    style={{ color: '#0E1C2E' }}
                  >
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