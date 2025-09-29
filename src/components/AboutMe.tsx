import React from 'react';

export function AboutMe() {
  return (
    <section className="about-section">
      <div className="about-container">
        <header className="about-header">
          <div className="about-eyebrow">ABOUT ME</div>
          <h2 className="about-title">Nithilan Ajith Nadarajan</h2>
          <p className="about-subtitle">
            SEO Strategist & Behavioral Economics Researcher
          </p>
        </header>

        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I combine technical SEO expertise with a researcher's eye for how people actually behave online. 
              As an AB Economics student doing research in behavioral economics, I study how nudges, incentives, 
              and psychological cues can shape digital interactions and long-term growth. My work bridges concepts 
              of academic research with practical SEO strategy, building systems that optimize for clicks and 
              encourage sustainable audience retention.
            </p>
            
            <div className="about-highlights">
              <div className="highlight-item">
                <h3 className="highlight-title">Behavioral Economics</h3>
                <p className="highlight-description">Research in nudges, incentives, and psychological cues that shape digital behavior</p>
              </div>
              
              <div className="highlight-item">
                <h3 className="highlight-title">Technical SEO</h3>
                <p className="highlight-description">Core Web Vitals, site architecture, and data-driven optimization</p>
              </div>
              
              <div className="highlight-item">
                <h3 className="highlight-title">Academic Research</h3>
                <p className="highlight-description">Bridging academic concepts with practical SEO strategy and implementation</p>
              </div>
            </div>
          </div>
          
          <div className="about-stats">
            <div className="stat-item">
              <div className="stat-number">AB</div>
              <div className="stat-label">Economics Student</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">24h</div>
              <div className="stat-label">Sprint Delivery</div>
            </div>
            
            <div className="stat-item">
              <div className="stat-number">Research</div>
              <div className="stat-label">Behavioral Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
