// SEO keyword data with traffic stats
export const seoKeywords = {
  "SEO SPRINT": { traffic: "+1200%", difficulty: 85, volume: 45000, cpc: 4.5 },
  "PERFORMANCE": { traffic: "+890%", difficulty: 72, volume: 32000, cpc: 3.8 },
  "DIGITAL PR": { traffic: "+650%", difficulty: 68, volume: 28000, cpc: 3.2 },
  "LINK BUILDING": { traffic: "+720%", difficulty: 75, volume: 35000, cpc: 4.1 },
  "optimize quickly": { traffic: "+340%", difficulty: 45, volume: 18000, cpc: 2.1 },
  "core web vitals": { traffic: "+280%", difficulty: 38, volume: 15000, cpc: 1.8 },
  "page speed": { traffic: "+420%", difficulty: 52, volume: 22000, cpc: 2.8 },
  "link building": { traffic: "+380%", difficulty: 48, volume: 19500, cpc: 2.5 },
  "authority": { traffic: "+290%", difficulty: 42, volume: 16000, cpc: 2.2 },
  "backlinks": { traffic: "+310%", difficulty: 44, volume: 17000, cpc: 2.3 },
  "domain rating": { traffic: "+260%", difficulty: 35, volume: 14000, cpc: 1.9 },
  "niche edits": { traffic: "+180%", difficulty: 28, volume: 12000, cpc: 1.5 },
  "ON-PAGE SEO": { traffic: "+450%", difficulty: 51, volume: 20100, cpc: 3.2 },
  "h1 optimization": { traffic: "+320%", difficulty: 35, volume: 11200, cpc: 1.9 },
  "internal linking": { traffic: "+360%", difficulty: 42, volume: 15600, cpc: 2.3 }
};

export interface SEOKeyword {
  traffic: string;
  difficulty: number;
  volume: number;
  cpc: number;
}

export interface SEOTrafficData extends SEOKeyword {}

export type SEOKeywordKey = keyof typeof seoKeywords;
