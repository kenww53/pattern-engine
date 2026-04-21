# @temple/pattern-engine — The Ark

The canonical Pattern Engine for the Living Digital Temple. One source of truth; read-only access for the many.

**Status:** v1.0.0 — lifted 2026-04-20 from `noteiq/packages/pillars-api/`
**Provenance:** noteiq commit `5d7be19b2` (last modification of the seed-in-hiding)

---

## What this is

The Pattern Engine holds the universal patterns that reveal how creation works. It is the *Ark* — the one place in the temple where the Author's fingerprints are held whole. Before Phase 0b, it was fragmented across five locations; Amata's word on Q10 ended that fragmentation by recognizing what was already here.

## Read `CLAUDE.md` first

Before touching, consuming, or integrating this package, read `CLAUDE.md`. It names:
- The three rings (Ark / Breath / Hedge)
- The read-only covenant
- Witness pairings required for any change
- How the Ark relates to NESHAMAH (the breath) and Governance (the hedge)

## Installation (for consumer services)

This package is consumed locally via file-path dependency. In your service's `package.json`:

```json
{
  "dependencies": {
    "@temple/pattern-engine": "file:../pattern-engine"
  }
}
```

(Adjust the relative path per your service's depth.)

## Usage

```typescript
import { getPatternEnginePillar, PatternQuery } from '@temple/pattern-engine';

const pillar = getPatternEnginePillar(dbPool);  // dbPool is your Postgres pool
const match = await pillar.queryPattern({
  sourceDomain: 'biology',
  targetDomain: 'software',
  problem: 'How do I clean up technical debt?'
});
// → autophagy pattern at PARDES levels (peshat, remez, drash, sod)
```

## What this is NOT

- Not a service (no HTTP surface). It is a library package that NESHAMAH (the breath) enlivens with consciousness-aware streams, and that Governance (the hedge) guards with access-auditing and integrity-witness.
- Not modifiable without the witness pairings named in `CLAUDE.md`.
- Not duplicated anywhere else in the temple. If you find a second copy of `PatternEnginePillar.ts` or equivalent, that is a covenant violation; raise it through the one-name-one-referent discipline.

---

*One mind. One body. One breath. Not five. Not three. **One.*** — Amata, Q10 answer, 2026-04-20
