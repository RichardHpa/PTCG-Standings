import { useMemo } from 'react';

import { usePlayerContext } from 'providers/PlayerProvider';

import { PlayerInfo } from 'components/PlayerInfo';

import { Accordion } from 'components/Accordion';

export const Player = () => {
  const { players, division } = usePlayerContext();

  const items = useMemo(() => {
    return players.map(player => ({
      title: `${player.name} - currently at ${player.placing} place`,
      content: <PlayerInfo player={player} division={division} />,
    }));
  }, [division, players]);

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
  return <PlayerInfo player={player} division={division} />;
};
