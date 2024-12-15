import { useCallback } from 'react';
import { PinIcon } from 'icons/PinIcon';
import { IconButton } from 'components/Button';

import { usePinnedPlayersContext } from 'providers/PinnedPlayersProvider';

import type { PinPlayerButtonProps } from './types';
import type { FC, MouseEvent } from 'react';

export const PinPlayerButton: FC<PinPlayerButtonProps> = ({
  tournamentId,
  player,
  division,
}) => {
  const { togglePlayer, isPlayerPinned } = usePinnedPlayersContext();

  const handleOnClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      const playerName = player.name;
      togglePlayer(tournamentId, division, playerName);
    },
    [division, player, togglePlayer, tournamentId],
  );

  return (
    <IconButton
      alt={`pin ${player.name}`}
      icon={<PinIcon />}
      color={
        isPlayerPinned(tournamentId, division, player.name)
          ? 'primary'
          : 'alternative'
      }
      variant="ghost"
      size="sm"
      onClick={handleOnClick}
    />
  );
};
