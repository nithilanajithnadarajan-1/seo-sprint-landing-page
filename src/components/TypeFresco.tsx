import { useEffect, useRef } from 'react';

export function TypeFresco() {
  const gridRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const words = ["seo sprint", "niche edits", "unlinked mentions", "resource pages", "digital pr"];
    const variants = ["v1", "v2", "v3", "v4", "v5"];
    const layers = ["layer-a", "layer-b", "layer-c"];
    
    if (gridRef.current) {
      // Create 96 tiles (12x8 grid)
      for (let i = 0; i < 96; i++) {
        const tile = document.createElement('div');
        const wordIndex = i % words.length;
        const variantIndex = i % variants.length;
        const layerIndex = i % layers.length;
        
        tile.className = `fresco-tile ${variants[variantIndex]} ${layers[layerIndex]}`;
        tile.style.setProperty('--rot', `${(Math.random() * 6 - 3).toFixed(1)}deg`);
        tile.style.setProperty('--tile-size', `${Math.floor(18 + Math.random() * 46)}px`);
        tile.textContent = words[wordIndex];
        
        gridRef.current.appendChild(tile);
      }
    }
    
    // Parallax scroll effect
    const handleScroll = () => {
      const y = window.scrollY;
      
      document.querySelectorAll('.layer-a').forEach(el => {
        (el as HTMLElement).style.transform = `translateY(${y * -0.08}px) rotate(var(--rot))`;
      });
      
      document.querySelectorAll('.layer-b').forEach(el => {
        (el as HTMLElement).style.transform = `translateY(${y * -0.16}px) rotate(var(--rot))`;
      });
      
      document.querySelectorAll('.layer-c').forEach(el => {
        (el as HTMLElement).style.transform = `translateY(${y * -0.28}px) rotate(var(--rot))`;
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fresco" aria-hidden="true" role="presentation">
      <div ref={gridRef} className="fresco-grid"></div>
    </div>
  );
}