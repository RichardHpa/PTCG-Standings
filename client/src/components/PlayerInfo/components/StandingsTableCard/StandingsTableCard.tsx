import { useMemo, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Card } from 'components/Card';
import { VirtualizedTable } from 'components/VirtualizedTable';
import { PinPlayerButton } from 'components/PinPlayer';

import { formatPlayerName } from 'helpers/formatPlayerName';
import { formatPlayerNameToUrl } from 'utils/parsePlayerUrl';

import { useTournamentContext } from 'providers/TournamentProvider';

import type { Standing } from 'types/standing';
import type { ColumnProps } from 'components/VirtualizedTable/types';
import type { StandingsTableCardProps } from './types';

export const StandingsTableCard = ({
  division,
  playerIndex,
}: StandingsTableCardProps) => {
  const navigate = useNavigate();
  const { divisions, tournament } = useTournamentContext();
  const listRef = useRef<HTMLDivElement | null>(null);

  const columns: ColumnProps<Standing>[] = useMemo(() => {
    return [
      {
        key: 'name',
        header: 'Player',
        render: row => (
          <div className="flex items-center gap-4">
            <span className="font-extrabold">{row.placing}</span>
            <span className="font-medium">{formatPlayerName(row.name)}</span>
          </div>
        ),
      },
      {
        key: 'action',
        header: '',
        align: 'right',
        size: 'small',
        render: row => (
          <PinPlayerButton
            player={row}
            division={division}
            tournamentId={tournament.id}
          />
        ),
      },
    ];
  }, [division, tournament.id]);

  const standings = useMemo(() => {
    const divisionData = divisions.find(d => d.division === division)!;
    return divisionData.data;
  }, [division, divisions]);

  const handleOnRowClick = useCallback(
    (player: Standing) => {
      navigate(
        `/tournaments/${tournament.id}/${division}/${formatPlayerNameToUrl(player.name)}`,
      );
    },
    [division, navigate, tournament.id],
  );
  return (
    <Card title="Current Standings">
      <div className="h-full overflow-auto" ref={listRef}>
        <div style={{ overflow: 'visible', height: '0px' }} className="w-full">
          <VirtualizedTable<Standing>
            tableId={`${playerIndex}-${tournament.id}-${division}-standings`}
            data={standings}
            columns={columns}
            containerRef={listRef}
            header="none"
            onRowClick={handleOnRowClick}
            scrollToIndex={playerIndex}
            estimateSize={50}
          />
        </div>
      </div>
    </Card>
  );
};
