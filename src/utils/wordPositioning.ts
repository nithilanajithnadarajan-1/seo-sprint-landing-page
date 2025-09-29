import { WordData } from '../data/wordLayout';

// Word positioning utilities with dynamic font sizing to prevent overlap
export class WordPositioning {
  static createWordElement(wordData: WordData, index: number): HTMLSpanElement {
    const span = document.createElement('span');
    span.className = `word ${wordData.tier} weight-${wordData.weight} clickable-word aligned-word`;
    span.textContent = wordData.text;
    
    // Calculate dynamic font size - big impact words, varied sizing for fullness
    const wordLength = wordData.text.length;
    let fontSize: string;
    
    if (wordData.tier === 't1') {
      // Large impact words - make them BIGGER
      if (wordLength <= 8) fontSize = '4.5rem';        // SEO SPRINT, PERFORMANCE, backlinks
      else if (wordLength <= 12) fontSize = '3.5rem';  // LINK BUILDING
      else fontSize = '2.8rem';                        // DIGITAL PR
    } else if (wordData.tier === 't2') {
      // Medium words - good variety for fullness
      if (wordLength <= 8) fontSize = '2.4rem';        // authority, backlinks
      else if (wordLength <= 12) fontSize = '2.0rem';  // page speed
      else fontSize = '1.7rem';                        // optimize quickly, core web vitals
    } else {
      // Small supporting words - fill the space
      if (wordLength <= 8) fontSize = '1.8rem';        // domain rating
      else if (wordLength <= 12) fontSize = '1.5rem';  // niche edits
      else fontSize = '1.3rem';                        // longer phrases
    }
    
    // Set positioning
    span.style.position = 'absolute';
    span.style.left = `${wordData.x}%`;
    span.style.top = `${wordData.y}%`;
    span.style.fontSize = fontSize;
    span.style.transform = 'rotate(0deg)';
    span.style.transformOrigin = 'center';
    span.style.zIndex = Math.floor(Math.random() * 5) + 1;
    
    // Add CSS custom properties for animations
    span.style.setProperty('--rotation', '0deg');
    span.style.setProperty('--index', index.toString());
    
    // Set opacity based on tier
    const opacity = wordData.tier === 't1' ? 0.9 : wordData.tier === 't2' ? 0.7 : 0.6;
    span.style.opacity = opacity.toString();
    
    return span;
  }

  static addEventListeners(
    span: HTMLSpanElement, 
    onWordHover: (text: string, event: MouseEvent) => void,
    onWordLeave: () => void,
    onWordClick: () => void
  ): void {
    const clickHandler = () => onWordClick();
    const hoverHandler = (e: MouseEvent) => onWordHover(span.textContent || '', e);
    const leaveHandler = () => onWordLeave();
    
    span.addEventListener('click', clickHandler);
    span.addEventListener('mouseenter', hoverHandler);
    span.addEventListener('mouseleave', leaveHandler);
    span.style.cursor = 'pointer';
    
    // Store handlers for cleanup
    (span as any)._clickHandler = clickHandler;
    (span as any)._hoverHandler = hoverHandler;
    (span as any)._leaveHandler = leaveHandler;
  }
}
