import type { getArchetypeCountsProps } from './types';

type ArchetypeCount = {
  [key in string]: number;
};

interface ArchetypesCounts {
  totalCount: number;
  archetypes: ArchetypeCount;
  noDecklist: number;
}

export const getArchetypeCounts = ({ standings }: getArchetypeCountsProps) => {
  if (!standings) return undefined;
  const archetypeCounts: ArchetypesCounts = {
    totalCount: standings.length,
    archetypes: {},
    noDecklist: 0,
  };

  standings.forEach(standing => {
    if (standing.archetype) {
      if (!archetypeCounts.archetypes[standing.archetype]) {
        archetypeCounts.archetypes[standing.archetype] = 1;
      } else {
        archetypeCounts.archetypes[standing.archetype]++;
      }
    } else {
      archetypeCounts.noDecklist++;
    }
  });

  return archetypeCounts;
};
