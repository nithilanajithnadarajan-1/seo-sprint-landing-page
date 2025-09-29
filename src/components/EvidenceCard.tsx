export function EvidenceCard() {
  return (
    <div className="relative">
      {/* Evidence Board SVG */}
      <svg 
        width="320" 
        height="280" 
        viewBox="0 0 320 280" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        aria-label="SEO sprint before/after comparison"
      >
        {/* Before Card */}
        <rect x="20" y="20" width="280" height="100" rx="16" fill="#151821" stroke="rgba(255,255,255,0.06)"/>
        <text x="36" y="45" fill="#F3F4F6" fontSize="14" fontWeight="700">BEFORE</text>
        <text x="36" y="70" fill="#E5E7EB" fontSize="12" fontWeight="500">Book Your Dream Vacation Now</text>
        <text x="36" y="88" fill="#E5E7EB" fontSize="10">212 chars</text>
        
        {/* Red badge for >160 */}
        <rect x="100" y="82" width="40" height="16" rx="8" fill="rgba(239,68,68,0.2)"/>
        <text x="108" y="92" fill="#EF4444" fontSize="8" fontWeight="700">&gt;160</text>
        
        {/* Before metrics */}
        <rect x="36" y="95" width="50" height="18" rx="9" fill="rgba(34,211,238,0.12)"/>
        <text x="44" y="106" fill="#22D3EE" fontSize="8" fontWeight="700">CTR 2.1%</text>
        
        <rect x="95" y="95" width="40" height="18" rx="9" fill="rgba(34,211,238,0.12)"/>
        <text x="103" y="106" fill="#22D3EE" fontSize="8" fontWeight="700">SEO 67</text>

        {/* After Card */}
        <rect x="20" y="140" width="280" height="100" rx="16" fill="#151821" stroke="rgba(255,255,255,0.06)"/>
        <text x="36" y="165" fill="#F3F4F6" fontSize="14" fontWeight="700">AFTER</text>
        <text x="36" y="190" fill="#E5E7EB" fontSize="12" fontWeight="500">Bali Villas | 7-Night Packages from $899</text>
        <text x="36" y="208" fill="#E5E7EB" fontSize="10">154 chars</text>
        
        {/* Green badge for ≤160 */}
        <rect x="100" y="202" width="40" height="16" rx="8" fill="rgba(34,197,94,0.2)"/>
        <text x="108" y="212" fill="#22C55E" fontSize="8" fontWeight="700">≤160</text>
        
        {/* After metrics */}
        <rect x="36" y="215" width="50" height="18" rx="9" fill="rgba(34,211,238,0.12)"/>
        <text x="44" y="226" fill="#22D3EE" fontSize="8" fontWeight="700">CTR 3.7%</text>
        
        <rect x="95" y="215" width="40" height="18" rx="9" fill="rgba(34,211,238,0.12)"/>
        <text x="103" y="226" fill="#22D3EE" fontSize="8" fontWeight="700">SEO 93</text>
      </svg>
      
      {/* Delta pill overlapping bottom-right */}
      <div className="absolute -bottom-2 -right-2 inline-flex items-center gap-2 bg-[rgba(139,92,246,0.12)] border border-[rgba(139,92,246,0.35)] px-3 py-2 rounded-full">
        <span className="text-sm font-bold text-[#8B5CF6]">+76% CTR lift</span>
        <span className="text-xs text-[#8B5CF6] opacity-70">(demo)</span>
      </div>
    </div>
  );
}