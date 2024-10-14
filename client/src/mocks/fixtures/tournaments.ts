import type { Tournament, TournamentsApiResponse } from 'types/tournament';

// Only have the first 5 tournaments for testing purposes

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
    juniors: 8,
    seniors: 8,
    masters: 17,
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
    juniors: '23',
    seniors: '36',
    masters: '373',
  },
  winners: {
    juniors: null,
    seniors: null,
    masters: null,
  },
  roundNumbers: {
    juniors: 8,
    seniors: 9,
    masters: 17,
  },
  lastUpdated: '2023-03-30 02:06:11.000000',
  rk9link: 'KTh3p4c9jkGnNGUq1hic',
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
    ],
  },
};
