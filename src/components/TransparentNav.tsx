import React, { useState, useEffect } from 'react';

export function TransparentNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100); // Show nav after scrolling 100px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Static Homepage Navigation - Always visible, hidden when scrolling */}
      <div className={`static-nav ${isScrolled ? 'static-nav-hidden' : 'static-nav-visible'}`}>
        <div className="static-nav-container">
          {/* Logo on WordWall side (left) */}
          <div className="static-nav-logo-left">
            <span className="static-logo-text-white">Auxil</span>
          </div>
          {/* Navigation links on Hero side (right) */}
          <div className="static-nav-links-right">
            <a href="#contact" className="static-nav-link">Contact Us</a>
            <a href="#faq" className="static-nav-link">FAQ</a>
            <a href="#case-studies" className="static-nav-link">Case Studies</a>
          </div>
        </div>
      </div>

      {/* Scroll-based Navigation - Only appears when scrolling */}
      <nav className={`transparent-nav ${isScrolled ? 'nav-visible' : 'nav-hidden'}`}>
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <span className="logo-text">Auxil</span>
          </div>

          {/* Desktop Navigation */}
          <div className="nav-links">
            <a href="#contact" className="nav-link">Contact Us</a>
            <a href="#faq" className="nav-link">FAQ</a>
            <a href="#case-studies" className="nav-link">Case Studies</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger"></span>
            <span className="hamburger"></span>
            <span className="hamburger"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <a href="#contact" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Contact Us</a>
            <a href="#faq" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>FAQ</a>
            <a href="#case-studies" className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>Case Studies</a>
          </div>
        )}
      </nav>
    </>
  );
}
