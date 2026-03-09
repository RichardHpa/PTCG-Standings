import { createContext, useContext } from 'react';

import { useGetTournament } from 'queries/useGetTournament';

import { LoadingPokeball } from 'components/LoadingPokeball';
import { Notice } from 'components/Notice';

import { getArchetype } from 'helpers/getArchetype';

import { quirkyTournamentErrorMessages } from 'constants/errorMessages';

import type { ReactNode } from 'react';
import type { TournamentContextProps } from './types';
import type { TournamentData } from 'types/tournament';
import type { DivisionObject } from 'types/divisions';
import type { Standing } from 'types/standing';

const TournamentContext = createContext<TournamentContextProps | null>(null);

export const useTournamentContext = () => {
  const currentTournament = useContext(TournamentContext);
  if (!currentTournament) {
    throw new Error('TournamentContext: No value provided');
  }

  return currentTournament;
};

export const TournamentContextProvider = ({
  children,
  tournamentId,
}: {
  children: ReactNode;
  tournamentId: string | number;
}) => {
  const tournamentQuery = useGetTournament({
    tournamentId,
    select: data => {
      const allDivisions = data.tournament_data;
      const formattedDivision: TournamentData[] = [];
      allDivisions.forEach(division => {
        const divisionData = division.data;

        if (!divisionData) {
          return;
        }
        divisionData.map(standing => {
          const archetype = getArchetype(standing.decklist);
          if (archetype) {
            standing.archetype = archetype.key;
          }
        });
        formattedDivision.push({
          division: division.division,
          data: divisionData,
        });
        return divisionData;
      });

      const divisionObject: DivisionObject = formattedDivision.reduce(
        (acc: { [key: string]: Standing[] }, curr) => {
          acc[curr.division] = curr.data;
          return acc;
        },
        {},
      );

      return {
        tournament: data.tournament,
        divisions: formattedDivision,
        divisionObject,
      };
    },
  });

  if (tournamentQuery.isPending) {
    return (
      <div className="flex flex-col items-center justify-center">
        <LoadingPokeball alt="Loading tournament data..." showAlt size="100" />
      </div>
    );
  }

  if (tournamentQuery.isError) {
    console.error(tournamentQuery.error);
    return (
      <Notice status="error">
        {
          quirkyTournamentErrorMessages[
            Math.floor(Math.random() * quirkyTournamentErrorMessages.length)
          ]
        }
      </Notice>
    );
  }

  return (
    <TournamentContext.Provider value={tournamentQuery.data}>
      {children}
    </TournamentContext.Provider>
  );
};
