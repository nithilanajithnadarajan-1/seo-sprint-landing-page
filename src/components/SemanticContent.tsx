import React from 'react';

export function SemanticContent() {
  return (
    <section className="semantic-content">
      <div className="content-container">
        <h2>How the SEO sprint works</h2>
        <p>
          Each SEO sprint delivers one focused pull request within 2 weeks. We audit your existing markup, 
          identify the highest-impact fixes, and implement behavioral nudges that guide users toward conversion 
          while improving your search visibility. No ongoing contracts or maintenance—just measurable improvements 
          to your codebase that you own completely.
        </p>
        
        <h3>What's included</h3>
        <ul>
          <li>Technical SEO audit of target pages</li>
          <li>On-page optimization (titles, meta, headings)</li>
          <li>Accessibility improvements for better UX</li>
          <li>Schema markup implementation where relevant</li>
          <li>One PR with all changes documented</li>
        </ul>

        <h3>Common questions</h3>
        <div className="faq-item">
          <h4>How quickly do you deliver?</h4>
          <p>
            All work is completed within 2 weeks of project kickoff. You'll receive a detailed PR 
            with implementation notes and testing recommendations.
          </p>
        </div>

        <div className="faq-item">
          <h4>Do you work with any tech stack?</h4>
          <p>
            Yes. We focus on front-end markup and meta improvements that work across all frameworks 
            and static site generators.
          </p>
        </div>

        <div className="faq-item">
          <h4>What if I need ongoing SEO work?</h4>
          <p>
            Each sprint is standalone, but many clients book follow-up sprints for additional pages 
            or advanced optimizations like structured data implementation.
          </p>
        </div>

        <div className="cta-section">
          <h3>Start working with Auxil</h3>
          <p>Get your first PR in 2 weeks. No contracts, no surprises.</p>
          <a href="/services/seo-sprint" className="content-cta">
            Start 2-week sprint
          </a>
        </div>
      </div>
    </section>
  );
}