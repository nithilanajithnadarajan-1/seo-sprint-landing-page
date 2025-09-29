import React from 'react';
import { SEOTrafficData } from '../data/seoData';

interface SEOTooltipProps {
  hoveredWord: string;
  tooltipPosition: { x: number; y: number };
  seoData: SEOTrafficData;
}

export function SEOTooltip({ hoveredWord, tooltipPosition, seoData }: SEOTooltipProps) {
  return (
    <div 
      className="seo-tooltip"
      style={{
        position: 'fixed',
        left: tooltipPosition.x + 10,
        top: tooltipPosition.y - 10,
        zIndex: 1000,
        pointerEvents: 'none'
      }}
    >
      <div className="tooltip-content">
        <div className="tooltip-header">
          <h4>{hoveredWord}</h4>
          <div className="traffic-stats">
            {seoData.traffic} Potential Impact
          </div>
        </div>
        <div className="tooltip-stats">
          <div className="stat-row">
            <span className="stat-label">Keyword Difficulty:</span>
            <span className="stat-value">{seoData.difficulty}/100</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">Search Volume:</span>
            <span className="stat-value">{seoData.volume.toLocaleString()}/month</span>
          </div>
          <div className="stat-row">
            <span className="stat-label">CPC:</span>
            <span className="stat-value">${seoData.cpc}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
