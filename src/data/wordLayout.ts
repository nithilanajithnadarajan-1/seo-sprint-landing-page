// Word layout configuration for the WordWall
export type WordTier = "t1" | "t2" | "t3";

export interface WordData {
  text: string;
  tier: WordTier;
  weight: string;
  x: number;
  y: number;
  rotation: number;
}

// CLEAN WORD LAYOUT - MAXIMUM SPACING, ABSOLUTELY NO OVERLAP
export const alignedWords: WordData[] = [
  // Row 1 - Maximum spacing
  { text: "SEO SPRINT", tier: "t1", weight: "900", x: -25, y: 10, rotation: 0 },
  { text: "PERFORMANCE", tier: "t1", weight: "900", x: 25, y: 10, rotation: 0 },
  { text: "DIGITAL PR", tier: "t2", weight: "400", x: 75, y: 10, rotation: 0 },
  
  // Row 2 - Generous spacing
  { text: "optimize quickly", tier: "t2", weight: "400", x: -20, y: 25, rotation: 0 },
  { text: "core web vitals", tier: "t2", weight: "400", x: 10, y: 25, rotation: 0 },
  { text: "mobile first", tier: "t2", weight: "400", x: 35, y: 25, rotation: 0 },
  { text: "LINK BUILDING", tier: "t1", weight: "900", x: 60, y: 25, rotation: 0 },
  { text: "page speed", tier: "t2", weight: "400", x: 100, y: 25, rotation: 0 },
  { text: "meta tags", tier: "t2", weight: "400", x: 130, y: 25, rotation: 0 },
  { text: "schema markup", tier: "t2", weight: "400", x: 160, y: 25, rotation: 0 },
  { text: "site structure", tier: "t2", weight: "400", x: 190, y: 25, rotation: 0 },
  
  // Row 3 - Wide separation
  { text: "authority", tier: "t2", weight: "400", x: -20, y: 40, rotation: 0 },
  { text: "backlinks", tier: "t1", weight: "900", x: 20, y: 40, rotation: 0 },
  { text: "domain rating", tier: "t2", weight: "400", x: 60, y: 40, rotation: 0 },
  { text: "niche edits", tier: "t2", weight: "700", x: 100, y: 40, rotation: 0 },
  
  // Row 4 - Maximum gaps
  { text: "SEO SPRINT", tier: "t1", weight: "900", x: -35, y: 55, rotation: 0 },
  { text: "link building", tier: "t2", weight: "400", x: 5, y: 55, rotation: 0 },
  { text: "PERFORMANCE", tier: "t1", weight: "900", x: 30, y: 55, rotation: 0 },
  { text: "optimize quickly", tier: "t2", weight: "400", x: 85, y: 55, rotation: 0 },
  
  // Row 5 - Wide spacing
  { text: "core web vitals", tier: "t2", weight: "400", x: -25, y: 70, rotation: 0 },
  { text: "DIGITAL PR", tier: "t2", weight: "400", x: 15, y: 70, rotation: 0 },
  { text: "page speed", tier: "t2", weight: "400", x: 55, y: 70, rotation: 0 },
  { text: "authority", tier: "t2", weight: "400", x: 95, y: 70, rotation: 0 },
  
  // Row 6 - Maximum separation
  { text: "LINK BUILDING", tier: "t1", weight: "900", x: -40, y: 85, rotation: 0 },
  { text: "backlinks", tier: "t1", weight: "900", x: 15, y: 85, rotation: 0 },
  { text: "domain rating", tier: "t2", weight: "400", x: 60, y: 85, rotation: 0 },
  { text: "niche edits", tier: "t2", weight: "700", x: 105, y: 85, rotation: 0 },
  
  // Row 7 - Ultra-wide spacing
  { text: "PERFORMANCE", tier: "t1", weight: "900", x: -35, y: 100, rotation: 0 },
  { text: "SEO SPRINT", tier: "t1", weight: "900", x: 15, y: 100, rotation: 0 },
  { text: "optimize quickly", tier: "t2", weight: "400", x: 75, y: 100, rotation: 0 },
  { text: "core web vitals", tier: "t2", weight: "400", x: 115, y: 100, rotation: 0 },
  
  // Row 8 - Maximum gaps
  { text: "link building", tier: "t2", weight: "400", x: -35, y: 115, rotation: 0 },
  { text: "DIGITAL PR", tier: "t2", weight: "400", x: 15, y: 115, rotation: 0 },
  { text: "page speed", tier: "t2", weight: "400", x: 55, y: 115, rotation: 0 },
  { text: "authority", tier: "t2", weight: "400", x: 95, y: 115, rotation: 0 },
  { text: "SEO audit", tier: "t2", weight: "400", x: 125, y: 115, rotation: 0 },
  
  // Row 9 - Wide separation
  { text: "backlinks", tier: "t1", weight: "900", x: -30, y: 130, rotation: 0 },
  { text: "LINK BUILDING", tier: "t1", weight: "900", x: 10, y: 130, rotation: 0 },
  { text: "domain rating", tier: "t2", weight: "400", x: 50, y: 130, rotation: 0 },
  { text: "niche edits", tier: "t2", weight: "700", x: 90, y: 130, rotation: 0 },
  
  // Row 10 - Maximum spacing
  { text: "SEO SPRINT", tier: "t1", weight: "900", x: -35, y: 145, rotation: 0 },
  { text: "PERFORMANCE", tier: "t1", weight: "900", x: -5, y: 145, rotation: 0 },
  { text: "DIGITAL PR", tier: "t2", weight: "400", x: 35, y: 145, rotation: 0 },
  { text: "optimize quickly", tier: "t2", weight: "400", x: 85, y: 145, rotation: 0 }
];
