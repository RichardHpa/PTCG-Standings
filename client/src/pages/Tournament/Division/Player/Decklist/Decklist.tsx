import { useMemo } from 'react';

import { usePlayerContext } from 'providers/PlayerProvider';

import { DecklistGrid } from 'components/DecklistGrid';

import { Accordion } from 'components/Accordion';

import type { DeckList } from 'types/standing';
import type { FC } from 'react';

const DecklistInner: FC<{ decklist: DeckList }> = ({ decklist }) => {
  return <DecklistGrid decklist={decklist} />;
};

export const Decklist = () => {
  const { players } = usePlayerContext();

  const items = useMemo(() => {
    const playersWithDecklist = players.filter(player => {
      return player.decklist && typeof player.decklist === 'object';
    });
    console.log(playersWithDecklist);
    return playersWithDecklist.map(player => ({
      title: `${player.name} - currently at ${player.placing} place`,
      content: <DecklistInner decklist={player.decklist} />,
    }));
  }, [players]);

  if (players.length === 0) {
    return <div>Player not found</div>;
  }

  if (players.length > 1) {
    return (
      <div className="flex flex-col gap-4">
        <Accordion items={items} />
      </div>
    );
  }
  const player = players[0];
  return <DecklistInner decklist={player.decklist} />;
};
