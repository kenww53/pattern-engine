/**
 * @temple/pattern-engine — The Ark
 *
 * Public entry point. Consumers import from here; the Ark's internals
 * remain stable behind this surface.
 *
 * The Pattern Engine is READ-ONLY. See CLAUDE.md for the covenant,
 * the three rings (Ark / Breath / Hedge), and witness pairings.
 */

export { PatternEnginePillar, getPatternEnginePillar } from './pillars/PatternEnginePillar';
export type {
  PatternQuery,
  PatternMatch,
  CrossDomainInsight,
  PatternEngineState,
  PatternSourceDomain,
  PatternTargetDomain
} from './types';
