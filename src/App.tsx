import React from 'react';
import { WordWall } from "./components/WordWall";
import { MonochromeHeader } from "./components/MonochromeHeader";
import { SideHero } from "./components/SideHero";
import { SemanticContent } from "./components/SemanticContent";
import { AboutMe } from "./components/AboutMe";
import { MonochromeFooter } from "./components/MonochromeFooter";
import { TransparentNav } from "./components/TransparentNav";
import { ContactSection } from "./components/ContactSection";
import { FAQSection } from "./components/FAQSection";
import { CaseStudiesSection } from "./components/CaseStudiesSection";
import { ErrorBoundary } from "./components/ErrorBoundary";

export default function App() {
  return (
    <>
      <title>SEO Sprint in 2 Weeks | Behavioral Nudges + On-Page SEO</title>
      <meta name="description" content="Ship on-page SEO fixes and behavioral nudges in 2 weeks. One PR. You own the code." />
      
      <ErrorBoundary>
        <div className="min-h-screen antialiased">
          {/* Transparent Navigation */}
          <ErrorBoundary>
            <TransparentNav />
          </ErrorBoundary>
          
          {/* Split Screen Layout */}
          <div className="split-layout">
            {/* Left Side - Interactive Word Wall */}
            <div className="split-left">
              <ErrorBoundary>
                <WordWall />
              </ErrorBoundary>
            </div>
            
            {/* Right Side - Hero Content */}
            <div className="split-right">
              <ErrorBoundary>
                <SideHero />
              </ErrorBoundary>
            </div>
          </div>
          
          {/* Full Width Sections */}
          <main className="full-sections">
            <ErrorBoundary>
              <SemanticContent />
            </ErrorBoundary>
            <ErrorBoundary>
              <CaseStudiesSection />
            </ErrorBoundary>
            <ErrorBoundary>
              <FAQSection />
            </ErrorBoundary>
            <ErrorBoundary>
              <ContactSection />
            </ErrorBoundary>
            <ErrorBoundary>
              <AboutMe />
            </ErrorBoundary>
          </main>
          
          <ErrorBoundary>
            <MonochromeFooter />
          </ErrorBoundary>
        </div>
      </ErrorBoundary>
    </>
  );
}