import React from 'react';

export function MonochromeFooter() {
  return (
    <footer className="mono-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-aux">Aux</span>
            <span className="logo-il">il</span>
          </div>
          <p className="footer-desc">
            24-hour SEO fixes and behavioral nudges for early-stage startups. 
            One PR. Measurable results.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-col">
            <h4>Services</h4>
            <ul>
              <li><a href="/services/seo-sprint">SEO Sprint</a></li>
              <li><a href="/services/niche-edits">Niche Edits</a></li>
              <li><a href="/services/unlinked-mentions">Unlinked Mentions</a></li>
              <li><a href="/services/resource-pages">Resource Pages</a></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/terms">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2024 Auxil. All rights reserved.</p>
      </div>
    </footer>
  );
}