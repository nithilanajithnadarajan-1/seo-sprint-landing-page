import React from 'react';
import { useWordWall } from '../hooks/useWordWall';
import { SEOTooltip } from './SEOTooltip';
import { SEOKeywordKey } from '../data/seoData';

export function WordWall() {
  const { hoveredWord, tooltipPosition, seoKeywords } = useWordWall();

  // Type-safe keyword check
  const isValidKeyword = (keyword: string): keyword is SEOKeywordKey => {
    return keyword in seoKeywords;
  };

  return (
    <div className="wordwall interactive" role="button" tabIndex={0}>
      <div className="wordwall-container"></div>
      
      {hoveredWord && isValidKeyword(hoveredWord) && (
        <SEOTooltip 
          hoveredWord={hoveredWord}
          tooltipPosition={tooltipPosition}
          seoData={seoKeywords[hoveredWord]}
        />
      )}
    </div>
  );
}