import { createContext, useContext } from 'react';

import { useGetTournament } from 'queries/useGetTournament';

import { LoadingPokeball } from 'components/LoadingPokeball';
import { Notice } from 'components/Notice';

import { getArchetype } from 'helpers/getArchetype';

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

const quirkyErrorMessage = [
  "Looks like Jigglypuff's lullaby put the servers to sleep! We couldn't retrieve the tournament details. Give it another try—hopefully no one's snoozing next time!",
  "Uh-oh, Snorlax is blocking the path! We couldn't fetch the tournament info. Try again later—maybe with a Poké Flute!",
  "It seems Team Rocket is up to no good again! The tournament details are out of reach. But don't worry, we'll blast them off next time!",
  "It's a wild Pokémon! The tournament details are missing. But don't worry, we'll catch 'em all next time!",
  "Charmander's tail flame might have burned the cables! The tournament info is missing. Give it another shot before things get too toasty!",
  "Looks like Ditto transformed into an error! We can't find the tournament data right now. Retry soon—it might change back!",
  "Magikarp is splashing around in the system, and nothing happened! We couldn't load the tournament info. Maybe try a stronger move?",
];

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
    return (
      <Notice status="error">
        {
          quirkyErrorMessage[
            Math.floor(Math.random() * quirkyErrorMessage.length)
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
