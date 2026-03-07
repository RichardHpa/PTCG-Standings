import type { DeckList } from 'types/standing';
import type { ArchetypeDefinition, CardRef } from 'constants/archetypes';

/**
 * Checks whether a single card reference is satisfied by the decklist.
 *
 * Matches on card name within the correct category (pokemon/trainer/energy).
 * If `exactCount` is set on the ref, the card must appear with that exact
 * count in the list (e.g. requiring exactly 4 Iron Thorns ex for Quad Thorns).
 * Without `exactCount`, any count is accepted.
 */
const cardPresent = (decklist: DeckList, ref: CardRef): boolean => {
  const cards = decklist[ref.type];
  return cards.some(card => {
    if (card.name !== ref.name) return false;
    if (ref.exactCount !== undefined) return card.count === ref.exactCount;
    return true;
  });
};

/**
 * Returns true only if every card in `required` is present in the decklist.
 * This is a pass/fail gate — a candidate archetype is not even considered
 * unless all its required cards are found.
 */
export const meetsRequired = (
  decklist: DeckList,
  required: ArchetypeDefinition['required'],
): boolean => required.every(ref => cardPresent(decklist, ref));

/**
 * Returns true if any card in `excludes` is present in the decklist.
 * A single excluded card match is enough to immediately rule out the archetype.
 * Defaults to an empty list (nothing excluded) when the field is omitted.
 */
export const isExcluded = (
  decklist: DeckList,
  excludes: ArchetypeDefinition['excludes'] = [],
): boolean => excludes.some(ref => cardPresent(decklist, ref));

/**
 * Counts how many of the archetype's identifier cards appear in the decklist.
 * A higher score means the decklist more closely resembles this specific
 * variant — used to pick between multiple candidates that share required cards.
 */
export const scoreIdentifiers = (
  decklist: DeckList,
  identifiers: ArchetypeDefinition['identifiers'],
): number => identifiers.filter(ref => cardPresent(decklist, ref)).length;

/**
 * Finds the best-matching archetype for a given decklist.
 *
 * Matching works in three stages:
 *
 * 1. GATE — filter to candidates where every required card is present and no
 *    excluded card is present. Any archetype failing either check is dropped.
 *
 * 2. SCORE — rank surviving candidates by how many of their identifier cards
 *    appear in the decklist. The highest score wins outright.
 *
 * 3. TIE-BREAKS (applied in order when scores are equal):
 *
 *    a) Fewest unmatched identifiers — an archetype whose identifiers are all
 *       satisfied beats one with identifiers that weren't found. For example,
 *       a generic "Dragapult Ex" definition (no identifiers) beats "Dragapult
 *       Iron Thorns" (identifier: Iron Thorns ex) when Iron Thorns ex is absent
 *       from the deck — the generic definition is fully satisfied, the specific
 *       variant has an unfulfilled expectation.
 *
 *    b) Most required cards — when two archetypes are equally satisfied, the
 *       one with a stricter entry gate (more required cards) wins. This handles
 *       cases where neither archetype defines identifiers but one requires a
 *       more specific combination of pokemon.
 *
 * Returns null if no candidate passes the gate.
 */
export const matchArchetype = (
  decklist: DeckList,
  archetypes: ArchetypeDefinition[],
): ArchetypeDefinition | null => {
  // Stage 1: gate — drop anything that doesn't meet required/excluded checks.
  const candidates = archetypes.filter(
    archetype =>
      meetsRequired(decklist, archetype.required) &&
      !isExcluded(decklist, archetype.excludes),
  );

  if (candidates.length === 0) return null;

  // Stages 2 & 3: score, then apply tie-breaks.
  return candidates.reduce((best, current) => {
    const bestScore = scoreIdentifiers(decklist, best.identifiers);
    const currentScore = scoreIdentifiers(decklist, current.identifiers);

    // Stage 2: highest identifier score wins outright.
    if (currentScore !== bestScore)
      return currentScore > bestScore ? current : best;

    // Tie-break (a): fewest unmatched identifiers.
    // e.g. 0 unmatched beats 1 unmatched even at equal scores.
    const bestUnmatched = best.identifiers.length - bestScore;
    const currentUnmatched = current.identifiers.length - currentScore;
    if (currentUnmatched !== bestUnmatched) {
      return currentUnmatched < bestUnmatched ? current : best;
    }

    // Tie-break (b): most required cards (strictest gate).
    return current.required.length > best.required.length ? current : best;
  });
};
