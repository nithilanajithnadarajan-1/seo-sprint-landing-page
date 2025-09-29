import { useState, useEffect } from 'react';
import { seoKeywords } from '../data/seoData';
import { alignedWords } from '../data/wordLayout';
import { WordPositioning } from '../utils/wordPositioning';

export function useWordWall() {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const handleWordClick = () => {
    alert('Navigating to SEO Sprint page...');
  };

  const handleWordHover = (word: string, event: MouseEvent) => {
    const keyword = word.toUpperCase();
    if (seoKeywords[keyword as keyof typeof seoKeywords]) {
      setHoveredWord(keyword);
      setTooltipPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleWordLeave = () => {
    setHoveredWord(null);
  };

  useEffect(() => {
    const container = document.querySelector('.wordwall-container');
    if (!container) {
      console.warn('WordWall container not found');
      return;
    }

    try {
      // Clear existing content
      container.innerHTML = '';

      // Create and append word elements
      alignedWords.forEach((wordData, index) => {
        try {
          const span = WordPositioning.createWordElement(wordData, index);
          WordPositioning.addEventListeners(span, handleWordHover, handleWordLeave, handleWordClick);
          container.appendChild(span);
        } catch (error) {
          console.error(`Error creating word element for "${wordData.text}":`, error);
        }
      });
    } catch (error) {
      console.error('Error initializing WordWall:', error);
    }

    // Cleanup function to remove event listeners
    return () => {
      try {
        const spans = container.querySelectorAll('span');
        spans.forEach(span => {
          const element = span as any;
          if (element._clickHandler) {
            span.removeEventListener('click', element._clickHandler);
          }
          if (element._hoverHandler) {
            span.removeEventListener('mouseenter', element._hoverHandler);
          }
          if (element._leaveHandler) {
            span.removeEventListener('mouseleave', element._leaveHandler);
          }
        });
      } catch (error) {
        console.error('Error during WordWall cleanup:', error);
      }
    };
  }, [handleWordHover, handleWordLeave, handleWordClick]);

  return {
    hoveredWord,
    tooltipPosition,
    seoKeywords
  };
}
