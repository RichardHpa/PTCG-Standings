import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://www.pokedata.ovh/apiv2/tcg/tournaments', () => {
    return HttpResponse.json({
      tcg: {
        type: 'tcg',
        data: [
          {
            id: '0000001',
            name: 'Pokémon Oceania TCG Regional Championship – Brisbane',
            date: {
              start: '2022-03-12',
              end: '2022-03-13',
            },
            tournamentStatus: 'running',
            decklists: 0,
            players: {
              juniors: '15',
              seniors: '16',
              masters: '151',
            },
            winners: {
              juniors: 'Luke B.',
              seniors: 'max k.',
              masters: 'Natalie M.',
            },
            roundNumbers: {
              juniors: 7,
              seniors: 7,
              masters: 11,
            },
            lastUpdated: '2023-03-30 02:03:41.000000',
            rk9link: 'z1QHQtOsGCKCeesCpPiO',
          },
        ],
      },
    });
  }),

  http.get(
    'https://www.pokedata.ovh/apiv2/tcg/division/masters+juniors+seniors/id/0000001',
    () => {}
  ),
];
