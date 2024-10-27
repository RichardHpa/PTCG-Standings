import { usePlayerContext } from 'providers/PlayerProvider';

import { PlayerInfo } from 'components/PlayerInfo';
import { Notice } from 'components/Notice';

export const Player = () => {
  const { players, division } = usePlayerContext();

  if (players.length === 0) {
    return <div>Player not found</div>;
  }

  if (players.length > 1) {
    return (
      <div className="flex flex-col gap-4">
        <Notice status="warning">
          We have found multiple players with the same name and from the same
          country. Since we cannot determine which player you are looking for,
          some of the data may be incorrect. This is a known issue and since RK9
          Labs doesn't provide unique identifiers for players, we cannot fix
          this. Hopefully they will add something in the future but for now we
          have to live with it.
        </Notice>
        {players.map(player => (
          <PlayerInfo key={player.name} player={player} division={division} />
        ))}
      </div>
    );
  }
  const player = players[0];
  return <PlayerInfo player={player} division={division} />;
};
