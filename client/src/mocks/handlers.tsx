import { http, HttpResponse } from 'msw';

import { tournaments } from './fixtures/tournaments';
import {
  mastersStandings,
  seniorsStandings,
  juniorsStandings,
} from './fixtures/standings';
import duplicatePlayerNamesTournament from 'mocks/fixtures/specialTournaments/duplicatePlayerNames.json';
import juniorsSeniorsTournament from 'mocks/fixtures/specialTournaments/juniorsseniors.json';
import worlds2024 from 'mocks/fixtures/specialTournaments/worlds2024.json';

// NOTE: there must be a better way to to this but for some reason dynamic imports are not working
import round1 from 'mocks/fixtures/rounds/0000109/masters/1.json';
import round2 from 'mocks/fixtures/rounds/0000109/masters/2.json';
import round3 from 'mocks/fixtures/rounds/0000109/masters/3.json';
import round4 from 'mocks/fixtures/rounds/0000109/masters/4.json';
import round5 from 'mocks/fixtures/rounds/0000109/masters/5.json';
import round6 from 'mocks/fixtures/rounds/0000109/masters/6.json';
import round7 from 'mocks/fixtures/rounds/0000109/masters/7.json';
import round8 from 'mocks/fixtures/rounds/0000109/masters/8.json';
import round9 from 'mocks/fixtures/rounds/0000109/masters/9.json';
import round10 from 'mocks/fixtures/rounds/0000109/masters/10.json';
import round11 from 'mocks/fixtures/rounds/0000109/masters/11.json';
import round12 from 'mocks/fixtures/rounds/0000109/masters/12.json';
import round13 from 'mocks/fixtures/rounds/0000109/masters/13.json';
import round14 from 'mocks/fixtures/rounds/0000109/masters/14.json';
import round15 from 'mocks/fixtures/rounds/0000109/masters/15.json';
import round16 from 'mocks/fixtures/rounds/0000109/masters/16.json';
import round17 from 'mocks/fixtures/rounds/0000109/masters/17.json';

export const handlers = [
  http.get('/api/tournaments', () => {
    // need to sort the tournaments by tournament.date.start
    const sortedTournaments = tournaments.tcg.data.sort((a, b) => {
      return (
        new Date(a.date.start).getTime() - new Date(b.date.start).getTime()
      );
    });

    const res = {
      dataLastUpdated: tournaments.dataLastUpdated,
      tcg: {
        type: 'tcg',
        data: sortedTournaments,
      },
    };

    return HttpResponse.json(res);
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

    // This is a special case for the 2024 World Championships so we have a full json object to test against
    if (tournamentId === '0000128') {
      return HttpResponse.json(worlds2024);
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
          division: 'juniors',
          data: juniorsStandings,
        },
      ],
    };

    return HttpResponse.json(tournamentObject);
  }),

  http.get(
    '/api/tournaments/:tournamentId/:division/rounds/:roundNumber',
    async req => {
      const { tournamentId, division, roundNumber } = req.params;

      // NOTE: I need to figure out how to get the round data for the tournament and division. Currently I cant use a variable for the roundNumber in the import path
      // const file = await import('mocks/fixtures/rounds/0000109/masters/1.json');
      // if (file) {
      //   const { default: res } = file;
      //   return HttpResponse.json(res);
      // }

      if (roundNumber === '1') {
        return HttpResponse.json(round1);
      } else if (roundNumber === '2') {
        return HttpResponse.json(round2);
      } else if (roundNumber === '3') {
        return HttpResponse.json(round3);
      } else if (roundNumber === '4') {
        return HttpResponse.json(round4);
      } else if (roundNumber === '5') {
        return HttpResponse.json(round5);
      } else if (roundNumber === '6') {
        return HttpResponse.json(round6);
      } else if (roundNumber === '7') {
        return HttpResponse.json(round7);
      } else if (roundNumber === '8') {
        return HttpResponse.json(round8);
      } else if (roundNumber === '9') {
        return HttpResponse.json(round9);
      } else if (roundNumber === '10') {
        return HttpResponse.json(round10);
      } else if (roundNumber === '11') {
        return HttpResponse.json(round11);
      } else if (roundNumber === '12') {
        return HttpResponse.json(round12);
      } else if (roundNumber === '13') {
        return HttpResponse.json(round13);
      } else if (roundNumber === '14') {
        return HttpResponse.json(round14);
      } else if (roundNumber === '15') {
        return HttpResponse.json(round15);
      } else if (roundNumber === '16') {
        return HttpResponse.json(round16);
      } else if (roundNumber === '17') {
        return HttpResponse.json(round17);
      }

      return HttpResponse.json({
        status: 404,
        statusText: `Round ${roundNumber} for tournament ${tournamentId} and division ${division} not found`,
      });
    },
  ),
];
