// Indianapolis Pokémon TCG Regional Championship 2024 (0000121)
import duplicatePlayerNamesTournament from './specialTournaments/duplicatePlayerNames.json';
// 2023 Bogotá TCG Special Event (0000082)
import juniorsSeniorsTournament from './specialTournaments/juniorsSeniors.json';
// Worlds 2024
import worlds2024 from './specialTournaments/worlds2024.json';

import type {
  Tournament,
  TournamentsApiResponse,
  TournamentApiResponse,
} from 'types/tournament';

const typedDuplicatePlayerNamesTournament =
  duplicatePlayerNamesTournament as TournamentApiResponse;

const typedJuniorsSeniorsTournament =
  juniorsSeniorsTournament as TournamentApiResponse;

const typedWorlds2024 = worlds2024 as TournamentApiResponse;

export const runningTournament: Tournament = {
  id: '0000005',
  name: '2022 Pokémon TCG European International Championships',
  date: {
    start: '2022-04-22',
    end: '2022-04-24',
  },
  tournamentStatus: 'running',
  decklists: 0,
  players: {
    juniors: '46',
    seniors: '72',
    masters: '618',
  },
  winners: {
    juniors: null,
    seniors: null,
    masters: null,
  },
  roundNumbers: {
    juniors: 9,
    seniors: 10,
    masters: 17,
  },
  lastUpdated: '2023-03-30 02:08:35.000000',
  rk9link: 'euic-2022-tcg',
};

export const checkInTournament: Tournament = {
  id: '0000004',
  name: 'São Paulo TCG Regional Championship 2022',
  date: {
    start: '2022-04-02',
    end: '2022-04-03',
  },
  tournamentStatus: 'check-in',
  decklists: 0,
  players: {
    juniors: '21',
    seniors: '30',
    masters: '301',
  },
  winners: {
    juniors: null,
    seniors: null,
    masters: null,
  },
  roundNumbers: {
    juniors: 0,
    seniors: 0,
    masters: 0,
  },
  lastUpdated: '2023-03-30 02:06:59.000000',
  rk9link: 'rQVmywqbkFfR1y09R6rZ',
};

export const notStartedTournament: Tournament = {
  id: '0000003',
  name: 'Liverpool TCG Regional Championship 2022',
  date: {
    start: '2022-03-26',
    end: '2022-03-27',
  },
  tournamentStatus: 'not-started',
  decklists: 1,
  players: {
    juniors: 0,
    seniors: 0,
    masters: 0,
  },
  winners: {
    juniors: null,
    seniors: null,
    masters: null,
  },
  roundNumbers: {
    juniors: 0,
    seniors: 0,
    masters: 0,
  },
  lastUpdated: '2023-03-30 02:06:11.000000',
  rk9link: 'KTh3p4c9jkGnNGUq1hic',
};

export const finishedTournament: Tournament = {
  id: '0000006',
  name: 'Indianapolis TCG Regional Championship 2022',
  date: {
    start: '2022-05-06',
    end: '2022-05-08',
  },
  tournamentStatus: 'finished',
  decklists: 1,
  players: {
    juniors: 0,
    seniors: '63',
    masters: '1025',
  },
  winners: {
    juniors: null,
    seniors: 'Regan R.',
    masters: 'Ian R.',
  },
  roundNumbers: {
    juniors: null,
    seniors: 9,
    masters: 18,
  },
  lastUpdated: '2023-03-30 02:11:48.000000',
  rk9link: 'QRGsiZCkM3F314P9Th1b',
};

const tournamentWithDuplicatePlayerNames: Tournament = {
  ...typedDuplicatePlayerNamesTournament.tournament,
};

const tournamentWithJuniorsSeniors: Tournament = {
  ...typedJuniorsSeniorsTournament.tournament,
};

const tournamentWorlds2024: Tournament = {
  ...typedWorlds2024.tournament,
};

export const tournaments: TournamentsApiResponse = {
  dataLastUpdated: '10/11/2024, 2:57 PM',
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
        tournamentStatus: 'finished',
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
      {
        id: '0000002',
        name: 'Salt Lake City TCG Regional Championship 2022',
        date: {
          start: '2022-03-18',
          end: '2022-03-20',
        },
        tournamentStatus: 'finished',
        decklists: 0,
        players: {
          juniors: '28',
          seniors: '36',
          masters: '627',
        },
        winners: {
          juniors: 'Nathan O.',
          seniors: 'Caleb R.',
          masters: 'Andrew K.',
        },
        roundNumbers: {
          juniors: 8,
          seniors: 9,
          masters: 17,
        },
        lastUpdated: '2023-03-30 02:05:04.000000',
        rk9link: 'dqpquZcM3mh7WRw8KvDe',
      },
      { ...notStartedTournament },
      { ...checkInTournament },
      { ...runningTournament },
      { ...finishedTournament },
      { ...tournamentWorlds2024 },
      {
        id: '0000007',
        name: 'Bilbao TCG Special Championship',
        date: {
          start: '2022-05-07',
          end: '2022-05-08',
        },
        tournamentStatus: 'finished',
        decklists: 1,
        players: {
          juniors: '15',
          seniors: '29',
          masters: '276',
        },
        winners: {
          juniors: 'Nino L.',
          seniors: 'Nicholas C.',
          masters: 'Alessandro C.',
        },
        roundNumbers: {
          juniors: 7,
          seniors: 8,
          masters: 17,
        },
        lastUpdated: '2023-03-30 02:12:44.000000',
        rk9link: 'KHSJGQuJP8saUNljIrQy',
      },
      {
        id: '0000008',
        name: 'Joinville TCG Regional Championship 2022',
        date: {
          start: '2022-05-07',
          end: '2022-05-08',
        },
        tournamentStatus: 'finished',
        decklists: 1,
        players: {
          juniors: '16',
          seniors: '23',
          masters: '222',
        },
        winners: {
          juniors: 'Marcelo R.',
          seniors: 'Pedro Augusto C.',
          masters: 'Pedro P.',
        },
        roundNumbers: {
          juniors: 7,
          seniors: 8,
          masters: 11,
        },
        lastUpdated: '2023-03-30 02:13:24.000000',
        rk9link: 'nAxYfNLQZkoZqTTxWsYF',
      },
      {
        id: '0000009',
        name: 'Secaucus TCG Regional Championship 2022',
        date: {
          start: '2022-05-20',
          end: '2022-05-22',
        },
        tournamentStatus: 'finished',
        decklists: 1,
        players: {
          juniors: '37',
          seniors: '69',
          masters: '497',
        },
        winners: {
          juniors: 'Bruce B.',
          seniors: 'None',
          masters: 'Luke Smith',
        },
        roundNumbers: {
          juniors: 9,
          seniors: 10,
          masters: 17,
        },
        lastUpdated: '2023-03-30 02:15:05.000000',
        rk9link: '7zSI7SYvZb3gQCjXeJCS',
      },
      {
        id: '0000010',
        name: 'Pokémon Oceania TCG Regional Championship – Perth',
        date: {
          start: '2022-05-21',
          end: '2022-05-22',
        },
        tournamentStatus: 'finished',
        decklists: 0,
        players: {
          juniors: '11',
          seniors: '15',
          masters: '85',
        },
        winners: {
          juniors: 'Yuichi M.',
          seniors: 'Alex B.',
          masters: 'Matthew Burris',
        },
        roundNumbers: {
          juniors: 6,
          seniors: 7,
          masters: 10,
        },
        lastUpdated: '2023-03-30 02:15:23.000000',
        rk9link: 'feDsO6DZWBMC1SKbE9ew',
      },
      { ...tournamentWithDuplicatePlayerNames },
      { ...tournamentWithJuniorsSeniors },
      {
        id: '0000134',
        name: 'Lille Pokémon TCG Regional Championship 2025',
        date: {
          start: '2024-10-19',
          end: '2024-10-20',
        },
        decklists: 0,
        players: {
          juniors: 135,
          seniors: 145,
          masters: 1311,
        },
        winners: {
          juniors: 'Franciszek R. [PL]',
          seniors: 'Luka L. [FR]',
          masters: 'James Cox [NL]',
        },
        tournamentStatus: 'finished',
        roundNumbers: {
          juniors: 13,
          seniors: 13,
          masters: 16,
        },
        lastUpdated: '2024-10-22 20:12:12.265418',
        rk9link: 'LI01majszra4hnrtxJST',
      },
    ],
  },
};
