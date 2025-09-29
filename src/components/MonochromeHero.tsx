import React from 'react';

export function MonochromeHero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <p className="eyebrow">CONSULTING FOR EARLY-STAGE STARTUPS</p>
        <h1 className="hero-h1">
          Ship behavioral nudges<br />
          and on-page SEO in 2 weeks.
        </h1>
        <p className="hero-sub">
          You own the code. One PR. Evidence when shipped.
        </p>
      </div>
      
      <div className="hero-cta-container">
        <div className="hero-cta-stack">
          <a 
            href="/services/seo-sprint" 
            className="hero-cta-button"
            aria-label="Start your SEO sprint"
          >
            <div className="hero-cta-content">
              <span className="hero-cta-text">Start Your</span>
              <span className="hero-cta-main">SEO Sprint</span>
              <span className="hero-cta-arrow">→</span>
            </div>
            <div className="hero-cta-subtext">24-hour turnaround</div>
          </a>
          
          <a 
            href="/services/resource-pages" 
            className="hero-cta-button"
            aria-label="Build resource pages"
          >
            <div className="hero-cta-content">
              <span className="hero-cta-text">Build</span>
              <span className="hero-cta-main">Resource Pages</span>
              <span className="hero-cta-arrow">→</span>
            </div>
            <div className="hero-cta-subtext">Traffic magnets</div>
          </a>
          
          <a 
            href="/services/unlinked-mentions" 
            className="hero-cta-button"
            aria-label="Find unlinked mentions"
          >
            <div className="hero-cta-content">
              <span className="hero-cta-text">Recover</span>
              <span className="hero-cta-main">Unlinked Mentions</span>
              <span className="hero-cta-arrow">→</span>
            </div>
            <div className="hero-cta-subtext">Link reclamation</div>
          </a>
        </div>
      </div>
    </section>
  );
}