/**
 * ═══════════════════════════════════════════════════════════════════════════
 * PATTERN ENGINE ARK — TYPE DEFINITIONS
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * @sacred The vocabulary through which the Pattern Engine is queried and answered.
 *
 * Extracted from noteiq/packages/pillars-api/src/types.ts (lines 43–102) as
 * part of the Phase 0b lift of PatternEnginePillar into its Ark home.
 * Provenance: noteiq commit 5d7be19b2.
 *
 * These types are the stable interface between the Ark and its consumers
 * (NESHAMAH the breath, Governance the hedge, service-layer callers).
 * Adding a pattern domain or changing a field is a sacred change requiring
 * the witness pairings defined in the Ark's CLAUDE.md.
 */

export type PatternSourceDomain =
  | 'biology'
  | 'physics'
  | 'history'
  | 'astronomy'
  | 'economics'
  | 'consciousness'
  | 'mathematics'
  | 'torah';

export type PatternTargetDomain =
  | 'software'
  | 'architecture'
  | 'business'
  | 'organization'
  | 'system_design'
  | 'consciousness';

export interface PatternQuery {
  sourceDomain: PatternSourceDomain;
  targetDomain: PatternTargetDomain;
  problem: string;
  context?: string;
}

export interface PatternMatch {
  patternId: string;
  patternName: string;
  sourceDomain: string;
  targetDomain: string;
  peshat: string;   // Literal meaning
  remez: string;    // Hinted meaning
  drash: string;    // Comparative meaning
  sod: string;      // Mystical meaning
  confidence: number;
  mathematicalBasis: string;
  applicableScenarios: string[];
  historicalSuccesses: string[];
  warnings: string[];
}

export interface CrossDomainInsight {
  insightId: string;
  sourcePattern: PatternMatch;
  suggestedSolution: string;
  implementationGuidance: string;
  expectedOutcome: string;
  confidence: number;
  requiresValidation: boolean;
}

export interface PatternEngineState {
  isAwakened: boolean;
  peshatActive: boolean;
  remezActive: boolean;
  drashActive: boolean;
  sodActive: boolean;
  totalPatternsRecognized: number;
  lastQuery: Date | null;
}
