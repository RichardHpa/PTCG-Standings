import { useState, useCallback, useRef, useMemo } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { Link } from 'react-router-dom';

import { IconButton } from 'components/Button';
import { Drawer } from 'components/Drawer';
import { Paragraph } from 'components/Paragraph';
import { Card } from 'components/Card';

import { formatPlayerNameToUrl } from 'utils/parsePlayerUrl';
import { formatRecord } from 'helpers/formatRecord';

import { usePinnedPlayersContext } from 'providers/PinnedPlayersProvider';

import { PinIcon } from 'icons/PinIcon';

import type { Division } from 'types/divisions';
import type { Standing } from 'types/standing';
import type { CombinedInfo } from 'providers/PinnedPlayersProvider/types';

const id = 'pinned-player-drawer';

interface RowProps {
  data: CombinedInfo;
  closeDrawer: () => void;
}

interface Player {
  division: Division;
  player: Standing;
}

const getFirstLetterAndUpperCase = (str: string) => {
  return str.charAt(0).toUpperCase();
};

const Row = ({ data, closeDrawer }: RowProps) => {
  const players = useMemo(() => {
    return data.divisions.reduce<Player[]>((acc, { division, players }) => {
      return acc.concat(
        players.map(player => ({
          division,
          player,
        })),
      );
    }, []);
  }, [data]);

  return (
    <Card title={data.name}>
      <div className="divide-y divide-gray-200 text-sm font-medium dark:divide-gray-700">
        {players.map(player => {
          return (
            <Link
              key={player.player.name}
              to={`/tournaments/${data.tournamentId}/${player.division}/${formatPlayerNameToUrl(
                player.player.name,
              )}`}
              className="flex w-full cursor-pointer justify-between px-4 py-2 align-middle text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={closeDrawer}
            >
              <span>
                ({getFirstLetterAndUpperCase(player.division)}){' '}
                {player.player.placing} - {player.player.name}
              </span>
              <span>{formatRecord(player.player.record, true)}</span>
            </Link>
          );
        })}
      </div>
    </Card>
  );
};

export const PinnedPlayerDrawer = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const { hasPinnedPlayers, combinedPinnedPlayerDetails } =
    usePinnedPlayersContext();
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDrawer = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const handleCloseDrawer = useCallback(() => {
    setIsOpen(false);
  }, []);

  const virtualizer = useVirtualizer({
    count: combinedPinnedPlayerDetails.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 45,
  });
  const items = virtualizer.getVirtualItems();

  return (
    <>
      <IconButton
        icon={<PinIcon />}
        alt="View pinned players"
        variant="ghost"
        color={hasPinnedPlayers ? 'secondary' : 'alternative'}
        onClick={handleToggleDrawer}
        data-drawer-target={id}
        data-drawer-show={id}
        data-drawer-placement="right"
        aria-controls={id}
        // disabled={!hasPinnedPlayers}
      />

      <Drawer
        drawerId={id}
        title="Pinned players"
        open={isOpen}
        onClose={handleCloseDrawer}
      >
        <div className="flex flex-grow flex-col overflow-auto">
          {!hasPinnedPlayers && (
            <Paragraph>
              You haven't pinned any players yet. To pin a player, click the pin
              icon next to the player's name for a running tournament.
            </Paragraph>
          )}

          <div className="overflow-y-auto" ref={parentRef}>
            <div
              style={{
                height: virtualizer.getTotalSize(),
                width: '100%',
                position: 'relative',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  transform: `translateY(${items[0]?.start ?? 0}px)`,
                }}
              >
                {items.map(virtualRow => {
                  return (
                    <div
                      key={virtualRow.key}
                      data-index={virtualRow.index}
                      ref={virtualizer.measureElement}
                    >
                      <Row
                        data={combinedPinnedPlayerDetails[virtualRow.index]}
                        closeDrawer={handleCloseDrawer}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* {combinedPinnedPlayerDetails.map(
            ({ tournamentId, name, divisions }) => (
              <Card key={tournamentId} title={name}>
                <div className="p-2">
                  {divisions.map(({ division, players }) => (
                    <div key={division} className="flex flex-col gap-2">
                      <h6 className="text-base font-semibold">{division}</h6>

                      <ul className="flex flex-col gap-1">
                        {players.map(player => (
                          <li key={player.name}>{player.name}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            ),
          )} */}
        </div>
      </Drawer>
    </>
  );
};
