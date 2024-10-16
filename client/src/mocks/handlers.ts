import { http, HttpResponse } from 'msw';

import { tournaments } from './fixtures/tournaments';
import {
  mastersStandings,
  seniorsStandings,
  juniorsStandings,
} from './fixtures/standings';

export const handlers = [
  http.get('/api/tournaments', () => {
    return HttpResponse.json(tournaments);
  }),

  http.get('/api/tournaments/:tournamentId', req => {
    const { tournamentId } = req.params;
    const foundTournament = tournaments.tcg.data.find(
      tournament => tournament.id === tournamentId,
    );
    if (!foundTournament) {
      return HttpResponse.json({
        status: 404,
        statusText: `Tournament ${tournamentId} not found`,
      });
    }

    const tournamentObject = {
      type: 'tcg',
      tournament: {
        ...foundTournament,
        // This wont match the actual tournamentId of the rest of the tournament object
        id: tournamentId,
      },
      tournament_data: [
        {
          division: 'masters',
          data: mastersStandings,
        },
        {
          division: 'seniors',
          data: seniorsStandings,
        },
        {
          divisions: 'juniors',
          data: juniorsStandings,
        },
      ],
    };

    return HttpResponse.json(tournamentObject);
  }),
];
