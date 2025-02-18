import type { Standing } from 'types/standing';

// NOTE: These standings were taken from the Melbourne Pokémon TCG Regional Championship 2024. They will be used for all of the tournaments when msw is enabled

export const mastersStandings: Standing[] = [
  {
    name: 'Brent Tonisson [AU]',
    placing: 1,
    record: {
      wins: 13,
      losses: 1,
      ties: 3,
    },
    resistances: {
      self: 0.7,
      opp: 0.6,
      oppopp: 0.584,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Comfey',
          number: '79',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina V',
          number: '130',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina VSTAR',
          number: '131',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 4,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 4,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 4,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
      ],
      energy: [
        {
          count: 4,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
        {
          count: 4,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Nick Shortt [NZ]',
        result: 'W',
        table: 161,
      },
      '2': {
        name: 'Jake Cruwys [AU]',
        result: 'W',
        table: 109,
      },
      '3': {
        name: 'Alvin Hall [AU]',
        result: 'W',
        table: 35,
      },
      '4': {
        name: 'Jeremy Evans [AU]',
        result: 'W',
        table: 16,
      },
      '5': {
        name: 'Thomas McCawley [AU]',
        result: 'L',
        table: 6,
      },
      '6': {
        name: 'Robert Seymour [AU]',
        result: 'W',
        table: 15,
      },
      '7': {
        name: 'Haru Nishikawa [JP]',
        result: 'W',
        table: 9,
      },
      '8': {
        name: 'Stephen Iskandar [AU]',
        result: 'W',
        table: 6,
      },
      '9': {
        name: 'Jose de la garma [AU]',
        result: 'W',
        table: 4,
      },
      '10': {
        name: 'Tim Franklin [AU]',
        result: 'W',
        table: 3,
      },
      '11': {
        name: 'Keito Arai [JP]',
        result: 'T',
        table: 3,
      },
      '12': {
        name: 'Gabriel Smart [US]',
        result: 'W',
        table: 3,
      },
      '13': {
        name: 'Angus Johnson [AU]',
        result: 'T',
        table: 3,
      },
      '14': {
        name: 'Christian Viti [AU]',
        result: 'T',
        table: 3,
      },
      '15': {
        name: 'Siu Chun Lee [AU]',
        result: 'W',
        table: 3,
      },
      '16': {
        name: 'Christian Viti [AU]',
        result: 'W',
        table: 3,
      },
      '17': {
        name: 'Haru Nishikawa [JP]',
        result: 'W',
        table: 3,
      },
    },
  },
  {
    name: 'Haru Nishikawa [JP]',
    placing: 2,
    record: {
      wins: 12,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.9,
      opp: 0.56,
      oppopp: 0.5780000000000001,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Charmander',
          number: '4',
          set: 'MEW',
        },
        {
          count: 2,
          name: 'Pidgey',
          number: '16',
          set: 'MEW',
        },
        {
          count: 1,
          name: 'Mew',
          number: '11',
          set: 'CEL',
        },
        {
          count: 1,
          name: 'Rotom V',
          number: '45',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Charmander',
          number: '26',
          set: 'OBF',
        },
        {
          count: 2,
          name: 'Pidgeot ex',
          number: '164',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Radiant Charizard',
          number: '11',
          set: 'PGO',
        },
        {
          count: 3,
          name: 'Charizard ex',
          number: '125',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Charmeleon',
          number: '27',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Lumineon V',
          number: '40',
          set: 'BRS',
        },
      ],
      trainer: [
        {
          count: 1,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 1,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 3,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 4,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Arven',
          number: '186',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Choice Belt',
          number: '211',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
      ],
      energy: [
        {
          count: 7,
          name: 'Fire Energy - Basic',
          number: '153',
          set: 'CRZ',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Shaun Kerr-Talbot [AU]',
        result: 'W',
        table: 236,
      },
      '2': {
        name: 'Tyler Bishop [AU]',
        result: 'W',
        table: 37,
      },
      '3': {
        name: 'Christian Viti [AU]',
        result: 'L',
        table: 18,
      },
      '4': {
        name: 'Ashley Coulthard [AU]',
        result: 'W',
        table: 77,
      },
      '5': {
        name: 'Ryan Burt [AU]',
        result: 'W',
        table: 34,
      },
      '6': {
        name: 'Henry Brand [AU]',
        result: 'W',
        table: 20,
      },
      '7': {
        name: 'Brent Tonisson [AU]',
        result: 'L',
        table: 9,
      },
      '8': {
        name: 'Dylan Graefe [AU]',
        result: 'W',
        table: 32,
      },
      '9': {
        name: 'xinzhe hou [AU]',
        result: 'T',
        table: 15,
      },
      '10': {
        name: 'YiFei Ruan [AU]',
        result: 'W',
        table: 14,
      },
      '11': {
        name: 'Daniel Ross-Brown [AU]',
        result: 'W',
        table: 10,
      },
      '12': {
        name: 'Natalie Millar [AU]',
        result: 'T',
        table: 8,
      },
      '13': {
        name: 'Kaiwen Cabbabe [AU]',
        result: 'W',
        table: 10,
      },
      '14': {
        name: 'Angus Johnson [AU]',
        result: 'W',
        table: 5,
      },
      '15': {
        name: 'Jettano Posani [AU]',
        result: 'W',
        table: 5,
      },
      '16': {
        name: 'Natalie Millar [AU]',
        result: 'W',
        table: 4,
      },
      '17': {
        name: 'Brent Tonisson [AU]',
        result: 'L',
        table: 3,
      },
    },
  },
  {
    name: 'Natalie Millar [AU]',
    placing: 3,
    record: {
      wins: 11,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.9,
      opp: 0.64,
      oppopp: 0.558,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Ralts',
          number: '60',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Kirlia',
          number: '60',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Kirlia',
          number: '68',
          set: 'SIT',
        },
        {
          count: 2,
          name: 'Gardevoir ex',
          number: '86',
          set: 'SVI',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: 'GG06',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Cresselia',
          number: '74',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Scream Tail',
          number: '86',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Zacian V',
          number: '16',
          set: 'CEL',
        },
        {
          count: 2,
          name: 'Gardevoir',
          number: 'TG05',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 4,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 3,
          name: 'Fog Crystal',
          number: '140',
          set: 'CRE',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: "Professor Turo's Scenario",
          number: '171',
          set: 'PAR',
        },
        {
          count: 2,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
      ],
      energy: [
        {
          count: 3,
          name: 'Reversal Energy - Special',
          number: '192',
          set: 'PAL',
        },
        {
          count: 10,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'xingyu huang [AT]',
        result: 'W',
        table: 254,
      },
      '2': {
        name: 'Daniel Ross-Brown [AU]',
        result: 'W',
        table: 30,
      },
      '3': {
        name: 'Alan Quach [NZ]',
        result: 'W',
        table: 17,
      },
      '4': {
        name: 'Thomas Thoonen [AU]',
        result: 'W',
        table: 4,
      },
      '5': {
        name: 'Louis Pozzacchio [AU]',
        result: 'T',
        table: 4,
      },
      '6': {
        name: 'Siu Chun Lee [AU]',
        result: 'L',
        table: 6,
      },
      '7': {
        name: 'Bailey Craig [AU]',
        result: 'L',
        table: 20,
      },
      '8': {
        name: 'Mitch Knuckey [AU]',
        result: 'W',
        table: 56,
      },
      '9': {
        name: 'Joel Suryadi [AU]',
        result: 'W',
        table: 37,
      },
      '10': {
        name: 'Nigel Tan [NZ]',
        result: 'W',
        table: 21,
      },
      '11': {
        name: 'Christian Delloiaco [AU]',
        result: 'W',
        table: 16,
      },
      '12': {
        name: 'Haru Nishikawa [JP]',
        result: 'T',
        table: 8,
      },
      '13': {
        name: 'Manuel Jorach [AT]',
        result: 'W',
        table: 7,
      },
      '14': {
        name: 'Gabriel Smart [US]',
        result: 'W',
        table: 6,
      },
      '15': {
        name: 'Nigel Tan [NZ]',
        result: 'W',
        table: 6,
      },
      '16': {
        name: 'Haru Nishikawa [JP]',
        result: 'L',
        table: 4,
      },
    },
  },
  {
    name: 'Christian Viti [AU]',
    placing: 4,
    record: {
      wins: 11,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.9,
      opp: 0.51,
      oppopp: 0.588,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Comfey',
          number: 'SWSH242',
          set: 'PR',
        },
        {
          count: 3,
          name: 'Giratina VSTAR',
          number: '131',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina V',
          number: '185',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Spiritomb',
          number: '89',
          set: 'PAL',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 2,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
      ],
      energy: [
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 4,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 4,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Lily Ly [AU]',
        result: 'W',
        table: 147,
      },
      '2': {
        name: 'Deacan Page [AU]',
        result: 'W',
        table: 46,
      },
      '3': {
        name: 'Haru Nishikawa [JP]',
        result: 'W',
        table: 18,
      },
      '4': {
        name: 'Tim Franklin [AU]',
        result: 'L',
        table: 6,
      },
      '5': {
        name: 'Ayane Matsumoto [AU]',
        result: 'W',
        table: 51,
      },
      '6': {
        name: 'Darcy Ryan [AU]',
        result: 'W',
        table: 14,
      },
      '7': {
        name: 'Simon Williams [AU]',
        result: 'W',
        table: 14,
      },
      '8': {
        name: 'Takuma Tominaga [JP]',
        result: 'T',
        table: 9,
      },
      '9': {
        name: 'Keito Arai [JP]',
        result: 'L',
        table: 10,
      },
      '10': {
        name: 'Stephen Iskandar [AU]',
        result: 'W',
        table: 23,
      },
      '11': {
        name: 'Jorge Soria [AU]',
        result: 'W',
        table: 17,
      },
      '12': {
        name: 'Thomas McCawley [AU]',
        result: 'W',
        table: 7,
      },
      '13': {
        name: 'Jose de la garma [AU]',
        result: 'W',
        table: 4,
      },
      '14': {
        name: 'Brent Tonisson [AU]',
        result: 'T',
        table: 3,
      },
      '15': {
        name: 'Tim Franklin [AU]',
        result: 'W',
        table: 4,
      },
      '16': {
        name: 'Brent Tonisson [AU]',
        result: 'L',
        table: 3,
      },
    },
  },
  {
    name: 'Tim Franklin [AU]',
    placing: 5,
    record: {
      wins: 9,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.5,
      opp: 0.6199999999999999,
      oppopp: 0.554,
    },
    decklist: {
      pokemon: [
        {
          count: 2,
          name: 'Roaring Moon ex',
          number: '262',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Dragonite V',
          number: 'SWSH154',
          set: 'PR',
        },
        {
          count: 4,
          name: 'Comfey',
          number: '79',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Iron Hands ex',
          number: '70',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 4,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 2,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Hisuian Heavy Ball',
          number: '146',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 3,
          name: 'PokeStop',
          number: '68',
          set: 'PGO',
        },
        {
          count: 1,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Pal Pad',
          number: '172',
          set: 'SSH',
        },
      ],
      energy: [
        {
          count: 4,
          name: 'Darkness Energy - Basic',
          number: '158',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Lightning Energy - Basic',
          number: '155',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Zachary Vella [AU]',
        result: 'W',
        table: 261,
      },
      '2': {
        name: 'James Williams [AU]',
        result: 'W',
        table: 25,
      },
      '3': {
        name: 'Max Kennedy [AU]',
        result: 'W',
        table: 44,
      },
      '4': {
        name: 'Christian Viti [AU]',
        result: 'W',
        table: 6,
      },
      '5': {
        name: 'Max Prescott [AU]',
        result: 'W',
        table: 7,
      },
      '6': {
        name: 'Xinfang Wang [AU]',
        result: 'W',
        table: 5,
      },
      '7': {
        name: 'Keito Arai [JP]',
        result: 'T',
        table: 3,
      },
      '8': {
        name: 'Siu Chun Lee [AU]',
        result: 'W',
        table: 4,
      },
      '9': {
        name: 'Angus Johnson [AU]',
        result: 'W',
        table: 3,
      },
      '10': {
        name: 'Brent Tonisson [AU]',
        result: 'L',
        table: 3,
      },
      '11': {
        name: 'Angus Johnson [AU]',
        result: 'T',
        table: 4,
      },
      '12': {
        name: 'Harry Shallcrass [NZ]',
        result: 'T',
        table: 5,
      },
      '13': {
        name: 'James Goreing [AU]',
        result: 'W',
        table: 5,
      },
      '14': {
        name: 'Siu Chun Lee [AU]',
        result: 'T',
        table: 4,
      },
      '15': {
        name: 'Christian Viti [AU]',
        result: 'L',
        table: 4,
      },
    },
  },
  {
    name: 'Jettano Posani [AU]',
    placing: 6,
    record: {
      wins: 9,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.8,
      opp: 0.5,
      oppopp: 0.5660000000000001,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Ralts',
          number: '60',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Ralts',
          number: '67',
          set: 'SIT',
        },
        {
          count: 3,
          name: 'Kirlia',
          number: 'SWSH271',
          set: 'PR',
        },
        {
          count: 1,
          name: 'Kirlia',
          number: '60',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Gardevoir',
          number: 'TG05',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Mew',
          number: 'GG10',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Cresselia',
          number: '74',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: 'GG06',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Zacian V',
          number: '16',
          set: 'CEL',
        },
        {
          count: 1,
          name: 'Scream Tail',
          number: '65',
          set: 'SVP',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Gardevoir ex',
          number: '233',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Gardevoir ex',
          number: '245',
          set: 'SVI',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Avery',
          number: '130',
          set: 'CRE',
        },
        {
          count: 1,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 1,
          name: "Professor Turo's Scenario",
          number: '171',
          set: 'PAR',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 3,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 3,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Fog Crystal',
          number: '140',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
      ],
      energy: [
        {
          count: 2,
          name: 'Reversal Energy - Special',
          number: '192',
          set: 'PAL',
        },
        {
          count: 10,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Samantha Turner [AU]',
        result: 'W',
        table: 248,
      },
      '2': {
        name: 'Angus Johnson [AU]',
        result: 'L',
        table: 31,
      },
      '3': {
        name: 'Sean Takemoto [AU]',
        result: 'T',
        table: 137,
      },
      '4': {
        name: 'Oliver Karmel-Shann [CA]',
        result: 'W',
        table: 152,
      },
      '5': {
        name: 'Jake Cruwys [AU]',
        result: 'W',
        table: 90,
      },
      '6': {
        name: 'Ancel Franklin [AU]',
        result: 'W',
        table: 43,
      },
      '7': {
        name: 'Rostin Luo [NZ]',
        result: 'T',
        table: 22,
      },
      '8': {
        name: 'Andre Pollacchi [AU]',
        result: 'W',
        table: 36,
      },
      '9': {
        name: 'Hakim Moussaoui [AU]',
        result: 'W',
        table: 20,
      },
      '10': {
        name: 'Edin Visca [AU]',
        result: 'W',
        table: 12,
      },
      '11': {
        name: 'Manuel Jorach [AT]',
        result: 'T',
        table: 9,
      },
      '12': {
        name: 'Christopher Mathers [AU]',
        result: 'T',
        table: 10,
      },
      '13': {
        name: 'Kenny Potter [NZ]',
        result: 'W',
        table: 15,
      },
      '14': {
        name: 'Thomas McCawley [AU]',
        result: 'W',
        table: 9,
      },
      '15': {
        name: 'Haru Nishikawa [JP]',
        result: 'L',
        table: 5,
      },
    },
  },
  {
    name: 'Nigel Tan [NZ]',
    placing: 7,
    record: {
      wins: 10,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.8,
      opp: 0.48,
      oppopp: 0.5720000000000001,
    },
    decklist: {
      pokemon: [
        {
          count: 1,
          name: 'Luxray',
          number: '71',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Drapion V',
          number: 'GG49',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Mew ex',
          number: '205',
          set: 'MEW',
        },
        {
          count: 1,
          name: 'Lugia V',
          number: '186',
          set: 'SIT',
        },
        {
          count: 2,
          name: 'Lugia V',
          number: '185',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Radiant Charizard',
          number: '20',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Wyrdeer V',
          number: '180',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Snorlax',
          number: 'TG10',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Lumineon V',
          number: 'GG39',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Cobalion',
          number: '126',
          set: 'SIT',
        },
        {
          count: 4,
          name: 'Archeops',
          number: 'SWSH272',
          set: 'PR',
        },
        {
          count: 3,
          name: 'Lugia VSTAR',
          number: '211',
          set: 'SIT',
        },
      ],
      trainer: [
        {
          count: 2,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
        {
          count: 2,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 3,
          name: 'Professor Burnet',
          number: 'SWSH167',
          set: 'PR',
        },
        {
          count: 2,
          name: 'Mesagoza',
          number: '178',
          set: 'SVI',
        },
        {
          count: 4,
          name: 'Capturing Aroma',
          number: '153',
          set: 'SIT',
        },
        {
          count: 4,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
      ],
      energy: [
        {
          count: 1,
          name: 'Luminous Energy - Special',
          number: '191',
          set: 'PAL',
        },
        {
          count: 4,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Therapeutic Energy - Special',
          number: '193',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Reversal Energy - Special',
          number: '192',
          set: 'PAL',
        },
        {
          count: 3,
          name: 'Gift Energy - Special',
          number: '171',
          set: 'LOR',
        },
        {
          count: 4,
          name: 'Double Turbo Energy - Special',
          number: '216',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'V Guard Energy - Special',
          number: '169',
          set: 'SIT',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Emma Baker [AU]',
        result: 'W',
        table: 211,
      },
      '2': {
        name: 'Diego Gatica [CL]',
        result: 'W',
        table: 97,
      },
      '3': {
        name: 'YiFei Ruan [AU]',
        result: 'T',
        table: 10,
      },
      '4': {
        name: 'charles limbrick [AU]',
        result: 'L',
        table: 35,
      },
      '5': {
        name: 'Michael Hicks [AU]',
        result: 'L',
        table: 81,
      },
      '6': {
        name: 'James Futcher [AU]',
        result: 'W',
        table: 115,
      },
      '7': {
        name: 'Rogan Gilbertson [AU]',
        result: 'W',
        table: 68,
      },
      '8': {
        name: 'thomas lackington [AU]',
        result: 'W',
        table: 57,
      },
      '9': {
        name: 'Ben Anderson [AU]',
        result: 'W',
        table: 29,
      },
      '10': {
        name: 'Natalie Millar [AU]',
        result: 'L',
        table: 21,
      },
      '11': {
        name: 'Stephen Iskandar [AU]',
        result: 'W',
        table: 30,
      },
      '12': {
        name: 'Jimmy Nguyen [AU]',
        result: 'W',
        table: 22,
      },
      '13': {
        name: 'Christopher Mathers [AU]',
        result: 'W',
        table: 14,
      },
      '14': {
        name: 'xinzhe hou [AU]',
        result: 'W',
        table: 8,
      },
      '15': {
        name: 'Natalie Millar [AU]',
        result: 'L',
        table: 6,
      },
    },
  },
  {
    name: 'Siu Chun Lee [AU]',
    placing: 8,
    record: {
      wins: 9,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.7,
      opp: 0.45,
      oppopp: 0.5640000000000001,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Comfey',
          number: 'GG14',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Comfey',
          number: 'SWSH242',
          set: 'PR',
        },
        {
          count: 3,
          name: 'Giratina V',
          number: '130',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Giratina VSTAR',
          number: 'GG69',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Giratina VSTAR',
          number: '201',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Giratina VSTAR',
          number: '212',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Spiritomb',
          number: '89',
          set: 'PAL',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 3,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 3,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
      ],
      energy: [
        {
          count: 4,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
        {
          count: 4,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Shaun Sewell [AU]',
        result: 'W',
        table: 249,
      },
      '2': {
        name: 'Winston Chui [AU]',
        result: 'W',
        table: 72,
      },
      '3': {
        name: 'Kazuo Nakamura [AU]',
        result: 'T',
        table: 31,
      },
      '4': {
        name: 'Jake Dunstan [AU]',
        result: 'W',
        table: 32,
      },
      '5': {
        name: 'charles limbrick [AU]',
        result: 'W',
        table: 11,
      },
      '6': {
        name: 'Natalie Millar [AU]',
        result: 'W',
        table: 6,
      },
      '7': {
        name: '[Table 1]Sam Hendle [AU]',
        result: 'W',
        table: 4,
      },
      '8': {
        name: 'Tim Franklin [AU]',
        result: 'L',
        table: 4,
      },
      '9': {
        name: 'Lochie McKeefry [NZ]',
        result: 'W',
        table: 8,
      },
      '10': {
        name: 'Kaiwen Cabbabe [AU]',
        result: 'T',
        table: 5,
      },
      '11': {
        name: '[Table 1]Sam Hendle [AU]',
        result: 'T',
        table: 8,
      },
      '12': {
        name: 'Xinfang Wang [AU]',
        result: 'W',
        table: 12,
      },
      '13': {
        name: 'Harry Shallcrass [NZ]',
        result: 'W',
        table: 6,
      },
      '14': {
        name: 'Tim Franklin [AU]',
        result: 'T',
        table: 4,
      },
      '15': {
        name: 'Brent Tonisson [AU]',
        result: 'L',
        table: 3,
      },
    },
  },
  {
    name: 'Angus Johnson [AU]',
    placing: 9,
    record: {
      wins: 9,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.6,
      opp: 0.62,
      oppopp: 0.572,
    },
    decklist: {
      pokemon: [
        {
          count: 1,
          name: 'Cresselia',
          number: '74',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Mew',
          number: '11',
          set: 'CEL',
        },
        {
          count: 2,
          name: 'Gardevoir ex',
          number: '245',
          set: 'SVI',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: 'GG06',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Gardevoir',
          number: 'TG05',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Scream Tail',
          number: '65',
          set: 'SVP',
        },
        {
          count: 1,
          name: 'Kirlia',
          number: '60',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Kirlia',
          number: 'SWSH271',
          set: 'PR',
        },
        {
          count: 1,
          name: 'Zacian V',
          number: 'GG48',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Ralts',
          number: '60',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Ralts',
          number: '67',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 3,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Fog Crystal',
          number: '140',
          set: 'CRE',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: "Professor Turo's Scenario",
          number: '171',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 2,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
      ],
      energy: [
        {
          count: 2,
          name: 'Reversal Energy - Special',
          number: '192',
          set: 'PAL',
        },
        {
          count: 10,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Gakuto Shiina [JP]',
        result: 'W',
        table: 120,
      },
      '2': {
        name: 'Jettano Posani [AU]',
        result: 'W',
        table: 31,
      },
      '3': {
        name: 'Corey Munro [AU]',
        result: 'W',
        table: 43,
      },
      '4': {
        name: 'Darrin Sin [AU]',
        result: 'W',
        table: 11,
      },
      '5': {
        name: 'Gabriel Smart [US]',
        result: 'T',
        table: 9,
      },
      '6': {
        name: 'Bailey Craig [AU]',
        result: 'W',
        table: 8,
      },
      '7': {
        name: 'Jorge Soria [AU]',
        result: 'W',
        table: 5,
      },
      '8': {
        name: '[Table 2]Nissa Kew [AU]',
        result: 'W',
        table: 3,
      },
      '9': {
        name: 'Tim Franklin [AU]',
        result: 'L',
        table: 3,
      },
      '10': {
        name: '[Table 2]Nissa Kew [AU]',
        result: 'W',
        table: 7,
      },
      '11': {
        name: 'Tim Franklin [AU]',
        result: 'T',
        table: 4,
      },
      '12': {
        name: 'Keito Arai [JP]',
        result: 'W',
        table: 4,
      },
      '13': {
        name: 'Brent Tonisson [AU]',
        result: 'T',
        table: 3,
      },
      '14': {
        name: 'Haru Nishikawa [JP]',
        result: 'L',
        table: 5,
      },
    },
  },
  {
    name: 'Keito Arai [JP]',
    placing: 10,
    record: {
      wins: 9,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.6,
      opp: 0.54,
      oppopp: 0.5700000000000001,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Charmander',
          number: '4',
          set: 'MEW',
        },
        {
          count: 1,
          name: 'Rotom V',
          number: '58',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Mew',
          number: '11',
          set: 'CEL',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Radiant Charizard',
          number: '20',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Pidgeot ex',
          number: '164',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 3,
          name: 'Charizard ex',
          number: '125',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Charmander',
          number: '26',
          set: 'OBF',
        },
        {
          count: 2,
          name: 'Pidgey',
          number: '16',
          set: 'MEW',
        },
        {
          count: 1,
          name: 'Charmeleon',
          number: '27',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Lumineon V',
          number: '40',
          set: 'BRS',
        },
      ],
      trainer: [
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 1,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 3,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Choice Belt',
          number: '211',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 2,
          name: 'Arven',
          number: '186',
          set: 'OBF',
        },
        {
          count: 2,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
      ],
      energy: [
        {
          count: 7,
          name: 'Fire Energy - Basic',
          number: '153',
          set: 'CRZ',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'CHENG-HSIN YANG [AU]',
        result: 'W',
        table: 142,
      },
      '2': {
        name: 'Harrison Pirotta [AU]',
        result: 'W',
        table: 84,
      },
      '3': {
        name: 'Tessa Isberg [FI]',
        result: 'W',
        table: 7,
      },
      '4': {
        name: 'Shane Quinn [AU]',
        result: 'W',
        table: 9,
      },
      '5': {
        name: 'Henry Brand [AU]',
        result: 'W',
        table: 8,
      },
      '6': {
        name: 'Thomas McCawley [AU]',
        result: 'W',
        table: 4,
      },
      '7': {
        name: 'Tim Franklin [AU]',
        result: 'T',
        table: 3,
      },
      '8': {
        name: 'Jose de la garma [AU]',
        result: 'L',
        table: 5,
      },
      '9': {
        name: 'Christian Viti [AU]',
        result: 'W',
        table: 10,
      },
      '10': {
        name: 'Gabriel Smart [US]',
        result: 'W',
        table: 4,
      },
      '11': {
        name: 'Brent Tonisson [AU]',
        result: 'T',
        table: 3,
      },
      '12': {
        name: 'Angus Johnson [AU]',
        result: 'L',
        table: 4,
      },
      '13': {
        name: 'Thomas Thoonen [AU]',
        result: 'W',
        table: 8,
      },
      '14': {
        name: 'Jose de la garma [AU]',
        result: 'T',
        table: 7,
      },
    },
  },
  {
    name: 'Gabriel Smart [US]',
    placing: 11,
    record: {
      wins: 9,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.4,
      opp: 0.63,
      oppopp: 0.544,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Ralts',
          number: '60',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Kirlia',
          number: '60',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Kirlia',
          number: '68',
          set: 'SIT',
        },
        {
          count: 2,
          name: 'Gardevoir',
          number: '61',
          set: 'CRE',
        },
        {
          count: 1,
          name: 'Gardevoir ex',
          number: '86',
          set: 'SVI',
        },
        {
          count: 1,
          name: 'Gardevoir ex',
          number: '228',
          set: 'SVI',
        },
        {
          count: 1,
          name: 'Scream Tail',
          number: '86',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Zacian V',
          number: '16',
          set: 'CEL',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Mew',
          number: '11',
          set: 'CEL',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 3,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Fog Crystal',
          number: '140',
          set: 'CRE',
        },
        {
          count: 1,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 1,
          name: 'Worker',
          number: '167',
          set: 'SIT',
        },
        {
          count: 1,
          name: "Professor Turo's Scenario",
          number: '171',
          set: 'PAR',
        },
        {
          count: 1,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
      ],
      energy: [
        {
          count: 10,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Reversal Energy - Special',
          number: '192',
          set: 'PAL',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Luke Schmitt [AU]',
        result: 'W',
        table: 99,
      },
      '2': {
        name: 'Kenny Potter [NZ]',
        result: 'W',
        table: 32,
      },
      '3': {
        name: 'Ben Sinclair [AU]',
        result: 'W',
        table: 8,
      },
      '4': {
        name: 'Corey O’Leary [AU]',
        result: 'W',
        table: 13,
      },
      '5': {
        name: 'Angus Johnson [AU]',
        result: 'T',
        table: 9,
      },
      '6': {
        name: 'Jess Owers [AU]',
        result: 'W',
        table: 9,
      },
      '7': {
        name: 'Alyssa Lock [AU]',
        result: 'T',
        table: 6,
      },
      '8': {
        name: 'Hakim Moussaoui [AU]',
        result: 'W',
        table: 11,
      },
      '9': {
        name: 'Takuma Tominaga [JP]',
        result: 'W',
        table: 5,
      },
      '10': {
        name: 'Keito Arai [JP]',
        result: 'L',
        table: 4,
      },
      '11': {
        name: 'Xinfang Wang [AU]',
        result: 'W',
        table: 6,
      },
      '12': {
        name: 'Brent Tonisson [AU]',
        result: 'L',
        table: 3,
      },
      '13': {
        name: 'Aaron-Lee Cole [AU]',
        result: 'W',
        table: 9,
      },
      '14': {
        name: 'Natalie Millar [AU]',
        result: 'L',
        table: 6,
      },
    },
  },
  {
    name: 'Jose de la garma [AU]',
    placing: 12,
    record: {
      wins: 9,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.6,
      opp: 0.6,
      oppopp: 0.558,
    },
    decklist: {
      pokemon: [
        {
          count: 1,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Giratina VSTAR',
          number: '212',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Giratina VSTAR',
          number: '131',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina V',
          number: '130',
          set: 'LOR',
        },
        {
          count: 4,
          name: 'Comfey',
          number: 'GG14',
          set: 'CRZ',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 3,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 2,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Avery',
          number: '130',
          set: 'CRE',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
      ],
      energy: [
        {
          count: 3,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
        {
          count: 4,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 4,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Justin Truong [AU]',
        result: 'W',
        table: 34,
      },
      '2': {
        name: '[Table 2]Nissa Kew [AU]',
        result: 'L',
        table: 29,
      },
      '3': {
        name: 'Fabrice Rivalland [AU]',
        result: 'W',
        table: 158,
      },
      '4': {
        name: 'Ben Sinclair [AU]',
        result: 'W',
        table: 78,
      },
      '5': {
        name: 'Todd Williams [AU]',
        result: 'W',
        table: 26,
      },
      '6': {
        name: 'Jimmy Farrugia [AU]',
        result: 'W',
        table: 27,
      },
      '7': {
        name: 'Max Prescott [AU]',
        result: 'W',
        table: 8,
      },
      '8': {
        name: 'Keito Arai [JP]',
        result: 'W',
        table: 5,
      },
      '9': {
        name: 'Brent Tonisson [AU]',
        result: 'L',
        table: 4,
      },
      '10': {
        name: 'Christopher Mathers [AU]',
        result: 'W',
        table: 8,
      },
      '11': {
        name: 'James Goreing [AU]',
        result: 'T',
        table: 5,
      },
      '12': {
        name: 'Kenny Potter [NZ]',
        result: 'W',
        table: 6,
      },
      '13': {
        name: 'Christian Viti [AU]',
        result: 'L',
        table: 4,
      },
      '14': {
        name: 'Keito Arai [JP]',
        result: 'T',
        table: 7,
      },
    },
  },
  {
    name: 'Kaiwen Cabbabe [AU]',
    placing: 13,
    record: {
      wins: 9,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5,
      opp: 0.58,
      oppopp: 0.506,
    },
    decklist: {
      pokemon: [
        {
          count: 2,
          name: 'Gardevoir ex',
          number: '245',
          set: 'SVI',
        },
        {
          count: 2,
          name: 'Gardevoir',
          number: 'TG05',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Ralts',
          number: '60',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Kirlia',
          number: '60',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Kirlia',
          number: 'SWSH271',
          set: 'PR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: 'GG06',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Scream Tail',
          number: '65',
          set: 'SVP',
        },
        {
          count: 1,
          name: 'Cresselia',
          number: '74',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Zacian V',
          number: 'GG48',
          set: 'CRZ',
        },
      ],
      trainer: [
        {
          count: 2,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: "Professor Turo's Scenario",
          number: '171',
          set: 'PAR',
        },
        {
          count: 4,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 3,
          name: 'Fog Crystal',
          number: '140',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 1,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
      ],
      energy: [
        {
          count: 3,
          name: 'Reversal Energy - Special',
          number: '192',
          set: 'PAL',
        },
        {
          count: 10,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Daniel Ross-Brown [AU]',
        result: 'L',
        table: 46,
      },
      '2': {
        name: 'Jack Burmeister [AU]',
        result: 'W',
        table: 225,
      },
      '3': {
        name: 'Nathan Belcher [AU]',
        result: 'W',
        table: 111,
      },
      '4': {
        name: 'Georgia Trimble [AU]',
        result: 'W',
        table: 91,
      },
      '5': {
        name: 'Lucas Hamilton-Foster [AU]',
        result: 'W',
        table: 37,
      },
      '6': {
        name: 'Gakuto Shiina [JP]',
        result: 'W',
        table: 26,
      },
      '7': {
        name: 'Shang Jun Chua [AU]',
        result: 'W',
        table: 11,
      },
      '8': {
        name: 'Lochie McKeefry [NZ]',
        result: 'T',
        table: 8,
      },
      '9': {
        name: 'James Williams [AU]',
        result: 'W',
        table: 6,
      },
      '10': {
        name: 'Siu Chun Lee [AU]',
        result: 'T',
        table: 5,
      },
      '11': {
        name: 'Harry Shallcrass [NZ]',
        result: 'L',
        table: 7,
      },
      '12': {
        name: '[Table 2]Nissa Kew [AU]',
        result: 'W',
        table: 14,
      },
      '13': {
        name: 'Haru Nishikawa [JP]',
        result: 'L',
        table: 10,
      },
      '14': {
        name: 'Thomas Thoonen [AU]',
        result: 'W',
        table: 12,
      },
    },
  },
  {
    name: 'James Williams [AU]',
    placing: 14,
    record: {
      wins: 9,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.7,
      opp: 0.5599999999999999,
      oppopp: 0.526,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Comfey',
          number: '79',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Radiant Charizard',
          number: '20',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Drapion V',
          number: 'GG49',
          set: 'CRZ',
        },
      ],
      trainer: [
        {
          count: 2,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Beach Court',
          number: '263',
          set: 'PAR',
        },
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Raihan',
          number: '140',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Klara',
          number: '145',
          set: 'CRE',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Fog Crystal',
          number: '140',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Technical Machine: Devolution',
          number: '177',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Pal Pad',
          number: '172',
          set: 'SSH',
        },
        {
          count: 1,
          name: 'Hisuian Heavy Ball',
          number: '146',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
      ],
      energy: [
        {
          count: 3,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Fire Energy - Basic',
          number: '153',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Double Turbo Energy - Special',
          number: '216',
          set: 'ASR',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'David Valderrama [AU]',
        result: 'W',
        table: 205,
      },
      '2': {
        name: 'Tim Franklin [AU]',
        result: 'L',
        table: 25,
      },
      '3': {
        name: 'Justin Hoy [AU]',
        result: 'W',
        table: 161,
      },
      '4': {
        name: 'Tyler Adamson [AU]',
        result: 'T',
        table: 66,
      },
      '5': {
        name: 'Tait Tran [AU]',
        result: 'W',
        table: 67,
      },
      '6': {
        name: 'Sam Hughes [AU]',
        result: 'W',
        table: 33,
      },
      '7': {
        name: 'Jess Owers [AU]',
        result: 'W',
        table: 34,
      },
      '8': {
        name: 'David Frans Daritan [AU]',
        result: 'W',
        table: 15,
      },
      '9': {
        name: 'Kaiwen Cabbabe [AU]',
        result: 'L',
        table: 6,
      },
      '10': {
        name: 'Takuma Tominaga [JP]',
        result: 'W',
        table: 25,
      },
      '11': {
        name: 'Aiden Harrison [AU]',
        result: 'W',
        table: 12,
      },
      '12': {
        name: 'Manuel Jorach [AT]',
        result: 'L',
        table: 9,
      },
      '13': {
        name: 'Shaun Sewell [AU]',
        result: 'W',
        table: 11,
      },
      '14': {
        name: 'Harry Shallcrass [NZ]',
        result: 'T',
        table: 10,
      },
    },
  },
  {
    name: 'Shaun Sewell [AU]',
    placing: 15,
    record: {
      wins: 9,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.7,
      opp: 0.44000000000000006,
      oppopp: 0.518,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Mew V',
          number: '113',
          set: 'FST',
        },
        {
          count: 3,
          name: 'Mew VMAX',
          number: '114',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Genesect V',
          number: '185',
          set: 'FST',
        },
      ],
      trainer: [
        {
          count: 3,
          name: 'Judge',
          number: '235',
          set: 'FST',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 2,
          name: 'Box of Disaster',
          number: '154',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 4,
          name: 'Power Tablet',
          number: '236',
          set: 'FST',
        },
        {
          count: 1,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Technical Machine: Devolution',
          number: '177',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Choice Belt',
          number: '211',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Pal Pad',
          number: '172',
          set: 'SSH',
        },
        {
          count: 1,
          name: 'Feather Ball',
          number: '141',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Hisuian Heavy Ball',
          number: '146',
          set: 'ASR',
        },
        {
          count: 1,
          name: "Elesa's Sparkle",
          number: '147',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Cram-o-matic',
          number: '229',
          set: 'FST',
        },
      ],
      energy: [
        {
          count: 4,
          name: 'Double Turbo Energy - Special',
          number: '216',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Fusion Strike Energy - Special',
          number: '244',
          set: 'FST',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Siu Chun Lee [AU]',
        result: 'L',
        table: 249,
      },
      '2': {
        name: 'Ryan Brook [AU]',
        result: 'W',
        table: 255,
      },
      '3': {
        name: 'Kaiden Allan [AU]',
        result: 'W',
        table: 112,
      },
      '4': {
        name: 'Samuel Gianakis [AU]',
        result: 'W',
        table: 85,
      },
      '5': {
        name: 'Christopher Mathers [AU]',
        result: 'L',
        table: 49,
      },
      '6': {
        name: 'Beau McElroy [AU]',
        result: 'W',
        table: 81,
      },
      '7': {
        name: 'Darrin Sin [AU]',
        result: 'W',
        table: 37,
      },
      '8': {
        name: 'Jimmy Farrugia [AU]',
        result: 'W',
        table: 27,
      },
      '9': {
        name: 'Paul Ashton [AU]',
        result: 'T',
        table: 17,
      },
      '10': {
        name: 'Paul Ashton [AU]',
        result: 'T',
        table: 16,
      },
      '11': {
        name: 'Tibor Baranyay [AU]',
        result: 'W',
        table: 19,
      },
      '12': {
        name: 'Christian Hasbani [AU]',
        result: 'W',
        table: 16,
      },
      '13': {
        name: 'James Williams [AU]',
        result: 'L',
        table: 11,
      },
      '14': {
        name: 'Daniel Ross-Brown [AU]',
        result: 'W',
        table: 14,
      },
    },
  },
  {
    name: 'Aaron-Lee Cole [AU]',
    placing: 16,
    record: {
      wins: 9,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.7,
      opp: 0.42000000000000004,
      oppopp: 0.542,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Ralts',
          number: '60',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Ralts',
          number: '67',
          set: 'SIT',
        },
        {
          count: 3,
          name: 'Kirlia',
          number: '68',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Kirlia',
          number: '60',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Gardevoir',
          number: 'TG05',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Gardevoir ex',
          number: '228',
          set: 'SVI',
        },
        {
          count: 1,
          name: 'Mewtwo V-UNION',
          number: 'SWSH159',
          set: 'PR',
        },
        {
          count: 1,
          name: 'Mewtwo V-UNION',
          number: 'SWSH160',
          set: 'PR',
        },
        {
          count: 1,
          name: 'Mewtwo V-UNION',
          number: 'SWSH161',
          set: 'PR',
        },
        {
          count: 1,
          name: 'Mewtwo V-UNION',
          number: 'SWSH162',
          set: 'PR',
        },
        {
          count: 1,
          name: 'Cleffa',
          number: '37',
          set: 'SVP',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Luxray',
          number: '71',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 3,
          name: 'Fog Crystal',
          number: '140',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Pal Pad',
          number: '172',
          set: 'SSH',
        },
        {
          count: 4,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 2,
          name: "Zinnia's Resolve",
          number: '164',
          set: 'EVS',
        },
        {
          count: 1,
          name: 'Worker',
          number: '167',
          set: 'SIT',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Peonia',
          number: '149',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
      ],
      energy: [
        {
          count: 6,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 4,
          name: 'Reversal Energy - Special',
          number: '192',
          set: 'PAL',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'fayyadh salleh [SG]',
        result: 'T',
        table: 178,
      },
      '2': {
        name: 'Sky Mathieson [AU]',
        result: 'L',
        table: 136,
      },
      '3': {
        name: 'Henry Bradnam [AU]',
        result: 'W',
        table: 187,
      },
      '4': {
        name: 'David Stevens [AU]',
        result: 'W',
        table: 134,
      },
      '5': {
        name: 'John Morris [AU]',
        result: 'W',
        table: 79,
      },
      '6': {
        name: 'Vincent Sutinah [AU]',
        result: 'W',
        table: 57,
      },
      '7': {
        name: 'Thomas Thoonen [AU]',
        result: 'L',
        table: 32,
      },
      '8': {
        name: 'Jess Owers [AU]',
        result: 'W',
        table: 61,
      },
      '9': {
        name: 'Thomas Slater [AU]',
        result: 'W',
        table: 34,
      },
      '10': {
        name: 'Will Harris [AU]',
        result: 'W',
        table: 17,
      },
      '11': {
        name: '[Table 2]Nissa Kew [AU]',
        result: 'T',
        table: 11,
      },
      '12': {
        name: 'Skye Godfrey [NZ]',
        result: 'W',
        table: 13,
      },
      '13': {
        name: 'Gabriel Smart [US]',
        result: 'L',
        table: 9,
      },
      '14': {
        name: 'CHEE WAI LIEW [AU]',
        result: 'W',
        table: 13,
      },
    },
  },
  {
    name: 'Manuel Jorach [AT]',
    placing: 17,
    record: {
      wins: 8,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.6,
      opp: 0.65,
      oppopp: 0.556,
    },
    decklist: {
      pokemon: [
        {
          count: 1,
          name: 'Rotom V',
          number: '58',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Mew',
          number: '11',
          set: 'CEL',
        },
        {
          count: 1,
          name: 'Lumineon V',
          number: '40',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Pidgeot ex',
          number: '164',
          set: 'OBF',
        },
        {
          count: 2,
          name: 'Pidgey',
          number: '16',
          set: 'MEW',
        },
        {
          count: 2,
          name: 'Charizard ex',
          number: '228',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Charizard ex',
          number: '215',
          set: 'OBF',
        },
        {
          count: 2,
          name: 'Charmander',
          number: '4',
          set: 'MEW',
        },
        {
          count: 1,
          name: 'Charmander',
          number: '47',
          set: 'SVP',
        },
        {
          count: 1,
          name: 'Charmander',
          number: '26',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Charmeleon',
          number: '27',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Radiant Charizard',
          number: '20',
          set: 'CRZ',
        },
      ],
      trainer: [
        {
          count: 1,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 1,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 3,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 3,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Arven',
          number: '186',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Choice Belt',
          number: '211',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Technical Machine: Devolution',
          number: '177',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
      ],
      energy: [
        {
          count: 7,
          name: 'Fire Energy - Basic',
          number: '153',
          set: 'CRZ',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Jason Zhe [AU]',
        result: 'T',
        table: 154,
      },
      '2': {
        name: 'Ben Anderson [AU]',
        result: 'W',
        table: 160,
      },
      '3': {
        name: 'Corey Matthews [AU]',
        result: 'W',
        table: 49,
      },
      '4': {
        name: 'Alfie Delgado [MX]',
        result: 'W',
        table: 24,
      },
      '5': {
        name: 'Harry Shallcrass [NZ]',
        result: 'W',
        table: 18,
      },
      '6': {
        name: 'Max Prescott [AU]',
        result: 'L',
        table: 13,
      },
      '7': {
        name: 'DI ZHU [CN]',
        result: 'T',
        table: 25,
      },
      '8': {
        name: 'Rostin Luo [NZ]',
        result: 'W',
        table: 35,
      },
      '9': {
        name: 'Kye Edmondston [AU]',
        result: 'W',
        table: 24,
      },
      '10': {
        name: 'Tibor Baranyay [AU]',
        result: 'W',
        table: 11,
      },
      '11': {
        name: 'Jettano Posani [AU]',
        result: 'T',
        table: 9,
      },
      '12': {
        name: 'James Williams [AU]',
        result: 'W',
        table: 9,
      },
      '13': {
        name: 'Natalie Millar [AU]',
        result: 'L',
        table: 7,
      },
      '14': {
        name: 'James Goreing [AU]',
        result: 'T',
        table: 11,
      },
    },
  },
  {
    name: 'Harry Shallcrass [NZ]',
    placing: 18,
    record: {
      wins: 8,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.5,
      opp: 0.5800000000000001,
      oppopp: 0.546,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Ralts',
          number: '60',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Kirlia',
          number: '60',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Kirlia',
          number: '68',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Gardevoir ex',
          number: '245',
          set: 'SVI',
        },
        {
          count: 1,
          name: 'Scream Tail',
          number: '65',
          set: 'SVP',
        },
        {
          count: 1,
          name: 'Mew',
          number: 'GG10',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Cresselia',
          number: '74',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Zacian V',
          number: 'GG48',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Gardevoir ex',
          number: '228',
          set: 'SVI',
        },
        {
          count: 2,
          name: 'Gardevoir',
          number: 'TG05',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: 'GG06',
          set: 'CRZ',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 3,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Fog Crystal',
          number: '140',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 4,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Avery',
          number: '130',
          set: 'CRE',
        },
        {
          count: 1,
          name: 'Worker',
          number: '167',
          set: 'SIT',
        },
      ],
      energy: [
        {
          count: 10,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Reversal Energy - Special',
          number: '192',
          set: 'PAL',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Paul Aguilar [AU]',
        result: 'W',
        table: 10,
      },
      '2': {
        name: 'Kylie Flynn [AU]',
        result: 'W',
        table: 63,
      },
      '3': {
        name: 'Thomas Slater [AU]',
        result: 'W',
        table: 39,
      },
      '4': {
        name: 'Blake Lobina [AU]',
        result: 'T',
        table: 3,
      },
      '5': {
        name: 'Manuel Jorach [AT]',
        result: 'L',
        table: 18,
      },
      '6': {
        name: 'Nick Alvarez [US]',
        result: 'W',
        table: 41,
      },
      '7': {
        name: 'YiFei Ruan [AU]',
        result: 'W',
        table: 19,
      },
      '8': {
        name: 'Joel Suryadi [AU]',
        result: 'W',
        table: 13,
      },
      '9': {
        name: 'Will Harris [AU]',
        result: 'W',
        table: 11,
      },
      '10': {
        name: '[Table 1]Sam Hendle [AU]',
        result: 'T',
        table: 6,
      },
      '11': {
        name: 'Kaiwen Cabbabe [AU]',
        result: 'W',
        table: 7,
      },
      '12': {
        name: 'Tim Franklin [AU]',
        result: 'T',
        table: 5,
      },
      '13': {
        name: 'Siu Chun Lee [AU]',
        result: 'L',
        table: 6,
      },
      '14': {
        name: 'James Williams [AU]',
        result: 'T',
        table: 10,
      },
    },
  },
  {
    name: 'Thomas McCawley [AU]',
    placing: 19,
    record: {
      wins: 9,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.6,
      opp: 0.57,
      oppopp: 0.508,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Comfey',
          number: 'SWSH242',
          set: 'PR',
        },
        {
          count: 1,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Giratina VSTAR',
          number: '131',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina V',
          number: '130',
          set: 'LOR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 3,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
      ],
      energy: [
        {
          count: 4,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
        {
          count: 4,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Alicia Keizer [AU]',
        result: 'W',
        table: 3,
      },
      '2': {
        name: 'Mason Mitchell [AU]',
        result: 'W',
        table: 36,
      },
      '3': {
        name: 'Skye Godfrey [NZ]',
        result: 'W',
        table: 24,
      },
      '4': {
        name: 'Simon Williams [AU]',
        result: 'W',
        table: 7,
      },
      '5': {
        name: 'Brent Tonisson [AU]',
        result: 'W',
        table: 6,
      },
      '6': {
        name: 'Keito Arai [JP]',
        result: 'L',
        table: 4,
      },
      '7': {
        name: 'Will Harris [AU]',
        result: 'L',
        table: 10,
      },
      '8': {
        name: 'Corey O’Leary [AU]',
        result: 'W',
        table: 30,
      },
      '9': {
        name: 'Kenny Potter [NZ]',
        result: 'T',
        table: 18,
      },
      '10': {
        name: 'Simon Williams [AU]',
        result: 'W',
        table: 27,
      },
      '11': {
        name: 'Jimmy Nguyen [AU]',
        result: 'W',
        table: 13,
      },
      '12': {
        name: 'Christian Viti [AU]',
        result: 'L',
        table: 7,
      },
      '13': {
        name: 'Jorge Soria [AU]',
        result: 'W',
        table: 12,
      },
      '14': {
        name: 'Jettano Posani [AU]',
        result: 'L',
        table: 9,
      },
    },
  },
  {
    name: 'xinzhe hou [AU]',
    placing: 20,
    record: {
      wins: 8,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.6,
      opp: 0.53,
      oppopp: 0.502,
    },
    decklist: {
      pokemon: [
        {
          count: 1,
          name: 'Comfey',
          number: 'GG14',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina V',
          number: '130',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina VSTAR',
          number: '131',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Comfey',
          number: '79',
          set: 'LOR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 3,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 3,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 2,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
      ],
      energy: [
        {
          count: 3,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 4,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 4,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Brandon Wilson [AU]',
        result: 'T',
        table: 115,
      },
      '2': {
        name: 'James Breene [AU]',
        result: 'W',
        table: 156,
      },
      '3': {
        name: 'Malik Hisyam Zaihan [IE]',
        result: 'W',
        table: 69,
      },
      '4': {
        name: 'David Boyd [AU]',
        result: 'T',
        table: 31,
      },
      '5': {
        name: 'Brendon Leehane [AU]',
        result: 'W',
        table: 54,
      },
      '6': {
        name: 'Reginald Ng [AU]',
        result: 'W',
        table: 29,
      },
      '7': {
        name: 'Andre Pollacchi [AU]',
        result: 'W',
        table: 17,
      },
      '8': {
        name: 'Alyssa Lock [AU]',
        result: 'T',
        table: 10,
      },
      '9': {
        name: 'Haru Nishikawa [JP]',
        result: 'T',
        table: 15,
      },
      '10': {
        name: 'Blake Lobina [AU]',
        result: 'W',
        table: 22,
      },
      '11': {
        name: 'Kenny Potter [NZ]',
        result: 'L',
        table: 14,
      },
      '12': {
        name: 'Jake Dunstan [AU]',
        result: 'W',
        table: 23,
      },
      '13': {
        name: 'Lochie McKeefry [NZ]',
        result: 'W',
        table: 13,
      },
      '14': {
        name: 'Nigel Tan [NZ]',
        result: 'L',
        table: 8,
      },
    },
  },
  {
    name: 'James Goreing [AU]',
    placing: 21,
    record: {
      wins: 8,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.6,
      opp: 0.52,
      oppopp: 0.5780000000000001,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Giratina V',
          number: '130',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina VSTAR',
          number: '131',
          set: 'LOR',
        },
        {
          count: 4,
          name: 'Comfey',
          number: '79',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Spiritomb',
          number: '89',
          set: 'PAL',
        },
      ],
      trainer: [
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 3,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 3,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
      ],
      energy: [
        {
          count: 4,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
        {
          count: 4,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Antonio Sanabria [AU]',
        result: 'W',
        table: 48,
      },
      '2': {
        name: 'KODY TRAN [AU]',
        result: 'W',
        table: 3,
      },
      '3': {
        name: 'Hadyn Joyce [AU]',
        result: 'W',
        table: 11,
      },
      '4': {
        name: 'Joel Suryadi [AU]',
        result: 'L',
        table: 10,
      },
      '5': {
        name: 'Benjamin Kouzas [AU]',
        result: 'T',
        table: 29,
      },
      '6': {
        name: 'Shane Quinn [AU]',
        result: 'W',
        table: 49,
      },
      '7': {
        name: 'Jacob McSpadden [AU]',
        result: 'W',
        table: 28,
      },
      '8': {
        name: 'Bailey Craig [AU]',
        result: 'T',
        table: 12,
      },
      '9': {
        name: 'DI ZHU [CN]',
        result: 'W',
        table: 23,
      },
      '10': {
        name: 'CHEE WAI LIEW [AU]',
        result: 'W',
        table: 10,
      },
      '11': {
        name: 'Jose de la garma [AU]',
        result: 'T',
        table: 5,
      },
      '12': {
        name: '[Table 1]Sam Hendle [AU]',
        result: 'W',
        table: 11,
      },
      '13': {
        name: 'Tim Franklin [AU]',
        result: 'L',
        table: 5,
      },
      '14': {
        name: 'Manuel Jorach [AT]',
        result: 'T',
        table: 11,
      },
    },
  },
  {
    name: '[Table 1]Sam Hendle [AU]',
    placing: 22,
    record: {
      wins: 8,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.5,
      opp: 0.5199999999999999,
      oppopp: 0.55,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Nam Ho [AU]',
        result: 'W',
        table: 152,
      },
      '2': {
        name: 'Brittany Mitchell [AU]',
        result: 'W',
        table: 54,
      },
      '3': {
        name: 'Christopher Mathers [AU]',
        result: 'W',
        table: 14,
      },
      '4': {
        name: 'Jordan Palmer [AU]',
        result: 'W',
        table: 18,
      },
      '5': {
        name: 'Christian Delloiaco [AU]',
        result: 'W',
        table: 3,
      },
      '6': {
        name: 'Takuma Tominaga [JP]',
        result: 'W',
        table: 3,
      },
      '7': {
        name: 'Siu Chun Lee [AU]',
        result: 'L',
        table: 4,
      },
      '8': {
        name: 'Will Harris [AU]',
        result: 'T',
        table: 7,
      },
      '9': {
        name: 'Blake Lobina [AU]',
        result: 'W',
        table: 9,
      },
      '10': {
        name: 'Harry Shallcrass [NZ]',
        result: 'T',
        table: 6,
      },
      '11': {
        name: 'Siu Chun Lee [AU]',
        result: 'T',
        table: 8,
      },
      '12': {
        name: 'James Goreing [AU]',
        result: 'L',
        table: 11,
      },
      '13': {
        name: 'Skye Godfrey [NZ]',
        result: 'T',
        table: 16,
      },
      '14': {
        name: 'Jorge Soria [AU]',
        result: 'W',
        table: 18,
      },
    },
  },
  {
    name: '[Table 2]Nissa Kew [AU]',
    placing: 23,
    record: {
      wins: 8,
      losses: 3,
      ties: 3,
    },
    resistances: {
      self: 0.4,
      opp: 0.5399999999999999,
      oppopp: 0.4880000000000001,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Robin Sangwan [AU]',
        result: 'W',
        table: 28,
      },
      '2': {
        name: 'Jose de la garma [AU]',
        result: 'W',
        table: 29,
      },
      '3': {
        name: 'Ryan Bews [AU]',
        result: 'T',
        table: 22,
      },
      '4': {
        name: 'Matthew Bennett [AU]',
        result: 'W',
        table: 40,
      },
      '5': {
        name: 'Raymond Wong [AU]',
        result: 'W',
        table: 23,
      },
      '6': {
        name: 'Kazuo Nakamura [AU]',
        result: 'W',
        table: 12,
      },
      '7': {
        name: 'Edward Mouanoutoua [AU]',
        result: 'W',
        table: 7,
      },
      '8': {
        name: 'Angus Johnson [AU]',
        result: 'L',
        table: 3,
      },
      '9': {
        name: 'Jorge Soria [AU]',
        result: 'W',
        table: 7,
      },
      '10': {
        name: 'Angus Johnson [AU]',
        result: 'L',
        table: 7,
      },
      '11': {
        name: 'Aaron-Lee Cole [AU]',
        result: 'T',
        table: 11,
      },
      '12': {
        name: 'Kaiwen Cabbabe [AU]',
        result: 'L',
        table: 14,
      },
      '13': {
        name: 'Ryan Tan [UK]',
        result: 'W',
        table: 17,
      },
      '14': {
        name: 'Blake Lobina [AU]',
        result: 'T',
        table: 15,
      },
    },
  },
  {
    name: 'Lucas Hamilton-Foster [AU]',
    placing: 24,
    record: {
      wins: 8,
      losses: 3,
      ties: 3,
    },
    resistances: {
      self: 0.6,
      opp: 0.52,
      oppopp: 0.48199999999999993,
    },
    decklist: {
      pokemon: [
        {
          count: 1,
          name: 'Arceus V',
          number: '166',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Arceus V',
          number: '122',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Arceus V',
          number: 'SWSH204',
          set: 'PR',
        },
        {
          count: 2,
          name: 'Arceus VSTAR',
          number: '123',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Arceus VSTAR',
          number: 'SWSH307',
          set: 'PR',
        },
        {
          count: 3,
          name: 'Bidoof',
          number: '111',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Bibarel',
          number: 'GG25',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Bibarel',
          number: '121',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Regigigas V',
          number: '113',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Regigigas VSTAR',
          number: '114',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Leafeon V',
          number: '7',
          set: 'EVS',
        },
        {
          count: 1,
          name: 'Leafeon VSTAR',
          number: '14',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Skwovet',
          number: '151',
          set: 'SVI',
        },
        {
          count: 1,
          name: 'Spiritomb',
          number: '89',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 3,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: "Cheren's Care",
          number: '134',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Judge',
          number: '235',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 2,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Choice Belt',
          number: '211',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Box of Disaster',
          number: '154',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 4,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Pal Pad',
          number: '172',
          set: 'SSH',
        },
      ],
      energy: [
        {
          count: 4,
          name: 'Double Turbo Energy - Special',
          number: '216',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'V Guard Energy - Special',
          number: '169',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
        {
          count: 6,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Eric Sanson [NZ]',
        result: 'W',
        table: 235,
      },
      '2': {
        name: 'Ida Nero [AU]',
        result: 'L',
        table: 85,
      },
      '3': {
        name: 'Kelvin Duong [AU]',
        result: 'W',
        table: 109,
      },
      '4': {
        name: 'Riley Pattison [AU]',
        result: 'W',
        table: 49,
      },
      '5': {
        name: 'Kaiwen Cabbabe [AU]',
        result: 'L',
        table: 37,
      },
      '6': {
        name: 'Aaron Woodrow [AU]',
        result: 'W',
        table: 76,
      },
      '7': {
        name: 'Thomas Quilliam [AU]',
        result: 'W',
        table: 42,
      },
      '8': {
        name: 'Christian Delloiaco [AU]',
        result: 'T',
        table: 21,
      },
      '9': {
        name: 'Sineth Akmeemana [AU]',
        result: 'W',
        table: 40,
      },
      '10': {
        name: 'Skye Godfrey [NZ]',
        result: 'L',
        table: 28,
      },
      '11': {
        name: 'Will Harris [AU]',
        result: 'W',
        table: 25,
      },
      '12': {
        name: 'Blake Lobina [AU]',
        result: 'T',
        table: 18,
      },
      '13': {
        name: 'Christian Hasbani [AU]',
        result: 'W',
        table: 21,
      },
      '14': {
        name: 'Jordan Palmer [AU]',
        result: 'T',
        table: 16,
      },
    },
  },
  {
    name: 'Blake Lobina [AU]',
    placing: 25,
    record: {
      wins: 8,
      losses: 3,
      ties: 3,
    },
    resistances: {
      self: 0.6,
      opp: 0.47000000000000003,
      oppopp: 0.516,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Comfey',
          number: 'SWSH242',
          set: 'PR',
        },
        {
          count: 3,
          name: 'Giratina V',
          number: '130',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina VSTAR',
          number: '131',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: 'GG06',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 3,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 3,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
      ],
      energy: [
        {
          count: 3,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
        {
          count: 4,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 4,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Katelin Altieri [AU]',
        result: 'W',
        table: 226,
      },
      '2': {
        name: 'Angela Lewis [AU]',
        result: 'W',
        table: 50,
      },
      '3': {
        name: 'Tan Loc Thuan Nguyen [AU]',
        result: 'W',
        table: 19,
      },
      '4': {
        name: 'Harry Shallcrass [NZ]',
        result: 'T',
        table: 3,
      },
      '5': {
        name: 'Christian Hasbani [AU]',
        result: 'W',
        table: 17,
      },
      '6': {
        name: 'Jorge Soria [AU]',
        result: 'L',
        table: 11,
      },
      '7': {
        name: 'Andy Truong [AU]',
        result: 'W',
        table: 31,
      },
      '8': {
        name: 'Alfie Delgado [MX]',
        result: 'W',
        table: 16,
      },
      '9': {
        name: '[Table 1]Sam Hendle [AU]',
        result: 'L',
        table: 9,
      },
      '10': {
        name: 'xinzhe hou [AU]',
        result: 'L',
        table: 22,
      },
      '11': {
        name: 'Alyssa Lock [AU]',
        result: 'W',
        table: 24,
      },
      '12': {
        name: 'Lucas Hamilton-Foster [AU]',
        result: 'T',
        table: 18,
      },
      '13': {
        name: 'Tibor Baranyay [AU]',
        result: 'W',
        table: 19,
      },
      '14': {
        name: '[Table 2]Nissa Kew [AU]',
        result: 'T',
        table: 15,
      },
    },
  },
  {
    name: 'Christopher Cheung [AU]',
    placing: 26,
    record: {
      wins: 7,
      losses: 1,
      ties: 6,
    },
    resistances: {
      self: 0.6,
      opp: 0.45,
      oppopp: 0.47199999999999986,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Comfey',
          number: '79',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Radiant Charizard',
          number: '20',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Spiritomb',
          number: '89',
          set: 'PAL',
        },
      ],
      trainer: [
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Klara',
          number: '145',
          set: 'CRE',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Raihan',
          number: '140',
          set: 'CRZ',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 2,
          name: 'Technical Machine: Devolution',
          number: '177',
          set: 'PAR',
        },
        {
          count: 4,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 2,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Hisuian Heavy Ball',
          number: '146',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Beach Court',
          number: '263',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Fog Crystal',
          number: '140',
          set: 'CRE',
        },
      ],
      energy: [
        {
          count: 2,
          name: 'Fire Energy - Basic',
          number: '153',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 1,
          name: 'Double Turbo Energy - Special',
          number: '216',
          set: 'ASR',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Hannah Paterson [AU]',
        result: 'T',
        table: 57,
      },
      '2': {
        name: 'Holly Wang [AU]',
        result: 'W',
        table: 132,
      },
      '3': {
        name: 'Jeb Collins [AU]',
        result: 'T',
        table: 76,
      },
      '4': {
        name: 'David Burness [AU]',
        result: 'T',
        table: 96,
      },
      '5': {
        name: 'DONGXU LI [AU]',
        result: 'W',
        table: 103,
      },
      '6': {
        name: 'Nick Bell [AU]',
        result: 'W',
        table: 60,
      },
      '7': {
        name: 'Skye Godfrey [NZ]',
        result: 'T',
        table: 51,
      },
      '8': {
        name: 'James Faulkner [AU]',
        result: 'W',
        table: 54,
      },
      '9': {
        name: 'Callum Pinnegar [AU]',
        result: 'W',
        table: 27,
      },
      '10': {
        name: 'Christian Hasbani [AU]',
        result: 'L',
        table: 18,
      },
      '11': {
        name: 'Takuma Tominaga [JP]',
        result: 'T',
        table: 28,
      },
      '12': {
        name: 'Noah Lin [CN]',
        result: 'T',
        table: 24,
      },
      '13': {
        name: 'Cassie Joison [AU]',
        result: 'W',
        table: 27,
      },
      '14': {
        name: 'Skye Godfrey [NZ]',
        result: 'W',
        table: 21,
      },
    },
  },
  {
    name: 'Jordan Palmer [AU]',
    placing: 27,
    record: {
      wins: 8,
      losses: 3,
      ties: 3,
    },
    resistances: {
      self: 0.6,
      opp: 0.38,
      oppopp: 0.508,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Ralts',
          number: '60',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Kirlia',
          number: '68',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Kirlia',
          number: '60',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Gardevoir ex',
          number: '29',
          set: 'PAF',
        },
        {
          count: 2,
          name: 'Gardevoir',
          number: 'TG05',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Scream Tail',
          number: '86',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Zacian V',
          number: '16',
          set: 'CEL',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Mew',
          number: '11',
          set: 'CEL',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 1,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Worker',
          number: '167',
          set: 'SIT',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 3,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 3,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Fog Crystal',
          number: '140',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
      ],
      energy: [
        {
          count: 10,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Reversal Energy - Special',
          number: '192',
          set: 'PAL',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Kadir Batuk [AU]',
        result: 'W',
        table: 219,
      },
      '2': {
        name: 'Hayden Matthews [AU]',
        result: 'W',
        table: 52,
      },
      '3': {
        name: 'Ashley Coulthard [AU]',
        result: 'W',
        table: 16,
      },
      '4': {
        name: '[Table 1]Sam Hendle [AU]',
        result: 'L',
        table: 18,
      },
      '5': {
        name: 'Justin Truong [AU]',
        result: 'W',
        table: 27,
      },
      '6': {
        name: 'Edward Mouanoutoua [AU]',
        result: 'L',
        table: 21,
      },
      '7': {
        name: 'Robbie Caldwell [AU]',
        result: 'W',
        table: 48,
      },
      '8': {
        name: 'Huy Nguyen [AU]',
        result: 'W',
        table: 19,
      },
      '9': {
        name: 'Stephen Iskandar [AU]',
        result: 'T',
        table: 14,
      },
      '10': {
        name: 'Jorge Soria [AU]',
        result: 'L',
        table: 24,
      },
      '11': {
        name: 'Max Prescott [AU]',
        result: 'W',
        table: 26,
      },
      '12': {
        name: 'YiFei Ruan [AU]',
        result: 'T',
        table: 21,
      },
      '13': {
        name: 'Der Cherng Lee [NZ]',
        result: 'W',
        table: 18,
      },
      '14': {
        name: 'Lucas Hamilton-Foster [AU]',
        result: 'T',
        table: 16,
      },
    },
  },
  {
    name: 'Christopher Mathers [AU]',
    placing: 28,
    record: {
      wins: 8,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4,
      opp: 0.62,
      oppopp: 0.49399999999999994,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Comfey',
          number: 'GG14',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Giratina VSTAR',
          number: '131',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina V',
          number: '130',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 2,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
      ],
      energy: [
        {
          count: 4,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
        {
          count: 4,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Damien Commadeur [AU]',
        result: 'W',
        table: 44,
      },
      '2': {
        name: 'Vincent Yan [AU]',
        result: 'W',
        table: 38,
      },
      '3': {
        name: '[Table 1]Sam Hendle [AU]',
        result: 'L',
        table: 14,
      },
      '4': {
        name: 'Kurt Spiteri [AU]',
        result: 'W',
        table: 71,
      },
      '5': {
        name: 'Shaun Sewell [AU]',
        result: 'W',
        table: 49,
      },
      '6': {
        name: 'Stephen Iskandar [AU]',
        result: 'L',
        table: 22,
      },
      '7': {
        name: 'Reginald Ng [AU]',
        result: 'W',
        table: 56,
      },
      '8': {
        name: 'Benjamin Hall [AU]',
        result: 'W',
        table: 31,
      },
      '9': {
        name: 'Justin Teh [AU]',
        result: 'W',
        table: 19,
      },
      '10': {
        name: 'Jose de la garma [AU]',
        result: 'L',
        table: 8,
      },
      '11': {
        name: 'Edin Visca [AU]',
        result: 'W',
        table: 18,
      },
      '12': {
        name: 'Jettano Posani [AU]',
        result: 'T',
        table: 10,
      },
      '13': {
        name: 'Nigel Tan [NZ]',
        result: 'L',
        table: 14,
      },
      '14': {
        name: 'Lochie McKeefry [NZ]',
        result: 'T',
        table: 19,
      },
    },
  },
  {
    name: 'Kenny Potter [NZ]',
    placing: 29,
    record: {
      wins: 8,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.5,
      opp: 0.6,
      oppopp: 0.52,
    },
    decklist: {
      pokemon: [
        {
          count: 1,
          name: 'Radiant Charizard',
          number: '20',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Mew',
          number: '11',
          set: 'CEL',
        },
        {
          count: 1,
          name: 'Rotom V',
          number: '58',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Lumineon V',
          number: 'SWSH250',
          set: 'PR',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Charizard ex',
          number: '215',
          set: 'OBF',
        },
        {
          count: 2,
          name: 'Charizard ex',
          number: '228',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Charmeleon',
          number: '27',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Charmander',
          number: '47',
          set: 'SVP',
        },
        {
          count: 2,
          name: 'Charmander',
          number: '4',
          set: 'MEW',
        },
        {
          count: 1,
          name: 'Charmander',
          number: '26',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Skwovet',
          number: '151',
          set: 'SVI',
        },
        {
          count: 2,
          name: 'Bibarel',
          number: '121',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Bidoof',
          number: '111',
          set: 'CRZ',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 1,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Technical Machine: Devolution',
          number: '177',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Defiance Band',
          number: '169',
          set: 'SVI',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Arven',
          number: '186',
          set: 'OBF',
        },
        {
          count: 3,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 3,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
      ],
      energy: [
        {
          count: 7,
          name: 'Fire Energy - Basic',
          number: '153',
          set: 'CRZ',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Rory Sharpe [AU]',
        result: 'W',
        table: 40,
      },
      '2': {
        name: 'Gabriel Smart [US]',
        result: 'L',
        table: 32,
      },
      '3': {
        name: 'Dylan Graefe [AU]',
        result: 'L',
        table: 98,
      },
      '4': {
        name: 'Fletcher Konynenburg [AU]',
        result: 'W',
        table: 161,
      },
      '5': {
        name: 'Fernando Monsalve [CL]',
        result: 'W',
        table: 100,
      },
      '6': {
        name: 'Todd Williams [AU]',
        result: 'W',
        table: 70,
      },
      '7': {
        name: 'Ehren Roebuck [AU]',
        result: 'W',
        table: 43,
      },
      '8': {
        name: 'Henry Brand [AU]',
        result: 'W',
        table: 20,
      },
      '9': {
        name: 'Thomas McCawley [AU]',
        result: 'T',
        table: 18,
      },
      '10': {
        name: 'Lochie McKeefry [NZ]',
        result: 'W',
        table: 15,
      },
      '11': {
        name: 'xinzhe hou [AU]',
        result: 'W',
        table: 14,
      },
      '12': {
        name: 'Jose de la garma [AU]',
        result: 'L',
        table: 6,
      },
      '13': {
        name: 'Jettano Posani [AU]',
        result: 'L',
        table: 15,
      },
      '14': {
        name: 'Christian Delloiaco [AU]',
        result: 'T',
        table: 20,
      },
    },
  },
  {
    name: 'Christian Hasbani [AU]',
    placing: 30,
    record: {
      wins: 8,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.5,
      opp: 0.5199999999999999,
      oppopp: 0.4680000000000001,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Ralts',
          number: '60',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Kirlia',
          number: '60',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Kirlia',
          number: '68',
          set: 'SIT',
        },
        {
          count: 2,
          name: 'Gardevoir',
          number: 'TG05',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Cresselia',
          number: '74',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Scream Tail',
          number: '86',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: 'GG06',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Zacian V',
          number: '16',
          set: 'CEL',
        },
        {
          count: 2,
          name: 'Gardevoir ex',
          number: '86',
          set: 'SVI',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 2,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 3,
          name: 'Fog Crystal',
          number: '140',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
        {
          count: 1,
          name: "Professor Turo's Scenario",
          number: '171',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
      ],
      energy: [
        {
          count: 3,
          name: 'Reversal Energy - Special',
          number: '192',
          set: 'PAL',
        },
        {
          count: 10,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Thomas Quilliam [AU]',
        result: 'W',
        table: 15,
      },
      '2': {
        name: 'Ferdi Mak [AU]',
        result: 'T',
        table: 42,
      },
      '3': {
        name: 'Edin Visca [AU]',
        result: 'W',
        table: 79,
      },
      '4': {
        name: 'Dante Sun [AU]',
        result: 'W',
        table: 27,
      },
      '5': {
        name: 'Blake Lobina [AU]',
        result: 'L',
        table: 17,
      },
      '6': {
        name: 'fayyadh salleh [SG]',
        result: 'W',
        table: 42,
      },
      '7': {
        name: 'Cameron Shenoy [US]',
        result: 'W',
        table: 21,
      },
      '8': {
        name: 'Xinfang Wang [AU]',
        result: 'L',
        table: 17,
      },
      '9': {
        name: 'Ash Nassiri [NZ]',
        result: 'W',
        table: 28,
      },
      '10': {
        name: 'Christopher Cheung [AU]',
        result: 'W',
        table: 18,
      },
      '11': {
        name: 'Skye Godfrey [NZ]',
        result: 'T',
        table: 15,
      },
      '12': {
        name: 'Shaun Sewell [AU]',
        result: 'L',
        table: 16,
      },
      '13': {
        name: 'Lucas Hamilton-Foster [AU]',
        result: 'L',
        table: 21,
      },
      '14': {
        name: 'Ryan Tan [UK]',
        result: 'W',
        table: 23,
      },
    },
  },
  {
    name: 'Aiden Harrison [AU]',
    placing: 31,
    record: {
      wins: 8,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.5,
      opp: 0.51,
      oppopp: 0.48600000000000004,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Comfey',
          number: 'SWSH242',
          set: 'PR',
        },
        {
          count: 2,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: 'GG06',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Radiant Charizard',
          number: '20',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Drapion V',
          number: '182',
          set: 'LOR',
        },
      ],
      trainer: [
        {
          count: 2,
          name: 'Raihan',
          number: '140',
          set: 'CRZ',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Klara',
          number: '145',
          set: 'CRE',
        },
        {
          count: 1,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 4,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 2,
          name: 'Fog Crystal',
          number: '140',
          set: 'CRE',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Hisuian Heavy Ball',
          number: '146',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Pal Pad',
          number: '172',
          set: 'SSH',
        },
        {
          count: 1,
          name: 'Beach Court',
          number: '263',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 2,
          name: 'Technical Machine: Devolution',
          number: '177',
          set: 'PAR',
        },
      ],
      energy: [
        {
          count: 1,
          name: 'Double Turbo Energy - Special',
          number: '216',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Fire Energy - Basic',
          number: '153',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Blake Davies [AU]',
        result: 'W',
        table: 132,
      },
      '2': {
        name: 'Sinan Gunaydin Okatan [AU]',
        result: 'W',
        table: 8,
      },
      '3': {
        name: 'Michael Gleeson [AU]',
        result: 'W',
        table: 3,
      },
      '4': {
        name: 'Andy Truong [AU]',
        result: 'T',
        table: 20,
      },
      '5': {
        name: 'Alyssa Lock [AU]',
        result: 'L',
        table: 14,
      },
      '6': {
        name: 'Ash Nassiri [NZ]',
        result: 'W',
        table: 40,
      },
      '7': {
        name: 'Benjamin Kouzas [AU]',
        result: 'W',
        table: 23,
      },
      '8': {
        name: 'Thomas Thoonen [AU]',
        result: 'L',
        table: 18,
      },
      '9': {
        name: 'Robert Seymour [AU]',
        result: 'W',
        table: 33,
      },
      '10': {
        name: 'Alyssa Lock [AU]',
        result: 'W',
        table: 30,
      },
      '11': {
        name: 'James Williams [AU]',
        result: 'L',
        table: 12,
      },
      '12': {
        name: 'Lochie McKeefry [NZ]',
        result: 'L',
        table: 20,
      },
      '13': {
        name: 'Noah Lin [CN]',
        result: 'T',
        table: 24,
      },
      '14': {
        name: 'Tibor Baranyay [AU]',
        result: 'W',
        table: 25,
      },
    },
  },
  {
    name: 'Lochie McKeefry [NZ]',
    placing: 32,
    record: {
      wins: 8,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.5,
      opp: 0.5,
      oppopp: 0.53,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Comfey',
          number: '79',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Radiant Charizard',
          number: '11',
          set: 'PGO',
        },
        {
          count: 1,
          name: 'Drapion V',
          number: '118',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
      ],
      trainer: [
        {
          count: 2,
          name: 'Technical Machine: Devolution',
          number: '177',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Pal Pad',
          number: '172',
          set: 'SSH',
        },
        {
          count: 1,
          name: 'Hisuian Heavy Ball',
          number: '146',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 2,
          name: 'Fog Crystal',
          number: '140',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 4,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 4,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Klara',
          number: '145',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Raihan',
          number: '140',
          set: 'CRZ',
        },
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Beach Court',
          number: '263',
          set: 'PAR',
        },
      ],
      energy: [
        {
          count: 3,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Fire Energy - Basic',
          number: '153',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Double Turbo Energy - Special',
          number: '216',
          set: 'ASR',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Bee Blackwell [AU]',
        result: 'W',
        table: 200,
      },
      '2': {
        name: 'Guysen Lang [NZ]',
        result: 'W',
        table: 96,
      },
      '3': {
        name: 'Christian Delloiaco [AU]',
        result: 'L',
        table: 41,
      },
      '4': {
        name: 'Sam Hynes [AU]',
        result: 'W',
        table: 46,
      },
      '5': {
        name: 'Darrin Sin [AU]',
        result: 'W',
        table: 39,
      },
      '6': {
        name: 'Corey Munro [AU]',
        result: 'W',
        table: 24,
      },
      '7': {
        name: 'Benjamin Hall [AU]',
        result: 'W',
        table: 13,
      },
      '8': {
        name: 'Kaiwen Cabbabe [AU]',
        result: 'T',
        table: 8,
      },
      '9': {
        name: 'Siu Chun Lee [AU]',
        result: 'L',
        table: 8,
      },
      '10': {
        name: 'Kenny Potter [NZ]',
        result: 'L',
        table: 15,
      },
      '11': {
        name: 'Simon Williams [AU]',
        result: 'W',
        table: 27,
      },
      '12': {
        name: 'Aiden Harrison [AU]',
        result: 'W',
        table: 20,
      },
      '13': {
        name: 'xinzhe hou [AU]',
        result: 'L',
        table: 13,
      },
      '14': {
        name: 'Christopher Mathers [AU]',
        result: 'T',
        table: 19,
      },
    },
  },
  {
    name: 'CHEE WAI LIEW [AU]',
    placing: 33,
    record: {
      wins: 8,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4,
      opp: 0.5,
      oppopp: 0.44000000000000006,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Charizard ex',
          number: '125',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Charmeleon',
          number: '27',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Charmander',
          number: '26',
          set: 'OBF',
        },
        {
          count: 3,
          name: 'Charmander',
          number: '4',
          set: 'MEW',
        },
        {
          count: 1,
          name: 'Radiant Charizard',
          number: '20',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Mew',
          number: '11',
          set: 'CEL',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Lumineon V',
          number: '40',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Rotom V',
          number: '58',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Pidgey',
          number: '16',
          set: 'MEW',
        },
        {
          count: 2,
          name: 'Pidgeot ex',
          number: '217',
          set: 'OBF',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Arven',
          number: '186',
          set: 'OBF',
        },
        {
          count: 2,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Avery',
          number: '130',
          set: 'CRE',
        },
        {
          count: 3,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 1,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Justified Gloves',
          number: '143',
          set: 'CRE',
        },
        {
          count: 1,
          name: 'Technical Machine: Devolution',
          number: '177',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Choice Belt',
          number: '211',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
      ],
      energy: [
        {
          count: 6,
          name: 'Fire Energy - Basic',
          number: '153',
          set: 'CRZ',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Cameron Dimond [AU]',
        result: 'W',
        table: 21,
      },
      '2': {
        name: 'Daniel Schwan [AU]',
        result: 'W',
        table: 74,
      },
      '3': {
        name: 'Bing Jun Chan [SG]',
        result: 'L',
        table: 40,
      },
      '4': {
        name: 'Thomas Slater [AU]',
        result: 'W',
        table: 53,
      },
      '5': {
        name: 'Louis Chi [NZ]',
        result: 'T',
        table: 32,
      },
      '6': {
        name: 'Ryan Bews [AU]',
        result: 'W',
        table: 56,
      },
      '7': {
        name: 'Justin Teh [AU]',
        result: 'T',
        table: 18,
      },
      '8': {
        name: 'Charles Li [AU]',
        result: 'W',
        table: 33,
      },
      '9': {
        name: 'Bailey Craig [AU]',
        result: 'W',
        table: 21,
      },
      '10': {
        name: 'James Goreing [AU]',
        result: 'L',
        table: 10,
      },
      '11': {
        name: 'Anton Piccio [AU]',
        result: 'W',
        table: 20,
      },
      '12': {
        name: 'Thomas Thoonen [AU]',
        result: 'L',
        table: 15,
      },
      '13': {
        name: 'Takuma Tominaga [JP]',
        result: 'W',
        table: 20,
      },
      '14': {
        name: 'Aaron-Lee Cole [AU]',
        result: 'L',
        table: 13,
      },
    },
  },
  {
    name: 'Daniel Ross-Brown [AU]',
    placing: 34,
    record: {
      wins: 8,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.5,
      opp: 0.49000000000000005,
      oppopp: 0.492,
    },
    decklist: {
      pokemon: [
        {
          count: 2,
          name: 'Roaring Moon ex',
          number: '124',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Roaring Moon ex',
          number: '229',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Squawkabilly ex',
          number: '264',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Morpeko',
          number: '121',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Galarian Moltres V',
          number: '97',
          set: 'CRE',
        },
        {
          count: 1,
          name: 'Mew ex',
          number: '151',
          set: 'MEW',
        },
      ],
      trainer: [
        {
          count: 2,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 2,
          name: 'Ancient Booster Energy Capsule',
          number: '159',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Pal Pad',
          number: '172',
          set: 'SSH',
        },
        {
          count: 1,
          name: 'Emergency Jelly',
          number: '155',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 2,
          name: "Professor Sada's Vitality",
          number: '170',
          set: 'PAR',
        },
        {
          count: 3,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Judge',
          number: '235',
          set: 'FST',
        },
        {
          count: 3,
          name: 'PokeStop',
          number: '68',
          set: 'PGO',
        },
        {
          count: 1,
          name: 'Town Store',
          number: '196',
          set: 'OBF',
        },
        {
          count: 2,
          name: 'Earthen Vessel',
          number: '163',
          set: 'PAR',
        },
        {
          count: 4,
          name: 'Energy Switch',
          number: '129',
          set: 'CES',
        },
        {
          count: 4,
          name: 'Dark Patch',
          number: '139',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Trekking Shoes',
          number: '156',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 3,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
      ],
      energy: [
        {
          count: 9,
          name: 'Darkness Energy - Basic',
          number: '158',
          set: 'CRZ',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Kaiwen Cabbabe [AU]',
        result: 'W',
        table: 46,
      },
      '2': {
        name: 'Natalie Millar [AU]',
        result: 'L',
        table: 30,
      },
      '3': {
        name: 'Simon Higgins [AU]',
        result: 'W',
        table: 115,
      },
      '4': {
        name: 'Nick Bell [AU]',
        result: 'L',
        table: 70,
      },
      '5': {
        name: 'Roman Addamo [AU]',
        result: 'W',
        table: 139,
      },
      '6': {
        name: 'Hadyn Joyce [AU]',
        result: 'W',
        table: 73,
      },
      '7': {
        name: 'Ben Sinclair [AU]',
        result: 'W',
        table: 38,
      },
      '8': {
        name: 'Callum Pinnegar [AU]',
        result: 'T',
        table: 26,
      },
      '9': {
        name: 'Manuel Cresdee [AU]',
        result: 'W',
        table: 39,
      },
      '10': {
        name: 'Cassie Joison [AU]',
        result: 'W',
        table: 26,
      },
      '11': {
        name: 'Haru Nishikawa [JP]',
        result: 'L',
        table: 10,
      },
      '12': {
        name: 'Der Cherng Lee [NZ]',
        result: 'T',
        table: 17,
      },
      '13': {
        name: 'YiFei Ruan [AU]',
        result: 'W',
        table: 22,
      },
      '14': {
        name: 'Shaun Sewell [AU]',
        result: 'L',
        table: 14,
      },
    },
  },
  {
    name: 'Christian Delloiaco [AU]',
    placing: 35,
    record: {
      wins: 8,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.5,
      opp: 0.47000000000000003,
      oppopp: 0.5700000000000001,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Genesect V',
          number: '185',
          set: 'FST',
        },
        {
          count: 3,
          name: 'Mew VMAX',
          number: '114',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Mew V',
          number: '113',
          set: 'FST',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Power Tablet',
          number: '236',
          set: 'FST',
        },
        {
          count: 1,
          name: 'Feather Ball',
          number: '141',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Judge',
          number: '235',
          set: 'FST',
        },
        {
          count: 1,
          name: 'Hisuian Heavy Ball',
          number: '146',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 1,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Pal Pad',
          number: '172',
          set: 'SSH',
        },
        {
          count: 3,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Choice Belt',
          number: '211',
          set: 'ASR',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: "Elesa's Sparkle",
          number: '147',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Cram-o-matic',
          number: '229',
          set: 'FST',
        },
        {
          count: 1,
          name: 'Lost City',
          number: '161',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Box of Disaster',
          number: '154',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
      ],
      energy: [
        {
          count: 4,
          name: 'Double Turbo Energy - Special',
          number: '216',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Fusion Strike Energy - Special',
          number: '244',
          set: 'FST',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Vie Seminiano [AU]',
        result: 'W',
        table: 198,
      },
      '2': {
        name: 'Oliver Karmel-Shann [CA]',
        result: 'W',
        table: 43,
      },
      '3': {
        name: 'Lochie McKeefry [NZ]',
        result: 'W',
        table: 41,
      },
      '4': {
        name: 'Matthew Chong [AU]',
        result: 'W',
        table: 5,
      },
      '5': {
        name: '[Table 1]Sam Hendle [AU]',
        result: 'L',
        table: 3,
      },
      '6': {
        name: 'Max Kennedy [AU]',
        result: 'W',
        table: 17,
      },
      '7': {
        name: 'Stephen Iskandar [AU]',
        result: 'L',
        table: 12,
      },
      '8': {
        name: 'Lucas Hamilton-Foster [AU]',
        result: 'T',
        table: 21,
      },
      '9': {
        name: 'fayyadh salleh [SG]',
        result: 'W',
        table: 32,
      },
      '10': {
        name: 'Der Cherng Lee [NZ]',
        result: 'W',
        table: 19,
      },
      '11': {
        name: 'Natalie Millar [AU]',
        result: 'L',
        table: 16,
      },
      '12': {
        name: 'Jorge Soria [AU]',
        result: 'L',
        table: 19,
      },
      '13': {
        name: 'Jimmy Nguyen [AU]',
        result: 'W',
        table: 25,
      },
      '14': {
        name: 'Kenny Potter [NZ]',
        result: 'T',
        table: 20,
      },
    },
  },
  {
    name: 'Will Harris [AU]',
    placing: 36,
    record: {
      wins: 8,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.5,
      opp: 0.45999999999999996,
      oppopp: 0.4880000000000001,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Roaring Moon ex',
          number: '124',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Roaring Moon ex',
          number: '229',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Squawkabilly ex',
          number: '223',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Galarian Moltres V',
          number: '176',
          set: 'CRE',
        },
        {
          count: 1,
          name: 'Galarian Moltres V',
          number: '183',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Morpeko',
          number: '206',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Mew ex',
          number: '151',
          set: 'MEW',
        },
      ],
      trainer: [
        {
          count: 3,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 2,
          name: "Professor Sada's Vitality",
          number: '170',
          set: 'PAR',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Judge',
          number: '235',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Energy Switch',
          number: '129',
          set: 'CES',
        },
        {
          count: 4,
          name: 'Dark Patch',
          number: '139',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Trekking Shoes',
          number: '156',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Ancient Booster Energy Capsule',
          number: '159',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Earthen Vessel',
          number: '163',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Emergency Jelly',
          number: '155',
          set: 'SIT',
        },
        {
          count: 3,
          name: 'PokeStop',
          number: '68',
          set: 'PGO',
        },
        {
          count: 1,
          name: 'Town Store',
          number: '196',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Pal Pad',
          number: '172',
          set: 'SSH',
        },
        {
          count: 1,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
      ],
      energy: [
        {
          count: 6,
          name: 'Darkness Energy - Basic',
          number: '158',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Huy Nguyen [AU]',
        result: 'W',
        table: 59,
      },
      '2': {
        name: 'Robbie Caldwell [AU]',
        result: 'W',
        table: 18,
      },
      '3': {
        name: 'Ida Nero [AU]',
        result: 'W',
        table: 15,
      },
      '4': {
        name: 'Louis Pozzacchio [AU]',
        result: 'L',
        table: 12,
      },
      '5': {
        name: 'Nick Bell [AU]',
        result: 'W',
        table: 25,
      },
      '6': {
        name: 'Hao Lu [AU]',
        result: 'W',
        table: 28,
      },
      '7': {
        name: 'Thomas McCawley [AU]',
        result: 'W',
        table: 10,
      },
      '8': {
        name: '[Table 1]Sam Hendle [AU]',
        result: 'T',
        table: 7,
      },
      '9': {
        name: 'Harry Shallcrass [NZ]',
        result: 'L',
        table: 11,
      },
      '10': {
        name: 'Aaron-Lee Cole [AU]',
        result: 'L',
        table: 17,
      },
      '11': {
        name: 'Lucas Hamilton-Foster [AU]',
        result: 'L',
        table: 25,
      },
      '12': {
        name: 'Stephen Iskandar [AU]',
        result: 'W',
        table: 30,
      },
      '13': {
        name: 'Xinfang Wang [AU]',
        result: 'W',
        table: 23,
      },
      '14': {
        name: 'Alyssa Lock [AU]',
        result: 'T',
        table: 17,
      },
    },
  },
  {
    name: 'Takuma Tominaga [JP]',
    placing: 37,
    record: {
      wins: 8,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.5,
      opp: 0.4499999999999999,
      oppopp: 0.488,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Genesect V',
          number: '185',
          set: 'FST',
        },
        {
          count: 1,
          name: 'Shelmet',
          number: '13',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Mew V',
          number: '113',
          set: 'FST',
        },
        {
          count: 1,
          name: 'Accelgor',
          number: '14',
          set: 'FST',
        },
        {
          count: 3,
          name: 'Mew VMAX',
          number: '114',
          set: 'FST',
        },
      ],
      trainer: [
        {
          count: 1,
          name: 'Hisuian Heavy Ball',
          number: '146',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Box of Disaster',
          number: '154',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Town Store',
          number: '196',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 2,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Pal Pad',
          number: '172',
          set: 'SSH',
        },
        {
          count: 1,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 3,
          name: 'Cram-o-matic',
          number: '229',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 3,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 4,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Choice Belt',
          number: '211',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Defiance Band',
          number: '169',
          set: 'SVI',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Power Tablet',
          number: '236',
          set: 'FST',
        },
        {
          count: 3,
          name: 'Judge',
          number: '235',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
      ],
      energy: [
        {
          count: 2,
          name: 'Fusion Strike Energy - Special',
          number: '244',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Double Turbo Energy - Special',
          number: '216',
          set: 'ASR',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Paige Chamberlain [AU]',
        result: 'W',
        table: 240,
      },
      '2': {
        name: 'Victor Su [AU]',
        result: 'W',
        table: 60,
      },
      '3': {
        name: 'Harley Collins [AU]',
        result: 'W',
        table: 5,
      },
      '4': {
        name: 'Bing Jun Chan [SG]',
        result: 'W',
        table: 15,
      },
      '5': {
        name: 'Joel Suryadi [AU]',
        result: 'W',
        table: 5,
      },
      '6': {
        name: '[Table 1]Sam Hendle [AU]',
        result: 'L',
        table: 3,
      },
      '7': {
        name: 'Paul Ashton [AU]',
        result: 'W',
        table: 15,
      },
      '8': {
        name: 'Christian Viti [AU]',
        result: 'T',
        table: 9,
      },
      '9': {
        name: 'Gabriel Smart [US]',
        result: 'L',
        table: 5,
      },
      '10': {
        name: 'James Williams [AU]',
        result: 'L',
        table: 25,
      },
      '11': {
        name: 'Christopher Cheung [AU]',
        result: 'T',
        table: 28,
      },
      '12': {
        name: 'Paul Ashton [AU]',
        result: 'W',
        table: 26,
      },
      '13': {
        name: 'CHEE WAI LIEW [AU]',
        result: 'L',
        table: 20,
      },
      '14': {
        name: 'Der Cherng Lee [NZ]',
        result: 'W',
        table: 22,
      },
    },
  },
  {
    name: 'Alyssa Lock [AU]',
    placing: 38,
    record: {
      wins: 7,
      losses: 2,
      ties: 5,
    },
    resistances: {
      self: 0.5,
      opp: 0.43000000000000005,
      oppopp: 0.454,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Giratina V',
          number: '130',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina VSTAR',
          number: '131',
          set: 'LOR',
        },
        {
          count: 4,
          name: 'Comfey',
          number: '79',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 3,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 3,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
      ],
      energy: [
        {
          count: 4,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'cody thorne [AU]',
        result: 'T',
        table: 212,
      },
      '2': {
        name: 'James Grkinic [AU]',
        result: 'W',
        table: 151,
      },
      '3': {
        name: 'fayyadh salleh [SG]',
        result: 'W',
        table: 68,
      },
      '4': {
        name: 'Justin Cutajar [AU]',
        result: 'W',
        table: 29,
      },
      '5': {
        name: 'Aiden Harrison [AU]',
        result: 'W',
        table: 14,
      },
      '6': {
        name: 'Cameron Shenoy [US]',
        result: 'W',
        table: 10,
      },
      '7': {
        name: 'Gabriel Smart [US]',
        result: 'T',
        table: 6,
      },
      '8': {
        name: 'xinzhe hou [AU]',
        result: 'T',
        table: 10,
      },
      '9': {
        name: 'Ryan Tan [UK]',
        result: 'T',
        table: 16,
      },
      '10': {
        name: 'Aiden Harrison [AU]',
        result: 'L',
        table: 30,
      },
      '11': {
        name: 'Blake Lobina [AU]',
        result: 'L',
        table: 24,
      },
      '12': {
        name: 'Max Prescott [AU]',
        result: 'W',
        table: 28,
      },
      '13': {
        name: 'Jake Dunstan [AU]',
        result: 'W',
        table: 26,
      },
      '14': {
        name: 'Will Harris [AU]',
        result: 'T',
        table: 17,
      },
    },
  },
  {
    name: 'Thomas Thoonen [AU]',
    placing: 39,
    record: {
      wins: 8,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4,
      opp: 0.4,
      oppopp: 0.52,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Inteleon V',
          number: '78',
          set: 'FST',
        },
        {
          count: 3,
          name: 'Inteleon VMAX',
          number: '79',
          set: 'FST',
        },
        {
          count: 2,
          name: 'Rapid Strike Urshifu V',
          number: '153',
          set: 'BST',
        },
        {
          count: 2,
          name: 'Rapid Strike Urshifu VMAX',
          number: 'TG21',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Remoraid',
          number: '36',
          set: 'BST',
        },
        {
          count: 2,
          name: 'Octillery',
          number: 'TG03',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Medicham V',
          number: '186',
          set: 'EVS',
        },
        {
          count: 1,
          name: 'Squawkabilly ex',
          number: '169',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Radiant Alakazam',
          number: '59',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Spiritomb',
          number: '89',
          set: 'PAL',
        },
      ],
      trainer: [
        {
          count: 3,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 2,
          name: "Korrina's Focus",
          number: '128',
          set: 'BST',
        },
        {
          count: 2,
          name: 'Melony',
          number: 'TG26',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Klara',
          number: '145',
          set: 'CRE',
        },
        {
          count: 1,
          name: 'Arven',
          number: '186',
          set: 'OBF',
        },
        {
          count: 1,
          name: "Professor Turo's Scenario",
          number: '171',
          set: 'PAR',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 2,
          name: 'Earthen Vessel',
          number: '163',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Energy Retrieval',
          number: '127',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 2,
          name: 'Technical Machine: Devolution',
          number: '177',
          set: 'PAR',
        },
        {
          count: 3,
          name: 'Tower of Waters',
          number: '138',
          set: 'BST',
        },
      ],
      energy: [
        {
          count: 4,
          name: 'Rapid Strike Energy - Special',
          number: '140',
          set: 'BST',
        },
        {
          count: 5,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Jiahe Liang [AU]',
        result: 'W',
        table: 71,
      },
      '2': {
        name: 'David Stevens [AU]',
        result: 'W',
        table: 98,
      },
      '3': {
        name: 'Ayane Matsumoto [AU]',
        result: 'W',
        table: 6,
      },
      '4': {
        name: 'Natalie Millar [AU]',
        result: 'L',
        table: 4,
      },
      '5': {
        name: 'Vincent Sutinah [AU]',
        result: 'T',
        table: 33,
      },
      '6': {
        name: '玄 王 [CN]',
        result: 'W',
        table: 45,
      },
      '7': {
        name: 'Aaron-Lee Cole [AU]',
        result: 'W',
        table: 32,
      },
      '8': {
        name: 'Aiden Harrison [AU]',
        result: 'W',
        table: 18,
      },
      '9': {
        name: 'Xinfang Wang [AU]',
        result: 'T',
        table: 12,
      },
      '10': {
        name: 'Xinfang Wang [AU]',
        result: 'L',
        table: 9,
      },
      '11': {
        name: 'Paul Ashton [AU]',
        result: 'W',
        table: 21,
      },
      '12': {
        name: 'CHEE WAI LIEW [AU]',
        result: 'W',
        table: 15,
      },
      '13': {
        name: 'Keito Arai [JP]',
        result: 'L',
        table: 8,
      },
      '14': {
        name: 'Kaiwen Cabbabe [AU]',
        result: 'L',
        table: 12,
      },
    },
  },
  {
    name: 'Edin Visca [AU]',
    placing: 40,
    record: {
      wins: 8,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4,
      opp: 0.39,
      oppopp: 0.532,
    },
    decklist: {
      pokemon: [
        {
          count: 2,
          name: 'Scyther',
          number: '123',
          set: 'MEW',
        },
        {
          count: 4,
          name: 'Gholdengo ex',
          number: '231',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Gimmighoul',
          number: '198',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Gimmighoul',
          number: '87',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Bidoof',
          number: 'GG29',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Bibarel',
          number: 'GG25',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: 'GG06',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Scizor',
          number: '141',
          set: 'OBF',
        },
      ],
      trainer: [
        {
          count: 2,
          name: 'Energy Retrieval',
          number: '127',
          set: 'CRZ',
        },
        {
          count: 4,
          name: 'Cross Switcher',
          number: '230',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Worker',
          number: '167',
          set: 'SIT',
        },
        {
          count: 4,
          name: 'Superior Energy Retrieval',
          number: '189',
          set: 'PAL',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 3,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 3,
          name: 'PokeStop',
          number: '68',
          set: 'PGO',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Pal Pad',
          number: '172',
          set: 'SSH',
        },
        {
          count: 1,
          name: 'Klara',
          number: '145',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 3,
          name: 'Earthen Vessel',
          number: '163',
          set: 'PAR',
        },
      ],
      energy: [
        {
          count: 11,
          name: 'Metal Energy - Basic',
          number: '159',
          set: 'CRZ',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Ashton Bradley [AU]',
        result: 'T',
        table: 98,
      },
      '2': {
        name: 'Tuan Ho [AU]',
        result: 'W',
        table: 150,
      },
      '3': {
        name: 'Christian Hasbani [AU]',
        result: 'L',
        table: 79,
      },
      '4': {
        name: 'Andi Cheung [AU]',
        result: 'T',
        table: 157,
      },
      '5': {
        name: 'Jamison Bulloch [AU]',
        result: 'W',
        table: 151,
      },
      '6': {
        name: 'Tom Bourke [AU]',
        result: 'W',
        table: 98,
      },
      '7': {
        name: 'Jack Leong [AU]',
        result: 'W',
        table: 59,
      },
      '8': {
        name: 'Hao Lu [AU]',
        result: 'W',
        table: 41,
      },
      '9': {
        name: 'Kazuo Nakamura [AU]',
        result: 'W',
        table: 25,
      },
      '10': {
        name: 'Jettano Posani [AU]',
        result: 'L',
        table: 12,
      },
      '11': {
        name: 'Christopher Mathers [AU]',
        result: 'L',
        table: 18,
      },
      '12': {
        name: 'Tibor Baranyay [AU]',
        result: 'L',
        table: 25,
      },
      '13': {
        name: 'Paul Ashton [AU]',
        result: 'W',
        table: 28,
      },
      '14': {
        name: 'Jimmy Nguyen [AU]',
        result: 'W',
        table: 27,
      },
    },
  },
  {
    name: 'Simon Williams [AU]',
    placing: 41,
    record: {
      wins: 8,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.5,
      opp: 0.39,
      oppopp: 0.49399999999999994,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Giratina V',
          number: '130',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina VSTAR',
          number: '131',
          set: 'LOR',
        },
        {
          count: 4,
          name: 'Comfey',
          number: '79',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Spiritomb',
          number: '89',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 3,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 3,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 2,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
      ],
      energy: [
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
        {
          count: 4,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 4,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Sameer Sangwan [AU]',
        result: 'W',
        table: 233,
      },
      '2': {
        name: 'James Xu [AU]',
        result: 'W',
        table: 106,
      },
      '3': {
        name: 'Will Ladner [AU]',
        result: 'W',
        table: 27,
      },
      '4': {
        name: 'Thomas McCawley [AU]',
        result: 'L',
        table: 7,
      },
      '5': {
        name: 'Matthew Anderson [AU]',
        result: 'W',
        table: 52,
      },
      '6': {
        name: 'Bing Jun Chan [SG]',
        result: 'W',
        table: 16,
      },
      '7': {
        name: 'Christian Viti [AU]',
        result: 'L',
        table: 14,
      },
      '8': {
        name: 'Scott Langford [AU]',
        result: 'W',
        table: 24,
      },
      '9': {
        name: 'Jimmy Nguyen [AU]',
        result: 'T',
        table: 13,
      },
      '10': {
        name: 'Thomas McCawley [AU]',
        result: 'L',
        table: 27,
      },
      '11': {
        name: 'Lochie McKeefry [NZ]',
        result: 'L',
        table: 27,
      },
      '12': {
        name: 'Cassie Joison [AU]',
        result: 'T',
        table: 29,
      },
      '13': {
        name: 'Anton Piccio [AU]',
        result: 'W',
        table: 29,
      },
      '14': {
        name: 'YiFei Ruan [AU]',
        result: 'W',
        table: 26,
      },
    },
  },
  {
    name: 'Noah Lin [CN]',
    placing: 42,
    record: {
      wins: 7,
      losses: 2,
      ties: 5,
    },
    resistances: {
      self: 0.6,
      opp: 0.38,
      oppopp: 0.4699999999999999,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Comfey',
          number: 'SWSH242',
          set: 'PR',
        },
        {
          count: 2,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Roaring Moon ex',
          number: '251',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Radiant Charizard',
          number: '20',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Spiritomb',
          number: '89',
          set: 'PAL',
        },
      ],
      trainer: [
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Klara',
          number: '145',
          set: 'CRE',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Raihan',
          number: '140',
          set: 'CRZ',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 4,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 2,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Beach Court',
          number: '263',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 1,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Hisuian Heavy Ball',
          number: '146',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Technical Machine: Devolution',
          number: '177',
          set: 'PAR',
        },
      ],
      energy: [
        {
          count: 4,
          name: 'Darkness Energy - Basic',
          number: '158',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Fire Energy - Basic',
          number: '153',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Shang Jun Chua [AU]',
        result: 'W',
        table: 266,
      },
      '2': {
        name: 'Bailey Craig [AU]',
        result: 'T',
        table: 53,
      },
      '3': {
        name: 'Michael Wilson [AU]',
        result: 'L',
        table: 59,
      },
      '4': {
        name: 'Andrew Lam [AU]',
        result: 'W',
        table: 129,
      },
      '5': {
        name: 'Johnathan Heng [AU]',
        result: 'W',
        table: 94,
      },
      '6': {
        name: 'James Faulkner [AU]',
        result: 'L',
        table: 44,
      },
      '7': {
        name: 'Kelvin Nguyen [AU]',
        result: 'W',
        table: 98,
      },
      '8': {
        name: 'Kirryn Hatch [AU]',
        result: 'W',
        table: 66,
      },
      '9': {
        name: 'Nick Alvarez [US]',
        result: 'W',
        table: 42,
      },
      '10': {
        name: 'Anton Piccio [AU]',
        result: 'T',
        table: 29,
      },
      '11': {
        name: 'Jake Dunstan [AU]',
        result: 'T',
        table: 22,
      },
      '12': {
        name: 'Christopher Cheung [AU]',
        result: 'T',
        table: 24,
      },
      '13': {
        name: 'Aiden Harrison [AU]',
        result: 'T',
        table: 24,
      },
      '14': {
        name: 'Xinfang Wang [AU]',
        result: 'W',
        table: 24,
      },
    },
  },
  {
    name: 'Jorge Soria [AU]',
    placing: 43,
    record: {
      wins: 8,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.4,
      opp: 0.62,
      oppopp: 0.49000000000000005,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Giratina V',
          number: '130',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina VSTAR',
          number: '131',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 4,
          name: 'Comfey',
          number: 'GG14',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Spiritomb',
          number: '89',
          set: 'PAL',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 2,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Avery',
          number: '130',
          set: 'CRE',
        },
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
      ],
      energy: [
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 4,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 4,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Xaria-Sofia Sachse [AU]',
        result: 'T',
        table: 186,
      },
      '2': {
        name: 'Scott Leung [AU]',
        result: 'W',
        table: 153,
      },
      '3': {
        name: 'Daniel Mielnik [AU]',
        result: 'W',
        table: 83,
      },
      '4': {
        name: 'Edmund Khoo [SG]',
        result: 'W',
        table: 38,
      },
      '5': {
        name: 'Nick Alvarez [US]',
        result: 'W',
        table: 13,
      },
      '6': {
        name: 'Blake Lobina [AU]',
        result: 'W',
        table: 11,
      },
      '7': {
        name: 'Angus Johnson [AU]',
        result: 'L',
        table: 5,
      },
      '8': {
        name: 'Jake Dunstan [AU]',
        result: 'W',
        table: 14,
      },
      '9': {
        name: '[Table 2]Nissa Kew [AU]',
        result: 'L',
        table: 7,
      },
      '10': {
        name: 'Jordan Palmer [AU]',
        result: 'W',
        table: 24,
      },
      '11': {
        name: 'Christian Viti [AU]',
        result: 'L',
        table: 17,
      },
      '12': {
        name: 'Christian Delloiaco [AU]',
        result: 'W',
        table: 19,
      },
      '13': {
        name: 'Thomas McCawley [AU]',
        result: 'L',
        table: 12,
      },
      '14': {
        name: '[Table 1]Sam Hendle [AU]',
        result: 'L',
        table: 18,
      },
    },
  },
  {
    name: 'Skye Godfrey [NZ]',
    placing: 44,
    record: {
      wins: 7,
      losses: 4,
      ties: 3,
    },
    resistances: {
      self: 0.4,
      opp: 0.58,
      oppopp: 0.48600000000000004,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Giratina V',
          number: '130',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina VSTAR',
          number: '131',
          set: 'LOR',
        },
        {
          count: 4,
          name: 'Comfey',
          number: '79',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 2,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 3,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Avery',
          number: '130',
          set: 'CRE',
        },
      ],
      energy: [
        {
          count: 4,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
        {
          count: 4,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Charlie Queen [AU]',
        result: 'W',
        table: 78,
      },
      '2': {
        name: 'Fabrice Rivalland [AU]',
        result: 'W',
        table: 17,
      },
      '3': {
        name: 'Thomas McCawley [AU]',
        result: 'L',
        table: 24,
      },
      '4': {
        name: 'Hayden Barker [AU]',
        result: 'W',
        table: 94,
      },
      '5': {
        name: 'Jimmy Farrugia [AU]',
        result: 'L',
        table: 30,
      },
      '6': {
        name: 'Lewis Gall [NZ]',
        result: 'W',
        table: 75,
      },
      '7': {
        name: 'Christopher Cheung [AU]',
        result: 'T',
        table: 51,
      },
      '8': {
        name: 'TE-AWHI TE ANGINA [AU]',
        result: 'W',
        table: 46,
      },
      '9': {
        name: 'Jake Cruwys [AU]',
        result: 'W',
        table: 30,
      },
      '10': {
        name: 'Lucas Hamilton-Foster [AU]',
        result: 'W',
        table: 28,
      },
      '11': {
        name: 'Christian Hasbani [AU]',
        result: 'T',
        table: 15,
      },
      '12': {
        name: 'Aaron-Lee Cole [AU]',
        result: 'L',
        table: 13,
      },
      '13': {
        name: '[Table 1]Sam Hendle [AU]',
        result: 'T',
        table: 16,
      },
      '14': {
        name: 'Christopher Cheung [AU]',
        result: 'L',
        table: 21,
      },
    },
  },
  {
    name: 'Tibor Baranyay [AU]',
    placing: 45,
    record: {
      wins: 7,
      losses: 5,
      ties: 2,
    },
    resistances: {
      self: 0.25,
      opp: 0.5599999999999999,
      oppopp: 0.492,
    },
    decklist: {
      pokemon: [
        {
          count: 1,
          name: 'Morpeko',
          number: '121',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Galarian Moltres V',
          number: '183',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Squawkabilly ex',
          number: '247',
          set: 'PAL',
        },
        {
          count: 3,
          name: 'Roaring Moon ex',
          number: '229',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Mew',
          number: '11',
          set: 'CEL',
        },
        {
          count: 1,
          name: 'Lumineon V',
          number: 'GG39',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Mew ex',
          number: '53',
          set: 'SVP',
        },
      ],
      trainer: [
        {
          count: 1,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Town Store',
          number: '196',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 3,
          name: 'PokeStop',
          number: '68',
          set: 'PGO',
        },
        {
          count: 2,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 4,
          name: 'Energy Switch',
          number: '129',
          set: 'CES',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Ancient Booster Energy Capsule',
          number: '159',
          set: 'PAR',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 1,
          name: 'Emergency Jelly',
          number: '155',
          set: 'SIT',
        },
        {
          count: 4,
          name: "Professor Sada's Vitality",
          number: '170',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 4,
          name: 'Dark Patch',
          number: '139',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Cross Switcher',
          number: '230',
          set: 'FST',
        },
        {
          count: 1,
          name: 'Canceling Cologne',
          number: '136',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Earthen Vessel',
          number: '163',
          set: 'PAR',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
      ],
      energy: [
        {
          count: 6,
          name: 'Darkness Energy - Basic',
          number: '158',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Jeremy Lim [AU]',
        result: 'W',
        table: 143,
      },
      '2': {
        name: 'Kye Edmondston [AU]',
        result: 'T',
        table: 15,
      },
      '3': {
        name: 'Tom Sautelle [AU]',
        result: 'L',
        table: 47,
      },
      '4': {
        name: 'Michael Gennaccaro [AU]',
        result: 'W',
        table: 146,
      },
      '5': {
        name: 'Luke Schmitt [AU]',
        result: 'T',
        table: 88,
      },
      '6': {
        name: 'Kerwin Lee [AU]',
        result: 'W',
        table: 92,
      },
      '7': {
        name: 'James Xu [AU]',
        result: 'W',
        table: 58,
      },
      '8': {
        name: 'Andi Cheung [AU]',
        result: 'W',
        table: 38,
      },
      '9': {
        name: 'Louis Chi [NZ]',
        result: 'W',
        table: 22,
      },
      '10': {
        name: 'Manuel Jorach [AT]',
        result: 'L',
        table: 11,
      },
      '11': {
        name: 'Shaun Sewell [AU]',
        result: 'L',
        table: 19,
      },
      '12': {
        name: 'Edin Visca [AU]',
        result: 'W',
        table: 25,
      },
      '13': {
        name: 'Blake Lobina [AU]',
        result: 'L',
        table: 19,
      },
      '14': {
        name: 'Aiden Harrison [AU]',
        result: 'L',
        table: 25,
      },
    },
  },
  {
    name: 'YiFei Ruan [AU]',
    placing: 46,
    record: {
      wins: 7,
      losses: 5,
      ties: 2,
    },
    resistances: {
      self: 0.3,
      opp: 0.5599999999999999,
      oppopp: 0.434,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Ralts',
          number: '60',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Kirlia',
          number: 'SWSH271',
          set: 'PR',
        },
        {
          count: 1,
          name: 'Kirlia',
          number: '60',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Gardevoir',
          number: 'TG05',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Gardevoir ex',
          number: '245',
          set: 'SVI',
        },
        {
          count: 1,
          name: 'Mew',
          number: 'GG10',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Scream Tail',
          number: '65',
          set: 'SVP',
        },
        {
          count: 1,
          name: 'Cresselia',
          number: '74',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Zacian V',
          number: 'GG48',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: 'GG06',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Worker',
          number: '167',
          set: 'SIT',
        },
        {
          count: 1,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: "Professor Turo's Scenario",
          number: '171',
          set: 'PAR',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 3,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 3,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Fog Crystal',
          number: '140',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
      ],
      energy: [
        {
          count: 10,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Reversal Energy - Special',
          number: '192',
          set: 'PAL',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Rhys Theodoropoulos [AU]',
        result: 'W',
        table: 72,
      },
      '2': {
        name: 'Hugh Batten [NZ]',
        result: 'W',
        table: 58,
      },
      '3': {
        name: 'Nigel Tan [NZ]',
        result: 'T',
        table: 10,
      },
      '4': {
        name: 'Bailey Craig [AU]',
        result: 'L',
        table: 23,
      },
      '5': {
        name: 'Nicholas Choong [NZ]',
        result: 'W',
        table: 84,
      },
      '6': {
        name: 'Hayden Matthews [AU]',
        result: 'W',
        table: 32,
      },
      '7': {
        name: 'Harry Shallcrass [NZ]',
        result: 'L',
        table: 19,
      },
      '8': {
        name: 'Cameron Shenoy [US]',
        result: 'W',
        table: 59,
      },
      '9': {
        name: 'Vincent Sutinah [AU]',
        result: 'W',
        table: 35,
      },
      '10': {
        name: 'Haru Nishikawa [JP]',
        result: 'L',
        table: 14,
      },
      '11': {
        name: 'Ryan Tan [UK]',
        result: 'W',
        table: 23,
      },
      '12': {
        name: 'Jordan Palmer [AU]',
        result: 'T',
        table: 21,
      },
      '13': {
        name: 'Daniel Ross-Brown [AU]',
        result: 'L',
        table: 22,
      },
      '14': {
        name: 'Simon Williams [AU]',
        result: 'L',
        table: 26,
      },
    },
  },
  {
    name: 'Xinfang Wang [AU]',
    placing: 47,
    record: {
      wins: 7,
      losses: 5,
      ties: 2,
    },
    resistances: {
      self: 0.25,
      opp: 0.52,
      oppopp: 0.46399999999999997,
    },
    decklist: {
      pokemon: [
        {
          count: 2,
          name: 'Giratina V',
          number: '130',
          set: 'LOR',
        },
        {
          count: 4,
          name: 'Comfey',
          number: '79',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina VSTAR',
          number: '131',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Giratina V',
          number: 'SWSH259',
          set: 'PR',
        },
      ],
      trainer: [
        {
          count: 2,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Hisuian Heavy Ball',
          number: '146',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 1,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 3,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
      ],
      energy: [
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 4,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 4,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
        {
          count: 3,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Ancel Franklin [AU]',
        result: 'W',
        table: 159,
      },
      '2': {
        name: 'Jesse Becker [AU]',
        result: 'W',
        table: 51,
      },
      '3': {
        name: 'Matthew Bennett [AU]',
        result: 'T',
        table: 28,
      },
      '4': {
        name: 'Chung-Yin Johnny Chan [AU]',
        result: 'W',
        table: 41,
      },
      '5': {
        name: 'Justin Teh [AU]',
        result: 'W',
        table: 12,
      },
      '6': {
        name: 'Tim Franklin [AU]',
        result: 'L',
        table: 5,
      },
      '7': {
        name: 'Tristan Young [AU]',
        result: 'W',
        table: 29,
      },
      '8': {
        name: 'Christian Hasbani [AU]',
        result: 'W',
        table: 17,
      },
      '9': {
        name: 'Thomas Thoonen [AU]',
        result: 'T',
        table: 12,
      },
      '10': {
        name: 'Thomas Thoonen [AU]',
        result: 'W',
        table: 9,
      },
      '11': {
        name: 'Gabriel Smart [US]',
        result: 'L',
        table: 6,
      },
      '12': {
        name: 'Siu Chun Lee [AU]',
        result: 'L',
        table: 12,
      },
      '13': {
        name: 'Will Harris [AU]',
        result: 'L',
        table: 23,
      },
      '14': {
        name: 'Noah Lin [CN]',
        result: 'L',
        table: 24,
      },
    },
  },
  {
    name: 'Der Cherng Lee [NZ]',
    placing: 48,
    record: {
      wins: 7,
      losses: 5,
      ties: 2,
    },
    resistances: {
      self: 0.3,
      opp: 0.47000000000000003,
      oppopp: 0.44399999999999995,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Mew V',
          number: '250',
          set: 'FST',
        },
        {
          count: 3,
          name: 'Mew VMAX',
          number: '114',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Genesect V',
          number: '254',
          set: 'FST',
        },
      ],
      trainer: [
        {
          count: 3,
          name: 'Judge',
          number: '235',
          set: 'FST',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 1,
          name: "Elesa's Sparkle",
          number: '147',
          set: 'CRZ',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Power Tablet',
          number: '236',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 3,
          name: 'Cram-o-matic',
          number: '229',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Feather Ball',
          number: '141',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Hisuian Heavy Ball',
          number: '146',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Pal Pad',
          number: '172',
          set: 'SSH',
        },
        {
          count: 1,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 3,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 2,
          name: 'Box of Disaster',
          number: '154',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Choice Belt',
          number: '211',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Lost City',
          number: '161',
          set: 'LOR',
        },
      ],
      energy: [
        {
          count: 4,
          name: 'Double Turbo Energy - Special',
          number: '216',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Fusion Strike Energy - Special',
          number: '244',
          set: 'FST',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'James Breene [AU]',
        result: 'T',
        table: 19,
      },
      '2': {
        name: 'Rostin Luo [NZ]',
        result: 'W',
        table: 148,
      },
      '3': {
        name: 'Harry West [AU]',
        result: 'W',
        table: 75,
      },
      '4': {
        name: 'ユキ OKA [JP]',
        result: 'L',
        table: 39,
      },
      '5': {
        name: 'Hayden Matthews [AU]',
        result: 'L',
        table: 69,
      },
      '6': {
        name: 'Paul Coletta [AU]',
        result: 'W',
        table: 136,
      },
      '7': {
        name: 'Diego Gatica [CL]',
        result: 'W',
        table: 69,
      },
      '8': {
        name: 'Lily Huynh [AU]',
        result: 'W',
        table: 51,
      },
      '9': {
        name: 'Huy Nguyen [AU]',
        result: 'W',
        table: 43,
      },
      '10': {
        name: 'Christian Delloiaco [AU]',
        result: 'L',
        table: 19,
      },
      '11': {
        name: 'Cassie Joison [AU]',
        result: 'W',
        table: 29,
      },
      '12': {
        name: 'Daniel Ross-Brown [AU]',
        result: 'T',
        table: 17,
      },
      '13': {
        name: 'Jordan Palmer [AU]',
        result: 'L',
        table: 18,
      },
      '14': {
        name: 'Takuma Tominaga [JP]',
        result: 'L',
        table: 22,
      },
    },
  },
  {
    name: 'Anton Piccio [AU]',
    placing: 49,
    record: {
      wins: 7,
      losses: 5,
      ties: 2,
    },
    resistances: {
      self: 0.3,
      opp: 0.41,
      oppopp: 0.41600000000000004,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Charmander',
          number: '4',
          set: 'MEW',
        },
        {
          count: 1,
          name: 'Charmander',
          number: '26',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Charmeleon',
          number: '27',
          set: 'OBF',
        },
        {
          count: 3,
          name: 'Charizard ex',
          number: '125',
          set: 'OBF',
        },
        {
          count: 2,
          name: 'Pidgey',
          number: '16',
          set: 'MEW',
        },
        {
          count: 2,
          name: 'Pidgeot ex',
          number: '217',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Rotom V',
          number: '176',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Lumineon V',
          number: '155',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Mew',
          number: '11',
          set: 'CEL',
        },
        {
          count: 1,
          name: 'Radiant Charizard',
          number: '11',
          set: 'PGO',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Arven',
          number: '186',
          set: 'OBF',
        },
        {
          count: 3,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 3,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 1,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Choice Belt',
          number: '211',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Technical Machine: Devolution',
          number: '177',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
      ],
      energy: [
        {
          count: 7,
          name: 'Fire Energy - Basic',
          number: '153',
          set: 'CRZ',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Daniel Schwan [AU]',
        result: 'L',
        table: 245,
      },
      '2': {
        name: 'Thomas Quilliam [AU]',
        result: 'W',
        table: 245,
      },
      '3': {
        name: 'Blake Davies [AU]',
        result: 'T',
        table: 110,
      },
      '4': {
        name: 'Christofer Gozali [AU]',
        result: 'W',
        table: 143,
      },
      '5': {
        name: 'Sam Hughes [AU]',
        result: 'L',
        table: 93,
      },
      '6': {
        name: 'Archie de Vries [AU]',
        result: 'W',
        table: 111,
      },
      '7': {
        name: 'Fabrice Rivalland [AU]',
        result: 'W',
        table: 88,
      },
      '8': {
        name: 'Callum Walker [AU]',
        result: 'W',
        table: 65,
      },
      '9': {
        name: 'Jacob McSpadden [AU]',
        result: 'W',
        table: 36,
      },
      '10': {
        name: 'Noah Lin [CN]',
        result: 'T',
        table: 29,
      },
      '11': {
        name: 'CHEE WAI LIEW [AU]',
        result: 'L',
        table: 20,
      },
      '12': {
        name: 'Ryan Tan [UK]',
        result: 'L',
        table: 27,
      },
      '13': {
        name: 'Simon Williams [AU]',
        result: 'L',
        table: 29,
      },
      '14': {
        name: 'Paul Ashton [AU]',
        result: 'W',
        table: 29,
      },
    },
  },
  {
    name: 'Max Prescott [AU]',
    placing: 50,
    record: {
      wins: 7,
      losses: 5,
      ties: 2,
    },
    resistances: {
      self: 0.3,
      opp: 0.37,
      oppopp: 0.46799999999999997,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Ralts',
          number: '60',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Kirlia',
          number: '60',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Kirlia',
          number: '68',
          set: 'SIT',
        },
        {
          count: 2,
          name: 'Gardevoir',
          number: '61',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Gardevoir ex',
          number: '86',
          set: 'SVI',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Scream Tail',
          number: '86',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Cresselia',
          number: '74',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Zacian V',
          number: '16',
          set: 'CEL',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 2,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 3,
          name: 'Fog Crystal',
          number: '140',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
        {
          count: 1,
          name: "Professor Turo's Scenario",
          number: '171',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
      ],
      energy: [
        {
          count: 3,
          name: 'Reversal Energy - Special',
          number: '192',
          set: 'PAL',
        },
        {
          count: 10,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Jackson Mcdonald [AU]',
        result: 'W',
        table: 67,
      },
      '2': {
        name: 'Brendan Cliffe [AU]',
        result: 'W',
        table: 62,
      },
      '3': {
        name: 'Ciaran Bradley [NZ]',
        result: 'W',
        table: 20,
      },
      '4': {
        name: 'Stephen Iskandar [AU]',
        result: 'W',
        table: 19,
      },
      '5': {
        name: 'Tim Franklin [AU]',
        result: 'L',
        table: 7,
      },
      '6': {
        name: 'Manuel Jorach [AT]',
        result: 'W',
        table: 13,
      },
      '7': {
        name: 'Jose de la garma [AU]',
        result: 'L',
        table: 8,
      },
      '8': {
        name: 'Manuel Cresdee [AU]',
        result: 'T',
        table: 25,
      },
      '9': {
        name: 'Stephen Todorovic [AU]',
        result: 'W',
        table: 26,
      },
      '10': {
        name: 'Jimmy Nguyen [AU]',
        result: 'L',
        table: 13,
      },
      '11': {
        name: 'Jordan Palmer [AU]',
        result: 'L',
        table: 26,
      },
      '12': {
        name: 'Alyssa Lock [AU]',
        result: 'L',
        table: 28,
      },
      '13': {
        name: 'Stephen Iskandar [AU]',
        result: 'T',
        table: 30,
      },
      '14': {
        name: 'Jake Dunstan [AU]',
        result: 'W',
        table: 28,
      },
    },
  },
  {
    name: 'Ryan Tan [UK]',
    placing: 51,
    record: {
      wins: 6,
      losses: 3,
      ties: 5,
    },
    resistances: {
      self: 0.3,
      opp: 0.35,
      oppopp: 0.49799999999999994,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Roaring Moon ex',
          number: '124',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Galarian Moltres V',
          number: '97',
          set: 'CRE',
        },
        {
          count: 1,
          name: 'Morpeko',
          number: '121',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Mew ex',
          number: '151',
          set: 'MEW',
        },
        {
          count: 1,
          name: 'Squawkabilly ex',
          number: '169',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Dark Patch',
          number: '139',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Energy Switch',
          number: '129',
          set: 'CES',
        },
        {
          count: 3,
          name: 'Trekking Shoes',
          number: '156',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Earthen Vessel',
          number: '163',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Pal Pad',
          number: '172',
          set: 'SSH',
        },
        {
          count: 1,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 2,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 2,
          name: 'Ancient Booster Energy Capsule',
          number: '159',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Emergency Jelly',
          number: '155',
          set: 'SIT',
        },
        {
          count: 3,
          name: 'PokeStop',
          number: '68',
          set: 'PGO',
        },
        {
          count: 1,
          name: 'Town Store',
          number: '196',
          set: 'OBF',
        },
        {
          count: 3,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 2,
          name: "Professor Sada's Vitality",
          number: '170',
          set: 'PAR',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Judge',
          number: '235',
          set: 'FST',
        },
        {
          count: 1,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
      ],
      energy: [
        {
          count: 9,
          name: 'Darkness Energy - Basic',
          number: '158',
          set: 'CRZ',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Malik Hisyam Zaihan [IE]',
        result: 'T',
        table: 232,
      },
      '2': {
        name: 'Brendon Leehane [AU]',
        result: 'T',
        table: 121,
      },
      '3': {
        name: 'Anthony Smith [AU]',
        result: 'W',
        table: 180,
      },
      '4': {
        name: 'Julian Luvara [AU]',
        result: 'T',
        table: 104,
      },
      '5': {
        name: 'Hugh Batten [NZ]',
        result: 'W',
        table: 109,
      },
      '6': {
        name: 'Ida Nero [AU]',
        result: 'W',
        table: 74,
      },
      '7': {
        name: 'Matthew Anderson [AU]',
        result: 'W',
        table: 39,
      },
      '8': {
        name: 'Gakuto Shiina [JP]',
        result: 'W',
        table: 28,
      },
      '9': {
        name: 'Alyssa Lock [AU]',
        result: 'T',
        table: 16,
      },
      '10': {
        name: 'Jake Dunstan [AU]',
        result: 'T',
        table: 20,
      },
      '11': {
        name: 'YiFei Ruan [AU]',
        result: 'L',
        table: 23,
      },
      '12': {
        name: 'Anton Piccio [AU]',
        result: 'W',
        table: 27,
      },
      '13': {
        name: '[Table 2]Nissa Kew [AU]',
        result: 'L',
        table: 17,
      },
      '14': {
        name: 'Christian Hasbani [AU]',
        result: 'L',
        table: 23,
      },
    },
  },
  {
    name: 'Jimmy Nguyen [AU]',
    placing: 52,
    record: {
      wins: 6,
      losses: 4,
      ties: 4,
    },
    resistances: {
      self: 0.25,
      opp: 0.52,
      oppopp: 0.45599999999999996,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Roaring Moon ex',
          number: '124',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Mew ex',
          number: '151',
          set: 'MEW',
        },
        {
          count: 1,
          name: 'Lumineon V',
          number: '40',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Galarian Moltres V',
          number: '97',
          set: 'CRE',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Squawkabilly ex',
          number: '75',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Morpeko',
          number: '121',
          set: 'PAR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: "Professor Sada's Vitality",
          number: '170',
          set: 'PAR',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Pal Pad',
          number: '172',
          set: 'SSH',
        },
        {
          count: 3,
          name: 'Trekking Shoes',
          number: '156',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 4,
          name: 'Energy Switch',
          number: '129',
          set: 'CES',
        },
        {
          count: 3,
          name: 'Earthen Vessel',
          number: '163',
          set: 'PAR',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Dark Patch',
          number: '139',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 2,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Emergency Jelly',
          number: '155',
          set: 'SIT',
        },
        {
          count: 4,
          name: 'PokeStop',
          number: '68',
          set: 'PGO',
        },
        {
          count: 1,
          name: 'Town Store',
          number: '196',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
      ],
      energy: [
        {
          count: 7,
          name: 'Darkness Energy - Basic',
          number: '158',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Christofer Gozali [AU]',
        result: 'T',
        table: 169,
      },
      '2': {
        name: 'Andrew Teoh [AU]',
        result: 'T',
        table: 139,
      },
      '3': {
        name: 'YUTIAN SHOU [AU]',
        result: 'W',
        table: 170,
      },
      '4': {
        name: 'Zachary Bishop [AU]',
        result: 'W',
        table: 108,
      },
      '5': {
        name: 'David Boyd [AU]',
        result: 'W',
        table: 55,
      },
      '6': {
        name: 'Manuel Cresdee [AU]',
        result: 'T',
        table: 31,
      },
      '7': {
        name: 'Josh Geltch [AU]',
        result: 'W',
        table: 52,
      },
      '8': {
        name: 'Mia Fountain [AU]',
        result: 'W',
        table: 29,
      },
      '9': {
        name: 'Simon Williams [AU]',
        result: 'T',
        table: 13,
      },
      '10': {
        name: 'Max Prescott [AU]',
        result: 'W',
        table: 13,
      },
      '11': {
        name: 'Thomas McCawley [AU]',
        result: 'L',
        table: 13,
      },
      '12': {
        name: 'Nigel Tan [NZ]',
        result: 'L',
        table: 22,
      },
      '13': {
        name: 'Christian Delloiaco [AU]',
        result: 'L',
        table: 25,
      },
      '14': {
        name: 'Edin Visca [AU]',
        result: 'L',
        table: 27,
      },
    },
  },
  {
    name: 'Stephen Iskandar [AU]',
    placing: 53,
    record: {
      wins: 6,
      losses: 5,
      ties: 3,
    },
    resistances: {
      self: 0.25,
      opp: 0.55,
      oppopp: 0.45,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Giratina V',
          number: '185',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina VSTAR',
          number: '212',
          set: 'LOR',
        },
        {
          count: 4,
          name: 'Comfey',
          number: 'GG14',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: 'GG06',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 3,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 4,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Avery',
          number: '130',
          set: 'CRE',
        },
      ],
      energy: [
        {
          count: 4,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
        {
          count: 4,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Johnathan Heng [AU]',
        result: 'W',
        table: 238,
      },
      '2': {
        name: 'Alfred Yang [AU]',
        result: 'W',
        table: 76,
      },
      '3': {
        name: 'Sineth Akmeemana [AU]',
        result: 'W',
        table: 26,
      },
      '4': {
        name: 'Max Prescott [AU]',
        result: 'L',
        table: 19,
      },
      '5': {
        name: 'Stephen Todorovic [AU]',
        result: 'W',
        table: 31,
      },
      '6': {
        name: 'Christopher Mathers [AU]',
        result: 'W',
        table: 22,
      },
      '7': {
        name: 'Christian Delloiaco [AU]',
        result: 'W',
        table: 12,
      },
      '8': {
        name: 'Brent Tonisson [AU]',
        result: 'L',
        table: 6,
      },
      '9': {
        name: 'Jordan Palmer [AU]',
        result: 'T',
        table: 14,
      },
      '10': {
        name: 'Christian Viti [AU]',
        result: 'L',
        table: 23,
      },
      '11': {
        name: 'Nigel Tan [NZ]',
        result: 'L',
        table: 30,
      },
      '12': {
        name: 'Will Harris [AU]',
        result: 'L',
        table: 30,
      },
      '13': {
        name: 'Max Prescott [AU]',
        result: 'T',
        table: 30,
      },
      '14': {
        name: 'Cassie Joison [AU]',
        result: 'T',
        table: 30,
      },
    },
  },
  {
    name: 'Jake Dunstan [AU]',
    placing: 54,
    record: {
      wins: 6,
      losses: 5,
      ties: 3,
    },
    resistances: {
      self: 0.25,
      opp: 0.45999999999999996,
      oppopp: 0.41200000000000003,
    },
    decklist: {
      pokemon: [
        {
          count: 1,
          name: 'Pidgeot V',
          number: '137',
          set: 'LOR',
        },
        {
          count: 4,
          name: 'Snorlax',
          number: '55',
          set: 'PGO',
        },
        {
          count: 1,
          name: 'Crabominable V',
          number: '76',
          set: 'FST',
        },
        {
          count: 1,
          name: 'Rotom V',
          number: '45',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Mimikyu',
          number: '97',
          set: 'PAL',
        },
      ],
      trainer: [
        {
          count: 2,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Hisuian Heavy Ball',
          number: '146',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Echoing Horn',
          number: '136',
          set: 'CRE',
        },
        {
          count: 1,
          name: 'Sidney',
          number: '241',
          set: 'FST',
        },
        {
          count: 1,
          name: 'Luxurious Cape',
          number: '166',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 1,
          name: 'Giacomo',
          number: '182',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Peonia',
          number: '149',
          set: 'CRE',
        },
        {
          count: 1,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: "Erika's Invitation",
          number: '160',
          set: 'MEW',
        },
        {
          count: 2,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 3,
          name: 'Miss Fortune Sisters',
          number: '164',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Cyllene',
          number: '138',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 2,
          name: 'Pal Pad',
          number: '172',
          set: 'SSH',
        },
        {
          count: 4,
          name: 'Temple of Sinnoh',
          number: '155',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Penny',
          number: '239',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 4,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 1,
          name: "Team Yell's Cheer",
          number: '149',
          set: 'BRS',
        },
        {
          count: 3,
          name: 'Bravery Charm',
          number: '173',
          set: 'PAL',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Arven',
          number: '186',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Avery',
          number: '130',
          set: 'CRE',
        },
      ],
      energy: [
        {
          count: 1,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Sam Lao [AU]',
        result: 'W',
        table: 155,
      },
      '2': {
        name: 'Courtney Fox [AU]',
        result: 'T',
        table: 44,
      },
      '3': {
        name: 'Jer-Shyan Hwa [AU]',
        result: 'W',
        table: 61,
      },
      '4': {
        name: 'Siu Chun Lee [AU]',
        result: 'L',
        table: 32,
      },
      '5': {
        name: 'Benjamin Rolfe [AU]',
        result: 'W',
        table: 73,
      },
      '6': {
        name: 'ユキ OKA [JP]',
        result: 'W',
        table: 39,
      },
      '7': {
        name: 'thomas lackington [AU]',
        result: 'W',
        table: 30,
      },
      '8': {
        name: 'Jorge Soria [AU]',
        result: 'L',
        table: 14,
      },
      '9': {
        name: 'Vincent Ma [NZ]',
        result: 'W',
        table: 31,
      },
      '10': {
        name: 'Ryan Tan [UK]',
        result: 'T',
        table: 20,
      },
      '11': {
        name: 'Noah Lin [CN]',
        result: 'T',
        table: 22,
      },
      '12': {
        name: 'xinzhe hou [AU]',
        result: 'L',
        table: 23,
      },
      '13': {
        name: 'Alyssa Lock [AU]',
        result: 'L',
        table: 26,
      },
      '14': {
        name: 'Max Prescott [AU]',
        result: 'L',
        table: 28,
      },
    },
  },
  {
    name: 'Cassie Joison [AU]',
    placing: 55,
    record: {
      wins: 6,
      losses: 5,
      ties: 3,
    },
    resistances: {
      self: 0.25,
      opp: 0.43,
      oppopp: 0.47000000000000003,
    },
    decklist: {
      pokemon: [
        {
          count: 1,
          name: 'Squawkabilly ex',
          number: '264',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Bibarel',
          number: 'GG25',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Radiant Hisuian Sneasler',
          number: '123',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Brute Bonnet',
          number: '123',
          set: 'PAR',
        },
        {
          count: 4,
          name: 'Klawf',
          number: '105',
          set: 'PAR',
        },
        {
          count: 3,
          name: 'Hisuian Electrode V',
          number: 'SWSH294',
          set: 'PR',
        },
        {
          count: 2,
          name: 'Bidoof',
          number: 'GG29',
          set: 'CRZ',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 3,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 3,
          name: 'Arven',
          number: '186',
          set: 'OBF',
        },
        {
          count: 4,
          name: 'Spicy Seasoned Curry',
          number: '151',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 3,
          name: 'Town Store',
          number: '196',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Energy Loto',
          number: '140',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 3,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 3,
          name: 'Ancient Booster Energy Capsule',
          number: '159',
          set: 'PAR',
        },
        {
          count: 1,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
      ],
      energy: [
        {
          count: 4,
          name: 'Double Turbo Energy - Special',
          number: '216',
          set: 'ASR',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Matthew Anderson [AU]',
        result: 'L',
        table: 250,
      },
      '2': {
        name: 'Donna Pedder [AU]',
        result: 'L',
        table: 264,
      },
      '3': {
        name: 'Joshua Grob [AU]',
        result: 'W',
        table: 241,
      },
      '4': {
        name: 'Alex Gordon [NZ]',
        result: 'W',
        table: 203,
      },
      '5': {
        name: 'William Rue [AU]',
        result: 'T',
        table: 130,
      },
      '6': {
        name: 'Justin Cutajar [AU]',
        result: 'W',
        table: 147,
      },
      '7': {
        name: 'Markus Janssen [AU]',
        result: 'W',
        table: 75,
      },
      '8': {
        name: 'TJ Dixon [AU]',
        result: 'W',
        table: 45,
      },
      '9': {
        name: 'Keegan Burt [AU]',
        result: 'W',
        table: 41,
      },
      '10': {
        name: 'Daniel Ross-Brown [AU]',
        result: 'L',
        table: 26,
      },
      '11': {
        name: 'Der Cherng Lee [NZ]',
        result: 'L',
        table: 29,
      },
      '12': {
        name: 'Simon Williams [AU]',
        result: 'T',
        table: 29,
      },
      '13': {
        name: 'Christopher Cheung [AU]',
        result: 'L',
        table: 27,
      },
      '14': {
        name: 'Stephen Iskandar [AU]',
        result: 'T',
        table: 30,
      },
    },
  },
  {
    name: 'Paul Ashton [AU]',
    placing: 56,
    record: {
      wins: 6,
      losses: 6,
      ties: 2,
    },
    resistances: {
      self: 0.25,
      opp: 0.45999999999999996,
      oppopp: 0.41800000000000004,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Gimmighoul',
          number: '88',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Gimmighoul',
          number: '87',
          set: 'PAR',
        },
        {
          count: 4,
          name: 'Gholdengo ex',
          number: '139',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Origin Forme Palkia V',
          number: '39',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Origin Forme Palkia VSTAR',
          number: '40',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Feebas',
          number: '39',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Milotic',
          number: '38',
          set: 'EVS',
        },
      ],
      trainer: [
        {
          count: 2,
          name: 'Irida',
          number: '147',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Worker',
          number: '167',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Avery',
          number: '130',
          set: 'CRE',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Cross Switcher',
          number: '230',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Superior Energy Retrieval',
          number: '189',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Energy Retrieval',
          number: '127',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Earthen Vessel',
          number: '163',
          set: 'PAR',
        },
        {
          count: 3,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 3,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Hisuian Heavy Ball',
          number: '146',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Canceling Cologne',
          number: '136',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'PokeStop',
          number: '68',
          set: 'PGO',
        },
        {
          count: 1,
          name: 'Letter of Encouragement',
          number: '189',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Raihan',
          number: '140',
          set: 'CRZ',
        },
      ],
      energy: [
        {
          count: 4,
          name: 'Metal Energy - Basic',
          number: '159',
          set: 'CRZ',
        },
        {
          count: 7,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Fletcher Konynenburg [AU]',
        result: 'W',
        table: 56,
      },
      '2': {
        name: 'Carmen Harris [AU]',
        result: 'W',
        table: 39,
      },
      '3': {
        name: 'Darrin Sin [AU]',
        result: 'L',
        table: 33,
      },
      '4': {
        name: 'Michael Gleeson [AU]',
        result: 'W',
        table: 45,
      },
      '5': {
        name: 'Ashton Grant [AU]',
        result: 'W',
        table: 41,
      },
      '6': {
        name: 'Matthew Chong [AU]',
        result: 'W',
        table: 23,
      },
      '7': {
        name: 'Takuma Tominaga [JP]',
        result: 'L',
        table: 15,
      },
      '8': {
        name: 'Shang Jun Chua [AU]',
        result: 'W',
        table: 22,
      },
      '9': {
        name: 'Shaun Sewell [AU]',
        result: 'T',
        table: 17,
      },
      '10': {
        name: 'Shaun Sewell [AU]',
        result: 'T',
        table: 16,
      },
      '11': {
        name: 'Thomas Thoonen [AU]',
        result: 'L',
        table: 21,
      },
      '12': {
        name: 'Takuma Tominaga [JP]',
        result: 'L',
        table: 26,
      },
      '13': {
        name: 'Edin Visca [AU]',
        result: 'L',
        table: 28,
      },
      '14': {
        name: 'Anton Piccio [AU]',
        result: 'L',
        table: 29,
      },
    },
  },
  {
    name: 'Darrin Sin [AU]',
    placing: 57,
    record: {
      wins: 6,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.6234567901234569,
      oppopp: 0.5637134406231629,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Soon Keat Chia [MY]',
        result: 'W',
        table: 53,
      },
      '2': {
        name: 'Keegan Burt [AU]',
        result: 'W',
        table: 9,
      },
      '3': {
        name: 'Paul Ashton [AU]',
        result: 'W',
        table: 33,
      },
      '4': {
        name: 'Angus Johnson [AU]',
        result: 'L',
        table: 11,
      },
      '5': {
        name: 'Lochie McKeefry [NZ]',
        result: 'L',
        table: 39,
      },
      '6': {
        name: 'Hayden Barker [AU]',
        result: 'W',
        table: 84,
      },
      '7': {
        name: 'Shaun Sewell [AU]',
        result: 'L',
        table: 37,
      },
      '8': {
        name: 'Rhys Theodoropoulos [AU]',
        result: 'W',
        table: 72,
      },
      '9': {
        name: 'Scott Langford [AU]',
        result: 'W',
        table: 52,
      },
    },
  },
  {
    name: 'Benjamin Hall [AU]',
    placing: 58,
    record: {
      wins: 6,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5987654320987654,
      oppopp: 0.557919361160102,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jordan Ung [AU]',
        result: 'W',
        table: 75,
      },
      '2': {
        name: 'John Morris [AU]',
        result: 'W',
        table: 66,
      },
      '3': {
        name: 'Todd Williams [AU]',
        result: 'W',
        table: 12,
      },
      '4': {
        name: 'Henry Brand [AU]',
        result: 'L',
        table: 17,
      },
      '5': {
        name: 'Cody Matthewe [AU]',
        result: 'W',
        table: 40,
      },
      '6': {
        name: 'Sam Clayfield [AU]',
        result: 'W',
        table: 19,
      },
      '7': {
        name: 'Lochie McKeefry [NZ]',
        result: 'L',
        table: 13,
      },
      '8': {
        name: 'Christopher Mathers [AU]',
        result: 'L',
        table: 31,
      },
      '9': {
        name: 'Corey O’Leary [AU]',
        result: 'W',
        table: 47,
      },
    },
  },
  {
    name: 'Gakuto Shiina [JP]',
    placing: 59,
    record: {
      wins: 6,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.574074074074074,
      oppopp: 0.536395257691554,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Angus Johnson [AU]',
        result: 'L',
        table: 120,
      },
      '2': {
        name: 'william wang [AU]',
        result: 'W',
        table: 174,
      },
      '3': {
        name: 'Ryan Edwards [AU]',
        result: 'W',
        table: 145,
      },
      '4': {
        name: 'David Younan [AU]',
        result: 'W',
        table: 84,
      },
      '5': {
        name: 'Josh Geltch [AU]',
        result: 'W',
        table: 48,
      },
      '6': {
        name: 'Kaiwen Cabbabe [AU]',
        result: 'L',
        table: 26,
      },
      '7': {
        name: 'Joshua Bradley [AU]',
        result: 'W',
        table: 41,
      },
      '8': {
        name: 'Ryan Tan [UK]',
        result: 'L',
        table: 28,
      },
      '9': {
        name: 'Andre Pollacchi [AU]',
        result: 'W',
        table: 54,
      },
    },
  },
  {
    name: 'Mia Fountain [AU]',
    placing: 60,
    record: {
      wins: 6,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5691358024691358,
      oppopp: 0.5391436409954928,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Shaun Coupe [AU]',
        result: 'W',
        table: 230,
      },
      '2': {
        name: 'Benjamin Kouzas [AU]',
        result: 'L',
        table: 99,
      },
      '3': {
        name: 'Jessamine Davis [AU]',
        result: 'W',
        table: 155,
      },
      '4': {
        name: 'Callum Pinnegar [AU]',
        result: 'L',
        table: 54,
      },
      '5': {
        name: 'Jay Tyrrell [AU]',
        result: 'W',
        table: 124,
      },
      '6': {
        name: 'Jeremy Lim [AU]',
        result: 'W',
        table: 79,
      },
      '7': {
        name: 'Max Kennedy [AU]',
        result: 'W',
        table: 54,
      },
      '8': {
        name: 'Jimmy Nguyen [AU]',
        result: 'L',
        table: 29,
      },
      '9': {
        name: 'Dylan Graefe [AU]',
        result: 'W',
        table: 48,
      },
    },
  },
  {
    name: 'Shang Jun Chua [AU]',
    placing: 61,
    record: {
      wins: 6,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5594135802469136,
      oppopp: 0.5518944126004312,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Noah Lin [CN]',
        result: 'L',
        table: 266,
      },
      '2': {
        name: 'Kylara Paulo [AU]',
        result: 'W',
        table: 238,
      },
      '3': {
        name: 'Su Fu [NZ]',
        result: 'W',
        table: 99,
      },
      '4': {
        name: 'Alvin Hall [AU]',
        result: 'W',
        table: 44,
      },
      '5': {
        name: 'Sylas Golding [AU]',
        result: 'W',
        table: 43,
      },
      '6': {
        name: 'Callum Pinnegar [AU]',
        result: 'W',
        table: 25,
      },
      '7': {
        name: 'Kaiwen Cabbabe [AU]',
        result: 'L',
        table: 11,
      },
      '8': {
        name: 'Paul Ashton [AU]',
        result: 'L',
        table: 22,
      },
      '9': {
        name: 'Todd Williams [AU]',
        result: 'W',
        table: 53,
      },
    },
  },
  {
    name: 'Zherui Li [AU]',
    placing: 62,
    record: {
      wins: 5,
      losses: 1,
      ties: 3,
    },
    resistances: {
      self: 0.7222222222222222,
      opp: 0.5372574955908289,
      oppopp: 0.547126865149352,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Brendon Leehane [AU]',
        result: 'T',
        table: 43,
      },
      '2': {
        name: 'Sophia Crunkhorn [AU]',
        result: 'T',
        table: 149,
      },
      '3': {
        name: 'Fangrao Feng [AU]',
        result: 'W',
        table: 171,
      },
      '4': {
        name: 'Jamison Bulloch [AU]',
        result: 'W',
        table: 105,
      },
      '5': {
        name: 'Ehren Roebuck [AU]',
        result: 'T',
        table: 58,
      },
      '6': {
        name: 'Brittany Mitchell [AU]',
        result: 'W',
        table: 66,
      },
      '7': {
        name: 'Manuel Cresdee [AU]',
        result: 'L',
        table: 47,
      },
      '8': {
        name: 'David Younan [AU]',
        result: 'W',
        table: 74,
      },
      '9': {
        name: 'Nathan Woodcock [AU]',
        result: 'W',
        table: 50,
      },
    },
  },
  {
    name: 'Jeremy Lim [AU]',
    placing: 63,
    record: {
      wins: 6,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5370370370370369,
      oppopp: 0.52618067803253,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Tibor Baranyay [AU]',
        result: 'L',
        table: 143,
      },
      '2': {
        name: 'Yuhao Xia [AU]',
        result: 'W',
        table: 251,
      },
      '3': {
        name: 'Cameron Dimond [AU]',
        result: 'W',
        table: 92,
      },
      '4': {
        name: 'Vignesh Krishnan [AU]',
        result: 'W',
        table: 43,
      },
      '5': {
        name: 'Corey Munro [AU]',
        result: 'L',
        table: 47,
      },
      '6': {
        name: 'Mia Fountain [AU]',
        result: 'L',
        table: 79,
      },
      '7': {
        name: 'Stuart Flynn [AU]',
        result: 'W',
        table: 119,
      },
      '8': {
        name: 'Cody Matthewe [AU]',
        result: 'W',
        table: 71,
      },
      '9': {
        name: 'Jimmy Farrugia [AU]',
        result: 'W',
        table: 49,
      },
    },
  },
  {
    name: 'Robbie Caldwell [AU]',
    placing: 64,
    record: {
      wins: 6,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.515652557319224,
      oppopp: 0.5382235764676241,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Ben McPeake [AU]',
        result: 'W',
        table: 133,
      },
      '2': {
        name: 'Will Harris [AU]',
        result: 'L',
        table: 18,
      },
      '3': {
        name: 'Ashton Grant [AU]',
        result: 'L',
        table: 118,
      },
      '4': {
        name: 'Nam Ho [AU]',
        result: 'W',
        table: 196,
      },
      '5': {
        name: 'Shaun Coupe [AU]',
        result: 'W',
        table: 110,
      },
      '6': {
        name: 'xingyu huang [AT]',
        result: 'W',
        table: 69,
      },
      '7': {
        name: 'Jordan Palmer [AU]',
        result: 'L',
        table: 48,
      },
      '8': {
        name: 'Joshua Bradley [AU]',
        result: 'W',
        table: 83,
      },
      '9': {
        name: 'Andrew Teoh [AU]',
        result: 'W',
        table: 45,
      },
    },
  },
  {
    name: 'Brendan Cliffe [AU]',
    placing: 65,
    record: {
      wins: 5,
      losses: 1,
      ties: 3,
    },
    resistances: {
      self: 0.7222222222222222,
      opp: 0.4830246913580246,
      oppopp: 0.5374954071134627,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Alex Gordon [NZ]',
        result: 'W',
        table: 117,
      },
      '2': {
        name: 'Max Prescott [AU]',
        result: 'L',
        table: 62,
      },
      '3': {
        name: 'Keller Huang [AU]',
        result: 'T',
        table: 121,
      },
      '4': {
        name: 'Sami MacKenzie [AU]',
        result: 'W',
        table: 131,
      },
      '5': {
        name: 'Thomas Lamprey [AU]',
        result: 'W',
        table: 91,
      },
      '6': {
        name: 'Louis Chi [NZ]',
        result: 'T',
        table: 55,
      },
      '7': {
        name: 'Sebastian Rutter [NZ]',
        result: 'T',
        table: 66,
      },
      '8': {
        name: 'Samuel Shepherd [NZ]',
        result: 'W',
        table: 69,
      },
      '9': {
        name: 'Anthony Tsang [AU]',
        result: 'W',
        table: 46,
      },
    },
  },
  {
    name: 'Bailey Craig [AU]',
    placing: 66,
    record: {
      wins: 5,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.6666666666666666,
      oppopp: 0.5614466980207722,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jack Riley [AU]',
        result: 'W',
        table: 206,
      },
      '2': {
        name: 'Noah Lin [CN]',
        result: 'T',
        table: 53,
      },
      '3': {
        name: 'Mohd Taufiq Mohd Alwi [SG]',
        result: 'W',
        table: 62,
      },
      '4': {
        name: 'YiFei Ruan [AU]',
        result: 'W',
        table: 23,
      },
      '5': {
        name: '玄 王 [CN]',
        result: 'W',
        table: 10,
      },
      '6': {
        name: 'Angus Johnson [AU]',
        result: 'L',
        table: 8,
      },
      '7': {
        name: 'Natalie Millar [AU]',
        result: 'W',
        table: 20,
      },
      '8': {
        name: 'James Goreing [AU]',
        result: 'T',
        table: 12,
      },
      '9': {
        name: 'CHEE WAI LIEW [AU]',
        result: 'L',
        table: 21,
      },
    },
  },
  {
    name: 'Justin Teh [AU]',
    placing: 67,
    record: {
      wins: 5,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.6035052910052909,
      oppopp: 0.5831298465888413,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Ryan Burt [AU]',
        result: 'W',
        table: 146,
      },
      '2': {
        name: 'Ryan Mcculloch [AU]',
        result: 'W',
        table: 45,
      },
      '3': {
        name: 'Tait Tran [AU]',
        result: 'W',
        table: 46,
      },
      '4': {
        name: 'Manuel Cresdee [AU]',
        result: 'T',
        table: 8,
      },
      '5': {
        name: 'Xinfang Wang [AU]',
        result: 'L',
        table: 12,
      },
      '6': {
        name: 'Michael Hicks [AU]',
        result: 'W',
        table: 58,
      },
      '7': {
        name: 'CHEE WAI LIEW [AU]',
        result: 'T',
        table: 18,
      },
      '8': {
        name: 'Louis Pozzacchio [AU]',
        result: 'W',
        table: 40,
      },
      '9': {
        name: 'Christopher Mathers [AU]',
        result: 'L',
        table: 19,
      },
    },
  },
  {
    name: 'Rostin Luo [NZ]',
    placing: 68,
    record: {
      wins: 5,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5850970017636684,
      oppopp: 0.5444356960891352,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Reginald Ng [AU]',
        result: 'T',
        table: 127,
      },
      '2': {
        name: 'Der Cherng Lee [NZ]',
        result: 'L',
        table: 148,
      },
      '3': {
        name: 'Matthew Caton [AU]',
        result: 'W',
        table: 195,
      },
      '4': {
        name: 'Aura Ye [AU]',
        result: 'W',
        table: 127,
      },
      '5': {
        name: 'WaiLok Tse [AU]',
        result: 'W',
        table: 85,
      },
      '6': {
        name: 'Jee Ong [AU]',
        result: 'W',
        table: 37,
      },
      '7': {
        name: 'Jettano Posani [AU]',
        result: 'T',
        table: 22,
      },
      '8': {
        name: 'Manuel Jorach [AT]',
        result: 'L',
        table: 35,
      },
      '9': {
        name: 'Alan Quach [NZ]',
        result: 'W',
        table: 61,
      },
    },
  },
  {
    name: 'David Frans Daritan [AU]',
    placing: 69,
    record: {
      wins: 5,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5740740740740741,
      oppopp: 0.5325053889868704,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jack Burmeister [AU]',
        result: 'W',
        table: 185,
      },
      '2': {
        name: 'Jake Lazzari [AU]',
        result: 'T',
        table: 83,
      },
      '3': {
        name: 'Ferdi Mak [AU]',
        result: 'L',
        table: 73,
      },
      '4': {
        name: 'James Boynton [AU]',
        result: 'W',
        table: 136,
      },
      '5': {
        name: 'Saxon Wright [AU]',
        result: 'W',
        table: 66,
      },
      '6': {
        name: 'Mitch Knuckey [AU]',
        result: 'W',
        table: 34,
      },
      '7': {
        name: 'Michael Wilson [AU]',
        result: 'W',
        table: 33,
      },
      '8': {
        name: 'James Williams [AU]',
        result: 'L',
        table: 15,
      },
      '9': {
        name: 'Alfie Delgado [MX]',
        result: 'T',
        table: 38,
      },
    },
  },
  {
    name: 'Blake Davies [AU]',
    placing: 70,
    record: {
      wins: 5,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5679012345679012,
      oppopp: 0.5476711878166904,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Aiden Harrison [AU]',
        result: 'L',
        table: 132,
      },
      '2': {
        name: 'xingyu huang [AT]',
        result: 'W',
        table: 170,
      },
      '3': {
        name: 'Anton Piccio [AU]',
        result: 'T',
        table: 110,
      },
      '4': {
        name: 'Paul Coletta [AU]',
        result: 'W',
        table: 121,
      },
      '5': {
        name: 'Mathew masefield [AU]',
        result: 'W',
        table: 78,
      },
      '6': {
        name: 'DI ZHU [CN]',
        result: 'L',
        table: 54,
      },
      '7': {
        name: 'Chung-Yin Johnny Chan [AU]',
        result: 'W',
        table: 83,
      },
      '8': {
        name: 'Yongxiang Liu [AU]',
        result: 'T',
        table: 50,
      },
      '9': {
        name: 'Raymond Wong [AU]',
        result: 'W',
        table: 58,
      },
    },
  },
  {
    name: 'David Stevens [AU]',
    placing: 71,
    record: {
      wins: 5,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5648148148148148,
      oppopp: 0.5158394221886285,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Benjamin McMahon [AU]',
        result: 'W',
        table: 4,
      },
      '2': {
        name: 'Thomas Thoonen [AU]',
        result: 'L',
        table: 98,
      },
      '3': {
        name: 'Hayden Matthews [AU]',
        result: 'T',
        table: 139,
      },
      '4': {
        name: 'Aaron-Lee Cole [AU]',
        result: 'L',
        table: 134,
      },
      '5': {
        name: 'Su Fu [NZ]',
        result: 'W',
        table: 167,
      },
      '6': {
        name: 'Bayley Janssen [AU]',
        result: 'W',
        table: 140,
      },
      '7': {
        name: 'Scott Leung [AU]',
        result: 'W',
        table: 100,
      },
      '8': {
        name: 'Saxon Wright [AU]',
        result: 'T',
        table: 49,
      },
      '9': {
        name: 'Adam Crust [AU]',
        result: 'W',
        table: 63,
      },
    },
  },
  {
    name: 'Hakim Moussaoui [AU]',
    placing: 72,
    record: {
      wins: 5,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5557760141093475,
      oppopp: 0.576230762366675,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Alexander Cannavo [AU]',
        result: 'T',
        table: 194,
      },
      '2': {
        name: 'Nicholas Apostolou [AU]',
        result: 'W',
        table: 117,
      },
      '3': {
        name: 'Aura Ye [AU]',
        result: 'W',
        table: 50,
      },
      '4': {
        name: 'Mathew masefield [AU]',
        result: 'W',
        table: 42,
      },
      '5': {
        name: 'Hao Lu [AU]',
        result: 'T',
        table: 21,
      },
      '6': {
        name: 'Jack Leong [AU]',
        result: 'W',
        table: 30,
      },
      '7': {
        name: 'Louis Pozzacchio [AU]',
        result: 'W',
        table: 16,
      },
      '8': {
        name: 'Gabriel Smart [US]',
        result: 'L',
        table: 11,
      },
      '9': {
        name: 'Jettano Posani [AU]',
        result: 'L',
        table: 20,
      },
    },
  },
  {
    name: 'James Xu [AU]',
    placing: 73,
    record: {
      wins: 5,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5555555555555556,
      oppopp: 0.5278855575151872,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Nathan Belcher [AU]',
        result: 'W',
        table: 60,
      },
      '2': {
        name: 'Simon Williams [AU]',
        result: 'L',
        table: 106,
      },
      '3': {
        name: 'Stefan Cocks [AU]',
        result: 'W',
        table: 136,
      },
      '4': {
        name: 'Montana Drew [AU]',
        result: 'T',
        table: 79,
      },
      '5': {
        name: 'Tyler Adamson [AU]',
        result: 'T',
        table: 65,
      },
      '6': {
        name: 'Zhiyuan Liang [CN]',
        result: 'W',
        table: 104,
      },
      '7': {
        name: 'Tibor Baranyay [AU]',
        result: 'L',
        table: 58,
      },
      '8': {
        name: 'Michael Hammond [AU]',
        result: 'W',
        table: 95,
      },
      '9': {
        name: 'Yongxiang Liu [AU]',
        result: 'W',
        table: 66,
      },
    },
  },
  {
    name: 'Arnouluck Sirisay [AU]',
    placing: 74,
    record: {
      wins: 5,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.545083774250441,
      oppopp: 0.545097159234064,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Aaron van der Kolk [AU]',
        result: 'L',
        table: 224,
      },
      '2': {
        name: 'Yao Ly [AU]',
        result: 'W',
        table: 260,
      },
      '3': {
        name: 'Vie Seminiano [AU]',
        result: 'W',
        table: 156,
      },
      '4': {
        name: 'Jake Cruwys [AU]',
        result: 'T',
        table: 65,
      },
      '5': {
        name: 'Gareth Murphy [AU]',
        result: 'W',
        table: 68,
      },
      '6': {
        name: 'Sineth Akmeemana [AU]',
        result: 'W',
        table: 38,
      },
      '7': {
        name: 'Raymond Wong [AU]',
        result: 'T',
        table: 24,
      },
      '8': {
        name: 'Louis Chi [NZ]',
        result: 'L',
        table: 39,
      },
      '9': {
        name: 'Sebastian Rutter [NZ]',
        result: 'W',
        table: 60,
      },
    },
  },
  {
    name: 'Louis Chi [NZ]',
    placing: 75,
    record: {
      wins: 5,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5447530864197531,
      oppopp: 0.5419309107387811,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'James Futcher [AU]',
        result: 'W',
        table: 196,
      },
      '2': {
        name: 'ユキ OKA [JP]',
        result: 'L',
        table: 27,
      },
      '3': {
        name: 'Emma Baker [AU]',
        result: 'W',
        table: 166,
      },
      '4': {
        name: 'Calum Thatcher [AU]',
        result: 'W',
        table: 82,
      },
      '5': {
        name: 'CHEE WAI LIEW [AU]',
        result: 'T',
        table: 32,
      },
      '6': {
        name: 'Brendan Cliffe [AU]',
        result: 'T',
        table: 55,
      },
      '7': {
        name: 'Michael Hammond [AU]',
        result: 'W',
        table: 64,
      },
      '8': {
        name: 'Arnouluck Sirisay [AU]',
        result: 'W',
        table: 39,
      },
      '9': {
        name: 'Tibor Baranyay [AU]',
        result: 'L',
        table: 22,
      },
    },
  },
  {
    name: 'Alfie Delgado [MX]',
    placing: 76,
    record: {
      wins: 5,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5401234567901235,
      oppopp: 0.6220581030766216,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Firdaus Purba Bin Sairidi [AU]',
        result: 'W',
        table: 243,
      },
      '2': {
        name: '玄 王 [CN]',
        result: 'T',
        table: 90,
      },
      '3': {
        name: 'Sky Mathieson [AU]',
        result: 'W',
        table: 60,
      },
      '4': {
        name: 'Manuel Jorach [AT]',
        result: 'L',
        table: 24,
      },
      '5': {
        name: 'Yin Jiang [AU]',
        result: 'W',
        table: 76,
      },
      '6': {
        name: 'Corey Brown [AU]',
        result: 'W',
        table: 52,
      },
      '7': {
        name: 'James Faulkner [AU]',
        result: 'W',
        table: 26,
      },
      '8': {
        name: 'Blake Lobina [AU]',
        result: 'L',
        table: 16,
      },
      '9': {
        name: 'David Frans Daritan [AU]',
        result: 'T',
        table: 38,
      },
    },
  },
  {
    name: 'Saxon Wright [AU]',
    placing: 77,
    record: {
      wins: 5,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5393518518518519,
      oppopp: 0.5321780692729766,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Stefan Djordjevic [AU]',
        result: 'W',
        table: 128,
      },
      '2': {
        name: 'Callum Pinnegar [AU]',
        result: 'L',
        table: 75,
      },
      '3': {
        name: 'Paul Coletta [AU]',
        result: 'T',
        table: 134,
      },
      '4': {
        name: 'Ben Connor [AU]',
        result: 'W',
        table: 151,
      },
      '5': {
        name: 'David Frans Daritan [AU]',
        result: 'L',
        table: 66,
      },
      '6': {
        name: 'Jiahe Liang [AU]',
        result: 'W',
        table: 122,
      },
      '7': {
        name: 'Ferdi Mak [AU]',
        result: 'W',
        table: 91,
      },
      '8': {
        name: 'David Stevens [AU]',
        result: 'T',
        table: 49,
      },
      '9': {
        name: 'Harrison Pirotta [AU]',
        result: 'W',
        table: 57,
      },
    },
  },
  {
    name: 'DI ZHU [CN]',
    placing: 78,
    record: {
      wins: 5,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5362654320987654,
      oppopp: 0.5589524544385656,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Archie de Vries [AU]',
        result: 'L',
        table: 223,
      },
      '2': {
        name: 'declan bradley [AU]',
        result: 'W',
        table: 177,
      },
      '3': {
        name: 'Jesse Becker [AU]',
        result: 'T',
        table: 147,
      },
      '4': {
        name: 'Alistair Menzies [AU]',
        result: 'W',
        table: 124,
      },
      '5': {
        name: 'Aaron van der Kolk [AU]',
        result: 'W',
        table: 95,
      },
      '6': {
        name: 'Blake Davies [AU]',
        result: 'W',
        table: 54,
      },
      '7': {
        name: 'Manuel Jorach [AT]',
        result: 'T',
        table: 25,
      },
      '8': {
        name: 'Rory Sharpe [AU]',
        result: 'W',
        table: 37,
      },
      '9': {
        name: 'James Goreing [AU]',
        result: 'L',
        table: 23,
      },
    },
  },
  {
    name: 'Kye Edmondston [AU]',
    placing: 79,
    record: {
      wins: 5,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5339506172839507,
      oppopp: 0.5188688026650989,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'brian truong [AU]',
        result: 'W',
        table: 83,
      },
      '2': {
        name: 'Tibor Baranyay [AU]',
        result: 'T',
        table: 15,
      },
      '3': {
        name: 'Nathan Spry [AU]',
        result: 'L',
        table: 56,
      },
      '4': {
        name: 'Henry Brereton [AU]',
        result: 'T',
        table: 115,
      },
      '5': {
        name: 'Max McInnis [AU]',
        result: 'W',
        table: 140,
      },
      '6': {
        name: 'Samantha Turner [AU]',
        result: 'W',
        table: 100,
      },
      '7': {
        name: 'Hannah Paterson [AU]',
        result: 'W',
        table: 65,
      },
      '8': {
        name: 'Raymond Wong [AU]',
        result: 'W',
        table: 34,
      },
      '9': {
        name: 'Manuel Jorach [AT]',
        result: 'L',
        table: 24,
      },
    },
  },
  {
    name: 'Sam Hughes [AU]',
    placing: 80,
    record: {
      wins: 5,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5115740740740741,
      oppopp: 0.5237674529688419,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Celine Pearse [AU]',
        result: 'W',
        table: 94,
      },
      '2': {
        name: 'Tait Tran [AU]',
        result: 'L',
        table: 102,
      },
      '3': {
        name: 'Peter Rennie [AU]',
        result: 'W',
        table: 103,
      },
      '4': {
        name: 'Deacan Page [AU]',
        result: 'T',
        table: 86,
      },
      '5': {
        name: 'Anton Piccio [AU]',
        result: 'W',
        table: 93,
      },
      '6': {
        name: 'James Williams [AU]',
        result: 'L',
        table: 33,
      },
      '7': {
        name: 'Nigel Yam [AU]',
        result: 'W',
        table: 90,
      },
      '8': {
        name: 'Harrison Pirotta [AU]',
        result: 'T',
        table: 58,
      },
      '9': {
        name: 'Charles Li [AU]',
        result: 'W',
        table: 65,
      },
    },
  },
  {
    name: 'Stefan Cocks [AU]',
    placing: 81,
    record: {
      wins: 5,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.49475308641975313,
      oppopp: 0.513074355771115,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jonathan Tjahjono [AU]',
        result: 'W',
        table: 252,
      },
      '2': {
        name: 'Ashley Coulthard [AU]',
        result: 'L',
        table: 100,
      },
      '3': {
        name: 'James Xu [AU]',
        result: 'L',
        table: 136,
      },
      '4': {
        name: 'Katelin Altieri [AU]',
        result: 'W',
        table: 182,
      },
      '5': {
        name: 'Thomas Slater [AU]',
        result: 'T',
        table: 105,
      },
      '6': {
        name: 'Kadir Batuk [AU]',
        result: 'T',
        table: 109,
      },
      '7': {
        name: 'Ethan Stoeckert [AU]',
        result: 'W',
        table: 128,
      },
      '8': {
        name: 'Jorja Doenau [AU]',
        result: 'W',
        table: 91,
      },
      '9': {
        name: 'Lewis Stevens [AU]',
        result: 'W',
        table: 59,
      },
    },
  },
  {
    name: 'Henry Brand [AU]',
    placing: 82,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.652557319223986,
      oppopp: 0.5608003695305284,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Charles Li [AU]',
        result: 'W',
        table: 134,
      },
      '2': {
        name: 'Matthew Anderson [AU]',
        result: 'W',
        table: 107,
      },
      '3': {
        name: 'Robert Seymour [AU]',
        result: 'W',
        table: 29,
      },
      '4': {
        name: 'Benjamin Hall [AU]',
        result: 'W',
        table: 17,
      },
      '5': {
        name: 'Keito Arai [JP]',
        result: 'L',
        table: 8,
      },
      '6': {
        name: 'Haru Nishikawa [JP]',
        result: 'L',
        table: 20,
      },
      '7': {
        name: 'Courtney Fox [AU]',
        result: 'W',
        table: 45,
      },
      '8': {
        name: 'Kenny Potter [NZ]',
        result: 'L',
        table: 20,
      },
      '9': {
        name: 'troy fisher [AU]',
        result: 'T',
        table: 44,
      },
    },
  },
  {
    name: 'Manuel Cresdee [AU]',
    placing: 83,
    record: {
      wins: 4,
      losses: 1,
      ties: 4,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.6490299823633158,
      oppopp: 0.5662813890988494,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Calum McSpadden [AU]',
        result: 'W',
        table: 35,
      },
      '2': {
        name: 'Edward Mouanoutoua [AU]',
        result: 'W',
        table: 95,
      },
      '3': {
        name: 'Sylas Golding [AU]',
        result: 'W',
        table: 37,
      },
      '4': {
        name: 'Justin Teh [AU]',
        result: 'T',
        table: 8,
      },
      '5': {
        name: 'Reginald Ng [AU]',
        result: 'T',
        table: 20,
      },
      '6': {
        name: 'Jimmy Nguyen [AU]',
        result: 'T',
        table: 31,
      },
      '7': {
        name: 'Zherui Li [AU]',
        result: 'W',
        table: 47,
      },
      '8': {
        name: 'Max Prescott [AU]',
        result: 'T',
        table: 25,
      },
      '9': {
        name: 'Daniel Ross-Brown [AU]',
        result: 'L',
        table: 39,
      },
    },
  },
  {
    name: 'Jake Cruwys [AU]',
    placing: 84,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.6412037037037037,
      oppopp: 0.5498597638643934,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Andi Cheung [AU]',
        result: 'W',
        table: 63,
      },
      '2': {
        name: 'Brent Tonisson [AU]',
        result: 'L',
        table: 109,
      },
      '3': {
        name: 'Nigel Yam [AU]',
        result: 'W',
        table: 84,
      },
      '4': {
        name: 'Arnouluck Sirisay [AU]',
        result: 'T',
        table: 65,
      },
      '5': {
        name: 'Jettano Posani [AU]',
        result: 'L',
        table: 90,
      },
      '6': {
        name: 'Jake Lazzari [AU]',
        result: 'W',
        table: 117,
      },
      '7': {
        name: 'Aaron van der Kolk [AU]',
        result: 'W',
        table: 94,
      },
      '8': {
        name: 'Daniel Mielnik [AU]',
        result: 'W',
        table: 47,
      },
      '9': {
        name: 'Skye Godfrey [NZ]',
        result: 'L',
        table: 30,
      },
    },
  },
  {
    name: 'Callum Pinnegar [AU]',
    placing: 85,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.6146384479717812,
      oppopp: 0.5430146132527085,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Aditi Kutty [AU]',
        result: 'W',
        table: 153,
      },
      '2': {
        name: 'Saxon Wright [AU]',
        result: 'W',
        table: 75,
      },
      '3': {
        name: 'Jeremy Evans [AU]',
        result: 'L',
        table: 25,
      },
      '4': {
        name: 'Mia Fountain [AU]',
        result: 'W',
        table: 54,
      },
      '5': {
        name: 'Daniel Schwan [AU]',
        result: 'W',
        table: 38,
      },
      '6': {
        name: 'Shang Jun Chua [AU]',
        result: 'L',
        table: 25,
      },
      '7': {
        name: 'Roman Carfi [AU]',
        result: 'W',
        table: 49,
      },
      '8': {
        name: 'Daniel Ross-Brown [AU]',
        result: 'T',
        table: 26,
      },
      '9': {
        name: 'Christopher Cheung [AU]',
        result: 'L',
        table: 27,
      },
    },
  },
  {
    name: 'fayyadh salleh [SG]',
    placing: 86,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.6095679012345679,
      oppopp: 0.5495250080484868,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Aaron-Lee Cole [AU]',
        result: 'T',
        table: 178,
      },
      '2': {
        name: 'Matthew Caton [AU]',
        result: 'W',
        table: 137,
      },
      '3': {
        name: 'Alyssa Lock [AU]',
        result: 'L',
        table: 68,
      },
      '4': {
        name: 'Jackson Mcdonald [AU]',
        result: 'W',
        table: 148,
      },
      '5': {
        name: 'Charlie Queen [AU]',
        result: 'W',
        table: 70,
      },
      '6': {
        name: 'Christian Hasbani [AU]',
        result: 'L',
        table: 42,
      },
      '7': {
        name: 'Jee Ong [AU]',
        result: 'W',
        table: 95,
      },
      '8': {
        name: 'Chris Currenti [AU]',
        result: 'W',
        table: 63,
      },
      '9': {
        name: 'Christian Delloiaco [AU]',
        result: 'L',
        table: 32,
      },
    },
  },
  {
    name: 'Thomas Slater [AU]',
    placing: 87,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.6033950617283951,
      oppopp: 0.5367051244366059,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Sebastian Trisch [AU]',
        result: 'W',
        table: 157,
      },
      '2': {
        name: 'Michael Taylor [AU]',
        result: 'W',
        table: 94,
      },
      '3': {
        name: 'Harry Shallcrass [NZ]',
        result: 'L',
        table: 39,
      },
      '4': {
        name: 'CHEE WAI LIEW [AU]',
        result: 'L',
        table: 53,
      },
      '5': {
        name: 'Stefan Cocks [AU]',
        result: 'T',
        table: 105,
      },
      '6': {
        name: 'Jake Holmes [AU]',
        result: 'W',
        table: 142,
      },
      '7': {
        name: 'Ancel Franklin [AU]',
        result: 'W',
        table: 72,
      },
      '8': {
        name: 'Andy Truong [AU]',
        result: 'W',
        table: 42,
      },
      '9': {
        name: 'Aaron-Lee Cole [AU]',
        result: 'L',
        table: 34,
      },
    },
  },
  {
    name: 'Kazuo Nakamura [AU]',
    placing: 88,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.6023148148148149,
      oppopp: 0.5967294973544974,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Luca Serianni [AU]',
        result: 'W',
        table: 164,
      },
      '2': {
        name: 'Liam Flood [NZ]',
        result: 'W',
        table: 23,
      },
      '3': {
        name: 'Siu Chun Lee [AU]',
        result: 'T',
        table: 31,
      },
      '4': {
        name: 'Michael Wilson [AU]',
        result: 'W',
        table: 36,
      },
      '5': {
        name: 'ユキ OKA [JP]',
        result: 'W',
        table: 15,
      },
      '6': {
        name: '[Table 2]Nissa Kew [AU]',
        result: 'L',
        table: 12,
      },
      '7': {
        name: 'Joel Suryadi [AU]',
        result: 'L',
        table: 27,
      },
      '8': {
        name: 'Benjamin Kouzas [AU]',
        result: 'W',
        table: 53,
      },
      '9': {
        name: 'Edin Visca [AU]',
        result: 'L',
        table: 25,
      },
    },
  },
  {
    name: 'Joel Suryadi [AU]',
    placing: 89,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5925925925925927,
      oppopp: 0.5617161473642955,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Steven Hector [AU]',
        result: 'W',
        table: 139,
      },
      '2': {
        name: 'Keller Huang [AU]',
        result: 'W',
        table: 35,
      },
      '3': {
        name: 'Roman Addamo [AU]',
        result: 'W',
        table: 9,
      },
      '4': {
        name: 'James Goreing [AU]',
        result: 'W',
        table: 10,
      },
      '5': {
        name: 'Takuma Tominaga [JP]',
        result: 'L',
        table: 5,
      },
      '6': {
        name: 'Jeremy Evans [AU]',
        result: 'T',
        table: 18,
      },
      '7': {
        name: 'Kazuo Nakamura [AU]',
        result: 'W',
        table: 27,
      },
      '8': {
        name: 'Harry Shallcrass [NZ]',
        result: 'L',
        table: 13,
      },
      '9': {
        name: 'Natalie Millar [AU]',
        result: 'L',
        table: 37,
      },
    },
  },
  {
    name: 'Shane Quinn [AU]',
    placing: 90,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5848765432098766,
      oppopp: 0.547054122574956,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Calum Thatcher [AU]',
        result: 'W',
        table: 263,
      },
      '2': {
        name: 'Jason Slifka [AU]',
        result: 'W',
        table: 86,
      },
      '3': {
        name: 'Nick Bell [AU]',
        result: 'W',
        table: 42,
      },
      '4': {
        name: 'Keito Arai [JP]',
        result: 'L',
        table: 9,
      },
      '5': {
        name: 'Sineth Akmeemana [AU]',
        result: 'T',
        table: 45,
      },
      '6': {
        name: 'James Goreing [AU]',
        result: 'L',
        table: 49,
      },
      '7': {
        name: 'Keegan Burt [AU]',
        result: 'L',
        table: 79,
      },
      '8': {
        name: 'ユキ OKA [JP]',
        result: 'W',
        table: 110,
      },
      '9': {
        name: 'Fletcher Konynenburg [AU]',
        result: 'W',
        table: 84,
      },
    },
  },
  {
    name: 'Nick Bell [AU]',
    placing: 91,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5815696649029982,
      oppopp: 0.5473083060384647,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Lance Griggs [AU]',
        result: 'W',
        table: 112,
      },
      '2': {
        name: 'Jimmy Farrugia [AU]',
        result: 'W',
        table: 11,
      },
      '3': {
        name: 'Shane Quinn [AU]',
        result: 'L',
        table: 42,
      },
      '4': {
        name: 'Daniel Ross-Brown [AU]',
        result: 'W',
        table: 70,
      },
      '5': {
        name: 'Will Harris [AU]',
        result: 'L',
        table: 25,
      },
      '6': {
        name: 'Christopher Cheung [AU]',
        result: 'L',
        table: 60,
      },
      '7': {
        name: 'Matthew Anderson [AU]',
        result: 'W',
        table: 103,
      },
      '8': {
        name: 'Harry West [AU]',
        result: 'W',
        table: 75,
      },
      '9': {
        name: 'Courtney Fox [AU]',
        result: 'T',
        table: 51,
      },
    },
  },
  {
    name: 'Michael Wilson [AU]',
    placing: 92,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.580246913580247,
      oppopp: 0.5471200414322106,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Denham Smith [AU]',
        result: 'W',
        table: 189,
      },
      '2': {
        name: 'Tom Bourke [AU]',
        result: 'T',
        table: 4,
      },
      '3': {
        name: 'Noah Lin [CN]',
        result: 'W',
        table: 59,
      },
      '4': {
        name: 'Kazuo Nakamura [AU]',
        result: 'L',
        table: 36,
      },
      '5': {
        name: 'Vincent Ma [NZ]',
        result: 'W',
        table: 80,
      },
      '6': {
        name: 'Sky Mathieson [AU]',
        result: 'W',
        table: 47,
      },
      '7': {
        name: 'David Frans Daritan [AU]',
        result: 'L',
        table: 33,
      },
      '8': {
        name: 'Ash Nassiri [NZ]',
        result: 'L',
        table: 64,
      },
      '9': {
        name: 'Tristan Young [AU]',
        result: 'W',
        table: 94,
      },
    },
  },
  {
    name: 'Sineth Akmeemana [AU]',
    placing: 93,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5794753086419753,
      oppopp: 0.5715525793650794,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Bradley Cannan-cole [AU]',
        result: 'W',
        table: 218,
      },
      '2': {
        name: 'Justin Hoy [AU]',
        result: 'W',
        table: 48,
      },
      '3': {
        name: 'Stephen Iskandar [AU]',
        result: 'L',
        table: 26,
      },
      '4': {
        name: 'Rhys Theodoropoulos [AU]',
        result: 'W',
        table: 72,
      },
      '5': {
        name: 'Shane Quinn [AU]',
        result: 'T',
        table: 45,
      },
      '6': {
        name: 'Arnouluck Sirisay [AU]',
        result: 'L',
        table: 38,
      },
      '7': {
        name: 'ユキ OKA [JP]',
        result: 'W',
        table: 84,
      },
      '8': {
        name: 'Jeremy Evans [AU]',
        result: 'W',
        table: 44,
      },
      '9': {
        name: 'Lucas Hamilton-Foster [AU]',
        result: 'L',
        table: 40,
      },
    },
  },
  {
    name: 'Robert Seymour [AU]',
    placing: 94,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5787037037037037,
      oppopp: 0.551314484126984,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Morris Arnold [AU]',
        result: 'W',
        table: 181,
      },
      '2': {
        name: 'Raymond Chan [AU]',
        result: 'W',
        table: 68,
      },
      '3': {
        name: 'Henry Brand [AU]',
        result: 'L',
        table: 29,
      },
      '4': {
        name: 'TJ Dixon [AU]',
        result: 'W',
        table: 87,
      },
      '5': {
        name: 'Michael Taylor [AU]',
        result: 'W',
        table: 50,
      },
      '6': {
        name: 'Brent Tonisson [AU]',
        result: 'L',
        table: 15,
      },
      '7': {
        name: 'Matthew Chong [AU]',
        result: 'W',
        table: 50,
      },
      '8': {
        name: 'Stephen Todorovic [AU]',
        result: 'T',
        table: 23,
      },
      '9': {
        name: 'Aiden Harrison [AU]',
        result: 'L',
        table: 33,
      },
    },
  },
  {
    name: 'Jeremy Evans [AU]',
    placing: 95,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.574074074074074,
      oppopp: 0.5653782088967274,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Sammy Madafiglio [AU]',
        result: 'W',
        table: 23,
      },
      '2': {
        name: 'Matthew Anderson [AU]',
        result: 'W',
        table: 61,
      },
      '3': {
        name: 'Callum Pinnegar [AU]',
        result: 'W',
        table: 25,
      },
      '4': {
        name: 'Brent Tonisson [AU]',
        result: 'L',
        table: 16,
      },
      '5': {
        name: 'Beau McElroy [AU]',
        result: 'W',
        table: 28,
      },
      '6': {
        name: 'Joel Suryadi [AU]',
        result: 'T',
        table: 18,
      },
      '7': {
        name: 'Scott Langford [AU]',
        result: 'L',
        table: 35,
      },
      '8': {
        name: 'Sineth Akmeemana [AU]',
        result: 'L',
        table: 44,
      },
      '9': {
        name: 'Benjamin Kouzas [AU]',
        result: 'W',
        table: 72,
      },
    },
  },
  {
    name: 'Ash Nassiri [NZ]',
    placing: 96,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5665784832451499,
      oppopp: 0.5502704991461607,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Anthony Smith [AU]',
        result: 'T',
        table: 228,
      },
      '2': {
        name: 'Dillon Zhou-Sarno [AU]',
        result: 'W',
        table: 141,
      },
      '3': {
        name: 'Huy Doan [AU]',
        result: 'W',
        table: 70,
      },
      '4': {
        name: 'Cameron Shenoy [US]',
        result: 'L',
        table: 25,
      },
      '5': {
        name: 'Deacan Page [AU]',
        result: 'W',
        table: 71,
      },
      '6': {
        name: 'Aiden Harrison [AU]',
        result: 'L',
        table: 40,
      },
      '7': {
        name: 'Jason Zhe [AU]',
        result: 'W',
        table: 76,
      },
      '8': {
        name: 'Michael Wilson [AU]',
        result: 'W',
        table: 64,
      },
      '9': {
        name: 'Christian Hasbani [AU]',
        result: 'L',
        table: 28,
      },
    },
  },
  {
    name: 'Cameron Shenoy [US]',
    placing: 97,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5660493827160494,
      oppopp: 0.5549622770919068,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Tian Li [NZ]',
        result: 'W',
        table: 220,
      },
      '2': {
        name: 'Raymond Wong [AU]',
        result: 'T',
        table: 12,
      },
      '3': {
        name: 'Alistair Menzies [AU]',
        result: 'W',
        table: 48,
      },
      '4': {
        name: 'Ash Nassiri [NZ]',
        result: 'W',
        table: 25,
      },
      '5': {
        name: 'Nathan Spry [AU]',
        result: 'W',
        table: 22,
      },
      '6': {
        name: 'Alyssa Lock [AU]',
        result: 'L',
        table: 10,
      },
      '7': {
        name: 'Christian Hasbani [AU]',
        result: 'L',
        table: 21,
      },
      '8': {
        name: 'YiFei Ruan [AU]',
        result: 'L',
        table: 59,
      },
      '9': {
        name: 'Timothy Uyeda [AU]',
        result: 'W',
        table: 74,
      },
    },
  },
  {
    name: 'Darcy Ryan [AU]',
    placing: 98,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5555555555555556,
      oppopp: 0.5606677444640407,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'thomas lackington [AU]',
        result: 'W',
        table: 113,
      },
      '2': {
        name: 'Jack Eeles [AU]',
        result: 'W',
        table: 6,
      },
      '3': {
        name: 'Benjamin Kouzas [AU]',
        result: 'W',
        table: 38,
      },
      '4': {
        name: 'Hao Lu [AU]',
        result: 'L',
        table: 21,
      },
      '5': {
        name: 'Corey O’Leary [AU]',
        result: 'W',
        table: 44,
      },
      '6': {
        name: 'Christian Viti [AU]',
        result: 'L',
        table: 14,
      },
      '7': {
        name: 'Stephen Todorovic [AU]',
        result: 'L',
        table: 36,
      },
      '8': {
        name: 'Sam Clayfield [AU]',
        result: 'T',
        table: 84,
      },
      '9': {
        name: 'Andy Truong [AU]',
        result: 'W',
        table: 76,
      },
    },
  },
  {
    name: 'Vincent Sutinah [AU]',
    placing: 99,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.550925925925926,
      oppopp: 0.5357271457965902,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Scott Minnekeer [AU]',
        result: 'L',
        table: 130,
      },
      '2': {
        name: 'Franklyn Hudson [AU]',
        result: 'W',
        table: 181,
      },
      '3': {
        name: 'Nam Ho [AU]',
        result: 'W',
        table: 117,
      },
      '4': {
        name: 'Rogan Gilbertson [AU]',
        result: 'W',
        table: 80,
      },
      '5': {
        name: 'Thomas Thoonen [AU]',
        result: 'T',
        table: 33,
      },
      '6': {
        name: 'Aaron-Lee Cole [AU]',
        result: 'L',
        table: 57,
      },
      '7': {
        name: 'Deacan Page [AU]',
        result: 'W',
        table: 67,
      },
      '8': {
        name: '玄 王 [CN]',
        result: 'W',
        table: 62,
      },
      '9': {
        name: 'YiFei Ruan [AU]',
        result: 'L',
        table: 35,
      },
    },
  },
  {
    name: 'Stephen Todorovic [AU]',
    placing: 100,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5462962962962963,
      oppopp: 0.564636488340192,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Tessa Isberg [FI]',
        result: 'L',
        table: 138,
      },
      '2': {
        name: 'Celine Pearse [AU]',
        result: 'W',
        table: 191,
      },
      '3': {
        name: 'Brittany Mitchell [AU]',
        result: 'W',
        table: 132,
      },
      '4': {
        name: 'Guysen Lang [NZ]',
        result: 'W',
        table: 59,
      },
      '5': {
        name: 'Stephen Iskandar [AU]',
        result: 'L',
        table: 31,
      },
      '6': {
        name: 'Nathan Woodcock [AU]',
        result: 'W',
        table: 63,
      },
      '7': {
        name: 'Darcy Ryan [AU]',
        result: 'W',
        table: 36,
      },
      '8': {
        name: 'Robert Seymour [AU]',
        result: 'T',
        table: 23,
      },
      '9': {
        name: 'Max Prescott [AU]',
        result: 'L',
        table: 26,
      },
    },
  },
  {
    name: 'Vincent Ma [NZ]',
    placing: 101,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5432098765432098,
      oppopp: 0.5126543209876543,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Connor Jackson [AU]',
        result: 'T',
        table: 239,
      },
      '2': {
        name: 'Dante Sun [AU]',
        result: 'L',
        table: 131,
      },
      '3': {
        name: 'Morgan Squire [AU]',
        result: 'W',
        table: 206,
      },
      '4': {
        name: 'Scott Minnekeer [AU]',
        result: 'W',
        table: 144,
      },
      '5': {
        name: 'Michael Wilson [AU]',
        result: 'L',
        table: 80,
      },
      '6': {
        name: 'Montana Drew [AU]',
        result: 'W',
        table: 121,
      },
      '7': {
        name: 'Sylas Golding [AU]',
        result: 'W',
        table: 97,
      },
      '8': {
        name: 'charles limbrick [AU]',
        result: 'W',
        table: 55,
      },
      '9': {
        name: 'Jake Dunstan [AU]',
        result: 'L',
        table: 31,
      },
    },
  },
  {
    name: 'Courtney Fox [AU]',
    placing: 102,
    record: {
      wins: 4,
      losses: 1,
      ties: 4,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.541358024691358,
      oppopp: 0.5681477807172253,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Alexander Bray [AU]',
        result: 'W',
        table: 41,
      },
      '2': {
        name: 'Jake Dunstan [AU]',
        result: 'T',
        table: 44,
      },
      '3': {
        name: 'Samuel Shepherd [NZ]',
        result: 'T',
        table: 80,
      },
      '4': {
        name: 'Jeb Collins [AU]',
        result: 'W',
        table: 107,
      },
      '5': {
        name: 'Sam Connor [AU]',
        result: 'T',
        table: 56,
      },
      '6': {
        name: 'Rhys Theodoropoulos [AU]',
        result: 'W',
        table: 89,
      },
      '7': {
        name: 'Henry Brand [AU]',
        result: 'L',
        table: 45,
      },
      '8': {
        name: 'Matthew Chong [AU]',
        result: 'W',
        table: 76,
      },
      '9': {
        name: 'Nick Bell [AU]',
        result: 'T',
        table: 51,
      },
    },
  },
  {
    name: 'Nick Alvarez [US]',
    placing: 103,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5401234567901234,
      oppopp: 0.5356481481481481,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Ruby Culley [AU]',
        result: 'W',
        table: 25,
      },
      '2': {
        name: 'Kenneth Peake [AU]',
        result: 'W',
        table: 81,
      },
      '3': {
        name: 'Peter Fay [AU]',
        result: 'W',
        table: 45,
      },
      '4': {
        name: 'James Faulkner [AU]',
        result: 'T',
        table: 14,
      },
      '5': {
        name: 'Jorge Soria [AU]',
        result: 'L',
        table: 13,
      },
      '6': {
        name: 'Harry Shallcrass [NZ]',
        result: 'L',
        table: 41,
      },
      '7': {
        name: 'Nathan Spry [AU]',
        result: 'W',
        table: 81,
      },
      '8': {
        name: 'Corey Munro [AU]',
        result: 'W',
        table: 52,
      },
      '9': {
        name: 'Noah Lin [CN]',
        result: 'L',
        table: 42,
      },
    },
  },
  {
    name: 'Johnathan Heng [AU]',
    placing: 104,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5395061728395062,
      oppopp: 0.5239050558495003,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Stephen Iskandar [AU]',
        result: 'L',
        table: 238,
      },
      '2': {
        name: 'Max McInnis [AU]',
        result: 'W',
        table: 185,
      },
      '3': {
        name: 'Jackson Doyle [AU]',
        result: 'T',
        table: 164,
      },
      '4': {
        name: 'Corey Matthews [AU]',
        result: 'W',
        table: 118,
      },
      '5': {
        name: 'Noah Lin [CN]',
        result: 'L',
        table: 94,
      },
      '6': {
        name: 'Justin Hoy [AU]',
        result: 'W',
        table: 123,
      },
      '7': {
        name: 'James Volis [AU]',
        result: 'W',
        table: 86,
      },
      '8': {
        name: 'Ben Anderson [AU]',
        result: 'L',
        table: 60,
      },
      '9': {
        name: 'Charlie Queen [AU]',
        result: 'W',
        table: 91,
      },
    },
  },
  {
    name: 'Ayane Matsumoto [AU]',
    placing: 105,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5385802469135803,
      oppopp: 0.5478150107779737,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Henry Brereton [AU]',
        result: 'W',
        table: 150,
      },
      '2': {
        name: 'Chee How Liew [AU]',
        result: 'W',
        table: 104,
      },
      '3': {
        name: 'Thomas Thoonen [AU]',
        result: 'L',
        table: 6,
      },
      '4': {
        name: 'Wern Wong [NZ]',
        result: 'W',
        table: 47,
      },
      '5': {
        name: 'Christian Viti [AU]',
        result: 'L',
        table: 51,
      },
      '6': {
        name: 'Ben Anderson [AU]',
        result: 'L',
        table: 85,
      },
      '7': {
        name: 'Kevin Min [AU]',
        result: 'T',
        table: 114,
      },
      '8': {
        name: 'Sky Mathieson [AU]',
        result: 'W',
        table: 124,
      },
      '9': {
        name: 'Matthew Anderson [AU]',
        result: 'W',
        table: 82,
      },
    },
  },
  {
    name: 'Xaria-Sofia Sachse [AU]',
    placing: 106,
    record: {
      wins: 4,
      losses: 1,
      ties: 4,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5357142857142857,
      oppopp: 0.5460600907029478,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jorge Soria [AU]',
        result: 'T',
        table: 186,
      },
      '2': {
        name: 'Julian Luvara [AU]',
        result: 'T',
        table: 118,
      },
      '3': {
        name: 'Brendon Leehane [AU]',
        result: 'L',
        table: 178,
      },
      '4': {
        name: 'Connor Lee Dow [AU]',
        result: 'W',
        table: 218,
      },
      '5': {
        name: 'Anthony Smith [AU]',
        result: 'T',
        table: 155,
      },
      '6': {
        name: 'Fangrao Feng [AU]',
        result: 'W',
        table: 157,
      },
      '7': {
        name: 'Lewis Gall [NZ]',
        result: 'W',
        table: 109,
      },
      '8': {
        name: 'Ehren Roebuck [AU]',
        result: 'T',
        table: 73,
      },
      '9': {
        name: 'Luke Schmitt [AU]',
        result: 'W',
        table: 79,
      },
    },
  },
  {
    name: 'Keegan Burt [AU]',
    placing: 107,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5277777777777778,
      oppopp: 0.5322201926037905,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Calvin Prosser [AU]',
        result: 'W',
        table: 51,
      },
      '2': {
        name: 'Darrin Sin [AU]',
        result: 'L',
        table: 9,
      },
      '3': {
        name: 'Oliver Karmel-Shann [CA]',
        result: 'T',
        table: 120,
      },
      '4': {
        name: 'Markus Janssen [AU]',
        result: 'W',
        table: 154,
      },
      '5': {
        name: 'Michael Hammond [AU]',
        result: 'L',
        table: 72,
      },
      '6': {
        name: 'Ben Connor [AU]',
        result: 'W',
        table: 137,
      },
      '7': {
        name: 'Shane Quinn [AU]',
        result: 'W',
        table: 79,
      },
      '8': {
        name: 'KODY TRAN [AU]',
        result: 'W',
        table: 48,
      },
      '9': {
        name: 'Cassie Joison [AU]',
        result: 'L',
        table: 41,
      },
    },
  },
  {
    name: 'Ben Anderson [AU]',
    placing: 108,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5259259259259259,
      oppopp: 0.5499257789535568,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Harrison Pirotta [AU]',
        result: 'L',
        table: 156,
      },
      '2': {
        name: 'Manuel Jorach [AT]',
        result: 'L',
        table: 160,
      },
      '3': {
        name: 'Kosta Spanoudakis [AU]',
        result: 'W',
        table: 235,
      },
      '4': {
        name: 'Simon Higgins [AU]',
        result: 'W',
        table: 172,
      },
      '5': {
        name: 'Ciaran Bradley [NZ]',
        result: 'W',
        table: 107,
      },
      '6': {
        name: 'Ayane Matsumoto [AU]',
        result: 'W',
        table: 85,
      },
      '7': {
        name: 'Corey Munro [AU]',
        result: 'T',
        table: 55,
      },
      '8': {
        name: 'Johnathan Heng [AU]',
        result: 'W',
        table: 60,
      },
      '9': {
        name: 'Nigel Tan [NZ]',
        result: 'L',
        table: 29,
      },
    },
  },
  {
    name: 'Robin Sangwan [AU]',
    placing: 109,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.525462962962963,
      oppopp: 0.5411629801097394,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: '[Table 2]Nissa Kew [AU]',
        result: 'L',
        table: 28,
      },
      '2': {
        name: 'Michael Hicks [AU]',
        result: 'L',
        table: 230,
      },
      '3': {
        name: 'Tim Haffmanns [DE]',
        result: 'W',
        table: 249,
      },
      '4': {
        name: 'Yasuyuki Handa [AU]',
        result: 'W',
        table: 176,
      },
      '5': {
        name: 'Joshua Courtney [AU]',
        result: 'L',
        table: 97,
      },
      '6': {
        name: 'Alvin Hall [AU]',
        result: 'W',
        table: 171,
      },
      '7': {
        name: 'David Edebohls [AU]',
        result: 'T',
        table: 102,
      },
      '8': {
        name: 'Fabrice Rivalland [AU]',
        result: 'W',
        table: 113,
      },
      '9': {
        name: 'KODY TRAN [AU]',
        result: 'W',
        table: 85,
      },
    },
  },
  {
    name: 'Mitch Knuckey [AU]',
    placing: 110,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5147707231040564,
      oppopp: 0.5353875346434871,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Alex Wu [AU]',
        result: 'W',
        table: 214,
      },
      '2': {
        name: 'James Boynton [AU]',
        result: 'T',
        table: 65,
      },
      '3': {
        name: 'Josh Ng [AU]',
        result: 'W',
        table: 55,
      },
      '4': {
        name: 'Corey Brown [AU]',
        result: 'L',
        table: 33,
      },
      '5': {
        name: 'Hoong Yoong Ngiam [AU]',
        result: 'W',
        table: 96,
      },
      '6': {
        name: 'David Frans Daritan [AU]',
        result: 'L',
        table: 34,
      },
      '7': {
        name: 'Mathew masefield [AU]',
        result: 'W',
        table: 82,
      },
      '8': {
        name: 'Natalie Millar [AU]',
        result: 'L',
        table: 56,
      },
      '9': {
        name: 'James Faulkner [AU]',
        result: 'W',
        table: 73,
      },
    },
  },
  {
    name: 'Jacob McSpadden [AU]',
    placing: 111,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.507716049382716,
      oppopp: 0.5492357436801881,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Kylara Paulo [AU]',
        result: 'W',
        table: 191,
      },
      '2': {
        name: 'Corey O’Leary [AU]',
        result: 'L',
        table: 70,
      },
      '3': {
        name: 'Joshua Crisp [AU]',
        result: 'T',
        table: 146,
      },
      '4': {
        name: 'Jake Thomas [AU]',
        result: 'W',
        table: 130,
      },
      '5': {
        name: 'Chung-Yin Johnny Chan [AU]',
        result: 'W',
        table: 63,
      },
      '6': {
        name: 'asger balle [AU]',
        result: 'W',
        table: 48,
      },
      '7': {
        name: 'James Goreing [AU]',
        result: 'L',
        table: 28,
      },
      '8': {
        name: 'Tristan Young [AU]',
        result: 'W',
        table: 43,
      },
      '9': {
        name: 'Anton Piccio [AU]',
        result: 'L',
        table: 36,
      },
    },
  },
  {
    name: 'charles limbrick [AU]',
    placing: 112,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.4992283950617284,
      oppopp: 0.5671189128943759,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'George Kourouklis [AU]',
        result: 'W',
        table: 101,
      },
      '2': {
        name: 'Alistair Menzies [AU]',
        result: 'T',
        table: 49,
      },
      '3': {
        name: 'James Boynton [AU]',
        result: 'W',
        table: 72,
      },
      '4': {
        name: 'Nigel Tan [NZ]',
        result: 'W',
        table: 35,
      },
      '5': {
        name: 'Siu Chun Lee [AU]',
        result: 'L',
        table: 11,
      },
      '6': {
        name: 'Tristan Young [AU]',
        result: 'L',
        table: 46,
      },
      '7': {
        name: 'Tait Tran [AU]',
        result: 'W',
        table: 87,
      },
      '8': {
        name: 'Vincent Ma [NZ]',
        result: 'L',
        table: 55,
      },
      '9': {
        name: 'Deacan Page [AU]',
        result: 'W',
        table: 87,
      },
    },
  },
  {
    name: 'Chris Currenti [AU]',
    placing: 113,
    record: {
      wins: 4,
      losses: 1,
      ties: 4,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.4950396825396825,
      oppopp: 0.5431162691414014,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Michael Hammond [AU]',
        result: 'T',
        table: 257,
      },
      '2': {
        name: 'Connor Jackson [AU]',
        result: 'W',
        table: 127,
      },
      '3': {
        name: 'Ehren Roebuck [AU]',
        result: 'T',
        table: 71,
      },
      '4': {
        name: 'Sophia Crunkhorn [AU]',
        result: 'W',
        table: 99,
      },
      '5': {
        name: 'Roman Carfi [AU]',
        result: 'T',
        table: 57,
      },
      '6': {
        name: 'Rogan Gilbertson [AU]',
        result: 'T',
        table: 83,
      },
      '7': {
        name: 'Connor Tobin-Underwood [AU]',
        result: 'W',
        table: 80,
      },
      '8': {
        name: 'fayyadh salleh [SG]',
        result: 'L',
        table: 63,
      },
      '9': {
        name: 'Corey Brown [AU]',
        result: 'W',
        table: 89,
      },
    },
  },
  {
    name: 'Satoya Takagi [JP]',
    placing: 114,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.4938271604938272,
      oppopp: 0.4996840094062316,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Harry Driscoll [AU]',
        result: 'W',
        table: 92,
      },
      '2': {
        name: 'Kelvin Duong [AU]',
        result: 'W',
        table: 26,
      },
      '3': {
        name: 'Corey O’Leary [AU]',
        result: 'L',
        table: 4,
      },
      '4': {
        name: 'Cody Matthewe [AU]',
        result: 'L',
        table: 68,
      },
      '5': {
        name: 'Alan Quach [NZ]',
        result: 'T',
        table: 137,
      },
      '6': {
        name: 'James Kostoulias [AU]',
        result: 'W',
        table: 108,
      },
      '7': {
        name: 'Daniel Mielnik [AU]',
        result: 'L',
        table: 92,
      },
      '8': {
        name: 'Michael Taylor [AU]',
        result: 'W',
        table: 100,
      },
      '9': {
        name: 'Alicia Keizer [AU]',
        result: 'W',
        table: 71,
      },
    },
  },
  {
    name: 'Josh Geltch [AU]',
    placing: 115,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.4933862433862433,
      oppopp: 0.5275139273816521,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Victor Su [AU]',
        result: 'L',
        table: 52,
      },
      '2': {
        name: 'Lance Griggs [AU]',
        result: 'W',
        table: 209,
      },
      '3': {
        name: 'Winston Chui [AU]',
        result: 'W',
        table: 131,
      },
      '4': {
        name: 'Calvin Prosser [AU]',
        result: 'W',
        table: 83,
      },
      '5': {
        name: 'Gakuto Shiina [JP]',
        result: 'L',
        table: 48,
      },
      '6': {
        name: 'Daniel Schwan [AU]',
        result: 'W',
        table: 82,
      },
      '7': {
        name: 'Jimmy Nguyen [AU]',
        result: 'L',
        table: 52,
      },
      '8': {
        name: 'Matthew Anderson [AU]',
        result: 'T',
        table: 79,
      },
      '9': {
        name: 'thomas lackington [AU]',
        result: 'W',
        table: 86,
      },
    },
  },
  {
    name: 'Vie Seminiano [AU]',
    placing: 116,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.49074074074074076,
      oppopp: 0.528488144228885,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Christian Delloiaco [AU]',
        result: 'L',
        table: 198,
      },
      '2': {
        name: 'George Kourouklis [AU]',
        result: 'W',
        table: 227,
      },
      '3': {
        name: 'Arnouluck Sirisay [AU]',
        result: 'L',
        table: 156,
      },
      '4': {
        name: 'Kadir Batuk [AU]',
        result: 'T',
        table: 178,
      },
      '5': {
        name: 'Archie de Vries [AU]',
        result: 'L',
        table: 170,
      },
      '6': {
        name: 'Joshua Martin [AU]',
        result: 'W',
        table: 216,
      },
      '7': {
        name: 'Morgan Squire [AU]',
        result: 'W',
        table: 155,
      },
      '8': {
        name: 'Qihan Zhang [AU]',
        result: 'W',
        table: 114,
      },
      '9': {
        name: 'Tan Loc Thuan Nguyen [AU]',
        result: 'W',
        table: 80,
      },
    },
  },
  {
    name: 'troy fisher [AU]',
    placing: 117,
    record: {
      wins: 4,
      losses: 1,
      ties: 4,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.4737654320987655,
      oppopp: 0.5083888416477702,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Aaron Kleinhenz [US]',
        result: 'L',
        table: 100,
      },
      '2': {
        name: 'Jackson Mcdonald [AU]',
        result: 'T',
        table: 207,
      },
      '3': {
        name: 'Scott Leung [AU]',
        result: 'T',
        table: 185,
      },
      '4': {
        name: 'Alexander Cannavo [AU]',
        result: 'W',
        table: 214,
      },
      '5': {
        name: 'Samuel Shepherd [NZ]',
        result: 'T',
        table: 150,
      },
      '6': {
        name: 'Jason Slifka [AU]',
        result: 'W',
        table: 175,
      },
      '7': {
        name: 'Ryan Burt [AU]',
        result: 'W',
        table: 101,
      },
      '8': {
        name: 'Eric Sanson [NZ]',
        result: 'W',
        table: 78,
      },
      '9': {
        name: 'Henry Brand [AU]',
        result: 'T',
        table: 44,
      },
    },
  },
  {
    name: 'Nigel Yam [AU]',
    placing: 118,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.4660493827160494,
      oppopp: 0.5459533607681756,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Joshua Crisp [AU]',
        result: 'W',
        table: 170,
      },
      '2': {
        name: 'Ben Connor [AU]',
        result: 'T',
        table: 22,
      },
      '3': {
        name: 'Jake Cruwys [AU]',
        result: 'L',
        table: 84,
      },
      '4': {
        name: 'Paige Chamberlain [AU]',
        result: 'W',
        table: 125,
      },
      '5': {
        name: 'Justin Cutajar [AU]',
        result: 'W',
        table: 92,
      },
      '6': {
        name: 'Benjamin Kouzas [AU]',
        result: 'L',
        table: 53,
      },
      '7': {
        name: 'Sam Hughes [AU]',
        result: 'L',
        table: 90,
      },
      '8': {
        name: 'asger balle [AU]',
        result: 'W',
        table: 105,
      },
      '9': {
        name: 'Chung-Yin Johnny Chan [AU]',
        result: 'W',
        table: 88,
      },
    },
  },
  {
    name: 'Callum Walker [AU]',
    placing: 119,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.46219135802469136,
      oppopp: 0.5149701418633297,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Connor Lee Dow [AU]',
        result: 'W',
        table: 9,
      },
      '2': {
        name: 'Mathew masefield [AU]',
        result: 'L',
        table: 59,
      },
      '3': {
        name: 'Calum Thatcher [AU]',
        result: 'L',
        table: 148,
      },
      '4': {
        name: 'Ellie Crouch [AU]',
        result: 'W',
        table: 193,
      },
      '5': {
        name: 'Julian Luvara [AU]',
        result: 'T',
        table: 129,
      },
      '6': {
        name: 'Charlie Queen [AU]',
        result: 'W',
        table: 112,
      },
      '7': {
        name: 'Michael Taylor [AU]',
        result: 'W',
        table: 71,
      },
      '8': {
        name: 'Anton Piccio [AU]',
        result: 'L',
        table: 65,
      },
      '9': {
        name: 'Daniel Mielnik [AU]',
        result: 'W',
        table: 78,
      },
    },
  },
  {
    name: 'Sameer Sangwan [AU]',
    placing: 120,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.4592151675485009,
      oppopp: 0.5157932658660171,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Simon Williams [AU]',
        result: 'L',
        table: 233,
      },
      '2': {
        name: 'glenn hope [AU]',
        result: 'W',
        table: 228,
      },
      '3': {
        name: 'Kelvin Nguyen [AU]',
        result: 'L',
        table: 149,
      },
      '4': {
        name: 'Sable Wang-Wills [AU]',
        result: 'W',
        table: 158,
      },
      '5': {
        name: 'Yao Ly [AU]',
        result: 'W',
        table: 125,
      },
      '6': {
        name: 'Dylan Graefe [AU]',
        result: 'L',
        table: 71,
      },
      '7': {
        name: 'Hugh Batten [NZ]',
        result: 'W',
        table: 110,
      },
      '8': {
        name: 'Max Kennedy [AU]',
        result: 'T',
        table: 67,
      },
      '9': {
        name: 'Zachary Vella [AU]',
        result: 'W',
        table: 77,
      },
    },
  },
  {
    name: 'Kevin Min [AU]',
    placing: 121,
    record: {
      wins: 4,
      losses: 1,
      ties: 4,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.4408289241622575,
      oppopp: 0.5054497704431568,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Sandra Flood [NZ]',
        result: 'W',
        table: 11,
      },
      '2': {
        name: 'Michael Gleeson [AU]',
        result: 'L',
        table: 105,
      },
      '3': {
        name: 'Peter Lo [AU]',
        result: 'T',
        table: 144,
      },
      '4': {
        name: 'Joshua Sparks [AU]',
        result: 'W',
        table: 132,
      },
      '5': {
        name: 'Jackson Doyle [AU]',
        result: 'T',
        table: 82,
      },
      '6': {
        name: 'Stuart Flynn [AU]',
        result: 'T',
        table: 91,
      },
      '7': {
        name: 'Ayane Matsumoto [AU]',
        result: 'T',
        table: 114,
      },
      '8': {
        name: 'Kayla Stockwell [AU]',
        result: 'W',
        table: 107,
      },
      '9': {
        name: 'John Morris [AU]',
        result: 'W',
        table: 70,
      },
    },
  },
  {
    name: 'Jay Tyrrell [AU]',
    placing: 122,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.415895061728395,
      oppopp: 0.5236798294420649,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Keller Huang [AU]',
        result: 'L',
        table: 241,
      },
      '2': {
        name: 'Yin Jiang [AU]',
        result: 'L',
        table: 235,
      },
      '3': {
        name: 'Darren Caboche [AU]',
        result: 'W',
        table: 231,
      },
      '4': {
        name: 'Aaron Kleinhenz [US]',
        result: 'W',
        table: 185,
      },
      '5': {
        name: 'Mia Fountain [AU]',
        result: 'L',
        table: 124,
      },
      '6': {
        name: 'Jack Burmeister [AU]',
        result: 'W',
        table: 155,
      },
      '7': {
        name: 'Kurt Spiteri [AU]',
        result: 'W',
        table: 117,
      },
      '8': {
        name: 'Tan Loc Thuan Nguyen [AU]',
        result: 'T',
        table: 81,
      },
      '9': {
        name: 'Tait Tran [AU]',
        result: 'W',
        table: 81,
      },
    },
  },
  {
    name: 'TE-AWHI TE ANGINA [AU]',
    placing: 123,
    record: {
      wins: 5,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.4112654320987655,
      oppopp: 0.5153356481481481,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Chee How Liew [AU]',
        result: 'L',
        table: 184,
      },
      '2': {
        name: 'Sami MacKenzie [AU]',
        result: 'T',
        table: 217,
      },
      '3': {
        name: 'Benjamin Woodward [AU]',
        result: 'L',
        table: 222,
      },
      '4': {
        name: 'Stuart McKinnis [AU]',
        result: 'W',
        table: 227,
      },
      '5': {
        name: 'Daniel Pollard [AU]',
        result: 'W',
        table: 200,
      },
      '6': {
        name: 'Nicholas Choong [NZ]',
        result: 'W',
        table: 113,
      },
      '7': {
        name: 'Hayden Matthews [AU]',
        result: 'W',
        table: 99,
      },
      '8': {
        name: 'Skye Godfrey [NZ]',
        result: 'L',
        table: 46,
      },
      '9': {
        name: 'Jess Owers [AU]',
        result: 'W',
        table: 93,
      },
    },
  },
  {
    name: 'Corey O’Leary [AU]',
    placing: 124,
    record: {
      wins: 5,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.6198192239858907,
      oppopp: 0.5629951569105008,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'TJ Dixon [AU]',
        result: 'W',
        table: 222,
      },
      '2': {
        name: 'Jacob McSpadden [AU]',
        result: 'W',
        table: 70,
      },
      '3': {
        name: 'Satoya Takagi [JP]',
        result: 'W',
        table: 4,
      },
      '4': {
        name: 'Gabriel Smart [US]',
        result: 'L',
        table: 13,
      },
      '5': {
        name: 'Darcy Ryan [AU]',
        result: 'L',
        table: 44,
      },
      '6': {
        name: 'Calvin Prosser [AU]',
        result: 'W',
        table: 87,
      },
      '7': {
        name: 'Ashton Grant [AU]',
        result: 'W',
        table: 53,
      },
      '8': {
        name: 'Thomas McCawley [AU]',
        result: 'L',
        table: 30,
      },
      '9': {
        name: 'Benjamin Hall [AU]',
        result: 'L',
        table: 47,
      },
    },
  },
  {
    name: 'Hao Lu [AU]',
    placing: 125,
    record: {
      wins: 4,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.6000000000000001,
      oppopp: 0.5694639707734946,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jee Ong [AU]',
        result: 'W',
        table: 18,
      },
      '2': {
        name: 'Alex Crockford [AU]',
        result: 'W',
        table: 92,
      },
      '3': {
        name: 'Mathew masefield [AU]',
        result: 'T',
        table: 34,
      },
      '4': {
        name: 'Darcy Ryan [AU]',
        result: 'W',
        table: 21,
      },
      '5': {
        name: 'Hakim Moussaoui [AU]',
        result: 'T',
        table: 21,
      },
      '6': {
        name: 'Will Harris [AU]',
        result: 'L',
        table: 28,
      },
      '7': {
        name: 'Joshua Courtney [AU]',
        result: 'W',
        table: 63,
      },
      '8': {
        name: 'Edin Visca [AU]',
        result: 'L',
        table: 41,
      },
      '9': {
        name: 'Ryan Bews [AU]',
        result: 'T',
        table: 62,
      },
    },
  },
  {
    name: 'Jimmy Farrugia [AU]',
    placing: 126,
    record: {
      wins: 5,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5828924162257496,
      oppopp: 0.5293892248257328,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Robin Law [AU]',
        result: 'W',
        table: 65,
      },
      '2': {
        name: 'Nick Bell [AU]',
        result: 'L',
        table: 11,
      },
      '3': {
        name: 'Jordan Ung [AU]',
        result: 'W',
        table: 129,
      },
      '4': {
        name: 'Harley Collins [AU]',
        result: 'W',
        table: 61,
      },
      '5': {
        name: 'Skye Godfrey [NZ]',
        result: 'W',
        table: 30,
      },
      '6': {
        name: 'Jose de la garma [AU]',
        result: 'L',
        table: 27,
      },
      '7': {
        name: 'Sam Clayfield [AU]',
        result: 'W',
        table: 46,
      },
      '8': {
        name: 'Shaun Sewell [AU]',
        result: 'L',
        table: 27,
      },
      '9': {
        name: 'Jeremy Lim [AU]',
        result: 'L',
        table: 49,
      },
    },
  },
  {
    name: 'Todd Williams [AU]',
    placing: 127,
    record: {
      wins: 5,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5694444444444444,
      oppopp: 0.546821416323731,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Josephine Nucifora [AU]',
        result: 'W',
        table: 188,
      },
      '2': {
        name: 'Georgia Trimble [AU]',
        result: 'W',
        table: 20,
      },
      '3': {
        name: 'Benjamin Hall [AU]',
        result: 'L',
        table: 12,
      },
      '4': {
        name: 'Tessa Isberg [FI]',
        result: 'W',
        table: 57,
      },
      '5': {
        name: 'Jose de la garma [AU]',
        result: 'L',
        table: 26,
      },
      '6': {
        name: 'Kenny Potter [NZ]',
        result: 'L',
        table: 70,
      },
      '7': {
        name: 'Jonathan Tjahjono [AU]',
        result: 'W',
        table: 106,
      },
      '8': {
        name: 'Ben Sinclair [AU]',
        result: 'W',
        table: 80,
      },
      '9': {
        name: 'Shang Jun Chua [AU]',
        result: 'L',
        table: 53,
      },
    },
  },
  {
    name: 'Ryan Bews [AU]',
    placing: 128,
    record: {
      wins: 4,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5673500881834216,
      oppopp: 0.5535012230200722,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Connor Tobin-Underwood [AU]',
        result: 'W',
        table: 31,
      },
      '2': {
        name: 'Thomas Lamprey [AU]',
        result: 'W',
        table: 67,
      },
      '3': {
        name: '[Table 2]Nissa Kew [AU]',
        result: 'T',
        table: 22,
      },
      '4': {
        name: 'Reginald Ng [AU]',
        result: 'L',
        table: 37,
      },
      '5': {
        name: 'James Volis [AU]',
        result: 'W',
        table: 64,
      },
      '6': {
        name: 'CHEE WAI LIEW [AU]',
        result: 'L',
        table: 56,
      },
      '7': {
        name: 'Yin Jiang [AU]',
        result: 'T',
        table: 85,
      },
      '8': {
        name: 'Hoong Yoong Ngiam [AU]',
        result: 'W',
        table: 94,
      },
      '9': {
        name: 'Hao Lu [AU]',
        result: 'T',
        table: 62,
      },
    },
  },
  {
    name: 'Edward Mouanoutoua [AU]',
    placing: 129,
    record: {
      wins: 5,
      losses: 2,
      ties: 0,
    },
    resistances: {
      self: 0.7142857142857143,
      opp: 0.5642857142857143,
      oppopp: 0.5412147716229349,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Daniel Bush [AU]',
        result: 'W',
        table: 88,
      },
      '2': {
        name: 'Manuel Cresdee [AU]',
        result: 'L',
        table: 95,
      },
      '3': {
        name: 'Kristopher Ryan-Clout [AU]',
        result: 'W',
        table: 165,
      },
      '4': {
        name: 'Jessica Karim [AU]',
        result: 'W',
        table: 92,
      },
      '5': {
        name: 'Tan Loc Thuan Nguyen [AU]',
        result: 'W',
        table: 42,
      },
      '6': {
        name: 'Jordan Palmer [AU]',
        result: 'W',
        table: 21,
      },
      '7': {
        name: '[Table 2]Nissa Kew [AU]',
        result: 'L',
        table: 7,
      },
    },
  },
  {
    name: 'Andrew Teoh [AU]',
    placing: 130,
    record: {
      wins: 4,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5493827160493827,
      oppopp: 0.5049652165392906,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Markus Janssen [AU]',
        result: 'T',
        table: 204,
      },
      '2': {
        name: 'Jimmy Nguyen [AU]',
        result: 'T',
        table: 139,
      },
      '3': {
        name: 'Zhiyuan Liang [CN]',
        result: 'W',
        table: 181,
      },
      '4': {
        name: 'Jesse Becker [AU]',
        result: 'T',
        table: 109,
      },
      '5': {
        name: 'Bradley Cannan-cole [AU]',
        result: 'L',
        table: 114,
      },
      '6': {
        name: 'Noah Midgley [AU]',
        result: 'W',
        table: 151,
      },
      '7': {
        name: 'Chloe Appleby [AU]',
        result: 'W',
        table: 111,
      },
      '8': {
        name: 'Tim Haffmanns [DE]',
        result: 'W',
        table: 85,
      },
      '9': {
        name: 'Robbie Caldwell [AU]',
        result: 'L',
        table: 45,
      },
    },
  },
  {
    name: 'Bing Jun Chan [SG]',
    placing: 131,
    record: {
      wins: 5,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5462962962962964,
      oppopp: 0.521813149127964,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Carmela Nucifora [AU]',
        result: 'W',
        table: 6,
      },
      '2': {
        name: 'Alexander Jemison [AU]',
        result: 'W',
        table: 79,
      },
      '3': {
        name: 'CHEE WAI LIEW [AU]',
        result: 'W',
        table: 40,
      },
      '4': {
        name: 'Takuma Tominaga [JP]',
        result: 'L',
        table: 15,
      },
      '5': {
        name: 'Kelvin Nguyen [AU]',
        result: 'W',
        table: 46,
      },
      '6': {
        name: 'Simon Williams [AU]',
        result: 'L',
        table: 16,
      },
      '7': {
        name: 'Dylan Graefe [AU]',
        result: 'L',
        table: 40,
      },
      '8': {
        name: 'Anthony Tsang [AU]',
        result: 'L',
        table: 77,
      },
      '9': {
        name: 'Jason Slifka [AU]',
        result: 'W',
        table: 108,
      },
    },
  },
  {
    name: 'Dylan Graefe [AU]',
    placing: 132,
    record: {
      wins: 5,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5378086419753088,
      oppopp: 0.5245967445620223,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Hoi Hang Ho [AU]',
        result: 'W',
        table: 253,
      },
      '2': {
        name: 'Alvin Hall [AU]',
        result: 'L',
        table: 16,
      },
      '3': {
        name: 'Kenny Potter [NZ]',
        result: 'W',
        table: 98,
      },
      '4': {
        name: 'Roman Addamo [AU]',
        result: 'W',
        table: 67,
      },
      '5': {
        name: 'Sam Clayfield [AU]',
        result: 'L',
        table: 36,
      },
      '6': {
        name: 'Sameer Sangwan [AU]',
        result: 'W',
        table: 71,
      },
      '7': {
        name: 'Bing Jun Chan [SG]',
        result: 'W',
        table: 40,
      },
      '8': {
        name: 'Haru Nishikawa [JP]',
        result: 'L',
        table: 32,
      },
      '9': {
        name: 'Mia Fountain [AU]',
        result: 'L',
        table: 48,
      },
    },
  },
  {
    name: 'Huy Nguyen [AU]',
    placing: 133,
    record: {
      wins: 5,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5347222222222222,
      oppopp: 0.5560647535763277,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Will Harris [AU]',
        result: 'L',
        table: 59,
      },
      '2': {
        name: 'Kosta Spanoudakis [AU]',
        result: 'W',
        table: 190,
      },
      '3': {
        name: 'Dom Fleming [AU]',
        result: 'W',
        table: 130,
      },
      '4': {
        name: 'Tan Loc Thuan Nguyen [AU]',
        result: 'L',
        table: 58,
      },
      '5': {
        name: 'Alvin Hall [AU]',
        result: 'W',
        table: 113,
      },
      '6': {
        name: 'Sam Connor [AU]',
        result: 'W',
        table: 86,
      },
      '7': {
        name: 'Kirryn Hatch [AU]',
        result: 'W',
        table: 44,
      },
      '8': {
        name: 'Jordan Palmer [AU]',
        result: 'L',
        table: 19,
      },
      '9': {
        name: 'Der Cherng Lee [NZ]',
        result: 'L',
        table: 43,
      },
    },
  },
  {
    name: 'Andi Cheung [AU]',
    placing: 134,
    record: {
      wins: 4,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5308641975308641,
      oppopp: 0.5298500881834216,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jake Cruwys [AU]',
        result: 'L',
        table: 63,
      },
      '2': {
        name: 'Carmela Nucifora [AU]',
        result: 'T',
        table: 195,
      },
      '3': {
        name: 'Taylor Thomas [AU]',
        result: 'W',
        table: 220,
      },
      '4': {
        name: 'Edin Visca [AU]',
        result: 'T',
        table: 157,
      },
      '5': {
        name: 'YUTIAN SHOU [AU]',
        result: 'W',
        table: 153,
      },
      '6': {
        name: 'Vignesh Krishnan [AU]',
        result: 'W',
        table: 105,
      },
      '7': {
        name: 'Zak Hamilton [AU]',
        result: 'W',
        table: 62,
      },
      '8': {
        name: 'Tibor Baranyay [AU]',
        result: 'L',
        table: 38,
      },
      '9': {
        name: 'Kelvin Duong [AU]',
        result: 'T',
        table: 56,
      },
    },
  },
  {
    name: 'Rory Sharpe [AU]',
    placing: 135,
    record: {
      wins: 4,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5307760141093474,
      oppopp: 0.5234890540578372,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Kenny Potter [NZ]',
        result: 'L',
        table: 40,
      },
      '2': {
        name: 'Henry Brereton [AU]',
        result: 'T',
        table: 219,
      },
      '3': {
        name: 'Jake Herden [AU]',
        result: 'W',
        table: 202,
      },
      '4': {
        name: 'Rui Crocitta [AU]',
        result: 'T',
        table: 110,
      },
      '5': {
        name: 'Sam Chen [US]',
        result: 'W',
        table: 160,
      },
      '6': {
        name: 'Brayden S [AU]',
        result: 'W',
        table: 96,
      },
      '7': {
        name: 'Brendon Leehane [AU]',
        result: 'W',
        table: 61,
      },
      '8': {
        name: 'DI ZHU [CN]',
        result: 'L',
        table: 37,
      },
      '9': {
        name: 'Tom Bourke [AU]',
        result: 'T',
        table: 64,
      },
    },
  },
  {
    name: 'Tom Bourke [AU]',
    placing: 136,
    record: {
      wins: 4,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5270061728395061,
      oppopp: 0.5367424799137761,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Yin Jiang [AU]',
        result: 'W',
        table: 38,
      },
      '2': {
        name: 'Michael Wilson [AU]',
        result: 'T',
        table: 4,
      },
      '3': {
        name: 'Aaron van der Kolk [AU]',
        result: 'L',
        table: 54,
      },
      '4': {
        name: 'Huy Doan [AU]',
        result: 'T',
        table: 122,
      },
      '5': {
        name: 'Henry Brereton [AU]',
        result: 'W',
        table: 152,
      },
      '6': {
        name: 'Edin Visca [AU]',
        result: 'L',
        table: 98,
      },
      '7': {
        name: 'Sean Takemoto [AU]',
        result: 'W',
        table: 135,
      },
      '8': {
        name: 'Sebastian Trisch [AU]',
        result: 'W',
        table: 99,
      },
      '9': {
        name: 'Rory Sharpe [AU]',
        result: 'T',
        table: 64,
      },
    },
  },
  {
    name: 'Cody Matthewe [AU]',
    placing: 137,
    record: {
      wins: 5,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5239197530864197,
      oppopp: 0.5331940157750343,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Benjamin Woodward [AU]',
        result: 'W',
        table: 93,
      },
      '2': {
        name: 'Zak Hamilton [AU]',
        result: 'W',
        table: 5,
      },
      '3': {
        name: 'Andy Truong [AU]',
        result: 'L',
        table: 13,
      },
      '4': {
        name: 'Satoya Takagi [JP]',
        result: 'W',
        table: 68,
      },
      '5': {
        name: 'Benjamin Hall [AU]',
        result: 'L',
        table: 40,
      },
      '6': {
        name: 'Thomas Quilliam [AU]',
        result: 'L',
        table: 62,
      },
      '7': {
        name: 'Ryan Maullin [AU]',
        result: 'W',
        table: 116,
      },
      '8': {
        name: 'Jeremy Lim [AU]',
        result: 'L',
        table: 71,
      },
      '9': {
        name: 'Ashton Bradley [AU]',
        result: 'W',
        table: 96,
      },
    },
  },
  {
    name: 'Anthony Tsang [AU]',
    placing: 138,
    record: {
      wins: 4,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5208333333333334,
      oppopp: 0.4935408705663335,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Joshua Courtney [AU]',
        result: 'T',
        table: 124,
      },
      '2': {
        name: 'Zachary Bishop [AU]',
        result: 'T',
        table: 144,
      },
      '3': {
        name: 'Rory Beniuk [AU]',
        result: 'L',
        table: 177,
      },
      '4': {
        name: 'Dillon Zhou-Sarno [AU]',
        result: 'W',
        table: 210,
      },
      '5': {
        name: 'Joshua Martin [AU]',
        result: 'W',
        table: 161,
      },
      '6': {
        name: 'Benjamin Woodward [AU]',
        result: 'T',
        table: 103,
      },
      '7': {
        name: 'Bradley Cannan-cole [AU]',
        result: 'W',
        table: 104,
      },
      '8': {
        name: 'Bing Jun Chan [SG]',
        result: 'W',
        table: 77,
      },
      '9': {
        name: 'Brendan Cliffe [AU]',
        result: 'L',
        table: 46,
      },
    },
  },
  {
    name: 'Jesse Becker [AU]',
    placing: 139,
    record: {
      wins: 4,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5162037037037037,
      oppopp: 0.5276595874975504,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Lily Huynh [AU]',
        result: 'W',
        table: 136,
      },
      '2': {
        name: 'Xinfang Wang [AU]',
        result: 'L',
        table: 51,
      },
      '3': {
        name: 'DI ZHU [CN]',
        result: 'T',
        table: 147,
      },
      '4': {
        name: 'Andrew Teoh [AU]',
        result: 'T',
        table: 109,
      },
      '5': {
        name: 'Benjamin Small [AU]',
        result: 'T',
        table: 141,
      },
      '6': {
        name: 'Samuel Shepherd [NZ]',
        result: 'L',
        table: 154,
      },
      '7': {
        name: 'Morris Arnold [AU]',
        result: 'W',
        table: 179,
      },
      '8': {
        name: 'Kurt Spiteri [AU]',
        result: 'W',
        table: 140,
      },
      '9': {
        name: 'Joshua Bradley [AU]',
        result: 'W',
        table: 105,
      },
    },
  },
  {
    name: 'Joshua Courtney [AU]',
    placing: 140,
    record: {
      wins: 4,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5123456790123456,
      oppopp: 0.5489320007838525,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Anthony Tsang [AU]',
        result: 'T',
        table: 124,
      },
      '2': {
        name: 'Ehren Roebuck [AU]',
        result: 'L',
        table: 147,
      },
      '3': {
        name: 'Ethan Stoeckert [AU]',
        result: 'W',
        table: 212,
      },
      '4': {
        name: 'Keller Huang [AU]',
        result: 'W',
        table: 142,
      },
      '5': {
        name: 'Robin Sangwan [AU]',
        result: 'W',
        table: 97,
      },
      '6': {
        name: 'Michael Hammond [AU]',
        result: 'T',
        table: 36,
      },
      '7': {
        name: 'Hao Lu [AU]',
        result: 'L',
        table: 63,
      },
      '8': {
        name: 'Ashton Bradley [AU]',
        result: 'T',
        table: 90,
      },
      '9': {
        name: 'Tessa Isberg [FI]',
        result: 'W',
        table: 106,
      },
    },
  },
  {
    name: 'Scott Langford [AU]',
    placing: 141,
    record: {
      wins: 5,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5123456790123456,
      oppopp: 0.5421810699588477,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: '玄 王 [CN]',
        result: 'L',
        table: 81,
      },
      '2': {
        name: 'Isabelle Lohrey [AU]',
        result: 'W',
        table: 229,
      },
      '3': {
        name: 'Kylie Flynn [AU]',
        result: 'W',
        table: 125,
      },
      '4': {
        name: 'Kelvin Nguyen [AU]',
        result: 'L',
        table: 75,
      },
      '5': {
        name: 'Tessa Isberg [FI]',
        result: 'W',
        table: 118,
      },
      '6': {
        name: 'Samuel Gianakis [AU]',
        result: 'W',
        table: 78,
      },
      '7': {
        name: 'Jeremy Evans [AU]',
        result: 'W',
        table: 35,
      },
      '8': {
        name: 'Simon Williams [AU]',
        result: 'L',
        table: 24,
      },
      '9': {
        name: 'Darrin Sin [AU]',
        result: 'L',
        table: 52,
      },
    },
  },
  {
    name: 'Lewis Gall [NZ]',
    placing: 142,
    record: {
      wins: 5,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5108024691358025,
      oppopp: 0.5358646262002743,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Guysen Lang [NZ]',
        result: 'L',
        table: 265,
      },
      '2': {
        name: 'Lily Huynh [AU]',
        result: 'W',
        table: 182,
      },
      '3': {
        name: 'Michael Jiang [AU]',
        result: 'W',
        table: 128,
      },
      '4': {
        name: 'Hadyn Joyce [AU]',
        result: 'W',
        table: 76,
      },
      '5': {
        name: 'Max Kennedy [AU]',
        result: 'L',
        table: 35,
      },
      '6': {
        name: 'Skye Godfrey [NZ]',
        result: 'L',
        table: 75,
      },
      '7': {
        name: 'Xaria-Sofia Sachse [AU]',
        result: 'L',
        table: 109,
      },
      '8': {
        name: 'Ryan Maullin [AU]',
        result: 'W',
        table: 134,
      },
      '9': {
        name: 'Harry West [AU]',
        result: 'W',
        table: 101,
      },
    },
  },
  {
    name: 'Kelvin Duong [AU]',
    placing: 143,
    record: {
      wins: 4,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5105820105820106,
      oppopp: 0.4837259595196104,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Sami MacKenzie [AU]',
        result: 'W',
        table: 259,
      },
      '2': {
        name: 'Satoya Takagi [JP]',
        result: 'L',
        table: 26,
      },
      '3': {
        name: 'Lucas Hamilton-Foster [AU]',
        result: 'L',
        table: 109,
      },
      '4': {
        name: 'Jesse Brewer [AU]',
        result: 'W',
        table: 165,
      },
      '5': {
        name: 'Adam Crust [AU]',
        result: 'T',
        table: 108,
      },
      '6': {
        name: 'Hoong Yoong Ngiam [AU]',
        result: 'T',
        table: 128,
      },
      '7': {
        name: 'Jarrad Paxton [AU]',
        result: 'W',
        table: 125,
      },
      '8': {
        name: 'Samantha Turner [AU]',
        result: 'W',
        table: 98,
      },
      '9': {
        name: 'Andi Cheung [AU]',
        result: 'T',
        table: 56,
      },
    },
  },
  {
    name: 'Jackson Doyle [AU]',
    placing: 144,
    record: {
      wins: 4,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5046296296296295,
      oppopp: 0.49707647462277094,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Tan Loc Thuan Nguyen [AU]',
        result: 'L',
        table: 7,
      },
      '2': {
        name: 'Aditi Kutty [AU]',
        result: 'W',
        table: 211,
      },
      '3': {
        name: 'Johnathan Heng [AU]',
        result: 'T',
        table: 164,
      },
      '4': {
        name: 'Nathan Johnson [AU]',
        result: 'W',
        table: 147,
      },
      '5': {
        name: 'Kevin Min [AU]',
        result: 'T',
        table: 82,
      },
      '6': {
        name: 'Destyn Weir [AU]',
        result: 'W',
        table: 90,
      },
      '7': {
        name: 'Charles Li [AU]',
        result: 'L',
        table: 60,
      },
      '8': {
        name: 'YUTIAN SHOU [AU]',
        result: 'W',
        table: 96,
      },
      '9': {
        name: 'Hannah Paterson [AU]',
        result: 'T',
        table: 55,
      },
    },
  },
  {
    name: 'Hannah Paterson [AU]',
    placing: 145,
    record: {
      wins: 4,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.49814814814814823,
      oppopp: 0.5099034881442289,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Christopher Cheung [AU]',
        result: 'T',
        table: 57,
      },
      '2': {
        name: 'Jer-Shyan Hwa [AU]',
        result: 'L',
        table: 112,
      },
      '3': {
        name: 'Dillon Zhou-Sarno [AU]',
        result: 'T',
        table: 184,
      },
      '4': {
        name: 'Christian Makiling [AU]',
        result: 'W',
        table: 220,
      },
      '5': {
        name: 'Tommy Williams [AU]',
        result: 'W',
        table: 144,
      },
      '6': {
        name: 'Tyler Bishop [AU]',
        result: 'W',
        table: 102,
      },
      '7': {
        name: 'Kye Edmondston [AU]',
        result: 'L',
        table: 65,
      },
      '8': {
        name: 'Sam Hynes [AU]',
        result: 'W',
        table: 86,
      },
      '9': {
        name: 'Jackson Doyle [AU]',
        result: 'T',
        table: 55,
      },
    },
  },
  {
    name: 'Samuel Gianakis [AU]',
    placing: 146,
    record: {
      wins: 5,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.49691358024691357,
      oppopp: 0.4974720752498531,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'James Volis [AU]',
        result: 'W',
        table: 231,
      },
      '2': {
        name: 'Peter Fay [AU]',
        result: 'L',
        table: 47,
      },
      '3': {
        name: 'Mark Smit [AU]',
        result: 'W',
        table: 162,
      },
      '4': {
        name: 'Shaun Sewell [AU]',
        result: 'L',
        table: 85,
      },
      '5': {
        name: 'Kurt Spiteri [AU]',
        result: 'W',
        table: 120,
      },
      '6': {
        name: 'Scott Langford [AU]',
        result: 'L',
        table: 78,
      },
      '7': {
        name: 'Eric Sanson [NZ]',
        result: 'L',
        table: 112,
      },
      '8': {
        name: 'Ayumi Tamai [JP]',
        result: 'W',
        table: 133,
      },
      '9': {
        name: 'Tuan Ho [AU]',
        result: 'W',
        table: 103,
      },
    },
  },
  {
    name: 'WaiLok Tse [AU]',
    placing: 147,
    record: {
      wins: 4,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.48456790123456783,
      oppopp: 0.5006041176758769,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Ellie Crouch [AU]',
        result: 'W',
        table: 17,
      },
      '2': {
        name: 'Aaron Woodrow [AU]',
        result: 'T',
        table: 101,
      },
      '3': {
        name: 'Vignesh Krishnan [AU]',
        result: 'L',
        table: 66,
      },
      '4': {
        name: 'James Kostoulias [AU]',
        result: 'W',
        table: 117,
      },
      '5': {
        name: 'Rostin Luo [NZ]',
        result: 'L',
        table: 85,
      },
      '6': {
        name: 'Riley Pattison [AU]',
        result: 'T',
        table: 146,
      },
      '7': {
        name: 'Thomas Lamprey [AU]',
        result: 'W',
        table: 139,
      },
      '8': {
        name: 'Will Ladner [AU]',
        result: 'T',
        table: 88,
      },
      '9': {
        name: 'jeremy blackney [AU]',
        result: 'W',
        table: 99,
      },
    },
  },
  {
    name: 'Will Ladner [AU]',
    placing: 148,
    record: {
      wins: 4,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.4660493827160494,
      oppopp: 0.5157921810699588,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Marco Giovannini [AU]',
        result: 'W',
        table: 125,
      },
      '2': {
        name: 'William Rue [AU]',
        result: 'W',
        table: 40,
      },
      '3': {
        name: 'Simon Williams [AU]',
        result: 'L',
        table: 27,
      },
      '4': {
        name: 'Daniel Schwan [AU]',
        result: 'L',
        table: 69,
      },
      '5': {
        name: 'KODY TRAN [AU]',
        result: 'T',
        table: 126,
      },
      '6': {
        name: 'Tom Sautelle [AU]',
        result: 'T',
        table: 144,
      },
      '7': {
        name: 'Tyler Bishop [AU]',
        result: 'W',
        table: 130,
      },
      '8': {
        name: 'WaiLok Tse [AU]',
        result: 'T',
        table: 88,
      },
      '9': {
        name: 'Tim Haffmanns [DE]',
        result: 'W',
        table: 104,
      },
    },
  },
  {
    name: 'Nathan Woodcock [AU]',
    placing: 149,
    record: {
      wins: 5,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.46574074074074073,
      oppopp: 0.5104463060944542,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Cameron Peak [AU]',
        result: 'W',
        table: 210,
      },
      '2': {
        name: 'Corey Brown [AU]',
        result: 'L',
        table: 103,
      },
      '3': {
        name: 'Daniel Schwan [AU]',
        result: 'L',
        table: 163,
      },
      '4': {
        name: 'James Higgins [AU]',
        result: 'W',
        table: 195,
      },
      '5': {
        name: 'Jessica Karim [AU]',
        result: 'W',
        table: 122,
      },
      '6': {
        name: 'Stephen Todorovic [AU]',
        result: 'L',
        table: 63,
      },
      '7': {
        name: 'Calvin Prosser [AU]',
        result: 'W',
        table: 122,
      },
      '8': {
        name: 'Thomas Quilliam [AU]',
        result: 'W',
        table: 70,
      },
      '9': {
        name: 'Zherui Li [AU]',
        result: 'L',
        table: 50,
      },
    },
  },
  {
    name: 'Noah Midgley [AU]',
    placing: 150,
    record: {
      wins: 5,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.46219135802469136,
      oppopp: 0.5004213207916912,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Matthew Chong [AU]',
        result: 'L',
        table: 109,
      },
      '2': {
        name: 'Joshua Grob [AU]',
        result: 'W',
        table: 204,
      },
      '3': {
        name: 'Michael Taylor [AU]',
        result: 'L',
        table: 85,
      },
      '4': {
        name: 'Thomas Quilliam [AU]',
        result: 'L',
        table: 184,
      },
      '5': {
        name: 'Alexander Roderick [AU]',
        result: 'W',
        table: 210,
      },
      '6': {
        name: 'Andrew Teoh [AU]',
        result: 'L',
        table: 151,
      },
      '7': {
        name: 'Jack Eeles [AU]',
        result: 'W',
        table: 181,
      },
      '8': {
        name: 'Benjamin Woodward [AU]',
        result: 'W',
        table: 141,
      },
      '9': {
        name: 'Brayden S [AU]',
        result: 'W',
        table: 95,
      },
    },
  },
  {
    name: 'Kirryn Hatch [AU]',
    placing: 151,
    record: {
      wins: 5,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.4598765432098765,
      oppopp: 0.512852733686067,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Benjamin Kouzas [AU]',
        result: 'L',
        table: 262,
      },
      '2': {
        name: 'Joshua Glen [AU]',
        result: 'L',
        table: 259,
      },
      '3': {
        name: 'Samuel Williams [AU]',
        result: 'W',
        table: 253,
      },
      '4': {
        name: 'Stella Gabler [AU]',
        result: 'W',
        table: 159,
      },
      '5': {
        name: 'Qihan Zhang [AU]',
        result: 'W',
        table: 101,
      },
      '6': {
        name: 'Ryan Burt [AU]',
        result: 'W',
        table: 61,
      },
      '7': {
        name: 'Huy Nguyen [AU]',
        result: 'L',
        table: 44,
      },
      '8': {
        name: 'Noah Lin [CN]',
        result: 'L',
        table: 66,
      },
      '9': {
        name: 'Zak Hamilton [AU]',
        result: 'W',
        table: 107,
      },
    },
  },
  {
    name: 'Jordan Ung [AU]',
    placing: 152,
    record: {
      wins: 5,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.44753086419753085,
      oppopp: 0.5046187816690462,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Benjamin Hall [AU]',
        result: 'L',
        table: 75,
      },
      '2': {
        name: 'Steven Hector [AU]',
        result: 'W',
        table: 253,
      },
      '3': {
        name: 'Jimmy Farrugia [AU]',
        result: 'L',
        table: 129,
      },
      '4': {
        name: 'Kylie Flynn [AU]',
        result: 'W',
        table: 202,
      },
      '5': {
        name: 'Ida Nero [AU]',
        result: 'L',
        table: 111,
      },
      '6': {
        name: 'Scott Leung [AU]',
        result: 'L',
        table: 158,
      },
      '7': {
        name: 'Michael Duong [AU]',
        result: 'W',
        table: 187,
      },
      '8': {
        name: 'Holly Wang [AU]',
        result: 'W',
        table: 139,
      },
      '9': {
        name: 'David Younan [AU]',
        result: 'W',
        table: 109,
      },
    },
  },
  {
    name: 'Ramzey Fayad [AU]',
    placing: 153,
    record: {
      wins: 4,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.44058641975308643,
      oppopp: 0.48146985491727556,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Matthew Caton [AU]',
        result: 'T',
        table: 165,
      },
      '2': {
        name: 'DONGXU LI [AU]',
        result: 'T',
        table: 125,
      },
      '3': {
        name: 'David Edebohls [AU]',
        result: 'L',
        table: 173,
      },
      '4': {
        name: 'Zhiyuan Liang [CN]',
        result: 'L',
        table: 209,
      },
      '5': {
        name: 'Melinda Li [NZ]',
        result: 'T',
        table: 234,
      },
      '6': {
        name: 'Hugo Pearce [AU]',
        result: 'W',
        table: 218,
      },
      '7': {
        name: 'Alex Gordon [NZ]',
        result: 'W',
        table: 186,
      },
      '8': {
        name: 'Brandon Wilson [AU]',
        result: 'W',
        table: 127,
      },
      '9': {
        name: 'Samuel Shepherd [NZ]',
        result: 'W',
        table: 98,
      },
    },
  },
  {
    name: 'Louis Pozzacchio [AU]',
    placing: 154,
    record: {
      wins: 4,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.625,
      opp: 0.6640625,
      oppopp: 0.5588448660714286,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Yasuyuki Handa [AU]',
        result: 'W',
        table: 58,
      },
      '2': {
        name: 'Sebastian Rutter [NZ]',
        result: 'W',
        table: 69,
      },
      '3': {
        name: 'Joshua Bradley [AU]',
        result: 'W',
        table: 21,
      },
      '4': {
        name: 'Will Harris [AU]',
        result: 'W',
        table: 12,
      },
      '5': {
        name: 'Natalie Millar [AU]',
        result: 'T',
        table: 4,
      },
      '6': {
        name: 'Andre Pollacchi [AU]',
        result: 'T',
        table: 7,
      },
      '7': {
        name: 'Hakim Moussaoui [AU]',
        result: 'L',
        table: 16,
      },
      '8': {
        name: 'Justin Teh [AU]',
        result: 'L',
        table: 40,
      },
    },
  },
  {
    name: 'Ida Nero [AU]',
    placing: 155,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.6057098765432098,
      oppopp: 0.5306777263374486,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jake Herden [AU]',
        result: 'W',
        table: 149,
      },
      '2': {
        name: 'Lucas Hamilton-Foster [AU]',
        result: 'W',
        table: 85,
      },
      '3': {
        name: 'Will Harris [AU]',
        result: 'L',
        table: 15,
      },
      '4': {
        name: 'Corey Munro [AU]',
        result: 'L',
        table: 60,
      },
      '5': {
        name: 'Jordan Ung [AU]',
        result: 'W',
        table: 111,
      },
      '6': {
        name: 'Ryan Tan [UK]',
        result: 'L',
        table: 74,
      },
      '7': {
        name: 'Benjamin Woodward [AU]',
        result: 'W',
        table: 123,
      },
      '8': {
        name: 'Alex Wu [AU]',
        result: 'T',
        table: 82,
      },
      '9': {
        name: 'Markus Janssen [AU]',
        result: 'T',
        table: 67,
      },
    },
  },
  {
    name: 'Max Kennedy [AU]',
    placing: 156,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5987654320987654,
      oppopp: 0.5417670977856164,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Chloe Appleby [AU]',
        result: 'W',
        table: 73,
      },
      '2': {
        name: 'Tyler Adamson [AU]',
        result: 'W',
        table: 10,
      },
      '3': {
        name: 'Tim Franklin [AU]',
        result: 'L',
        table: 44,
      },
      '4': {
        name: 'Alexander Jemison [AU]',
        result: 'W',
        table: 88,
      },
      '5': {
        name: 'Lewis Gall [NZ]',
        result: 'W',
        table: 35,
      },
      '6': {
        name: 'Christian Delloiaco [AU]',
        result: 'L',
        table: 17,
      },
      '7': {
        name: 'Mia Fountain [AU]',
        result: 'L',
        table: 54,
      },
      '8': {
        name: 'Sameer Sangwan [AU]',
        result: 'T',
        table: 67,
      },
      '9': {
        name: 'Yasuyuki Handa [AU]',
        result: 'T',
        table: 83,
      },
    },
  },
  {
    name: 'Ehren Roebuck [AU]',
    placing: 157,
    record: {
      wins: 3,
      losses: 1,
      ties: 5,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.595679012345679,
      oppopp: 0.5320451817558299,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Mike Kan [AU]',
        result: 'T',
        table: 5,
      },
      '2': {
        name: 'Joshua Courtney [AU]',
        result: 'W',
        table: 147,
      },
      '3': {
        name: 'Chris Currenti [AU]',
        result: 'T',
        table: 71,
      },
      '4': {
        name: 'Jacques Gouws [NZ]',
        result: 'W',
        table: 100,
      },
      '5': {
        name: 'Zherui Li [AU]',
        result: 'T',
        table: 58,
      },
      '6': {
        name: 'Tan Loc Thuan Nguyen [AU]',
        result: 'W',
        table: 80,
      },
      '7': {
        name: 'Kenny Potter [NZ]',
        result: 'L',
        table: 43,
      },
      '8': {
        name: 'Xaria-Sofia Sachse [AU]',
        result: 'T',
        table: 73,
      },
      '9': {
        name: 'Sylas Golding [AU]',
        result: 'T',
        table: 75,
      },
    },
  },
  {
    name: 'Corey Munro [AU]',
    placing: 158,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5864197530864197,
      oppopp: 0.5647927689594356,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Joshua Glen [AU]',
        result: 'W',
        table: 166,
      },
      '2': {
        name: 'Andrew Lam [AU]',
        result: 'W',
        table: 108,
      },
      '3': {
        name: 'Angus Johnson [AU]',
        result: 'L',
        table: 43,
      },
      '4': {
        name: 'Ida Nero [AU]',
        result: 'W',
        table: 60,
      },
      '5': {
        name: 'Jeremy Lim [AU]',
        result: 'W',
        table: 47,
      },
      '6': {
        name: 'Lochie McKeefry [NZ]',
        result: 'L',
        table: 24,
      },
      '7': {
        name: 'Ben Anderson [AU]',
        result: 'T',
        table: 55,
      },
      '8': {
        name: 'Nick Alvarez [US]',
        result: 'L',
        table: 52,
      },
      '9': {
        name: 'James Volis [AU]',
        result: 'T',
        table: 69,
      },
    },
  },
  {
    name: '玄 王 [CN]',
    placing: 159,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.585648148148148,
      oppopp: 0.5555785199882423,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Scott Langford [AU]',
        result: 'W',
        table: 81,
      },
      '2': {
        name: 'Alfie Delgado [MX]',
        result: 'T',
        table: 90,
      },
      '3': {
        name: 'Michael Hammond [AU]',
        result: 'W',
        table: 52,
      },
      '4': {
        name: 'Ferdi Mak [AU]',
        result: 'W',
        table: 34,
      },
      '5': {
        name: 'Bailey Craig [AU]',
        result: 'L',
        table: 10,
      },
      '6': {
        name: 'Thomas Thoonen [AU]',
        result: 'L',
        table: 45,
      },
      '7': {
        name: 'Stefan Djordjevic [AU]',
        result: 'W',
        table: 74,
      },
      '8': {
        name: 'Vincent Sutinah [AU]',
        result: 'L',
        table: 62,
      },
      '9': {
        name: 'Lily Huynh [AU]',
        result: 'T',
        table: 90,
      },
    },
  },
  {
    name: 'Raymond Wong [AU]',
    placing: 160,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5725308641975309,
      oppopp: 0.5355207720948462,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jordyn Demeo [AU]',
        result: 'W',
        table: 76,
      },
      '2': {
        name: 'Cameron Shenoy [US]',
        result: 'T',
        table: 12,
      },
      '3': {
        name: 'Jake Thomas [AU]',
        result: 'W',
        table: 81,
      },
      '4': {
        name: 'Gareth Murphy [AU]',
        result: 'W',
        table: 26,
      },
      '5': {
        name: '[Table 2]Nissa Kew [AU]',
        result: 'L',
        table: 23,
      },
      '6': {
        name: 'Yongxiang Liu [AU]',
        result: 'W',
        table: 35,
      },
      '7': {
        name: 'Arnouluck Sirisay [AU]',
        result: 'T',
        table: 24,
      },
      '8': {
        name: 'Kye Edmondston [AU]',
        result: 'L',
        table: 34,
      },
      '9': {
        name: 'Blake Davies [AU]',
        result: 'L',
        table: 58,
      },
    },
  },
  {
    name: 'Hayden Matthews [AU]',
    placing: 161,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5709876543209877,
      oppopp: 0.5143934940231236,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Carl Orbista [AU]',
        result: 'W',
        table: 103,
      },
      '2': {
        name: 'Jordan Palmer [AU]',
        result: 'L',
        table: 52,
      },
      '3': {
        name: 'David Stevens [AU]',
        result: 'T',
        table: 139,
      },
      '4': {
        name: 'Timothy Uyeda [AU]',
        result: 'W',
        table: 138,
      },
      '5': {
        name: 'Der Cherng Lee [NZ]',
        result: 'W',
        table: 69,
      },
      '6': {
        name: 'YiFei Ruan [AU]',
        result: 'L',
        table: 32,
      },
      '7': {
        name: 'TE-AWHI TE ANGINA [AU]',
        result: 'L',
        table: 99,
      },
      '8': {
        name: 'David Edebohls [AU]',
        result: 'T',
        table: 115,
      },
      '9': {
        name: 'Tom Sautelle [AU]',
        result: 'W',
        table: 111,
      },
    },
  },
  {
    name: 'Harrison Pirotta [AU]',
    placing: 162,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5589726631393298,
      oppopp: 0.5382712550040593,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Ben Anderson [AU]',
        result: 'W',
        table: 156,
      },
      '2': {
        name: 'Keito Arai [JP]',
        result: 'L',
        table: 84,
      },
      '3': {
        name: 'Aaron Kleinhenz [US]',
        result: 'W',
        table: 142,
      },
      '4': {
        name: 'Matthew Anderson [AU]',
        result: 'L',
        table: 62,
      },
      '5': {
        name: 'Harley Collins [AU]',
        result: 'W',
        table: 133,
      },
      '6': {
        name: 'TJ Dixon [AU]',
        result: 'T',
        table: 77,
      },
      '7': {
        name: 'Corey Brown [AU]',
        result: 'W',
        table: 70,
      },
      '8': {
        name: 'Sam Hughes [AU]',
        result: 'T',
        table: 58,
      },
      '9': {
        name: 'Saxon Wright [AU]',
        result: 'L',
        table: 57,
      },
    },
  },
  {
    name: 'Charles Li [AU]',
    placing: 163,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5580246913580248,
      oppopp: 0.5342107583774252,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Henry Brand [AU]',
        result: 'L',
        table: 134,
      },
      '2': {
        name: 'Benjamin Small [AU]',
        result: 'T',
        table: 212,
      },
      '3': {
        name: 'Joshua Martin [AU]',
        result: 'W',
        table: 194,
      },
      '4': {
        name: 'Malik Hisyam Zaihan [IE]',
        result: 'W',
        table: 141,
      },
      '5': {
        name: 'Vignesh Krishnan [AU]',
        result: 'T',
        table: 61,
      },
      '6': {
        name: 'David Boyd [AU]',
        result: 'W',
        table: 94,
      },
      '7': {
        name: 'Jackson Doyle [AU]',
        result: 'W',
        table: 60,
      },
      '8': {
        name: 'CHEE WAI LIEW [AU]',
        result: 'L',
        table: 33,
      },
      '9': {
        name: 'Sam Hughes [AU]',
        result: 'L',
        table: 65,
      },
    },
  },
  {
    name: 'Andre Pollacchi [AU]',
    placing: 164,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5570987654320988,
      oppopp: 0.5415977733686067,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'James Higgins [AU]',
        result: 'T',
        table: 172,
      },
      '2': {
        name: 'Timothy Uyeda [AU]',
        result: 'W',
        table: 120,
      },
      '3': {
        name: 'Jack Fone [AU]',
        result: 'W',
        table: 63,
      },
      '4': {
        name: 'Brayden S [AU]',
        result: 'W',
        table: 22,
      },
      '5': {
        name: 'James Faulkner [AU]',
        result: 'W',
        table: 16,
      },
      '6': {
        name: 'Louis Pozzacchio [AU]',
        result: 'T',
        table: 7,
      },
      '7': {
        name: 'xinzhe hou [AU]',
        result: 'L',
        table: 17,
      },
      '8': {
        name: 'Jettano Posani [AU]',
        result: 'L',
        table: 36,
      },
      '9': {
        name: 'Gakuto Shiina [JP]',
        result: 'L',
        table: 54,
      },
    },
  },
  {
    name: 'Ferdi Mak [AU]',
    placing: 165,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5478395061728395,
      oppopp: 0.5429098079561042,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jake Holmes [AU]',
        result: 'W',
        table: 84,
      },
      '2': {
        name: 'Christian Hasbani [AU]',
        result: 'T',
        table: 42,
      },
      '3': {
        name: 'David Frans Daritan [AU]',
        result: 'W',
        table: 73,
      },
      '4': {
        name: '玄 王 [CN]',
        result: 'L',
        table: 34,
      },
      '5': {
        name: 'asger balle [AU]',
        result: 'L',
        table: 60,
      },
      '6': {
        name: 'Gareth Murphy [AU]',
        result: 'W',
        table: 132,
      },
      '7': {
        name: 'Saxon Wright [AU]',
        result: 'L',
        table: 91,
      },
      '8': {
        name: 'Aaron Woodrow [AU]',
        result: 'T',
        table: 118,
      },
      '9': {
        name: 'Sam Hynes [AU]',
        result: 'W',
        table: 120,
      },
    },
  },
  {
    name: 'Aaron Woodrow [AU]',
    placing: 166,
    record: {
      wins: 3,
      losses: 1,
      ties: 5,
    },
    resistances: {
      self: 0.6111111111111112,
      opp: 0.5462962962962963,
      oppopp: 0.540299823633157,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Beau McElroy [AU]',
        result: 'W',
        table: 192,
      },
      '2': {
        name: 'WaiLok Tse [AU]',
        result: 'T',
        table: 101,
      },
      '3': {
        name: 'Sam Connor [AU]',
        result: 'T',
        table: 77,
      },
      '4': {
        name: 'Jake Lazzari [AU]',
        result: 'T',
        table: 101,
      },
      '5': {
        name: 'David Younan [AU]',
        result: 'W',
        table: 99,
      },
      '6': {
        name: 'Lucas Hamilton-Foster [AU]',
        result: 'L',
        table: 76,
      },
      '7': {
        name: 'Holly Wang [AU]',
        result: 'T',
        table: 124,
      },
      '8': {
        name: 'Ferdi Mak [AU]',
        result: 'T',
        table: 118,
      },
      '9': {
        name: 'Michael Hammond [AU]',
        result: 'W',
        table: 122,
      },
    },
  },
  {
    name: 'Vignesh Krishnan [AU]',
    placing: 167,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5398148148148149,
      oppopp: 0.5263205467372134,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Peter Lo [AU]',
        result: 'W',
        table: 148,
      },
      '2': {
        name: 'Sam Connor [AU]',
        result: 'T',
        table: 88,
      },
      '3': {
        name: 'WaiLok Tse [AU]',
        result: 'W',
        table: 66,
      },
      '4': {
        name: 'Jeremy Lim [AU]',
        result: 'L',
        table: 43,
      },
      '5': {
        name: 'Charles Li [AU]',
        result: 'T',
        table: 61,
      },
      '6': {
        name: 'Andi Cheung [AU]',
        result: 'L',
        table: 105,
      },
      '7': {
        name: 'Sophia Crunkhorn [AU]',
        result: 'W',
        table: 138,
      },
      '8': {
        name: 'Adam Crust [AU]',
        result: 'L',
        table: 89,
      },
      '9': {
        name: 'David Edebohls [AU]',
        result: 'W',
        table: 124,
      },
    },
  },
  {
    name: 'Sam Clayfield [AU]',
    placing: 168,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5273368606701939,
      oppopp: 0.5282267433722461,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Anh Vuong Quoc Vo [AU]',
        result: 'W',
        table: 258,
      },
      '2': {
        name: 'Andy Truong [AU]',
        result: 'L',
        table: 78,
      },
      '3': {
        name: 'Victor Su [AU]',
        result: 'W',
        table: 93,
      },
      '4': {
        name: 'Bradley Cannan-cole [AU]',
        result: 'W',
        table: 63,
      },
      '5': {
        name: 'Dylan Graefe [AU]',
        result: 'W',
        table: 36,
      },
      '6': {
        name: 'Benjamin Hall [AU]',
        result: 'L',
        table: 19,
      },
      '7': {
        name: 'Jimmy Farrugia [AU]',
        result: 'L',
        table: 46,
      },
      '8': {
        name: 'Darcy Ryan [AU]',
        result: 'T',
        table: 84,
      },
      '9': {
        name: 'Wern Wong [NZ]',
        result: 'T',
        table: 92,
      },
    },
  },
  {
    name: 'Nathan Spry [AU]',
    placing: 169,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5239197530864197,
      oppopp: 0.518929918675289,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Dylan Seery [AU]',
        result: 'T',
        table: 50,
      },
      '2': {
        name: 'asger balle [AU]',
        result: 'W',
        table: 143,
      },
      '3': {
        name: 'Kye Edmondston [AU]',
        result: 'W',
        table: 56,
      },
      '4': {
        name: 'Aaron van der Kolk [AU]',
        result: 'W',
        table: 28,
      },
      '5': {
        name: 'Cameron Shenoy [US]',
        result: 'L',
        table: 22,
      },
      '6': {
        name: 'thomas lackington [AU]',
        result: 'L',
        table: 51,
      },
      '7': {
        name: 'Nick Alvarez [US]',
        result: 'L',
        table: 81,
      },
      '8': {
        name: 'Aydan Barrett [AU]',
        result: 'T',
        table: 106,
      },
      '9': {
        name: 'Dom Fleming [AU]',
        result: 'W',
        table: 110,
      },
    },
  },
  {
    name: 'Markus Janssen [AU]',
    placing: 170,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5239197530864198,
      oppopp: 0.49933893053106015,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Andrew Teoh [AU]',
        result: 'T',
        table: 204,
      },
      '2': {
        name: 'Julia Bridle [AU]',
        result: 'W',
        table: 134,
      },
      '3': {
        name: 'Gareth Murphy [AU]',
        result: 'L',
        table: 67,
      },
      '4': {
        name: 'Keegan Burt [AU]',
        result: 'L',
        table: 154,
      },
      '5': {
        name: 'Michael Gennaccaro [AU]',
        result: 'W',
        table: 169,
      },
      '6': {
        name: 'Carmen Harris [AU]',
        result: 'W',
        table: 127,
      },
      '7': {
        name: 'Cassie Joison [AU]',
        result: 'L',
        table: 75,
      },
      '8': {
        name: 'Calum Thatcher [AU]',
        result: 'W',
        table: 120,
      },
      '9': {
        name: 'Ida Nero [AU]',
        result: 'T',
        table: 67,
      },
    },
  },
  {
    name: 'Samantha Turner [AU]',
    placing: 171,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5231481481481483,
      oppopp: 0.5177211934156378,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jettano Posani [AU]',
        result: 'L',
        table: 248,
      },
      '2': {
        name: 'Chloe Appleby [AU]',
        result: 'W',
        table: 261,
      },
      '3': {
        name: 'Michael Gennaccaro [AU]',
        result: 'T',
        table: 138,
      },
      '4': {
        name: 'Zak Hamilton [AU]',
        result: 'T',
        table: 111,
      },
      '5': {
        name: 'Sophia Crunkhorn [AU]',
        result: 'W',
        table: 154,
      },
      '6': {
        name: 'Kye Edmondston [AU]',
        result: 'L',
        table: 100,
      },
      '7': {
        name: 'Zhiyuan Liang [CN]',
        result: 'W',
        table: 129,
      },
      '8': {
        name: 'Kelvin Duong [AU]',
        result: 'L',
        table: 98,
      },
      '9': {
        name: 'Hoong Yoong Ngiam [AU]',
        result: 'W',
        table: 117,
      },
    },
  },
  {
    name: 'Jamison Bulloch [AU]',
    placing: 172,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5231481481481483,
      oppopp: 0.5003925387027239,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Nathan Johnson [AU]',
        result: 'T',
        table: 39,
      },
      '2': {
        name: 'Fangrao Feng [AU]',
        result: 'T',
        table: 152,
      },
      '3': {
        name: 'Tommy Williams [AU]',
        result: 'W',
        table: 176,
      },
      '4': {
        name: 'Zherui Li [AU]',
        result: 'L',
        table: 105,
      },
      '5': {
        name: 'Edin Visca [AU]',
        result: 'L',
        table: 151,
      },
      '6': {
        name: 'Scott Minnekeer [AU]',
        result: 'L',
        table: 191,
      },
      '7': {
        name: 'Cameron Dimond [AU]',
        result: 'W',
        table: 193,
      },
      '8': {
        name: 'Riley Pattison [AU]',
        result: 'W',
        table: 159,
      },
      '9': {
        name: 'Huy Doan [AU]',
        result: 'W',
        table: 121,
      },
    },
  },
  {
    name: 'Sebastian Trisch [AU]',
    placing: 173,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5185185185185185,
      oppopp: 0.508994708994709,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Thomas Slater [AU]',
        result: 'L',
        table: 157,
      },
      '2': {
        name: 'Yasuyuki Handa [AU]',
        result: 'W',
        table: 256,
      },
      '3': {
        name: 'Beau McElroy [AU]',
        result: 'L',
        table: 113,
      },
      '4': {
        name: 'Dom Fleming [AU]',
        result: 'W',
        table: 194,
      },
      '5': {
        name: 'Sam Hynes [AU]',
        result: 'T',
        table: 127,
      },
      '6': {
        name: 'Raymond Chan [AU]',
        result: 'W',
        table: 110,
      },
      '7': {
        name: 'Adam Crust [AU]',
        result: 'T',
        table: 78,
      },
      '8': {
        name: 'Tom Bourke [AU]',
        result: 'L',
        table: 99,
      },
      '9': {
        name: 'Ethan Stoeckert [AU]',
        result: 'W',
        table: 119,
      },
    },
  },
  {
    name: 'Sebastian Rutter [NZ]',
    placing: 174,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5182098765432098,
      oppopp: 0.5333718523417597,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Su Fu [NZ]',
        result: 'W',
        table: 104,
      },
      '2': {
        name: 'Louis Pozzacchio [AU]',
        result: 'L',
        table: 69,
      },
      '3': {
        name: 'Rui Crocitta [AU]',
        result: 'T',
        table: 143,
      },
      '4': {
        name: 'Michael Hammond [AU]',
        result: 'L',
        table: 149,
      },
      '5': {
        name: 'Zachary Vella [AU]',
        result: 'W',
        table: 192,
      },
      '6': {
        name: 'Edmund Khoo [SG]',
        result: 'W',
        table: 133,
      },
      '7': {
        name: 'Brendan Cliffe [AU]',
        result: 'T',
        table: 66,
      },
      '8': {
        name: 'Nathan Johnson [AU]',
        result: 'W',
        table: 87,
      },
      '9': {
        name: 'Arnouluck Sirisay [AU]',
        result: 'L',
        table: 60,
      },
    },
  },
  {
    name: 'Sylas Golding [AU]',
    placing: 175,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5135802469135802,
      oppopp: 0.5308524397413286,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Natasha Kelly [AU]',
        result: 'W',
        table: 42,
      },
      '2': {
        name: 'Benjamin Rolfe [AU]',
        result: 'W',
        table: 13,
      },
      '3': {
        name: 'Manuel Cresdee [AU]',
        result: 'L',
        table: 37,
      },
      '4': {
        name: 'Ciaran Bradley [NZ]',
        result: 'W',
        table: 89,
      },
      '5': {
        name: 'Shang Jun Chua [AU]',
        result: 'L',
        table: 43,
      },
      '6': {
        name: 'Michael Taylor [AU]',
        result: 'T',
        table: 64,
      },
      '7': {
        name: 'Vincent Ma [NZ]',
        result: 'L',
        table: 97,
      },
      '8': {
        name: 'James Boynton [AU]',
        result: 'W',
        table: 103,
      },
      '9': {
        name: 'Ehren Roebuck [AU]',
        result: 'T',
        table: 75,
      },
    },
  },
  {
    name: 'Alan Quach [NZ]',
    placing: 176,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5070987654320988,
      oppopp: 0.54458210856359,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Riley Pattison [AU]',
        result: 'W',
        table: 179,
      },
      '2': {
        name: 'Kristopher Ryan-Clout [AU]',
        result: 'W',
        table: 64,
      },
      '3': {
        name: 'Natalie Millar [AU]',
        result: 'L',
        table: 17,
      },
      '4': {
        name: 'Beau McElroy [AU]',
        result: 'L',
        table: 56,
      },
      '5': {
        name: 'Satoya Takagi [JP]',
        result: 'T',
        table: 137,
      },
      '6': {
        name: 'Jer-Shyan Hwa [AU]',
        result: 'W',
        table: 120,
      },
      '7': {
        name: 'Ashton Bradley [AU]',
        result: 'T',
        table: 93,
      },
      '8': {
        name: 'Yin Jiang [AU]',
        result: 'W',
        table: 93,
      },
      '9': {
        name: 'Rostin Luo [NZ]',
        result: 'L',
        table: 61,
      },
    },
  },
  {
    name: 'Kadir Batuk [AU]',
    placing: 177,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5061728395061729,
      oppopp: 0.4939104448363708,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jordan Palmer [AU]',
        result: 'L',
        table: 219,
      },
      '2': {
        name: 'Lily Ly [AU]',
        result: 'W',
        table: 257,
      },
      '3': {
        name: 'James Volis [AU]',
        result: 'L',
        table: 124,
      },
      '4': {
        name: 'Vie Seminiano [AU]',
        result: 'T',
        table: 178,
      },
      '5': {
        name: 'Andrew Lam [AU]',
        result: 'W',
        table: 201,
      },
      '6': {
        name: 'Stefan Cocks [AU]',
        result: 'T',
        table: 109,
      },
      '7': {
        name: 'Sam Hynes [AU]',
        result: 'L',
        table: 127,
      },
      '8': {
        name: 'James Grkinic [AU]',
        result: 'W',
        table: 153,
      },
      '9': {
        name: 'YUTIAN SHOU [AU]',
        result: 'W',
        table: 123,
      },
    },
  },
  {
    name: 'James Volis [AU]',
    placing: 178,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5,
      oppopp: 0.5018004115226337,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Samuel Gianakis [AU]',
        result: 'L',
        table: 231,
      },
      '2': {
        name: 'Andrew Egan [AU]',
        result: 'W',
        table: 249,
      },
      '3': {
        name: 'Kadir Batuk [AU]',
        result: 'W',
        table: 124,
      },
      '4': {
        name: 'Marcus Raj [AU]',
        result: 'T',
        table: 64,
      },
      '5': {
        name: 'Ryan Bews [AU]',
        result: 'L',
        table: 64,
      },
      '6': {
        name: 'Jack Fone [AU]',
        result: 'W',
        table: 134,
      },
      '7': {
        name: 'Johnathan Heng [AU]',
        result: 'L',
        table: 86,
      },
      '8': {
        name: 'Sammy Madafiglio [AU]',
        result: 'W',
        table: 102,
      },
      '9': {
        name: 'Corey Munro [AU]',
        result: 'T',
        table: 69,
      },
    },
  },
  {
    name: 'Montana Drew [AU]',
    placing: 179,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5,
      oppopp: 0.4948916603678508,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Brayden S [AU]',
        result: 'L',
        table: 12,
      },
      '2': {
        name: 'Christopher Chan [AU]',
        result: 'W',
        table: 221,
      },
      '3': {
        name: 'Alfred Yang [AU]',
        result: 'W',
        table: 135,
      },
      '4': {
        name: 'James Xu [AU]',
        result: 'T',
        table: 79,
      },
      '5': {
        name: 'Jee Ong [AU]',
        result: 'L',
        table: 77,
      },
      '6': {
        name: 'Vincent Ma [NZ]',
        result: 'L',
        table: 121,
      },
      '7': {
        name: 'Bayley Janssen [AU]',
        result: 'W',
        table: 156,
      },
      '8': {
        name: 'Rogan Gilbertson [AU]',
        result: 'W',
        table: 121,
      },
      '9': {
        name: 'Hayden Barker [AU]',
        result: 'T',
        table: 68,
      },
    },
  },
  {
    name: 'Yasuyuki Handa [AU]',
    placing: 180,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.49537037037037035,
      oppopp: 0.5055919924554184,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Louis Pozzacchio [AU]',
        result: 'L',
        table: 58,
      },
      '2': {
        name: 'Sebastian Trisch [AU]',
        result: 'L',
        table: 256,
      },
      '3': {
        name: 'brian truong [AU]',
        result: 'W',
        table: 245,
      },
      '4': {
        name: 'Robin Sangwan [AU]',
        result: 'L',
        table: 176,
      },
      '5': {
        name: 'Dom Fleming [AU]',
        result: 'T',
        table: 208,
      },
      '6': {
        name: 'Donna Pedder [AU]',
        result: 'W',
        table: 197,
      },
      '7': {
        name: 'Raymond Chan [AU]',
        result: 'W',
        table: 165,
      },
      '8': {
        name: 'Ancel Franklin [AU]',
        result: 'W',
        table: 111,
      },
      '9': {
        name: 'Max Kennedy [AU]',
        result: 'T',
        table: 83,
      },
    },
  },
  {
    name: 'Hayden Barker [AU]',
    placing: 181,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.4938271604938272,
      oppopp: 0.5438786008230454,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Nicholas Choong [NZ]',
        result: 'W',
        table: 66,
      },
      '2': {
        name: 'Matthew Bennett [AU]',
        result: 'L',
        table: 80,
      },
      '3': {
        name: 'Chee How Liew [AU]',
        result: 'W',
        table: 97,
      },
      '4': {
        name: 'Skye Godfrey [NZ]',
        result: 'L',
        table: 94,
      },
      '5': {
        name: 'Peter Fay [AU]',
        result: 'W',
        table: 115,
      },
      '6': {
        name: 'Darrin Sin [AU]',
        result: 'L',
        table: 84,
      },
      '7': {
        name: 'Benjamin Small [AU]',
        result: 'T',
        table: 105,
      },
      '8': {
        name: 'William Rue [AU]',
        result: 'W',
        table: 123,
      },
      '9': {
        name: 'Montana Drew [AU]',
        result: 'T',
        table: 68,
      },
    },
  },
  {
    name: 'Sean Takemoto [AU]',
    placing: 182,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.49074074074074076,
      oppopp: 0.5135728982951205,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Alfred Yang [AU]',
        result: 'L',
        table: 187,
      },
      '2': {
        name: 'Fernando Monsalve [CL]',
        result: 'W',
        table: 184,
      },
      '3': {
        name: 'Jettano Posani [AU]',
        result: 'T',
        table: 137,
      },
      '4': {
        name: 'Harry West [AU]',
        result: 'T',
        table: 153,
      },
      '5': {
        name: 'Zak Hamilton [AU]',
        result: 'L',
        table: 149,
      },
      '6': {
        name: 'Connor Jackson [AU]',
        result: 'W',
        table: 187,
      },
      '7': {
        name: 'Tom Bourke [AU]',
        result: 'L',
        table: 135,
      },
      '8': {
        name: 'Antonio Sanabria [AU]',
        result: 'W',
        table: 156,
      },
      '9': {
        name: 'Julian Luvara [AU]',
        result: 'W',
        table: 118,
      },
    },
  },
  {
    name: 'Wern Wong [NZ]',
    placing: 183,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.4901234567901235,
      oppopp: 0.5097511267881638,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Sinan Gunaydin Okatan [AU]',
        result: 'L',
        table: 215,
      },
      '2': {
        name: 'Shaun Coupe [AU]',
        result: 'W',
        table: 250,
      },
      '3': {
        name: 'Christopher Fragiotta [AU]',
        result: 'W',
        table: 87,
      },
      '4': {
        name: 'Ayane Matsumoto [AU]',
        result: 'L',
        table: 47,
      },
      '5': {
        name: 'Michael Jiang [AU]',
        result: 'W',
        table: 131,
      },
      '6': {
        name: 'Matthew Anderson [AU]',
        result: 'L',
        table: 67,
      },
      '7': {
        name: 'xingyu huang [AT]',
        result: 'W',
        table: 108,
      },
      '8': {
        name: 'Luke Schmitt [AU]',
        result: 'T',
        table: 68,
      },
      '9': {
        name: 'Sam Clayfield [AU]',
        result: 'T',
        table: 92,
      },
    },
  },
  {
    name: 'Lily Huynh [AU]',
    placing: 184,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.48743386243386244,
      oppopp: 0.5211398757033678,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jesse Becker [AU]',
        result: 'L',
        table: 136,
      },
      '2': {
        name: 'Lewis Gall [NZ]',
        result: 'L',
        table: 182,
      },
      '3': {
        name: 'declan bradley [AU]',
        result: 'W',
        table: 223,
      },
      '4': {
        name: 'Matthew Anderson [AU]',
        result: 'W',
        table: 162,
      },
      '5': {
        name: 'Riley Pattison [AU]',
        result: 'T',
        table: 98,
      },
      '6': {
        name: 'Jack underwood [AU]',
        result: 'W',
        table: 138,
      },
      '7': {
        name: 'Sky Mathieson [AU]',
        result: 'W',
        table: 77,
      },
      '8': {
        name: 'Der Cherng Lee [NZ]',
        result: 'L',
        table: 51,
      },
      '9': {
        name: '玄 王 [CN]',
        result: 'T',
        table: 90,
      },
    },
  },
  {
    name: 'Yongxiang Liu [AU]',
    placing: 185,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.4872134038800706,
      oppopp: 0.5335393745975756,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'DONGXU LI [AU]',
        result: 'T',
        table: 96,
      },
      '2': {
        name: 'Jack Leong [AU]',
        result: 'L',
        table: 145,
      },
      '3': {
        name: 'Millie Hay [AU]',
        result: 'W',
        table: 217,
      },
      '4': {
        name: 'Ryan Mcculloch [AU]',
        result: 'W',
        table: 123,
      },
      '5': {
        name: 'Dylan Seery [AU]',
        result: 'W',
        table: 74,
      },
      '6': {
        name: 'Raymond Wong [AU]',
        result: 'L',
        table: 35,
      },
      '7': {
        name: 'asger balle [AU]',
        result: 'W',
        table: 96,
      },
      '8': {
        name: 'Blake Davies [AU]',
        result: 'T',
        table: 50,
      },
      '9': {
        name: 'James Xu [AU]',
        result: 'L',
        table: 66,
      },
    },
  },
  {
    name: 'Sinan Gunaydin Okatan [AU]',
    placing: 186,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.4853615520282186,
      oppopp: 0.5054323174743148,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Wern Wong [NZ]',
        result: 'W',
        table: 215,
      },
      '2': {
        name: 'Aiden Harrison [AU]',
        result: 'L',
        table: 8,
      },
      '3': {
        name: 'Katelin Altieri [AU]',
        result: 'W',
        table: 160,
      },
      '4': {
        name: 'Justin Truong [AU]',
        result: 'L',
        table: 50,
      },
      '5': {
        name: 'Rhys Theodoropoulos [AU]',
        result: 'L',
        table: 117,
      },
      '6': {
        name: 'Yao Ly [AU]',
        result: 'T',
        table: 150,
      },
      '7': {
        name: 'Brayden S [AU]',
        result: 'T',
        table: 143,
      },
      '8': {
        name: 'Calum McSpadden [AU]',
        result: 'W',
        table: 147,
      },
      '9': {
        name: 'Tommy Williams [AU]',
        result: 'W',
        table: 112,
      },
    },
  },
  {
    name: 'Lewis Stevens [AU]',
    placing: 187,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.4791666666666667,
      oppopp: 0.546406263122533,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Dom Fleming [AU]',
        result: 'W',
        table: 202,
      },
      '2': {
        name: 'Aaron van der Kolk [AU]',
        result: 'T',
        table: 55,
      },
      '3': {
        name: 'Jack Leong [AU]',
        result: 'T',
        table: 57,
      },
      '4': {
        name: 'Brendon Leehane [AU]',
        result: 'L',
        table: 103,
      },
      '5': {
        name: 'Stuart Flynn [AU]',
        result: 'L',
        table: 143,
      },
      '6': {
        name: 'Victor Su [AU]',
        result: 'W',
        table: 188,
      },
      '7': {
        name: 'Riley Pattison [AU]',
        result: 'W',
        table: 142,
      },
      '8': {
        name: 'Huy Doan [AU]',
        result: 'W',
        table: 92,
      },
      '9': {
        name: 'Stefan Cocks [AU]',
        result: 'L',
        table: 59,
      },
    },
  },
  {
    name: 'Marcus Raj [AU]',
    placing: 188,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.47354497354497355,
      oppopp: 0.49694682399708856,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Sam Connor [AU]',
        result: 'L',
        table: 174,
      },
      '2': {
        name: 'Jacob Mccall [AU]',
        result: 'W',
        table: 263,
      },
      '3': {
        name: 'Matthew Anderson [AU]',
        result: 'W',
        table: 89,
      },
      '4': {
        name: 'James Volis [AU]',
        result: 'T',
        table: 64,
      },
      '5': {
        name: 'Ancel Franklin [AU]',
        result: 'L',
        table: 86,
      },
      '6': {
        name: 'Matthew Caton [AU]',
        result: 'T',
        table: 131,
      },
      '7': {
        name: 'David Boyd [AU]',
        result: 'L',
        table: 136,
      },
      '8': {
        name: 'Mason Mitchell [AU]',
        result: 'W',
        table: 151,
      },
      '9': {
        name: 'Shaun Coupe [AU]',
        result: 'W',
        table: 113,
      },
    },
  },
  {
    name: 'Adam Crust [AU]',
    placing: 189,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.46311728395061735,
      oppopp: 0.49729698566669467,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Brittany Mitchell [AU]',
        result: 'L',
        table: 32,
      },
      '2': {
        name: 'Zhaolong Zhu [AU]',
        result: 'L',
        table: 239,
      },
      '3': {
        name: 'Ho Kit Chan [HK]',
        result: 'W',
        table: 239,
      },
      '4': {
        name: 'Marcus Dwyer [AU]',
        result: 'W',
        table: 201,
      },
      '5': {
        name: 'Kelvin Duong [AU]',
        result: 'T',
        table: 108,
      },
      '6': {
        name: 'Mark Smit [AU]',
        result: 'W',
        table: 106,
      },
      '7': {
        name: 'Sebastian Trisch [AU]',
        result: 'T',
        table: 78,
      },
      '8': {
        name: 'Vignesh Krishnan [AU]',
        result: 'W',
        table: 89,
      },
      '9': {
        name: 'David Stevens [AU]',
        result: 'L',
        table: 63,
      },
    },
  },
  {
    name: 'Winston Chui [AU]',
    placing: 190,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.4627425044091711,
      oppopp: 0.49359292328042326,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Paul Coletta [AU]',
        result: 'W',
        table: 86,
      },
      '2': {
        name: 'Siu Chun Lee [AU]',
        result: 'L',
        table: 72,
      },
      '3': {
        name: 'Josh Geltch [AU]',
        result: 'L',
        table: 131,
      },
      '4': {
        name: 'Ryan Maullin [AU]',
        result: 'L',
        table: 188,
      },
      '5': {
        name: 'Marcus Yap [AU]',
        result: 'W',
        table: 220,
      },
      '6': {
        name: 'David Burness [AU]',
        result: 'T',
        table: 162,
      },
      '7': {
        name: 'Daal Jaffers [AU]',
        result: 'T',
        table: 152,
      },
      '8': {
        name: 'Jackson Mcdonald [AU]',
        result: 'W',
        table: 161,
      },
      '9': {
        name: 'Jorja Doenau [AU]',
        result: 'W',
        table: 114,
      },
    },
  },
  {
    name: 'Jiahe Liang [AU]',
    placing: 191,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.4151234567901234,
      oppopp: 0.5156580687830687,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Thomas Thoonen [AU]',
        result: 'L',
        table: 71,
      },
      '2': {
        name: 'CHENG-HSIN YANG [AU]',
        result: 'L',
        table: 164,
      },
      '3': {
        name: 'Damien Commadeur [AU]',
        result: 'T',
        table: 243,
      },
      '4': {
        name: 'Millie Hay [AU]',
        result: 'W',
        table: 243,
      },
      '5': {
        name: 'Aura Ye [AU]',
        result: 'W',
        table: 187,
      },
      '6': {
        name: 'Saxon Wright [AU]',
        result: 'L',
        table: 122,
      },
      '7': {
        name: 'Peter Fay [AU]',
        result: 'T',
        table: 171,
      },
      '8': {
        name: 'Destyn Weir [AU]',
        result: 'W',
        table: 150,
      },
      '9': {
        name: 'Jacob Sparks [AU]',
        result: 'W',
        table: 116,
      },
    },
  },
  {
    name: 'Josephine Nucifora [AU]',
    placing: 192,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.41512345679012347,
      oppopp: 0.4665120394865765,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Todd Williams [AU]',
        result: 'L',
        table: 188,
      },
      '2': {
        name: 'Jorja Doenau [AU]',
        result: 'T',
        table: 215,
      },
      '3': {
        name: 'Nicholas Apostolou [AU]',
        result: 'T',
        table: 191,
      },
      '4': {
        name: 'Christopher Turner [AU]',
        result: 'W',
        table: 217,
      },
      '5': {
        name: 'David Edebohls [AU]',
        result: 'L',
        table: 146,
      },
      '6': {
        name: 'Ethan Stoeckert [AU]',
        result: 'L',
        table: 180,
      },
      '7': {
        name: 'Alex Hatzidakis [AU]',
        result: 'W',
        table: 197,
      },
      '8': {
        name: 'Julia Bridle [AU]',
        result: 'W',
        table: 152,
      },
      '9': {
        name: 'James Boynton [AU]',
        result: 'W',
        table: 125,
      },
    },
  },
  {
    name: 'Aydan Barrett [AU]',
    placing: 193,
    record: {
      wins: 4,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.4046516754850089,
      oppopp: 0.5043231747431483,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Sam Hynes [AU]',
        result: 'L',
        table: 79,
      },
      '2': {
        name: 'Daniel Pollard [AU]',
        result: 'W',
        table: 206,
      },
      '3': {
        name: 'Rogan Gilbertson [AU]',
        result: 'L',
        table: 141,
      },
      '4': {
        name: 'Morris Arnold [AU]',
        result: 'T',
        table: 205,
      },
      '5': {
        name: 'Angela Lewis [AU]',
        result: 'W',
        table: 171,
      },
      '6': {
        name: 'Mathew masefield [AU]',
        result: 'L',
        table: 126,
      },
      '7': {
        name: 'Harley Collins [AU]',
        result: 'W',
        table: 164,
      },
      '8': {
        name: 'Nathan Spry [AU]',
        result: 'T',
        table: 106,
      },
      '9': {
        name: 'Michael Gennaccaro [AU]',
        result: 'W',
        table: 115,
      },
    },
  },
  {
    name: 'Benjamin Kouzas [AU]',
    placing: 194,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.6172839506172839,
      oppopp: 0.53831569664903,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Kirryn Hatch [AU]',
        result: 'W',
        table: 262,
      },
      '2': {
        name: 'Mia Fountain [AU]',
        result: 'W',
        table: 99,
      },
      '3': {
        name: 'Darcy Ryan [AU]',
        result: 'L',
        table: 38,
      },
      '4': {
        name: 'Qihan Zhang [AU]',
        result: 'W',
        table: 73,
      },
      '5': {
        name: 'James Goreing [AU]',
        result: 'T',
        table: 29,
      },
      '6': {
        name: 'Nigel Yam [AU]',
        result: 'W',
        table: 53,
      },
      '7': {
        name: 'Aiden Harrison [AU]',
        result: 'L',
        table: 23,
      },
      '8': {
        name: 'Kazuo Nakamura [AU]',
        result: 'L',
        table: 53,
      },
      '9': {
        name: 'Jeremy Evans [AU]',
        result: 'L',
        table: 72,
      },
    },
  },
  {
    name: 'Matthew Anderson [AU]',
    placing: 195,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.6018518518518517,
      oppopp: 0.5205467372134039,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Cassie Joison [AU]',
        result: 'W',
        table: 250,
      },
      '2': {
        name: 'Jeremy Evans [AU]',
        result: 'L',
        table: 61,
      },
      '3': {
        name: 'Marco Giovannini [AU]',
        result: 'W',
        table: 140,
      },
      '4': {
        name: 'Harrison Pirotta [AU]',
        result: 'W',
        table: 62,
      },
      '5': {
        name: 'Simon Williams [AU]',
        result: 'L',
        table: 52,
      },
      '6': {
        name: 'Wern Wong [NZ]',
        result: 'W',
        table: 67,
      },
      '7': {
        name: 'Ryan Tan [UK]',
        result: 'L',
        table: 39,
      },
      '8': {
        name: 'Josh Geltch [AU]',
        result: 'T',
        table: 79,
      },
      '9': {
        name: 'Ayane Matsumoto [AU]',
        result: 'L',
        table: 82,
      },
    },
  },
  {
    name: 'Tait Tran [AU]',
    placing: 196,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.4375,
      opp: 0.5894097222222221,
      oppopp: 0.5008129409171075,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'BYE',
        result: 'W',
        table: 0,
      },
      '2': {
        name: 'Sam Hughes [AU]',
        result: 'W',
        table: 102,
      },
      '3': {
        name: 'Justin Teh [AU]',
        result: 'L',
        table: 46,
      },
      '4': {
        name: 'Benjamin Rolfe [AU]',
        result: 'T',
        table: 55,
      },
      '5': {
        name: 'James Williams [AU]',
        result: 'L',
        table: 67,
      },
      '6': {
        name: 'John Morris [AU]',
        result: 'W',
        table: 116,
      },
      '7': {
        name: 'charles limbrick [AU]',
        result: 'L',
        table: 87,
      },
      '8': {
        name: 'Jim Gow [AU]',
        result: 'W',
        table: 122,
      },
      '9': {
        name: 'Jay Tyrrell [AU]',
        result: 'L',
        table: 81,
      },
    },
  },
  {
    name: 'Tan Loc Thuan Nguyen [AU]',
    placing: 197,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.5793650793650793,
      oppopp: 0.5213060944542425,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jackson Doyle [AU]',
        result: 'W',
        table: 7,
      },
      '2': {
        name: 'Ryan Maullin [AU]',
        result: 'W',
        table: 71,
      },
      '3': {
        name: 'Blake Lobina [AU]',
        result: 'L',
        table: 19,
      },
      '4': {
        name: 'Huy Nguyen [AU]',
        result: 'W',
        table: 58,
      },
      '5': {
        name: 'Edward Mouanoutoua [AU]',
        result: 'L',
        table: 42,
      },
      '6': {
        name: 'Ehren Roebuck [AU]',
        result: 'L',
        table: 80,
      },
      '7': {
        name: 'Roman Addamo [AU]',
        result: 'W',
        table: 107,
      },
      '8': {
        name: 'Jay Tyrrell [AU]',
        result: 'T',
        table: 81,
      },
      '9': {
        name: 'Vie Seminiano [AU]',
        result: 'L',
        table: 80,
      },
    },
  },
  {
    name: 'Luke Schmitt [AU]',
    placing: 198,
    record: {
      wins: 3,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5771604938271605,
      oppopp: 0.5357412306486381,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Gabriel Smart [US]',
        result: 'L',
        table: 99,
      },
      '2': {
        name: 'James Futcher [AU]',
        result: 'T',
        table: 193,
      },
      '3': {
        name: 'James Breene [AU]',
        result: 'W',
        table: 190,
      },
      '4': {
        name: 'Jack Fone [AU]',
        result: 'W',
        table: 126,
      },
      '5': {
        name: 'Tibor Baranyay [AU]',
        result: 'T',
        table: 88,
      },
      '6': {
        name: 'Dante Sun [AU]',
        result: 'W',
        table: 101,
      },
      '7': {
        name: 'Harry West [AU]',
        result: 'T',
        table: 57,
      },
      '8': {
        name: 'Wern Wong [NZ]',
        result: 'T',
        table: 68,
      },
      '9': {
        name: 'Xaria-Sofia Sachse [AU]',
        result: 'L',
        table: 79,
      },
    },
  },
  {
    name: 'James Faulkner [AU]',
    placing: 199,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.5648148148148149,
      oppopp: 0.5404100529100528,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'declan bradley [AU]',
        result: 'W',
        table: 163,
      },
      '2': {
        name: 'Archie de Vries [AU]',
        result: 'W',
        table: 14,
      },
      '3': {
        name: 'David Younan [AU]',
        result: 'W',
        table: 30,
      },
      '4': {
        name: 'Nick Alvarez [US]',
        result: 'T',
        table: 14,
      },
      '5': {
        name: 'Andre Pollacchi [AU]',
        result: 'L',
        table: 16,
      },
      '6': {
        name: 'Noah Lin [CN]',
        result: 'W',
        table: 44,
      },
      '7': {
        name: 'Alfie Delgado [MX]',
        result: 'L',
        table: 26,
      },
      '8': {
        name: 'Christopher Cheung [AU]',
        result: 'L',
        table: 54,
      },
      '9': {
        name: 'Mitch Knuckey [AU]',
        result: 'L',
        table: 73,
      },
    },
  },
  {
    name: 'Jess Owers [AU]',
    placing: 200,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.5609567901234568,
      oppopp: 0.5259681804820695,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Fernando Monsalve [CL]',
        result: 'W',
        table: 234,
      },
      '2': {
        name: 'Joshua Sparks [AU]',
        result: 'W',
        table: 111,
      },
      '3': {
        name: 'ユキ OKA [JP]',
        result: 'T',
        table: 32,
      },
      '4': {
        name: 'Tom Sautelle [AU]',
        result: 'W',
        table: 30,
      },
      '5': {
        name: 'Corey Brown [AU]',
        result: 'W',
        table: 19,
      },
      '6': {
        name: 'Gabriel Smart [US]',
        result: 'L',
        table: 9,
      },
      '7': {
        name: 'James Williams [AU]',
        result: 'L',
        table: 34,
      },
      '8': {
        name: 'Aaron-Lee Cole [AU]',
        result: 'L',
        table: 61,
      },
      '9': {
        name: 'TE-AWHI TE ANGINA [AU]',
        result: 'L',
        table: 93,
      },
    },
  },
  {
    name: 'Thomas Quilliam [AU]',
    placing: 201,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.5598765432098766,
      oppopp: 0.5061455446376082,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Christian Hasbani [AU]',
        result: 'L',
        table: 15,
      },
      '2': {
        name: 'Anton Piccio [AU]',
        result: 'L',
        table: 245,
      },
      '3': {
        name: 'Shaun Kerr-Talbot [AU]',
        result: 'W',
        table: 237,
      },
      '4': {
        name: 'Noah Midgley [AU]',
        result: 'W',
        table: 184,
      },
      '5': {
        name: 'Jessamine Davis [AU]',
        result: 'W',
        table: 121,
      },
      '6': {
        name: 'Cody Matthewe [AU]',
        result: 'W',
        table: 62,
      },
      '7': {
        name: 'Lucas Hamilton-Foster [AU]',
        result: 'L',
        table: 42,
      },
      '8': {
        name: 'Nathan Woodcock [AU]',
        result: 'L',
        table: 70,
      },
      '9': {
        name: 'Sam Chen [US]',
        result: 'T',
        table: 102,
      },
    },
  },
  {
    name: 'Andy Truong [AU]',
    placing: 202,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.558641975308642,
      oppopp: 0.569948393452031,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Dan Reichelt [AU]',
        result: 'W',
        table: 121,
      },
      '2': {
        name: 'Sam Clayfield [AU]',
        result: 'W',
        table: 78,
      },
      '3': {
        name: 'Cody Matthewe [AU]',
        result: 'W',
        table: 13,
      },
      '4': {
        name: 'Aiden Harrison [AU]',
        result: 'T',
        table: 20,
      },
      '5': {
        name: 'Matthew Chong [AU]',
        result: 'L',
        table: 24,
      },
      '6': {
        name: 'Diego Gatica [CL]',
        result: 'W',
        table: 50,
      },
      '7': {
        name: 'Blake Lobina [AU]',
        result: 'L',
        table: 31,
      },
      '8': {
        name: 'Thomas Slater [AU]',
        result: 'L',
        table: 42,
      },
      '9': {
        name: 'Darcy Ryan [AU]',
        result: 'L',
        table: 76,
      },
    },
  },
  {
    name: 'Chung-Yin Johnny Chan [AU]',
    placing: 203,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.5555555555555556,
      oppopp: 0.506377551020408,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Chris Hughes [NZ]',
        result: 'W',
        table: 54,
      },
      '2': {
        name: 'Scott Minnekeer [AU]',
        result: 'W',
        table: 28,
      },
      '3': {
        name: 'Corey Brown [AU]',
        result: 'T',
        table: 23,
      },
      '4': {
        name: 'Xinfang Wang [AU]',
        result: 'L',
        table: 41,
      },
      '5': {
        name: 'Jacob McSpadden [AU]',
        result: 'L',
        table: 63,
      },
      '6': {
        name: 'Oliver Karmel-Shann [CA]',
        result: 'W',
        table: 139,
      },
      '7': {
        name: 'Blake Davies [AU]',
        result: 'L',
        table: 83,
      },
      '8': {
        name: 'Benjamin Small [AU]',
        result: 'W',
        table: 108,
      },
      '9': {
        name: 'Nigel Yam [AU]',
        result: 'L',
        table: 88,
      },
    },
  },
  {
    name: 'TJ Dixon [AU]',
    placing: 204,
    record: {
      wins: 4,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.5625,
      opp: 0.5535714285714286,
      oppopp: 0.5036272321428571,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Corey O’Leary [AU]',
        result: 'L',
        table: 222,
      },
      '2': {
        name: 'Kayla Stockwell [AU]',
        result: 'W',
        table: 240,
      },
      '3': {
        name: 'Stella Gabler [AU]',
        result: 'W',
        table: 106,
      },
      '4': {
        name: 'Robert Seymour [AU]',
        result: 'L',
        table: 87,
      },
      '5': {
        name: 'Michael Gleeson [AU]',
        result: 'W',
        table: 116,
      },
      '6': {
        name: 'Harrison Pirotta [AU]',
        result: 'T',
        table: 77,
      },
      '7': {
        name: 'Denham Smith [AU]',
        result: 'W',
        table: 73,
      },
      '8': {
        name: 'Cassie Joison [AU]',
        result: 'L',
        table: 45,
      },
    },
  },
  {
    name: 'Tristan Young [AU]',
    placing: 205,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.54320987654321,
      oppopp: 0.5319392391730354,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Benjamin Small [AU]',
        result: 'W',
        table: 36,
      },
      '2': {
        name: 'Stella Gabler [AU]',
        result: 'W',
        table: 89,
      },
      '3': {
        name: 'Matthew Chong [AU]',
        result: 'L',
        table: 36,
      },
      '4': {
        name: 'Ancel Franklin [AU]',
        result: 'T',
        table: 51,
      },
      '5': {
        name: 'Tom Sautelle [AU]',
        result: 'W',
        table: 87,
      },
      '6': {
        name: 'charles limbrick [AU]',
        result: 'W',
        table: 46,
      },
      '7': {
        name: 'Xinfang Wang [AU]',
        result: 'L',
        table: 29,
      },
      '8': {
        name: 'Jacob McSpadden [AU]',
        result: 'L',
        table: 43,
      },
      '9': {
        name: 'Michael Wilson [AU]',
        result: 'L',
        table: 94,
      },
    },
  },
  {
    name: 'Deacan Page [AU]',
    placing: 206,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.5393518518518517,
      oppopp: 0.5519149274936312,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Dylan van der Riet [AU]',
        result: 'W',
        table: 242,
      },
      '2': {
        name: 'Christian Viti [AU]',
        result: 'L',
        table: 46,
      },
      '3': {
        name: 'Archie de Vries [AU]',
        result: 'W',
        table: 150,
      },
      '4': {
        name: 'Sam Hughes [AU]',
        result: 'T',
        table: 86,
      },
      '5': {
        name: 'Ash Nassiri [NZ]',
        result: 'L',
        table: 71,
      },
      '6': {
        name: 'Benjamin Rolfe [AU]',
        result: 'W',
        table: 125,
      },
      '7': {
        name: 'Vincent Sutinah [AU]',
        result: 'L',
        table: 67,
      },
      '8': {
        name: 'Aaron van der Kolk [AU]',
        result: 'W',
        table: 119,
      },
      '9': {
        name: 'charles limbrick [AU]',
        result: 'L',
        table: 87,
      },
    },
  },
  {
    name: 'Dante Sun [AU]',
    placing: 207,
    record: {
      wins: 3,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5385802469135803,
      oppopp: 0.5125557270233198,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jeb Collins [AU]',
        result: 'T',
        table: 217,
      },
      '2': {
        name: 'Vincent Ma [NZ]',
        result: 'W',
        table: 131,
      },
      '3': {
        name: 'Sam Chen [US]',
        result: 'W',
        table: 58,
      },
      '4': {
        name: 'Christian Hasbani [AU]',
        result: 'L',
        table: 27,
      },
      '5': {
        name: 'Alex Wu [AU]',
        result: 'T',
        table: 75,
      },
      '6': {
        name: 'Luke Schmitt [AU]',
        result: 'L',
        table: 101,
      },
      '7': {
        name: 'Scott Minnekeer [AU]',
        result: 'T',
        table: 141,
      },
      '8': {
        name: 'Yuhao Xia [AU]',
        result: 'T',
        table: 131,
      },
      '9': {
        name: 'Paul Coletta [AU]',
        result: 'W',
        table: 138,
      },
    },
  },
  {
    name: 'Michael Taylor [AU]',
    placing: 208,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.5370370370370371,
      oppopp: 0.5071673525377229,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Morgan Squire [AU]',
        result: 'W',
        table: 137,
      },
      '2': {
        name: 'Thomas Slater [AU]',
        result: 'L',
        table: 94,
      },
      '3': {
        name: 'Noah Midgley [AU]',
        result: 'W',
        table: 85,
      },
      '4': {
        name: 'KODY TRAN [AU]',
        result: 'W',
        table: 93,
      },
      '5': {
        name: 'Robert Seymour [AU]',
        result: 'L',
        table: 50,
      },
      '6': {
        name: 'Sylas Golding [AU]',
        result: 'T',
        table: 64,
      },
      '7': {
        name: 'Callum Walker [AU]',
        result: 'L',
        table: 71,
      },
      '8': {
        name: 'Satoya Takagi [JP]',
        result: 'L',
        table: 100,
      },
      '9': {
        name: 'Jer-Shyan Hwa [AU]',
        result: 'W',
        table: 139,
      },
    },
  },
  {
    name: 'Daniel Mielnik [AU]',
    placing: 209,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.5330908289241623,
      oppopp: 0.5049546485260772,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jim Gow [AU]',
        result: 'T',
        table: 122,
      },
      '2': {
        name: 'Khristian Embog [AU]',
        result: 'W',
        table: 128,
      },
      '3': {
        name: 'Jorge Soria [AU]',
        result: 'L',
        table: 83,
      },
      '4': {
        name: 'James Neilson [AU]',
        result: 'W',
        table: 137,
      },
      '5': {
        name: 'Jack Leong [AU]',
        result: 'L',
        table: 59,
      },
      '6': {
        name: 'Bee Blackwell [AU]',
        result: 'W',
        table: 114,
      },
      '7': {
        name: 'Satoya Takagi [JP]',
        result: 'W',
        table: 92,
      },
      '8': {
        name: 'Jake Cruwys [AU]',
        result: 'L',
        table: 47,
      },
      '9': {
        name: 'Callum Walker [AU]',
        result: 'L',
        table: 78,
      },
    },
  },
  {
    name: 'David Boyd [AU]',
    placing: 210,
    record: {
      wins: 3,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5324074074074073,
      oppopp: 0.49851680384087793,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Peter Rennie [AU]',
        result: 'W',
        table: 221,
      },
      '2': {
        name: 'Stuart Flynn [AU]',
        result: 'T',
        table: 21,
      },
      '3': {
        name: 'Sable Wang-Wills [AU]',
        result: 'W',
        table: 53,
      },
      '4': {
        name: 'xinzhe hou [AU]',
        result: 'T',
        table: 31,
      },
      '5': {
        name: 'Jimmy Nguyen [AU]',
        result: 'L',
        table: 55,
      },
      '6': {
        name: 'Charles Li [AU]',
        result: 'L',
        table: 94,
      },
      '7': {
        name: 'Marcus Raj [AU]',
        result: 'W',
        table: 136,
      },
      '8': {
        name: 'Zak Hamilton [AU]',
        result: 'T',
        table: 97,
      },
      '9': {
        name: 'Lawrence Lam [AU]',
        result: 'T',
        table: 100,
      },
    },
  },
  {
    name: 'Brittany Mitchell [AU]',
    placing: 211,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.5308641975308643,
      oppopp: 0.49923574368018797,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Adam Crust [AU]',
        result: 'W',
        table: 32,
      },
      '2': {
        name: '[Table 1]Sam Hendle [AU]',
        result: 'L',
        table: 54,
      },
      '3': {
        name: 'Stephen Todorovic [AU]',
        result: 'L',
        table: 132,
      },
      '4': {
        name: 'Christopher Ganal [AU]',
        result: 'W',
        table: 197,
      },
      '5': {
        name: 'Alexander Jemison [AU]',
        result: 'W',
        table: 135,
      },
      '6': {
        name: 'Zherui Li [AU]',
        result: 'L',
        table: 66,
      },
      '7': {
        name: 'Tim Haffmanns [DE]',
        result: 'L',
        table: 121,
      },
      '8': {
        name: 'Michael Jiang [AU]',
        result: 'T',
        table: 137,
      },
      '9': {
        name: 'Sky Mathieson [AU]',
        result: 'W',
        table: 132,
      },
    },
  },
  {
    name: 'KODY TRAN [AU]',
    placing: 212,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.5300925925925927,
      oppopp: 0.4923332475994513,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jack underwood [AU]',
        result: 'W',
        table: 208,
      },
      '2': {
        name: 'James Goreing [AU]',
        result: 'L',
        table: 3,
      },
      '3': {
        name: 'Jason Slifka [AU]',
        result: 'W',
        table: 126,
      },
      '4': {
        name: 'Michael Taylor [AU]',
        result: 'L',
        table: 93,
      },
      '5': {
        name: 'Will Ladner [AU]',
        result: 'T',
        table: 126,
      },
      '6': {
        name: 'Joshua Sparks [AU]',
        result: 'W',
        table: 145,
      },
      '7': {
        name: 'Calum Thatcher [AU]',
        result: 'W',
        table: 89,
      },
      '8': {
        name: 'Keegan Burt [AU]',
        result: 'L',
        table: 48,
      },
      '9': {
        name: 'Robin Sangwan [AU]',
        result: 'L',
        table: 85,
      },
    },
  },
  {
    name: 'Ancel Franklin [AU]',
    placing: 213,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.5277777777777778,
      oppopp: 0.5132499090171048,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Xinfang Wang [AU]',
        result: 'L',
        table: 159,
      },
      '2': {
        name: 'Marcus Yap [AU]',
        result: 'W',
        table: 216,
      },
      '3': {
        name: 'Jesse Brewer [AU]',
        result: 'W',
        table: 95,
      },
      '4': {
        name: 'Tristan Young [AU]',
        result: 'T',
        table: 51,
      },
      '5': {
        name: 'Marcus Raj [AU]',
        result: 'W',
        table: 86,
      },
      '6': {
        name: 'Jettano Posani [AU]',
        result: 'L',
        table: 43,
      },
      '7': {
        name: 'Thomas Slater [AU]',
        result: 'L',
        table: 72,
      },
      '8': {
        name: 'Yasuyuki Handa [AU]',
        result: 'L',
        table: 111,
      },
      '9': {
        name: 'Chloe Appleby [AU]',
        result: 'W',
        table: 145,
      },
    },
  },
  {
    name: 'Corey Brown [AU]',
    placing: 214,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.5270061728395062,
      oppopp: 0.5195534489515972,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Kosta Spanoudakis [AU]',
        result: 'W',
        table: 267,
      },
      '2': {
        name: 'Nathan Woodcock [AU]',
        result: 'W',
        table: 103,
      },
      '3': {
        name: 'Chung-Yin Johnny Chan [AU]',
        result: 'T',
        table: 23,
      },
      '4': {
        name: 'Mitch Knuckey [AU]',
        result: 'W',
        table: 33,
      },
      '5': {
        name: 'Jess Owers [AU]',
        result: 'L',
        table: 19,
      },
      '6': {
        name: 'Alfie Delgado [MX]',
        result: 'L',
        table: 52,
      },
      '7': {
        name: 'Harrison Pirotta [AU]',
        result: 'L',
        table: 70,
      },
      '8': {
        name: 'Connor Tobin-Underwood [AU]',
        result: 'W',
        table: 116,
      },
      '9': {
        name: 'Chris Currenti [AU]',
        result: 'L',
        table: 89,
      },
    },
  },
  {
    name: 'Rogan Gilbertson [AU]',
    placing: 215,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.5259259259259259,
      oppopp: 0.4996947873799725,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Ryan Maullin [AU]',
        result: 'L',
        table: 107,
      },
      '2': {
        name: 'Fletcher Konynenburg [AU]',
        result: 'W',
        table: 197,
      },
      '3': {
        name: 'Aydan Barrett [AU]',
        result: 'W',
        table: 141,
      },
      '4': {
        name: 'Vincent Sutinah [AU]',
        result: 'L',
        table: 80,
      },
      '5': {
        name: 'Alex Crockford [AU]',
        result: 'W',
        table: 138,
      },
      '6': {
        name: 'Chris Currenti [AU]',
        result: 'T',
        table: 83,
      },
      '7': {
        name: 'Nigel Tan [NZ]',
        result: 'L',
        table: 68,
      },
      '8': {
        name: 'Montana Drew [AU]',
        result: 'L',
        table: 121,
      },
      '9': {
        name: 'asger balle [AU]',
        result: 'W',
        table: 143,
      },
    },
  },
  {
    name: 'thomas lackington [AU]',
    placing: 216,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.5043209876543211,
      oppopp: 0.5429431216931218,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Darcy Ryan [AU]',
        result: 'L',
        table: 113,
      },
      '2': {
        name: 'Dylan van der Riet [AU]',
        result: 'T',
        table: 208,
      },
      '3': {
        name: 'Stuart McKinnis [AU]',
        result: 'W',
        table: 219,
      },
      '4': {
        name: 'Peter Lo [AU]',
        result: 'W',
        table: 145,
      },
      '5': {
        name: 'Edmund Khoo [SG]',
        result: 'W',
        table: 83,
      },
      '6': {
        name: 'Nathan Spry [AU]',
        result: 'W',
        table: 51,
      },
      '7': {
        name: 'Jake Dunstan [AU]',
        result: 'L',
        table: 30,
      },
      '8': {
        name: 'Nigel Tan [NZ]',
        result: 'L',
        table: 57,
      },
      '9': {
        name: 'Josh Geltch [AU]',
        result: 'L',
        table: 86,
      },
    },
  },
  {
    name: 'Ryan Burt [AU]',
    placing: 217,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.504320987654321,
      oppopp: 0.504400352733686,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Justin Teh [AU]',
        result: 'L',
        table: 146,
      },
      '2': {
        name: 'Ben McPeake [AU]',
        result: 'W',
        table: 173,
      },
      '3': {
        name: 'Carmen Harris [AU]',
        result: 'W',
        table: 151,
      },
      '4': {
        name: 'Alex Crockford [AU]',
        result: 'W',
        table: 81,
      },
      '5': {
        name: 'Haru Nishikawa [JP]',
        result: 'L',
        table: 34,
      },
      '6': {
        name: 'Kirryn Hatch [AU]',
        result: 'L',
        table: 61,
      },
      '7': {
        name: 'troy fisher [AU]',
        result: 'L',
        table: 101,
      },
      '8': {
        name: 'Melinda Li [NZ]',
        result: 'T',
        table: 128,
      },
      '9': {
        name: 'Benjamin Small [AU]',
        result: 'W',
        table: 136,
      },
    },
  },
  {
    name: 'Eric Sanson [NZ]',
    placing: 218,
    record: {
      wins: 3,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.5013227513227513,
      oppopp: 0.46145369670501946,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Lucas Hamilton-Foster [AU]',
        result: 'L',
        table: 235,
      },
      '2': {
        name: 'Calum McSpadden [AU]',
        result: 'T',
        table: 175,
      },
      '3': {
        name: 'Lawrence Lam [AU]',
        result: 'T',
        table: 218,
      },
      '4': {
        name: 'Tyler Gilbey [AU]',
        result: 'T',
        table: 216,
      },
      '5': {
        name: 'James Higgins [AU]',
        result: 'W',
        table: 206,
      },
      '6': {
        name: 'Yuhao Xia [AU]',
        result: 'W',
        table: 172,
      },
      '7': {
        name: 'Samuel Gianakis [AU]',
        result: 'W',
        table: 112,
      },
      '8': {
        name: 'troy fisher [AU]',
        result: 'L',
        table: 78,
      },
      '9': {
        name: 'Jordan Stamatopoulos [AU]',
        result: 'T',
        table: 97,
      },
    },
  },
  {
    name: 'Charlie Queen [AU]',
    placing: 219,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.4994047619047619,
      oppopp: 0.5153064111447049,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Skye Godfrey [NZ]',
        result: 'L',
        table: 78,
      },
      '2': {
        name: 'Alexander Bray [AU]',
        result: 'T',
        table: 180,
      },
      '3': {
        name: 'Jacob Sparks [AU]',
        result: 'W',
        table: 208,
      },
      '4': {
        name: 'Zhaolong Zhu [AU]',
        result: 'W',
        table: 120,
      },
      '5': {
        name: 'fayyadh salleh [SG]',
        result: 'L',
        table: 70,
      },
      '6': {
        name: 'Callum Walker [AU]',
        result: 'L',
        table: 112,
      },
      '7': {
        name: 'Yao Ly [AU]',
        result: 'W',
        table: 173,
      },
      '8': {
        name: 'Stefan Djordjevic [AU]',
        result: 'W',
        table: 104,
      },
      '9': {
        name: 'Johnathan Heng [AU]',
        result: 'L',
        table: 91,
      },
    },
  },
  {
    name: 'Justin Hoy [AU]',
    placing: 220,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.49537037037037046,
      oppopp: 0.49842678326474615,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Destyn Weir [AU]',
        result: 'W',
        table: 70,
      },
      '2': {
        name: 'Sineth Akmeemana [AU]',
        result: 'L',
        table: 48,
      },
      '3': {
        name: 'James Williams [AU]',
        result: 'L',
        table: 161,
      },
      '4': {
        name: 'Raymond Chan [AU]',
        result: 'T',
        table: 200,
      },
      '5': {
        name: 'Mohd Taufiq Mohd Alwi [SG]',
        result: 'W',
        table: 195,
      },
      '6': {
        name: 'Johnathan Heng [AU]',
        result: 'L',
        table: 123,
      },
      '7': {
        name: 'Brandon Wilson [AU]',
        result: 'L',
        table: 148,
      },
      '8': {
        name: 'Alvin Hall [AU]',
        result: 'W',
        table: 165,
      },
      '9': {
        name: 'Stella Gabler [AU]',
        result: 'W',
        table: 128,
      },
    },
  },
  {
    name: 'Scott Minnekeer [AU]',
    placing: 221,
    record: {
      wins: 3,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.4938271604938272,
      oppopp: 0.5283681167940428,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Vincent Sutinah [AU]',
        result: 'W',
        table: 130,
      },
      '2': {
        name: 'Chung-Yin Johnny Chan [AU]',
        result: 'L',
        table: 28,
      },
      '3': {
        name: 'Tyler Bishop [AU]',
        result: 'T',
        table: 94,
      },
      '4': {
        name: 'Vincent Ma [NZ]',
        result: 'L',
        table: 144,
      },
      '5': {
        name: 'Holly Wang [AU]',
        result: 'T',
        table: 178,
      },
      '6': {
        name: 'Jamison Bulloch [AU]',
        result: 'W',
        table: 191,
      },
      '7': {
        name: 'Dante Sun [AU]',
        result: 'T',
        table: 141,
      },
      '8': {
        name: 'Chloe Appleby [AU]',
        result: 'T',
        table: 130,
      },
      '9': {
        name: 'Fabrice Rivalland [AU]',
        result: 'W',
        table: 126,
      },
    },
  },
  {
    name: 'xingyu huang [AT]',
    placing: 222,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.4938271604938272,
      oppopp: 0.5062004843089499,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Natalie Millar [AU]',
        result: 'L',
        table: 254,
      },
      '2': {
        name: 'Blake Davies [AU]',
        result: 'L',
        table: 170,
      },
      '3': {
        name: 'Christopher Chan [AU]',
        result: 'W',
        table: 232,
      },
      '4': {
        name: 'Kenneth Peake [AU]',
        result: 'W',
        table: 198,
      },
      '5': {
        name: 'David Burness [AU]',
        result: 'W',
        table: 104,
      },
      '6': {
        name: 'Robbie Caldwell [AU]',
        result: 'L',
        table: 69,
      },
      '7': {
        name: 'Wern Wong [NZ]',
        result: 'L',
        table: 108,
      },
      '8': {
        name: 'Stuart Flynn [AU]',
        result: 'T',
        table: 135,
      },
      '9': {
        name: 'Qihan Zhang [AU]',
        result: 'W',
        table: 133,
      },
    },
  },
  {
    name: 'Jake Lazzari [AU]',
    placing: 223,
    record: {
      wins: 3,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.48996913580246915,
      oppopp: 0.5338627400548697,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jorja Doenau [AU]',
        result: 'W',
        table: 111,
      },
      '2': {
        name: 'David Frans Daritan [AU]',
        result: 'T',
        table: 83,
      },
      '3': {
        name: 'Jacques Gouws [NZ]',
        result: 'T',
        table: 82,
      },
      '4': {
        name: 'Aaron Woodrow [AU]',
        result: 'T',
        table: 101,
      },
      '5': {
        name: 'Calum Thatcher [AU]',
        result: 'T',
        table: 132,
      },
      '6': {
        name: 'Jake Cruwys [AU]',
        result: 'L',
        table: 117,
      },
      '7': {
        name: 'Archie de Vries [AU]',
        result: 'L',
        table: 154,
      },
      '8': {
        name: 'william wang [AU]',
        result: 'W',
        table: 173,
      },
      '9': {
        name: 'Stuart Flynn [AU]',
        result: 'W',
        table: 144,
      },
    },
  },
  {
    name: 'Fletcher Konynenburg [AU]',
    placing: 224,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.48456790123456783,
      oppopp: 0.501406035665295,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Paul Ashton [AU]',
        result: 'L',
        table: 56,
      },
      '2': {
        name: 'Rogan Gilbertson [AU]',
        result: 'L',
        table: 197,
      },
      '3': {
        name: 'Hoi Hang Ho [AU]',
        result: 'W',
        table: 261,
      },
      '4': {
        name: 'Kenny Potter [NZ]',
        result: 'L',
        table: 161,
      },
      '5': {
        name: 'Kenneth Peake [AU]',
        result: 'W',
        table: 215,
      },
      '6': {
        name: 'Georgia Trimble [AU]',
        result: 'T',
        table: 152,
      },
      '7': {
        name: 'Jack underwood [AU]',
        result: 'W',
        table: 162,
      },
      '8': {
        name: 'James Futcher [AU]',
        result: 'W',
        table: 125,
      },
      '9': {
        name: 'Shane Quinn [AU]',
        result: 'L',
        table: 84,
      },
    },
  },
  {
    name: 'Benjamin Rolfe [AU]',
    placing: 225,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.4807098765432099,
      oppopp: 0.49660401969429746,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Michael Gennaccaro [AU]',
        result: 'W',
        table: 14,
      },
      '2': {
        name: 'Sylas Golding [AU]',
        result: 'L',
        table: 13,
      },
      '3': {
        name: 'Jack underwood [AU]',
        result: 'W',
        table: 167,
      },
      '4': {
        name: 'Tait Tran [AU]',
        result: 'T',
        table: 55,
      },
      '5': {
        name: 'Jake Dunstan [AU]',
        result: 'L',
        table: 73,
      },
      '6': {
        name: 'Deacan Page [AU]',
        result: 'L',
        table: 125,
      },
      '7': {
        name: 'James Boynton [AU]',
        result: 'L',
        table: 146,
      },
      '8': {
        name: 'Jack Riley [AU]',
        result: 'W',
        table: 177,
      },
      '9': {
        name: 'Michael Jiang [AU]',
        result: 'W',
        table: 140,
      },
    },
  },
  {
    name: 'John Morris [AU]',
    placing: 226,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.4782848324514991,
      oppopp: 0.4997444605414182,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Hugo Pearce [AU]',
        result: 'W',
        table: 162,
      },
      '2': {
        name: 'Benjamin Hall [AU]',
        result: 'L',
        table: 66,
      },
      '3': {
        name: 'Thomas Lamprey [AU]',
        result: 'T',
        table: 102,
      },
      '4': {
        name: 'Josh Ng [AU]',
        result: 'W',
        table: 112,
      },
      '5': {
        name: 'Aaron-Lee Cole [AU]',
        result: 'L',
        table: 79,
      },
      '6': {
        name: 'Tait Tran [AU]',
        result: 'L',
        table: 116,
      },
      '7': {
        name: 'Tyler Gilbey [AU]',
        result: 'W',
        table: 145,
      },
      '8': {
        name: 'Paul Coletta [AU]',
        result: 'W',
        table: 117,
      },
      '9': {
        name: 'Kevin Min [AU]',
        result: 'L',
        table: 70,
      },
    },
  },
  {
    name: 'Gareth Murphy [AU]',
    placing: 227,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.47530864197530864,
      oppopp: 0.4875195963158926,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Andrew Egan [AU]',
        result: 'W',
        table: 118,
      },
      '2': {
        name: 'James Kostoulias [AU]',
        result: 'T',
        table: 34,
      },
      '3': {
        name: 'Markus Janssen [AU]',
        result: 'W',
        table: 67,
      },
      '4': {
        name: 'Raymond Wong [AU]',
        result: 'L',
        table: 26,
      },
      '5': {
        name: 'Arnouluck Sirisay [AU]',
        result: 'L',
        table: 68,
      },
      '6': {
        name: 'Ferdi Mak [AU]',
        result: 'L',
        table: 132,
      },
      '7': {
        name: 'Timothy Uyeda [AU]',
        result: 'L',
        table: 144,
      },
      '8': {
        name: 'Morgan Squire [AU]',
        result: 'W',
        table: 172,
      },
      '9': {
        name: 'Su Fu [NZ]',
        result: 'W',
        table: 129,
      },
    },
  },
  {
    name: 'Alex Wu [AU]',
    placing: 228,
    record: {
      wins: 3,
      losses: 1,
      ties: 4,
    },
    resistances: {
      self: 0.625,
      opp: 0.47395833333333337,
      oppopp: 0.5143074156746033,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Mitch Knuckey [AU]',
        result: 'L',
        table: 214,
      },
      '2': {
        name: 'Sam Lao [AU]',
        result: 'T',
        table: 248,
      },
      '3': {
        name: 'Jorja Doenau [AU]',
        result: 'W',
        table: 204,
      },
      '4': {
        name: 'Joshua Crisp [AU]',
        result: 'W',
        table: 155,
      },
      '5': {
        name: 'Dante Sun [AU]',
        result: 'T',
        table: 75,
      },
      '6': {
        name: 'David Edebohls [AU]',
        result: 'T',
        table: 95,
      },
      '7': {
        name: 'Michael Jiang [AU]',
        result: 'W',
        table: 115,
      },
      '8': {
        name: 'Ida Nero [AU]',
        result: 'T',
        table: 82,
      },
    },
  },
  {
    name: 'Sam Chen [US]',
    placing: 229,
    record: {
      wins: 3,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.4722222222222223,
      oppopp: 0.5057928546933176,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Marcus Dwyer [AU]',
        result: 'W',
        table: 256,
      },
      '2': {
        name: 'David Burness [AU]',
        result: 'T',
        table: 91,
      },
      '3': {
        name: 'Dante Sun [AU]',
        result: 'L',
        table: 58,
      },
      '4': {
        name: 'Benjamin Woodward [AU]',
        result: 'T',
        table: 114,
      },
      '5': {
        name: 'Rory Sharpe [AU]',
        result: 'L',
        table: 160,
      },
      '6': {
        name: 'Kylara Paulo [AU]',
        result: 'W',
        table: 189,
      },
      '7': {
        name: 'Jordan Stamatopoulos [AU]',
        result: 'T',
        table: 134,
      },
      '8': {
        name: 'Roman Addamo [AU]',
        result: 'W',
        table: 132,
      },
      '9': {
        name: 'Thomas Quilliam [AU]',
        result: 'T',
        table: 102,
      },
    },
  },
  {
    name: 'Zachary Vella [AU]',
    placing: 230,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.4654320987654321,
      oppopp: 0.49763913384283753,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Tim Franklin [AU]',
        result: 'L',
        table: 261,
      },
      '2': {
        name: 'Paul Coletta [AU]',
        result: 'L',
        table: 231,
      },
      '3': {
        name: 'Steven Hector [AU]',
        result: 'W',
        table: 262,
      },
      '4': {
        name: 'Kristopher Ryan-Clout [AU]',
        result: 'T',
        table: 204,
      },
      '5': {
        name: 'Sebastian Rutter [NZ]',
        result: 'L',
        table: 192,
      },
      '6': {
        name: 'Nicholas Apostolou [AU]',
        result: 'W',
        table: 208,
      },
      '7': {
        name: 'Joshua Sparks [AU]',
        result: 'W',
        table: 147,
      },
      '8': {
        name: 'Jake Herden [AU]',
        result: 'W',
        table: 101,
      },
      '9': {
        name: 'Sameer Sangwan [AU]',
        result: 'L',
        table: 77,
      },
    },
  },
  {
    name: 'Fangrao Feng [AU]',
    placing: 231,
    record: {
      wins: 3,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.4629629629629629,
      oppopp: 0.476775916127768,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Rory Beniuk [AU]',
        result: 'T',
        table: 108,
      },
      '2': {
        name: 'Jamison Bulloch [AU]',
        result: 'T',
        table: 152,
      },
      '3': {
        name: 'Zherui Li [AU]',
        result: 'L',
        table: 171,
      },
      '4': {
        name: 'Nicholas Apostolou [AU]',
        result: 'T',
        table: 212,
      },
      '5': {
        name: 'Joshua Grob [AU]',
        result: 'W',
        table: 216,
      },
      '6': {
        name: 'Xaria-Sofia Sachse [AU]',
        result: 'L',
        table: 157,
      },
      '7': {
        name: 'Alexander Jemison [AU]',
        result: 'T',
        table: 184,
      },
      '8': {
        name: 'Steven Hector [AU]',
        result: 'W',
        table: 176,
      },
      '9': {
        name: 'Calvin Prosser [AU]',
        result: 'W',
        table: 147,
      },
    },
  },
  {
    name: 'Timothy Uyeda [AU]',
    placing: 232,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.4407407407407408,
      oppopp: 0.49796758209456626,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Corey Matthews [AU]',
        result: 'T',
        table: 158,
      },
      '2': {
        name: 'Andre Pollacchi [AU]',
        result: 'L',
        table: 120,
      },
      '3': {
        name: 'Toby Frost [AU]',
        result: 'W',
        table: 193,
      },
      '4': {
        name: 'Hayden Matthews [AU]',
        result: 'L',
        table: 138,
      },
      '5': {
        name: 'Matthew Caton [AU]',
        result: 'L',
        table: 182,
      },
      '6': {
        name: 'Tayla-Jane Lovett [AU]',
        result: 'W',
        table: 202,
      },
      '7': {
        name: 'Gareth Murphy [AU]',
        result: 'W',
        table: 144,
      },
      '8': {
        name: 'Archie de Vries [AU]',
        result: 'W',
        table: 109,
      },
      '9': {
        name: 'Cameron Shenoy [US]',
        result: 'L',
        table: 74,
      },
    },
  },
  {
    name: 'Raymond Chan [AU]',
    placing: 233,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.4336419753086419,
      oppopp: 0.47839751126788166,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Simon Higgins [AU]',
        result: 'W',
        table: 251,
      },
      '2': {
        name: 'Robert Seymour [AU]',
        result: 'L',
        table: 68,
      },
      '3': {
        name: 'Riley Pattison [AU]',
        result: 'L',
        table: 157,
      },
      '4': {
        name: 'Justin Hoy [AU]',
        result: 'T',
        table: 200,
      },
      '5': {
        name: 'Matt Annable [AU]',
        result: 'W',
        table: 176,
      },
      '6': {
        name: 'Sebastian Trisch [AU]',
        result: 'L',
        table: 110,
      },
      '7': {
        name: 'Yasuyuki Handa [AU]',
        result: 'L',
        table: 165,
      },
      '8': {
        name: 'Paul Aguilar [AU]',
        result: 'W',
        table: 170,
      },
      '9': {
        name: 'Sammy Madafiglio [AU]',
        result: 'W',
        table: 131,
      },
    },
  },
  {
    name: 'Jordan Stamatopoulos [AU]',
    placing: 234,
    record: {
      wins: 3,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.4333333333333333,
      oppopp: 0.5031129360180286,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Taylor Thomas [AU]',
        result: 'W',
        table: 87,
      },
      '2': {
        name: 'Ciaran Bradley [NZ]',
        result: 'L',
        table: 87,
      },
      '3': {
        name: 'Destyn Weir [AU]',
        result: 'T',
        table: 108,
      },
      '4': {
        name: 'Benjamin Small [AU]',
        result: 'T',
        table: 113,
      },
      '5': {
        name: 'Jeb Collins [AU]',
        result: 'W',
        table: 147,
      },
      '6': {
        name: 'Zak Hamilton [AU]',
        result: 'L',
        table: 93,
      },
      '7': {
        name: 'Sam Chen [US]',
        result: 'T',
        table: 134,
      },
      '8': {
        name: 'Hadyn Joyce [AU]',
        result: 'W',
        table: 136,
      },
      '9': {
        name: 'Eric Sanson [NZ]',
        result: 'T',
        table: 97,
      },
    },
  },
  {
    name: 'Alicia Keizer [AU]',
    placing: 235,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.4239417989417989,
      oppopp: 0.4947203675708967,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Thomas McCawley [AU]',
        result: 'L',
        table: 3,
      },
      '2': {
        name: 'Connor Lee Dow [AU]',
        result: 'T',
        table: 258,
      },
      '3': {
        name: 'Benjamin Small [AU]',
        result: 'L',
        table: 210,
      },
      '4': {
        name: 'Adam Knoblauch [AU]',
        result: 'W',
        table: 230,
      },
      '5': {
        name: 'Jake Holmes [AU]',
        result: 'L',
        table: 189,
      },
      '6': {
        name: 'Kylie Flynn [AU]',
        result: 'W',
        table: 204,
      },
      '7': {
        name: 'Isabelle Lohrey [AU]',
        result: 'W',
        table: 170,
      },
      '8': {
        name: 'Kelvin Nguyen [AU]',
        result: 'W',
        table: 126,
      },
      '9': {
        name: 'Satoya Takagi [JP]',
        result: 'L',
        table: 71,
      },
    },
  },
  {
    name: 'Jake Herden [AU]',
    placing: 236,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.4220679012345679,
      oppopp: 0.49008701989026066,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Ida Nero [AU]',
        result: 'L',
        table: 149,
      },
      '2': {
        name: 'Ethan Stoeckert [AU]',
        result: 'T',
        table: 252,
      },
      '3': {
        name: 'Rory Sharpe [AU]',
        result: 'L',
        table: 202,
      },
      '4': {
        name: 'Damien Commadeur [AU]',
        result: 'W',
        table: 234,
      },
      '5': {
        name: 'Paige Chamberlain [AU]',
        result: 'W',
        table: 174,
      },
      '6': {
        name: 'Calum Thatcher [AU]',
        result: 'L',
        table: 129,
      },
      '7': {
        name: 'william wang [AU]',
        result: 'W',
        table: 169,
      },
      '8': {
        name: 'Zachary Vella [AU]',
        result: 'L',
        table: 101,
      },
      '9': {
        name: 'James Futcher [AU]',
        result: 'W',
        table: 130,
      },
    },
  },
  {
    name: 'Bayley Janssen [AU]',
    placing: 237,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.4206349206349206,
      oppopp: 0.47678606421992664,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'william wang [AU]',
        result: 'W',
        table: 237,
      },
      '2': {
        name: 'Roman Addamo [AU]',
        result: 'L',
        table: 56,
      },
      '3': {
        name: 'Sam Hynes [AU]',
        result: 'L',
        table: 122,
      },
      '4': {
        name: 'Su Fu [NZ]',
        result: 'T',
        table: 163,
      },
      '5': {
        name: 'Nina Junaidi [SG]',
        result: 'W',
        table: 164,
      },
      '6': {
        name: 'David Stevens [AU]',
        result: 'L',
        table: 140,
      },
      '7': {
        name: 'Montana Drew [AU]',
        result: 'L',
        table: 156,
      },
      '8': {
        name: 'Natasha Kelly [AU]',
        result: 'W',
        table: 180,
      },
      '9': {
        name: 'Kelvin Nguyen [AU]',
        result: 'W',
        table: 141,
      },
    },
  },
  {
    name: 'Joshua Martin [AU]',
    placing: 238,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.419753086419753,
      oppopp: 0.47868165784832456,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Fabrice Rivalland [AU]',
        result: 'L',
        table: 207,
      },
      '2': {
        name: 'Taylor Thomas [AU]',
        result: 'T',
        table: 237,
      },
      '3': {
        name: 'Charles Li [AU]',
        result: 'L',
        table: 194,
      },
      '4': {
        name: 'Nick Shortt [NZ]',
        result: 'W',
        table: 228,
      },
      '5': {
        name: 'Anthony Tsang [AU]',
        result: 'L',
        table: 161,
      },
      '6': {
        name: 'Vie Seminiano [AU]',
        result: 'L',
        table: 216,
      },
      '7': {
        name: 'Angela Lewis [AU]',
        result: 'W',
        table: 198,
      },
      '8': {
        name: 'James Breene [AU]',
        result: 'W',
        table: 178,
      },
      '9': {
        name: 'Yuhao Xia [AU]',
        result: 'W',
        table: 146,
      },
    },
  },
  {
    name: 'Mohd Taufiq Mohd Alwi [SG]',
    placing: 239,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.41358024691358025,
      oppopp: 0.4765701548108956,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Tim Haffmanns [DE]',
        result: 'W',
        table: 114,
      },
      '2': {
        name: 'Aura Ye [AU]',
        result: 'T',
        table: 73,
      },
      '3': {
        name: 'Bailey Craig [AU]',
        result: 'L',
        table: 62,
      },
      '4': {
        name: 'asger balle [AU]',
        result: 'L',
        table: 140,
      },
      '5': {
        name: 'Justin Hoy [AU]',
        result: 'L',
        table: 195,
      },
      '6': {
        name: 'Michael Gennaccaro [AU]',
        result: 'L',
        table: 207,
      },
      '7': {
        name: 'Peter Colosimo [AU]',
        result: 'W',
        table: 204,
      },
      '8': {
        name: 'Christopher Ganal [AU]',
        result: 'W',
        table: 166,
      },
      '9': {
        name: 'Isabelle Lohrey [AU]',
        result: 'W',
        table: 137,
      },
    },
  },
  {
    name: 'Jack underwood [AU]',
    placing: 240,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.4067901234567901,
      oppopp: 0.4670703507740545,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'KODY TRAN [AU]',
        result: 'L',
        table: 208,
      },
      '2': {
        name: 'SzuYun Hsiao [AU]',
        result: 'W',
        table: 186,
      },
      '3': {
        name: 'Benjamin Rolfe [AU]',
        result: 'L',
        table: 167,
      },
      '4': {
        name: 'Angela Lewis [AU]',
        result: 'T',
        table: 173,
      },
      '5': {
        name: 'Christopher Fragiotta [AU]',
        result: 'W',
        table: 166,
      },
      '6': {
        name: 'Lily Huynh [AU]',
        result: 'L',
        table: 138,
      },
      '7': {
        name: 'Fletcher Konynenburg [AU]',
        result: 'L',
        table: 162,
      },
      '8': {
        name: 'Christofer Gozali [AU]',
        result: 'W',
        table: 175,
      },
      '9': {
        name: 'William Rue [AU]',
        result: 'W',
        table: 134,
      },
    },
  },
  {
    name: 'Lawrence Lam [AU]',
    placing: 241,
    record: {
      wins: 3,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.5555555555555556,
      opp: 0.40656966490299823,
      oppopp: 0.47752267573696144,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jarrad Paxton [AU]',
        result: 'T',
        table: 90,
      },
      '2': {
        name: 'Corey Matthews [AU]',
        result: 'L',
        table: 135,
      },
      '3': {
        name: 'Eric Sanson [NZ]',
        result: 'T',
        table: 218,
      },
      '4': {
        name: 'Ayumi Tamai [JP]',
        result: 'T',
        table: 215,
      },
      '5': {
        name: 'Scott Leung [AU]',
        result: 'L',
        table: 227,
      },
      '6': {
        name: 'Christopher Chan [AU]',
        result: 'W',
        table: 229,
      },
      '7': {
        name: 'Emma Baker [AU]',
        result: 'W',
        table: 183,
      },
      '8': {
        name: 'Sophia Crunkhorn [AU]',
        result: 'W',
        table: 145,
      },
      '9': {
        name: 'David Boyd [AU]',
        result: 'T',
        table: 100,
      },
    },
  },
  {
    name: 'Khristian Embog [AU]',
    placing: 242,
    record: {
      wins: 4,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.36860670194003525,
      oppopp: 0.43009189272416787,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Daal Jaffers [AU]',
        result: 'T',
        table: 171,
      },
      '2': {
        name: 'Daniel Mielnik [AU]',
        result: 'L',
        table: 128,
      },
      '3': {
        name: 'Christofer Gozali [AU]',
        result: 'L',
        table: 216,
      },
      '4': {
        name: 'Ashton Bradley [AU]',
        result: 'L',
        table: 236,
      },
      '5': {
        name: 'Damien Commadeur [AU]',
        result: 'L',
        table: 245,
      },
      '6': {
        name: 'Quentin Pepe [AU]',
        result: 'W',
        table: 235,
      },
      '7': {
        name: 'Tayla-Jane Lovett [AU]',
        result: 'W',
        table: 205,
      },
      '8': {
        name: 'Nathan Belcher [AU]',
        result: 'W',
        table: 174,
      },
      '9': {
        name: 'Melinda Li [NZ]',
        result: 'W',
        table: 135,
      },
    },
  },
  {
    name: 'Matthew Chong [AU]',
    placing: 243,
    record: {
      wins: 4,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.6015625,
      oppopp: 0.5417317708333333,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Noah Midgley [AU]',
        result: 'W',
        table: 109,
      },
      '2': {
        name: 'Kurt Spiteri [AU]',
        result: 'W',
        table: 41,
      },
      '3': {
        name: 'Tristan Young [AU]',
        result: 'W',
        table: 36,
      },
      '4': {
        name: 'Christian Delloiaco [AU]',
        result: 'L',
        table: 5,
      },
      '5': {
        name: 'Andy Truong [AU]',
        result: 'W',
        table: 24,
      },
      '6': {
        name: 'Paul Ashton [AU]',
        result: 'L',
        table: 23,
      },
      '7': {
        name: 'Robert Seymour [AU]',
        result: 'L',
        table: 50,
      },
      '8': {
        name: 'Courtney Fox [AU]',
        result: 'L',
        table: 76,
      },
    },
  },
  {
    name: 'Ben Sinclair [AU]',
    placing: 244,
    record: {
      wins: 4,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.59375,
      oppopp: 0.539163920776644,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Darren Caboche [AU]',
        result: 'W',
        table: 151,
      },
      '2': {
        name: 'jeremy blackney [AU]',
        result: 'W',
        table: 82,
      },
      '3': {
        name: 'Gabriel Smart [US]',
        result: 'L',
        table: 8,
      },
      '4': {
        name: 'Jose de la garma [AU]',
        result: 'L',
        table: 78,
      },
      '5': {
        name: 'Jack Burmeister [AU]',
        result: 'W',
        table: 134,
      },
      '6': {
        name: 'Kaiden Allan [AU]',
        result: 'W',
        table: 65,
      },
      '7': {
        name: 'Daniel Ross-Brown [AU]',
        result: 'L',
        table: 38,
      },
      '8': {
        name: 'Todd Williams [AU]',
        result: 'L',
        table: 80,
      },
    },
  },
  {
    name: 'Ashton Grant [AU]',
    placing: 245,
    record: {
      wins: 4,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5714285714285714,
      opp: 0.5612244897959183,
      oppopp: 0.5380466472303207,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Kelvin Nguyen [AU]',
        result: 'W',
        table: 244,
      },
      '2': {
        name: 'Joshua Bradley [AU]',
        result: 'L',
        table: 19,
      },
      '3': {
        name: 'Robbie Caldwell [AU]',
        result: 'W',
        table: 118,
      },
      '4': {
        name: 'Peter Fay [AU]',
        result: 'W',
        table: 74,
      },
      '5': {
        name: 'Paul Ashton [AU]',
        result: 'L',
        table: 41,
      },
      '6': {
        name: 'Bradley Cannan-cole [AU]',
        result: 'W',
        table: 68,
      },
      '7': {
        name: 'Corey O’Leary [AU]',
        result: 'L',
        table: 53,
      },
    },
  },
  {
    name: 'Samuel Shepherd [NZ]',
    placing: 246,
    record: {
      wins: 3,
      losses: 3,
      ties: 3,
    },
    resistances: {
      self: 0.5,
      opp: 0.560626102292769,
      oppopp: 0.4979293080400884,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Millie Hay [AU]',
        result: 'W',
        table: 68,
      },
      '2': {
        name: 'Brayden S [AU]',
        result: 'T',
        table: 77,
      },
      '3': {
        name: 'Courtney Fox [AU]',
        result: 'T',
        table: 80,
      },
      '4': {
        name: 'Roman Carfi [AU]',
        result: 'L',
        table: 97,
      },
      '5': {
        name: 'troy fisher [AU]',
        result: 'T',
        table: 150,
      },
      '6': {
        name: 'Jesse Becker [AU]',
        result: 'W',
        table: 154,
      },
      '7': {
        name: 'Hadyn Joyce [AU]',
        result: 'W',
        table: 113,
      },
      '8': {
        name: 'Brendan Cliffe [AU]',
        result: 'L',
        table: 69,
      },
      '9': {
        name: 'Ramzey Fayad [AU]',
        result: 'L',
        table: 98,
      },
    },
  },
  {
    name: 'Roman Carfi [AU]',
    placing: 247,
    record: {
      wins: 3,
      losses: 1,
      ties: 3,
    },
    resistances: {
      self: 0.6428571428571429,
      opp: 0.5510204081632654,
      oppopp: 0.5231454486556527,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Alex Hatzidakis [AU]',
        result: 'T',
        table: 195,
      },
      '2': {
        name: 'YUTIAN SHOU [AU]',
        result: 'T',
        table: 113,
      },
      '3': {
        name: 'Alexander Cannavo [AU]',
        result: 'W',
        table: 175,
      },
      '4': {
        name: 'Samuel Shepherd [NZ]',
        result: 'W',
        table: 97,
      },
      '5': {
        name: 'Chris Currenti [AU]',
        result: 'T',
        table: 57,
      },
      '6': {
        name: 'Justin Truong [AU]',
        result: 'W',
        table: 59,
      },
      '7': {
        name: 'Callum Pinnegar [AU]',
        result: 'L',
        table: 49,
      },
    },
  },
  {
    name: 'Rhys Theodoropoulos [AU]',
    placing: 248,
    record: {
      wins: 4,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.5435267857142857,
      oppopp: 0.5260124362244898,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'YiFei Ruan [AU]',
        result: 'L',
        table: 72,
      },
      '2': {
        name: 'Nina Junaidi [SG]',
        result: 'W',
        table: 205,
      },
      '3': {
        name: 'Mason Mitchell [AU]',
        result: 'W',
        table: 104,
      },
      '4': {
        name: 'Sineth Akmeemana [AU]',
        result: 'L',
        table: 72,
      },
      '5': {
        name: 'Sinan Gunaydin Okatan [AU]',
        result: 'W',
        table: 117,
      },
      '6': {
        name: 'Courtney Fox [AU]',
        result: 'L',
        table: 89,
      },
      '7': {
        name: 'Tessa Isberg [FI]',
        result: 'W',
        table: 120,
      },
      '8': {
        name: 'Darrin Sin [AU]',
        result: 'L',
        table: 72,
      },
    },
  },
  {
    name: 'Zak Hamilton [AU]',
    placing: 249,
    record: {
      wins: 3,
      losses: 3,
      ties: 3,
    },
    resistances: {
      self: 0.5,
      opp: 0.5401234567901234,
      oppopp: 0.5061556927297668,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Kaiden Allan [AU]',
        result: 'W',
        table: 145,
      },
      '2': {
        name: 'Cody Matthewe [AU]',
        result: 'L',
        table: 5,
      },
      '3': {
        name: 'Liam Flood [NZ]',
        result: 'T',
        table: 105,
      },
      '4': {
        name: 'Samantha Turner [AU]',
        result: 'T',
        table: 111,
      },
      '5': {
        name: 'Sean Takemoto [AU]',
        result: 'W',
        table: 149,
      },
      '6': {
        name: 'Jordan Stamatopoulos [AU]',
        result: 'W',
        table: 93,
      },
      '7': {
        name: 'Andi Cheung [AU]',
        result: 'L',
        table: 62,
      },
      '8': {
        name: 'David Boyd [AU]',
        result: 'T',
        table: 97,
      },
      '9': {
        name: 'Kirryn Hatch [AU]',
        result: 'L',
        table: 107,
      },
    },
  },
  {
    name: 'Tessa Isberg [FI]',
    placing: 250,
    record: {
      wins: 4,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.5385802469135802,
      oppopp: 0.5170962546541251,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Stephen Todorovic [AU]',
        result: 'W',
        table: 138,
      },
      '2': {
        name: 'Qihan Zhang [AU]',
        result: 'W',
        table: 57,
      },
      '3': {
        name: 'Keito Arai [JP]',
        result: 'L',
        table: 7,
      },
      '4': {
        name: 'Todd Williams [AU]',
        result: 'L',
        table: 57,
      },
      '5': {
        name: 'Scott Langford [AU]',
        result: 'L',
        table: 118,
      },
      '6': {
        name: 'Joshua Crisp [AU]',
        result: 'W',
        table: 148,
      },
      '7': {
        name: 'Rhys Theodoropoulos [AU]',
        result: 'L',
        table: 120,
      },
      '8': {
        name: 'Cameron Peak [AU]',
        result: 'W',
        table: 143,
      },
      '9': {
        name: 'Joshua Courtney [AU]',
        result: 'L',
        table: 106,
      },
    },
  },
  {
    name: 'Harry West [AU]',
    placing: 251,
    record: {
      wins: 3,
      losses: 3,
      ties: 3,
    },
    resistances: {
      self: 0.5,
      opp: 0.5324074074074073,
      oppopp: 0.5175631981187536,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jacques Gouws [NZ]',
        result: 'T',
        table: 160,
      },
      '2': {
        name: 'Ethan Cooper [AU]',
        result: 'W',
        table: 142,
      },
      '3': {
        name: 'Der Cherng Lee [NZ]',
        result: 'L',
        table: 75,
      },
      '4': {
        name: 'Sean Takemoto [AU]',
        result: 'T',
        table: 153,
      },
      '5': {
        name: 'Rory Beniuk [AU]',
        result: 'W',
        table: 159,
      },
      '6': {
        name: 'Tyler Adamson [AU]',
        result: 'W',
        table: 99,
      },
      '7': {
        name: 'Luke Schmitt [AU]',
        result: 'T',
        table: 57,
      },
      '8': {
        name: 'Nick Bell [AU]',
        result: 'L',
        table: 75,
      },
      '9': {
        name: 'Lewis Gall [NZ]',
        result: 'L',
        table: 101,
      },
    },
  },
  {
    name: 'Joshua Bradley [AU]',
    placing: 252,
    record: {
      wins: 4,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.5187389770723105,
      oppopp: 0.5163419714593657,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Ho Kit Chan [HK]',
        result: 'W',
        table: 135,
      },
      '2': {
        name: 'Ashton Grant [AU]',
        result: 'W',
        table: 19,
      },
      '3': {
        name: 'Louis Pozzacchio [AU]',
        result: 'L',
        table: 21,
      },
      '4': {
        name: 'Diego Gatica [CL]',
        result: 'L',
        table: 48,
      },
      '5': {
        name: 'Jack Eeles [AU]',
        result: 'W',
        table: 136,
      },
      '6': {
        name: 'Ryan Maullin [AU]',
        result: 'W',
        table: 88,
      },
      '7': {
        name: 'Gakuto Shiina [JP]',
        result: 'L',
        table: 41,
      },
      '8': {
        name: 'Robbie Caldwell [AU]',
        result: 'L',
        table: 83,
      },
      '9': {
        name: 'Jesse Becker [AU]',
        result: 'L',
        table: 105,
      },
    },
  },
  {
    name: 'Bradley Cannan-cole [AU]',
    placing: 253,
    record: {
      wins: 4,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.5185185185185186,
      oppopp: 0.5172045155510764,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Sineth Akmeemana [AU]',
        result: 'L',
        table: 218,
      },
      '2': {
        name: 'Jack Riley [AU]',
        result: 'W',
        table: 241,
      },
      '3': {
        name: 'Hugh Batten [NZ]',
        result: 'W',
        table: 159,
      },
      '4': {
        name: 'Sam Clayfield [AU]',
        result: 'L',
        table: 63,
      },
      '5': {
        name: 'Andrew Teoh [AU]',
        result: 'W',
        table: 114,
      },
      '6': {
        name: 'Ashton Grant [AU]',
        result: 'L',
        table: 68,
      },
      '7': {
        name: 'Anthony Tsang [AU]',
        result: 'L',
        table: 104,
      },
      '8': {
        name: 'Tuan Ho [AU]',
        result: 'L',
        table: 144,
      },
      '9': {
        name: 'Peter Fay [AU]',
        result: 'W',
        table: 153,
      },
    },
  },
  {
    name: 'Ashton Bradley [AU]',
    placing: 254,
    record: {
      wins: 3,
      losses: 3,
      ties: 3,
    },
    resistances: {
      self: 0.5,
      opp: 0.5104938271604939,
      oppopp: 0.5136522633744856,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Edin Visca [AU]',
        result: 'T',
        table: 98,
      },
      '2': {
        name: 'Justin Cutajar [AU]',
        result: 'L',
        table: 130,
      },
      '3': {
        name: 'Alexander Bray [AU]',
        result: 'L',
        table: 209,
      },
      '4': {
        name: 'Khristian Embog [AU]',
        result: 'W',
        table: 236,
      },
      '5': {
        name: 'Christofer Gozali [AU]',
        result: 'W',
        table: 163,
      },
      '6': {
        name: 'William Rue [AU]',
        result: 'W',
        table: 119,
      },
      '7': {
        name: 'Alan Quach [NZ]',
        result: 'T',
        table: 93,
      },
      '8': {
        name: 'Joshua Courtney [AU]',
        result: 'T',
        table: 90,
      },
      '9': {
        name: 'Cody Matthewe [AU]',
        result: 'L',
        table: 96,
      },
    },
  },
  {
    name: 'Brayden S [AU]',
    placing: 255,
    record: {
      wins: 3,
      losses: 3,
      ties: 3,
    },
    resistances: {
      self: 0.5,
      opp: 0.5092592592592592,
      oppopp: 0.4926930237115421,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Montana Drew [AU]',
        result: 'W',
        table: 12,
      },
      '2': {
        name: 'Samuel Shepherd [NZ]',
        result: 'T',
        table: 77,
      },
      '3': {
        name: 'James Kostoulias [AU]',
        result: 'W',
        table: 51,
      },
      '4': {
        name: 'Andre Pollacchi [AU]',
        result: 'L',
        table: 22,
      },
      '5': {
        name: 'jeremy blackney [AU]',
        result: 'T',
        table: 62,
      },
      '6': {
        name: 'Rory Sharpe [AU]',
        result: 'L',
        table: 96,
      },
      '7': {
        name: 'Sinan Gunaydin Okatan [AU]',
        result: 'T',
        table: 143,
      },
      '8': {
        name: 'Calvin Prosser [AU]',
        result: 'W',
        table: 129,
      },
      '9': {
        name: 'Noah Midgley [AU]',
        result: 'L',
        table: 95,
      },
    },
  },
  {
    name: 'Roman Addamo [AU]',
    placing: 256,
    record: {
      wins: 4,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.5030864197530864,
      oppopp: 0.512883659122085,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Stuart McKinnis [AU]',
        result: 'W',
        table: 131,
      },
      '2': {
        name: 'Bayley Janssen [AU]',
        result: 'W',
        table: 56,
      },
      '3': {
        name: 'Joel Suryadi [AU]',
        result: 'L',
        table: 9,
      },
      '4': {
        name: 'Dylan Graefe [AU]',
        result: 'L',
        table: 67,
      },
      '5': {
        name: 'Daniel Ross-Brown [AU]',
        result: 'L',
        table: 139,
      },
      '6': {
        name: 'Mike Kan [AU]',
        result: 'W',
        table: 153,
      },
      '7': {
        name: 'Tan Loc Thuan Nguyen [AU]',
        result: 'L',
        table: 107,
      },
      '8': {
        name: 'Sam Chen [US]',
        result: 'L',
        table: 132,
      },
      '9': {
        name: 'Ryan Maullin [AU]',
        result: 'W',
        table: 150,
      },
    },
  },
  {
    name: 'David Younan [AU]',
    placing: 257,
    record: {
      wins: 4,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.5009259259259259,
      oppopp: 0.484128086419753,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Brandon Lee [AU]',
        result: 'W',
        table: 69,
      },
      '2': {
        name: 'Aaron Kleinhenz [US]',
        result: 'W',
        table: 93,
      },
      '3': {
        name: 'James Faulkner [AU]',
        result: 'L',
        table: 30,
      },
      '4': {
        name: 'Gakuto Shiina [JP]',
        result: 'L',
        table: 84,
      },
      '5': {
        name: 'Aaron Woodrow [AU]',
        result: 'L',
        table: 99,
      },
      '6': {
        name: 'Nam Ho [AU]',
        result: 'W',
        table: 168,
      },
      '7': {
        name: 'Ayumi Tamai [JP]',
        result: 'W',
        table: 118,
      },
      '8': {
        name: 'Zherui Li [AU]',
        result: 'L',
        table: 74,
      },
      '9': {
        name: 'Jordan Ung [AU]',
        result: 'L',
        table: 109,
      },
    },
  },
  {
    name: 'Zhiyuan Liang [CN]',
    placing: 258,
    record: {
      wins: 3,
      losses: 3,
      ties: 3,
    },
    resistances: {
      self: 0.5,
      opp: 0.4962962962962963,
      oppopp: 0.4884778561630413,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Harrison Hodges [AU]',
        result: 'T',
        table: 229,
      },
      '2': {
        name: 'Chen Ching Lee [TW]',
        result: 'T',
        table: 124,
      },
      '3': {
        name: 'Andrew Teoh [AU]',
        result: 'L',
        table: 181,
      },
      '4': {
        name: 'Ramzey Fayad [AU]',
        result: 'W',
        table: 209,
      },
      '5': {
        name: 'Zachary Bishop [AU]',
        result: 'W',
        table: 157,
      },
      '6': {
        name: 'James Xu [AU]',
        result: 'L',
        table: 104,
      },
      '7': {
        name: 'Samantha Turner [AU]',
        result: 'L',
        table: 129,
      },
      '8': {
        name: 'Soon Keat Chia [MY]',
        result: 'T',
        table: 160,
      },
      '9': {
        name: 'Kurt Spiteri [AU]',
        result: 'W',
        table: 149,
      },
    },
  },
  {
    name: 'Holly Wang [AU]',
    placing: 259,
    record: {
      wins: 3,
      losses: 3,
      ties: 3,
    },
    resistances: {
      self: 0.5,
      opp: 0.48644179894179895,
      oppopp: 0.4851912302987038,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Adam Knoblauch [AU]',
        result: 'T',
        table: 30,
      },
      '2': {
        name: 'Christopher Cheung [AU]',
        result: 'L',
        table: 132,
      },
      '3': {
        name: 'Brandon Wilson [AU]',
        result: 'W',
        table: 188,
      },
      '4': {
        name: 'Dylan Seery [AU]',
        result: 'L',
        table: 116,
      },
      '5': {
        name: 'Scott Minnekeer [AU]',
        result: 'T',
        table: 178,
      },
      '6': {
        name: 'Henry Brereton [AU]',
        result: 'W',
        table: 190,
      },
      '7': {
        name: 'Aaron Woodrow [AU]',
        result: 'T',
        table: 124,
      },
      '8': {
        name: 'Jordan Ung [AU]',
        result: 'L',
        table: 139,
      },
      '9': {
        name: 'Ruby Culley [AU]',
        result: 'W',
        table: 151,
      },
    },
  },
  {
    name: 'Tuan Ho [AU]',
    placing: 260,
    record: {
      wins: 3,
      losses: 3,
      ties: 3,
    },
    resistances: {
      self: 0.5,
      opp: 0.4776234567901234,
      oppopp: 0.501648540074466,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Julian Luvara [AU]',
        result: 'T',
        table: 141,
      },
      '2': {
        name: 'Edin Visca [AU]',
        result: 'L',
        table: 150,
      },
      '3': {
        name: 'Ethan Cooper [AU]',
        result: 'T',
        table: 192,
      },
      '4': {
        name: 'Alex Hatzidakis [AU]',
        result: 'W',
        table: 208,
      },
      '5': {
        name: 'Benjamin Woodward [AU]',
        result: 'L',
        table: 142,
      },
      '6': {
        name: 'James Breene [AU]',
        result: 'T',
        table: 178,
      },
      '7': {
        name: 'Jack Burmeister [AU]',
        result: 'W',
        table: 178,
      },
      '8': {
        name: 'Bradley Cannan-cole [AU]',
        result: 'W',
        table: 144,
      },
      '9': {
        name: 'Samuel Gianakis [AU]',
        result: 'L',
        table: 103,
      },
    },
  },
  {
    name: 'Rory Beniuk [AU]',
    placing: 261,
    record: {
      wins: 3,
      losses: 3,
      ties: 3,
    },
    resistances: {
      self: 0.5,
      opp: 0.4514991181657848,
      oppopp: 0.4886344867164973,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Fangrao Feng [AU]',
        result: 'T',
        table: 108,
      },
      '2': {
        name: 'Jarrad Paxton [AU]',
        result: 'T',
        table: 158,
      },
      '3': {
        name: 'Anthony Tsang [AU]',
        result: 'W',
        table: 177,
      },
      '4': {
        name: 'Jack Leong [AU]',
        result: 'L',
        table: 95,
      },
      '5': {
        name: 'Harry West [AU]',
        result: 'L',
        table: 159,
      },
      '6': {
        name: 'James Grkinic [AU]',
        result: 'L',
        table: 183,
      },
      '7': {
        name: 'Josh Ng [AU]',
        result: 'W',
        table: 189,
      },
      '8': {
        name: 'Peter Fay [AU]',
        result: 'T',
        table: 148,
      },
      '9': {
        name: 'Alexander Roderick [AU]',
        result: 'W',
        table: 154,
      },
    },
  },
  {
    name: 'Tim Haffmanns [DE]',
    placing: 262,
    record: {
      wins: 4,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.4490740740740741,
      oppopp: 0.4885716735253772,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Mohd Taufiq Mohd Alwi [SG]',
        result: 'L',
        table: 114,
      },
      '2': {
        name: 'Riley Pattison [AU]',
        result: 'L',
        table: 247,
      },
      '3': {
        name: 'Robin Sangwan [AU]',
        result: 'L',
        table: 249,
      },
      '4': {
        name: 'Samuel Williams [AU]',
        result: 'W',
        table: 255,
      },
      '5': {
        name: 'Alex Gordon [NZ]',
        result: 'W',
        table: 226,
      },
      '6': {
        name: 'Max McInnis [AU]',
        result: 'W',
        table: 167,
      },
      '7': {
        name: 'Brittany Mitchell [AU]',
        result: 'W',
        table: 121,
      },
      '8': {
        name: 'Andrew Teoh [AU]',
        result: 'L',
        table: 85,
      },
      '9': {
        name: 'Will Ladner [AU]',
        result: 'L',
        table: 104,
      },
    },
  },
  {
    name: 'Zachary Bishop [AU]',
    placing: 263,
    record: {
      wins: 3,
      losses: 3,
      ties: 3,
    },
    resistances: {
      self: 0.5,
      opp: 0.445326278659612,
      oppopp: 0.485340905909689,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Justin Cutajar [AU]',
        result: 'T',
        table: 33,
      },
      '2': {
        name: 'Anthony Tsang [AU]',
        result: 'T',
        table: 144,
      },
      '3': {
        name: 'Christopher Turner [AU]',
        result: 'W',
        table: 169,
      },
      '4': {
        name: 'Jimmy Nguyen [AU]',
        result: 'L',
        table: 108,
      },
      '5': {
        name: 'Zhiyuan Liang [CN]',
        result: 'L',
        table: 157,
      },
      '6': {
        name: 'Jarrad Paxton [AU]',
        result: 'L',
        table: 179,
      },
      '7': {
        name: 'Victor Su [AU]',
        result: 'T',
        table: 191,
      },
      '8': {
        name: 'Joshua Grob [AU]',
        result: 'W',
        table: 181,
      },
      '9': {
        name: 'Bee Blackwell [AU]',
        result: 'W',
        table: 155,
      },
    },
  },
  {
    name: 'jeremy blackney [AU]',
    placing: 264,
    record: {
      wins: 3,
      losses: 3,
      ties: 3,
    },
    resistances: {
      self: 0.5,
      opp: 0.444047619047619,
      oppopp: 0.5141866916519695,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Michael Jiang [AU]',
        result: 'W',
        table: 95,
      },
      '2': {
        name: 'Ben Sinclair [AU]',
        result: 'L',
        table: 82,
      },
      '3': {
        name: 'Zhaolong Zhu [AU]',
        result: 'T',
        table: 133,
      },
      '4': {
        name: 'Peter Colosimo [AU]',
        result: 'W',
        table: 156,
      },
      '5': {
        name: 'Brayden S [AU]',
        result: 'T',
        table: 62,
      },
      '6': {
        name: 'Brendon Leehane [AU]',
        result: 'L',
        table: 97,
      },
      '7': {
        name: 'Matthew Caton [AU]',
        result: 'T',
        table: 137,
      },
      '8': {
        name: 'Jonathan Tjahjono [AU]',
        result: 'W',
        table: 138,
      },
      '9': {
        name: 'WaiLok Tse [AU]',
        result: 'L',
        table: 99,
      },
    },
  },
  {
    name: 'Jason Slifka [AU]',
    placing: 265,
    record: {
      wins: 4,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.43981481481481477,
      oppopp: 0.4758530521262003,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Samuel Williams [AU]',
        result: 'W',
        table: 176,
      },
      '2': {
        name: 'Shane Quinn [AU]',
        result: 'L',
        table: 86,
      },
      '3': {
        name: 'KODY TRAN [AU]',
        result: 'L',
        table: 126,
      },
      '4': {
        name: 'William Rue [AU]',
        result: 'L',
        table: 160,
      },
      '5': {
        name: 'Jesse Brewer [AU]',
        result: 'W',
        table: 214,
      },
      '6': {
        name: 'troy fisher [AU]',
        result: 'L',
        table: 175,
      },
      '7': {
        name: 'Natasha Kelly [AU]',
        result: 'W',
        table: 177,
      },
      '8': {
        name: 'Nam Ho [AU]',
        result: 'W',
        table: 142,
      },
      '9': {
        name: 'Bing Jun Chan [SG]',
        result: 'L',
        table: 108,
      },
    },
  },
  {
    name: 'Jack Eeles [AU]',
    placing: 266,
    record: {
      wins: 4,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.4056437389770723,
      oppopp: 0.47127092606589965,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Hudson Moore [AU]',
        result: 'W',
        table: 168,
      },
      '2': {
        name: 'Darcy Ryan [AU]',
        result: 'L',
        table: 6,
      },
      '3': {
        name: 'Qihan Zhang [AU]',
        result: 'L',
        table: 123,
      },
      '4': {
        name: 'Antonio Sanabria [AU]',
        result: 'W',
        table: 167,
      },
      '5': {
        name: 'Joshua Bradley [AU]',
        result: 'L',
        table: 136,
      },
      '6': {
        name: 'Matthew Anderson [AU]',
        result: 'L',
        table: 165,
      },
      '7': {
        name: 'Noah Midgley [AU]',
        result: 'L',
        table: 181,
      },
      '8': {
        name: 'Emma Baker [AU]',
        result: 'W',
        table: 182,
      },
      '9': {
        name: 'Soon Keat Chia [MY]',
        result: 'W',
        table: 152,
      },
    },
  },
  {
    name: 'Brendon Leehane [AU]',
    placing: 267,
    record: {
      wins: 3,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.5714285714285714,
      opp: 0.673469387755102,
      oppopp: 0.4959183673469388,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Zherui Li [AU]',
        result: 'T',
        table: 43,
      },
      '2': {
        name: 'Ryan Tan [UK]',
        result: 'T',
        table: 121,
      },
      '3': {
        name: 'Xaria-Sofia Sachse [AU]',
        result: 'W',
        table: 178,
      },
      '4': {
        name: 'Lewis Stevens [AU]',
        result: 'W',
        table: 103,
      },
      '5': {
        name: 'xinzhe hou [AU]',
        result: 'L',
        table: 54,
      },
      '6': {
        name: 'jeremy blackney [AU]',
        result: 'W',
        table: 97,
      },
      '7': {
        name: 'Rory Sharpe [AU]',
        result: 'L',
        table: 61,
      },
    },
  },
  {
    name: 'Reginald Ng [AU]',
    placing: 268,
    record: {
      wins: 3,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.5714285714285714,
      opp: 0.6513605442176871,
      oppopp: 0.5470602526724976,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Rostin Luo [NZ]',
        result: 'T',
        table: 127,
      },
      '2': {
        name: 'Jim Gow [AU]',
        result: 'W',
        table: 140,
      },
      '3': {
        name: 'Ben Connor [AU]',
        result: 'W',
        table: 64,
      },
      '4': {
        name: 'Ryan Bews [AU]',
        result: 'W',
        table: 37,
      },
      '5': {
        name: 'Manuel Cresdee [AU]',
        result: 'T',
        table: 20,
      },
      '6': {
        name: 'xinzhe hou [AU]',
        result: 'L',
        table: 29,
      },
      '7': {
        name: 'Christopher Mathers [AU]',
        result: 'L',
        table: 56,
      },
    },
  },
  {
    name: 'Jack Leong [AU]',
    placing: 269,
    record: {
      wins: 3,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.5714285714285714,
      opp: 0.6105442176870748,
      oppopp: 0.5136297376093294,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Dillon Zhou-Sarno [AU]',
        result: 'T',
        table: 24,
      },
      '2': {
        name: 'Yongxiang Liu [AU]',
        result: 'W',
        table: 145,
      },
      '3': {
        name: 'Lewis Stevens [AU]',
        result: 'T',
        table: 57,
      },
      '4': {
        name: 'Rory Beniuk [AU]',
        result: 'W',
        table: 95,
      },
      '5': {
        name: 'Daniel Mielnik [AU]',
        result: 'W',
        table: 59,
      },
      '6': {
        name: 'Hakim Moussaoui [AU]',
        result: 'L',
        table: 30,
      },
      '7': {
        name: 'Edin Visca [AU]',
        result: 'L',
        table: 59,
      },
    },
  },
  {
    name: 'Michael Hammond [AU]',
    placing: 270,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.5890652557319225,
      oppopp: 0.5272010861957952,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Chris Currenti [AU]',
        result: 'T',
        table: 257,
      },
      '2': {
        name: 'Henry Bradnam [AU]',
        result: 'W',
        table: 115,
      },
      '3': {
        name: '玄 王 [CN]',
        result: 'L',
        table: 52,
      },
      '4': {
        name: 'Sebastian Rutter [NZ]',
        result: 'W',
        table: 149,
      },
      '5': {
        name: 'Keegan Burt [AU]',
        result: 'W',
        table: 72,
      },
      '6': {
        name: 'Joshua Courtney [AU]',
        result: 'T',
        table: 36,
      },
      '7': {
        name: 'Louis Chi [NZ]',
        result: 'L',
        table: 64,
      },
      '8': {
        name: 'James Xu [AU]',
        result: 'L',
        table: 95,
      },
      '9': {
        name: 'Aaron Woodrow [AU]',
        result: 'L',
        table: 122,
      },
    },
  },
  {
    name: 'Yin Jiang [AU]',
    placing: 271,
    record: {
      wins: 3,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5,
      opp: 0.5625,
      oppopp: 0.49484437003968246,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Tom Bourke [AU]',
        result: 'L',
        table: 38,
      },
      '2': {
        name: 'Jay Tyrrell [AU]',
        result: 'W',
        table: 235,
      },
      '3': {
        name: 'Jake Holmes [AU]',
        result: 'W',
        table: 88,
      },
      '4': {
        name: 'Michael Hicks [AU]',
        result: 'T',
        table: 52,
      },
      '5': {
        name: 'Alfie Delgado [MX]',
        result: 'L',
        table: 76,
      },
      '6': {
        name: 'Benjamin McMahon [AU]',
        result: 'W',
        table: 135,
      },
      '7': {
        name: 'Ryan Bews [AU]',
        result: 'T',
        table: 85,
      },
      '8': {
        name: 'Alan Quach [NZ]',
        result: 'L',
        table: 93,
      },
    },
  },
  {
    name: 'Archie de Vries [AU]',
    placing: 272,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.537037037037037,
      oppopp: 0.4993435234175975,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'DI ZHU [CN]',
        result: 'W',
        table: 223,
      },
      '2': {
        name: 'James Faulkner [AU]',
        result: 'L',
        table: 14,
      },
      '3': {
        name: 'Deacan Page [AU]',
        result: 'L',
        table: 150,
      },
      '4': {
        name: 'Bee Blackwell [AU]',
        result: 'T',
        table: 164,
      },
      '5': {
        name: 'Vie Seminiano [AU]',
        result: 'W',
        table: 170,
      },
      '6': {
        name: 'Anton Piccio [AU]',
        result: 'L',
        table: 111,
      },
      '7': {
        name: 'Jake Lazzari [AU]',
        result: 'W',
        table: 154,
      },
      '8': {
        name: 'Timothy Uyeda [AU]',
        result: 'L',
        table: 109,
      },
      '9': {
        name: 'Alexander Jemison [AU]',
        result: 'T',
        table: 142,
      },
    },
  },
  {
    name: 'Julian Luvara [AU]',
    placing: 273,
    record: {
      wins: 2,
      losses: 2,
      ties: 5,
    },
    resistances: {
      self: 0.5,
      opp: 0.5362654320987654,
      oppopp: 0.4824548672349598,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Tuan Ho [AU]',
        result: 'T',
        table: 141,
      },
      '2': {
        name: 'Xaria-Sofia Sachse [AU]',
        result: 'T',
        table: 118,
      },
      '3': {
        name: 'Melinda Li [NZ]',
        result: 'W',
        table: 179,
      },
      '4': {
        name: 'Ryan Tan [UK]',
        result: 'T',
        table: 104,
      },
      '5': {
        name: 'Callum Walker [AU]',
        result: 'T',
        table: 129,
      },
      '6': {
        name: 'Stefan Djordjevic [AU]',
        result: 'L',
        table: 124,
      },
      '7': {
        name: 'Christofer Gozali [AU]',
        result: 'W',
        table: 172,
      },
      '8': {
        name: 'Dom Fleming [AU]',
        result: 'T',
        table: 112,
      },
      '9': {
        name: 'Sean Takemoto [AU]',
        result: 'L',
        table: 118,
      },
    },
  },
  {
    name: 'Sam Hynes [AU]',
    placing: 274,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.5339506172839505,
      oppopp: 0.5061018028610621,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Aydan Barrett [AU]',
        result: 'W',
        table: 79,
      },
      '2': {
        name: 'Hadyn Joyce [AU]',
        result: 'L',
        table: 24,
      },
      '3': {
        name: 'Bayley Janssen [AU]',
        result: 'W',
        table: 122,
      },
      '4': {
        name: 'Lochie McKeefry [NZ]',
        result: 'L',
        table: 46,
      },
      '5': {
        name: 'Sebastian Trisch [AU]',
        result: 'T',
        table: 127,
      },
      '6': {
        name: 'Thomas Lamprey [AU]',
        result: 'T',
        table: 118,
      },
      '7': {
        name: 'Kadir Batuk [AU]',
        result: 'W',
        table: 127,
      },
      '8': {
        name: 'Hannah Paterson [AU]',
        result: 'L',
        table: 86,
      },
      '9': {
        name: 'Ferdi Mak [AU]',
        result: 'L',
        table: 120,
      },
    },
  },
  {
    name: 'David Edebohls [AU]',
    placing: 275,
    record: {
      wins: 2,
      losses: 2,
      ties: 5,
    },
    resistances: {
      self: 0.5,
      opp: 0.5337301587301587,
      oppopp: 0.4974221221410376,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Joshua Sparks [AU]',
        result: 'T',
        table: 193,
      },
      '2': {
        name: 'Tyler Gilbey [AU]',
        result: 'T',
        table: 123,
      },
      '3': {
        name: 'Ramzey Fayad [AU]',
        result: 'W',
        table: 173,
      },
      '4': {
        name: 'Sam Connor [AU]',
        result: 'L',
        table: 98,
      },
      '5': {
        name: 'Josephine Nucifora [AU]',
        result: 'W',
        table: 146,
      },
      '6': {
        name: 'Alex Wu [AU]',
        result: 'T',
        table: 95,
      },
      '7': {
        name: 'Robin Sangwan [AU]',
        result: 'T',
        table: 102,
      },
      '8': {
        name: 'Hayden Matthews [AU]',
        result: 'T',
        table: 115,
      },
      '9': {
        name: 'Vignesh Krishnan [AU]',
        result: 'L',
        table: 124,
      },
    },
  },
  {
    name: 'YUTIAN SHOU [AU]',
    placing: 276,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.5282186948853617,
      oppopp: 0.5167800453514739,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Sky Mathieson [AU]',
        result: 'T',
        table: 260,
      },
      '2': {
        name: 'Roman Carfi [AU]',
        result: 'T',
        table: 113,
      },
      '3': {
        name: 'Jimmy Nguyen [AU]',
        result: 'L',
        table: 170,
      },
      '4': {
        name: 'Connor Jackson [AU]',
        result: 'W',
        table: 222,
      },
      '5': {
        name: 'Andi Cheung [AU]',
        result: 'L',
        table: 153,
      },
      '6': {
        name: 'Calum McSpadden [AU]',
        result: 'W',
        table: 176,
      },
      '7': {
        name: 'Tom Sautelle [AU]',
        result: 'W',
        table: 126,
      },
      '8': {
        name: 'Jackson Doyle [AU]',
        result: 'L',
        table: 96,
      },
      '9': {
        name: 'Kadir Batuk [AU]',
        result: 'L',
        table: 123,
      },
    },
  },
  {
    name: 'Michael Gennaccaro [AU]',
    placing: 277,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.5090388007054674,
      oppopp: 0.4886015929005347,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Benjamin Rolfe [AU]',
        result: 'L',
        table: 14,
      },
      '2': {
        name: 'Cameron Peak [AU]',
        result: 'W',
        table: 183,
      },
      '3': {
        name: 'Samantha Turner [AU]',
        result: 'T',
        table: 138,
      },
      '4': {
        name: 'Tibor Baranyay [AU]',
        result: 'L',
        table: 146,
      },
      '5': {
        name: 'Markus Janssen [AU]',
        result: 'L',
        table: 169,
      },
      '6': {
        name: 'Mohd Taufiq Mohd Alwi [SG]',
        result: 'W',
        table: 207,
      },
      '7': {
        name: 'Michael Gleeson [AU]',
        result: 'T',
        table: 158,
      },
      '8': {
        name: 'Tyler Bishop [AU]',
        result: 'W',
        table: 157,
      },
      '9': {
        name: 'Aydan Barrett [AU]',
        result: 'L',
        table: 115,
      },
    },
  },
  {
    name: 'Jorja Doenau [AU]',
    placing: 278,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.5015432098765431,
      oppopp: 0.4541293111894964,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jake Lazzari [AU]',
        result: 'L',
        table: 111,
      },
      '2': {
        name: 'Josephine Nucifora [AU]',
        result: 'T',
        table: 215,
      },
      '3': {
        name: 'Alex Wu [AU]',
        result: 'L',
        table: 204,
      },
      '4': {
        name: 'Quentin Pepe [AU]',
        result: 'W',
        table: 242,
      },
      '5': {
        name: 'James Breene [AU]',
        result: 'T',
        table: 202,
      },
      '6': {
        name: 'Alexander Cannavo [AU]',
        result: 'W',
        table: 185,
      },
      '7': {
        name: 'James Grkinic [AU]',
        result: 'W',
        table: 132,
      },
      '8': {
        name: 'Stefan Cocks [AU]',
        result: 'L',
        table: 91,
      },
      '9': {
        name: 'Winston Chui [AU]',
        result: 'L',
        table: 114,
      },
    },
  },
  {
    name: 'Tom Sautelle [AU]',
    placing: 279,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.49691358024691357,
      oppopp: 0.5047153635116598,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jacob Sparks [AU]',
        result: 'T',
        table: 20,
      },
      '2': {
        name: 'Peter Colosimo [AU]',
        result: 'W',
        table: 122,
      },
      '3': {
        name: 'Tibor Baranyay [AU]',
        result: 'W',
        table: 47,
      },
      '4': {
        name: 'Jess Owers [AU]',
        result: 'L',
        table: 30,
      },
      '5': {
        name: 'Tristan Young [AU]',
        result: 'L',
        table: 87,
      },
      '6': {
        name: 'Will Ladner [AU]',
        result: 'T',
        table: 144,
      },
      '7': {
        name: 'YUTIAN SHOU [AU]',
        result: 'L',
        table: 126,
      },
      '8': {
        name: 'Andrew Lam [AU]',
        result: 'W',
        table: 146,
      },
      '9': {
        name: 'Hayden Matthews [AU]',
        result: 'L',
        table: 111,
      },
    },
  },
  {
    name: 'Jeb Collins [AU]',
    placing: 280,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.49074074074074076,
      oppopp: 0.48426722026259067,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Dante Sun [AU]',
        result: 'T',
        table: 217,
      },
      '2': {
        name: 'Christofer Gozali [AU]',
        result: 'W',
        table: 129,
      },
      '3': {
        name: 'Christopher Cheung [AU]',
        result: 'T',
        table: 76,
      },
      '4': {
        name: 'Courtney Fox [AU]',
        result: 'L',
        table: 107,
      },
      '5': {
        name: 'Jordan Stamatopoulos [AU]',
        result: 'L',
        table: 147,
      },
      '6': {
        name: 'Nathan Johnson [AU]',
        result: 'L',
        table: 184,
      },
      '7': {
        name: 'Andrew Lam [AU]',
        result: 'L',
        table: 196,
      },
      '8': {
        name: 'Lance Griggs [AU]',
        result: 'W',
        table: 189,
      },
      '9': {
        name: 'Cameron Dimond [AU]',
        result: 'W',
        table: 157,
      },
    },
  },
  {
    name: 'Anthony Smith [AU]',
    placing: 281,
    record: {
      wins: 2,
      losses: 2,
      ties: 5,
    },
    resistances: {
      self: 0.5,
      opp: 0.48456790123456783,
      oppopp: 0.48556670096021953,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Ash Nassiri [NZ]',
        result: 'T',
        table: 228,
      },
      '2': {
        name: 'Alexander Cannavo [AU]',
        result: 'T',
        table: 154,
      },
      '3': {
        name: 'Ryan Tan [UK]',
        result: 'L',
        table: 180,
      },
      '4': {
        name: 'cody thorne [AU]',
        result: 'W',
        table: 219,
      },
      '5': {
        name: 'Xaria-Sofia Sachse [AU]',
        result: 'T',
        table: 155,
      },
      '6': {
        name: 'Chloe Appleby [AU]',
        result: 'L',
        table: 159,
      },
      '7': {
        name: 'Mike Kan [AU]',
        result: 'T',
        table: 182,
      },
      '8': {
        name: 'Nicholas Choong [NZ]',
        result: 'W',
        table: 162,
      },
      '9': {
        name: 'Kayla Stockwell [AU]',
        result: 'T',
        table: 127,
      },
    },
  },
  {
    name: 'Ethan Stoeckert [AU]',
    placing: 282,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.47971781305114636,
      oppopp: 0.4535423840318021,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Matthew Anderson [AU]',
        result: 'L',
        table: 209,
      },
      '2': {
        name: 'Jake Herden [AU]',
        result: 'T',
        table: 252,
      },
      '3': {
        name: 'Joshua Courtney [AU]',
        result: 'L',
        table: 212,
      },
      '4': {
        name: 'Calum McSpadden [AU]',
        result: 'T',
        table: 240,
      },
      '5': {
        name: 'Jordyn Demeo [AU]',
        result: 'W',
        table: 239,
      },
      '6': {
        name: 'Josephine Nucifora [AU]',
        result: 'W',
        table: 180,
      },
      '7': {
        name: 'Stefan Cocks [AU]',
        result: 'L',
        table: 128,
      },
      '8': {
        name: 'Bee Blackwell [AU]',
        result: 'W',
        table: 154,
      },
      '9': {
        name: 'Sebastian Trisch [AU]',
        result: 'L',
        table: 119,
      },
    },
  },
  {
    name: 'Dom Fleming [AU]',
    placing: 283,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.47530864197530864,
      oppopp: 0.47836076817558293,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Lewis Stevens [AU]',
        result: 'L',
        table: 202,
      },
      '2': {
        name: 'Alexander Roderick [AU]',
        result: 'W',
        table: 168,
      },
      '3': {
        name: 'Huy Nguyen [AU]',
        result: 'L',
        table: 130,
      },
      '4': {
        name: 'Sebastian Trisch [AU]',
        result: 'L',
        table: 194,
      },
      '5': {
        name: 'Yasuyuki Handa [AU]',
        result: 'T',
        table: 208,
      },
      '6': {
        name: 'Matt Annable [AU]',
        result: 'W',
        table: 212,
      },
      '7': {
        name: 'Nicholas Choong [NZ]',
        result: 'W',
        table: 149,
      },
      '8': {
        name: 'Julian Luvara [AU]',
        result: 'T',
        table: 112,
      },
      '9': {
        name: 'Nathan Spry [AU]',
        result: 'L',
        table: 110,
      },
    },
  },
  {
    name: 'Nathan Johnson [AU]',
    placing: 284,
    record: {
      wins: 3,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.5,
      opp: 0.4748511904761905,
      oppopp: 0.51828302154195,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Jamison Bulloch [AU]',
        result: 'T',
        table: 39,
      },
      '2': {
        name: 'Edmund Khoo [SG]',
        result: 'L',
        table: 155,
      },
      '3': {
        name: 'Adam Knoblauch [AU]',
        result: 'W',
        table: 198,
      },
      '4': {
        name: 'Jackson Doyle [AU]',
        result: 'L',
        table: 147,
      },
      '5': {
        name: 'Alexander Bray [AU]',
        result: 'T',
        table: 193,
      },
      '6': {
        name: 'Jeb Collins [AU]',
        result: 'W',
        table: 184,
      },
      '7': {
        name: 'Tommy Williams [AU]',
        result: 'W',
        table: 133,
      },
      '8': {
        name: 'Sebastian Rutter [NZ]',
        result: 'L',
        table: 87,
      },
    },
  },
  {
    name: 'Tommy Williams [AU]',
    placing: 285,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.47354497354497355,
      oppopp: 0.4584854672321604,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Tyler Gilbey [AU]',
        result: 'T',
        table: 216,
      },
      '2': {
        name: 'Melinda Li [NZ]',
        result: 'T',
        table: 116,
      },
      '3': {
        name: 'Jamison Bulloch [AU]',
        result: 'L',
        table: 176,
      },
      '4': {
        name: 'Stanley Chaplin [AU]',
        result: 'W',
        table: 211,
      },
      '5': {
        name: 'Hannah Paterson [AU]',
        result: 'L',
        table: 144,
      },
      '6': {
        name: 'Soon Keat Chia [MY]',
        result: 'W',
        table: 181,
      },
      '7': {
        name: 'Nathan Johnson [AU]',
        result: 'L',
        table: 133,
      },
      '8': {
        name: 'Alexander Cannavo [AU]',
        result: 'W',
        table: 155,
      },
      '9': {
        name: 'Sinan Gunaydin Okatan [AU]',
        result: 'L',
        table: 112,
      },
    },
  },
  {
    name: 'Alexander Cannavo [AU]',
    placing: 286,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.4664902998236331,
      oppopp: 0.4705612157414405,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Hakim Moussaoui [AU]',
        result: 'T',
        table: 194,
      },
      '2': {
        name: 'Anthony Smith [AU]',
        result: 'T',
        table: 154,
      },
      '3': {
        name: 'Roman Carfi [AU]',
        result: 'L',
        table: 175,
      },
      '4': {
        name: 'troy fisher [AU]',
        result: 'L',
        table: 214,
      },
      '5': {
        name: 'Connor Lee Dow [AU]',
        result: 'W',
        table: 237,
      },
      '6': {
        name: 'Jorja Doenau [AU]',
        result: 'L',
        table: 185,
      },
      '7': {
        name: 'cody thorne [AU]',
        result: 'W',
        table: 192,
      },
      '8': {
        name: 'Tommy Williams [AU]',
        result: 'L',
        table: 155,
      },
      '9': {
        name: 'Stanley Chaplin [AU]',
        result: 'W',
        table: 160,
      },
    },
  },
  {
    name: 'Huy Doan [AU]',
    placing: 287,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.46075837742504405,
      oppopp: 0.49854418619299573,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Stanley Chaplin [AU]',
        result: 'W',
        table: 61,
      },
      '2': {
        name: 'Jake Thomas [AU]',
        result: 'T',
        table: 110,
      },
      '3': {
        name: 'Ash Nassiri [NZ]',
        result: 'L',
        table: 70,
      },
      '4': {
        name: 'Tom Bourke [AU]',
        result: 'T',
        table: 122,
      },
      '5': {
        name: 'Destyn Weir [AU]',
        result: 'L',
        table: 145,
      },
      '6': {
        name: 'Ryan Mcculloch [AU]',
        result: 'W',
        table: 177,
      },
      '7': {
        name: 'Jacob Sparks [AU]',
        result: 'W',
        table: 131,
      },
      '8': {
        name: 'Lewis Stevens [AU]',
        result: 'L',
        table: 92,
      },
      '9': {
        name: 'Jamison Bulloch [AU]',
        result: 'L',
        table: 121,
      },
    },
  },
  {
    name: 'Shaun Coupe [AU]',
    placing: 288,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.4567901234567901,
      oppopp: 0.48184799382716054,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Mia Fountain [AU]',
        result: 'L',
        table: 230,
      },
      '2': {
        name: 'Wern Wong [NZ]',
        result: 'L',
        table: 250,
      },
      '3': {
        name: 'David Valderrama [AU]',
        result: 'W',
        table: 225,
      },
      '4': {
        name: 'Donna Pedder [AU]',
        result: 'W',
        table: 189,
      },
      '5': {
        name: 'Robbie Caldwell [AU]',
        result: 'L',
        table: 110,
      },
      '6': {
        name: 'Qihan Zhang [AU]',
        result: 'T',
        table: 166,
      },
      '7': {
        name: 'Jake Holmes [AU]',
        result: 'T',
        table: 157,
      },
      '8': {
        name: 'Thomas Lamprey [AU]',
        result: 'W',
        table: 158,
      },
      '9': {
        name: 'Marcus Raj [AU]',
        result: 'L',
        table: 113,
      },
    },
  },
  {
    name: 'Hoong Yoong Ngiam [AU]',
    placing: 289,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.45348324514991184,
      oppopp: 0.5130669809075893,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Michael Gleeson [AU]',
        result: 'L',
        table: 201,
      },
      '2': {
        name: 'Sandra Flood [NZ]',
        result: 'T',
        table: 214,
      },
      '3': {
        name: 'Carmela Nucifora [AU]',
        result: 'W',
        table: 197,
      },
      '4': {
        name: 'Jer-Shyan Hwa [AU]',
        result: 'W',
        table: 150,
      },
      '5': {
        name: 'Mitch Knuckey [AU]',
        result: 'L',
        table: 96,
      },
      '6': {
        name: 'Kelvin Duong [AU]',
        result: 'T',
        table: 128,
      },
      '7': {
        name: 'Destyn Weir [AU]',
        result: 'W',
        table: 140,
      },
      '8': {
        name: 'Ryan Bews [AU]',
        result: 'L',
        table: 94,
      },
      '9': {
        name: 'Samantha Turner [AU]',
        result: 'L',
        table: 117,
      },
    },
  },
  {
    name: 'Jacob Sparks [AU]',
    placing: 290,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.45006613756613756,
      oppopp: 0.484241937515747,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Tom Sautelle [AU]',
        result: 'T',
        table: 20,
      },
      '2': {
        name: 'Jason Zhe [AU]',
        result: 'L',
        table: 133,
      },
      '3': {
        name: 'Charlie Queen [AU]',
        result: 'L',
        table: 208,
      },
      '4': {
        name: 'Jim Gow [AU]',
        result: 'W',
        table: 237,
      },
      '5': {
        name: 'James Grkinic [AU]',
        result: 'T',
        table: 198,
      },
      '6': {
        name: 'Keller Huang [AU]',
        result: 'W',
        table: 192,
      },
      '7': {
        name: 'Huy Doan [AU]',
        result: 'L',
        table: 131,
      },
      '8': {
        name: 'Jake Holmes [AU]',
        result: 'W',
        table: 149,
      },
      '9': {
        name: 'Jiahe Liang [AU]',
        result: 'L',
        table: 116,
      },
    },
  },
  {
    name: 'Alexander Jemison [AU]',
    placing: 291,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.44675925925925924,
      oppopp: 0.48745988879090735,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jesse Brewer [AU]',
        result: 'W',
        table: 126,
      },
      '2': {
        name: 'Bing Jun Chan [SG]',
        result: 'L',
        table: 79,
      },
      '3': {
        name: 'Sammy Madafiglio [AU]',
        result: 'W',
        table: 154,
      },
      '4': {
        name: 'Max Kennedy [AU]',
        result: 'L',
        table: 88,
      },
      '5': {
        name: 'Brittany Mitchell [AU]',
        result: 'L',
        table: 135,
      },
      '6': {
        name: 'Jonathan Tjahjono [AU]',
        result: 'L',
        table: 149,
      },
      '7': {
        name: 'Fangrao Feng [AU]',
        result: 'T',
        table: 184,
      },
      '8': {
        name: 'Marcus Dwyer [AU]',
        result: 'W',
        table: 167,
      },
      '9': {
        name: 'Archie de Vries [AU]',
        result: 'T',
        table: 142,
      },
    },
  },
  {
    name: 'Fernando Monsalve [CL]',
    placing: 292,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.43110670194003525,
      oppopp: 0.5043846844293273,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jess Owers [AU]',
        result: 'L',
        table: 234,
      },
      '2': {
        name: 'Sean Takemoto [AU]',
        result: 'L',
        table: 184,
      },
      '3': {
        name: 'Celine Pearse [AU]',
        result: 'W',
        table: 240,
      },
      '4': {
        name: 'Jack Riley [AU]',
        result: 'W',
        table: 191,
      },
      '5': {
        name: 'Kenny Potter [NZ]',
        result: 'L',
        table: 100,
      },
      '6': {
        name: 'Hugh Batten [NZ]',
        result: 'L',
        table: 163,
      },
      '7': {
        name: 'Alvin Hall [AU]',
        result: 'T',
        table: 174,
      },
      '8': {
        name: 'Carmen Harris [AU]',
        result: 'T',
        table: 163,
      },
      '9': {
        name: 'Antonio Sanabria [AU]',
        result: 'W',
        table: 158,
      },
    },
  },
  {
    name: 'Kayla Stockwell [AU]',
    placing: 293,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.42687389770723105,
      oppopp: 0.4540562974160858,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Qihan Zhang [AU]',
        result: 'L',
        table: 8,
      },
      '2': {
        name: 'TJ Dixon [AU]',
        result: 'L',
        table: 240,
      },
      '3': {
        name: 'Luca Serianni [AU]',
        result: 'L',
        table: 224,
      },
      '4': {
        name: 'Ruby Culley [AU]',
        result: 'W',
        table: 245,
      },
      '5': {
        name: 'Brandon Lee [AU]',
        result: 'T',
        table: 228,
      },
      '6': {
        name: 'Sami MacKenzie [AU]',
        result: 'W',
        table: 203,
      },
      '7': {
        name: 'Adam Knoblauch [AU]',
        result: 'W',
        table: 153,
      },
      '8': {
        name: 'Kevin Min [AU]',
        result: 'L',
        table: 107,
      },
      '9': {
        name: 'Anthony Smith [AU]',
        result: 'T',
        table: 127,
      },
    },
  },
  {
    name: 'Mason Mitchell [AU]',
    placing: 294,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.42592592592592593,
      oppopp: 0.49140177521625933,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Ryan Brook [AU]',
        result: 'W',
        table: 140,
      },
      '2': {
        name: 'Thomas McCawley [AU]',
        result: 'L',
        table: 36,
      },
      '3': {
        name: 'Rhys Theodoropoulos [AU]',
        result: 'L',
        table: 104,
      },
      '4': {
        name: 'Soon Keat Chia [MY]',
        result: 'T',
        table: 170,
      },
      '5': {
        name: 'Denham Smith [AU]',
        result: 'L',
        table: 185,
      },
      '6': {
        name: 'Aura Ye [AU]',
        result: 'W',
        table: 196,
      },
      '7': {
        name: 'Antonio Sanabria [AU]',
        result: 'T',
        table: 151,
      },
      '8': {
        name: 'Marcus Raj [AU]',
        result: 'L',
        table: 151,
      },
      '9': {
        name: 'Tyler Bishop [AU]',
        result: 'W',
        table: 156,
      },
    },
  },
  {
    name: 'Julia Bridle [AU]',
    placing: 295,
    record: {
      wins: 3,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.3959876543209877,
      oppopp: 0.47531494953948655,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'James Grkinic [AU]',
        result: 'T',
        table: 105,
      },
      '2': {
        name: 'Markus Janssen [AU]',
        result: 'L',
        table: 134,
      },
      '3': {
        name: 'Jackson Mcdonald [AU]',
        result: 'L',
        table: 201,
      },
      '4': {
        name: 'Morgan Squire [AU]',
        result: 'W',
        table: 238,
      },
      '5': {
        name: 'Zhaolong Zhu [AU]',
        result: 'W',
        table: 181,
      },
      '6': {
        name: 'Fabrice Rivalland [AU]',
        result: 'L',
        table: 107,
      },
      '7': {
        name: 'Bee Blackwell [AU]',
        result: 'T',
        table: 167,
      },
      '8': {
        name: 'Josephine Nucifora [AU]',
        result: 'L',
        table: 152,
      },
      '9': {
        name: 'Steven Hector [AU]',
        result: 'W',
        table: 162,
      },
    },
  },
  {
    name: 'Mathew masefield [AU]',
    placing: 296,
    record: {
      wins: 3,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.6224489795918368,
      oppopp: 0.5076773566569485,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Yao Ly [AU]',
        result: 'W',
        table: 255,
      },
      '2': {
        name: 'Callum Walker [AU]',
        result: 'W',
        table: 59,
      },
      '3': {
        name: 'Hao Lu [AU]',
        result: 'T',
        table: 34,
      },
      '4': {
        name: 'Hakim Moussaoui [AU]',
        result: 'L',
        table: 42,
      },
      '5': {
        name: 'Blake Davies [AU]',
        result: 'L',
        table: 78,
      },
      '6': {
        name: 'Aydan Barrett [AU]',
        result: 'W',
        table: 126,
      },
      '7': {
        name: 'Mitch Knuckey [AU]',
        result: 'L',
        table: 82,
      },
    },
  },
  {
    name: 'ユキ OKA [JP]',
    placing: 297,
    record: {
      wins: 3,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.4375,
      opp: 0.609375,
      oppopp: 0.6094401041666666,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Aaron Matcham [AU]',
        result: 'W',
        table: 182,
      },
      '2': {
        name: 'Louis Chi [NZ]',
        result: 'W',
        table: 27,
      },
      '3': {
        name: 'Jess Owers [AU]',
        result: 'T',
        table: 32,
      },
      '4': {
        name: 'Der Cherng Lee [NZ]',
        result: 'W',
        table: 39,
      },
      '5': {
        name: 'Kazuo Nakamura [AU]',
        result: 'L',
        table: 15,
      },
      '6': {
        name: 'Jake Dunstan [AU]',
        result: 'L',
        table: 39,
      },
      '7': {
        name: 'Sineth Akmeemana [AU]',
        result: 'L',
        table: 84,
      },
      '8': {
        name: 'Shane Quinn [AU]',
        result: 'L',
        table: 110,
      },
    },
  },
  {
    name: 'Aaron van der Kolk [AU]',
    placing: 298,
    record: {
      wins: 3,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.4375,
      opp: 0.5989583333333333,
      oppopp: 0.5361142113095239,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Arnouluck Sirisay [AU]',
        result: 'W',
        table: 224,
      },
      '2': {
        name: 'Lewis Stevens [AU]',
        result: 'T',
        table: 55,
      },
      '3': {
        name: 'Tom Bourke [AU]',
        result: 'W',
        table: 54,
      },
      '4': {
        name: 'Nathan Spry [AU]',
        result: 'L',
        table: 28,
      },
      '5': {
        name: 'DI ZHU [CN]',
        result: 'L',
        table: 95,
      },
      '6': {
        name: 'Liam Flood [NZ]',
        result: 'W',
        table: 141,
      },
      '7': {
        name: 'Jake Cruwys [AU]',
        result: 'L',
        table: 94,
      },
      '8': {
        name: 'Deacan Page [AU]',
        result: 'L',
        table: 119,
      },
    },
  },
  {
    name: 'Fabrice Rivalland [AU]',
    placing: 299,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.564373897707231,
      oppopp: 0.48948062764200334,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Joshua Martin [AU]',
        result: 'W',
        table: 207,
      },
      '2': {
        name: 'Skye Godfrey [NZ]',
        result: 'L',
        table: 17,
      },
      '3': {
        name: 'Jose de la garma [AU]',
        result: 'L',
        table: 158,
      },
      '4': {
        name: 'Matt Annable [AU]',
        result: 'T',
        table: 183,
      },
      '5': {
        name: 'Henry Bradnam [AU]',
        result: 'W',
        table: 197,
      },
      '6': {
        name: 'Julia Bridle [AU]',
        result: 'W',
        table: 107,
      },
      '7': {
        name: 'Anton Piccio [AU]',
        result: 'L',
        table: 88,
      },
      '8': {
        name: 'Robin Sangwan [AU]',
        result: 'L',
        table: 113,
      },
      '9': {
        name: 'Scott Minnekeer [AU]',
        result: 'L',
        table: 126,
      },
    },
  },
  {
    name: 'Kelvin Nguyen [AU]',
    placing: 300,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.54673721340388,
      oppopp: 0.48671999664063165,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Ashton Grant [AU]',
        result: 'L',
        table: 244,
      },
      '2': {
        name: 'Hugo Pearce [AU]',
        result: 'W',
        table: 222,
      },
      '3': {
        name: 'Sameer Sangwan [AU]',
        result: 'W',
        table: 149,
      },
      '4': {
        name: 'Scott Langford [AU]',
        result: 'W',
        table: 75,
      },
      '5': {
        name: 'Bing Jun Chan [SG]',
        result: 'L',
        table: 46,
      },
      '6': {
        name: 'Jason Zhe [AU]',
        result: 'T',
        table: 72,
      },
      '7': {
        name: 'Noah Lin [CN]',
        result: 'L',
        table: 98,
      },
      '8': {
        name: 'Alicia Keizer [AU]',
        result: 'L',
        table: 126,
      },
      '9': {
        name: 'Bayley Janssen [AU]',
        result: 'L',
        table: 141,
      },
    },
  },
  {
    name: 'Diego Gatica [CL]',
    placing: 301,
    record: {
      wins: 3,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.5459183673469388,
      oppopp: 0.514310009718173,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Kerwin Lee [AU]',
        result: 'W',
        table: 264,
      },
      '2': {
        name: 'Nigel Tan [NZ]',
        result: 'L',
        table: 97,
      },
      '3': {
        name: 'Carl Orbista [AU]',
        result: 'W',
        table: 107,
      },
      '4': {
        name: 'Joshua Bradley [AU]',
        result: 'W',
        table: 48,
      },
      '5': {
        name: 'Jason Zhe [AU]',
        result: 'T',
        table: 53,
      },
      '6': {
        name: 'Andy Truong [AU]',
        result: 'L',
        table: 50,
      },
      '7': {
        name: 'Der Cherng Lee [NZ]',
        result: 'L',
        table: 69,
      },
    },
  },
  {
    name: 'Sky Mathieson [AU]',
    placing: 302,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.5444444444444445,
      oppopp: 0.5331099353321576,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'YUTIAN SHOU [AU]',
        result: 'T',
        table: 260,
      },
      '2': {
        name: 'Aaron-Lee Cole [AU]',
        result: 'W',
        table: 136,
      },
      '3': {
        name: 'Alfie Delgado [MX]',
        result: 'L',
        table: 60,
      },
      '4': {
        name: 'James Futcher [AU]',
        result: 'W',
        table: 128,
      },
      '5': {
        name: 'Tian Li [NZ]',
        result: 'W',
        table: 148,
      },
      '6': {
        name: 'Michael Wilson [AU]',
        result: 'L',
        table: 47,
      },
      '7': {
        name: 'Lily Huynh [AU]',
        result: 'L',
        table: 77,
      },
      '8': {
        name: 'Ayane Matsumoto [AU]',
        result: 'L',
        table: 124,
      },
      '9': {
        name: 'Brittany Mitchell [AU]',
        result: 'L',
        table: 132,
      },
    },
  },
  {
    name: 'Michael Hicks [AU]',
    placing: 303,
    record: {
      wins: 3,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.5833333333333334,
      opp: 0.5416666666666666,
      oppopp: 0.5356481481481481,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Hugh Batten [NZ]',
        result: 'L',
        table: 213,
      },
      '2': {
        name: 'Robin Sangwan [AU]',
        result: 'W',
        table: 230,
      },
      '3': {
        name: 'Soon Keat Chia [MY]',
        result: 'W',
        table: 90,
      },
      '4': {
        name: 'Yin Jiang [AU]',
        result: 'T',
        table: 52,
      },
      '5': {
        name: 'Nigel Tan [NZ]',
        result: 'W',
        table: 81,
      },
      '6': {
        name: 'Justin Teh [AU]',
        result: 'L',
        table: 58,
      },
    },
  },
  {
    name: 'Jason Zhe [AU]',
    placing: 304,
    record: {
      wins: 2,
      losses: 1,
      ties: 4,
    },
    resistances: {
      self: 0.5714285714285714,
      opp: 0.5408163265306122,
      oppopp: 0.5419663103336573,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Manuel Jorach [AT]',
        result: 'T',
        table: 154,
      },
      '2': {
        name: 'Jacob Sparks [AU]',
        result: 'W',
        table: 133,
      },
      '3': {
        name: 'David Burness [AU]',
        result: 'T',
        table: 74,
      },
      '4': {
        name: 'Chen Ching Lee [TW]',
        result: 'W',
        table: 102,
      },
      '5': {
        name: 'Diego Gatica [CL]',
        result: 'T',
        table: 53,
      },
      '6': {
        name: 'Kelvin Nguyen [AU]',
        result: 'T',
        table: 72,
      },
      '7': {
        name: 'Ash Nassiri [NZ]',
        result: 'L',
        table: 76,
      },
    },
  },
  {
    name: 'Paul Coletta [AU]',
    placing: 305,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.5271604938271603,
      oppopp: 0.506643640995493,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Winston Chui [AU]',
        result: 'L',
        table: 86,
      },
      '2': {
        name: 'Zachary Vella [AU]',
        result: 'W',
        table: 231,
      },
      '3': {
        name: 'Saxon Wright [AU]',
        result: 'T',
        table: 134,
      },
      '4': {
        name: 'Blake Davies [AU]',
        result: 'L',
        table: 121,
      },
      '5': {
        name: 'Malik Hisyam Zaihan [IE]',
        result: 'W',
        table: 184,
      },
      '6': {
        name: 'Der Cherng Lee [NZ]',
        result: 'L',
        table: 136,
      },
      '7': {
        name: 'Nathan Belcher [AU]',
        result: 'W',
        table: 159,
      },
      '8': {
        name: 'John Morris [AU]',
        result: 'L',
        table: 117,
      },
      '9': {
        name: 'Dante Sun [AU]',
        result: 'L',
        table: 138,
      },
    },
  },
  {
    name: 'asger balle [AU]',
    placing: 306,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.5270061728395061,
      oppopp: 0.5078149495394865,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Edmund Khoo [SG]',
        result: 'T',
        table: 45,
      },
      '2': {
        name: 'Nathan Spry [AU]',
        result: 'L',
        table: 143,
      },
      '3': {
        name: 'Stefan Djordjevic [AU]',
        result: 'W',
        table: 221,
      },
      '4': {
        name: 'Mohd Taufiq Mohd Alwi [SG]',
        result: 'W',
        table: 140,
      },
      '5': {
        name: 'Ferdi Mak [AU]',
        result: 'W',
        table: 60,
      },
      '6': {
        name: 'Jacob McSpadden [AU]',
        result: 'L',
        table: 48,
      },
      '7': {
        name: 'Yongxiang Liu [AU]',
        result: 'L',
        table: 96,
      },
      '8': {
        name: 'Nigel Yam [AU]',
        result: 'L',
        table: 105,
      },
      '9': {
        name: 'Rogan Gilbertson [AU]',
        result: 'L',
        table: 143,
      },
    },
  },
  {
    name: 'Calum Thatcher [AU]',
    placing: 307,
    record: {
      wins: 3,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.4375,
      opp: 0.5234375,
      oppopp: 0.49383503401360546,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Shane Quinn [AU]',
        result: 'L',
        table: 263,
      },
      '2': {
        name: 'Tayla-Jane Lovett [AU]',
        result: 'W',
        table: 196,
      },
      '3': {
        name: 'Callum Walker [AU]',
        result: 'W',
        table: 148,
      },
      '4': {
        name: 'Louis Chi [NZ]',
        result: 'L',
        table: 82,
      },
      '5': {
        name: 'Jake Lazzari [AU]',
        result: 'T',
        table: 132,
      },
      '6': {
        name: 'Jake Herden [AU]',
        result: 'W',
        table: 129,
      },
      '7': {
        name: 'KODY TRAN [AU]',
        result: 'L',
        table: 89,
      },
      '8': {
        name: 'Markus Janssen [AU]',
        result: 'L',
        table: 120,
      },
    },
  },
  {
    name: 'Jee Ong [AU]',
    placing: 308,
    record: {
      wins: 3,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.5153061224489796,
      oppopp: 0.5094590217039197,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Hao Lu [AU]',
        result: 'L',
        table: 18,
      },
      '2': {
        name: 'Jonathan Tjahjono [AU]',
        result: 'W',
        table: 189,
      },
      '3': {
        name: 'Kenneth Peake [AU]',
        result: 'W',
        table: 91,
      },
      '4': {
        name: 'Nicholas Choong [NZ]',
        result: 'T',
        table: 90,
      },
      '5': {
        name: 'Montana Drew [AU]',
        result: 'W',
        table: 77,
      },
      '6': {
        name: 'Rostin Luo [NZ]',
        result: 'L',
        table: 37,
      },
      '7': {
        name: 'fayyadh salleh [SG]',
        result: 'L',
        table: 95,
      },
    },
  },
  {
    name: 'Stuart Flynn [AU]',
    placing: 309,
    record: {
      wins: 2,
      losses: 3,
      ties: 4,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.5046296296296295,
      oppopp: 0.5014629874583578,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Toby Frost [AU]',
        result: 'W',
        table: 102,
      },
      '2': {
        name: 'David Boyd [AU]',
        result: 'T',
        table: 21,
      },
      '3': {
        name: 'Edmund Khoo [SG]',
        result: 'L',
        table: 65,
      },
      '4': {
        name: 'Destyn Weir [AU]',
        result: 'T',
        table: 135,
      },
      '5': {
        name: 'Lewis Stevens [AU]',
        result: 'W',
        table: 143,
      },
      '6': {
        name: 'Kevin Min [AU]',
        result: 'T',
        table: 91,
      },
      '7': {
        name: 'Jeremy Lim [AU]',
        result: 'L',
        table: 119,
      },
      '8': {
        name: 'xingyu huang [AT]',
        result: 'T',
        table: 135,
      },
      '9': {
        name: 'Jake Lazzari [AU]',
        result: 'L',
        table: 144,
      },
    },
  },
  {
    name: 'James Futcher [AU]',
    placing: 310,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.5043209876543211,
      oppopp: 0.4846330589849108,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Louis Chi [NZ]',
        result: 'L',
        table: 196,
      },
      '2': {
        name: 'Luke Schmitt [AU]',
        result: 'T',
        table: 193,
      },
      '3': {
        name: 'Benjamin McMahon [AU]',
        result: 'W',
        table: 211,
      },
      '4': {
        name: 'Sky Mathieson [AU]',
        result: 'L',
        table: 128,
      },
      '5': {
        name: 'Rui Crocitta [AU]',
        result: 'W',
        table: 156,
      },
      '6': {
        name: 'Nigel Tan [NZ]',
        result: 'L',
        table: 115,
      },
      '7': {
        name: 'brian truong [AU]',
        result: 'W',
        table: 150,
      },
      '8': {
        name: 'Fletcher Konynenburg [AU]',
        result: 'L',
        table: 125,
      },
      '9': {
        name: 'Jake Herden [AU]',
        result: 'L',
        table: 130,
      },
    },
  },
  {
    name: 'Jack Burmeister [AU]',
    placing: 311,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.503858024691358,
      oppopp: 0.481523736037625,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'David Frans Daritan [AU]',
        result: 'L',
        table: 185,
      },
      '2': {
        name: 'Kaiwen Cabbabe [AU]',
        result: 'L',
        table: 225,
      },
      '3': {
        name: 'Alexander Roderick [AU]',
        result: 'W',
        table: 242,
      },
      '4': {
        name: 'Cameron Dimond [AU]',
        result: 'W',
        table: 207,
      },
      '5': {
        name: 'Ben Sinclair [AU]',
        result: 'L',
        table: 134,
      },
      '6': {
        name: 'Jay Tyrrell [AU]',
        result: 'L',
        table: 155,
      },
      '7': {
        name: 'Tuan Ho [AU]',
        result: 'L',
        table: 178,
      },
      '8': {
        name: 'Morris Arnold [AU]',
        result: 'W',
        table: 183,
      },
      '9': {
        name: 'Ayumi Tamai [JP]',
        result: 'T',
        table: 148,
      },
    },
  },
  {
    name: 'Benjamin Small [AU]',
    placing: 312,
    record: {
      wins: 2,
      losses: 3,
      ties: 4,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.5030864197530864,
      oppopp: 0.4996852341759749,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Tristan Young [AU]',
        result: 'L',
        table: 36,
      },
      '2': {
        name: 'Charles Li [AU]',
        result: 'T',
        table: 212,
      },
      '3': {
        name: 'Alicia Keizer [AU]',
        result: 'W',
        table: 210,
      },
      '4': {
        name: 'Jordan Stamatopoulos [AU]',
        result: 'T',
        table: 113,
      },
      '5': {
        name: 'Jesse Becker [AU]',
        result: 'T',
        table: 141,
      },
      '6': {
        name: 'Emma Baker [AU]',
        result: 'W',
        table: 160,
      },
      '7': {
        name: 'Hayden Barker [AU]',
        result: 'T',
        table: 105,
      },
      '8': {
        name: 'Chung-Yin Johnny Chan [AU]',
        result: 'L',
        table: 108,
      },
      '9': {
        name: 'Ryan Burt [AU]',
        result: 'L',
        table: 136,
      },
    },
  },
  {
    name: 'William Rue [AU]',
    placing: 313,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.5024691358024691,
      oppopp: 0.46965706447187927,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Christopher Fragiotta [AU]',
        result: 'W',
        table: 82,
      },
      '2': {
        name: 'Will Ladner [AU]',
        result: 'L',
        table: 40,
      },
      '3': {
        name: 'Justin Truong [AU]',
        result: 'L',
        table: 100,
      },
      '4': {
        name: 'Jason Slifka [AU]',
        result: 'W',
        table: 160,
      },
      '5': {
        name: 'Cassie Joison [AU]',
        result: 'T',
        table: 130,
      },
      '6': {
        name: 'Ashton Bradley [AU]',
        result: 'L',
        table: 119,
      },
      '7': {
        name: 'Jer-Shyan Hwa [AU]',
        result: 'W',
        table: 166,
      },
      '8': {
        name: 'Hayden Barker [AU]',
        result: 'L',
        table: 123,
      },
      '9': {
        name: 'Jack underwood [AU]',
        result: 'L',
        table: 134,
      },
    },
  },
  {
    name: 'Christofer Gozali [AU]',
    placing: 314,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.49691358024691357,
      oppopp: 0.4703458749755046,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jimmy Nguyen [AU]',
        result: 'T',
        table: 169,
      },
      '2': {
        name: 'Jeb Collins [AU]',
        result: 'L',
        table: 129,
      },
      '3': {
        name: 'Khristian Embog [AU]',
        result: 'W',
        table: 216,
      },
      '4': {
        name: 'Anton Piccio [AU]',
        result: 'L',
        table: 143,
      },
      '5': {
        name: 'Ashton Bradley [AU]',
        result: 'L',
        table: 163,
      },
      '6': {
        name: 'Peter Colosimo [AU]',
        result: 'W',
        table: 210,
      },
      '7': {
        name: 'Julian Luvara [AU]',
        result: 'L',
        table: 172,
      },
      '8': {
        name: 'Jack underwood [AU]',
        result: 'L',
        table: 175,
      },
      '9': {
        name: 'Donna Pedder [AU]',
        result: 'W',
        table: 168,
      },
    },
  },
  {
    name: 'Oliver Karmel-Shann [CA]',
    placing: 315,
    record: {
      wins: 3,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.49489795918367346,
      oppopp: 0.5239795918367347,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Nina Junaidi [SG]',
        result: 'W',
        table: 177,
      },
      '2': {
        name: 'Christian Delloiaco [AU]',
        result: 'L',
        table: 43,
      },
      '3': {
        name: 'Keegan Burt [AU]',
        result: 'T',
        table: 120,
      },
      '4': {
        name: 'Jettano Posani [AU]',
        result: 'L',
        table: 152,
      },
      '5': {
        name: 'Peter Rennie [AU]',
        result: 'W',
        table: 180,
      },
      '6': {
        name: 'Chung-Yin Johnny Chan [AU]',
        result: 'L',
        table: 139,
      },
      '7': {
        name: 'Paige Chamberlain [AU]',
        result: 'W',
        table: 161,
      },
    },
  },
  {
    name: 'Jer-Shyan Hwa [AU]',
    placing: 316,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.4915123456790123,
      oppopp: 0.4795417524005487,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Ethan Cooper [AU]',
        result: 'T',
        table: 91,
      },
      '2': {
        name: 'Hannah Paterson [AU]',
        result: 'W',
        table: 112,
      },
      '3': {
        name: 'Jake Dunstan [AU]',
        result: 'L',
        table: 61,
      },
      '4': {
        name: 'Hoong Yoong Ngiam [AU]',
        result: 'L',
        table: 150,
      },
      '5': {
        name: 'Brandon Wilson [AU]',
        result: 'W',
        table: 173,
      },
      '6': {
        name: 'Alan Quach [NZ]',
        result: 'L',
        table: 120,
      },
      '7': {
        name: 'William Rue [AU]',
        result: 'L',
        table: 166,
      },
      '8': {
        name: 'brian truong [AU]',
        result: 'W',
        table: 171,
      },
      '9': {
        name: 'Michael Taylor [AU]',
        result: 'L',
        table: 139,
      },
    },
  },
  {
    name: 'James Breene [AU]',
    placing: 317,
    record: {
      wins: 2,
      losses: 3,
      ties: 4,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.49074074074074076,
      oppopp: 0.4706594160297864,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Der Cherng Lee [NZ]',
        result: 'T',
        table: 19,
      },
      '2': {
        name: 'xinzhe hou [AU]',
        result: 'L',
        table: 156,
      },
      '3': {
        name: 'Luke Schmitt [AU]',
        result: 'L',
        table: 190,
      },
      '4': {
        name: 'Shaun Camilleri [AU]',
        result: 'W',
        table: 226,
      },
      '5': {
        name: 'Jorja Doenau [AU]',
        result: 'T',
        table: 202,
      },
      '6': {
        name: 'Tuan Ho [AU]',
        result: 'T',
        table: 178,
      },
      '7': {
        name: 'Jack Riley [AU]',
        result: 'T',
        table: 176,
      },
      '8': {
        name: 'Joshua Martin [AU]',
        result: 'L',
        table: 178,
      },
      '9': {
        name: 'Nicholas Choong [NZ]',
        result: 'W',
        table: 165,
      },
    },
  },
  {
    name: 'Chloe Appleby [AU]',
    placing: 318,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.4887566137566137,
      oppopp: 0.49895304057837137,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Max Kennedy [AU]',
        result: 'L',
        table: 73,
      },
      '2': {
        name: 'Samantha Turner [AU]',
        result: 'L',
        table: 261,
      },
      '3': {
        name: 'Jonathan Tjahjono [AU]',
        result: 'W',
        table: 244,
      },
      '4': {
        name: 'Yao Ly [AU]',
        result: 'L',
        table: 192,
      },
      '5': {
        name: 'Christopher Ganal [AU]',
        result: 'W',
        table: 209,
      },
      '6': {
        name: 'Anthony Smith [AU]',
        result: 'W',
        table: 159,
      },
      '7': {
        name: 'Andrew Teoh [AU]',
        result: 'L',
        table: 111,
      },
      '8': {
        name: 'Scott Minnekeer [AU]',
        result: 'T',
        table: 130,
      },
      '9': {
        name: 'Ancel Franklin [AU]',
        result: 'L',
        table: 145,
      },
    },
  },
  {
    name: 'James Boynton [AU]',
    placing: 319,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.48765432098765427,
      oppopp: 0.5427248677248677,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Chih hao Lin [AU]',
        result: 'W',
        table: 119,
      },
      '2': {
        name: 'Mitch Knuckey [AU]',
        result: 'T',
        table: 65,
      },
      '3': {
        name: 'charles limbrick [AU]',
        result: 'L',
        table: 72,
      },
      '4': {
        name: 'David Frans Daritan [AU]',
        result: 'L',
        table: 136,
      },
      '5': {
        name: 'Carmen Harris [AU]',
        result: 'L',
        table: 162,
      },
      '6': {
        name: 'Peter Rennie [AU]',
        result: 'W',
        table: 215,
      },
      '7': {
        name: 'Benjamin Rolfe [AU]',
        result: 'W',
        table: 146,
      },
      '8': {
        name: 'Sylas Golding [AU]',
        result: 'L',
        table: 103,
      },
      '9': {
        name: 'Josephine Nucifora [AU]',
        result: 'L',
        table: 125,
      },
    },
  },
  {
    name: 'Michael Jiang [AU]',
    placing: 320,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.4768518518518518,
      oppopp: 0.47118790417401535,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'jeremy blackney [AU]',
        result: 'L',
        table: 95,
      },
      '2': {
        name: 'brian truong [AU]',
        result: 'W',
        table: 220,
      },
      '3': {
        name: 'Lewis Gall [NZ]',
        result: 'L',
        table: 128,
      },
      '4': {
        name: 'Hudson Moore [AU]',
        result: 'W',
        table: 166,
      },
      '5': {
        name: 'Wern Wong [NZ]',
        result: 'L',
        table: 131,
      },
      '6': {
        name: 'Jacques Gouws [NZ]',
        result: 'W',
        table: 174,
      },
      '7': {
        name: 'Alex Wu [AU]',
        result: 'L',
        table: 115,
      },
      '8': {
        name: 'Brittany Mitchell [AU]',
        result: 'T',
        table: 137,
      },
      '9': {
        name: 'Benjamin Rolfe [AU]',
        result: 'L',
        table: 140,
      },
    },
  },
  {
    name: 'Qihan Zhang [AU]',
    placing: 321,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.4729938271604939,
      oppopp: 0.480542695473251,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Kayla Stockwell [AU]',
        result: 'W',
        table: 8,
      },
      '2': {
        name: 'Tessa Isberg [FI]',
        result: 'L',
        table: 57,
      },
      '3': {
        name: 'Jack Eeles [AU]',
        result: 'W',
        table: 123,
      },
      '4': {
        name: 'Benjamin Kouzas [AU]',
        result: 'L',
        table: 73,
      },
      '5': {
        name: 'Kirryn Hatch [AU]',
        result: 'L',
        table: 101,
      },
      '6': {
        name: 'Shaun Coupe [AU]',
        result: 'T',
        table: 166,
      },
      '7': {
        name: 'Marcus Dwyer [AU]',
        result: 'W',
        table: 168,
      },
      '8': {
        name: 'Vie Seminiano [AU]',
        result: 'L',
        table: 114,
      },
      '9': {
        name: 'xingyu huang [AT]',
        result: 'L',
        table: 133,
      },
    },
  },
  {
    name: 'Denham Smith [AU]',
    placing: 322,
    record: {
      wins: 3,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.46768707482993194,
      oppopp: 0.5145772594752187,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Michael Wilson [AU]',
        result: 'L',
        table: 189,
      },
      '2': {
        name: 'Ruby Culley [AU]',
        result: 'W',
        table: 262,
      },
      '3': {
        name: 'Guysen Lang [NZ]',
        result: 'L',
        table: 153,
      },
      '4': {
        name: 'Carmen Harris [AU]',
        result: 'T',
        table: 187,
      },
      '5': {
        name: 'Mason Mitchell [AU]',
        result: 'W',
        table: 185,
      },
      '6': {
        name: 'Alfred Yang [AU]',
        result: 'W',
        table: 130,
      },
      '7': {
        name: 'TJ Dixon [AU]',
        result: 'L',
        table: 73,
      },
    },
  },
  {
    name: 'Su Fu [NZ]',
    placing: 323,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.4660493827160494,
      oppopp: 0.4511096413874191,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Sebastian Rutter [NZ]',
        result: 'L',
        table: 104,
      },
      '2': {
        name: 'Jordyn Demeo [AU]',
        result: 'W',
        table: 194,
      },
      '3': {
        name: 'Shang Jun Chua [AU]',
        result: 'L',
        table: 99,
      },
      '4': {
        name: 'Bayley Janssen [AU]',
        result: 'T',
        table: 163,
      },
      '5': {
        name: 'David Stevens [AU]',
        result: 'L',
        table: 167,
      },
      '6': {
        name: 'Nick Shortt [NZ]',
        result: 'W',
        table: 200,
      },
      '7': {
        name: 'Sammy Madafiglio [AU]',
        result: 'L',
        table: 163,
      },
      '8': {
        name: 'Matt Annable [AU]',
        result: 'W',
        table: 169,
      },
      '9': {
        name: 'Gareth Murphy [AU]',
        result: 'L',
        table: 129,
      },
    },
  },
  {
    name: 'Brandon Wilson [AU]',
    placing: 324,
    record: {
      wins: 3,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.4375,
      opp: 0.45498511904761907,
      oppopp: 0.4806410324546485,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'xinzhe hou [AU]',
        result: 'T',
        table: 115,
      },
      '2': {
        name: 'Jacques Gouws [NZ]',
        result: 'L',
        table: 138,
      },
      '3': {
        name: 'Holly Wang [AU]',
        result: 'L',
        table: 188,
      },
      '4': {
        name: 'Taylor Thomas [AU]',
        result: 'W',
        table: 224,
      },
      '5': {
        name: 'Jer-Shyan Hwa [AU]',
        result: 'L',
        table: 173,
      },
      '6': {
        name: 'Nina Junaidi [SG]',
        result: 'W',
        table: 213,
      },
      '7': {
        name: 'Justin Hoy [AU]',
        result: 'W',
        table: 148,
      },
      '8': {
        name: 'Ramzey Fayad [AU]',
        result: 'L',
        table: 127,
      },
    },
  },
  {
    name: 'Connor Tobin-Underwood [AU]',
    placing: 325,
    record: {
      wins: 3,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.4375,
      opp: 0.45357142857142857,
      oppopp: 0.47466624149659864,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Ryan Bews [AU]',
        result: 'L',
        table: 31,
      },
      '2': {
        name: 'James Neilson [AU]',
        result: 'T',
        table: 169,
      },
      '3': {
        name: 'Peter Colosimo [AU]',
        result: 'L',
        table: 203,
      },
      '4': {
        name: 'Jarrad Paxton [AU]',
        result: 'W',
        table: 223,
      },
      '5': {
        name: 'Kristopher Ryan-Clout [AU]',
        result: 'W',
        table: 168,
      },
      '6': {
        name: 'Isabelle Lohrey [AU]',
        result: 'W',
        table: 143,
      },
      '7': {
        name: 'Chris Currenti [AU]',
        result: 'L',
        table: 80,
      },
      '8': {
        name: 'Corey Brown [AU]',
        result: 'L',
        table: 116,
      },
    },
  },
  {
    name: 'Mike Kan [AU]',
    placing: 326,
    record: {
      wins: 2,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.5,
      opp: 0.4484375,
      oppopp: 0.49850384424603167,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Ehren Roebuck [AU]',
        result: 'T',
        table: 5,
      },
      '2': {
        name: 'Christian Makiling [AU]',
        result: 'T',
        table: 126,
      },
      '3': {
        name: 'Alex Hatzidakis [AU]',
        result: 'W',
        table: 174,
      },
      '4': {
        name: 'DONGXU LI [AU]',
        result: 'T',
        table: 106,
      },
      '5': {
        name: 'Kaiden Allan [AU]',
        result: 'L',
        table: 112,
      },
      '6': {
        name: 'Roman Addamo [AU]',
        result: 'L',
        table: 153,
      },
      '7': {
        name: 'Anthony Smith [AU]',
        result: 'T',
        table: 182,
      },
      '8': {
        name: 'Donna Pedder [AU]',
        result: 'W',
        table: 179,
      },
    },
  },
  {
    name: 'Stefan Djordjevic [AU]',
    placing: 327,
    record: {
      wins: 3,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.4375,
      opp: 0.4453125,
      oppopp: 0.500545634920635,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Saxon Wright [AU]',
        result: 'L',
        table: 128,
      },
      '2': {
        name: 'Paige Chamberlain [AU]',
        result: 'T',
        table: 242,
      },
      '3': {
        name: 'asger balle [AU]',
        result: 'L',
        table: 221,
      },
      '4': {
        name: 'Sarah McEvoy [AU]',
        result: 'W',
        table: 235,
      },
      '5': {
        name: 'Carl Orbista [AU]',
        result: 'W',
        table: 183,
      },
      '6': {
        name: 'Julian Luvara [AU]',
        result: 'W',
        table: 124,
      },
      '7': {
        name: '玄 王 [CN]',
        result: 'L',
        table: 74,
      },
      '8': {
        name: 'Charlie Queen [AU]',
        result: 'L',
        table: 104,
      },
    },
  },
  {
    name: 'Morgan Squire [AU]',
    placing: 328,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.42901234567901236,
      oppopp: 0.4488786008230453,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Michael Taylor [AU]',
        result: 'L',
        table: 137,
      },
      '2': {
        name: 'Benjamin McMahon [AU]',
        result: 'T',
        table: 243,
      },
      '3': {
        name: 'Vincent Ma [NZ]',
        result: 'L',
        table: 206,
      },
      '4': {
        name: 'Julia Bridle [AU]',
        result: 'L',
        table: 238,
      },
      '5': {
        name: 'Ryan Brook [AU]',
        result: 'W',
        table: 247,
      },
      '6': {
        name: 'Simon Higgins [AU]',
        result: 'W',
        table: 195,
      },
      '7': {
        name: 'Vie Seminiano [AU]',
        result: 'L',
        table: 155,
      },
      '8': {
        name: 'Gareth Murphy [AU]',
        result: 'L',
        table: 172,
      },
      '9': {
        name: 'Robin Law [AU]',
        result: 'W',
        table: 163,
      },
    },
  },
  {
    name: 'Jim Gow [AU]',
    placing: 329,
    record: {
      wins: 3,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.4375,
      opp: 0.42857142857142855,
      oppopp: 0.5051715738378685,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Daniel Mielnik [AU]',
        result: 'T',
        table: 122,
      },
      '2': {
        name: 'Reginald Ng [AU]',
        result: 'L',
        table: 140,
      },
      '3': {
        name: 'Sami MacKenzie [AU]',
        result: 'L',
        table: 189,
      },
      '4': {
        name: 'Jacob Sparks [AU]',
        result: 'L',
        table: 237,
      },
      '5': {
        name: 'Toby Frost [AU]',
        result: 'W',
        table: 243,
      },
      '6': {
        name: 'Henry Bradnam [AU]',
        result: 'W',
        table: 206,
      },
      '7': {
        name: 'Carmen Harris [AU]',
        result: 'W',
        table: 160,
      },
      '8': {
        name: 'Tait Tran [AU]',
        result: 'L',
        table: 122,
      },
    },
  },
  {
    name: 'Melinda Li [NZ]',
    placing: 330,
    record: {
      wins: 2,
      losses: 3,
      ties: 4,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.4249559082892416,
      oppopp: 0.458591444808376,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Josh Ng [AU]',
        result: 'T',
        table: 123,
      },
      '2': {
        name: 'Tommy Williams [AU]',
        result: 'T',
        table: 116,
      },
      '3': {
        name: 'Julian Luvara [AU]',
        result: 'L',
        table: 179,
      },
      '4': {
        name: 'Tian Li [NZ]',
        result: 'L',
        table: 221,
      },
      '5': {
        name: 'Ramzey Fayad [AU]',
        result: 'T',
        table: 234,
      },
      '6': {
        name: 'Marco Giovannini [AU]',
        result: 'W',
        table: 222,
      },
      '7': {
        name: 'Alexander Roderick [AU]',
        result: 'W',
        table: 180,
      },
      '8': {
        name: 'Ryan Burt [AU]',
        result: 'T',
        table: 128,
      },
      '9': {
        name: 'Khristian Embog [AU]',
        result: 'L',
        table: 135,
      },
    },
  },
  {
    name: 'Stella Gabler [AU]',
    placing: 331,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.42123015873015873,
      oppopp: 0.46662929369278583,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Peter Ghionis [AU]',
        result: 'W',
        table: 203,
      },
      '2': {
        name: 'Tristan Young [AU]',
        result: 'L',
        table: 89,
      },
      '3': {
        name: 'TJ Dixon [AU]',
        result: 'L',
        table: 106,
      },
      '4': {
        name: 'Kirryn Hatch [AU]',
        result: 'L',
        table: 159,
      },
      '5': {
        name: 'Matthew Anderson [AU]',
        result: 'L',
        table: 225,
      },
      '6': {
        name: 'Jesse Brewer [AU]',
        result: 'T',
        table: 228,
      },
      '7': {
        name: 'Sami MacKenzie [AU]',
        result: 'W',
        table: 206,
      },
      '8': {
        name: 'Paige Chamberlain [AU]',
        result: 'W',
        table: 164,
      },
      '9': {
        name: 'Justin Hoy [AU]',
        result: 'L',
        table: 128,
      },
    },
  },
  {
    name: 'Isabelle Lohrey [AU]',
    placing: 332,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.415895061728395,
      oppopp: 0.46144179894179893,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Ben Connor [AU]',
        result: 'L',
        table: 26,
      },
      '2': {
        name: 'Scott Langford [AU]',
        result: 'L',
        table: 229,
      },
      '3': {
        name: 'Jacob Mccall [AU]',
        result: 'W',
        table: 257,
      },
      '4': {
        name: 'Sammy Madafiglio [AU]',
        result: 'W',
        table: 180,
      },
      '5': {
        name: 'Alfred Yang [AU]',
        result: 'T',
        table: 102,
      },
      '6': {
        name: 'Connor Tobin-Underwood [AU]',
        result: 'L',
        table: 143,
      },
      '7': {
        name: 'Alicia Keizer [AU]',
        result: 'L',
        table: 170,
      },
      '8': {
        name: 'Joshua Sparks [AU]',
        result: 'W',
        table: 168,
      },
      '9': {
        name: 'Mohd Taufiq Mohd Alwi [SG]',
        result: 'L',
        table: 137,
      },
    },
  },
  {
    name: 'Sammy Madafiglio [AU]',
    placing: 333,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.40740740740740744,
      oppopp: 0.4606848912404468,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jeremy Evans [AU]',
        result: 'L',
        table: 23,
      },
      '2': {
        name: 'Nick Shortt [NZ]',
        result: 'W',
        table: 246,
      },
      '3': {
        name: 'Alexander Jemison [AU]',
        result: 'L',
        table: 154,
      },
      '4': {
        name: 'Isabelle Lohrey [AU]',
        result: 'L',
        table: 180,
      },
      '5': {
        name: 'Kylie Flynn [AU]',
        result: 'T',
        table: 207,
      },
      '6': {
        name: 'Daniel Pollard [AU]',
        result: 'W',
        table: 205,
      },
      '7': {
        name: 'Su Fu [NZ]',
        result: 'W',
        table: 163,
      },
      '8': {
        name: 'James Volis [AU]',
        result: 'L',
        table: 102,
      },
      '9': {
        name: 'Raymond Chan [AU]',
        result: 'L',
        table: 131,
      },
    },
  },
  {
    name: 'Ayumi Tamai [JP]',
    placing: 334,
    record: {
      wins: 2,
      losses: 3,
      ties: 4,
    },
    resistances: {
      self: 0.4444444444444444,
      opp: 0.40555555555555556,
      oppopp: 0.47744660003919254,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Andrew Lam [AU]',
        result: 'L',
        table: 175,
      },
      '2': {
        name: 'Tian Li [NZ]',
        result: 'T',
        table: 161,
      },
      '3': {
        name: 'Connor Jackson [AU]',
        result: 'T',
        table: 199,
      },
      '4': {
        name: 'Lawrence Lam [AU]',
        result: 'T',
        table: 215,
      },
      '5': {
        name: 'Ellie Crouch [AU]',
        result: 'W',
        table: 224,
      },
      '6': {
        name: 'Ryan Edwards [AU]',
        result: 'W',
        table: 161,
      },
      '7': {
        name: 'David Younan [AU]',
        result: 'L',
        table: 118,
      },
      '8': {
        name: 'Samuel Gianakis [AU]',
        result: 'L',
        table: 133,
      },
      '9': {
        name: 'Jack Burmeister [AU]',
        result: 'T',
        table: 148,
      },
    },
  },
  {
    name: 'Jack Riley [AU]',
    placing: 335,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.4012345679012345,
      oppopp: 0.4739543965734442,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Bailey Craig [AU]',
        result: 'L',
        table: 206,
      },
      '2': {
        name: 'Bradley Cannan-cole [AU]',
        result: 'L',
        table: 241,
      },
      '3': {
        name: 'Tayla-Jane Lovett [AU]',
        result: 'W',
        table: 259,
      },
      '4': {
        name: 'Fernando Monsalve [CL]',
        result: 'L',
        table: 191,
      },
      '5': {
        name: 'Michael Duong [AU]',
        result: 'W',
        table: 229,
      },
      '6': {
        name: 'Kurt Spiteri [AU]',
        result: 'L',
        table: 164,
      },
      '7': {
        name: 'James Breene [AU]',
        result: 'T',
        table: 176,
      },
      '8': {
        name: 'Benjamin Rolfe [AU]',
        result: 'L',
        table: 177,
      },
      '9': {
        name: 'Paige Chamberlain [AU]',
        result: 'W',
        table: 170,
      },
    },
  },
  {
    name: 'Yuhao Xia [AU]',
    placing: 336,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.39891975308641975,
      oppopp: 0.46246365058369027,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Alvin Hall [AU]',
        result: 'L',
        table: 16,
      },
      '2': {
        name: 'Jeremy Lim [AU]',
        result: 'L',
        table: 251,
      },
      '3': {
        name: 'Hudson Moore [AU]',
        result: 'L',
        table: 251,
      },
      '4': {
        name: 'David Valderrama [AU]',
        result: 'W',
        table: 252,
      },
      '5': {
        name: 'Christopher Chan [AU]',
        result: 'W',
        table: 223,
      },
      '6': {
        name: 'Eric Sanson [NZ]',
        result: 'L',
        table: 172,
      },
      '7': {
        name: 'Ellie Crouch [AU]',
        result: 'W',
        table: 188,
      },
      '8': {
        name: 'Dante Sun [AU]',
        result: 'T',
        table: 131,
      },
      '9': {
        name: 'Joshua Martin [AU]',
        result: 'L',
        table: 146,
      },
    },
  },
  {
    name: 'brian truong [AU]',
    placing: 337,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.3796296296296296,
      oppopp: 0.469208238851096,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Kye Edmondston [AU]',
        result: 'L',
        table: 83,
      },
      '2': {
        name: 'Michael Jiang [AU]',
        result: 'L',
        table: 220,
      },
      '3': {
        name: 'Yasuyuki Handa [AU]',
        result: 'L',
        table: 245,
      },
      '4': {
        name: 'Ho Kit Chan [HK]',
        result: 'W',
        table: 253,
      },
      '5': {
        name: 'Simon Higgins [AU]',
        result: 'T',
        table: 230,
      },
      '6': {
        name: 'Damien Commadeur [AU]',
        result: 'W',
        table: 209,
      },
      '7': {
        name: 'James Futcher [AU]',
        result: 'L',
        table: 150,
      },
      '8': {
        name: 'Jer-Shyan Hwa [AU]',
        result: 'L',
        table: 171,
      },
      '9': {
        name: 'Angela Lewis [AU]',
        result: 'W',
        table: 167,
      },
    },
  },
  {
    name: 'Matt Annable [AU]',
    placing: 338,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.35185185185185186,
      oppopp: 0.4587375073486185,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'James Kostoulias [AU]',
        result: 'L',
        table: 106,
      },
      '2': {
        name: 'Marco Giovannini [AU]',
        result: 'L',
        table: 233,
      },
      '3': {
        name: 'Dan Reichelt [AU]',
        result: 'W',
        table: 256,
      },
      '4': {
        name: 'Fabrice Rivalland [AU]',
        result: 'T',
        table: 183,
      },
      '5': {
        name: 'Raymond Chan [AU]',
        result: 'L',
        table: 176,
      },
      '6': {
        name: 'Dom Fleming [AU]',
        result: 'L',
        table: 212,
      },
      '7': {
        name: 'Daniel Bush [AU]',
        result: 'W',
        table: 202,
      },
      '8': {
        name: 'Su Fu [NZ]',
        result: 'L',
        table: 169,
      },
      '9': {
        name: 'Paul Aguilar [AU]',
        result: 'W',
        table: 166,
      },
    },
  },
  {
    name: 'Christopher Ganal [AU]',
    placing: 339,
    record: {
      wins: 3,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.35185185185185186,
      oppopp: 0.437888776909941,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Kylie Flynn [AU]',
        result: 'L',
        table: 77,
      },
      '2': {
        name: 'Soon Keat Chia [MY]',
        result: 'L',
        table: 199,
      },
      '3': {
        name: 'Lily Ly [AU]',
        result: 'W',
        table: 238,
      },
      '4': {
        name: 'Brittany Mitchell [AU]',
        result: 'L',
        table: 197,
      },
      '5': {
        name: 'Chloe Appleby [AU]',
        result: 'L',
        table: 209,
      },
      '6': {
        name: 'Marcus Yap [AU]',
        result: 'T',
        table: 224,
      },
      '7': {
        name: 'Ho Kit Chan [HK]',
        result: 'W',
        table: 201,
      },
      '8': {
        name: 'Mohd Taufiq Mohd Alwi [SG]',
        result: 'L',
        table: 166,
      },
      '9': {
        name: 'Joshua Sparks [AU]',
        result: 'W',
        table: 169,
      },
    },
  },
  {
    name: 'Daniel Schwan [AU]',
    placing: 340,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.611111111111111,
      oppopp: 0.5180555555555556,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Anton Piccio [AU]',
        result: 'W',
        table: 245,
      },
      '2': {
        name: 'CHEE WAI LIEW [AU]',
        result: 'L',
        table: 74,
      },
      '3': {
        name: 'Nathan Woodcock [AU]',
        result: 'W',
        table: 163,
      },
      '4': {
        name: 'Will Ladner [AU]',
        result: 'W',
        table: 69,
      },
      '5': {
        name: 'Callum Pinnegar [AU]',
        result: 'L',
        table: 38,
      },
      '6': {
        name: 'Josh Geltch [AU]',
        result: 'L',
        table: 82,
      },
    },
  },
  {
    name: 'Sam Connor [AU]',
    placing: 341,
    record: {
      wins: 2,
      losses: 1,
      ties: 3,
    },
    resistances: {
      self: 0.5833333333333334,
      opp: 0.5972222222222222,
      oppopp: 0.512962962962963,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Marcus Raj [AU]',
        result: 'W',
        table: 174,
      },
      '2': {
        name: 'Vignesh Krishnan [AU]',
        result: 'T',
        table: 88,
      },
      '3': {
        name: 'Aaron Woodrow [AU]',
        result: 'T',
        table: 77,
      },
      '4': {
        name: 'David Edebohls [AU]',
        result: 'W',
        table: 98,
      },
      '5': {
        name: 'Courtney Fox [AU]',
        result: 'T',
        table: 56,
      },
      '6': {
        name: 'Huy Nguyen [AU]',
        result: 'L',
        table: 86,
      },
    },
  },
  {
    name: 'Beau McElroy [AU]',
    placing: 342,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.5694444444444444,
      oppopp: 0.5465277777777777,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Aaron Woodrow [AU]',
        result: 'L',
        table: 192,
      },
      '2': {
        name: 'Dan Reichelt [AU]',
        result: 'W',
        table: 244,
      },
      '3': {
        name: 'Sebastian Trisch [AU]',
        result: 'W',
        table: 113,
      },
      '4': {
        name: 'Alan Quach [NZ]',
        result: 'W',
        table: 56,
      },
      '5': {
        name: 'Jeremy Evans [AU]',
        result: 'L',
        table: 28,
      },
      '6': {
        name: 'Shaun Sewell [AU]',
        result: 'L',
        table: 81,
      },
    },
  },
  {
    name: 'Justin Truong [AU]',
    placing: 343,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.5555555555555556,
      oppopp: 0.5398148148148149,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Jose de la garma [AU]',
        result: 'L',
        table: 34,
      },
      '2': {
        name: 'Kavanagh ODowd [AU]',
        result: 'W',
        table: 187,
      },
      '3': {
        name: 'William Rue [AU]',
        result: 'W',
        table: 100,
      },
      '4': {
        name: 'Sinan Gunaydin Okatan [AU]',
        result: 'W',
        table: 50,
      },
      '5': {
        name: 'Jordan Palmer [AU]',
        result: 'L',
        table: 27,
      },
      '6': {
        name: 'Roman Carfi [AU]',
        result: 'L',
        table: 59,
      },
    },
  },
  {
    name: 'Scott Leung [AU]',
    placing: 344,
    record: {
      wins: 2,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.5,
      opp: 0.5331632653061223,
      oppopp: 0.4850461613216715,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Henry Bradnam [AU]',
        result: 'T',
        table: 74,
      },
      '2': {
        name: 'Jorge Soria [AU]',
        result: 'L',
        table: 153,
      },
      '3': {
        name: 'troy fisher [AU]',
        result: 'T',
        table: 185,
      },
      '4': {
        name: 'Ethan Cooper [AU]',
        result: 'T',
        table: 213,
      },
      '5': {
        name: 'Lawrence Lam [AU]',
        result: 'W',
        table: 227,
      },
      '6': {
        name: 'Jordan Ung [AU]',
        result: 'W',
        table: 158,
      },
      '7': {
        name: 'David Stevens [AU]',
        result: 'L',
        table: 100,
      },
    },
  },
  {
    name: 'Hadyn Joyce [AU]',
    placing: 345,
    record: {
      wins: 3,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.375,
      opp: 0.5286458333333333,
      oppopp: 0.5057694692460317,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Kavanagh ODowd [AU]',
        result: 'W',
        table: 247,
      },
      '2': {
        name: 'Sam Hynes [AU]',
        result: 'W',
        table: 24,
      },
      '3': {
        name: 'James Goreing [AU]',
        result: 'L',
        table: 11,
      },
      '4': {
        name: 'Lewis Gall [NZ]',
        result: 'L',
        table: 76,
      },
      '5': {
        name: 'Georgia Trimble [AU]',
        result: 'W',
        table: 123,
      },
      '6': {
        name: 'Daniel Ross-Brown [AU]',
        result: 'L',
        table: 73,
      },
      '7': {
        name: 'Samuel Shepherd [NZ]',
        result: 'L',
        table: 113,
      },
      '8': {
        name: 'Jordan Stamatopoulos [AU]',
        result: 'L',
        table: 136,
      },
    },
  },
  {
    name: 'Kaiden Allan [AU]',
    placing: 346,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.5277777777777778,
      oppopp: 0.4962962962962963,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Zak Hamilton [AU]',
        result: 'L',
        table: 145,
      },
      '2': {
        name: 'Marcus Dwyer [AU]',
        result: 'W',
        table: 171,
      },
      '3': {
        name: 'Shaun Sewell [AU]',
        result: 'L',
        table: 112,
      },
      '4': {
        name: 'Ryan Edwards [AU]',
        result: 'W',
        table: 199,
      },
      '5': {
        name: 'Mike Kan [AU]',
        result: 'W',
        table: 112,
      },
      '6': {
        name: 'Ben Sinclair [AU]',
        result: 'L',
        table: 65,
      },
    },
  },
  {
    name: 'Hugh Batten [NZ]',
    placing: 347,
    record: {
      wins: 3,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.42857142857142855,
      opp: 0.5241496598639456,
      oppopp: 0.4953255587949465,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Michael Hicks [AU]',
        result: 'W',
        table: 213,
      },
      '2': {
        name: 'YiFei Ruan [AU]',
        result: 'L',
        table: 58,
      },
      '3': {
        name: 'Bradley Cannan-cole [AU]',
        result: 'L',
        table: 159,
      },
      '4': {
        name: 'Brandon Lee [AU]',
        result: 'W',
        table: 169,
      },
      '5': {
        name: 'Ryan Tan [UK]',
        result: 'L',
        table: 109,
      },
      '6': {
        name: 'Fernando Monsalve [CL]',
        result: 'W',
        table: 163,
      },
      '7': {
        name: 'Sameer Sangwan [AU]',
        result: 'L',
        table: 110,
      },
    },
  },
  {
    name: 'Benjamin Woodward [AU]',
    placing: 348,
    record: {
      wins: 2,
      losses: 3,
      ties: 3,
    },
    resistances: {
      self: 0.4375,
      opp: 0.5234375,
      oppopp: 0.45703125000000006,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Cody Matthewe [AU]',
        result: 'L',
        table: 93,
      },
      '2': {
        name: 'Shaun Camilleri [AU]',
        result: 'T',
        table: 176,
      },
      '3': {
        name: 'TE-AWHI TE ANGINA [AU]',
        result: 'W',
        table: 222,
      },
      '4': {
        name: 'Sam Chen [US]',
        result: 'T',
        table: 114,
      },
      '5': {
        name: 'Tuan Ho [AU]',
        result: 'W',
        table: 142,
      },
      '6': {
        name: 'Anthony Tsang [AU]',
        result: 'T',
        table: 103,
      },
      '7': {
        name: 'Ida Nero [AU]',
        result: 'L',
        table: 123,
      },
      '8': {
        name: 'Noah Midgley [AU]',
        result: 'L',
        table: 141,
      },
    },
  },
  {
    name: 'Peter Fay [AU]',
    placing: 349,
    record: {
      wins: 2,
      losses: 4,
      ties: 3,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.5135802469135803,
      oppopp: 0.5032296128327874,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Rui Crocitta [AU]',
        result: 'W',
        table: 47,
      },
      '2': {
        name: 'Samuel Gianakis [AU]',
        result: 'W',
        table: 47,
      },
      '3': {
        name: 'Nick Alvarez [US]',
        result: 'L',
        table: 45,
      },
      '4': {
        name: 'Ashton Grant [AU]',
        result: 'L',
        table: 74,
      },
      '5': {
        name: 'Hayden Barker [AU]',
        result: 'L',
        table: 115,
      },
      '6': {
        name: 'Michael Gleeson [AU]',
        result: 'T',
        table: 173,
      },
      '7': {
        name: 'Jiahe Liang [AU]',
        result: 'T',
        table: 171,
      },
      '8': {
        name: 'Rory Beniuk [AU]',
        result: 'T',
        table: 148,
      },
      '9': {
        name: 'Bradley Cannan-cole [AU]',
        result: 'L',
        table: 153,
      },
    },
  },
  {
    name: 'Matthew Caton [AU]',
    placing: 350,
    record: {
      wins: 2,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.5,
      opp: 0.5051020408163265,
      oppopp: 0.47993197278911565,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Ramzey Fayad [AU]',
        result: 'T',
        table: 165,
      },
      '2': {
        name: 'fayyadh salleh [SG]',
        result: 'L',
        table: 137,
      },
      '3': {
        name: 'Rostin Luo [NZ]',
        result: 'L',
        table: 195,
      },
      '4': {
        name: 'Carmela Nucifora [AU]',
        result: 'W',
        table: 232,
      },
      '5': {
        name: 'Timothy Uyeda [AU]',
        result: 'W',
        table: 182,
      },
      '6': {
        name: 'Marcus Raj [AU]',
        result: 'T',
        table: 131,
      },
      '7': {
        name: 'jeremy blackney [AU]',
        result: 'T',
        table: 137,
      },
    },
  },
  {
    name: 'Kurt Spiteri [AU]',
    placing: 351,
    record: {
      wins: 3,
      losses: 6,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.5030864197530865,
      oppopp: 0.5544162135018617,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Shaun VanRavenstein [AU]',
        result: 'W',
        table: 116,
      },
      '2': {
        name: 'Matthew Chong [AU]',
        result: 'L',
        table: 41,
      },
      '3': {
        name: 'Ryan Maullin [AU]',
        result: 'W',
        table: 152,
      },
      '4': {
        name: 'Christopher Mathers [AU]',
        result: 'L',
        table: 71,
      },
      '5': {
        name: 'Samuel Gianakis [AU]',
        result: 'L',
        table: 120,
      },
      '6': {
        name: 'Jack Riley [AU]',
        result: 'W',
        table: 164,
      },
      '7': {
        name: 'Jay Tyrrell [AU]',
        result: 'L',
        table: 117,
      },
      '8': {
        name: 'Jesse Becker [AU]',
        result: 'L',
        table: 140,
      },
      '9': {
        name: 'Zhiyuan Liang [CN]',
        result: 'L',
        table: 149,
      },
    },
  },
  {
    name: 'Matthew Anderson [AU]',
    placing: 352,
    record: {
      wins: 3,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.42857142857142855,
      opp: 0.489795918367347,
      oppopp: 0.504907677356657,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Ethan Stoeckert [AU]',
        result: 'W',
        table: 209,
      },
      '2': {
        name: 'Henry Brand [AU]',
        result: 'L',
        table: 107,
      },
      '3': {
        name: 'Marcus Raj [AU]',
        result: 'L',
        table: 89,
      },
      '4': {
        name: 'Lily Huynh [AU]',
        result: 'L',
        table: 162,
      },
      '5': {
        name: 'Stella Gabler [AU]',
        result: 'W',
        table: 225,
      },
      '6': {
        name: 'Jack Eeles [AU]',
        result: 'W',
        table: 165,
      },
      '7': {
        name: 'Nick Bell [AU]',
        result: 'L',
        table: 103,
      },
    },
  },
  {
    name: 'Nam Ho [AU]',
    placing: 353,
    record: {
      wins: 3,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.375,
      opp: 0.484375,
      oppopp: 0.4746518920068027,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: '[Table 1]Sam Hendle [AU]',
        result: 'L',
        table: 152,
      },
      '2': {
        name: 'Darren Caboche [AU]',
        result: 'W',
        table: 166,
      },
      '3': {
        name: 'Vincent Sutinah [AU]',
        result: 'L',
        table: 117,
      },
      '4': {
        name: 'Robbie Caldwell [AU]',
        result: 'L',
        table: 196,
      },
      '5': {
        name: 'Hugo Pearce [AU]',
        result: 'W',
        table: 205,
      },
      '6': {
        name: 'David Younan [AU]',
        result: 'L',
        table: 168,
      },
      '7': {
        name: 'Franklyn Hudson [AU]',
        result: 'W',
        table: 175,
      },
      '8': {
        name: 'Jason Slifka [AU]',
        result: 'L',
        table: 142,
      },
    },
  },
  {
    name: 'Jonathan Tjahjono [AU]',
    placing: 354,
    record: {
      wins: 3,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.375,
      opp: 0.4765625,
      oppopp: 0.4699638605442177,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Stefan Cocks [AU]',
        result: 'L',
        table: 252,
      },
      '2': {
        name: 'Jee Ong [AU]',
        result: 'L',
        table: 189,
      },
      '3': {
        name: 'Chloe Appleby [AU]',
        result: 'L',
        table: 244,
      },
      '4': {
        name: 'Cameron Peak [AU]',
        result: 'W',
        table: 248,
      },
      '5': {
        name: 'Celine Pearse [AU]',
        result: 'W',
        table: 218,
      },
      '6': {
        name: 'Alexander Jemison [AU]',
        result: 'W',
        table: 149,
      },
      '7': {
        name: 'Todd Williams [AU]',
        result: 'L',
        table: 106,
      },
      '8': {
        name: 'jeremy blackney [AU]',
        result: 'L',
        table: 138,
      },
    },
  },
  {
    name: 'Ryan Maullin [AU]',
    placing: 355,
    record: {
      wins: 3,
      losses: 6,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.4765432098765432,
      oppopp: 0.5203581226729375,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Rogan Gilbertson [AU]',
        result: 'W',
        table: 107,
      },
      '2': {
        name: 'Tan Loc Thuan Nguyen [AU]',
        result: 'L',
        table: 71,
      },
      '3': {
        name: 'Kurt Spiteri [AU]',
        result: 'L',
        table: 152,
      },
      '4': {
        name: 'Winston Chui [AU]',
        result: 'W',
        table: 188,
      },
      '5': {
        name: 'Ashley Coulthard [AU]',
        result: 'W',
        table: 128,
      },
      '6': {
        name: 'Joshua Bradley [AU]',
        result: 'L',
        table: 88,
      },
      '7': {
        name: 'Cody Matthewe [AU]',
        result: 'L',
        table: 116,
      },
      '8': {
        name: 'Lewis Gall [NZ]',
        result: 'L',
        table: 134,
      },
      '9': {
        name: 'Roman Addamo [AU]',
        result: 'L',
        table: 150,
      },
    },
  },
  {
    name: 'Carmen Harris [AU]',
    placing: 356,
    record: {
      wins: 2,
      losses: 4,
      ties: 3,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.4745370370370371,
      oppopp: 0.47946376081296715,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Joshua Grob [AU]',
        result: 'W',
        table: 49,
      },
      '2': {
        name: 'Paul Ashton [AU]',
        result: 'L',
        table: 39,
      },
      '3': {
        name: 'Ryan Burt [AU]',
        result: 'L',
        table: 151,
      },
      '4': {
        name: 'Denham Smith [AU]',
        result: 'T',
        table: 187,
      },
      '5': {
        name: 'James Boynton [AU]',
        result: 'W',
        table: 162,
      },
      '6': {
        name: 'Markus Janssen [AU]',
        result: 'L',
        table: 127,
      },
      '7': {
        name: 'Jim Gow [AU]',
        result: 'L',
        table: 160,
      },
      '8': {
        name: 'Fernando Monsalve [CL]',
        result: 'T',
        table: 163,
      },
      '9': {
        name: 'James Grkinic [AU]',
        result: 'T',
        table: 159,
      },
    },
  },
  {
    name: 'Calvin Prosser [AU]',
    placing: 357,
    record: {
      wins: 3,
      losses: 6,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.4691358024691357,
      oppopp: 0.495646643431035,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Keegan Burt [AU]',
        result: 'L',
        table: 51,
      },
      '2': {
        name: 'Michael Duong [AU]',
        result: 'W',
        table: 218,
      },
      '3': {
        name: 'Joshua Glen [AU]',
        result: 'W',
        table: 114,
      },
      '4': {
        name: 'Josh Geltch [AU]',
        result: 'L',
        table: 83,
      },
      '5': {
        name: 'Emma Baker [AU]',
        result: 'W',
        table: 119,
      },
      '6': {
        name: 'Corey O’Leary [AU]',
        result: 'L',
        table: 87,
      },
      '7': {
        name: 'Nathan Woodcock [AU]',
        result: 'L',
        table: 122,
      },
      '8': {
        name: 'Brayden S [AU]',
        result: 'L',
        table: 129,
      },
      '9': {
        name: 'Fangrao Feng [AU]',
        result: 'L',
        table: 147,
      },
    },
  },
  {
    name: 'James Grkinic [AU]',
    placing: 358,
    record: {
      wins: 2,
      losses: 4,
      ties: 3,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.46728395061728395,
      oppopp: 0.46972467176170885,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Julia Bridle [AU]',
        result: 'T',
        table: 105,
      },
      '2': {
        name: 'Alyssa Lock [AU]',
        result: 'L',
        table: 151,
      },
      '3': {
        name: 'James Neilson [AU]',
        result: 'L',
        table: 205,
      },
      '4': {
        name: 'Toby Frost [AU]',
        result: 'W',
        table: 225,
      },
      '5': {
        name: 'Jacob Sparks [AU]',
        result: 'T',
        table: 198,
      },
      '6': {
        name: 'Rory Beniuk [AU]',
        result: 'W',
        table: 183,
      },
      '7': {
        name: 'Jorja Doenau [AU]',
        result: 'L',
        table: 132,
      },
      '8': {
        name: 'Kadir Batuk [AU]',
        result: 'L',
        table: 153,
      },
      '9': {
        name: 'Carmen Harris [AU]',
        result: 'T',
        table: 159,
      },
    },
  },
  {
    name: 'Soon Keat Chia [MY]',
    placing: 359,
    record: {
      wins: 2,
      losses: 4,
      ties: 3,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.4619929453262786,
      oppopp: 0.47991139665742844,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Darrin Sin [AU]',
        result: 'L',
        table: 53,
      },
      '2': {
        name: 'Christopher Ganal [AU]',
        result: 'W',
        table: 199,
      },
      '3': {
        name: 'Michael Hicks [AU]',
        result: 'L',
        table: 90,
      },
      '4': {
        name: 'Mason Mitchell [AU]',
        result: 'T',
        table: 170,
      },
      '5': {
        name: 'Peter Lo [AU]',
        result: 'T',
        table: 190,
      },
      '6': {
        name: 'Tommy Williams [AU]',
        result: 'L',
        table: 181,
      },
      '7': {
        name: 'Ryan Mcculloch [AU]',
        result: 'W',
        table: 195,
      },
      '8': {
        name: 'Zhiyuan Liang [CN]',
        result: 'T',
        table: 160,
      },
      '9': {
        name: 'Jack Eeles [AU]',
        result: 'L',
        table: 152,
      },
    },
  },
  {
    name: 'Andrew Lam [AU]',
    placing: 360,
    record: {
      wins: 2,
      losses: 4,
      ties: 3,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.4545855379188713,
      oppopp: 0.48608521597939597,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Ayumi Tamai [JP]',
        result: 'W',
        table: 175,
      },
      '2': {
        name: 'Corey Munro [AU]',
        result: 'L',
        table: 108,
      },
      '3': {
        name: 'Ryan Mcculloch [AU]',
        result: 'T',
        table: 101,
      },
      '4': {
        name: 'Noah Lin [CN]',
        result: 'L',
        table: 129,
      },
      '5': {
        name: 'Kadir Batuk [AU]',
        result: 'L',
        table: 201,
      },
      '6': {
        name: 'Lance Griggs [AU]',
        result: 'T',
        table: 211,
      },
      '7': {
        name: 'Jeb Collins [AU]',
        result: 'W',
        table: 196,
      },
      '8': {
        name: 'Tom Sautelle [AU]',
        result: 'L',
        table: 146,
      },
      '9': {
        name: 'Calum McSpadden [AU]',
        result: 'T',
        table: 161,
      },
    },
  },
  {
    name: 'Joshua Grob [AU]',
    placing: 361,
    record: {
      wins: 3,
      losses: 6,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.4305555555555556,
      oppopp: 0.4122893396041544,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Carmen Harris [AU]',
        result: 'L',
        table: 49,
      },
      '2': {
        name: 'Noah Midgley [AU]',
        result: 'L',
        table: 204,
      },
      '3': {
        name: 'Cassie Joison [AU]',
        result: 'L',
        table: 241,
      },
      '4': {
        name: 'Hoi Hang Ho [AU]',
        result: 'W',
        table: 257,
      },
      '5': {
        name: 'Fangrao Feng [AU]',
        result: 'L',
        table: 216,
      },
      '6': {
        name: 'Christopher Turner [AU]',
        result: 'W',
        table: 225,
      },
      '7': {
        name: 'Cameron Peak [AU]',
        result: 'L',
        table: 185,
      },
      '8': {
        name: 'Zachary Bishop [AU]',
        result: 'L',
        table: 181,
      },
      '9': {
        name: 'Natasha Kelly [AU]',
        result: 'W',
        table: 172,
      },
    },
  },
  {
    name: 'Calum McSpadden [AU]',
    placing: 362,
    record: {
      wins: 2,
      losses: 4,
      ties: 3,
    },
    resistances: {
      self: 0.3888888888888889,
      opp: 0.42901234567901236,
      oppopp: 0.48279443464628646,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Manuel Cresdee [AU]',
        result: 'L',
        table: 35,
      },
      '2': {
        name: 'Eric Sanson [NZ]',
        result: 'T',
        table: 175,
      },
      '3': {
        name: 'Joshua Sparks [AU]',
        result: 'L',
        table: 186,
      },
      '4': {
        name: 'Ethan Stoeckert [AU]',
        result: 'T',
        table: 240,
      },
      '5': {
        name: 'Aditi Kutty [AU]',
        result: 'W',
        table: 238,
      },
      '6': {
        name: 'YUTIAN SHOU [AU]',
        result: 'L',
        table: 176,
      },
      '7': {
        name: 'Lance Griggs [AU]',
        result: 'W',
        table: 194,
      },
      '8': {
        name: 'Sinan Gunaydin Okatan [AU]',
        result: 'L',
        table: 147,
      },
      '9': {
        name: 'Andrew Lam [AU]',
        result: 'T',
        table: 161,
      },
    },
  },
  {
    name: 'Aaron Kleinhenz [US]',
    placing: 363,
    record: {
      wins: 3,
      losses: 6,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.4272486772486772,
      oppopp: 0.45125118977632206,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'troy fisher [AU]',
        result: 'W',
        table: 100,
      },
      '2': {
        name: 'David Younan [AU]',
        result: 'L',
        table: 93,
      },
      '3': {
        name: 'Harrison Pirotta [AU]',
        result: 'L',
        table: 142,
      },
      '4': {
        name: 'Jay Tyrrell [AU]',
        result: 'L',
        table: 185,
      },
      '5': {
        name: 'Jarrad Paxton [AU]',
        result: 'L',
        table: 231,
      },
      '6': {
        name: 'Alex Gordon [NZ]',
        result: 'L',
        table: 226,
      },
      '7': {
        name: 'Ruby Culley [AU]',
        result: 'L',
        table: 210,
      },
      '8': {
        name: 'Aditi Kutty [AU]',
        result: 'W',
        table: 195,
      },
      '9': {
        name: 'Nathan Belcher [AU]',
        result: 'W',
        table: 171,
      },
    },
  },
  {
    name: 'Ellie Crouch [AU]',
    placing: 364,
    record: {
      wins: 3,
      losses: 6,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.42361111111111116,
      oppopp: 0.4409239969135802,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'WaiLok Tse [AU]',
        result: 'L',
        table: 17,
      },
      '2': {
        name: 'BYE',
        result: 'W',
        table: 0,
      },
      '3': {
        name: 'Tyler Adamson [AU]',
        result: 'L',
        table: 96,
      },
      '4': {
        name: 'Callum Walker [AU]',
        result: 'L',
        table: 193,
      },
      '5': {
        name: 'Ayumi Tamai [JP]',
        result: 'L',
        table: 224,
      },
      '6': {
        name: 'Harry Driscoll [AU]',
        result: 'W',
        table: 227,
      },
      '7': {
        name: 'Yuhao Xia [AU]',
        result: 'L',
        table: 188,
      },
      '8': {
        name: 'Stanley Chaplin [AU]',
        result: 'L',
        table: 186,
      },
      '9': {
        name: 'Alex Gordon [NZ]',
        result: 'W',
        table: 173,
      },
    },
  },
  {
    name: 'Ruby Culley [AU]',
    placing: 365,
    record: {
      wins: 3,
      losses: 6,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.3944444444444445,
      oppopp: 0.43495489348002575,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Nick Alvarez [US]',
        result: 'L',
        table: 25,
      },
      '2': {
        name: 'Denham Smith [AU]',
        result: 'L',
        table: 262,
      },
      '3': {
        name: 'Brandon Lee [AU]',
        result: 'L',
        table: 227,
      },
      '4': {
        name: 'Kayla Stockwell [AU]',
        result: 'L',
        table: 245,
      },
      '5': {
        name: 'Lily Ly [AU]',
        result: 'W',
        table: 249,
      },
      '6': {
        name: 'Natasha Kelly [AU]',
        result: 'L',
        table: 217,
      },
      '7': {
        name: 'Aaron Kleinhenz [US]',
        result: 'W',
        table: 210,
      },
      '8': {
        name: 'Alex Gordon [NZ]',
        result: 'W',
        table: 185,
      },
      '9': {
        name: 'Holly Wang [AU]',
        result: 'L',
        table: 151,
      },
    },
  },
  {
    name: 'Alexander Roderick [AU]',
    placing: 366,
    record: {
      wins: 3,
      losses: 6,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.38703703703703707,
      oppopp: 0.4674806136446349,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Ashley Coulthard [AU]',
        result: 'L',
        table: 199,
      },
      '2': {
        name: 'Dom Fleming [AU]',
        result: 'L',
        table: 168,
      },
      '3': {
        name: 'Jack Burmeister [AU]',
        result: 'L',
        table: 242,
      },
      '4': {
        name: 'declan bradley [AU]',
        result: 'W',
        table: 244,
      },
      '5': {
        name: 'Noah Midgley [AU]',
        result: 'L',
        table: 210,
      },
      '6': {
        name: 'Samuel Williams [AU]',
        result: 'W',
        table: 220,
      },
      '7': {
        name: 'Melinda Li [NZ]',
        result: 'L',
        table: 180,
      },
      '8': {
        name: 'Michael Duong [AU]',
        result: 'W',
        table: 184,
      },
      '9': {
        name: 'Rory Beniuk [AU]',
        result: 'L',
        table: 154,
      },
    },
  },
  {
    name: 'Cameron Peak [AU]',
    placing: 367,
    record: {
      wins: 3,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.375,
      opp: 0.375,
      oppopp: 0.45711406958616785,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Nathan Woodcock [AU]',
        result: 'L',
        table: 210,
      },
      '2': {
        name: 'Michael Gennaccaro [AU]',
        result: 'L',
        table: 183,
      },
      '3': {
        name: 'Harry Driscoll [AU]',
        result: 'L',
        table: 248,
      },
      '4': {
        name: 'Jonathan Tjahjono [AU]',
        result: 'L',
        table: 248,
      },
      '5': {
        name: 'Darren Caboche [AU]',
        result: 'W',
        table: 251,
      },
      '6': {
        name: 'Kenneth Peake [AU]',
        result: 'W',
        table: 219,
      },
      '7': {
        name: 'Joshua Grob [AU]',
        result: 'W',
        table: 185,
      },
      '8': {
        name: 'Tessa Isberg [FI]',
        result: 'L',
        table: 143,
      },
    },
  },
  {
    name: 'Michael Gleeson [AU]',
    placing: 368,
    record: {
      wins: 2,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.42857142857142855,
      opp: 0.5918367346938774,
      oppopp: 0.503935860058309,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Hoong Yoong Ngiam [AU]',
        result: 'W',
        table: 201,
      },
      '2': {
        name: 'Kevin Min [AU]',
        result: 'W',
        table: 105,
      },
      '3': {
        name: 'Aiden Harrison [AU]',
        result: 'L',
        table: 3,
      },
      '4': {
        name: 'Paul Ashton [AU]',
        result: 'L',
        table: 45,
      },
      '5': {
        name: 'TJ Dixon [AU]',
        result: 'L',
        table: 116,
      },
      '6': {
        name: 'Peter Fay [AU]',
        result: 'T',
        table: 173,
      },
      '7': {
        name: 'Michael Gennaccaro [AU]',
        result: 'T',
        table: 158,
      },
    },
  },
  {
    name: 'Riley Pattison [AU]',
    placing: 369,
    record: {
      wins: 2,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.375,
      opp: 0.5625,
      oppopp: 0.4801339285714286,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Alan Quach [NZ]',
        result: 'L',
        table: 179,
      },
      '2': {
        name: 'Tim Haffmanns [DE]',
        result: 'W',
        table: 247,
      },
      '3': {
        name: 'Raymond Chan [AU]',
        result: 'W',
        table: 157,
      },
      '4': {
        name: 'Lucas Hamilton-Foster [AU]',
        result: 'L',
        table: 49,
      },
      '5': {
        name: 'Lily Huynh [AU]',
        result: 'T',
        table: 98,
      },
      '6': {
        name: 'WaiLok Tse [AU]',
        result: 'T',
        table: 146,
      },
      '7': {
        name: 'Lewis Stevens [AU]',
        result: 'L',
        table: 142,
      },
      '8': {
        name: 'Jamison Bulloch [AU]',
        result: 'L',
        table: 159,
      },
    },
  },
  {
    name: 'Tyler Adamson [AU]',
    placing: 370,
    record: {
      wins: 2,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.5,
      opp: 0.5416666666666666,
      oppopp: 0.49865740740740744,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Franklyn Hudson [AU]',
        result: 'W',
        table: 173,
      },
      '2': {
        name: 'Max Kennedy [AU]',
        result: 'L',
        table: 10,
      },
      '3': {
        name: 'Ellie Crouch [AU]',
        result: 'W',
        table: 96,
      },
      '4': {
        name: 'James Williams [AU]',
        result: 'T',
        table: 66,
      },
      '5': {
        name: 'James Xu [AU]',
        result: 'T',
        table: 65,
      },
      '6': {
        name: 'Harry West [AU]',
        result: 'L',
        table: 99,
      },
    },
  },
  {
    name: 'Sophia Crunkhorn [AU]',
    placing: 371,
    record: {
      wins: 2,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.375,
      opp: 0.5223214285714286,
      oppopp: 0.4962872909580499,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Chen Ching Lee [TW]',
        result: 'T',
        table: 62,
      },
      '2': {
        name: 'Zherui Li [AU]',
        result: 'T',
        table: 149,
      },
      '3': {
        name: 'Tyler Gilbey [AU]',
        result: 'W',
        table: 172,
      },
      '4': {
        name: 'Chris Currenti [AU]',
        result: 'L',
        table: 99,
      },
      '5': {
        name: 'Samantha Turner [AU]',
        result: 'L',
        table: 154,
      },
      '6': {
        name: 'Jackson Mcdonald [AU]',
        result: 'W',
        table: 182,
      },
      '7': {
        name: 'Vignesh Krishnan [AU]',
        result: 'L',
        table: 138,
      },
      '8': {
        name: 'Lawrence Lam [AU]',
        result: 'L',
        table: 145,
      },
    },
  },
  {
    name: 'Thomas Lamprey [AU]',
    placing: 372,
    record: {
      wins: 2,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.375,
      opp: 0.5130208333333334,
      oppopp: 0.5564825148809524,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Shanan Kan [AU]',
        result: 'W',
        table: 129,
      },
      '2': {
        name: 'Ryan Bews [AU]',
        result: 'L',
        table: 67,
      },
      '3': {
        name: 'John Morris [AU]',
        result: 'T',
        table: 102,
      },
      '4': {
        name: 'Liam Flood [NZ]',
        result: 'W',
        table: 133,
      },
      '5': {
        name: 'Brendan Cliffe [AU]',
        result: 'L',
        table: 91,
      },
      '6': {
        name: 'Sam Hynes [AU]',
        result: 'T',
        table: 118,
      },
      '7': {
        name: 'WaiLok Tse [AU]',
        result: 'L',
        table: 139,
      },
      '8': {
        name: 'Shaun Coupe [AU]',
        result: 'L',
        table: 158,
      },
    },
  },
  {
    name: 'Tyler Bishop [AU]',
    placing: 373,
    record: {
      wins: 2,
      losses: 5,
      ties: 2,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.504320987654321,
      oppopp: 0.47305849500293945,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Shaun Camilleri [AU]',
        result: 'W',
        table: 22,
      },
      '2': {
        name: 'Haru Nishikawa [JP]',
        result: 'L',
        table: 37,
      },
      '3': {
        name: 'Scott Minnekeer [AU]',
        result: 'T',
        table: 94,
      },
      '4': {
        name: 'Alexander Bray [AU]',
        result: 'W',
        table: 139,
      },
      '5': {
        name: 'Kerwin Lee [AU]',
        result: 'T',
        table: 89,
      },
      '6': {
        name: 'Hannah Paterson [AU]',
        result: 'L',
        table: 102,
      },
      '7': {
        name: 'Will Ladner [AU]',
        result: 'L',
        table: 130,
      },
      '8': {
        name: 'Michael Gennaccaro [AU]',
        result: 'L',
        table: 157,
      },
      '9': {
        name: 'Mason Mitchell [AU]',
        result: 'L',
        table: 156,
      },
    },
  },
  {
    name: 'Jackson Mcdonald [AU]',
    placing: 374,
    record: {
      wins: 2,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.375,
      opp: 0.48995535714285715,
      oppopp: 0.520133131377551,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Max Prescott [AU]',
        result: 'L',
        table: 67,
      },
      '2': {
        name: 'troy fisher [AU]',
        result: 'T',
        table: 207,
      },
      '3': {
        name: 'Julia Bridle [AU]',
        result: 'W',
        table: 201,
      },
      '4': {
        name: 'fayyadh salleh [SG]',
        result: 'L',
        table: 148,
      },
      '5': {
        name: 'Victor Su [AU]',
        result: 'T',
        table: 194,
      },
      '6': {
        name: 'Sophia Crunkhorn [AU]',
        result: 'L',
        table: 182,
      },
      '7': {
        name: 'Henry Brereton [AU]',
        result: 'W',
        table: 190,
      },
      '8': {
        name: 'Winston Chui [AU]',
        result: 'L',
        table: 161,
      },
    },
  },
  {
    name: 'Destyn Weir [AU]',
    placing: 375,
    record: {
      wins: 2,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.375,
      opp: 0.484375,
      oppopp: 0.4601190476190476,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Justin Hoy [AU]',
        result: 'L',
        table: 70,
      },
      '2': {
        name: 'Harry Driscoll [AU]',
        result: 'W',
        table: 224,
      },
      '3': {
        name: 'Jordan Stamatopoulos [AU]',
        result: 'T',
        table: 108,
      },
      '4': {
        name: 'Stuart Flynn [AU]',
        result: 'T',
        table: 135,
      },
      '5': {
        name: 'Huy Doan [AU]',
        result: 'W',
        table: 145,
      },
      '6': {
        name: 'Jackson Doyle [AU]',
        result: 'L',
        table: 90,
      },
      '7': {
        name: 'Hoong Yoong Ngiam [AU]',
        result: 'L',
        table: 140,
      },
      '8': {
        name: 'Jiahe Liang [AU]',
        result: 'L',
        table: 150,
      },
    },
  },
  {
    name: 'Jake Holmes [AU]',
    placing: 376,
    record: {
      wins: 2,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.375,
      opp: 0.46875,
      oppopp: 0.4818483382936508,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Ferdi Mak [AU]',
        result: 'L',
        table: 84,
      },
      '2': {
        name: 'Damien Commadeur [AU]',
        result: 'W',
        table: 234,
      },
      '3': {
        name: 'Yin Jiang [AU]',
        result: 'L',
        table: 88,
      },
      '4': {
        name: 'Daniel Pollard [AU]',
        result: 'T',
        table: 186,
      },
      '5': {
        name: 'Alicia Keizer [AU]',
        result: 'W',
        table: 189,
      },
      '6': {
        name: 'Thomas Slater [AU]',
        result: 'L',
        table: 142,
      },
      '7': {
        name: 'Shaun Coupe [AU]',
        result: 'T',
        table: 157,
      },
      '8': {
        name: 'Jacob Sparks [AU]',
        result: 'L',
        table: 149,
      },
    },
  },
  {
    name: 'Sami MacKenzie [AU]',
    placing: 377,
    record: {
      wins: 2,
      losses: 5,
      ties: 2,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.45601851851851855,
      oppopp: 0.44755780913188326,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Kelvin Duong [AU]',
        result: 'L',
        table: 259,
      },
      '2': {
        name: 'TE-AWHI TE ANGINA [AU]',
        result: 'T',
        table: 217,
      },
      '3': {
        name: 'Jim Gow [AU]',
        result: 'W',
        table: 189,
      },
      '4': {
        name: 'Brendan Cliffe [AU]',
        result: 'L',
        table: 131,
      },
      '5': {
        name: 'Joshua Sparks [AU]',
        result: 'L',
        table: 172,
      },
      '6': {
        name: 'Kayla Stockwell [AU]',
        result: 'L',
        table: 203,
      },
      '7': {
        name: 'Stella Gabler [AU]',
        result: 'L',
        table: 206,
      },
      '8': {
        name: 'Kylie Flynn [AU]',
        result: 'W',
        table: 191,
      },
      '9': {
        name: 'william wang [AU]',
        result: 'T',
        table: 164,
      },
    },
  },
  {
    name: 'Bee Blackwell [AU]',
    placing: 378,
    record: {
      wins: 2,
      losses: 5,
      ties: 2,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.4545855379188713,
      oppopp: 0.47788450771255003,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Lochie McKeefry [NZ]',
        result: 'L',
        table: 200,
      },
      '2': {
        name: 'Chris Hughes [NZ]',
        result: 'W',
        table: 201,
      },
      '3': {
        name: 'Georgia Trimble [AU]',
        result: 'L',
        table: 119,
      },
      '4': {
        name: 'Archie de Vries [AU]',
        result: 'T',
        table: 164,
      },
      '5': {
        name: 'Josh Ng [AU]',
        result: 'W',
        table: 188,
      },
      '6': {
        name: 'Daniel Mielnik [AU]',
        result: 'L',
        table: 114,
      },
      '7': {
        name: 'Julia Bridle [AU]',
        result: 'T',
        table: 167,
      },
      '8': {
        name: 'Ethan Stoeckert [AU]',
        result: 'L',
        table: 154,
      },
      '9': {
        name: 'Zachary Bishop [AU]',
        result: 'L',
        table: 155,
      },
    },
  },
  {
    name: 'Cameron Dimond [AU]',
    placing: 379,
    record: {
      wins: 2,
      losses: 5,
      ties: 2,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.449647266313933,
      oppopp: 0.4889692250356933,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'CHEE WAI LIEW [AU]',
        result: 'L',
        table: 21,
      },
      '2': {
        name: 'Luca Serianni [AU]',
        result: 'W',
        table: 226,
      },
      '3': {
        name: 'Jeremy Lim [AU]',
        result: 'L',
        table: 92,
      },
      '4': {
        name: 'Jack Burmeister [AU]',
        result: 'L',
        table: 207,
      },
      '5': {
        name: 'Donna Pedder [AU]',
        result: 'T',
        table: 212,
      },
      '6': {
        name: 'Josh Ng [AU]',
        result: 'T',
        table: 193,
      },
      '7': {
        name: 'Jamison Bulloch [AU]',
        result: 'L',
        table: 193,
      },
      '8': {
        name: 'cody thorne [AU]',
        result: 'W',
        table: 187,
      },
      '9': {
        name: 'Jeb Collins [AU]',
        result: 'L',
        table: 157,
      },
    },
  },
  {
    name: 'Kerwin Lee [AU]',
    placing: 380,
    record: {
      wins: 2,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.5,
      opp: 0.4444444444444444,
      oppopp: 0.509375,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Diego Gatica [CL]',
        result: 'L',
        table: 264,
      },
      '2': {
        name: 'Stuart McKinnis [AU]',
        result: 'T',
        table: 167,
      },
      '3': {
        name: 'Dylan van der Riet [AU]',
        result: 'W',
        table: 214,
      },
      '4': {
        name: 'Daal Jaffers [AU]',
        result: 'W',
        table: 119,
      },
      '5': {
        name: 'Tyler Bishop [AU]',
        result: 'T',
        table: 89,
      },
      '6': {
        name: 'Tibor Baranyay [AU]',
        result: 'L',
        table: 92,
      },
    },
  },
  {
    name: 'Jarrad Paxton [AU]',
    placing: 381,
    record: {
      wins: 2,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.42857142857142855,
      opp: 0.4438775510204082,
      oppopp: 0.4658325234855846,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Lawrence Lam [AU]',
        result: 'T',
        table: 90,
      },
      '2': {
        name: 'Rory Beniuk [AU]',
        result: 'T',
        table: 158,
      },
      '3': {
        name: 'Chen Ching Lee [TW]',
        result: 'L',
        table: 182,
      },
      '4': {
        name: 'Connor Tobin-Underwood [AU]',
        result: 'L',
        table: 223,
      },
      '5': {
        name: 'Aaron Kleinhenz [US]',
        result: 'W',
        table: 231,
      },
      '6': {
        name: 'Zachary Bishop [AU]',
        result: 'W',
        table: 179,
      },
      '7': {
        name: 'Kelvin Duong [AU]',
        result: 'L',
        table: 125,
      },
    },
  },
  {
    name: 'Antonio Sanabria [AU]',
    placing: 382,
    record: {
      wins: 2,
      losses: 5,
      ties: 2,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.4364197530864198,
      oppopp: 0.4420463452870861,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'James Goreing [AU]',
        result: 'L',
        table: 48,
      },
      '2': {
        name: 'Jessamine Davis [AU]',
        result: 'L',
        table: 162,
      },
      '3': {
        name: 'Jordyn Demeo [AU]',
        result: 'W',
        table: 234,
      },
      '4': {
        name: 'Jack Eeles [AU]',
        result: 'L',
        table: 167,
      },
      '5': {
        name: 'Harry Driscoll [AU]',
        result: 'W',
        table: 211,
      },
      '6': {
        name: 'william wang [AU]',
        result: 'T',
        table: 170,
      },
      '7': {
        name: 'Mason Mitchell [AU]',
        result: 'T',
        table: 151,
      },
      '8': {
        name: 'Sean Takemoto [AU]',
        result: 'L',
        table: 156,
      },
      '9': {
        name: 'Fernando Monsalve [CL]',
        result: 'L',
        table: 158,
      },
    },
  },
  {
    name: 'william wang [AU]',
    placing: 383,
    record: {
      wins: 2,
      losses: 5,
      ties: 2,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.42098765432098767,
      oppopp: 0.4574093670389966,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Bayley Janssen [AU]',
        result: 'L',
        table: 237,
      },
      '2': {
        name: 'Gakuto Shiina [JP]',
        result: 'L',
        table: 174,
      },
      '3': {
        name: 'Andrew Egan [AU]',
        result: 'W',
        table: 247,
      },
      '4': {
        name: 'Jessamine Davis [AU]',
        result: 'L',
        table: 171,
      },
      '5': {
        name: 'glenn hope [AU]',
        result: 'W',
        table: 221,
      },
      '6': {
        name: 'Antonio Sanabria [AU]',
        result: 'T',
        table: 170,
      },
      '7': {
        name: 'Jake Herden [AU]',
        result: 'L',
        table: 169,
      },
      '8': {
        name: 'Jake Lazzari [AU]',
        result: 'L',
        table: 173,
      },
      '9': {
        name: 'Sami MacKenzie [AU]',
        result: 'T',
        table: 164,
      },
    },
  },
  {
    name: 'Alex Hatzidakis [AU]',
    placing: 384,
    record: {
      wins: 2,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.375,
      opp: 0.41941964285714284,
      oppopp: 0.46575255102040813,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Roman Carfi [AU]',
        result: 'T',
        table: 195,
      },
      '2': {
        name: 'James Higgins [AU]',
        result: 'T',
        table: 159,
      },
      '3': {
        name: 'Mike Kan [AU]',
        result: 'L',
        table: 174,
      },
      '4': {
        name: 'Tuan Ho [AU]',
        result: 'L',
        table: 208,
      },
      '5': {
        name: 'Christian Makiling [AU]',
        result: 'L',
        table: 233,
      },
      '6': {
        name: 'Carmela Nucifora [AU]',
        result: 'W',
        table: 232,
      },
      '7': {
        name: 'Josephine Nucifora [AU]',
        result: 'L',
        table: 197,
      },
      '8': {
        name: 'Henry Brereton [AU]',
        result: 'W',
        table: 188,
      },
    },
  },
  {
    name: 'Jesse Brewer [AU]',
    placing: 385,
    record: {
      wins: 2,
      losses: 5,
      ties: 2,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.3919753086419753,
      oppopp: 0.42788065843621403,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Alexander Jemison [AU]',
        result: 'L',
        table: 126,
      },
      '2': {
        name: 'Hoi Hang Ho [AU]',
        result: 'W',
        table: 254,
      },
      '3': {
        name: 'Ancel Franklin [AU]',
        result: 'L',
        table: 95,
      },
      '4': {
        name: 'Kelvin Duong [AU]',
        result: 'L',
        table: 165,
      },
      '5': {
        name: 'Jason Slifka [AU]',
        result: 'L',
        table: 214,
      },
      '6': {
        name: 'Stella Gabler [AU]',
        result: 'T',
        table: 228,
      },
      '7': {
        name: 'Paul Aguilar [AU]',
        result: 'L',
        table: 203,
      },
      '8': {
        name: 'Hugo Pearce [AU]',
        result: 'T',
        table: 190,
      },
      '9': {
        name: 'Jordyn Demeo [AU]',
        result: 'W',
        table: 174,
      },
    },
  },
  {
    name: 'Lily Ly [AU]',
    placing: 386,
    record: {
      wins: 2,
      losses: 5,
      ties: 2,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.36419753086419754,
      oppopp: 0.42215412502449534,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Christian Viti [AU]',
        result: 'L',
        table: 147,
      },
      '2': {
        name: 'Kadir Batuk [AU]',
        result: 'L',
        table: 257,
      },
      '3': {
        name: 'Christopher Ganal [AU]',
        result: 'L',
        table: 238,
      },
      '4': {
        name: 'Celine Pearse [AU]',
        result: 'L',
        table: 250,
      },
      '5': {
        name: 'Ruby Culley [AU]',
        result: 'L',
        table: 249,
      },
      '6': {
        name: 'Shaun Camilleri [AU]',
        result: 'T',
        table: 237,
      },
      '7': {
        name: 'Quentin Pepe [AU]',
        result: 'W',
        table: 214,
      },
      '8': {
        name: 'Daniel Bush [AU]',
        result: 'T',
        table: 193,
      },
      '9': {
        name: 'Lance Griggs [AU]',
        result: 'W',
        table: 176,
      },
    },
  },
  {
    name: 'Hugo Pearce [AU]',
    placing: 387,
    record: {
      wins: 2,
      losses: 5,
      ties: 2,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.36044973544973546,
      oppopp: 0.43570405013857394,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'John Morris [AU]',
        result: 'L',
        table: 162,
      },
      '2': {
        name: 'Kelvin Nguyen [AU]',
        result: 'L',
        table: 222,
      },
      '3': {
        name: 'Daniel Pollard [AU]',
        result: 'L',
        table: 228,
      },
      '4': {
        name: 'Darren Caboche [AU]',
        result: 'W',
        table: 247,
      },
      '5': {
        name: 'Nam Ho [AU]',
        result: 'L',
        table: 205,
      },
      '6': {
        name: 'Ramzey Fayad [AU]',
        result: 'L',
        table: 218,
      },
      '7': {
        name: 'Nina Junaidi [SG]',
        result: 'T',
        table: 208,
      },
      '8': {
        name: 'Jesse Brewer [AU]',
        result: 'T',
        table: 190,
      },
      '9': {
        name: 'Daniel Bush [AU]',
        result: 'W',
        table: 175,
      },
    },
  },
  {
    name: 'Daal Jaffers [AU]',
    placing: 388,
    record: {
      wins: 2,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.42857142857142855,
      opp: 0.35544217687074825,
      oppopp: 0.4481616456106252,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Khristian Embog [AU]',
        result: 'T',
        table: 171,
      },
      '2': {
        name: 'Josh Ng [AU]',
        result: 'L',
        table: 157,
      },
      '3': {
        name: 'Sarah McEvoy [AU]',
        result: 'W',
        table: 213,
      },
      '4': {
        name: 'Kerwin Lee [AU]',
        result: 'L',
        table: 119,
      },
      '5': {
        name: 'Ben Connor [AU]',
        result: 'L',
        table: 186,
      },
      '6': {
        name: 'Angela Lewis [AU]',
        result: 'W',
        table: 214,
      },
      '7': {
        name: 'Winston Chui [AU]',
        result: 'T',
        table: 152,
      },
    },
  },
  {
    name: 'Stanley Chaplin [AU]',
    placing: 389,
    record: {
      wins: 2,
      losses: 5,
      ties: 2,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.34074074074074073,
      oppopp: 0.44908596308893933,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Huy Doan [AU]',
        result: 'L',
        table: 61,
      },
      '2': {
        name: 'Sarah McEvoy [AU]',
        result: 'T',
        table: 198,
      },
      '3': {
        name: 'Tian Li [NZ]',
        result: 'T',
        table: 200,
      },
      '4': {
        name: 'Tommy Williams [AU]',
        result: 'L',
        table: 211,
      },
      '5': {
        name: 'Connor Jackson [AU]',
        result: 'L',
        table: 235,
      },
      '6': {
        name: 'cody thorne [AU]',
        result: 'L',
        table: 231,
      },
      '7': {
        name: 'Darren Caboche [AU]',
        result: 'W',
        table: 211,
      },
      '8': {
        name: 'Ellie Crouch [AU]',
        result: 'W',
        table: 186,
      },
      '9': {
        name: 'Alexander Cannavo [AU]',
        result: 'L',
        table: 160,
      },
    },
  },
  {
    name: 'Matthew Bennett [AU]',
    placing: 390,
    record: {
      wins: 2,
      losses: 1,
      ties: 1,
    },
    resistances: {
      self: 0.625,
      opp: 0.6875,
      oppopp: 0.5703125,
    },
    decklist: '',
    drop: 4,
    rounds: {
      '1': {
        name: 'Mark Smit [AU]',
        result: 'W',
        table: 29,
      },
      '2': {
        name: 'Hayden Barker [AU]',
        result: 'W',
        table: 80,
      },
      '3': {
        name: 'Xinfang Wang [AU]',
        result: 'T',
        table: 28,
      },
      '4': {
        name: '[Table 2]Nissa Kew [AU]',
        result: 'L',
        table: 40,
      },
    },
  },
  {
    name: 'Edmund Khoo [SG]',
    placing: 391,
    record: {
      wins: 2,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.6527777777777778,
      oppopp: 0.49166666666666664,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'asger balle [AU]',
        result: 'T',
        table: 45,
      },
      '2': {
        name: 'Nathan Johnson [AU]',
        result: 'W',
        table: 155,
      },
      '3': {
        name: 'Stuart Flynn [AU]',
        result: 'W',
        table: 65,
      },
      '4': {
        name: 'Jorge Soria [AU]',
        result: 'L',
        table: 38,
      },
      '5': {
        name: 'thomas lackington [AU]',
        result: 'L',
        table: 83,
      },
      '6': {
        name: 'Sebastian Rutter [NZ]',
        result: 'L',
        table: 133,
      },
    },
  },
  {
    name: 'Guysen Lang [NZ]',
    placing: 392,
    record: {
      wins: 2,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.6,
      oppopp: 0.5129999999999999,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Lewis Gall [NZ]',
        result: 'W',
        table: 265,
      },
      '2': {
        name: 'Lochie McKeefry [NZ]',
        result: 'L',
        table: 96,
      },
      '3': {
        name: 'Denham Smith [AU]',
        result: 'W',
        table: 153,
      },
      '4': {
        name: 'Stephen Todorovic [AU]',
        result: 'L',
        table: 59,
      },
      '5': {
        name: 'Mark Smit [AU]',
        result: 'T',
        table: 106,
      },
    },
  },
  {
    name: 'Justin Cutajar [AU]',
    placing: 393,
    record: {
      wins: 2,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.5833333333333334,
      oppopp: 0.482037037037037,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Zachary Bishop [AU]',
        result: 'T',
        table: 33,
      },
      '2': {
        name: 'Ashton Bradley [AU]',
        result: 'W',
        table: 130,
      },
      '3': {
        name: 'Dylan Seery [AU]',
        result: 'W',
        table: 78,
      },
      '4': {
        name: 'Alyssa Lock [AU]',
        result: 'L',
        table: 29,
      },
      '5': {
        name: 'Nigel Yam [AU]',
        result: 'L',
        table: 92,
      },
      '6': {
        name: 'Cassie Joison [AU]',
        result: 'L',
        table: 147,
      },
    },
  },
  {
    name: 'Alvin Hall [AU]',
    placing: 394,
    record: {
      wins: 2,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3125,
      opp: 0.5703125,
      oppopp: 0.5086495535714286,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Yuhao Xia [AU]',
        result: 'W',
        table: 16,
      },
      '2': {
        name: 'Dylan Graefe [AU]',
        result: 'W',
        table: 16,
      },
      '3': {
        name: 'Brent Tonisson [AU]',
        result: 'L',
        table: 35,
      },
      '4': {
        name: 'Shang Jun Chua [AU]',
        result: 'L',
        table: 44,
      },
      '5': {
        name: 'Huy Nguyen [AU]',
        result: 'L',
        table: 113,
      },
      '6': {
        name: 'Robin Sangwan [AU]',
        result: 'L',
        table: 171,
      },
      '7': {
        name: 'Fernando Monsalve [CL]',
        result: 'T',
        table: 174,
      },
      '8': {
        name: 'Justin Hoy [AU]',
        result: 'L',
        table: 165,
      },
    },
  },
  {
    name: 'Ben Connor [AU]',
    placing: 395,
    record: {
      wins: 2,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.5416666666666666,
      oppopp: 0.5,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Isabelle Lohrey [AU]',
        result: 'W',
        table: 26,
      },
      '2': {
        name: 'Nigel Yam [AU]',
        result: 'T',
        table: 22,
      },
      '3': {
        name: 'Reginald Ng [AU]',
        result: 'L',
        table: 64,
      },
      '4': {
        name: 'Saxon Wright [AU]',
        result: 'L',
        table: 151,
      },
      '5': {
        name: 'Daal Jaffers [AU]',
        result: 'W',
        table: 186,
      },
      '6': {
        name: 'Keegan Burt [AU]',
        result: 'L',
        table: 137,
      },
    },
  },
  {
    name: 'Liam Flood [NZ]',
    placing: 396,
    record: {
      wins: 2,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.5333333333333333,
      oppopp: 0.5342592592592593,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Jessamine Davis [AU]',
        result: 'W',
        table: 227,
      },
      '2': {
        name: 'Kazuo Nakamura [AU]',
        result: 'L',
        table: 23,
      },
      '3': {
        name: 'Zak Hamilton [AU]',
        result: 'T',
        table: 105,
      },
      '4': {
        name: 'Thomas Lamprey [AU]',
        result: 'L',
        table: 133,
      },
      '5': {
        name: 'Corey Matthews [AU]',
        result: 'W',
        table: 179,
      },
      '6': {
        name: 'Aaron van der Kolk [AU]',
        result: 'L',
        table: 141,
      },
    },
  },
  {
    name: 'Harley Collins [AU]',
    placing: 397,
    record: {
      wins: 2,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.35714285714285715,
      opp: 0.5221088435374149,
      oppopp: 0.47074020084224166,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Michael Duong [AU]',
        result: 'W',
        table: 190,
      },
      '2': {
        name: 'Ryan Edwards [AU]',
        result: 'W',
        table: 33,
      },
      '3': {
        name: 'Takuma Tominaga [JP]',
        result: 'L',
        table: 5,
      },
      '4': {
        name: 'Jimmy Farrugia [AU]',
        result: 'L',
        table: 61,
      },
      '5': {
        name: 'Harrison Pirotta [AU]',
        result: 'L',
        table: 133,
      },
      '6': {
        name: 'Marcus Dwyer [AU]',
        result: 'T',
        table: 156,
      },
      '7': {
        name: 'Aydan Barrett [AU]',
        result: 'L',
        table: 164,
      },
    },
  },
  {
    name: 'Dylan Seery [AU]',
    placing: 398,
    record: {
      wins: 2,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.5,
      opp: 0.5199999999999999,
      oppopp: 0.508,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Nathan Spry [AU]',
        result: 'T',
        table: 50,
      },
      '2': {
        name: 'Adam Knoblauch [AU]',
        result: 'W',
        table: 114,
      },
      '3': {
        name: 'Justin Cutajar [AU]',
        result: 'L',
        table: 78,
      },
      '4': {
        name: 'Holly Wang [AU]',
        result: 'W',
        table: 116,
      },
      '5': {
        name: 'Yongxiang Liu [AU]',
        result: 'L',
        table: 74,
      },
    },
  },
  {
    name: 'David Burness [AU]',
    placing: 399,
    record: {
      wins: 1,
      losses: 1,
      ties: 4,
    },
    resistances: {
      self: 0.5,
      opp: 0.5138888888888888,
      oppopp: 0.5069444444444444,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Daniel Pollard [AU]',
        result: 'W',
        table: 55,
      },
      '2': {
        name: 'Sam Chen [US]',
        result: 'T',
        table: 91,
      },
      '3': {
        name: 'Jason Zhe [AU]',
        result: 'T',
        table: 74,
      },
      '4': {
        name: 'Christopher Cheung [AU]',
        result: 'T',
        table: 96,
      },
      '5': {
        name: 'xingyu huang [AT]',
        result: 'L',
        table: 104,
      },
      '6': {
        name: 'Winston Chui [AU]',
        result: 'T',
        table: 162,
      },
    },
  },
  {
    name: 'Jack Fone [AU]',
    placing: 400,
    record: {
      wins: 2,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.5013888888888889,
      oppopp: 0.5120138888888889,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Zhaolong Zhu [AU]',
        result: 'W',
        table: 27,
      },
      '2': {
        name: 'Sable Wang-Wills [AU]',
        result: 'T',
        table: 7,
      },
      '3': {
        name: 'Andre Pollacchi [AU]',
        result: 'L',
        table: 63,
      },
      '4': {
        name: 'Luke Schmitt [AU]',
        result: 'L',
        table: 126,
      },
      '5': {
        name: 'Alistair Menzies [AU]',
        result: 'W',
        table: 175,
      },
      '6': {
        name: 'James Volis [AU]',
        result: 'L',
        table: 134,
      },
    },
  },
  {
    name: 'Alfred Yang [AU]',
    placing: 401,
    record: {
      wins: 2,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.5,
      oppopp: 0.4976851851851852,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Sean Takemoto [AU]',
        result: 'W',
        table: 187,
      },
      '2': {
        name: 'Stephen Iskandar [AU]',
        result: 'L',
        table: 76,
      },
      '3': {
        name: 'Montana Drew [AU]',
        result: 'L',
        table: 135,
      },
      '4': {
        name: 'Harry Driscoll [AU]',
        result: 'W',
        table: 177,
      },
      '5': {
        name: 'Isabelle Lohrey [AU]',
        result: 'T',
        table: 102,
      },
      '6': {
        name: 'Denham Smith [AU]',
        result: 'L',
        table: 130,
      },
    },
  },
  {
    name: 'Georgia Trimble [AU]',
    placing: 402,
    record: {
      wins: 2,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.4861111111111111,
      oppopp: 0.49583333333333335,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Sarah McEvoy [AU]',
        result: 'W',
        table: 89,
      },
      '2': {
        name: 'Todd Williams [AU]',
        result: 'L',
        table: 20,
      },
      '3': {
        name: 'Bee Blackwell [AU]',
        result: 'W',
        table: 119,
      },
      '4': {
        name: 'Kaiwen Cabbabe [AU]',
        result: 'L',
        table: 91,
      },
      '5': {
        name: 'Hadyn Joyce [AU]',
        result: 'L',
        table: 123,
      },
      '6': {
        name: 'Fletcher Konynenburg [AU]',
        result: 'T',
        table: 152,
      },
    },
  },
  {
    name: 'Joshua Crisp [AU]',
    placing: 403,
    record: {
      wins: 2,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.48611111111111116,
      oppopp: 0.4798611111111111,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Nigel Yam [AU]',
        result: 'L',
        table: 170,
      },
      '2': {
        name: 'Robin Law [AU]',
        result: 'W',
        table: 200,
      },
      '3': {
        name: 'Jacob McSpadden [AU]',
        result: 'T',
        table: 146,
      },
      '4': {
        name: 'Alex Wu [AU]',
        result: 'L',
        table: 155,
      },
      '5': {
        name: 'Paul Aguilar [AU]',
        result: 'W',
        table: 191,
      },
      '6': {
        name: 'Tessa Isberg [FI]',
        result: 'L',
        table: 148,
      },
    },
  },
  {
    name: 'Yao Ly [AU]',
    placing: 404,
    record: {
      wins: 2,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.35714285714285715,
      opp: 0.4846938775510204,
      oppopp: 0.5005685131195335,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Mathew masefield [AU]',
        result: 'L',
        table: 255,
      },
      '2': {
        name: 'Arnouluck Sirisay [AU]',
        result: 'L',
        table: 260,
      },
      '3': {
        name: 'glenn hope [AU]',
        result: 'W',
        table: 230,
      },
      '4': {
        name: 'Chloe Appleby [AU]',
        result: 'W',
        table: 192,
      },
      '5': {
        name: 'Sameer Sangwan [AU]',
        result: 'L',
        table: 125,
      },
      '6': {
        name: 'Sinan Gunaydin Okatan [AU]',
        result: 'T',
        table: 150,
      },
      '7': {
        name: 'Charlie Queen [AU]',
        result: 'L',
        table: 173,
      },
    },
  },
  {
    name: 'Nicholas Choong [NZ]',
    placing: 405,
    record: {
      wins: 2,
      losses: 6,
      ties: 1,
    },
    resistances: {
      self: 0.2777777777777778,
      opp: 0.47839506172839513,
      oppopp: 0.4727593712382071,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Hayden Barker [AU]',
        result: 'L',
        table: 66,
      },
      '2': {
        name: 'Hudson Moore [AU]',
        result: 'W',
        table: 192,
      },
      '3': {
        name: 'Angela Lewis [AU]',
        result: 'W',
        table: 127,
      },
      '4': {
        name: 'Jee Ong [AU]',
        result: 'T',
        table: 90,
      },
      '5': {
        name: 'YiFei Ruan [AU]',
        result: 'L',
        table: 84,
      },
      '6': {
        name: 'TE-AWHI TE ANGINA [AU]',
        result: 'L',
        table: 113,
      },
      '7': {
        name: 'Dom Fleming [AU]',
        result: 'L',
        table: 149,
      },
      '8': {
        name: 'Anthony Smith [AU]',
        result: 'L',
        table: 162,
      },
      '9': {
        name: 'James Breene [AU]',
        result: 'L',
        table: 165,
      },
    },
  },
  {
    name: 'Mark Smit [AU]',
    placing: 406,
    record: {
      wins: 2,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.4680555555555556,
      oppopp: 0.5010648148148148,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Matthew Bennett [AU]',
        result: 'L',
        table: 29,
      },
      '2': {
        name: 'Peter Ghionis [AU]',
        result: 'W',
        table: 172,
      },
      '3': {
        name: 'Samuel Gianakis [AU]',
        result: 'L',
        table: 162,
      },
      '4': {
        name: 'Harrison Hodges [AU]',
        result: 'W',
        table: 174,
      },
      '5': {
        name: 'Guysen Lang [NZ]',
        result: 'T',
        table: 106,
      },
      '6': {
        name: 'Adam Crust [AU]',
        result: 'L',
        table: 106,
      },
    },
  },
  {
    name: 'Joshua Sparks [AU]',
    placing: 407,
    record: {
      wins: 2,
      losses: 6,
      ties: 1,
    },
    resistances: {
      self: 0.2777777777777778,
      opp: 0.462962962962963,
      oppopp: 0.4648687046835195,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'David Edebohls [AU]',
        result: 'T',
        table: 193,
      },
      '2': {
        name: 'Jess Owers [AU]',
        result: 'L',
        table: 111,
      },
      '3': {
        name: 'Calum McSpadden [AU]',
        result: 'W',
        table: 186,
      },
      '4': {
        name: 'Kevin Min [AU]',
        result: 'L',
        table: 132,
      },
      '5': {
        name: 'Sami MacKenzie [AU]',
        result: 'W',
        table: 172,
      },
      '6': {
        name: 'KODY TRAN [AU]',
        result: 'L',
        table: 145,
      },
      '7': {
        name: 'Zachary Vella [AU]',
        result: 'L',
        table: 147,
      },
      '8': {
        name: 'Isabelle Lohrey [AU]',
        result: 'L',
        table: 168,
      },
      '9': {
        name: 'Christopher Ganal [AU]',
        result: 'L',
        table: 169,
      },
    },
  },
  {
    name: 'Kylie Flynn [AU]',
    placing: 408,
    record: {
      wins: 2,
      losses: 6,
      ties: 1,
    },
    resistances: {
      self: 0.2777777777777778,
      opp: 0.4625220458553792,
      oppopp: 0.4412320483749055,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Christopher Ganal [AU]',
        result: 'W',
        table: 77,
      },
      '2': {
        name: 'Harry Shallcrass [NZ]',
        result: 'L',
        table: 63,
      },
      '3': {
        name: 'Scott Langford [AU]',
        result: 'L',
        table: 125,
      },
      '4': {
        name: 'Jordan Ung [AU]',
        result: 'L',
        table: 202,
      },
      '5': {
        name: 'Sammy Madafiglio [AU]',
        result: 'T',
        table: 207,
      },
      '6': {
        name: 'Alicia Keizer [AU]',
        result: 'L',
        table: 204,
      },
      '7': {
        name: 'Henry Bradnam [AU]',
        result: 'L',
        table: 200,
      },
      '8': {
        name: 'Sami MacKenzie [AU]',
        result: 'L',
        table: 191,
      },
      '9': {
        name: 'Shaun Camilleri [AU]',
        result: 'W',
        table: 178,
      },
    },
  },
  {
    name: 'Henry Bradnam [AU]',
    placing: 409,
    record: {
      wins: 2,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.35714285714285715,
      opp: 0.45918367346938777,
      oppopp: 0.5281523323615162,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Scott Leung [AU]',
        result: 'T',
        table: 74,
      },
      '2': {
        name: 'Michael Hammond [AU]',
        result: 'L',
        table: 115,
      },
      '3': {
        name: 'Aaron-Lee Cole [AU]',
        result: 'L',
        table: 187,
      },
      '4': {
        name: 'Sandra Flood [NZ]',
        result: 'W',
        table: 229,
      },
      '5': {
        name: 'Fabrice Rivalland [AU]',
        result: 'L',
        table: 197,
      },
      '6': {
        name: 'Jim Gow [AU]',
        result: 'L',
        table: 206,
      },
      '7': {
        name: 'Kylie Flynn [AU]',
        result: 'W',
        table: 200,
      },
    },
  },
  {
    name: 'Adam Knoblauch [AU]',
    placing: 410,
    record: {
      wins: 2,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.35714285714285715,
      opp: 0.4540816326530612,
      oppopp: 0.4234596695821185,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Holly Wang [AU]',
        result: 'T',
        table: 30,
      },
      '2': {
        name: 'Dylan Seery [AU]',
        result: 'L',
        table: 114,
      },
      '3': {
        name: 'Nathan Johnson [AU]',
        result: 'L',
        table: 198,
      },
      '4': {
        name: 'Alicia Keizer [AU]',
        result: 'L',
        table: 230,
      },
      '5': {
        name: 'Quentin Pepe [AU]',
        result: 'W',
        table: 241,
      },
      '6': {
        name: 'Paul Aguilar [AU]',
        result: 'W',
        table: 199,
      },
      '7': {
        name: 'Kayla Stockwell [AU]',
        result: 'L',
        table: 153,
      },
    },
  },
  {
    name: 'Tyler Gilbey [AU]',
    placing: 411,
    record: {
      wins: 1,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.42857142857142855,
      opp: 0.4506802721088436,
      oppopp: 0.4904518950437317,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Tommy Williams [AU]',
        result: 'T',
        table: 216,
      },
      '2': {
        name: 'David Edebohls [AU]',
        result: 'T',
        table: 123,
      },
      '3': {
        name: 'Sophia Crunkhorn [AU]',
        result: 'L',
        table: 172,
      },
      '4': {
        name: 'Eric Sanson [NZ]',
        result: 'T',
        table: 216,
      },
      '5': {
        name: 'Nicholas Apostolou [AU]',
        result: 'T',
        table: 204,
      },
      '6': {
        name: 'Alistair Menzies [AU]',
        result: 'W',
        table: 194,
      },
      '7': {
        name: 'John Morris [AU]',
        result: 'L',
        table: 145,
      },
    },
  },
  {
    name: 'Paige Chamberlain [AU]',
    placing: 412,
    record: {
      wins: 2,
      losses: 6,
      ties: 1,
    },
    resistances: {
      self: 0.2777777777777778,
      opp: 0.44984567901234573,
      oppopp: 0.44925275923126456,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Takuma Tominaga [JP]',
        result: 'L',
        table: 240,
      },
      '2': {
        name: 'Stefan Djordjevic [AU]',
        result: 'T',
        table: 242,
      },
      '3': {
        name: 'Shaun Camilleri [AU]',
        result: 'W',
        table: 215,
      },
      '4': {
        name: 'Nigel Yam [AU]',
        result: 'L',
        table: 125,
      },
      '5': {
        name: 'Jake Herden [AU]',
        result: 'L',
        table: 174,
      },
      '6': {
        name: 'Carl Orbista [AU]',
        result: 'W',
        table: 198,
      },
      '7': {
        name: 'Oliver Karmel-Shann [CA]',
        result: 'L',
        table: 161,
      },
      '8': {
        name: 'Stella Gabler [AU]',
        result: 'L',
        table: 164,
      },
      '9': {
        name: 'Jack Riley [AU]',
        result: 'L',
        table: 170,
      },
    },
  },
  {
    name: 'Marcus Dwyer [AU]',
    placing: 413,
    record: {
      wins: 2,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.3125,
      opp: 0.43526785714285715,
      oppopp: 0.43930874433106576,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Sam Chen [US]',
        result: 'L',
        table: 256,
      },
      '2': {
        name: 'Kaiden Allan [AU]',
        result: 'L',
        table: 171,
      },
      '3': {
        name: 'Robin Law [AU]',
        result: 'W',
        table: 258,
      },
      '4': {
        name: 'Adam Crust [AU]',
        result: 'L',
        table: 201,
      },
      '5': {
        name: 'Hudson Moore [AU]',
        result: 'W',
        table: 219,
      },
      '6': {
        name: 'Harley Collins [AU]',
        result: 'T',
        table: 156,
      },
      '7': {
        name: 'Qihan Zhang [AU]',
        result: 'L',
        table: 168,
      },
      '8': {
        name: 'Alexander Jemison [AU]',
        result: 'L',
        table: 167,
      },
    },
  },
  {
    name: 'Benjamin McMahon [AU]',
    placing: 414,
    record: {
      wins: 2,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.4305555555555556,
      oppopp: 0.48796296296296293,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'David Stevens [AU]',
        result: 'L',
        table: 4,
      },
      '2': {
        name: 'Morgan Squire [AU]',
        result: 'T',
        table: 243,
      },
      '3': {
        name: 'James Futcher [AU]',
        result: 'L',
        table: 211,
      },
      '4': {
        name: 'Lance Griggs [AU]',
        result: 'W',
        table: 233,
      },
      '5': {
        name: 'Peter Colosimo [AU]',
        result: 'W',
        table: 199,
      },
      '6': {
        name: 'Yin Jiang [AU]',
        result: 'L',
        table: 135,
      },
    },
  },
  {
    name: 'Angela Lewis [AU]',
    placing: 415,
    record: {
      wins: 2,
      losses: 6,
      ties: 1,
    },
    resistances: {
      self: 0.2777777777777778,
      opp: 0.43033509700176364,
      oppopp: 0.4229220906469584,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Tayla-Jane Lovett [AU]',
        result: 'W',
        table: 85,
      },
      '2': {
        name: 'Blake Lobina [AU]',
        result: 'L',
        table: 50,
      },
      '3': {
        name: 'Nicholas Choong [NZ]',
        result: 'L',
        table: 127,
      },
      '4': {
        name: 'Jack underwood [AU]',
        result: 'T',
        table: 173,
      },
      '5': {
        name: 'Aydan Barrett [AU]',
        result: 'L',
        table: 171,
      },
      '6': {
        name: 'Daal Jaffers [AU]',
        result: 'L',
        table: 214,
      },
      '7': {
        name: 'Joshua Martin [AU]',
        result: 'L',
        table: 198,
      },
      '8': {
        name: 'Peter Colosimo [AU]',
        result: 'W',
        table: 192,
      },
      '9': {
        name: 'brian truong [AU]',
        result: 'L',
        table: 167,
      },
    },
  },
  {
    name: 'Donna Pedder [AU]',
    placing: 416,
    record: {
      wins: 2,
      losses: 6,
      ties: 1,
    },
    resistances: {
      self: 0.2777777777777778,
      opp: 0.4271604938271605,
      oppopp: 0.47491065304722707,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Alistair Menzies [AU]',
        result: 'L',
        table: 64,
      },
      '2': {
        name: 'Cassie Joison [AU]',
        result: 'W',
        table: 264,
      },
      '3': {
        name: 'Alex Crockford [AU]',
        result: 'L',
        table: 86,
      },
      '4': {
        name: 'Shaun Coupe [AU]',
        result: 'L',
        table: 189,
      },
      '5': {
        name: 'Cameron Dimond [AU]',
        result: 'T',
        table: 212,
      },
      '6': {
        name: 'Yasuyuki Handa [AU]',
        result: 'L',
        table: 197,
      },
      '7': {
        name: 'Peter Rennie [AU]',
        result: 'W',
        table: 207,
      },
      '8': {
        name: 'Mike Kan [AU]',
        result: 'L',
        table: 179,
      },
      '9': {
        name: 'Christofer Gozali [AU]',
        result: 'L',
        table: 168,
      },
    },
  },
  {
    name: 'Nathan Belcher [AU]',
    placing: 417,
    record: {
      wins: 2,
      losses: 6,
      ties: 1,
    },
    resistances: {
      self: 0.2777777777777778,
      opp: 0.42592592592592593,
      oppopp: 0.4550103580526861,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'James Xu [AU]',
        result: 'L',
        table: 60,
      },
      '2': {
        name: 'Ho Kit Chan [HK]',
        result: 'W',
        table: 236,
      },
      '3': {
        name: 'Kaiwen Cabbabe [AU]',
        result: 'L',
        table: 111,
      },
      '4': {
        name: 'Max McInnis [AU]',
        result: 'L',
        table: 206,
      },
      '5': {
        name: 'Tayla-Jane Lovett [AU]',
        result: 'T',
        table: 217,
      },
      '6': {
        name: 'Steven Hector [AU]',
        result: 'W',
        table: 201,
      },
      '7': {
        name: 'Paul Coletta [AU]',
        result: 'L',
        table: 159,
      },
      '8': {
        name: 'Khristian Embog [AU]',
        result: 'L',
        table: 174,
      },
      '9': {
        name: 'Aaron Kleinhenz [US]',
        result: 'L',
        table: 171,
      },
    },
  },
  {
    name: 'James Kostoulias [AU]',
    placing: 418,
    record: {
      wins: 2,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.42500000000000004,
      oppopp: 0.4766666666666666,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Matt Annable [AU]',
        result: 'W',
        table: 106,
      },
      '2': {
        name: 'Gareth Murphy [AU]',
        result: 'T',
        table: 34,
      },
      '3': {
        name: 'Brayden S [AU]',
        result: 'L',
        table: 51,
      },
      '4': {
        name: 'WaiLok Tse [AU]',
        result: 'L',
        table: 117,
      },
      '5': {
        name: 'Peter Ghionis [AU]',
        result: 'W',
        table: 165,
      },
      '6': {
        name: 'Satoya Takagi [JP]',
        result: 'L',
        table: 108,
      },
    },
  },
  {
    name: 'Paul Aguilar [AU]',
    placing: 419,
    record: {
      wins: 2,
      losses: 6,
      ties: 1,
    },
    resistances: {
      self: 0.2777777777777778,
      opp: 0.42363315696649034,
      oppopp: 0.4297588253408359,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Harry Shallcrass [NZ]',
        result: 'L',
        table: 10,
      },
      '2': {
        name: 'Rui Crocitta [AU]',
        result: 'L',
        table: 188,
      },
      '3': {
        name: 'Chris Hughes [NZ]',
        result: 'T',
        table: 233,
      },
      '4': {
        name: 'Daniel Bush [AU]',
        result: 'W',
        table: 231,
      },
      '5': {
        name: 'Joshua Crisp [AU]',
        result: 'L',
        table: 191,
      },
      '6': {
        name: 'Adam Knoblauch [AU]',
        result: 'L',
        table: 199,
      },
      '7': {
        name: 'Jesse Brewer [AU]',
        result: 'W',
        table: 203,
      },
      '8': {
        name: 'Raymond Chan [AU]',
        result: 'L',
        table: 170,
      },
      '9': {
        name: 'Matt Annable [AU]',
        result: 'L',
        table: 166,
      },
    },
  },
  {
    name: 'Steven Hector [AU]',
    placing: 420,
    record: {
      wins: 2,
      losses: 6,
      ties: 1,
    },
    resistances: {
      self: 0.2777777777777778,
      opp: 0.41358024691358025,
      oppopp: 0.4282753842277651,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Joel Suryadi [AU]',
        result: 'L',
        table: 139,
      },
      '2': {
        name: 'Jordan Ung [AU]',
        result: 'L',
        table: 253,
      },
      '3': {
        name: 'Zachary Vella [AU]',
        result: 'L',
        table: 262,
      },
      '4': {
        name: 'Jordyn Demeo [AU]',
        result: 'T',
        table: 249,
      },
      '5': {
        name: 'Sarah McEvoy [AU]',
        result: 'W',
        table: 244,
      },
      '6': {
        name: 'Nathan Belcher [AU]',
        result: 'L',
        table: 201,
      },
      '7': {
        name: 'Marcus Yap [AU]',
        result: 'W',
        table: 199,
      },
      '8': {
        name: 'Fangrao Feng [AU]',
        result: 'L',
        table: 176,
      },
      '9': {
        name: 'Julia Bridle [AU]',
        result: 'L',
        table: 162,
      },
    },
  },
  {
    name: 'Quentin Pepe [AU]',
    placing: 421,
    record: {
      wins: 2,
      losses: 6,
      ties: 1,
    },
    resistances: {
      self: 0.2777777777777778,
      opp: 0.32610229276895947,
      oppopp: 0.41365947201926034,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Kristopher Ryan-Clout [AU]',
        result: 'L',
        table: 180,
      },
      '2': {
        name: 'Peter Rennie [AU]',
        result: 'L',
        table: 203,
      },
      '3': {
        name: 'SzuYun Hsiao [AU]',
        result: 'T',
        table: 254,
      },
      '4': {
        name: 'Jorja Doenau [AU]',
        result: 'L',
        table: 242,
      },
      '5': {
        name: 'Adam Knoblauch [AU]',
        result: 'L',
        table: 241,
      },
      '6': {
        name: 'Khristian Embog [AU]',
        result: 'L',
        table: 235,
      },
      '7': {
        name: 'Lily Ly [AU]',
        result: 'L',
        table: 214,
      },
      '8': {
        name: 'Carmela Nucifora [AU]',
        result: 'W',
        table: 197,
      },
      '9': {
        name: 'Peter Colosimo [AU]',
        result: 'W',
        table: 177,
      },
    },
  },
  {
    name: 'Robin Law [AU]',
    placing: 422,
    record: {
      wins: 2,
      losses: 6,
      ties: 1,
    },
    resistances: {
      self: 0.2777777777777778,
      opp: 0.3248456790123457,
      oppopp: 0.42569316718456934,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jimmy Farrugia [AU]',
        result: 'L',
        table: 65,
      },
      '2': {
        name: 'Joshua Crisp [AU]',
        result: 'L',
        table: 200,
      },
      '3': {
        name: 'Marcus Dwyer [AU]',
        result: 'L',
        table: 258,
      },
      '4': {
        name: 'glenn hope [AU]',
        result: 'L',
        table: 246,
      },
      '5': {
        name: 'Ho Kit Chan [HK]',
        result: 'T',
        table: 248,
      },
      '6': {
        name: 'Daniel Bush [AU]',
        result: 'L',
        table: 236,
      },
      '7': {
        name: 'Shaun Kerr-Talbot [AU]',
        result: 'W',
        table: 215,
      },
      '8': {
        name: 'Peter Rennie [AU]',
        result: 'W',
        table: 194,
      },
      '9': {
        name: 'Morgan Squire [AU]',
        result: 'L',
        table: 163,
      },
    },
  },
  {
    name: 'Ciaran Bradley [NZ]',
    placing: 423,
    record: {
      wins: 2,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.4,
      opp: 0.5700000000000001,
      oppopp: 0.51,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Marcus Yap [AU]',
        result: 'W',
        table: 37,
      },
      '2': {
        name: 'Jordan Stamatopoulos [AU]',
        result: 'W',
        table: 87,
      },
      '3': {
        name: 'Max Prescott [AU]',
        result: 'L',
        table: 20,
      },
      '4': {
        name: 'Sylas Golding [AU]',
        result: 'L',
        table: 89,
      },
      '5': {
        name: 'Ben Anderson [AU]',
        result: 'L',
        table: 107,
      },
    },
  },
  {
    name: 'Ashley Coulthard [AU]',
    placing: 424,
    record: {
      wins: 2,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.4,
      opp: 0.5555555555555556,
      oppopp: 0.5013888888888889,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Alexander Roderick [AU]',
        result: 'W',
        table: 199,
      },
      '2': {
        name: 'Stefan Cocks [AU]',
        result: 'W',
        table: 100,
      },
      '3': {
        name: 'Jordan Palmer [AU]',
        result: 'L',
        table: 16,
      },
      '4': {
        name: 'Haru Nishikawa [JP]',
        result: 'L',
        table: 77,
      },
      '5': {
        name: 'Ryan Maullin [AU]',
        result: 'L',
        table: 128,
      },
      '6': {
        name: 'Chen Ching Lee [TW]',
        result: null,
        table: 169,
      },
    },
  },
  {
    name: 'Jacques Gouws [NZ]',
    placing: 425,
    record: {
      wins: 1,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.5555555555555555,
      oppopp: 0.4937500000000001,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Harry West [AU]',
        result: 'T',
        table: 160,
      },
      '2': {
        name: 'Brandon Wilson [AU]',
        result: 'W',
        table: 138,
      },
      '3': {
        name: 'Jake Lazzari [AU]',
        result: 'T',
        table: 82,
      },
      '4': {
        name: 'Ehren Roebuck [AU]',
        result: 'L',
        table: 100,
      },
      '5': {
        name: 'Chen Ching Lee [TW]',
        result: 'T',
        table: 158,
      },
      '6': {
        name: 'Michael Jiang [AU]',
        result: 'L',
        table: 174,
      },
    },
  },
  {
    name: 'Dillon Zhou-Sarno [AU]',
    placing: 426,
    record: {
      wins: 1,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.5416666666666666,
      oppopp: 0.4796296296296296,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Jack Leong [AU]',
        result: 'T',
        table: 24,
      },
      '2': {
        name: 'Ash Nassiri [NZ]',
        result: 'L',
        table: 141,
      },
      '3': {
        name: 'Hannah Paterson [AU]',
        result: 'T',
        table: 184,
      },
      '4': {
        name: 'Anthony Tsang [AU]',
        result: 'L',
        table: 210,
      },
      '5': {
        name: 'cody thorne [AU]',
        result: 'W',
        table: 236,
      },
      '6': {
        name: 'Morris Arnold [AU]',
        result: 'T',
        table: 186,
      },
    },
  },
  {
    name: 'Alex Crockford [AU]',
    placing: 427,
    record: {
      wins: 2,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.4,
      opp: 0.54,
      oppopp: 0.502,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'James Neilson [AU]',
        result: 'W',
        table: 110,
      },
      '2': {
        name: 'Hao Lu [AU]',
        result: 'L',
        table: 92,
      },
      '3': {
        name: 'Donna Pedder [AU]',
        result: 'W',
        table: 86,
      },
      '4': {
        name: 'Ryan Burt [AU]',
        result: 'L',
        table: 81,
      },
      '5': {
        name: 'Rogan Gilbertson [AU]',
        result: 'L',
        table: 138,
      },
    },
  },
  {
    name: 'Victor Su [AU]',
    placing: 428,
    record: {
      wins: 1,
      losses: 3,
      ties: 3,
    },
    resistances: {
      self: 0.35714285714285715,
      opp: 0.5367346938775509,
      oppopp: 0.5108066083576287,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Josh Geltch [AU]',
        result: 'W',
        table: 52,
      },
      '2': {
        name: 'Takuma Tominaga [JP]',
        result: 'L',
        table: 60,
      },
      '3': {
        name: 'Sam Clayfield [AU]',
        result: 'L',
        table: 93,
      },
      '4': {
        name: 'Luca Serianni [AU]',
        result: 'T',
        table: 190,
      },
      '5': {
        name: 'Jackson Mcdonald [AU]',
        result: 'T',
        table: 194,
      },
      '6': {
        name: 'Lewis Stevens [AU]',
        result: 'L',
        table: 188,
      },
      '7': {
        name: 'Zachary Bishop [AU]',
        result: 'T',
        table: 191,
      },
    },
  },
  {
    name: 'DONGXU LI [AU]',
    placing: 429,
    record: {
      wins: 1,
      losses: 1,
      ties: 3,
    },
    resistances: {
      self: 0.5,
      opp: 0.5199999999999999,
      oppopp: 0.48200000000000004,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Yongxiang Liu [AU]',
        result: 'T',
        table: 96,
      },
      '2': {
        name: 'Ramzey Fayad [AU]',
        result: 'T',
        table: 125,
      },
      '3': {
        name: 'Christian Makiling [AU]',
        result: 'W',
        table: 183,
      },
      '4': {
        name: 'Mike Kan [AU]',
        result: 'T',
        table: 106,
      },
      '5': {
        name: 'Christopher Cheung [AU]',
        result: 'L',
        table: 103,
      },
    },
  },
  {
    name: 'Jessica Karim [AU]',
    placing: 430,
    record: {
      wins: 2,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.4,
      opp: 0.5016666666666667,
      oppopp: 0.5307777777777778,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Jake Thomas [AU]',
        result: 'L',
        table: 13,
      },
      '2': {
        name: 'Morris Arnold [AU]',
        result: 'W',
        table: 232,
      },
      '3': {
        name: 'CHENG-HSIN YANG [AU]',
        result: 'W',
        table: 116,
      },
      '4': {
        name: 'Edward Mouanoutoua [AU]',
        result: 'L',
        table: 92,
      },
      '5': {
        name: 'Nathan Woodcock [AU]',
        result: 'L',
        table: 122,
      },
    },
  },
  {
    name: 'Jessamine Davis [AU]',
    placing: 431,
    record: {
      wins: 2,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.4,
      opp: 0.5,
      oppopp: 0.47400000000000003,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Liam Flood [NZ]',
        result: 'L',
        table: 227,
      },
      '2': {
        name: 'Antonio Sanabria [AU]',
        result: 'W',
        table: 162,
      },
      '3': {
        name: 'Mia Fountain [AU]',
        result: 'L',
        table: 155,
      },
      '4': {
        name: 'william wang [AU]',
        result: 'W',
        table: 171,
      },
      '5': {
        name: 'Thomas Quilliam [AU]',
        result: 'L',
        table: 121,
      },
    },
  },
  {
    name: 'Chen Ching Lee [TW]',
    placing: 432,
    record: {
      wins: 1,
      losses: 1,
      ties: 3,
    },
    resistances: {
      self: 0.5,
      opp: 0.4972222222222222,
      oppopp: 0.5152777777777778,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Sophia Crunkhorn [AU]',
        result: 'T',
        table: 62,
      },
      '2': {
        name: 'Zhiyuan Liang [CN]',
        result: 'T',
        table: 124,
      },
      '3': {
        name: 'Jarrad Paxton [AU]',
        result: 'W',
        table: 182,
      },
      '4': {
        name: 'Jason Zhe [AU]',
        result: 'L',
        table: 102,
      },
      '5': {
        name: 'Jacques Gouws [NZ]',
        result: 'T',
        table: 158,
      },
      '6': {
        name: 'Ashley Coulthard [AU]',
        result: null,
        table: 169,
      },
    },
  },
  {
    name: 'Alex Gordon [NZ]',
    placing: 433,
    record: {
      wins: 2,
      losses: 7,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.47708333333333336,
      oppopp: 0.4388574735449735,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Brendan Cliffe [AU]',
        result: 'L',
        table: 117,
      },
      '2': {
        name: 'Katelin Altieri [AU]',
        result: 'L',
        table: 163,
      },
      '3': {
        name: 'BYE',
        result: 'W',
        table: 0,
      },
      '4': {
        name: 'Cassie Joison [AU]',
        result: 'L',
        table: 203,
      },
      '5': {
        name: 'Tim Haffmanns [DE]',
        result: 'L',
        table: 226,
      },
      '6': {
        name: 'Aaron Kleinhenz [US]',
        result: 'W',
        table: 226,
      },
      '7': {
        name: 'Ramzey Fayad [AU]',
        result: 'L',
        table: 186,
      },
      '8': {
        name: 'Ruby Culley [AU]',
        result: 'L',
        table: 185,
      },
      '9': {
        name: 'Ellie Crouch [AU]',
        result: 'L',
        table: 173,
      },
    },
  },
  {
    name: 'Emma Baker [AU]',
    placing: 434,
    record: {
      wins: 2,
      losses: 6,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.46875,
      oppopp: 0.45405948837868476,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Nigel Tan [NZ]',
        result: 'L',
        table: 211,
      },
      '2': {
        name: 'Shaun Kerr-Talbot [AU]',
        result: 'W',
        table: 210,
      },
      '3': {
        name: 'Louis Chi [NZ]',
        result: 'L',
        table: 166,
      },
      '4': {
        name: 'Marco Giovannini [AU]',
        result: 'W',
        table: 179,
      },
      '5': {
        name: 'Calvin Prosser [AU]',
        result: 'L',
        table: 119,
      },
      '6': {
        name: 'Benjamin Small [AU]',
        result: 'L',
        table: 160,
      },
      '7': {
        name: 'Lawrence Lam [AU]',
        result: 'L',
        table: 183,
      },
      '8': {
        name: 'Jack Eeles [AU]',
        result: 'L',
        table: 182,
      },
    },
  },
  {
    name: 'Ryan Edwards [AU]',
    placing: 435,
    record: {
      wins: 2,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.4666666666666666,
      oppopp: 0.4792592592592592,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Max McInnis [AU]',
        result: 'W',
        table: 144,
      },
      '2': {
        name: 'Harley Collins [AU]',
        result: 'L',
        table: 33,
      },
      '3': {
        name: 'Gakuto Shiina [JP]',
        result: 'L',
        table: 145,
      },
      '4': {
        name: 'Kaiden Allan [AU]',
        result: 'L',
        table: 199,
      },
      '5': {
        name: 'Harrison Hodges [AU]',
        result: 'W',
        table: 213,
      },
      '6': {
        name: 'Ayumi Tamai [JP]',
        result: 'L',
        table: 161,
      },
    },
  },
  {
    name: 'Katelin Altieri [AU]',
    placing: 436,
    record: {
      wins: 2,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.4,
      opp: 0.45999999999999996,
      oppopp: 0.504,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Blake Lobina [AU]',
        result: 'L',
        table: 226,
      },
      '2': {
        name: 'Alex Gordon [NZ]',
        result: 'W',
        table: 163,
      },
      '3': {
        name: 'Sinan Gunaydin Okatan [AU]',
        result: 'L',
        table: 160,
      },
      '4': {
        name: 'Stefan Cocks [AU]',
        result: 'L',
        table: 182,
      },
      '5': {
        name: 'Marco Giovannini [AU]',
        result: 'W',
        table: 222,
      },
    },
  },
  {
    name: 'Max McInnis [AU]',
    placing: 437,
    record: {
      wins: 2,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.4583333333333333,
      oppopp: 0.4342592592592593,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Ryan Edwards [AU]',
        result: 'L',
        table: 144,
      },
      '2': {
        name: 'Johnathan Heng [AU]',
        result: 'L',
        table: 185,
      },
      '3': {
        name: 'Michael Duong [AU]',
        result: 'W',
        table: 255,
      },
      '4': {
        name: 'Nathan Belcher [AU]',
        result: 'W',
        table: 206,
      },
      '5': {
        name: 'Kye Edmondston [AU]',
        result: 'L',
        table: 140,
      },
      '6': {
        name: 'Tim Haffmanns [DE]',
        result: 'L',
        table: 167,
      },
    },
  },
  {
    name: 'Morris Arnold [AU]',
    placing: 438,
    record: {
      wins: 1,
      losses: 4,
      ties: 3,
    },
    resistances: {
      self: 0.3125,
      opp: 0.440625,
      oppopp: 0.4964831349206349,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Robert Seymour [AU]',
        result: 'L',
        table: 181,
      },
      '2': {
        name: 'Jessica Karim [AU]',
        result: 'L',
        table: 232,
      },
      '3': {
        name: 'Ryan Brook [AU]',
        result: 'W',
        table: 250,
      },
      '4': {
        name: 'Aydan Barrett [AU]',
        result: 'T',
        table: 205,
      },
      '5': {
        name: 'Kylara Paulo [AU]',
        result: 'T',
        table: 196,
      },
      '6': {
        name: 'Dillon Zhou-Sarno [AU]',
        result: 'T',
        table: 186,
      },
      '7': {
        name: 'Jesse Becker [AU]',
        result: 'L',
        table: 179,
      },
      '8': {
        name: 'Jack Burmeister [AU]',
        result: 'L',
        table: 183,
      },
    },
  },
  {
    name: 'Franklyn Hudson [AU]',
    placing: 439,
    record: {
      wins: 2,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.3952380952380952,
      oppopp: 0.4597732426303855,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Tyler Adamson [AU]',
        result: 'L',
        table: 173,
      },
      '2': {
        name: 'Vincent Sutinah [AU]',
        result: 'L',
        table: 181,
      },
      '3': {
        name: 'Peter Ghionis [AU]',
        result: 'L',
        table: 236,
      },
      '4': {
        name: 'Christopher Chan [AU]',
        result: 'L',
        table: 251,
      },
      '5': {
        name: 'BYE',
        result: 'W',
        table: 0,
      },
      '6': {
        name: 'James Higgins [AU]',
        result: 'W',
        table: 221,
      },
      '7': {
        name: 'Nam Ho [AU]',
        result: 'L',
        table: 175,
      },
    },
  },
  {
    name: 'Aditi Kutty [AU]',
    placing: 440,
    record: {
      wins: 1,
      losses: 5,
      ties: 3,
    },
    resistances: {
      self: 0.2777777777777778,
      opp: 0.3703703703703704,
      oppopp: 0.41961101312953164,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Callum Pinnegar [AU]',
        result: 'L',
        table: 153,
      },
      '2': {
        name: 'Jackson Doyle [AU]',
        result: 'L',
        table: 211,
      },
      '3': {
        name: 'Daniel Bush [AU]',
        result: 'T',
        table: 260,
      },
      '4': {
        name: 'Natasha Kelly [AU]',
        result: 'T',
        table: 241,
      },
      '5': {
        name: 'Calum McSpadden [AU]',
        result: 'L',
        table: 238,
      },
      '6': {
        name: 'Chris Hughes [NZ]',
        result: 'L',
        table: 230,
      },
      '7': {
        name: 'Jordyn Demeo [AU]',
        result: 'T',
        table: 213,
      },
      '8': {
        name: 'Aaron Kleinhenz [US]',
        result: 'L',
        table: 195,
      },
      '9': {
        name: 'Carmela Nucifora [AU]',
        result: 'W',
        table: 179,
      },
    },
  },
  {
    name: 'Michael Duong [AU]',
    placing: 441,
    record: {
      wins: 2,
      losses: 6,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.3575680272108844,
      oppopp: 0.437756620505345,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Harley Collins [AU]',
        result: 'L',
        table: 190,
      },
      '2': {
        name: 'Calvin Prosser [AU]',
        result: 'L',
        table: 218,
      },
      '3': {
        name: 'Max McInnis [AU]',
        result: 'L',
        table: 255,
      },
      '4': {
        name: 'BYE',
        result: 'W',
        table: 0,
      },
      '5': {
        name: 'Jack Riley [AU]',
        result: 'L',
        table: 229,
      },
      '6': {
        name: 'Hudson Moore [AU]',
        result: 'W',
        table: 223,
      },
      '7': {
        name: 'Jordan Ung [AU]',
        result: 'L',
        table: 187,
      },
      '8': {
        name: 'Alexander Roderick [AU]',
        result: 'L',
        table: 184,
      },
    },
  },
  {
    name: 'Natasha Kelly [AU]',
    placing: 442,
    record: {
      wins: 1,
      losses: 5,
      ties: 3,
    },
    resistances: {
      self: 0.2777777777777778,
      opp: 0.3549382716049383,
      oppopp: 0.42125710366451113,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Sylas Golding [AU]',
        result: 'L',
        table: 42,
      },
      '2': {
        name: 'Carl Orbista [AU]',
        result: 'L',
        table: 213,
      },
      '3': {
        name: 'Lance Griggs [AU]',
        result: 'T',
        table: 226,
      },
      '4': {
        name: 'Aditi Kutty [AU]',
        result: 'T',
        table: 241,
      },
      '5': {
        name: 'Christopher Turner [AU]',
        result: 'T',
        table: 232,
      },
      '6': {
        name: 'Ruby Culley [AU]',
        result: 'W',
        table: 217,
      },
      '7': {
        name: 'Jason Slifka [AU]',
        result: 'L',
        table: 177,
      },
      '8': {
        name: 'Bayley Janssen [AU]',
        result: 'L',
        table: 180,
      },
      '9': {
        name: 'Joshua Grob [AU]',
        result: 'L',
        table: 172,
      },
    },
  },
  {
    name: 'Jordyn Demeo [AU]',
    placing: 443,
    record: {
      wins: 1,
      losses: 5,
      ties: 3,
    },
    resistances: {
      self: 0.2777777777777778,
      opp: 0.345679012345679,
      oppopp: 0.4310479129923574,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Raymond Wong [AU]',
        result: 'L',
        table: 76,
      },
      '2': {
        name: 'Su Fu [NZ]',
        result: 'L',
        table: 194,
      },
      '3': {
        name: 'Antonio Sanabria [AU]',
        result: 'L',
        table: 234,
      },
      '4': {
        name: 'Steven Hector [AU]',
        result: 'T',
        table: 249,
      },
      '5': {
        name: 'Ethan Stoeckert [AU]',
        result: 'L',
        table: 239,
      },
      '6': {
        name: 'Connor Lee Dow [AU]',
        result: 'T',
        table: 233,
      },
      '7': {
        name: 'Aditi Kutty [AU]',
        result: 'T',
        table: 213,
      },
      '8': {
        name: 'Shaun Camilleri [AU]',
        result: 'W',
        table: 196,
      },
      '9': {
        name: 'Jesse Brewer [AU]',
        result: 'L',
        table: 174,
      },
    },
  },
  {
    name: 'Keller Huang [AU]',
    placing: 444,
    record: {
      wins: 1,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.5805555555555555,
      oppopp: 0.4887037037037037,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Jay Tyrrell [AU]',
        result: 'W',
        table: 241,
      },
      '2': {
        name: 'Joel Suryadi [AU]',
        result: 'L',
        table: 35,
      },
      '3': {
        name: 'Brendan Cliffe [AU]',
        result: 'T',
        table: 121,
      },
      '4': {
        name: 'Joshua Courtney [AU]',
        result: 'L',
        table: 142,
      },
      '5': {
        name: 'Luca Serianni [AU]',
        result: 'T',
        table: 203,
      },
      '6': {
        name: 'Jacob Sparks [AU]',
        result: 'L',
        table: 192,
      },
    },
  },
  {
    name: 'Alexander Bray [AU]',
    placing: 445,
    record: {
      wins: 1,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.4,
      opp: 0.5399999999999999,
      oppopp: 0.472,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Courtney Fox [AU]',
        result: 'L',
        table: 41,
      },
      '2': {
        name: 'Charlie Queen [AU]',
        result: 'T',
        table: 180,
      },
      '3': {
        name: 'Ashton Bradley [AU]',
        result: 'W',
        table: 209,
      },
      '4': {
        name: 'Tyler Bishop [AU]',
        result: 'L',
        table: 139,
      },
      '5': {
        name: 'Nathan Johnson [AU]',
        result: 'T',
        table: 193,
      },
    },
  },
  {
    name: 'Tian Li [NZ]',
    placing: 446,
    record: {
      wins: 1,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.4,
      opp: 0.53,
      oppopp: 0.43999999999999995,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Cameron Shenoy [US]',
        result: 'L',
        table: 220,
      },
      '2': {
        name: 'Ayumi Tamai [JP]',
        result: 'T',
        table: 161,
      },
      '3': {
        name: 'Stanley Chaplin [AU]',
        result: 'T',
        table: 200,
      },
      '4': {
        name: 'Melinda Li [NZ]',
        result: 'W',
        table: 221,
      },
      '5': {
        name: 'Sky Mathieson [AU]',
        result: 'L',
        table: 148,
      },
    },
  },
  {
    name: 'Connor Jackson [AU]',
    placing: 447,
    record: {
      wins: 1,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.513888888888889,
      oppopp: 0.48518518518518516,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Vincent Ma [NZ]',
        result: 'T',
        table: 239,
      },
      '2': {
        name: 'Chris Currenti [AU]',
        result: 'L',
        table: 127,
      },
      '3': {
        name: 'Ayumi Tamai [JP]',
        result: 'T',
        table: 199,
      },
      '4': {
        name: 'YUTIAN SHOU [AU]',
        result: 'L',
        table: 222,
      },
      '5': {
        name: 'Stanley Chaplin [AU]',
        result: 'W',
        table: 235,
      },
      '6': {
        name: 'Sean Takemoto [AU]',
        result: 'L',
        table: 187,
      },
    },
  },
  {
    name: 'Kylara Paulo [AU]',
    placing: 448,
    record: {
      wins: 1,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.513888888888889,
      oppopp: 0.44282407407407404,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Jacob McSpadden [AU]',
        result: 'L',
        table: 191,
      },
      '2': {
        name: 'Shang Jun Chua [AU]',
        result: 'L',
        table: 238,
      },
      '3': {
        name: 'Nick Shortt [NZ]',
        result: 'T',
        table: 229,
      },
      '4': {
        name: 'Chris Hughes [NZ]',
        result: 'W',
        table: 239,
      },
      '5': {
        name: 'Morris Arnold [AU]',
        result: 'T',
        table: 196,
      },
      '6': {
        name: 'Sam Chen [US]',
        result: 'L',
        table: 189,
      },
    },
  },
  {
    name: 'Peter Lo [AU]',
    placing: 449,
    record: {
      wins: 1,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.4,
      opp: 0.51,
      oppopp: 0.458,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Vignesh Krishnan [AU]',
        result: 'L',
        table: 148,
      },
      '2': {
        name: 'Samuel Williams [AU]',
        result: 'W',
        table: 202,
      },
      '3': {
        name: 'Kevin Min [AU]',
        result: 'T',
        table: 144,
      },
      '4': {
        name: 'thomas lackington [AU]',
        result: 'L',
        table: 145,
      },
      '5': {
        name: 'Soon Keat Chia [MY]',
        result: 'T',
        table: 190,
      },
    },
  },
  {
    name: 'Henry Brereton [AU]',
    placing: 450,
    record: {
      wins: 1,
      losses: 5,
      ties: 2,
    },
    resistances: {
      self: 0.25,
      opp: 0.5,
      oppopp: 0.5019438244047619,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Ayane Matsumoto [AU]',
        result: 'L',
        table: 150,
      },
      '2': {
        name: 'Rory Sharpe [AU]',
        result: 'T',
        table: 219,
      },
      '3': {
        name: 'Sandra Flood [NZ]',
        result: 'W',
        table: 196,
      },
      '4': {
        name: 'Kye Edmondston [AU]',
        result: 'T',
        table: 115,
      },
      '5': {
        name: 'Tom Bourke [AU]',
        result: 'L',
        table: 152,
      },
      '6': {
        name: 'Holly Wang [AU]',
        result: 'L',
        table: 190,
      },
      '7': {
        name: 'Jackson Mcdonald [AU]',
        result: 'L',
        table: 190,
      },
      '8': {
        name: 'Alex Hatzidakis [AU]',
        result: 'L',
        table: 188,
      },
    },
  },
  {
    name: 'Ryan Mcculloch [AU]',
    placing: 451,
    record: {
      wins: 1,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.2857142857142857,
      opp: 0.4908163265306122,
      oppopp: 0.45047457078069325,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'SzuYun Hsiao [AU]',
        result: 'W',
        table: 197,
      },
      '2': {
        name: 'Justin Teh [AU]',
        result: 'L',
        table: 45,
      },
      '3': {
        name: 'Andrew Lam [AU]',
        result: 'T',
        table: 101,
      },
      '4': {
        name: 'Yongxiang Liu [AU]',
        result: 'L',
        table: 123,
      },
      '5': {
        name: 'James Neilson [AU]',
        result: 'T',
        table: 177,
      },
      '6': {
        name: 'Huy Doan [AU]',
        result: 'L',
        table: 177,
      },
      '7': {
        name: 'Soon Keat Chia [MY]',
        result: 'L',
        table: 195,
      },
    },
  },
  {
    name: 'Luca Serianni [AU]',
    placing: 452,
    record: {
      wins: 1,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.4,
      opp: 0.45999999999999996,
      oppopp: 0.55,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Kazuo Nakamura [AU]',
        result: 'L',
        table: 164,
      },
      '2': {
        name: 'Cameron Dimond [AU]',
        result: 'L',
        table: 226,
      },
      '3': {
        name: 'Kayla Stockwell [AU]',
        result: 'W',
        table: 224,
      },
      '4': {
        name: 'Victor Su [AU]',
        result: 'T',
        table: 190,
      },
      '5': {
        name: 'Keller Huang [AU]',
        result: 'T',
        table: 203,
      },
    },
  },
  {
    name: 'Rui Crocitta [AU]',
    placing: 453,
    record: {
      wins: 1,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.4,
      opp: 0.45999999999999996,
      oppopp: 0.512,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Peter Fay [AU]',
        result: 'L',
        table: 47,
      },
      '2': {
        name: 'Paul Aguilar [AU]',
        result: 'W',
        table: 188,
      },
      '3': {
        name: 'Sebastian Rutter [NZ]',
        result: 'T',
        table: 143,
      },
      '4': {
        name: 'Rory Sharpe [AU]',
        result: 'T',
        table: 110,
      },
      '5': {
        name: 'James Futcher [AU]',
        result: 'L',
        table: 156,
      },
    },
  },
  {
    name: 'Josh Ng [AU]',
    placing: 454,
    record: {
      wins: 1,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.2857142857142857,
      opp: 0.4591836734693877,
      oppopp: 0.45097181729834795,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Melinda Li [NZ]',
        result: 'T',
        table: 123,
      },
      '2': {
        name: 'Daal Jaffers [AU]',
        result: 'W',
        table: 157,
      },
      '3': {
        name: 'Mitch Knuckey [AU]',
        result: 'L',
        table: 55,
      },
      '4': {
        name: 'John Morris [AU]',
        result: 'L',
        table: 112,
      },
      '5': {
        name: 'Bee Blackwell [AU]',
        result: 'L',
        table: 188,
      },
      '6': {
        name: 'Cameron Dimond [AU]',
        result: 'T',
        table: 193,
      },
      '7': {
        name: 'Rory Beniuk [AU]',
        result: 'L',
        table: 189,
      },
    },
  },
  {
    name: 'Christian Makiling [AU]',
    placing: 455,
    record: {
      wins: 1,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.4,
      opp: 0.45,
      oppopp: 0.48999999999999994,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Nicholas Apostolou [AU]',
        result: 'T',
        table: 97,
      },
      '2': {
        name: 'Mike Kan [AU]',
        result: 'T',
        table: 126,
      },
      '3': {
        name: 'DONGXU LI [AU]',
        result: 'L',
        table: 183,
      },
      '4': {
        name: 'Hannah Paterson [AU]',
        result: 'L',
        table: 220,
      },
      '5': {
        name: 'Alex Hatzidakis [AU]',
        result: 'W',
        table: 233,
      },
    },
  },
  {
    name: 'James Neilson [AU]',
    placing: 456,
    record: {
      wins: 1,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.4,
      opp: 0.44000000000000006,
      oppopp: 0.49000000000000005,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Alex Crockford [AU]',
        result: 'L',
        table: 110,
      },
      '2': {
        name: 'Connor Tobin-Underwood [AU]',
        result: 'T',
        table: 169,
      },
      '3': {
        name: 'James Grkinic [AU]',
        result: 'W',
        table: 205,
      },
      '4': {
        name: 'Daniel Mielnik [AU]',
        result: 'L',
        table: 137,
      },
      '5': {
        name: 'Ryan Mcculloch [AU]',
        result: 'T',
        table: 177,
      },
    },
  },
  {
    name: 'cody thorne [AU]',
    placing: 457,
    record: {
      wins: 1,
      losses: 5,
      ties: 2,
    },
    resistances: {
      self: 0.25,
      opp: 0.42552083333333335,
      oppopp: 0.48906994047619046,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'Alyssa Lock [AU]',
        result: 'T',
        table: 212,
      },
      '2': {
        name: 'Malik Hisyam Zaihan [IE]',
        result: 'L',
        table: 119,
      },
      '3': {
        name: 'Connor Lee Dow [AU]',
        result: 'T',
        table: 207,
      },
      '4': {
        name: 'Anthony Smith [AU]',
        result: 'L',
        table: 219,
      },
      '5': {
        name: 'Dillon Zhou-Sarno [AU]',
        result: 'L',
        table: 236,
      },
      '6': {
        name: 'Stanley Chaplin [AU]',
        result: 'W',
        table: 231,
      },
      '7': {
        name: 'Alexander Cannavo [AU]',
        result: 'L',
        table: 192,
      },
      '8': {
        name: 'Cameron Dimond [AU]',
        result: 'L',
        table: 187,
      },
    },
  },
  {
    name: 'Lance Griggs [AU]',
    placing: 458,
    record: {
      wins: 1,
      losses: 6,
      ties: 2,
    },
    resistances: {
      self: 0.25,
      opp: 0.4135802469135803,
      oppopp: 0.4354668822261415,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Nick Bell [AU]',
        result: 'L',
        table: 112,
      },
      '2': {
        name: 'Josh Geltch [AU]',
        result: 'L',
        table: 209,
      },
      '3': {
        name: 'Natasha Kelly [AU]',
        result: 'T',
        table: 226,
      },
      '4': {
        name: 'Benjamin McMahon [AU]',
        result: 'L',
        table: 233,
      },
      '5': {
        name: 'Shaun Camilleri [AU]',
        result: 'W',
        table: 246,
      },
      '6': {
        name: 'Andrew Lam [AU]',
        result: 'T',
        table: 211,
      },
      '7': {
        name: 'Calum McSpadden [AU]',
        result: 'L',
        table: 194,
      },
      '8': {
        name: 'Jeb Collins [AU]',
        result: 'L',
        table: 189,
      },
      '9': {
        name: 'Lily Ly [AU]',
        result: 'L',
        table: 176,
      },
    },
  },
  {
    name: 'Nina Junaidi [SG]',
    placing: 459,
    record: {
      wins: 1,
      losses: 4,
      ties: 2,
    },
    resistances: {
      self: 0.2857142857142857,
      opp: 0.4005102040816326,
      oppopp: 0.447424684159378,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Oliver Karmel-Shann [CA]',
        result: 'L',
        table: 177,
      },
      '2': {
        name: 'Rhys Theodoropoulos [AU]',
        result: 'L',
        table: 205,
      },
      '3': {
        name: 'Marcus Yap [AU]',
        result: 'W',
        table: 252,
      },
      '4': {
        name: 'Chee How Liew [AU]',
        result: 'T',
        table: 175,
      },
      '5': {
        name: 'Bayley Janssen [AU]',
        result: 'L',
        table: 164,
      },
      '6': {
        name: 'Brandon Wilson [AU]',
        result: 'L',
        table: 213,
      },
      '7': {
        name: 'Hugo Pearce [AU]',
        result: 'T',
        table: 208,
      },
    },
  },
  {
    name: 'Daniel Bush [AU]',
    placing: 460,
    record: {
      wins: 1,
      losses: 6,
      ties: 2,
    },
    resistances: {
      self: 0.25,
      opp: 0.350352733686067,
      oppopp: 0.4007000783852635,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Edward Mouanoutoua [AU]',
        result: 'L',
        table: 88,
      },
      '2': {
        name: 'Christopher Fragiotta [AU]',
        result: 'L',
        table: 178,
      },
      '3': {
        name: 'Aditi Kutty [AU]',
        result: 'T',
        table: 260,
      },
      '4': {
        name: 'Paul Aguilar [AU]',
        result: 'L',
        table: 231,
      },
      '5': {
        name: 'Nick Shortt [NZ]',
        result: 'L',
        table: 242,
      },
      '6': {
        name: 'Robin Law [AU]',
        result: 'W',
        table: 236,
      },
      '7': {
        name: 'Matt Annable [AU]',
        result: 'L',
        table: 202,
      },
      '8': {
        name: 'Lily Ly [AU]',
        result: 'T',
        table: 193,
      },
      '9': {
        name: 'Hugo Pearce [AU]',
        result: 'L',
        table: 175,
      },
    },
  },
  {
    name: 'Chris Hughes [NZ]',
    placing: 461,
    record: {
      wins: 1,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.34722222222222215,
      oppopp: 0.487962962962963,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Chung-Yin Johnny Chan [AU]',
        result: 'L',
        table: 54,
      },
      '2': {
        name: 'Bee Blackwell [AU]',
        result: 'L',
        table: 201,
      },
      '3': {
        name: 'Paul Aguilar [AU]',
        result: 'T',
        table: 233,
      },
      '4': {
        name: 'Kylara Paulo [AU]',
        result: 'L',
        table: 239,
      },
      '5': {
        name: 'Carmela Nucifora [AU]',
        result: 'T',
        table: 240,
      },
      '6': {
        name: 'Aditi Kutty [AU]',
        result: 'W',
        table: 230,
      },
    },
  },
  {
    name: 'Jake Thomas [AU]',
    placing: 462,
    record: {
      wins: 1,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.375,
      opp: 0.625,
      oppopp: 0.4739583333333333,
    },
    decklist: '',
    drop: 4,
    rounds: {
      '1': {
        name: 'Jessica Karim [AU]',
        result: 'W',
        table: 13,
      },
      '2': {
        name: 'Huy Doan [AU]',
        result: 'T',
        table: 110,
      },
      '3': {
        name: 'Raymond Wong [AU]',
        result: 'L',
        table: 81,
      },
      '4': {
        name: 'Jacob McSpadden [AU]',
        result: 'L',
        table: 130,
      },
    },
  },
  {
    name: 'Malik Hisyam Zaihan [IE]',
    placing: 463,
    record: {
      wins: 1,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.3,
      opp: 0.5700000000000001,
      oppopp: 0.466,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Ryan Tan [UK]',
        result: 'T',
        table: 232,
      },
      '2': {
        name: 'cody thorne [AU]',
        result: 'W',
        table: 119,
      },
      '3': {
        name: 'xinzhe hou [AU]',
        result: 'L',
        table: 69,
      },
      '4': {
        name: 'Charles Li [AU]',
        result: 'L',
        table: 141,
      },
      '5': {
        name: 'Paul Coletta [AU]',
        result: 'L',
        table: 184,
      },
    },
  },
  {
    name: 'Alistair Menzies [AU]',
    placing: 464,
    record: {
      wins: 1,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.5416666666666666,
      oppopp: 0.48078703703703707,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Donna Pedder [AU]',
        result: 'W',
        table: 64,
      },
      '2': {
        name: 'charles limbrick [AU]',
        result: 'T',
        table: 49,
      },
      '3': {
        name: 'Cameron Shenoy [US]',
        result: 'L',
        table: 48,
      },
      '4': {
        name: 'DI ZHU [CN]',
        result: 'L',
        table: 124,
      },
      '5': {
        name: 'Jack Fone [AU]',
        result: 'L',
        table: 175,
      },
      '6': {
        name: 'Tyler Gilbey [AU]',
        result: 'L',
        table: 194,
      },
    },
  },
  {
    name: 'Zhaolong Zhu [AU]',
    placing: 465,
    record: {
      wins: 1,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.3,
      opp: 0.52,
      oppopp: 0.441,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Jack Fone [AU]',
        result: 'L',
        table: 27,
      },
      '2': {
        name: 'Adam Crust [AU]',
        result: 'W',
        table: 239,
      },
      '3': {
        name: 'jeremy blackney [AU]',
        result: 'T',
        table: 133,
      },
      '4': {
        name: 'Charlie Queen [AU]',
        result: 'L',
        table: 120,
      },
      '5': {
        name: 'Julia Bridle [AU]',
        result: 'L',
        table: 181,
      },
    },
  },
  {
    name: 'Corey Matthews [AU]',
    placing: 466,
    record: {
      wins: 1,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.3,
      opp: 0.5,
      oppopp: 0.534,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Timothy Uyeda [AU]',
        result: 'T',
        table: 158,
      },
      '2': {
        name: 'Lawrence Lam [AU]',
        result: 'W',
        table: 135,
      },
      '3': {
        name: 'Manuel Jorach [AT]',
        result: 'L',
        table: 49,
      },
      '4': {
        name: 'Johnathan Heng [AU]',
        result: 'L',
        table: 118,
      },
      '5': {
        name: 'Liam Flood [NZ]',
        result: 'L',
        table: 179,
      },
    },
  },
  {
    name: 'Chee How Liew [AU]',
    placing: 467,
    record: {
      wins: 1,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.375,
      opp: 0.5,
      oppopp: 0.46875,
    },
    decklist: '',
    drop: 4,
    rounds: {
      '1': {
        name: 'TE-AWHI TE ANGINA [AU]',
        result: 'W',
        table: 184,
      },
      '2': {
        name: 'Ayane Matsumoto [AU]',
        result: 'L',
        table: 104,
      },
      '3': {
        name: 'Hayden Barker [AU]',
        result: 'L',
        table: 97,
      },
      '4': {
        name: 'Nina Junaidi [SG]',
        result: 'T',
        table: 175,
      },
    },
  },
  {
    name: 'Aura Ye [AU]',
    placing: 468,
    record: {
      wins: 1,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.4861111111111111,
      oppopp: 0.4618055555555556,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Jacob Mccall [AU]',
        result: 'W',
        table: 167,
      },
      '2': {
        name: 'Mohd Taufiq Mohd Alwi [SG]',
        result: 'T',
        table: 73,
      },
      '3': {
        name: 'Hakim Moussaoui [AU]',
        result: 'L',
        table: 50,
      },
      '4': {
        name: 'Rostin Luo [NZ]',
        result: 'L',
        table: 127,
      },
      '5': {
        name: 'Jiahe Liang [AU]',
        result: 'L',
        table: 187,
      },
      '6': {
        name: 'Mason Mitchell [AU]',
        result: 'L',
        table: 196,
      },
    },
  },
  {
    name: 'Nicholas Apostolou [AU]',
    placing: 469,
    record: {
      wins: 0,
      losses: 2,
      ties: 4,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.48333333333333334,
      oppopp: 0.4583333333333333,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Christian Makiling [AU]',
        result: 'T',
        table: 97,
      },
      '2': {
        name: 'Hakim Moussaoui [AU]',
        result: 'L',
        table: 117,
      },
      '3': {
        name: 'Josephine Nucifora [AU]',
        result: 'T',
        table: 191,
      },
      '4': {
        name: 'Fangrao Feng [AU]',
        result: 'T',
        table: 212,
      },
      '5': {
        name: 'Tyler Gilbey [AU]',
        result: 'T',
        table: 204,
      },
      '6': {
        name: 'Zachary Vella [AU]',
        result: 'L',
        table: 208,
      },
    },
  },
  {
    name: 'Carl Orbista [AU]',
    placing: 470,
    record: {
      wins: 1,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.48055555555555557,
      oppopp: 0.4512037037037037,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Hayden Matthews [AU]',
        result: 'L',
        table: 103,
      },
      '2': {
        name: 'Natasha Kelly [AU]',
        result: 'W',
        table: 213,
      },
      '3': {
        name: 'Diego Gatica [CL]',
        result: 'L',
        table: 107,
      },
      '4': {
        name: 'Peter Ghionis [AU]',
        result: 'T',
        table: 168,
      },
      '5': {
        name: 'Stefan Djordjevic [AU]',
        result: 'L',
        table: 183,
      },
      '6': {
        name: 'Paige Chamberlain [AU]',
        result: 'L',
        table: 198,
      },
    },
  },
  {
    name: 'Simon Higgins [AU]',
    placing: 471,
    record: {
      wins: 1,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.47222222222222215,
      oppopp: 0.4445601851851851,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Raymond Chan [AU]',
        result: 'L',
        table: 251,
      },
      '2': {
        name: 'David Valderrama [AU]',
        result: 'W',
        table: 223,
      },
      '3': {
        name: 'Daniel Ross-Brown [AU]',
        result: 'L',
        table: 115,
      },
      '4': {
        name: 'Ben Anderson [AU]',
        result: 'L',
        table: 172,
      },
      '5': {
        name: 'brian truong [AU]',
        result: 'T',
        table: 230,
      },
      '6': {
        name: 'Morgan Squire [AU]',
        result: 'L',
        table: 195,
      },
    },
  },
  {
    name: 'Kristopher Ryan-Clout [AU]',
    placing: 472,
    record: {
      wins: 1,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.3,
      opp: 0.47000000000000003,
      oppopp: 0.45600000000000007,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Quentin Pepe [AU]',
        result: 'W',
        table: 180,
      },
      '2': {
        name: 'Alan Quach [NZ]',
        result: 'L',
        table: 64,
      },
      '3': {
        name: 'Edward Mouanoutoua [AU]',
        result: 'L',
        table: 165,
      },
      '4': {
        name: 'Zachary Vella [AU]',
        result: 'T',
        table: 204,
      },
      '5': {
        name: 'Connor Tobin-Underwood [AU]',
        result: 'L',
        table: 168,
      },
    },
  },
  {
    name: 'Sable Wang-Wills [AU]',
    placing: 473,
    record: {
      wins: 1,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.375,
      opp: 0.46875,
      oppopp: 0.5078125,
    },
    decklist: '',
    drop: 4,
    rounds: {
      '1': {
        name: 'Christopher Chan [AU]',
        result: 'W',
        table: 225,
      },
      '2': {
        name: 'Jack Fone [AU]',
        result: 'T',
        table: 7,
      },
      '3': {
        name: 'David Boyd [AU]',
        result: 'L',
        table: 53,
      },
      '4': {
        name: 'Sameer Sangwan [AU]',
        result: 'L',
        table: 158,
      },
    },
  },
  {
    name: 'Damien Commadeur [AU]',
    placing: 474,
    record: {
      wins: 1,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.4305555555555556,
      oppopp: 0.46064814814814814,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Christopher Mathers [AU]',
        result: 'L',
        table: 44,
      },
      '2': {
        name: 'Jake Holmes [AU]',
        result: 'L',
        table: 234,
      },
      '3': {
        name: 'Jiahe Liang [AU]',
        result: 'T',
        table: 243,
      },
      '4': {
        name: 'Jake Herden [AU]',
        result: 'L',
        table: 234,
      },
      '5': {
        name: 'Khristian Embog [AU]',
        result: 'W',
        table: 245,
      },
      '6': {
        name: 'brian truong [AU]',
        result: 'L',
        table: 209,
      },
    },
  },
  {
    name: 'Daniel Pollard [AU]',
    placing: 475,
    record: {
      wins: 1,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.4305555555555556,
      oppopp: 0.41550925925925924,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'David Burness [AU]',
        result: 'L',
        table: 55,
      },
      '2': {
        name: 'Aydan Barrett [AU]',
        result: 'L',
        table: 206,
      },
      '3': {
        name: 'Hugo Pearce [AU]',
        result: 'W',
        table: 228,
      },
      '4': {
        name: 'Jake Holmes [AU]',
        result: 'T',
        table: 186,
      },
      '5': {
        name: 'TE-AWHI TE ANGINA [AU]',
        result: 'L',
        table: 200,
      },
      '6': {
        name: 'Sammy Madafiglio [AU]',
        result: 'L',
        table: 205,
      },
    },
  },
  {
    name: 'Christopher Fragiotta [AU]',
    placing: 476,
    record: {
      wins: 1,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.3,
      opp: 0.43000000000000005,
      oppopp: 0.422,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'William Rue [AU]',
        result: 'L',
        table: 82,
      },
      '2': {
        name: 'Daniel Bush [AU]',
        result: 'W',
        table: 178,
      },
      '3': {
        name: 'Wern Wong [NZ]',
        result: 'L',
        table: 87,
      },
      '4': {
        name: 'Peter Rennie [AU]',
        result: 'T',
        table: 181,
      },
      '5': {
        name: 'Jack underwood [AU]',
        result: 'L',
        table: 166,
      },
    },
  },
  {
    name: 'Nick Shortt [NZ]',
    placing: 477,
    record: {
      wins: 1,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.4166666666666666,
      oppopp: 0.4597222222222222,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Brent Tonisson [AU]',
        result: 'L',
        table: 161,
      },
      '2': {
        name: 'Sammy Madafiglio [AU]',
        result: 'L',
        table: 246,
      },
      '3': {
        name: 'Kylara Paulo [AU]',
        result: 'T',
        table: 229,
      },
      '4': {
        name: 'Joshua Martin [AU]',
        result: 'L',
        table: 228,
      },
      '5': {
        name: 'Daniel Bush [AU]',
        result: 'W',
        table: 242,
      },
      '6': {
        name: 'Su Fu [NZ]',
        result: 'L',
        table: 200,
      },
    },
  },
  {
    name: 'Peter Rennie [AU]',
    placing: 478,
    record: {
      wins: 1,
      losses: 6,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.4125,
      oppopp: 0.445281143707483,
    },
    decklist: '',
    drop: 8,
    rounds: {
      '1': {
        name: 'David Boyd [AU]',
        result: 'L',
        table: 221,
      },
      '2': {
        name: 'Quentin Pepe [AU]',
        result: 'W',
        table: 203,
      },
      '3': {
        name: 'Sam Hughes [AU]',
        result: 'L',
        table: 103,
      },
      '4': {
        name: 'Christopher Fragiotta [AU]',
        result: 'T',
        table: 181,
      },
      '5': {
        name: 'Oliver Karmel-Shann [CA]',
        result: 'L',
        table: 180,
      },
      '6': {
        name: 'James Boynton [AU]',
        result: 'L',
        table: 215,
      },
      '7': {
        name: 'Donna Pedder [AU]',
        result: 'L',
        table: 207,
      },
      '8': {
        name: 'Robin Law [AU]',
        result: 'L',
        table: 194,
      },
    },
  },
  {
    name: 'Peter Colosimo [AU]',
    placing: 479,
    record: {
      wins: 1,
      losses: 7,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.3881172839506173,
      oppopp: 0.424421908681168,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Christopher Turner [AU]',
        result: 'T',
        table: 183,
      },
      '2': {
        name: 'Tom Sautelle [AU]',
        result: 'L',
        table: 122,
      },
      '3': {
        name: 'Connor Tobin-Underwood [AU]',
        result: 'W',
        table: 203,
      },
      '4': {
        name: 'jeremy blackney [AU]',
        result: 'L',
        table: 156,
      },
      '5': {
        name: 'Benjamin McMahon [AU]',
        result: 'L',
        table: 199,
      },
      '6': {
        name: 'Christofer Gozali [AU]',
        result: 'L',
        table: 210,
      },
      '7': {
        name: 'Mohd Taufiq Mohd Alwi [SG]',
        result: 'L',
        table: 204,
      },
      '8': {
        name: 'Angela Lewis [AU]',
        result: 'L',
        table: 192,
      },
      '9': {
        name: 'Quentin Pepe [AU]',
        result: 'L',
        table: 177,
      },
    },
  },
  {
    name: 'Ho Kit Chan [HK]',
    placing: 480,
    record: {
      wins: 1,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.38775510204081637,
      oppopp: 0.40744250080984773,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Joshua Bradley [AU]',
        result: 'L',
        table: 135,
      },
      '2': {
        name: 'Nathan Belcher [AU]',
        result: 'L',
        table: 236,
      },
      '3': {
        name: 'Adam Crust [AU]',
        result: 'L',
        table: 239,
      },
      '4': {
        name: 'brian truong [AU]',
        result: 'L',
        table: 253,
      },
      '5': {
        name: 'Robin Law [AU]',
        result: 'T',
        table: 248,
      },
      '6': {
        name: 'Toby Frost [AU]',
        result: 'W',
        table: 234,
      },
      '7': {
        name: 'Christopher Ganal [AU]',
        result: 'L',
        table: 201,
      },
    },
  },
  {
    name: 'Brandon Lee [AU]',
    placing: 481,
    record: {
      wins: 1,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.3,
      opp: 0.37,
      oppopp: 0.465,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'David Younan [AU]',
        result: 'L',
        table: 69,
      },
      '2': {
        name: 'Anh Vuong Quoc Vo [AU]',
        result: 'L',
        table: 165,
      },
      '3': {
        name: 'Ruby Culley [AU]',
        result: 'W',
        table: 227,
      },
      '4': {
        name: 'Hugh Batten [NZ]',
        result: 'L',
        table: 169,
      },
      '5': {
        name: 'Kayla Stockwell [AU]',
        result: 'T',
        table: 228,
      },
    },
  },
  {
    name: 'Marcus Yap [AU]',
    placing: 482,
    record: {
      wins: 1,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.36836734693877554,
      oppopp: 0.47264577259475216,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Ciaran Bradley [NZ]',
        result: 'L',
        table: 37,
      },
      '2': {
        name: 'Ancel Franklin [AU]',
        result: 'L',
        table: 216,
      },
      '3': {
        name: 'Nina Junaidi [SG]',
        result: 'L',
        table: 252,
      },
      '4': {
        name: 'Dan Reichelt [AU]',
        result: 'W',
        table: 259,
      },
      '5': {
        name: 'Winston Chui [AU]',
        result: 'L',
        table: 220,
      },
      '6': {
        name: 'Christopher Ganal [AU]',
        result: 'T',
        table: 224,
      },
      '7': {
        name: 'Steven Hector [AU]',
        result: 'L',
        table: 199,
      },
    },
  },
  {
    name: 'Tayla-Jane Lovett [AU]',
    placing: 483,
    record: {
      wins: 1,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.3673469387755102,
      oppopp: 0.4376700680272108,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Angela Lewis [AU]',
        result: 'L',
        table: 85,
      },
      '2': {
        name: 'Calum Thatcher [AU]',
        result: 'L',
        table: 196,
      },
      '3': {
        name: 'Jack Riley [AU]',
        result: 'L',
        table: 259,
      },
      '4': {
        name: 'Andrew Egan [AU]',
        result: 'W',
        table: 254,
      },
      '5': {
        name: 'Nathan Belcher [AU]',
        result: 'T',
        table: 217,
      },
      '6': {
        name: 'Timothy Uyeda [AU]',
        result: 'L',
        table: 202,
      },
      '7': {
        name: 'Khristian Embog [AU]',
        result: 'L',
        table: 205,
      },
    },
  },
  {
    name: 'Peter Ghionis [AU]',
    placing: 484,
    record: {
      wins: 1,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.3,
      opp: 0.36,
      oppopp: 0.47750000000000004,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Stella Gabler [AU]',
        result: 'L',
        table: 203,
      },
      '2': {
        name: 'Mark Smit [AU]',
        result: 'L',
        table: 172,
      },
      '3': {
        name: 'Franklyn Hudson [AU]',
        result: 'W',
        table: 236,
      },
      '4': {
        name: 'Carl Orbista [AU]',
        result: 'T',
        table: 168,
      },
      '5': {
        name: 'James Kostoulias [AU]',
        result: 'L',
        table: 165,
      },
    },
  },
  {
    name: 'CHENG-HSIN YANG [AU]',
    placing: 485,
    record: {
      wins: 1,
      losses: 2,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.6388888888888888,
      oppopp: 0.4907407407407407,
    },
    decklist: '',
    drop: 3,
    rounds: {
      '1': {
        name: 'Keito Arai [JP]',
        result: 'L',
        table: 142,
      },
      '2': {
        name: 'Jiahe Liang [AU]',
        result: 'W',
        table: 164,
      },
      '3': {
        name: 'Jessica Karim [AU]',
        result: 'L',
        table: 116,
      },
    },
  },
  {
    name: 'Vincent Yan [AU]',
    placing: 486,
    record: {
      wins: 1,
      losses: 1,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.625,
      oppopp: 0.6875,
    },
    decklist: '',
    drop: 2,
    rounds: {
      '1': {
        name: 'Nathan Ng [AU]',
        result: 'W',
        table: 80,
      },
      '2': {
        name: 'Christopher Mathers [AU]',
        result: 'L',
        table: 38,
      },
    },
  },
  {
    name: 'Kosta Spanoudakis [AU]',
    placing: 487,
    record: {
      wins: 1,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.53125,
      oppopp: 0.4921875,
    },
    decklist: '',
    drop: 4,
    rounds: {
      '1': {
        name: 'Corey Brown [AU]',
        result: 'L',
        table: 267,
      },
      '2': {
        name: 'Huy Nguyen [AU]',
        result: 'L',
        table: 190,
      },
      '3': {
        name: 'Ben Anderson [AU]',
        result: 'L',
        table: 235,
      },
      '4': {
        name: 'Shaun Kerr-Talbot [AU]',
        result: 'W',
        table: 256,
      },
    },
  },
  {
    name: 'Celine Pearse [AU]',
    placing: 488,
    record: {
      wins: 1,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.4699999999999999,
      oppopp: 0.44699999999999995,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Sam Hughes [AU]',
        result: 'L',
        table: 94,
      },
      '2': {
        name: 'Stephen Todorovic [AU]',
        result: 'L',
        table: 191,
      },
      '3': {
        name: 'Fernando Monsalve [CL]',
        result: 'L',
        table: 240,
      },
      '4': {
        name: 'Lily Ly [AU]',
        result: 'W',
        table: 250,
      },
      '5': {
        name: 'Jonathan Tjahjono [AU]',
        result: 'L',
        table: 218,
      },
    },
  },
  {
    name: 'James Higgins [AU]',
    placing: 489,
    record: {
      wins: 0,
      losses: 3,
      ties: 3,
    },
    resistances: {
      self: 0.25,
      opp: 0.46666666666666673,
      oppopp: 0.43509259259259264,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Andre Pollacchi [AU]',
        result: 'T',
        table: 172,
      },
      '2': {
        name: 'Alex Hatzidakis [AU]',
        result: 'T',
        table: 159,
      },
      '3': {
        name: 'Harrison Hodges [AU]',
        result: 'T',
        table: 168,
      },
      '4': {
        name: 'Nathan Woodcock [AU]',
        result: 'L',
        table: 195,
      },
      '5': {
        name: 'Eric Sanson [NZ]',
        result: 'L',
        table: 206,
      },
      '6': {
        name: 'Franklyn Hudson [AU]',
        result: 'L',
        table: 221,
      },
    },
  },
  {
    name: 'Kenneth Peake [AU]',
    placing: 490,
    record: {
      wins: 1,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.4444444444444445,
      oppopp: 0.46611111111111114,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'glenn hope [AU]',
        result: 'W',
        table: 246,
      },
      '2': {
        name: 'Nick Alvarez [US]',
        result: 'L',
        table: 81,
      },
      '3': {
        name: 'Jee Ong [AU]',
        result: 'L',
        table: 91,
      },
      '4': {
        name: 'xingyu huang [AT]',
        result: 'L',
        table: 198,
      },
      '5': {
        name: 'Fletcher Konynenburg [AU]',
        result: 'L',
        table: 215,
      },
      '6': {
        name: 'Cameron Peak [AU]',
        result: 'L',
        table: 219,
      },
    },
  },
  {
    name: 'Ethan Cooper [AU]',
    placing: 491,
    record: {
      wins: 0,
      losses: 1,
      ties: 3,
    },
    resistances: {
      self: 0.375,
      opp: 0.4375,
      oppopp: 0.5,
    },
    decklist: '',
    drop: 4,
    rounds: {
      '1': {
        name: 'Jer-Shyan Hwa [AU]',
        result: 'T',
        table: 91,
      },
      '2': {
        name: 'Harry West [AU]',
        result: 'L',
        table: 142,
      },
      '3': {
        name: 'Tuan Ho [AU]',
        result: 'T',
        table: 192,
      },
      '4': {
        name: 'Scott Leung [AU]',
        result: 'T',
        table: 213,
      },
    },
  },
  {
    name: 'Jacob Mccall [AU]',
    placing: 492,
    record: {
      wins: 1,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.4375,
      oppopp: 0.4453125,
    },
    decklist: '',
    drop: 4,
    rounds: {
      '1': {
        name: 'Aura Ye [AU]',
        result: 'L',
        table: 167,
      },
      '2': {
        name: 'Marcus Raj [AU]',
        result: 'L',
        table: 263,
      },
      '3': {
        name: 'Isabelle Lohrey [AU]',
        result: 'L',
        table: 257,
      },
      '4': {
        name: 'Ryan Brook [AU]',
        result: 'W',
        table: 258,
      },
    },
  },
  {
    name: 'Connor Lee Dow [AU]',
    placing: 493,
    record: {
      wins: 0,
      losses: 3,
      ties: 3,
    },
    resistances: {
      self: 0.25,
      opp: 0.4285714285714285,
      oppopp: 0.4413751214771623,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Callum Walker [AU]',
        result: 'L',
        table: 9,
      },
      '2': {
        name: 'Alicia Keizer [AU]',
        result: 'T',
        table: 258,
      },
      '3': {
        name: 'cody thorne [AU]',
        result: 'T',
        table: 207,
      },
      '4': {
        name: 'Xaria-Sofia Sachse [AU]',
        result: 'L',
        table: 218,
      },
      '5': {
        name: 'Alexander Cannavo [AU]',
        result: 'L',
        table: 237,
      },
      '6': {
        name: 'Jordyn Demeo [AU]',
        result: 'T',
        table: 233,
      },
      '7': {
        name: 'Christopher Chan [AU]',
        result: null,
        table: 209,
      },
    },
  },
  {
    name: 'Marco Giovannini [AU]',
    placing: 494,
    record: {
      wins: 1,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.42777777777777776,
      oppopp: 0.4697222222222222,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Will Ladner [AU]',
        result: 'L',
        table: 125,
      },
      '2': {
        name: 'Matt Annable [AU]',
        result: 'W',
        table: 233,
      },
      '3': {
        name: 'Matthew Anderson [AU]',
        result: 'L',
        table: 140,
      },
      '4': {
        name: 'Emma Baker [AU]',
        result: 'L',
        table: 179,
      },
      '5': {
        name: 'Katelin Altieri [AU]',
        result: 'L',
        table: 222,
      },
      '6': {
        name: 'Melinda Li [NZ]',
        result: 'L',
        table: 222,
      },
    },
  },
  {
    name: 'Harrison Hodges [AU]',
    placing: 495,
    record: {
      wins: 0,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.3,
      opp: 0.42000000000000004,
      oppopp: 0.44299999999999995,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Zhiyuan Liang [CN]',
        result: 'T',
        table: 229,
      },
      '2': {
        name: 'Christopher Turner [AU]',
        result: 'T',
        table: 146,
      },
      '3': {
        name: 'James Higgins [AU]',
        result: 'T',
        table: 168,
      },
      '4': {
        name: 'Mark Smit [AU]',
        result: 'L',
        table: 174,
      },
      '5': {
        name: 'Ryan Edwards [AU]',
        result: 'L',
        table: 213,
      },
    },
  },
  {
    name: 'Harry Driscoll [AU]',
    placing: 496,
    record: {
      wins: 1,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.4166666666666667,
      oppopp: 0.4527777777777778,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Satoya Takagi [JP]',
        result: 'L',
        table: 92,
      },
      '2': {
        name: 'Destyn Weir [AU]',
        result: 'L',
        table: 224,
      },
      '3': {
        name: 'Cameron Peak [AU]',
        result: 'W',
        table: 248,
      },
      '4': {
        name: 'Alfred Yang [AU]',
        result: 'L',
        table: 177,
      },
      '5': {
        name: 'Antonio Sanabria [AU]',
        result: 'L',
        table: 211,
      },
      '6': {
        name: 'Ellie Crouch [AU]',
        result: 'L',
        table: 227,
      },
    },
  },
  {
    name: 'Samuel Williams [AU]',
    placing: 497,
    record: {
      wins: 1,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.4138888888888889,
      oppopp: 0.4132407407407408,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Jason Slifka [AU]',
        result: 'L',
        table: 176,
      },
      '2': {
        name: 'Peter Lo [AU]',
        result: 'L',
        table: 202,
      },
      '3': {
        name: 'Kirryn Hatch [AU]',
        result: 'L',
        table: 253,
      },
      '4': {
        name: 'Tim Haffmanns [DE]',
        result: 'L',
        table: 255,
      },
      '5': {
        name: 'Shaun Kerr-Talbot [AU]',
        result: 'W',
        table: 250,
      },
      '6': {
        name: 'Alexander Roderick [AU]',
        result: 'L',
        table: 220,
      },
    },
  },
  {
    name: 'Carmela Nucifora [AU]',
    placing: 498,
    record: {
      wins: 0,
      losses: 6,
      ties: 3,
    },
    resistances: {
      self: 0.25,
      opp: 0.4027777777777778,
      oppopp: 0.42434181748831223,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Bing Jun Chan [SG]',
        result: 'L',
        table: 6,
      },
      '2': {
        name: 'Andi Cheung [AU]',
        result: 'T',
        table: 195,
      },
      '3': {
        name: 'Hoong Yoong Ngiam [AU]',
        result: 'L',
        table: 197,
      },
      '4': {
        name: 'Matthew Caton [AU]',
        result: 'L',
        table: 232,
      },
      '5': {
        name: 'Chris Hughes [NZ]',
        result: 'T',
        table: 240,
      },
      '6': {
        name: 'Alex Hatzidakis [AU]',
        result: 'L',
        table: 232,
      },
      '7': {
        name: 'Shaun Camilleri [AU]',
        result: 'T',
        table: 212,
      },
      '8': {
        name: 'Quentin Pepe [AU]',
        result: 'L',
        table: 197,
      },
      '9': {
        name: 'Aditi Kutty [AU]',
        result: 'L',
        table: 179,
      },
    },
  },
  {
    name: 'Darren Caboche [AU]',
    placing: 499,
    record: {
      wins: 1,
      losses: 6,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.3979591836734694,
      oppopp: 0.41754130223517977,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Ben Sinclair [AU]',
        result: 'L',
        table: 151,
      },
      '2': {
        name: 'Nam Ho [AU]',
        result: 'L',
        table: 166,
      },
      '3': {
        name: 'Jay Tyrrell [AU]',
        result: 'L',
        table: 231,
      },
      '4': {
        name: 'Hugo Pearce [AU]',
        result: 'L',
        table: 247,
      },
      '5': {
        name: 'Cameron Peak [AU]',
        result: 'L',
        table: 251,
      },
      '6': {
        name: 'Shaun Kerr-Talbot [AU]',
        result: 'W',
        table: 238,
      },
      '7': {
        name: 'Stanley Chaplin [AU]',
        result: 'L',
        table: 211,
      },
    },
  },
  {
    name: 'Christopher Chan [AU]',
    placing: 500,
    record: {
      wins: 1,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.3903061224489796,
      oppopp: 0.43251336248785227,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Sable Wang-Wills [AU]',
        result: 'L',
        table: 225,
      },
      '2': {
        name: 'Montana Drew [AU]',
        result: 'L',
        table: 221,
      },
      '3': {
        name: 'xingyu huang [AT]',
        result: 'L',
        table: 232,
      },
      '4': {
        name: 'Franklyn Hudson [AU]',
        result: 'W',
        table: 251,
      },
      '5': {
        name: 'Yuhao Xia [AU]',
        result: 'L',
        table: 223,
      },
      '6': {
        name: 'Lawrence Lam [AU]',
        result: 'L',
        table: 229,
      },
      '7': {
        name: 'Connor Lee Dow [AU]',
        result: null,
        table: 209,
      },
    },
  },
  {
    name: 'glenn hope [AU]',
    placing: 501,
    record: {
      wins: 1,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.38,
      oppopp: 0.47700000000000004,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Kenneth Peake [AU]',
        result: 'L',
        table: 246,
      },
      '2': {
        name: 'Sameer Sangwan [AU]',
        result: 'L',
        table: 228,
      },
      '3': {
        name: 'Yao Ly [AU]',
        result: 'L',
        table: 230,
      },
      '4': {
        name: 'Robin Law [AU]',
        result: 'W',
        table: 246,
      },
      '5': {
        name: 'william wang [AU]',
        result: 'L',
        table: 221,
      },
    },
  },
  {
    name: 'Anh Vuong Quoc Vo [AU]',
    placing: 502,
    record: {
      wins: 1,
      losses: 1,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.375,
      oppopp: 0.75,
    },
    decklist: '',
    drop: 2,
    rounds: {
      '1': {
        name: 'Sam Clayfield [AU]',
        result: 'L',
        table: 258,
      },
      '2': {
        name: 'Brandon Lee [AU]',
        result: 'W',
        table: 165,
      },
    },
  },
  {
    name: 'Hudson Moore [AU]',
    placing: 503,
    record: {
      wins: 1,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.375,
      oppopp: 0.4245370370370371,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Jack Eeles [AU]',
        result: 'L',
        table: 168,
      },
      '2': {
        name: 'Nicholas Choong [NZ]',
        result: 'L',
        table: 192,
      },
      '3': {
        name: 'Yuhao Xia [AU]',
        result: 'W',
        table: 251,
      },
      '4': {
        name: 'Michael Jiang [AU]',
        result: 'L',
        table: 166,
      },
      '5': {
        name: 'Marcus Dwyer [AU]',
        result: 'L',
        table: 219,
      },
      '6': {
        name: 'Michael Duong [AU]',
        result: 'L',
        table: 223,
      },
    },
  },
  {
    name: 'Christopher Turner [AU]',
    placing: 504,
    record: {
      wins: 0,
      losses: 3,
      ties: 3,
    },
    resistances: {
      self: 0.25,
      opp: 0.3277777777777778,
      oppopp: 0.4172222222222222,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Peter Colosimo [AU]',
        result: 'T',
        table: 183,
      },
      '2': {
        name: 'Harrison Hodges [AU]',
        result: 'T',
        table: 146,
      },
      '3': {
        name: 'Zachary Bishop [AU]',
        result: 'L',
        table: 169,
      },
      '4': {
        name: 'Josephine Nucifora [AU]',
        result: 'L',
        table: 217,
      },
      '5': {
        name: 'Natasha Kelly [AU]',
        result: 'T',
        table: 232,
      },
      '6': {
        name: 'Joshua Grob [AU]',
        result: 'L',
        table: 225,
      },
    },
  },
  {
    name: 'Shaun Camilleri [AU]',
    placing: 505,
    record: {
      wins: 0,
      losses: 6,
      ties: 3,
    },
    resistances: {
      self: 0.25,
      opp: 0.32021604938271603,
      oppopp: 0.43967794679600236,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Tyler Bishop [AU]',
        result: 'L',
        table: 22,
      },
      '2': {
        name: 'Benjamin Woodward [AU]',
        result: 'T',
        table: 176,
      },
      '3': {
        name: 'Paige Chamberlain [AU]',
        result: 'L',
        table: 215,
      },
      '4': {
        name: 'James Breene [AU]',
        result: 'L',
        table: 226,
      },
      '5': {
        name: 'Lance Griggs [AU]',
        result: 'L',
        table: 246,
      },
      '6': {
        name: 'Lily Ly [AU]',
        result: 'T',
        table: 237,
      },
      '7': {
        name: 'Carmela Nucifora [AU]',
        result: 'T',
        table: 212,
      },
      '8': {
        name: 'Jordyn Demeo [AU]',
        result: 'L',
        table: 196,
      },
      '9': {
        name: 'Kylie Flynn [AU]',
        result: 'L',
        table: 178,
      },
    },
  },
  {
    name: 'Dylan van der Riet [AU]',
    placing: 506,
    record: {
      wins: 0,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.5555555555555555,
      oppopp: 0.47222222222222215,
    },
    decklist: '',
    drop: 3,
    rounds: {
      '1': {
        name: 'Deacan Page [AU]',
        result: 'L',
        table: 242,
      },
      '2': {
        name: 'thomas lackington [AU]',
        result: 'T',
        table: 208,
      },
      '3': {
        name: 'Kerwin Lee [AU]',
        result: 'L',
        table: 214,
      },
    },
  },
  {
    name: 'Stuart McKinnis [AU]',
    placing: 507,
    record: {
      wins: 0,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.53125,
      oppopp: 0.4453125,
    },
    decklist: '',
    drop: 4,
    rounds: {
      '1': {
        name: 'Roman Addamo [AU]',
        result: 'L',
        table: 131,
      },
      '2': {
        name: 'Kerwin Lee [AU]',
        result: 'T',
        table: 167,
      },
      '3': {
        name: 'thomas lackington [AU]',
        result: 'L',
        table: 219,
      },
      '4': {
        name: 'TE-AWHI TE ANGINA [AU]',
        result: 'L',
        table: 227,
      },
    },
  },
  {
    name: 'Sandra Flood [NZ]',
    placing: 508,
    record: {
      wins: 0,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.53125,
      oppopp: 0.421875,
    },
    decklist: '',
    drop: 4,
    rounds: {
      '1': {
        name: 'Kevin Min [AU]',
        result: 'L',
        table: 11,
      },
      '2': {
        name: 'Hoong Yoong Ngiam [AU]',
        result: 'T',
        table: 214,
      },
      '3': {
        name: 'Henry Brereton [AU]',
        result: 'L',
        table: 196,
      },
      '4': {
        name: 'Henry Bradnam [AU]',
        result: 'L',
        table: 229,
      },
    },
  },
  {
    name: 'Sam Lao [AU]',
    placing: 509,
    record: {
      wins: 0,
      losses: 1,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.5,
      oppopp: 0.5,
    },
    decklist: '',
    drop: 2,
    rounds: {
      '1': {
        name: 'Jake Dunstan [AU]',
        result: 'L',
        table: 155,
      },
      '2': {
        name: 'Alex Wu [AU]',
        result: 'T',
        table: 248,
      },
    },
  },
  {
    name: 'Millie Hay [AU]',
    placing: 510,
    record: {
      wins: 0,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.4375,
      oppopp: 0.4661458333333333,
    },
    decklist: '',
    drop: 4,
    rounds: {
      '1': {
        name: 'Samuel Shepherd [NZ]',
        result: 'L',
        table: 68,
      },
      '2': {
        name: 'Toby Frost [AU]',
        result: 'T',
        table: 179,
      },
      '3': {
        name: 'Yongxiang Liu [AU]',
        result: 'L',
        table: 217,
      },
      '4': {
        name: 'Jiahe Liang [AU]',
        result: 'L',
        table: 243,
      },
    },
  },
  {
    name: 'Taylor Thomas [AU]',
    placing: 511,
    record: {
      wins: 0,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.4375,
      oppopp: 0.421875,
    },
    decklist: '',
    drop: 4,
    rounds: {
      '1': {
        name: 'Jordan Stamatopoulos [AU]',
        result: 'L',
        table: 87,
      },
      '2': {
        name: 'Joshua Martin [AU]',
        result: 'T',
        table: 237,
      },
      '3': {
        name: 'Andi Cheung [AU]',
        result: 'L',
        table: 220,
      },
      '4': {
        name: 'Brandon Wilson [AU]',
        result: 'L',
        table: 224,
      },
    },
  },
  {
    name: 'Toby Frost [AU]',
    placing: 512,
    record: {
      wins: 0,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.40277777777777773,
      oppopp: 0.444212962962963,
    },
    decklist: '',
    drop: 6,
    rounds: {
      '1': {
        name: 'Stuart Flynn [AU]',
        result: 'L',
        table: 102,
      },
      '2': {
        name: 'Millie Hay [AU]',
        result: 'T',
        table: 179,
      },
      '3': {
        name: 'Timothy Uyeda [AU]',
        result: 'L',
        table: 193,
      },
      '4': {
        name: 'James Grkinic [AU]',
        result: 'L',
        table: 225,
      },
      '5': {
        name: 'Jim Gow [AU]',
        result: 'L',
        table: 243,
      },
      '6': {
        name: 'Ho Kit Chan [HK]',
        result: 'L',
        table: 234,
      },
    },
  },
  {
    name: 'SzuYun Hsiao [AU]',
    placing: 513,
    record: {
      wins: 0,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.3611111111111111,
      oppopp: 0.47222222222222227,
    },
    decklist: '',
    drop: 3,
    rounds: {
      '1': {
        name: 'Ryan Mcculloch [AU]',
        result: 'L',
        table: 197,
      },
      '2': {
        name: 'Jack underwood [AU]',
        result: 'L',
        table: 186,
      },
      '3': {
        name: 'Quentin Pepe [AU]',
        result: 'T',
        table: 254,
      },
    },
  },
  {
    name: 'Sarah McEvoy [AU]',
    placing: 514,
    record: {
      wins: 0,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.35,
      oppopp: 0.422,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Georgia Trimble [AU]',
        result: 'L',
        table: 89,
      },
      '2': {
        name: 'Stanley Chaplin [AU]',
        result: 'T',
        table: 198,
      },
      '3': {
        name: 'Daal Jaffers [AU]',
        result: 'L',
        table: 213,
      },
      '4': {
        name: 'Stefan Djordjevic [AU]',
        result: 'L',
        table: 235,
      },
      '5': {
        name: 'Steven Hector [AU]',
        result: 'L',
        table: 244,
      },
    },
  },
  {
    name: 'Nathan Ng [AU]',
    placing: 515,
    record: {
      wins: 0,
      losses: 1,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 1,
      oppopp: 0.25,
    },
    decklist: '',
    drop: 1,
    rounds: {
      '1': {
        name: 'Vincent Yan [AU]',
        result: 'L',
        table: 80,
      },
    },
  },
  {
    name: 'Shaun VanRavenstein [AU]',
    placing: 516,
    record: {
      wins: 0,
      losses: 1,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 1,
      oppopp: 0.25,
    },
    decklist: '',
    drop: 1,
    rounds: {
      '1': {
        name: 'Kurt Spiteri [AU]',
        result: 'L',
        table: 116,
      },
    },
  },
  {
    name: 'Chih hao Lin [AU]',
    placing: 517,
    record: {
      wins: 0,
      losses: 1,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 1,
      oppopp: 0.25,
    },
    decklist: '',
    drop: 1,
    rounds: {
      '1': {
        name: 'James Boynton [AU]',
        result: 'L',
        table: 119,
      },
    },
  },
  {
    name: 'Shanan Kan [AU]',
    placing: 518,
    record: {
      wins: 0,
      losses: 1,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 1,
      oppopp: 0.25,
    },
    decklist: '',
    drop: 1,
    rounds: {
      '1': {
        name: 'Thomas Lamprey [AU]',
        result: 'L',
        table: 129,
      },
    },
  },
  {
    name: 'Aaron Matcham [AU]',
    placing: 519,
    record: {
      wins: 0,
      losses: 1,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 1,
      oppopp: 0.25,
    },
    decklist: '',
    drop: 1,
    rounds: {
      '1': {
        name: 'ユキ OKA [JP]',
        result: 'L',
        table: 182,
      },
    },
  },
  {
    name: 'Firdaus Purba Bin Sairidi [AU]',
    placing: 520,
    record: {
      wins: 0,
      losses: 1,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 1,
      oppopp: 0.25,
    },
    decklist: '',
    drop: 1,
    rounds: {
      '1': {
        name: 'Alfie Delgado [MX]',
        result: 'L',
        table: 243,
      },
    },
  },
  {
    name: 'George Kourouklis [AU]',
    placing: 521,
    record: {
      wins: 0,
      losses: 2,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.625,
      oppopp: 0.5625,
    },
    decklist: '',
    drop: 2,
    rounds: {
      '1': {
        name: 'charles limbrick [AU]',
        result: 'L',
        table: 101,
      },
      '2': {
        name: 'Vie Seminiano [AU]',
        result: 'L',
        table: 227,
      },
    },
  },
  {
    name: 'Dan Reichelt [AU]',
    placing: 522,
    record: {
      wins: 0,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.5625,
      oppopp: 0.46875,
    },
    decklist: '',
    drop: 4,
    rounds: {
      '1': {
        name: 'Andy Truong [AU]',
        result: 'L',
        table: 121,
      },
      '2': {
        name: 'Beau McElroy [AU]',
        result: 'L',
        table: 244,
      },
      '3': {
        name: 'Matt Annable [AU]',
        result: 'L',
        table: 256,
      },
      '4': {
        name: 'Marcus Yap [AU]',
        result: 'L',
        table: 259,
      },
    },
  },
  {
    name: 'declan bradley [AU]',
    placing: 523,
    record: {
      wins: 0,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.5625,
      oppopp: 0.421875,
    },
    decklist: '',
    drop: 4,
    rounds: {
      '1': {
        name: 'James Faulkner [AU]',
        result: 'L',
        table: 163,
      },
      '2': {
        name: 'DI ZHU [CN]',
        result: 'L',
        table: 177,
      },
      '3': {
        name: 'Lily Huynh [AU]',
        result: 'L',
        table: 223,
      },
      '4': {
        name: 'Alexander Roderick [AU]',
        result: 'L',
        table: 244,
      },
    },
  },
  {
    name: 'Ben McPeake [AU]',
    placing: 524,
    record: {
      wins: 0,
      losses: 2,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.5,
      oppopp: 0.625,
    },
    decklist: '',
    drop: 2,
    rounds: {
      '1': {
        name: 'Robbie Caldwell [AU]',
        result: 'L',
        table: 133,
      },
      '2': {
        name: 'Ryan Burt [AU]',
        result: 'L',
        table: 173,
      },
    },
  },
  {
    name: 'Kavanagh ODowd [AU]',
    placing: 525,
    record: {
      wins: 0,
      losses: 2,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.4375,
      oppopp: 0.5421006944444444,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Hadyn Joyce [AU]',
        result: 'L',
        table: 247,
      },
      '2': {
        name: 'Justin Truong [AU]',
        result: 'L',
        table: 187,
      },
    },
  },
  {
    name: 'Andrew Egan [AU]',
    placing: 526,
    record: {
      wins: 0,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.4375,
      oppopp: 0.4296875,
    },
    decklist: '',
    drop: 4,
    rounds: {
      '1': {
        name: 'Gareth Murphy [AU]',
        result: 'L',
        table: 118,
      },
      '2': {
        name: 'James Volis [AU]',
        result: 'L',
        table: 249,
      },
      '3': {
        name: 'william wang [AU]',
        result: 'L',
        table: 247,
      },
      '4': {
        name: 'Tayla-Jane Lovett [AU]',
        result: 'L',
        table: 254,
      },
    },
  },
  {
    name: 'David Valderrama [AU]',
    placing: 527,
    record: {
      wins: 0,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.40625,
      oppopp: 0.4453125,
    },
    decklist: '',
    drop: 4,
    rounds: {
      '1': {
        name: 'James Williams [AU]',
        result: 'L',
        table: 205,
      },
      '2': {
        name: 'Simon Higgins [AU]',
        result: 'L',
        table: 223,
      },
      '3': {
        name: 'Shaun Coupe [AU]',
        result: 'L',
        table: 225,
      },
      '4': {
        name: 'Yuhao Xia [AU]',
        result: 'L',
        table: 252,
      },
    },
  },
  {
    name: 'Hoi Hang Ho [AU]',
    placing: 528,
    record: {
      wins: 0,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.375,
      oppopp: 0.4375,
    },
    decklist: '',
    drop: 4,
    rounds: {
      '1': {
        name: 'Dylan Graefe [AU]',
        result: 'L',
        table: 253,
      },
      '2': {
        name: 'Jesse Brewer [AU]',
        result: 'L',
        table: 254,
      },
      '3': {
        name: 'Fletcher Konynenburg [AU]',
        result: 'L',
        table: 261,
      },
      '4': {
        name: 'Joshua Grob [AU]',
        result: 'L',
        table: 257,
      },
    },
  },
  {
    name: 'Ryan Brook [AU]',
    placing: 529,
    record: {
      wins: 0,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.37,
      oppopp: 0.5115000000000001,
    },
    decklist: '',
    drop: 5,
    rounds: {
      '1': {
        name: 'Mason Mitchell [AU]',
        result: 'L',
        table: 140,
      },
      '2': {
        name: 'Shaun Sewell [AU]',
        result: 'L',
        table: 255,
      },
      '3': {
        name: 'Morris Arnold [AU]',
        result: 'L',
        table: 250,
      },
      '4': {
        name: 'Jacob Mccall [AU]',
        result: 'L',
        table: 258,
      },
      '5': {
        name: 'Morgan Squire [AU]',
        result: 'L',
        table: 247,
      },
    },
  },
  {
    name: 'Shaun Kerr-Talbot [AU]',
    placing: 530,
    record: {
      wins: 0,
      losses: 7,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.36734693877551017,
      oppopp: 0.46888767411726595,
    },
    decklist: '',
    drop: 7,
    rounds: {
      '1': {
        name: 'Haru Nishikawa [JP]',
        result: 'L',
        table: 236,
      },
      '2': {
        name: 'Emma Baker [AU]',
        result: 'L',
        table: 210,
      },
      '3': {
        name: 'Thomas Quilliam [AU]',
        result: 'L',
        table: 237,
      },
      '4': {
        name: 'Kosta Spanoudakis [AU]',
        result: 'L',
        table: 256,
      },
      '5': {
        name: 'Samuel Williams [AU]',
        result: 'L',
        table: 250,
      },
      '6': {
        name: 'Darren Caboche [AU]',
        result: 'L',
        table: 238,
      },
      '7': {
        name: 'Robin Law [AU]',
        result: 'L',
        table: 215,
      },
    },
  },
  {
    name: 'Joshua Glen [AU]',
    placing: 9999,
    record: {
      wins: 1,
      losses: 2,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.5555555555555555,
      oppopp: 0.46296296296296297,
    },
    decklist: '',
    drop: 3,
    rounds: {
      '1': {
        name: 'Corey Munro [AU]',
        result: 'L',
        table: 166,
      },
      '2': {
        name: 'Kirryn Hatch [AU]',
        result: 'W',
        table: 259,
      },
      '3': {
        name: 'Calvin Prosser [AU]',
        result: 'L',
        table: 114,
      },
    },
  },
];

export const seniorsStandings: Standing[] = [
  {
    name: 'Polaris A. [US]',
    placing: 1,
    record: {
      wins: 7,
      losses: 1,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.25,
      oppopp: 0.25,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Ralts',
          number: '60',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Kirlia',
          number: '68',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Kirlia',
          number: '60',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Gardevoir ex',
          number: '86',
          set: 'SVI',
        },
        {
          count: 1,
          name: 'Scream Tail',
          number: '86',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Mew',
          number: '25',
          set: 'CEL',
        },
        {
          count: 1,
          name: 'Zacian V',
          number: '16',
          set: 'CEL',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Gardevoir',
          number: 'TG05',
          set: 'ASR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Worker',
          number: '167',
          set: 'SIT',
        },
        {
          count: 1,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 3,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Fog Crystal',
          number: '140',
          set: 'CRE',
        },
        {
          count: 1,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: "Professor Turo's Scenario",
          number: '171',
          set: 'PAR',
        },
      ],
      energy: [
        {
          count: 2,
          name: 'Reversal Energy - Special',
          number: '192',
          set: 'PAL',
        },
        {
          count: 10,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Samuel C. [AU]',
        result: 'W',
        table: 6,
      },
      '2': {
        name: 'Patrick W. [AU]',
        result: 'W',
        table: 1,
      },
      '3': {
        name: 'Thomas H. [AU]',
        result: 'L',
        table: 2,
      },
      '4': {
        name: 'loki m. [AU]',
        result: 'W',
        table: 8,
      },
      '5': {
        name: 'Jake N. [AU]',
        result: 'T',
        table: 4,
      },
      '6': {
        name: 'Boyu W. [AU]',
        result: 'W',
        table: 6,
      },
      '7': {
        name: 'Hikaru H. [AU]',
        result: 'W',
        table: 3,
      },
      '8': {
        name: 'Thomas H. [AU]',
        result: 'W',
        table: 2,
      },
      '9': {
        name: 'Oliver H. [AU]',
        result: 'W',
        table: 1,
      },
    },
  },
  {
    name: 'Oliver H. [AU]',
    placing: 2,
    record: {
      wins: 6,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.25,
      oppopp: 0.25,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Origin Forme Palkia V',
          number: '39',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Origin Forme Palkia VSTAR',
          number: '40',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Ice Rider Calyrex VMAX',
          number: '46',
          set: 'CRE',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Suicune V',
          number: '173',
          set: 'EVS',
        },
        {
          count: 1,
          name: 'Chien-Pao ex',
          number: '236',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Lumineon V',
          number: '40',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Mew',
          number: '11',
          set: 'CEL',
        },
        {
          count: 1,
          name: 'Mew ex',
          number: '193',
          set: 'MEW',
        },
        {
          count: 1,
          name: 'Spiritomb',
          number: '89',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Ice Rider Calyrex V',
          number: '45',
          set: 'CRE',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Irida',
          number: '147',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Melony',
          number: 'TG26',
          set: 'ASR',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Cross Switcher',
          number: '230',
          set: 'FST',
        },
        {
          count: 3,
          name: 'Earthen Vessel',
          number: '163',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Hisuian Heavy Ball',
          number: '146',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Canceling Cologne',
          number: '136',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Arven',
          number: '186',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Town Store',
          number: '196',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Box of Disaster',
          number: '154',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Choice Belt',
          number: '211',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
      ],
      energy: [
        {
          count: 8,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Digby S. [AU]',
        result: 'W',
        table: 19,
      },
      '2': {
        name: 'Noah L. [AU]',
        result: 'W',
        table: 3,
      },
      '3': {
        name: 'Tyson A. [AU]',
        result: 'L',
        table: 3,
      },
      '4': {
        name: 'Ryan F. [NZ]',
        result: 'W',
        table: 9,
      },
      '5': {
        name: 'James S. [AU]',
        result: 'W',
        table: 5,
      },
      '6': {
        name: 'Thomas H. [AU]',
        result: 'T',
        table: 1,
      },
      '7': {
        name: 'Yuichi M. [AU]',
        result: 'W',
        table: 2,
      },
      '8': {
        name: 'Fergus B. [AU]',
        result: 'W',
        table: 1,
      },
      '9': {
        name: 'Polaris A. [US]',
        result: 'L',
        table: 1,
      },
    },
  },
  {
    name: 'Thomas H. [AU]',
    placing: 3,
    record: {
      wins: 5,
      losses: 1,
      ties: 2,
    },
    resistances: {
      self: 0.25,
      opp: 0.25,
      oppopp: 0.25,
    },
    decklist: {
      pokemon: [
        {
          count: 1,
          name: 'Giratina VSTAR',
          number: 'GG69',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Giratina VSTAR',
          number: '212',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Giratina V',
          number: '186',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Giratina V',
          number: '185',
          set: 'LOR',
        },
        {
          count: 4,
          name: 'Comfey',
          number: 'GG14',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Spiritomb',
          number: '89',
          set: 'PAL',
        },
      ],
      trainer: [
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 1,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 3,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 3,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 4,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
      ],
      energy: [
        {
          count: 2,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 4,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
        {
          count: 4,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'David M. [AU]',
        result: 'W',
        table: 10,
      },
      '2': {
        name: 'Hamish G. [AU]',
        result: 'W',
        table: 9,
      },
      '3': {
        name: 'Polaris A. [US]',
        result: 'W',
        table: 2,
      },
      '4': {
        name: 'Yuichi M. [AU]',
        result: 'W',
        table: 2,
      },
      '5': {
        name: 'Tyson A. [AU]',
        result: 'T',
        table: 1,
      },
      '6': {
        name: 'Oliver H. [AU]',
        result: 'T',
        table: 1,
      },
      '7': {
        name: 'Jake N. [AU]',
        result: 'W',
        table: 4,
      },
      '8': {
        name: 'Polaris A. [US]',
        result: 'L',
        table: 2,
      },
    },
  },
  {
    name: 'Fergus B. [AU]',
    placing: 4,
    record: {
      wins: 5,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.25,
      oppopp: 0.25,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Ralts',
          number: '60',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Ralts',
          number: '67',
          set: 'SIT',
        },
        {
          count: 3,
          name: 'Kirlia',
          number: 'SWSH271',
          set: 'PR',
        },
        {
          count: 1,
          name: 'Kirlia',
          number: '60',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Gardevoir',
          number: 'TG05',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Gardevoir ex',
          number: '245',
          set: 'SVI',
        },
        {
          count: 1,
          name: 'Cresselia',
          number: '74',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Scream Tail',
          number: '86',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Zacian V',
          number: 'GG48',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Mew',
          number: 'GG10',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 3,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Fog Crystal',
          number: '140',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 4,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Avery',
          number: '130',
          set: 'CRE',
        },
        {
          count: 1,
          name: 'Worker',
          number: '167',
          set: 'SIT',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
      ],
      energy: [
        {
          count: 10,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Reversal Energy - Special',
          number: '192',
          set: 'PAL',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Hunter-James Edward K. [AU]',
        result: 'W',
        table: 2,
      },
      '2': {
        name: 'James S. [AU]',
        result: 'L',
        table: 7,
      },
      '3': {
        name: 'Manik S. [AU]',
        result: 'W',
        table: 8,
      },
      '4': {
        name: 'Noah L. [AU]',
        result: 'W',
        table: 7,
      },
      '5': {
        name: 'Ricky Y. [AU]',
        result: 'W',
        table: 6,
      },
      '6': {
        name: 'Yuichi M. [AU]',
        result: 'T',
        table: 3,
      },
      '7': {
        name: 'Tyson A. [AU]',
        result: 'W',
        table: 1,
      },
      '8': {
        name: 'Oliver H. [AU]',
        result: 'L',
        table: 1,
      },
    },
  },
  {
    name: 'Tyson A. [AU]',
    placing: 5,
    record: {
      wins: 4,
      losses: 1,
      ties: 2,
    },
    resistances: {
      self: 0.25,
      opp: 0.25,
      oppopp: 0.25,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Comfey',
          number: 'GG14',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Giratina VSTAR',
          number: '131',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina V',
          number: '130',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Roaring Moon ex',
          number: '262',
          set: 'PAR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 3,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
      ],
      energy: [
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Darkness Energy - Basic',
          number: '158',
          set: 'CRZ',
        },
        {
          count: 4,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'BYE',
        result: 'W',
        table: 0,
      },
      '2': {
        name: 'Kajaani J. [AU]',
        result: 'W',
        table: 8,
      },
      '3': {
        name: 'Oliver H. [AU]',
        result: 'W',
        table: 3,
      },
      '4': {
        name: 'James S. [AU]',
        result: 'W',
        table: 1,
      },
      '5': {
        name: 'Thomas H. [AU]',
        result: 'T',
        table: 1,
      },
      '6': {
        name: 'Hikaru H. [AU]',
        result: 'T',
        table: 2,
      },
      '7': {
        name: 'Fergus B. [AU]',
        result: 'L',
        table: 1,
      },
    },
  },
  {
    name: 'Hikaru H. [AU]',
    placing: 6,
    record: {
      wins: 4,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.25,
      oppopp: 0.25,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Inteleon V',
          number: '78',
          set: 'FST',
        },
        {
          count: 3,
          name: 'Inteleon VMAX',
          number: '79',
          set: 'FST',
        },
        {
          count: 1,
          name: 'Rapid Strike Urshifu V',
          number: 'TG20',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Rapid Strike Urshifu V',
          number: '87',
          set: 'BST',
        },
        {
          count: 2,
          name: 'Rapid Strike Urshifu VMAX',
          number: 'TG30',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Remoraid',
          number: '36',
          set: 'BST',
        },
        {
          count: 2,
          name: 'Octillery',
          number: '178',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Radiant Alakazam',
          number: '59',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Medicham V',
          number: '83',
          set: 'EVS',
        },
        {
          count: 1,
          name: 'Lumineon V',
          number: '156',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Drapion V',
          number: '182',
          set: 'LOR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 3,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Hisuian Heavy Ball',
          number: '146',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Earthen Vessel',
          number: '163',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Energy Retrieval',
          number: '127',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Technical Machine: Devolution',
          number: '177',
          set: 'PAR',
        },
        {
          count: 3,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 3,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 1,
          name: "Korrina's Focus",
          number: '128',
          set: 'BST',
        },
        {
          count: 2,
          name: 'Klara',
          number: '145',
          set: 'CRE',
        },
        {
          count: 1,
          name: "Professor Turo's Scenario",
          number: '171',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Melony',
          number: 'TG26',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Tower of Waters',
          number: '138',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Town Store',
          number: '196',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
      ],
      energy: [
        {
          count: 6,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
        {
          count: 4,
          name: 'Rapid Strike Energy - Special',
          number: '140',
          set: 'BST',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Manik S. [AU]',
        result: 'W',
        table: 18,
      },
      '2': {
        name: 'Jake N. [AU]',
        result: 'W',
        table: 5,
      },
      '3': {
        name: 'Yuichi M. [AU]',
        result: 'L',
        table: 1,
      },
      '4': {
        name: 'Samuel C. [AU]',
        result: 'W',
        table: 5,
      },
      '5': {
        name: 'Luke B. [AU]',
        result: 'W',
        table: 2,
      },
      '6': {
        name: 'Tyson A. [AU]',
        result: 'T',
        table: 2,
      },
      '7': {
        name: 'Polaris A. [US]',
        result: 'L',
        table: 3,
      },
    },
  },
  {
    name: 'Yuichi M. [AU]',
    placing: 7,
    record: {
      wins: 4,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.25,
      oppopp: 0.25,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Ralts',
          number: '60',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Kirlia',
          number: '60',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Kirlia',
          number: '68',
          set: 'SIT',
        },
        {
          count: 2,
          name: 'Gardevoir',
          number: '61',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Gardevoir ex',
          number: '86',
          set: 'SVI',
        },
        {
          count: 1,
          name: 'Scream Tail',
          number: '86',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Mew',
          number: '11',
          set: 'CEL',
        },
        {
          count: 1,
          name: 'Zacian V',
          number: '16',
          set: 'CEL',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 1,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Worker',
          number: '167',
          set: 'SIT',
        },
        {
          count: 2,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 3,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Fog Crystal',
          number: '140',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
      ],
      energy: [
        {
          count: 10,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 2,
          name: 'Reversal Energy - Special',
          number: '192',
          set: 'PAL',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Riley C. [AU]',
        result: 'W',
        table: 11,
      },
      '2': {
        name: 'Elliott M. [AU]',
        result: 'W',
        table: 4,
      },
      '3': {
        name: 'Hikaru H. [AU]',
        result: 'W',
        table: 1,
      },
      '4': {
        name: 'Thomas H. [AU]',
        result: 'L',
        table: 2,
      },
      '5': {
        name: 'Kajaani J. [AU]',
        result: 'W',
        table: 3,
      },
      '6': {
        name: 'Fergus B. [AU]',
        result: 'T',
        table: 3,
      },
      '7': {
        name: 'Oliver H. [AU]',
        result: 'L',
        table: 2,
      },
    },
  },
  {
    name: 'Jake N. [AU]',
    placing: 8,
    record: {
      wins: 4,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.25,
      oppopp: 0.25,
    },
    decklist: {
      pokemon: [
        {
          count: 2,
          name: 'Charmander',
          number: '4',
          set: 'MEW',
        },
        {
          count: 2,
          name: 'Charmander',
          number: '26',
          set: 'OBF',
        },
        {
          count: 2,
          name: 'Charizard ex',
          number: '125',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Charizard ex',
          number: '215',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Radiant Charizard',
          number: '11',
          set: 'PGO',
        },
        {
          count: 1,
          name: 'Charmeleon',
          number: '27',
          set: 'OBF',
        },
        {
          count: 2,
          name: 'Pidgey',
          number: '16',
          set: 'MEW',
        },
        {
          count: 1,
          name: 'Pidgeot ex',
          number: '217',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Pidgeot ex',
          number: '164',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Rotom V',
          number: '45',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Lumineon V',
          number: 'SWSH250',
          set: 'PR',
        },
        {
          count: 1,
          name: 'Mew',
          number: '11',
          set: 'CEL',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Arven',
          number: '186',
          set: 'OBF',
        },
        {
          count: 3,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 1,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 3,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Choice Belt',
          number: '211',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Technical Machine: Devolution',
          number: '177',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
      ],
      energy: [
        {
          count: 6,
          name: 'Fire Energy - Basic',
          number: '153',
          set: 'CRZ',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Evie T. [AU]',
        result: 'W',
        table: 15,
      },
      '2': {
        name: 'Hikaru H. [AU]',
        result: 'L',
        table: 5,
      },
      '3': {
        name: 'Jacob S. [AU]',
        result: 'W',
        table: 9,
      },
      '4': {
        name: 'Rainn N. [AU]',
        result: 'W',
        table: 6,
      },
      '5': {
        name: 'Polaris A. [US]',
        result: 'T',
        table: 4,
      },
      '6': {
        name: 'Luke B. [AU]',
        result: 'W',
        table: 5,
      },
      '7': {
        name: 'Thomas H. [AU]',
        result: 'L',
        table: 4,
      },
    },
  },
  {
    name: 'Charlie A. [AU]',
    placing: 9,
    record: {
      wins: 4,
      losses: 1,
      ties: 1,
    },
    resistances: {
      self: 0.75,
      opp: 0.47222222222222227,
      oppopp: 0.5277777777777778,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Luke B. [AU]',
        result: 'T',
        table: 7,
      },
      '2': {
        name: 'Ricky Y. [AU]',
        result: 'L',
        table: 11,
      },
      '3': {
        name: 'Zalia K. [AU]',
        result: 'W',
        table: 15,
      },
      '4': {
        name: 'Jacob S. [AU]',
        result: 'W',
        table: 12,
      },
      '5': {
        name: 'Leila B. [AU]',
        result: 'W',
        table: 8,
      },
      '6': {
        name: 'Aidan S. [AU]',
        result: 'W',
        table: 4,
      },
    },
  },
  {
    name: 'Manik S. [AU]',
    placing: 10,
    record: {
      wins: 4,
      losses: 2,
      ties: 0,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5277777777777778,
      oppopp: 0.5430555555555555,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Hikaru H. [AU]',
        result: 'L',
        table: 18,
      },
      '2': {
        name: 'Isaac D. [AU]',
        result: 'W',
        table: 16,
      },
      '3': {
        name: 'Fergus B. [AU]',
        result: 'L',
        table: 8,
      },
      '4': {
        name: 'Hunter-James Edward K. [AU]',
        result: 'W',
        table: 14,
      },
      '5': {
        name: 'Samuel C. [AU]',
        result: 'W',
        table: 12,
      },
      '6': {
        name: 'loki m. [AU]',
        result: 'W',
        table: 8,
      },
    },
  },
  {
    name: 'Elliott M. [AU]',
    placing: 11,
    record: {
      wins: 4,
      losses: 2,
      ties: 0,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5000000000000001,
      oppopp: 0.5430555555555555,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Aurélien B. [NZ]',
        result: 'W',
        table: 4,
      },
      '2': {
        name: 'Yuichi M. [AU]',
        result: 'L',
        table: 4,
      },
      '3': {
        name: 'loki m. [AU]',
        result: 'L',
        table: 10,
      },
      '4': {
        name: 'Patrick W. [AU]',
        result: 'W',
        table: 13,
      },
      '5': {
        name: 'Isaac D. [AU]',
        result: 'W',
        table: 10,
      },
      '6': {
        name: 'James S. [AU]',
        result: 'W',
        table: 7,
      },
    },
  },
  {
    name: 'Luke B. [AU]',
    placing: 12,
    record: {
      wins: 3,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.5833333333333334,
      opp: 0.638888888888889,
      oppopp: 0.524537037037037,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Charlie A. [AU]',
        result: 'T',
        table: 7,
      },
      '2': {
        name: 'Zalia K. [AU]',
        result: 'W',
        table: 10,
      },
      '3': {
        name: 'Ryan F. [NZ]',
        result: 'W',
        table: 6,
      },
      '4': {
        name: 'Aidan S. [AU]',
        result: 'W',
        table: 3,
      },
      '5': {
        name: 'Hikaru H. [AU]',
        result: 'L',
        table: 2,
      },
      '6': {
        name: 'Jake N. [AU]',
        result: 'L',
        table: 5,
      },
    },
  },
  {
    name: 'Aidan S. [AU]',
    placing: 13,
    record: {
      wins: 3,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.5833333333333334,
      opp: 0.5416666666666667,
      oppopp: 0.4976851851851853,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Lola T. [AU]',
        result: 'W',
        table: 3,
      },
      '2': {
        name: 'Boyu W. [AU]',
        result: 'W',
        table: 2,
      },
      '3': {
        name: 'Leila B. [AU]',
        result: 'T',
        table: 4,
      },
      '4': {
        name: 'Luke B. [AU]',
        result: 'L',
        table: 3,
      },
      '5': {
        name: 'Aurélien B. [NZ]',
        result: 'W',
        table: 7,
      },
      '6': {
        name: 'Charlie A. [AU]',
        result: 'L',
        table: 4,
      },
    },
  },
  {
    name: 'Leila B. [AU]',
    placing: 14,
    record: {
      wins: 3,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.5833333333333334,
      opp: 0.5,
      oppopp: 0.5361111111111112,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Ayden R. [AU]',
        result: 'W',
        table: 8,
      },
      '2': {
        name: 'Rainn N. [AU]',
        result: 'W',
        table: 6,
      },
      '3': {
        name: 'Aidan S. [AU]',
        result: 'T',
        table: 4,
      },
      '4': {
        name: 'Kajaani J. [AU]',
        result: 'L',
        table: 4,
      },
      '5': {
        name: 'Charlie A. [AU]',
        result: 'L',
        table: 8,
      },
      '6': {
        name: 'Ricky Y. [AU]',
        result: 'W',
        table: 10,
      },
    },
  },
  {
    name: 'Ryan F. [NZ]',
    placing: 15,
    record: {
      wins: 3,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.5833333333333334,
      opp: 0.4861111111111111,
      oppopp: 0.5476851851851853,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Ricky Y. [AU]',
        result: 'T',
        table: 1,
      },
      '2': {
        name: 'Jade B.',
        result: 'W',
        table: 12,
      },
      '3': {
        name: 'Luke B. [AU]',
        result: 'L',
        table: 6,
      },
      '4': {
        name: 'Oliver H. [AU]',
        result: 'L',
        table: 9,
      },
      '5': {
        name: 'Hamish G. [AU]',
        result: 'W',
        table: 14,
      },
      '6': {
        name: 'Rainn N. [AU]',
        result: 'W',
        table: 11,
      },
    },
  },
  {
    name: 'Noah L. [AU]',
    placing: 16,
    record: {
      wins: 3,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.5833333333333334,
      opp: 0.47222222222222215,
      oppopp: 0.5060185185185185,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Cam R. [AU]',
        result: 'W',
        table: 9,
      },
      '2': {
        name: 'Oliver H. [AU]',
        result: 'L',
        table: 3,
      },
      '3': {
        name: 'Elijah S. [AU]',
        result: 'W',
        table: 7,
      },
      '4': {
        name: 'Fergus B. [AU]',
        result: 'L',
        table: 7,
      },
      '5': {
        name: 'Rainn N. [AU]',
        result: 'T',
        table: 9,
      },
      '6': {
        name: 'Patrick W. [AU]',
        result: 'W',
        table: 12,
      },
    },
  },
  {
    name: 'Aurélien B. [NZ]',
    placing: 17,
    record: {
      wins: 3,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.5833333333333334,
      opp: 0.4583333333333333,
      oppopp: 0.5083333333333334,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Elliott M. [AU]',
        result: 'L',
        table: 4,
      },
      '2': {
        name: 'Lola T. [AU]',
        result: 'W',
        table: 17,
      },
      '3': {
        name: 'Ayden R. [AU]',
        result: 'T',
        table: 11,
      },
      '4': {
        name: 'Hamish G. [AU]',
        result: 'W',
        table: 11,
      },
      '5': {
        name: 'Aidan S. [AU]',
        result: 'L',
        table: 7,
      },
      '6': {
        name: 'Kajaani J. [AU]',
        result: 'W',
        table: 9,
      },
    },
  },
  {
    name: 'James S. [AU]',
    placing: 18,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.6194444444444444,
      oppopp: 0.5546296296296297,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Elijah S. [AU]',
        result: 'W',
        table: 12,
      },
      '2': {
        name: 'Fergus B. [AU]',
        result: 'W',
        table: 7,
      },
      '3': {
        name: 'Ricky Y. [AU]',
        result: 'W',
        table: 5,
      },
      '4': {
        name: 'Tyson A. [AU]',
        result: 'L',
        table: 1,
      },
      '5': {
        name: 'Oliver H. [AU]',
        result: 'L',
        table: 5,
      },
      '6': {
        name: 'Elliott M. [AU]',
        result: 'L',
        table: 7,
      },
    },
  },
  {
    name: 'Kajaani J. [AU]',
    placing: 19,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.5638888888888889,
      oppopp: 0.5416666666666667,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Isaac D. [AU]',
        result: 'W',
        table: 13,
      },
      '2': {
        name: 'Tyson A. [AU]',
        result: 'L',
        table: 8,
      },
      '3': {
        name: 'Patrick W. [AU]',
        result: 'W',
        table: 12,
      },
      '4': {
        name: 'Leila B. [AU]',
        result: 'W',
        table: 4,
      },
      '5': {
        name: 'Yuichi M. [AU]',
        result: 'L',
        table: 3,
      },
      '6': {
        name: 'Aurélien B. [NZ]',
        result: 'L',
        table: 9,
      },
    },
  },
  {
    name: 'loki m. [AU]',
    placing: 20,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.5555555555555555,
      oppopp: 0.49074074074074076,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Boyu W. [AU]',
        result: 'L',
        table: 5,
      },
      '2': {
        name: 'Riley C. [AU]',
        result: 'W',
        table: 15,
      },
      '3': {
        name: 'Elliott M. [AU]',
        result: 'W',
        table: 10,
      },
      '4': {
        name: 'Polaris A. [US]',
        result: 'L',
        table: 8,
      },
      '5': {
        name: 'Evie T. [AU]',
        result: 'W',
        table: 11,
      },
      '6': {
        name: 'Manik S. [AU]',
        result: 'L',
        table: 8,
      },
    },
  },
  {
    name: 'Samuel C. [AU]',
    placing: 21,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.5416666666666666,
      oppopp: 0.5083333333333333,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Polaris A. [US]',
        result: 'L',
        table: 6,
      },
      '2': {
        name: 'Evie T. [AU]',
        result: 'W',
        table: 20,
      },
      '3': {
        name: 'David M. [AU]',
        result: 'W',
        table: 13,
      },
      '4': {
        name: 'Hikaru H. [AU]',
        result: 'L',
        table: 5,
      },
      '5': {
        name: 'Manik S. [AU]',
        result: 'L',
        table: 12,
      },
      '6': {
        name: 'Xavier D. [AU]',
        result: 'W',
        table: 14,
      },
    },
  },
  {
    name: 'Boyu W. [AU]',
    placing: 22,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.47222222222222227,
      oppopp: 0.5324074074074074,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'loki m. [AU]',
        result: 'W',
        table: 5,
      },
      '2': {
        name: 'Aidan S. [AU]',
        result: 'L',
        table: 2,
      },
      '3': {
        name: 'Rainn N. [AU]',
        result: 'L',
        table: 14,
      },
      '4': {
        name: 'David M. [AU]',
        result: 'W',
        table: 16,
      },
      '5': {
        name: 'Ayden R. [AU]',
        result: 'W',
        table: 13,
      },
      '6': {
        name: 'Polaris A. [US]',
        result: 'L',
        table: 6,
      },
    },
  },
  {
    name: 'Evie T. [AU]',
    placing: 23,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.4444444444444444,
      oppopp: 0.46990740740740744,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jake N. [AU]',
        result: 'L',
        table: 15,
      },
      '2': {
        name: 'Samuel C. [AU]',
        result: 'L',
        table: 20,
      },
      '3': {
        name: 'Lola T. [AU]',
        result: 'W',
        table: 18,
      },
      '4': {
        name: 'Xavier D. [AU]',
        result: 'W',
        table: 17,
      },
      '5': {
        name: 'loki m. [AU]',
        result: 'L',
        table: 11,
      },
      '6': {
        name: 'Jade B.',
        result: 'W',
        table: 15,
      },
    },
  },
  {
    name: 'Digby S. [AU]',
    placing: 24,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.38888888888888884,
      oppopp: 0.4875,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Oliver H. [AU]',
        result: 'L',
        table: 19,
      },
      '2': {
        name: 'Ayden R. [AU]',
        result: 'L',
        table: 18,
      },
      '3': {
        name: 'Hunter-James Edward K. [AU]',
        result: 'L',
        table: 19,
      },
      '4': {
        name: 'Lola T. [AU]',
        result: 'W',
        table: 20,
      },
      '5': {
        name: 'Elijah S. [AU]',
        result: 'W',
        table: 16,
      },
      '6': {
        name: 'Isaac D. [AU]',
        result: 'W',
        table: 13,
      },
    },
  },
  {
    name: 'Ricky Y. [AU]',
    placing: 25,
    record: {
      wins: 2,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.5833333333333334,
      oppopp: 0.5199074074074074,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Ryan F. [NZ]',
        result: 'T',
        table: 1,
      },
      '2': {
        name: 'Charlie A. [AU]',
        result: 'W',
        table: 11,
      },
      '3': {
        name: 'James S. [AU]',
        result: 'L',
        table: 5,
      },
      '4': {
        name: 'Ayden R. [AU]',
        result: 'W',
        table: 10,
      },
      '5': {
        name: 'Fergus B. [AU]',
        result: 'L',
        table: 6,
      },
      '6': {
        name: 'Leila B. [AU]',
        result: 'L',
        table: 10,
      },
    },
  },
  {
    name: 'Rainn N. [AU]',
    placing: 26,
    record: {
      wins: 2,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.5555555555555557,
      oppopp: 0.47222222222222227,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Xavier D. [AU]',
        result: 'W',
        table: 14,
      },
      '2': {
        name: 'Leila B. [AU]',
        result: 'L',
        table: 6,
      },
      '3': {
        name: 'Boyu W. [AU]',
        result: 'W',
        table: 14,
      },
      '4': {
        name: 'Jake N. [AU]',
        result: 'L',
        table: 6,
      },
      '5': {
        name: 'Noah L. [AU]',
        result: 'T',
        table: 9,
      },
      '6': {
        name: 'Ryan F. [NZ]',
        result: 'L',
        table: 11,
      },
    },
  },
  {
    name: 'Hamish G. [AU]',
    placing: 27,
    record: {
      wins: 2,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.5,
      oppopp: 0.4597222222222222,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Zalia K. [AU]',
        result: 'T',
        table: 17,
      },
      '2': {
        name: 'Thomas H. [AU]',
        result: 'L',
        table: 9,
      },
      '3': {
        name: 'Jade B.',
        result: 'W',
        table: 16,
      },
      '4': {
        name: 'Aurélien B. [NZ]',
        result: 'L',
        table: 11,
      },
      '5': {
        name: 'Ryan F. [NZ]',
        result: 'L',
        table: 14,
      },
      '6': {
        name: 'Cam R. [AU]',
        result: 'W',
        table: 17,
      },
    },
  },
  {
    name: 'Patrick W. [AU]',
    placing: 28,
    record: {
      wins: 2,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.513888888888889,
      oppopp: 0.5060185185185185,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jacob S. [AU]',
        result: 'W',
        table: 16,
      },
      '2': {
        name: 'Polaris A. [US]',
        result: 'L',
        table: 1,
      },
      '3': {
        name: 'Kajaani J. [AU]',
        result: 'L',
        table: 12,
      },
      '4': {
        name: 'Elliott M. [AU]',
        result: 'L',
        table: 13,
      },
      '5': {
        name: 'Hunter-James Edward K. [AU]',
        result: 'W',
        table: 17,
      },
      '6': {
        name: 'Noah L. [AU]',
        result: 'L',
        table: 12,
      },
    },
  },
  {
    name: 'Isaac D. [AU]',
    placing: 29,
    record: {
      wins: 2,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.4861111111111111,
      oppopp: 0.4689814814814815,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Kajaani J. [AU]',
        result: 'L',
        table: 13,
      },
      '2': {
        name: 'Manik S. [AU]',
        result: 'L',
        table: 16,
      },
      '3': {
        name: 'Riley C. [AU]',
        result: 'W',
        table: 17,
      },
      '4': {
        name: 'Elijah S. [AU]',
        result: 'W',
        table: 15,
      },
      '5': {
        name: 'Elliott M. [AU]',
        result: 'L',
        table: 10,
      },
      '6': {
        name: 'Digby S. [AU]',
        result: 'L',
        table: 13,
      },
    },
  },
  {
    name: 'Hunter-James Edward K. [AU]',
    placing: 30,
    record: {
      wins: 2,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.4583333333333333,
      oppopp: 0.4861111111111111,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Fergus B. [AU]',
        result: 'L',
        table: 2,
      },
      '2': {
        name: 'David M. [AU]',
        result: 'L',
        table: 13,
      },
      '3': {
        name: 'Digby S. [AU]',
        result: 'W',
        table: 19,
      },
      '4': {
        name: 'Manik S. [AU]',
        result: 'L',
        table: 14,
      },
      '5': {
        name: 'Patrick W. [AU]',
        result: 'L',
        table: 17,
      },
      '6': {
        name: 'Jacob S. [AU]',
        result: 'W',
        table: 18,
      },
    },
  },
  {
    name: 'Zalia K. [AU]',
    placing: 31,
    record: {
      wins: 1,
      losses: 2,
      ties: 3,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.4305555555555556,
      oppopp: 0.4884259259259259,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Hamish G. [AU]',
        result: 'T',
        table: 17,
      },
      '2': {
        name: 'Luke B. [AU]',
        result: 'L',
        table: 10,
      },
      '3': {
        name: 'Charlie A. [AU]',
        result: 'L',
        table: 15,
      },
      '4': {
        name: 'Cam R. [AU]',
        result: 'T',
        table: 18,
      },
      '5': {
        name: 'Riley C. [AU]',
        result: 'W',
        table: 19,
      },
      '6': {
        name: 'Ayden R. [AU]',
        result: 'T',
        table: 16,
      },
    },
  },
  {
    name: 'Elijah S. [AU]',
    placing: 32,
    record: {
      wins: 2,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.40277777777777785,
      oppopp: 0.47129629629629627,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'James S. [AU]',
        result: 'L',
        table: 12,
      },
      '2': {
        name: 'Cam R. [AU]',
        result: 'W',
        table: 19,
      },
      '3': {
        name: 'Noah L. [AU]',
        result: 'L',
        table: 7,
      },
      '4': {
        name: 'Isaac D. [AU]',
        result: 'L',
        table: 15,
      },
      '5': {
        name: 'Digby S. [AU]',
        result: 'L',
        table: 16,
      },
      '6': {
        name: 'David M. [AU]',
        result: 'W',
        table: 19,
      },
    },
  },
  {
    name: 'Xavier D. [AU]',
    placing: 33,
    record: {
      wins: 2,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.36111111111111116,
      oppopp: 0.4791666666666667,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Rainn N. [AU]',
        result: 'L',
        table: 14,
      },
      '2': {
        name: 'Jacob S. [AU]',
        result: 'L',
        table: 14,
      },
      '3': {
        name: 'Cam R. [AU]',
        result: 'W',
        table: 20,
      },
      '4': {
        name: 'Evie T. [AU]',
        result: 'L',
        table: 17,
      },
      '5': {
        name: 'David M. [AU]',
        result: 'W',
        table: 18,
      },
      '6': {
        name: 'Samuel C. [AU]',
        result: 'L',
        table: 14,
      },
    },
  },
  {
    name: 'Jade B.',
    placing: 34,
    record: {
      wins: 2,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.375,
      oppopp: 0.4305555555555555,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'LATE',
        result: 'L',
        table: 0,
      },
      '2': {
        name: 'Ryan F. [NZ]',
        result: 'L',
        table: 12,
      },
      '3': {
        name: 'Hamish G. [AU]',
        result: 'L',
        table: 16,
      },
      '4': {
        name: 'Riley C. [AU]',
        result: 'W',
        table: 19,
      },
      '5': {
        name: 'Jacob S. [AU]',
        result: 'W',
        table: 15,
      },
      '6': {
        name: 'Evie T. [AU]',
        result: 'L',
        table: 15,
      },
    },
  },
  {
    name: 'Ayden R. [AU]',
    placing: 35,
    record: {
      wins: 1,
      losses: 3,
      ties: 2,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.5,
      oppopp: 0.47222222222222215,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Leila B. [AU]',
        result: 'L',
        table: 8,
      },
      '2': {
        name: 'Digby S. [AU]',
        result: 'W',
        table: 18,
      },
      '3': {
        name: 'Aurélien B. [NZ]',
        result: 'T',
        table: 11,
      },
      '4': {
        name: 'Ricky Y. [AU]',
        result: 'L',
        table: 10,
      },
      '5': {
        name: 'Boyu W. [AU]',
        result: 'L',
        table: 13,
      },
      '6': {
        name: 'Zalia K. [AU]',
        result: 'T',
        table: 16,
      },
    },
  },
  {
    name: 'Cam R. [AU]',
    placing: 36,
    record: {
      wins: 1,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.3888888888888889,
      oppopp: 0.4351851851851852,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Noah L. [AU]',
        result: 'L',
        table: 9,
      },
      '2': {
        name: 'Elijah S. [AU]',
        result: 'L',
        table: 19,
      },
      '3': {
        name: 'Xavier D. [AU]',
        result: 'L',
        table: 20,
      },
      '4': {
        name: 'Zalia K. [AU]',
        result: 'T',
        table: 18,
      },
      '5': {
        name: 'Lola T. [AU]',
        result: 'W',
        table: 20,
      },
      '6': {
        name: 'Hamish G. [AU]',
        result: 'L',
        table: 17,
      },
    },
  },
  {
    name: 'David M. [AU]',
    placing: 37,
    record: {
      wins: 1,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.4722222222222223,
      oppopp: 0.4759259259259259,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Thomas H. [AU]',
        result: 'L',
        table: 10,
      },
      '2': {
        name: 'Hunter-James Edward K. [AU]',
        result: 'W',
        table: 13,
      },
      '3': {
        name: 'Samuel C. [AU]',
        result: 'L',
        table: 13,
      },
      '4': {
        name: 'Boyu W. [AU]',
        result: 'L',
        table: 16,
      },
      '5': {
        name: 'Xavier D. [AU]',
        result: 'L',
        table: 18,
      },
      '6': {
        name: 'Elijah S. [AU]',
        result: 'L',
        table: 19,
      },
    },
  },
  {
    name: 'Jacob S. [AU]',
    placing: 38,
    record: {
      wins: 1,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.47222222222222227,
      oppopp: 0.4537037037037038,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Patrick W. [AU]',
        result: 'L',
        table: 16,
      },
      '2': {
        name: 'Xavier D. [AU]',
        result: 'W',
        table: 14,
      },
      '3': {
        name: 'Jake N. [AU]',
        result: 'L',
        table: 9,
      },
      '4': {
        name: 'Charlie A. [AU]',
        result: 'L',
        table: 12,
      },
      '5': {
        name: 'Jade B.',
        result: 'L',
        table: 15,
      },
      '6': {
        name: 'Hunter-James Edward K. [AU]',
        result: 'L',
        table: 18,
      },
    },
  },
  {
    name: 'Lola T. [AU]',
    placing: 39,
    record: {
      wins: 1,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.4444444444444445,
      oppopp: 0.4421296296296296,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Aidan S. [AU]',
        result: 'L',
        table: 3,
      },
      '2': {
        name: 'Aurélien B. [NZ]',
        result: 'L',
        table: 17,
      },
      '3': {
        name: 'Evie T. [AU]',
        result: 'L',
        table: 18,
      },
      '4': {
        name: 'Digby S. [AU]',
        result: 'L',
        table: 20,
      },
      '5': {
        name: 'Cam R. [AU]',
        result: 'L',
        table: 20,
      },
      '6': {
        name: 'Riley C. [AU]',
        result: 'W',
        table: 20,
      },
    },
  },
  {
    name: 'Riley C. [AU]',
    placing: 40,
    record: {
      wins: 0,
      losses: 6,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.4305555555555555,
      oppopp: 0.48611111111111116,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Yuichi M. [AU]',
        result: 'L',
        table: 11,
      },
      '2': {
        name: 'loki m. [AU]',
        result: 'L',
        table: 15,
      },
      '3': {
        name: 'Isaac D. [AU]',
        result: 'L',
        table: 17,
      },
      '4': {
        name: 'Jade B.',
        result: 'L',
        table: 19,
      },
      '5': {
        name: 'Zalia K. [AU]',
        result: 'L',
        table: 19,
      },
      '6': {
        name: 'Lola T. [AU]',
        result: 'L',
        table: 20,
      },
    },
  },
];

export const juniorsStandings: Standing[] = [
  {
    name: 'Drake Z. [NZ]',
    placing: 1,
    record: {
      wins: 8,
      losses: 0,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.25,
      oppopp: 0.25,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Giratina V',
          number: '130',
          set: 'LOR',
        },
        {
          count: 4,
          name: 'Comfey',
          number: '79',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina VSTAR',
          number: '131',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
      ],
      trainer: [
        {
          count: 1,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 2,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 2,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
      ],
      energy: [
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
        {
          count: 4,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Lincoln C. [AU]',
        result: 'W',
        table: 1,
      },
      '2': {
        name: 'Harry B. [AU]',
        result: 'W',
        table: 13,
      },
      '3': {
        name: 'Sebastian L. [NZ]',
        result: 'W',
        table: 6,
      },
      '4': {
        name: 'Lingyu L. [NZ]',
        result: 'T',
        table: 3,
      },
      '5': {
        name: 'Lucan W. [AU]',
        result: 'W',
        table: 2,
      },
      '6': {
        name: 'Kai lin L. [AU]',
        result: 'W',
        table: 1,
      },
      '7': {
        name: 'Winter S. [AU]',
        result: 'W',
        table: 1,
      },
      '8': {
        name: 'Charlie L. [AU]',
        result: 'W',
        table: 1,
      },
      '9': {
        name: 'Gustavo G. [AU]',
        result: 'W',
        table: 1,
      },
    },
  },
  {
    name: 'Gustavo G. [AU]',
    placing: 2,
    record: {
      wins: 7,
      losses: 2,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.25,
      oppopp: 0.25,
    },
    decklist: {
      pokemon: [
        {
          count: 2,
          name: 'Charmander',
          number: '4',
          set: 'MEW',
        },
        {
          count: 1,
          name: 'Charmander',
          number: '26',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Charmander',
          number: '44',
          set: 'SVP',
        },
        {
          count: 1,
          name: 'Charmeleon',
          number: '27',
          set: 'OBF',
        },
        {
          count: 3,
          name: 'Charizard ex',
          number: '125',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Radiant Charizard',
          number: '11',
          set: 'PGO',
        },
        {
          count: 1,
          name: 'Rotom V',
          number: '176',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Lumineon V',
          number: '156',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Pidgey',
          number: '16',
          set: 'MEW',
        },
        {
          count: 2,
          name: 'Pidgeot ex',
          number: '225',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Mew',
          number: '25',
          set: 'CEL',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: 'GG06',
          set: 'CRZ',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Arven',
          number: '186',
          set: 'OBF',
        },
        {
          count: 3,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 3,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 2,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 1,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 1,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Choice Belt',
          number: '211',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Technical Machine: Devolution',
          number: '177',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
      ],
      energy: [
        {
          count: 7,
          name: 'Fire Energy - Basic',
          number: '153',
          set: 'CRZ',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Madeline B. [AU]',
        result: 'W',
        table: 16,
      },
      '2': {
        name: 'Minoru H. [AU]',
        result: 'W',
        table: 5,
      },
      '3': {
        name: 'Hao Ming G. [SG]',
        result: 'W',
        table: 5,
      },
      '4': {
        name: 'Ollie H. [AU]',
        result: 'W',
        table: 2,
      },
      '5': {
        name: 'Kai lin L. [AU]',
        result: 'L',
        table: 1,
      },
      '6': {
        name: 'Connor F. [NZ]',
        result: 'W',
        table: 3,
      },
      '7': {
        name: 'Ollie H. [AU]',
        result: 'W',
        table: 4,
      },
      '8': {
        name: 'Jasper L. [AU]',
        result: 'W',
        table: 2,
      },
      '9': {
        name: 'Drake Z. [NZ]',
        result: 'L',
        table: 1,
      },
    },
  },
  {
    name: 'Charlie L. [AU]',
    placing: 3,
    record: {
      wins: 6,
      losses: 2,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.25,
      oppopp: 0.25,
    },
    decklist: {
      pokemon: [
        {
          count: 2,
          name: 'Giratina VSTAR',
          number: '131',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Giratina VSTAR',
          number: '212',
          set: 'LOR',
        },
        {
          count: 4,
          name: 'Comfey',
          number: '79',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina V',
          number: '130',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
      ],
      trainer: [
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 3,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 2,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 3,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 4,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Technical Machine: Devolution',
          number: '177',
          set: 'PAR',
        },
      ],
      energy: [
        {
          count: 4,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
        {
          count: 4,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Arnold H. [US]',
        result: 'W',
        table: 24,
      },
      '2': {
        name: 'Clark D. [AU]',
        result: 'W',
        table: 8,
      },
      '3': {
        name: 'Jasper L. [AU]',
        result: 'W',
        table: 4,
      },
      '4': {
        name: 'Kai lin L. [AU]',
        result: 'L',
        table: 1,
      },
      '5': {
        name: 'Oskar B. [AU]',
        result: 'W',
        table: 5,
      },
      '6': {
        name: 'Hao Ming G. [SG]',
        result: 'W',
        table: 5,
      },
      '7': {
        name: 'Lingyu L. [NZ]',
        result: 'W',
        table: 2,
      },
      '8': {
        name: 'Drake Z. [NZ]',
        result: 'L',
        table: 1,
      },
    },
  },
  {
    name: 'Jasper L. [AU]',
    placing: 4,
    record: {
      wins: 5,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.25,
      oppopp: 0.25,
    },
    decklist: {
      pokemon: [
        {
          count: 3,
          name: 'Giratina VSTAR',
          number: '131',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina V',
          number: '130',
          set: 'LOR',
        },
        {
          count: 4,
          name: 'Comfey',
          number: '79',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Snorlax',
          number: 'TG10',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
      ],
      trainer: [
        {
          count: 3,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
        {
          count: 3,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Choice Belt',
          number: '211',
          set: 'ASR',
        },
        {
          count: 4,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
      ],
      energy: [
        {
          count: 4,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
        {
          count: 4,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Patrick K. [AU]',
        result: 'W',
        table: 23,
      },
      '2': {
        name: 'Tate D. [AU]',
        result: 'W',
        table: 9,
      },
      '3': {
        name: 'Charlie L. [AU]',
        result: 'L',
        table: 4,
      },
      '4': {
        name: 'Leon C. [AU]',
        result: 'W',
        table: 9,
      },
      '5': {
        name: 'Asher D. [AU]',
        result: 'W',
        table: 8,
      },
      '6': {
        name: 'Lingyu L. [NZ]',
        result: 'T',
        table: 2,
      },
      '7': {
        name: 'Kai lin L. [AU]',
        result: 'W',
        table: 3,
      },
      '8': {
        name: 'Gustavo G. [AU]',
        result: 'L',
        table: 2,
      },
    },
  },
  {
    name: 'Kai lin L. [AU]',
    placing: 5,
    record: {
      wins: 5,
      losses: 2,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.25,
      oppopp: 0.25,
    },
    decklist: {
      pokemon: [
        {
          count: 1,
          name: 'Rotom V',
          number: '176',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Charmeleon',
          number: '27',
          set: 'OBF',
        },
        {
          count: 2,
          name: 'Pidgey',
          number: '16',
          set: 'MEW',
        },
        {
          count: 1,
          name: 'Mew',
          number: '11',
          set: 'CEL',
        },
        {
          count: 1,
          name: 'Lumineon V',
          number: '40',
          set: 'BRS',
        },
        {
          count: 3,
          name: 'Charmander',
          number: '4',
          set: 'MEW',
        },
        {
          count: 2,
          name: 'Pidgeot ex',
          number: '164',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Charmander',
          number: '44',
          set: 'SVP',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 3,
          name: 'Charizard ex',
          number: '56',
          set: 'SVP',
        },
      ],
      trainer: [
        {
          count: 2,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Echoing Horn',
          number: '136',
          set: 'CRE',
        },
        {
          count: 1,
          name: 'Lost City',
          number: '161',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Artazon',
          number: '229',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Justified Gloves',
          number: '143',
          set: 'CRE',
        },
        {
          count: 4,
          name: 'Arven',
          number: '186',
          set: 'OBF',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 3,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 3,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Collapsed Stadium',
          number: '137',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 1,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Level Ball',
          number: '129',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Choice Belt',
          number: '211',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Technical Machine: Devolution',
          number: '177',
          set: 'PAR',
        },
      ],
      energy: [
        {
          count: 6,
          name: 'Fire Energy - Basic',
          number: '153',
          set: 'CRZ',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Tami W. [AU]',
        result: 'W',
        table: 17,
      },
      '2': {
        name: 'Leo M. [AU]',
        result: 'W',
        table: 3,
      },
      '3': {
        name: 'Hamish O. [AU]',
        result: 'W',
        table: 1,
      },
      '4': {
        name: 'Charlie L. [AU]',
        result: 'W',
        table: 1,
      },
      '5': {
        name: 'Gustavo G. [AU]',
        result: 'W',
        table: 1,
      },
      '6': {
        name: 'Drake Z. [NZ]',
        result: 'L',
        table: 1,
      },
      '7': {
        name: 'Jasper L. [AU]',
        result: 'L',
        table: 3,
      },
    },
  },
  {
    name: 'Lingyu L. [NZ]',
    placing: 6,
    record: {
      wins: 4,
      losses: 1,
      ties: 2,
    },
    resistances: {
      self: 0.25,
      opp: 0.25,
      oppopp: 0.25,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Charmander',
          number: '4',
          set: 'MEW',
        },
        {
          count: 1,
          name: 'Charmeleon',
          number: '5',
          set: 'MEW',
        },
        {
          count: 2,
          name: 'Charizard ex',
          number: '125',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Charizard ex',
          number: '56',
          set: 'SVP',
        },
        {
          count: 1,
          name: 'Radiant Charizard',
          number: '20',
          set: 'CRZ',
        },
        {
          count: 2,
          name: 'Pidgey',
          number: '16',
          set: 'MEW',
        },
        {
          count: 1,
          name: 'Pidgeot ex',
          number: '164',
          set: 'OBF',
        },
        {
          count: 1,
          name: 'Pidgeot ex',
          number: '225',
          set: 'OBF',
        },
        {
          count: 2,
          name: 'Entei V',
          number: '22',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: '41',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Jirachi',
          number: '126',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Lumineon V',
          number: '40',
          set: 'BRS',
        },
      ],
      trainer: [
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Arven',
          number: '186',
          set: 'OBF',
        },
        {
          count: 2,
          name: 'Iono',
          number: '80',
          set: 'PAF',
        },
        {
          count: 1,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 1,
          name: "Professor Turo's Scenario",
          number: '171',
          set: 'PAR',
        },
        {
          count: 3,
          name: 'Lost City',
          number: '161',
          set: 'LOR',
        },
        {
          count: 4,
          name: 'Rare Candy',
          number: '142',
          set: 'CES',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 4,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 1,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Lost Vacuum',
          number: '135',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Defiance Band',
          number: '169',
          set: 'SVI',
        },
        {
          count: 1,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 1,
          name: 'Justified Gloves',
          number: '143',
          set: 'CRE',
        },
      ],
      energy: [
        {
          count: 8,
          name: 'Fire Energy - Basic',
          number: '153',
          set: 'CRZ',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Martin N. [AU]',
        result: 'W',
        table: 27,
      },
      '2': {
        name: 'Oskar B. [AU]',
        result: 'W',
        table: 11,
      },
      '3': {
        name: 'Anakin d. [AU]',
        result: 'W',
        table: 2,
      },
      '4': {
        name: 'Drake Z. [NZ]',
        result: 'T',
        table: 3,
      },
      '5': {
        name: 'Minoru H. [AU]',
        result: 'W',
        table: 3,
      },
      '6': {
        name: 'Jasper L. [AU]',
        result: 'T',
        table: 2,
      },
      '7': {
        name: 'Charlie L. [AU]',
        result: 'L',
        table: 2,
      },
    },
  },
  {
    name: 'Ollie H. [AU]',
    placing: 7,
    record: {
      wins: 4,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.25,
      oppopp: 0.25,
    },
    decklist: {
      pokemon: [
        {
          count: 2,
          name: 'Miraidon ex',
          number: '81',
          set: 'SVI',
        },
        {
          count: 1,
          name: 'Miraidon ex',
          number: '227',
          set: 'SVI',
        },
        {
          count: 1,
          name: 'Squawkabilly ex',
          number: '169',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Flaaffy',
          number: '55',
          set: 'EVS',
        },
        {
          count: 1,
          name: 'Drapion V',
          number: '118',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Mareep',
          number: '66',
          set: 'SVI',
        },
        {
          count: 1,
          name: 'Zapdos',
          number: '29',
          set: 'PGO',
        },
        {
          count: 1,
          name: 'Iron Hands ex',
          number: '70',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Raichu V',
          number: '45',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Raikou V',
          number: '48',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Mew ex',
          number: '151',
          set: 'MEW',
        },
      ],
      trainer: [
        {
          count: 4,
          name: 'Electric Generator',
          number: '79',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 1,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Escape Rope',
          number: '125',
          set: 'BST',
        },
        {
          count: 1,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 1,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 1,
          name: 'Battle VIP Pass',
          number: '225',
          set: 'FST',
        },
        {
          count: 2,
          name: 'Beach Court',
          number: '263',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Arven',
          number: '186',
          set: 'OBF',
        },
        {
          count: 3,
          name: 'Peony',
          number: '150',
          set: 'CRE',
        },
        {
          count: 1,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 2,
          name: "Professor's Research",
          number: '147',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Raihan',
          number: '140',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 1,
          name: 'Vitality Band',
          number: '185',
          set: 'SSH',
        },
        {
          count: 1,
          name: 'Sky Seal Stone',
          number: '143',
          set: 'CRZ',
        },
        {
          count: 4,
          name: 'Ultra Ball',
          number: '150',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Forest Seal Stone',
          number: '156',
          set: 'SIT',
        },
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
      ],
      energy: [
        {
          count: 1,
          name: 'Double Turbo Energy - Special',
          number: '216',
          set: 'ASR',
        },
        {
          count: 14,
          name: 'Lightning Energy - Basic',
          number: '155',
          set: 'CRZ',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Henry E. [AU]',
        result: 'W',
        table: 13,
      },
      '2': {
        name: 'Connor F. [NZ]',
        result: 'W',
        table: 7,
      },
      '3': {
        name: 'Takumi M. [AU]',
        result: 'W',
        table: 3,
      },
      '4': {
        name: 'Gustavo G. [AU]',
        result: 'L',
        table: 2,
      },
      '5': {
        name: 'Hamish O. [AU]',
        result: 'W',
        table: 7,
      },
      '6': {
        name: 'Winter S. [AU]',
        result: 'T',
        table: 4,
      },
      '7': {
        name: 'Gustavo G. [AU]',
        result: 'L',
        table: 4,
      },
    },
  },
  {
    name: 'Winter S. [AU]',
    placing: 8,
    record: {
      wins: 4,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.25,
      oppopp: 0.25,
    },
    decklist: {
      pokemon: [
        {
          count: 4,
          name: 'Comfey',
          number: 'GG14',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Giratina V',
          number: '130',
          set: 'LOR',
        },
        {
          count: 3,
          name: 'Giratina VSTAR',
          number: '131',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Radiant Greninja',
          number: '46',
          set: 'ASR',
        },
        {
          count: 1,
          name: 'Cramorant',
          number: '50',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Sableye',
          number: '70',
          set: 'LOR',
        },
        {
          count: 1,
          name: 'Shaymin V',
          number: '13',
          set: 'BRS',
        },
        {
          count: 1,
          name: 'Manaphy',
          number: 'GG06',
          set: 'CRZ',
        },
      ],
      trainer: [
        {
          count: 2,
          name: "Boss's Orders",
          number: '132',
          set: 'BRS',
        },
        {
          count: 2,
          name: 'Roxanne',
          number: '150',
          set: 'ASR',
        },
        {
          count: 4,
          name: "Colress's Experiment",
          number: 'GG59',
          set: 'CRZ',
        },
        {
          count: 1,
          name: 'Avery',
          number: '130',
          set: 'CRE',
        },
        {
          count: 4,
          name: 'Nest Ball',
          number: '84',
          set: 'PAF',
        },
        {
          count: 2,
          name: 'Fog Crystal',
          number: '140',
          set: 'CRE',
        },
        {
          count: 4,
          name: 'Mirage Gate',
          number: '163',
          set: 'LOR',
        },
        {
          count: 2,
          name: 'Switch Cart',
          number: '154',
          set: 'ASR',
        },
        {
          count: 2,
          name: 'Switch',
          number: '147',
          set: 'CES',
        },
        {
          count: 1,
          name: 'Counter Catcher',
          number: '160',
          set: 'PAR',
        },
        {
          count: 2,
          name: 'Super Rod',
          number: '188',
          set: 'PAL',
        },
        {
          count: 2,
          name: 'Pokegear 3.0',
          number: '174',
          set: 'SSH',
        },
        {
          count: 3,
          name: 'Path to the Peak',
          number: '213',
          set: 'ASR',
        },
      ],
      energy: [
        {
          count: 4,
          name: 'Jet Energy - Special',
          number: '190',
          set: 'PAL',
        },
        {
          count: 3,
          name: 'Grass Energy - Basic',
          number: '152',
          set: 'CRZ',
        },
        {
          count: 3,
          name: 'Water Energy - Basic',
          number: '231',
          set: 'CRE',
        },
        {
          count: 4,
          name: 'Psychic Energy - Basic',
          number: '232',
          set: 'CRE',
        },
      ],
    },
    drop: -1,
    rounds: {
      '1': {
        name: 'Rhys B. [AU]',
        result: 'W',
        table: 18,
      },
      '2': {
        name: 'Asher D. [AU]',
        result: 'W',
        table: 6,
      },
      '3': {
        name: 'Dylan L. [NZ]',
        result: 'L',
        table: 7,
      },
      '4': {
        name: 'Niko W. [AU]',
        result: 'W',
        table: 10,
      },
      '5': {
        name: 'Wilbur S. [AU]',
        result: 'W',
        table: 6,
      },
      '6': {
        name: 'Ollie H. [AU]',
        result: 'T',
        table: 4,
      },
      '7': {
        name: 'Drake Z. [NZ]',
        result: 'L',
        table: 1,
      },
    },
  },
  {
    name: 'Hao Ming G. [SG]',
    placing: 9,
    record: {
      wins: 4,
      losses: 2,
      ties: 0,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.638888888888889,
      oppopp: 0.6041666666666666,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Harry D. [AU]',
        result: 'W',
        table: 7,
      },
      '2': {
        name: 'Leon C. [AU]',
        result: 'W',
        table: 10,
      },
      '3': {
        name: 'Gustavo G. [AU]',
        result: 'L',
        table: 5,
      },
      '4': {
        name: 'Dylan L. [NZ]',
        result: 'W',
        table: 5,
      },
      '5': {
        name: 'Sebastian L. [NZ]',
        result: 'W',
        table: 4,
      },
      '6': {
        name: 'Charlie L. [AU]',
        result: 'L',
        table: 5,
      },
    },
  },
  {
    name: 'Sebastian L. [NZ]',
    placing: 10,
    record: {
      wins: 4,
      losses: 2,
      ties: 0,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.6388888888888888,
      oppopp: 0.5439814814814814,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Dingrui L. [AU]',
        result: 'W',
        table: 19,
      },
      '2': {
        name: 'Harry D. [AU]',
        result: 'W',
        table: 14,
      },
      '3': {
        name: 'Drake Z. [NZ]',
        result: 'L',
        table: 6,
      },
      '4': {
        name: 'Anakin d. [AU]',
        result: 'W',
        table: 6,
      },
      '5': {
        name: 'Hao Ming G. [SG]',
        result: 'L',
        table: 4,
      },
      '6': {
        name: 'Niko W. [AU]',
        result: 'W',
        table: 8,
      },
    },
  },
  {
    name: 'Harry B. [AU]',
    placing: 11,
    record: {
      wins: 4,
      losses: 2,
      ties: 0,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.611111111111111,
      oppopp: 0.5347222222222222,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Wilbur S. [AU]',
        result: 'W',
        table: 3,
      },
      '2': {
        name: 'Drake Z. [NZ]',
        result: 'L',
        table: 13,
      },
      '3': {
        name: 'Bella D. [AU]',
        result: 'W',
        table: 14,
      },
      '4': {
        name: 'Lucan W. [AU]',
        result: 'L',
        table: 4,
      },
      '5': {
        name: 'Dylan S. [AU]',
        result: 'W',
        table: 14,
      },
      '6': {
        name: 'Tate D. [AU]',
        result: 'W',
        table: 10,
      },
    },
  },
  {
    name: 'Connor F. [NZ]',
    placing: 12,
    record: {
      wins: 4,
      losses: 2,
      ties: 0,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5555555555555556,
      oppopp: 0.5625,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Henry C. [AU]',
        result: 'W',
        table: 15,
      },
      '2': {
        name: 'Ollie H. [AU]',
        result: 'L',
        table: 7,
      },
      '3': {
        name: 'Clark D. [AU]',
        result: 'W',
        table: 16,
      },
      '4': {
        name: 'Tate D. [AU]',
        result: 'W',
        table: 11,
      },
      '5': {
        name: 'Dylan L. [NZ]',
        result: 'W',
        table: 9,
      },
      '6': {
        name: 'Gustavo G. [AU]',
        result: 'L',
        table: 3,
      },
    },
  },
  {
    name: 'Anakin d. [AU]',
    placing: 13,
    record: {
      wins: 4,
      losses: 2,
      ties: 0,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5416666666666666,
      oppopp: 0.5324074074074074,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Xinyue L. [AU]',
        result: 'W',
        table: 4,
      },
      '2': {
        name: 'Logan O. [AU]',
        result: 'W',
        table: 1,
      },
      '3': {
        name: 'Lingyu L. [NZ]',
        result: 'L',
        table: 2,
      },
      '4': {
        name: 'Sebastian L. [NZ]',
        result: 'L',
        table: 6,
      },
      '5': {
        name: 'Leo M. [AU]',
        result: 'W',
        table: 11,
      },
      '6': {
        name: 'Audrey H. [AU]',
        result: 'W',
        table: 11,
      },
    },
  },
  {
    name: 'Wilbur S. [AU]',
    placing: 14,
    record: {
      wins: 4,
      losses: 2,
      ties: 0,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5,
      oppopp: 0.537037037037037,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Harry B. [AU]',
        result: 'L',
        table: 3,
      },
      '2': {
        name: 'Louis K. [AU]',
        result: 'W',
        table: 25,
      },
      '3': {
        name: 'Sophia D. [AU]',
        result: 'W',
        table: 15,
      },
      '4': {
        name: 'Takumi M. [AU]',
        result: 'W',
        table: 13,
      },
      '5': {
        name: 'Winter S. [AU]',
        result: 'L',
        table: 6,
      },
      '6': {
        name: 'Minoru H. [AU]',
        result: 'W',
        table: 9,
      },
    },
  },
  {
    name: 'Madeline B. [AU]',
    placing: 15,
    record: {
      wins: 4,
      losses: 2,
      ties: 0,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.48611111111111116,
      oppopp: 0.560763888888889,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Gustavo G. [AU]',
        result: 'L',
        table: 16,
      },
      '2': {
        name: 'Audrey H. [AU]',
        result: 'W',
        table: 19,
      },
      '3': {
        name: 'Leo M. [AU]',
        result: 'L',
        table: 9,
      },
      '4': {
        name: 'Thomas C. [AU]',
        result: 'W',
        table: 18,
      },
      '5': {
        name: 'Leon C. [AU]',
        result: 'W',
        table: 10,
      },
      '6': {
        name: 'Takumi M. [AU]',
        result: 'W',
        table: 12,
      },
    },
  },
  {
    name: 'Harry D. [AU]',
    placing: 16,
    record: {
      wins: 4,
      losses: 2,
      ties: 0,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.4861111111111111,
      oppopp: 0.5254629629629629,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Hao Ming G. [SG]',
        result: 'L',
        table: 7,
      },
      '2': {
        name: 'Sebastian L. [NZ]',
        result: 'L',
        table: 14,
      },
      '3': {
        name: 'Isaac S. [AU]',
        result: 'W',
        table: 26,
      },
      '4': {
        name: 'Xinyue L. [AU]',
        result: 'W',
        table: 19,
      },
      '5': {
        name: 'Dingrui L. [AU]',
        result: 'W',
        table: 17,
      },
      '6': {
        name: 'Hamish O. [AU]',
        result: 'W',
        table: 7,
      },
    },
  },
  {
    name: 'Lucan W. [AU]',
    placing: 17,
    record: {
      wins: 3,
      losses: 1,
      ties: 2,
    },
    resistances: {
      self: 0.6666666666666666,
      opp: 0.5694444444444444,
      oppopp: 0.5862268518518519,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Thomas C. [AU]',
        result: 'W',
        table: 20,
      },
      '2': {
        name: 'Dylan L. [NZ]',
        result: 'T',
        table: 4,
      },
      '3': {
        name: 'Patrick K. [AU]',
        result: 'W',
        table: 8,
      },
      '4': {
        name: 'Harry B. [AU]',
        result: 'W',
        table: 4,
      },
      '5': {
        name: 'Drake Z. [NZ]',
        result: 'L',
        table: 2,
      },
      '6': {
        name: 'Oskar B. [AU]',
        result: 'T',
        table: 6,
      },
    },
  },
  {
    name: 'Oskar B. [AU]',
    placing: 18,
    record: {
      wins: 3,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.5833333333333334,
      opp: 0.5833333333333334,
      oppopp: 0.5462962962962963,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Gabriel C. [AU]',
        result: 'W',
        table: 11,
      },
      '2': {
        name: 'Lingyu L. [NZ]',
        result: 'L',
        table: 11,
      },
      '3': {
        name: 'Lachlan A. [AU]',
        result: 'W',
        table: 10,
      },
      '4': {
        name: 'Martin N. [AU]',
        result: 'W',
        table: 12,
      },
      '5': {
        name: 'Charlie L. [AU]',
        result: 'L',
        table: 5,
      },
      '6': {
        name: 'Lucan W. [AU]',
        result: 'T',
        table: 6,
      },
    },
  },
  {
    name: 'Lincoln C. [AU]',
    placing: 19,
    record: {
      wins: 3,
      losses: 2,
      ties: 1,
    },
    resistances: {
      self: 0.5833333333333334,
      opp: 0.4861111111111111,
      oppopp: 0.5324074074074074,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Drake Z. [NZ]',
        result: 'L',
        table: 1,
      },
      '2': {
        name: 'Gabriel C. [AU]',
        result: 'T',
        table: 18,
      },
      '3': {
        name: 'Minoru H. [AU]',
        result: 'L',
        table: 20,
      },
      '4': {
        name: 'Jasper W. [AU]',
        result: 'W',
        table: 24,
      },
      '5': {
        name: 'Tami W. [AU]',
        result: 'W',
        table: 19,
      },
      '6': {
        name: 'Asher D. [AU]',
        result: 'W',
        table: 13,
      },
    },
  },
  {
    name: 'Minoru H. [AU]',
    placing: 20,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.6250000000000001,
      oppopp: 0.5092592592592592,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Attila r. [AU]',
        result: 'W',
        table: 21,
      },
      '2': {
        name: 'Gustavo G. [AU]',
        result: 'L',
        table: 5,
      },
      '3': {
        name: 'Lincoln C. [AU]',
        result: 'W',
        table: 20,
      },
      '4': {
        name: 'Harrison B. [AU]',
        result: 'W',
        table: 8,
      },
      '5': {
        name: 'Lingyu L. [NZ]',
        result: 'L',
        table: 3,
      },
      '6': {
        name: 'Wilbur S. [AU]',
        result: 'L',
        table: 9,
      },
    },
  },
  {
    name: 'Leo M. [AU]',
    placing: 21,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.5694444444444444,
      oppopp: 0.5486111111111112,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Dylan S. [AU]',
        result: 'W',
        table: 5,
      },
      '2': {
        name: 'Kai lin L. [AU]',
        result: 'L',
        table: 3,
      },
      '3': {
        name: 'Madeline B. [AU]',
        result: 'W',
        table: 9,
      },
      '4': {
        name: 'Hamish O. [AU]',
        result: 'L',
        table: 7,
      },
      '5': {
        name: 'Anakin d. [AU]',
        result: 'L',
        table: 11,
      },
      '6': {
        name: 'Martin N. [AU]',
        result: 'W',
        table: 19,
      },
    },
  },
  {
    name: 'Hamish O. [AU]',
    placing: 22,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.5694444444444444,
      oppopp: 0.5231481481481483,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Sophia D. [AU]',
        result: 'W',
        table: 2,
      },
      '2': {
        name: 'Harrison B. [AU]',
        result: 'W',
        table: 12,
      },
      '3': {
        name: 'Kai lin L. [AU]',
        result: 'L',
        table: 1,
      },
      '4': {
        name: 'Leo M. [AU]',
        result: 'W',
        table: 7,
      },
      '5': {
        name: 'Ollie H. [AU]',
        result: 'L',
        table: 7,
      },
      '6': {
        name: 'Harry D. [AU]',
        result: 'L',
        table: 7,
      },
    },
  },
  {
    name: 'Asher D. [AU]',
    placing: 23,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.5555555555555556,
      oppopp: 0.49074074074074076,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Lachlan A. [AU]',
        result: 'W',
        table: 14,
      },
      '2': {
        name: 'Winter S. [AU]',
        result: 'L',
        table: 6,
      },
      '3': {
        name: 'Logan O. [AU]',
        result: 'W',
        table: 18,
      },
      '4': {
        name: 'Gabriel C. [AU]',
        result: 'W',
        table: 14,
      },
      '5': {
        name: 'Jasper L. [AU]',
        result: 'L',
        table: 8,
      },
      '6': {
        name: 'Lincoln C. [AU]',
        result: 'L',
        table: 13,
      },
    },
  },
  {
    name: 'Tate D. [AU]',
    placing: 24,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.5416666666666666,
      oppopp: 0.5393518518518519,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Audrey H. [AU]',
        result: 'W',
        table: 26,
      },
      '2': {
        name: 'Jasper L. [AU]',
        result: 'L',
        table: 9,
      },
      '3': {
        name: 'Xinyue L. [AU]',
        result: 'W',
        table: 11,
      },
      '4': {
        name: 'Connor F. [NZ]',
        result: 'L',
        table: 11,
      },
      '5': {
        name: 'Martin N. [AU]',
        result: 'W',
        table: 16,
      },
      '6': {
        name: 'Harry B. [AU]',
        result: 'L',
        table: 10,
      },
    },
  },
  {
    name: 'Takumi M. [AU]',
    placing: 25,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.5416666666666666,
      oppopp: 0.48148148148148145,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jasper W. [AU]',
        result: 'W',
        table: 10,
      },
      '2': {
        name: 'Bella D. [AU]',
        result: 'W',
        table: 2,
      },
      '3': {
        name: 'Ollie H. [AU]',
        result: 'L',
        table: 3,
      },
      '4': {
        name: 'Wilbur S. [AU]',
        result: 'L',
        table: 13,
      },
      '5': {
        name: 'Patrick K. [AU]',
        result: 'W',
        table: 15,
      },
      '6': {
        name: 'Madeline B. [AU]',
        result: 'L',
        table: 12,
      },
    },
  },
  {
    name: 'Patrick K. [AU]',
    placing: 26,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.5,
      oppopp: 0.47685185185185186,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Jasper L. [AU]',
        result: 'L',
        table: 23,
      },
      '2': {
        name: 'Isaac S. [AU]',
        result: 'W',
        table: 23,
      },
      '3': {
        name: 'Lucan W. [AU]',
        result: 'L',
        table: 8,
      },
      '4': {
        name: 'Attila r. [AU]',
        result: 'W',
        table: 20,
      },
      '5': {
        name: 'Takumi M. [AU]',
        result: 'L',
        table: 15,
      },
      '6': {
        name: 'Harrison B. [AU]',
        result: 'W',
        table: 18,
      },
    },
  },
  {
    name: 'Clark D. [AU]',
    placing: 27,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.48611111111111116,
      oppopp: 0.5092592592592592,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Louis K. [AU]',
        result: 'W',
        table: 12,
      },
      '2': {
        name: 'Charlie L. [AU]',
        result: 'L',
        table: 8,
      },
      '3': {
        name: 'Connor F. [NZ]',
        result: 'L',
        table: 16,
      },
      '4': {
        name: 'Dylan S. [AU]',
        result: 'L',
        table: 16,
      },
      '5': {
        name: 'Sophia D. [AU]',
        result: 'W',
        table: 24,
      },
      '6': {
        name: 'Logan O. [AU]',
        result: 'W',
        table: 17,
      },
    },
  },
  {
    name: 'Dylan S. [AU]',
    placing: 28,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.47222222222222215,
      oppopp: 0.5092592592592592,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Leo M. [AU]',
        result: 'L',
        table: 5,
      },
      '2': {
        name: 'Arnold H. [US]',
        result: 'L',
        table: 17,
      },
      '3': {
        name: 'Louis K. [AU]',
        result: 'W',
        table: 22,
      },
      '4': {
        name: 'Clark D. [AU]',
        result: 'W',
        table: 16,
      },
      '5': {
        name: 'Harry B. [AU]',
        result: 'L',
        table: 14,
      },
      '6': {
        name: 'Lachlan A. [AU]',
        result: 'W',
        table: 15,
      },
    },
  },
  {
    name: 'Audrey H. [AU]',
    placing: 29,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.4444444444444444,
      oppopp: 0.4958333333333333,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Tate D. [AU]',
        result: 'L',
        table: 26,
      },
      '2': {
        name: 'Madeline B. [AU]',
        result: 'L',
        table: 19,
      },
      '3': {
        name: 'Henry C. [AU]',
        result: 'W',
        table: 25,
      },
      '4': {
        name: 'Kai M. [AU]',
        result: 'W',
        table: 21,
      },
      '5': {
        name: 'Logan O. [AU]',
        result: 'W',
        table: 12,
      },
      '6': {
        name: 'Anakin d. [AU]',
        result: 'L',
        table: 11,
      },
    },
  },
  {
    name: 'Niko W. [AU]',
    placing: 30,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.4305555555555555,
      oppopp: 0.5353009259259259,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Leon C. [AU]',
        result: 'L',
        table: 8,
      },
      '2': {
        name: 'Henry C. [AU]',
        result: 'W',
        table: 21,
      },
      '3': {
        name: 'Thomas C. [AU]',
        result: 'W',
        table: 17,
      },
      '4': {
        name: 'Winter S. [AU]',
        result: 'L',
        table: 10,
      },
      '5': {
        name: 'Harrison B. [AU]',
        result: 'W',
        table: 13,
      },
      '6': {
        name: 'Sebastian L. [NZ]',
        result: 'L',
        table: 8,
      },
    },
  },
  {
    name: 'Attila r. [AU]',
    placing: 31,
    record: {
      wins: 3,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.5,
      opp: 0.36111111111111116,
      oppopp: 0.5120370370370372,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Minoru H. [AU]',
        result: 'L',
        table: 21,
      },
      '2': {
        name: 'Dingrui L. [AU]',
        result: 'W',
        table: 22,
      },
      '3': {
        name: 'Martin N. [AU]',
        result: 'L',
        table: 13,
      },
      '4': {
        name: 'Patrick K. [AU]',
        result: 'L',
        table: 20,
      },
      '5': {
        name: 'Louis K. [AU]',
        result: 'W',
        table: 23,
      },
      '6': {
        name: 'Kai M. [AU]',
        result: 'W',
        table: 20,
      },
    },
  },
  {
    name: 'Dylan L. [NZ]',
    placing: 32,
    record: {
      wins: 2,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.5,
      opp: 0.5833333333333333,
      oppopp: 0.5351851851851851,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Kai M. [AU]',
        result: 'W',
        table: 6,
      },
      '2': {
        name: 'Lucan W. [AU]',
        result: 'T',
        table: 4,
      },
      '3': {
        name: 'Winter S. [AU]',
        result: 'W',
        table: 7,
      },
      '4': {
        name: 'Hao Ming G. [SG]',
        result: 'L',
        table: 5,
      },
      '5': {
        name: 'Connor F. [NZ]',
        result: 'L',
        table: 9,
      },
      '6': {
        name: 'Arnold H. [US]',
        result: 'T',
        table: 14,
      },
    },
  },
  {
    name: 'Arnold H. [US]',
    placing: 33,
    record: {
      wins: 2,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.5,
      opp: 0.4861111111111111,
      oppopp: 0.5277777777777777,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Charlie L. [AU]',
        result: 'L',
        table: 24,
      },
      '2': {
        name: 'Dylan S. [AU]',
        result: 'W',
        table: 17,
      },
      '3': {
        name: 'Leon C. [AU]',
        result: 'L',
        table: 12,
      },
      '4': {
        name: 'Sophia D. [AU]',
        result: 'W',
        table: 23,
      },
      '5': {
        name: 'Lachlan A. [AU]',
        result: 'T',
        table: 18,
      },
      '6': {
        name: 'Dylan L. [NZ]',
        result: 'T',
        table: 14,
      },
    },
  },
  {
    name: 'Gabriel C. [AU]',
    placing: 34,
    record: {
      wins: 2,
      losses: 2,
      ties: 2,
    },
    resistances: {
      self: 0.5,
      opp: 0.4444444444444445,
      oppopp: 0.4981481481481482,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Oskar B. [AU]',
        result: 'L',
        table: 11,
      },
      '2': {
        name: 'Lincoln C. [AU]',
        result: 'T',
        table: 18,
      },
      '3': {
        name: 'Chevy T. [AU]',
        result: 'W',
        table: 21,
      },
      '4': {
        name: 'Asher D. [AU]',
        result: 'L',
        table: 14,
      },
      '5': {
        name: 'Bella D. [AU]',
        result: 'T',
        table: 20,
      },
      '6': {
        name: 'Leon C. [AU]',
        result: 'W',
        table: 21,
      },
    },
  },
  {
    name: 'Xinyue L. [AU]',
    placing: 35,
    record: {
      wins: 2,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.45833333333333326,
      oppopp: 0.4685185185185185,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Anakin d. [AU]',
        result: 'L',
        table: 4,
      },
      '2': {
        name: 'Kai M. [AU]',
        result: 'W',
        table: 26,
      },
      '3': {
        name: 'Tate D. [AU]',
        result: 'L',
        table: 11,
      },
      '4': {
        name: 'Harry D. [AU]',
        result: 'L',
        table: 19,
      },
      '5': {
        name: 'Chevy T. [AU]',
        result: 'W',
        table: 21,
      },
      '6': {
        name: 'Dingrui L. [AU]',
        result: 'T',
        table: 16,
      },
    },
  },
  {
    name: 'Dingrui L. [AU]',
    placing: 36,
    record: {
      wins: 2,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.45833333333333326,
      oppopp: 0.46759259259259256,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Sebastian L. [NZ]',
        result: 'L',
        table: 19,
      },
      '2': {
        name: 'Attila r. [AU]',
        result: 'L',
        table: 22,
      },
      '3': {
        name: 'Jasper W. [AU]',
        result: 'W',
        table: 24,
      },
      '4': {
        name: 'Tami W. [AU]',
        result: 'W',
        table: 22,
      },
      '5': {
        name: 'Harry D. [AU]',
        result: 'L',
        table: 17,
      },
      '6': {
        name: 'Xinyue L. [AU]',
        result: 'T',
        table: 16,
      },
    },
  },
  {
    name: 'Lachlan A. [AU]',
    placing: 37,
    record: {
      wins: 2,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.4305555555555556,
      oppopp: 0.4768518518518519,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Asher D. [AU]',
        result: 'L',
        table: 14,
      },
      '2': {
        name: 'Jasper W. [AU]',
        result: 'W',
        table: 20,
      },
      '3': {
        name: 'Oskar B. [AU]',
        result: 'L',
        table: 10,
      },
      '4': {
        name: 'Henry E. [AU]',
        result: 'W',
        table: 15,
      },
      '5': {
        name: 'Arnold H. [US]',
        result: 'T',
        table: 18,
      },
      '6': {
        name: 'Dylan S. [AU]',
        result: 'L',
        table: 15,
      },
    },
  },
  {
    name: 'Bella D. [AU]',
    placing: 38,
    record: {
      wins: 2,
      losses: 3,
      ties: 1,
    },
    resistances: {
      self: 0.4166666666666667,
      opp: 0.4166666666666667,
      oppopp: 0.488425925925926,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Isaac S. [AU]',
        result: 'W',
        table: 9,
      },
      '2': {
        name: 'Takumi M. [AU]',
        result: 'L',
        table: 2,
      },
      '3': {
        name: 'Harry B. [AU]',
        result: 'L',
        table: 14,
      },
      '4': {
        name: 'Logan O. [AU]',
        result: 'L',
        table: 17,
      },
      '5': {
        name: 'Gabriel C. [AU]',
        result: 'T',
        table: 20,
      },
      '6': {
        name: 'Louis K. [AU]',
        result: 'W',
        table: 22,
      },
    },
  },
  {
    name: 'Leon C. [AU]',
    placing: 39,
    record: {
      wins: 2,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.5972222222222222,
      oppopp: 0.5115740740740741,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Niko W. [AU]',
        result: 'W',
        table: 8,
      },
      '2': {
        name: 'Hao Ming G. [SG]',
        result: 'L',
        table: 10,
      },
      '3': {
        name: 'Arnold H. [US]',
        result: 'W',
        table: 12,
      },
      '4': {
        name: 'Jasper L. [AU]',
        result: 'L',
        table: 9,
      },
      '5': {
        name: 'Madeline B. [AU]',
        result: 'L',
        table: 10,
      },
      '6': {
        name: 'Gabriel C. [AU]',
        result: 'L',
        table: 21,
      },
    },
  },
  {
    name: 'Martin N. [AU]',
    placing: 40,
    record: {
      wins: 2,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.5833333333333334,
      oppopp: 0.5333333333333334,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Lingyu L. [NZ]',
        result: 'L',
        table: 27,
      },
      '2': {
        name: 'BYE',
        result: 'W',
        table: 0,
      },
      '3': {
        name: 'Attila r. [AU]',
        result: 'W',
        table: 13,
      },
      '4': {
        name: 'Oskar B. [AU]',
        result: 'L',
        table: 12,
      },
      '5': {
        name: 'Tate D. [AU]',
        result: 'L',
        table: 16,
      },
      '6': {
        name: 'Leo M. [AU]',
        result: 'L',
        table: 19,
      },
    },
  },
  {
    name: 'Logan O. [AU]',
    placing: 41,
    record: {
      wins: 2,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.47222222222222215,
      oppopp: 0.5740740740740741,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Kingsley C. [AU]',
        result: 'W',
        table: 25,
      },
      '2': {
        name: 'Anakin d. [AU]',
        result: 'L',
        table: 1,
      },
      '3': {
        name: 'Asher D. [AU]',
        result: 'L',
        table: 18,
      },
      '4': {
        name: 'Bella D. [AU]',
        result: 'W',
        table: 17,
      },
      '5': {
        name: 'Audrey H. [AU]',
        result: 'L',
        table: 12,
      },
      '6': {
        name: 'Clark D. [AU]',
        result: 'L',
        table: 17,
      },
    },
  },
  {
    name: 'Sophia D. [AU]',
    placing: 42,
    record: {
      wins: 2,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.4444444444444444,
      oppopp: 0.47916666666666674,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Hamish O. [AU]',
        result: 'L',
        table: 2,
      },
      '2': {
        name: 'Rhys B. [AU]',
        result: 'W',
        table: 24,
      },
      '3': {
        name: 'Wilbur S. [AU]',
        result: 'L',
        table: 15,
      },
      '4': {
        name: 'Arnold H. [US]',
        result: 'L',
        table: 23,
      },
      '5': {
        name: 'Clark D. [AU]',
        result: 'L',
        table: 24,
      },
      '6': {
        name: 'Tami W. [AU]',
        result: 'W',
        table: 23,
      },
    },
  },
  {
    name: 'Kai M. [AU]',
    placing: 43,
    record: {
      wins: 2,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.4333333333333334,
      oppopp: 0.4416666666666666,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Dylan L. [NZ]',
        result: 'L',
        table: 6,
      },
      '2': {
        name: 'Xinyue L. [AU]',
        result: 'L',
        table: 26,
      },
      '3': {
        name: 'BYE',
        result: 'W',
        table: 0,
      },
      '4': {
        name: 'Audrey H. [AU]',
        result: 'L',
        table: 21,
      },
      '5': {
        name: 'Henry E. [AU]',
        result: 'W',
        table: 22,
      },
      '6': {
        name: 'Attila r. [AU]',
        result: 'L',
        table: 20,
      },
    },
  },
  {
    name: 'Harrison B. [AU]',
    placing: 44,
    record: {
      wins: 2,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.3333333333333333,
      opp: 0.4166666666666667,
      oppopp: 0.4888888888888889,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Chevy T. [AU]',
        result: 'W',
        table: 22,
      },
      '2': {
        name: 'Hamish O. [AU]',
        result: 'L',
        table: 12,
      },
      '3': {
        name: 'Tami W. [AU]',
        result: 'W',
        table: 19,
      },
      '4': {
        name: 'Minoru H. [AU]',
        result: 'L',
        table: 8,
      },
      '5': {
        name: 'Niko W. [AU]',
        result: 'L',
        table: 13,
      },
      '6': {
        name: 'Patrick K. [AU]',
        result: 'L',
        table: 18,
      },
    },
  },
  {
    name: 'Chevy T. [AU]',
    placing: 45,
    record: {
      wins: 2,
      losses: 4,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.35,
      oppopp: 0.43611111111111117,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Harrison B. [AU]',
        result: 'L',
        table: 22,
      },
      '2': {
        name: 'Tami W. [AU]',
        result: 'L',
        table: 15,
      },
      '3': {
        name: 'Gabriel C. [AU]',
        result: 'L',
        table: 21,
      },
      '4': {
        name: 'BYE',
        result: 'W',
        table: 0,
      },
      '5': {
        name: 'Xinyue L. [AU]',
        result: 'L',
        table: 21,
      },
      '6': {
        name: 'Jasper W. [AU]',
        result: 'W',
        table: 24,
      },
    },
  },
  {
    name: 'Henry E. [AU]',
    placing: 46,
    record: {
      wins: 1,
      losses: 4,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.36111111111111116,
      oppopp: 0.4570601851851852,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Ollie H. [AU]',
        result: 'L',
        table: 13,
      },
      '2': {
        name: 'Thomas C. [AU]',
        result: 'L',
        table: 16,
      },
      '3': {
        name: 'Rhys B. [AU]',
        result: 'W',
        table: 23,
      },
      '4': {
        name: 'Lachlan A. [AU]',
        result: 'L',
        table: 15,
      },
      '5': {
        name: 'Kai M. [AU]',
        result: 'L',
        table: 22,
      },
      '6': {
        name: 'Isaac S. [AU]',
        result: 'T',
        table: 25,
      },
    },
  },
  {
    name: 'Thomas C. [AU]',
    placing: 47,
    record: {
      wins: 1,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.53125,
      oppopp: 0.4765625,
    },
    decklist: '',
    drop: 4,
    rounds: {
      '1': {
        name: 'Lucan W. [AU]',
        result: 'L',
        table: 20,
      },
      '2': {
        name: 'Henry E. [AU]',
        result: 'W',
        table: 16,
      },
      '3': {
        name: 'Niko W. [AU]',
        result: 'L',
        table: 17,
      },
      '4': {
        name: 'Madeline B. [AU]',
        result: 'L',
        table: 18,
      },
    },
  },
  {
    name: 'Louis K. [AU]',
    placing: 48,
    record: {
      wins: 1,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.47222222222222215,
      oppopp: 0.43749999999999994,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Clark D. [AU]',
        result: 'L',
        table: 12,
      },
      '2': {
        name: 'Wilbur S. [AU]',
        result: 'L',
        table: 25,
      },
      '3': {
        name: 'Dylan S. [AU]',
        result: 'L',
        table: 22,
      },
      '4': {
        name: 'Isaac S. [AU]',
        result: 'W',
        table: 26,
      },
      '5': {
        name: 'Attila r. [AU]',
        result: 'L',
        table: 23,
      },
      '6': {
        name: 'Bella D. [AU]',
        result: 'L',
        table: 22,
      },
    },
  },
  {
    name: 'Tami W. [AU]',
    placing: 49,
    record: {
      wins: 1,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.4583333333333334,
      oppopp: 0.46574074074074073,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Kai lin L. [AU]',
        result: 'L',
        table: 17,
      },
      '2': {
        name: 'Chevy T. [AU]',
        result: 'W',
        table: 15,
      },
      '3': {
        name: 'Harrison B. [AU]',
        result: 'L',
        table: 19,
      },
      '4': {
        name: 'Dingrui L. [AU]',
        result: 'L',
        table: 22,
      },
      '5': {
        name: 'Lincoln C. [AU]',
        result: 'L',
        table: 19,
      },
      '6': {
        name: 'Sophia D. [AU]',
        result: 'L',
        table: 23,
      },
    },
  },
  {
    name: 'Jasper W. [AU]',
    placing: 50,
    record: {
      wins: 1,
      losses: 5,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.40277777777777785,
      oppopp: 0.4425925925925926,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Takumi M. [AU]',
        result: 'L',
        table: 10,
      },
      '2': {
        name: 'Lachlan A. [AU]',
        result: 'L',
        table: 20,
      },
      '3': {
        name: 'Dingrui L. [AU]',
        result: 'L',
        table: 24,
      },
      '4': {
        name: 'Lincoln C. [AU]',
        result: 'L',
        table: 24,
      },
      '5': {
        name: 'Isaac S. [AU]',
        result: 'W',
        table: 25,
      },
      '6': {
        name: 'Chevy T. [AU]',
        result: 'L',
        table: 24,
      },
    },
  },
  {
    name: 'Isaac S. [AU]',
    placing: 51,
    record: {
      wins: 0,
      losses: 5,
      ties: 1,
    },
    resistances: {
      self: 0.25,
      opp: 0.3888888888888889,
      oppopp: 0.4398148148148148,
    },
    decklist: '',
    drop: -1,
    rounds: {
      '1': {
        name: 'Bella D. [AU]',
        result: 'L',
        table: 9,
      },
      '2': {
        name: 'Patrick K. [AU]',
        result: 'L',
        table: 23,
      },
      '3': {
        name: 'Harry D. [AU]',
        result: 'L',
        table: 26,
      },
      '4': {
        name: 'Louis K. [AU]',
        result: 'L',
        table: 26,
      },
      '5': {
        name: 'Jasper W. [AU]',
        result: 'L',
        table: 25,
      },
      '6': {
        name: 'Henry E. [AU]',
        result: 'T',
        table: 25,
      },
    },
  },
  {
    name: 'Henry C. [AU]',
    placing: 52,
    record: {
      wins: 0,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.5,
      oppopp: 0.40625,
    },
    decklist: '',
    drop: 4,
    rounds: {
      '1': {
        name: 'Connor F. [NZ]',
        result: 'L',
        table: 15,
      },
      '2': {
        name: 'Niko W. [AU]',
        result: 'L',
        table: 21,
      },
      '3': {
        name: 'Audrey H. [AU]',
        result: 'L',
        table: 25,
      },
      '4': {
        name: 'Rhys B. [AU]',
        result: null,
        table: 25,
      },
    },
  },
  {
    name: 'Rhys B. [AU]',
    placing: 53,
    record: {
      wins: 0,
      losses: 3,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 0.375,
      oppopp: 0.5078125,
    },
    decklist: '',
    drop: 4,
    rounds: {
      '1': {
        name: 'Winter S. [AU]',
        result: 'L',
        table: 18,
      },
      '2': {
        name: 'Sophia D. [AU]',
        result: 'L',
        table: 24,
      },
      '3': {
        name: 'Henry E. [AU]',
        result: 'L',
        table: 23,
      },
      '4': {
        name: 'Henry C. [AU]',
        result: null,
        table: 25,
      },
    },
  },
  {
    name: 'Kingsley C. [AU]',
    placing: 9999,
    record: {
      wins: 0,
      losses: 1,
      ties: 0,
    },
    resistances: {
      self: 0.25,
      opp: 1,
      oppopp: 0.25,
    },
    decklist: '',
    drop: 1,
    rounds: {
      '1': {
        name: 'Logan O. [AU]',
        result: 'L',
        table: 25,
      },
    },
  },
];
