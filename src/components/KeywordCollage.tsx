import { useEffect, useRef } from 'react';

export function KeywordCollage() {
  const collageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const phrases = ["seo sprint", "niche edits", "unlinked mentions", "resource pages", "digital pr"];
    const variants = ["variant-1", "variant-2", "variant-3", "variant-4", "variant-5"];
    
    if (collageRef.current) {
      const tiles = collageRef.current.querySelectorAll('.keyword-tile');
      tiles.forEach((tile, i) => {
        const element = tile as HTMLElement;
        element.textContent = phrases[i % phrases.length];
        element.className = `keyword-tile ${variants[i % variants.length]}`;
        element.style.setProperty('--rot', `${(Math.random() * 6 - 3).toFixed(1)}deg`);
        element.style.setProperty('--tile-size', `${Math.floor(16 + Math.random() * 28)}px`);
      });
    }
  }, []);

  return (
    <div 
      ref={collageRef}
      className="keyword-wall" 
      aria-hidden="true" 
      role="presentation"
    >
      {Array.from({ length: 60 }, (_, i) => (
        <div key={i} className="keyword-tile"></div>
      ))}
    </div>
  );
}