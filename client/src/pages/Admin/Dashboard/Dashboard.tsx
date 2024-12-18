import { useRef, useCallback } from 'react';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { useNavigate } from 'react-router-dom';

import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { useGetTournaments } from 'queries/useGetTournaments';
import { Card } from 'components/Card';
import { IconButton } from 'components/Button';

import { VirtualizedTable } from 'components/VirtualizedTable';

import type { Tournament } from 'types/tournament';
import type { ColumnProps } from 'components/VirtualizedTable/types';

const columns: ColumnProps<Tournament>[] = [
  {
    key: 'name',
    header: 'Name',
    render: row => <Paragraph>{row.name}</Paragraph>,
  },
  {
    key: 'actions',
    header: 'Actions',
    align: 'right',
    render: row => (
      <IconButton
        alt={`Go to tournament ${row.name}`}
        variant="ghost"
        color="alternative"
        size="sm"
        icon={<ArrowRightIcon />}
      />
    ),
  },
];

export const Dashboard = () => {
  const { data, isLoading } = useGetTournaments({
    select: data => data.tcg.data,
  });
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleRowClick = useCallback(
    (row: Tournament) => {
      navigate(`tournaments/${row.id}`);
    },
    [navigate],
  );

  return (
    <div className="flex flex-col items-start gap-4">
      <Heading level="3">Pokemon Tournaments</Heading>

      {isLoading && <p>Loading...</p>}

      {data && (
        <div ref={containerRef} className="w-full">
          <Card>
            <VirtualizedTable
              columns={columns}
              data={data}
              containerRef={containerRef}
              estimateSize={50}
              header="none"
              onRowClick={handleRowClick}
              type="window"
            />
          </Card>
        </div>
      )}
    </div>
  );
};
