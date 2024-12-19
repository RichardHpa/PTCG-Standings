import { useRef, useCallback } from 'react';
import { ArrowRightIcon } from '@heroicons/react/16/solid';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';
import { Notice } from 'components/Notice';
// import { useGetTournaments } from 'queries/useGetTournaments';
import { Card } from 'components/Card';
import { IconButton } from 'components/Button';
import { LoadingPokeball } from 'components/LoadingPokeball';

import { VirtualizedTable } from 'components/VirtualizedTable';

import { sendRequest, ApiMethod } from 'helpers/sendRequest';

import type { ColumnProps } from 'components/VirtualizedTable/types';

interface AdminTournament {
  id: number;
  name: string;
  location: string;
  status: string;
  event_type: string;
  season: string;
  starts_at: string;
  ends_at: string;
}

interface TournamentsApiResponse {
  data: {
    tournaments: AdminTournament[];
  };
}

const columns: ColumnProps<AdminTournament>[] = [
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

const tournamentsUrl = `https://ptcg-api.fly.dev/api/tournaments`;
const getTournaments = async (): Promise<TournamentsApiResponse> => {
  return sendRequest(ApiMethod.GET, tournamentsUrl);
};

const useGetTournaments = () => {
  return useQuery({
    queryKey: ['admin', 'tournaments'],
    queryFn: getTournaments,
    select: (data: TournamentsApiResponse) => {
      return data.data.tournaments;
    },
  });
};

export const Dashboard = () => {
  const { data, isPending, isError } = useGetTournaments();

  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleRowClick = useCallback(
    (row: AdminTournament) => {
      navigate(`tournaments/${row.id}`);
    },
    [navigate],
  );

  return (
    <div className="flex flex-col items-start gap-4">
      <Heading level="5">Pokemon Tournaments</Heading>

      {isPending && (
        <div className="flex w-full justify-center">
          <LoadingPokeball size={90} />
        </div>
      )}

      {isError && <Notice status="error">Error fetching tournaments</Notice>}

      {data && (
        <div ref={containerRef} className="w-full">
          <Card>
            <VirtualizedTable<AdminTournament>
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
