import { http, HttpResponse } from 'msw';

import { tournaments } from './fixtures/tournaments';
import {
  mastersStandings,
  seniorsStandings,
  juniorsStandings,
} from './fixtures/standings';
import duplicatePlayerNamesTournament from 'mocks/fixtures/specialTournaments/duplicatePlayerNames.json';
import juniorsSeniorsTournament from 'mocks/fixtures/specialTournaments/juniorsSeniors.json';

export const handlers = [
  http.get('/api/tournaments', () => {
    return HttpResponse.json(tournaments);
  }),

  http.get('/api/tournaments/:tournamentId', req => {
    const { tournamentId } = req.params;

    // This is a special case for the tournament with duplicate player names so we have a full json object to test against
    if (tournamentId === '0000121') {
      return HttpResponse.json(duplicatePlayerNamesTournament);
    }

    // This is a special case for the tournament with a combined juniors and seniors divisions so we have a full json object to test against
    if (tournamentId === '0000082') {
      return HttpResponse.json(juniorsSeniorsTournament);
    }

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
