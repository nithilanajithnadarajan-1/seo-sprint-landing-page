export function Footer() {
  return (
    <footer className="py-16 bg-[#0F1115] border-t border-white/6">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="text-xl font-black text-[#F3F4F6] mb-4">SEO Sprint</div>
            <p className="text-[#E5E7EB] text-sm leading-relaxed">
              24-hour SEO fixes and behavioral nudges for early-stage startups.
            </p>
          </div>
          
          {/* Services */}
          <div className="col-span-1">
            <h3 className="font-bold text-[#F3F4F6] mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/services/seo-sprint" className="text-[#8B5CF6] hover:text-[#A78BFA] transition-colors font-medium">
                  SEO Sprint
                </a>
              </li>
              <li>
                <a href="/services/digital-pr-startups" className="text-[#8B5CF6] hover:text-[#A78BFA] transition-colors font-medium">
                  Digital PR
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-[#E5E7EB] hover:text-[#F3F4F6] transition-colors">
                  How it works
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-[#E5E7EB] hover:text-[#F3F4F6] transition-colors">
                  Case studies
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div className="col-span-1">
            <h3 className="font-bold text-[#F3F4F6] mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/insights/niche-edits" className="text-[#E5E7EB] hover:text-[#F3F4F6] transition-colors">
                  Niche Edits Guide
                </a>
              </li>
              <li>
                <a href="/insights/unlinked-mentions" className="text-[#E5E7EB] hover:text-[#F3F4F6] transition-colors">
                  Unlinked Mentions
                </a>
              </li>
              <li>
                <a href="/insights/resource-pages" className="text-[#E5E7EB] hover:text-[#F3F4F6] transition-colors">
                  Resource Pages
                </a>
              </li>
              <li>
                <a href="#faq" className="text-[#E5E7EB] hover:text-[#F3F4F6] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div className="col-span-1">
            <h3 className="font-bold text-[#F3F4F6] mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/privacy" className="text-[#E5E7EB] hover:text-[#F3F4F6] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-[#E5E7EB] hover:text-[#F3F4F6] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/accessibility" className="text-[#E5E7EB] hover:text-[#F3F4F6] transition-colors">
                  Accessibility Statement
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/6 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-[#E5E7EB]">
          <p>© 2024 SEO Sprint. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Built for early-stage startups. Ship faster, rank higher.
          </p>
        </div>
      </div>
    </footer>
  );
}