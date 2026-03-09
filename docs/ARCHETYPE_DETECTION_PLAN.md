# Archetype Detection Refactor Plan

## 1. Current State & Problems

### How it works now

Each archetype is defined as an entry in `archetypesListObject` in `constants/archetypes.ts`. Every entry has:
- `name` / `sprites` / `color` — display data
- `fn(decklist) => boolean` — a custom function that checks for the presence (and sometimes absence) of specific card names

`getArchetype` iterates the list and returns **the first match**. Because order matters, more specific archetypes have to be listed before general ones (e.g., `dragapultIronThorns` before `dragapultEx`).

### Problems

1. **Order-dependent matching** — whether a deck is labelled "Dragapult Iron Thorns" or just "Dragapult Ex" depends entirely on which entry comes first in the object. There is no explicit priority; the order is implicit and fragile.

2. **Workarounds for specificity** — to distinguish variants, some `fn`s use negative checks (`decklistDoesntInclude`) which adds noise. Example: `miraidonEx` explicitly excludes `Flaaffy` to prevent it matching the `miraidonFlaafy` archetype.

3. **No confidence scoring** — all matches are treated equally. A decklist that matches 5 "defining" cards for an archetype is treated the same as one that barely scrapes in with 1.

4. **Data mixed with logic** — display data (sprites, colour) is bundled with the matching predicate in the same object. Changing a sprite requires touching the same file as changing match logic.

5. **Hard to maintain at scale** — every new meta deck requires a developer to write a custom `fn`, know the correct insertion point in the list, and add `decklistDoesntInclude` guards for any overlap. As the meta grows this compounds quickly.

6. **`fn` functions duplicate helpers** — helper functions like `decklistIncludes`, `decklistDoesntInclude`, and `cardCount` exist but each `fn` still hand-rolls its own conditions. There's no standard contract for what defines an archetype.

---

## 2. Research Notes

From researching how sites like [Limitless TCG](https://limitlesstcg.com/decks) and the [Bulbapedia archetype article](https://bulbapedia.bulbagarden.net/wiki/Deck_archetype_(TCG)) classify decks:

- Archetypes are defined by **core cards** — cards that appear in the overwhelming majority of lists for that archetype.
- Variants of the same archetype share a base core, but diverge on a smaller set of **secondary identifiers** (e.g., both Dragapult/Charizard and Dragapult/IronThorns share `Dragapult ex`, but differ on the secondary attacker).
- The most specific match (most identifiers met) should win.
- Exclusion rules are needed only when two archetypes have identical cores — this should be a last resort, not the primary tool.

---

## 3. Proposed New Data Structure

Instead of a free-form `fn`, each archetype is described declaratively with three card lists:

```ts
interface ArchetypeDefinition {
  // Human-readable name and display info (unchanged)
  name: string;
  sprites: Sprites[];
  color?: string;

  // Cards that MUST ALL be present for this archetype to be a candidate
  required: { type: CardType; name: string }[];

  // Cards that further identify this specific variant.
  // More matches = higher specificity score.
  identifiers: { type: CardType; name: string }[];

  // Cards whose presence disqualifies this archetype entirely.
  // Use sparingly — prefer identifiers over excludes where possible.
  excludes?: { type: CardType; name: string }[];
}
```

### Example — current vs proposed

**Current:**
```ts
dragapultIronThorns: {
  name: 'Dragapult Iron Thorns',
  sprites: [...],
  fn: decklist => {
    if (
      decklistIncludes(decklist, 'pokemon', ['Dragapult ex', 'Iron Thorns ex']) &&
      cardCount(decklist, 'pokemon', 'Iron Thorns ex', 4)
    ) return true;
    return false;
  },
},
dragapultEx: {
  name: 'Dragapult Ex',
  sprites: [...],
  fn: decklist => {
    if (decklistIncludes(decklist, 'pokemon', ['Dragapult ex'])) return true;
    return false;
  },
},
```

**Proposed:**
```ts
dragapultIronThorns: {
  name: 'Dragapult Iron Thorns',
  sprites: [...],
  required:     [{ type: 'pokemon', name: 'Dragapult ex' }],
  identifiers:  [{ type: 'pokemon', name: 'Iron Thorns ex' }],
},
dragapultEx: {
  name: 'Dragapult Ex',
  sprites: [...],
  required:     [{ type: 'pokemon', name: 'Dragapult ex' }],
  identifiers:  [],
},
```

`dragapultIronThorns` wins for any deck with both cards because it scores 1 identifier point vs `dragapultEx`'s 0. No `decklistDoesntInclude` guard needed.

---

## 4. Proposed Matching Algorithm

```
getArchetype(decklist):
  candidates = archetypes where ALL required cards are present
                              AND no excluded cards are present

  if no candidates → return unknownArchetype

  score each candidate:
    score = number of identifier cards present in decklist

  return candidate with highest score
  (ties broken by whichever has more total required+identifier cards — most specific definition wins)
```

This is deterministic, order-independent, and naturally handles variants without negative guards.

---

## 5. Step-by-Step Implementation Plan

### Step 1 — Define the new `ArchetypeDefinition` type

In `constants/archetypes.ts`, add the new interface alongside the existing one. Do not remove anything yet.

### Step 2 — Write the new matching helpers

In a new file `helpers/matchArchetype/matchArchetype.ts`:
- `meetsRequired(decklist, required)` — all required cards present?
- `isExcluded(decklist, excludes)` — any excluded card present?
- `scoreIdentifiers(decklist, identifiers)` — count of identifier cards present
- `matchArchetype(decklist, archetypes)` — full algorithm from section 4

This keeps the pure logic testable in isolation, separate from the data.

### Step 3 — Port archetypes one-by-one to the new structure

Migrate each entry in `archetypesListObject` to the new `ArchetypeDefinition` shape. As each one is migrated, write/update a test case in `getArchetype.test.ts` to confirm the match still works. The existing fixture decklists in `mocks/fixtures/standings.ts` are the primary test data.

Key decisions to make during migration:
- What is the minimal `required` set that uniquely identifies the archetype (or its core)?
- What are the `identifiers` that distinguish a variant from the base archetype?
- Are there any `excludes` still needed? (Should be rare with the scoring approach.)

### Step 4 — Refactor `getArchetype.ts` to use the new algorithm

Replace the `archetypesList.find(archetype => archetype.fn(decklist))` call with the new `matchArchetype` helper. The return shape stays the same so no downstream components are affected.

### Step 5 — Clean up

- Remove the old `fn` field and the `decklistIncludes` / `decklistDoesntInclude` / `cardCount` helper functions that are no longer needed.
- Remove the `unknownArchetype` duplication (currently defined in both `constants/archetypes.ts` and inline in `getArchetype.ts`).
- Consider whether `cardCount`-based rules (e.g., quad Iron Thorns requiring exactly 4 copies) can be handled with an optional `minCount` property on identifier/required cards, or whether a separate `constraints` array is cleaner.

### Step 6 — (Optional) Consider separating display data from match data

The sprites and colour for each archetype are purely UI concerns. If the archetype list grows, it may be worth splitting:
- `constants/archetypeDefinitions.ts` — the matching data (required, identifiers, excludes)
- `constants/archetypeDisplay.ts` — the sprite/colour mapping keyed by the same archetype key

This is not strictly necessary for correctness but improves separation of concerns. Defer unless the file is already feeling large.

---

## 6. What We Are NOT Changing

- The `DeckList` / `PokemonCard` types in `types/standing.ts` — no changes needed.
- The `getArchetype` function's public API — it still takes a `DeckList | string` and returns an `Archetype | null`. Callers don't change.
- The `imageSprites.ts` file — sprite references stay as-is.
- The overall concept of hardcoded archetypes — the meta is known and finite; a lookup table is the right approach. We are improving the structure, not replacing the strategy.

---

## 7. Open Questions to Resolve During Implementation

1. **How to handle `cardCount` rules?** (e.g., `quadThorns` requires exactly 4 Iron Thorns ex). Options: add a `minCount`/`exactCount` property on required/identifier entries, or keep a narrow `constraints` field for edge cases.

2. **Tie-breaking** — if two archetypes score identically, should the one with more `required` cards win, or do we need an explicit `priority` field as a final tiebreaker?

3. **Unknown vs null** — currently `getArchetype` returns the `unknownArchetype` object for unmatched decklists. Is that the right shape for downstream consumers, or should it return `null` and let the UI handle the fallback? (The existing tests expect `unknownArchetype`, so leave unchanged for now.)
