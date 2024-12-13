import { useMemo } from 'react';

import { usePlayerContext } from 'providers/PlayerProvider';

import { DecklistGrid } from 'components/DecklistGrid';
import { Archetypes } from 'components/Archetypes';

import { Accordion } from 'components/Accordion';

import type { DeckList as DecklistType, Standing } from 'types/standing';
import type { FC } from 'react';

const hasDecklist = (player: Standing) => {
  return Boolean(player.decklist && typeof player.decklist === 'object');
};

const DecklistInner: FC<{ decklist: DecklistType }> = ({ decklist }) => {
  return <DecklistGrid decklist={decklist} />;
};

export const Decklist = () => {
  const { players } = usePlayerContext();
  // Archetypes
  const items = useMemo(() => {
    return players.map(player => {
      const playerHasDecklist = hasDecklist(player);
      return {
        title: playerHasDecklist
          ? `${player.name} - currently at ${player.placing} place`
          : `${player.name} - Decklist not found`,
        action: playerHasDecklist ? (
          <Archetypes decklist={player.decklist as DecklistType} size="small" />
        ) : undefined,
        content: playerHasDecklist ? (
          <DecklistInner decklist={player.decklist as DecklistType} />
        ) : (
          <div>Decklist not found</div>
        ),
        disabled: !playerHasDecklist,
      };
    });
  }, [players]);

  if (players.length > 1) {
    return (
      <div className="flex flex-col gap-4">
        <Accordion items={items} />
      </div>
    );
  }
  const player = players[0];

  if (!hasDecklist(player)) {
    return <div>Decklist not found</div>;
  }

  return <DecklistInner decklist={player.decklist as DecklistType} />;
};
