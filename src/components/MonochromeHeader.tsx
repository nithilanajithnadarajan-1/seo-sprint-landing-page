import React from 'react';

export function MonochromeHeader() {
  return (
    <header className="mono-header">
      <div className="header-content">
        {/* Logo */}
        <div className="logo">
          <span className="logo-aux">Aux</span>
          <span className="logo-il">il</span>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <a href="/services/seo-sprint" className="nav-link">SEO Sprint</a>
          <a href="/services/unlinked-mentions" className="nav-link">Unlinked Mentions</a>
          <a href="/services/niche-edits" className="nav-link">Niche Edits</a>
          <a href="/services/resource-pages" className="nav-link">Resource Pages</a>
        </nav>

        {/* CTA */}
        <a href="/services/seo-sprint" className="header-cta">
          Start Sprint
        </a>
      </div>
    </header>
  );
}