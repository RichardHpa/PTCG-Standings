import InternationalsLogo from 'images/eventLogos/tcgIC.png';
import RegionalLogo from 'images/eventLogos/tcgRegional.png';
import CupLogo from 'images/eventLogos/tcgCup.png';
import ChallengeLogo from 'images/eventLogos/tcgChallenge.png';
import PlayPokemonLogo from 'images/eventLogos/playPokemon.png';
import RegionalLogo2024 from 'images/eventLogos/tcgRegionals2024.png';
import WorldsLogo from 'images/eventLogos/tcgWorlds.png';
import Worlds2024Logo from 'images/eventLogos/tcgWorlds2024.webp';
import Worlds2023Logo from 'images/eventLogos/tcgWorlds2023.png';

import type { LocalTournamentData } from 'types/tournament';

interface LocalTournamentsMap {
  [key: string]: LocalTournamentData;
}

export const tournamentsMap: LocalTournamentsMap = {
  '0000144': {
    name: 'Toronto Pokémon TCG Regional Championship 2025',
    logo: RegionalLogo2024,
    streams: {
      day1: 'https://www.youtube.com/live/nA3dTOfGE_4?si=aPff71944tlEab8K',
      day2: 'https://www.youtube.com/live/tstzp649G7E?si=vhdQZBhGEoAkPyMk',
    },
    deckAnalysis: {
      masters: {
        day1: 'day1.webp',
        day2: 'day2.webp',
      },
    },
  },
  '0000141': {
    name: 'Stuttgart Pokémon TCG Regional Championship 2025',
    logo: RegionalLogo2024,
    streams: {
      day1: 'https://www.youtube.com/live/G_yBcTFtCyg?si=ulY-jdE7Pl1ro9_6',
      day2: 'https://www.youtube.com/live/5NNrLxeklts?si=vbtzpuV6vg3JcFg2',
    },
    deckAnalysis: {
      masters: {
        day1: 'day1.webp',
        day1BestOfTheRest: 'day1-2.webp',
        day2: 'day2.webp',
        day2BestOfTheRest: 'day2-2.webp',
      },
    },
  },
  '0000140': {
    name: 'Sacramento Pokémon TCG Regional Championship 2025',
    logo: RegionalLogo2024,
    streams: {
      day1: 'https://www.youtube.com/live/Mju3aEWWFT4?si=hsl3wpAHXX4B5LeT',
      day2: 'https://www.youtube.com/live/KO-kiJf2o-k?si=65nbGxtzzpLcJ6bh',
    },
    deckAnalysis: {
      masters: { day1: 'sacramento2025Day1.png', day2: 'day2.webp' },
    },
  },
  '0000139': {
    name: 'Latin America Pokémon TCG International Championship 2025',
    logo: InternationalsLogo,
    streams: {
      day1: 'https://www.youtube.com/live/PCz8aE2zBXg?si=vWECN_8lu_9Oks4F',
      day2: 'https://www.youtube.com/live/oxkvV_o-ync?si=1ECeP6srNdkzorhU',
      day3: 'https://www.youtube.com/live/yL16pc0kkoQ?si=G2NpDP9QZJ1MMfdU',
    },
    deckAnalysis: {
      masters: {
        day1: 'day1.webp',
        day2: 'day2.webp',
      },
    },
  },
  '0000136': {
    name: 'Gdansk Pokémon TCG Regional Championship 2025',
    logo: RegionalLogo2024,
    streams: {
      day1: 'https://www.youtube.com/live/BYFKHN53OEE?si=inPZCUq7JMcPOk9Y',
      day2: 'https://www.youtube.com/live/VPYnXfbjbSo?si=gENix09KE2UBqdl0',
    },
    deckAnalysis: {
      masters: {
        day1: 'day1.webp',
        day1BestOfTheRest: 'day1-2.webp',
        day2: 'day2.webp',
        day2BestOfTheRest: 'day2-2.webp',
      },
    },
  },
  '0000134': {
    name: 'Lille Pokémon TCG Regional Championship 2025',
    logo: RegionalLogo2024,
    streams: {
      day1: 'https://www.youtube.com/live/LVKNtCr6ZOU?si=lUbzSx9WRKsazNeK',
      day2: 'https://www.youtube.com/live/K185AJ27dWU?si=7fU_p7imqoLzwUEQ',
    },
    deckAnalysis: {
      masters: {
        day1: 'day1.jpeg',
        day1BestOfTheRest: 'day1-2.jpeg',
        day2: 'day2.jpeg',
        day2BestOfTheRest: 'day2-2.jpeg',
      },
    },
  },
  '0000133': {
    name: 'Louisville Pokémon TCG Regional Championship 2025',
    logo: RegionalLogo2024,
    streams: {
      day1: 'https://www.youtube.com/live/UdbzjjmkFw0?si=d-3eo9st82gJQwQf',
      day2: 'https://www.youtube.com/live/R6-IhpuPWYc?si=VNTap78UDPA9a3be',
    },
    deckAnalysis: {
      masters: {
        day1: 'day1.webp',
        day2: 'day2.webp',
      },
    },
  },
  '0000132': {
    name: '2025 Lima TCG Special Event',
    logo: PlayPokemonLogo,
    tournamentStatus: 'finished',
    streams: {
      day1: 'https://www.youtube.com/live/DcP6AETngCo?si=ykulvSVR7MBIFdSt',
    },
    notes: (
      <>
        The data for the 2025 Lima TCG Special Event was removed immediately
        after the event ended and we currently have no way to retrieve it. That
        is why there is barely and information about the event. Hopefully the
        event organizers will provide the data in the future.
        <br />
        Currently we only have information about most of the top 8 players. Once
        we have more information we will update it with the rest of the players.
      </>
    ),
  },
  '0000131': {
    name: 'Joinville Pokémon TCG Regional Championship 2025',
    logo: RegionalLogo2024,
  },
  '0000130': {
    name: 'Dortmund Pokémon TCG Regional Championship 2025',
    logo: RegionalLogo2024,
    streams: {
      day1: 'https://www.youtube.com/watch?v=eS6NkXesdcY',
      day2: 'https://www.youtube.com/watch?v=VzoYFKfrsGk',
    },
    deckAnalysis: {
      masters: {
        day1: 'day1.webp',
        day1BestOfTheRest: 'day1-2.webp',
        day2: 'day2.webp',
        day2BestOfTheRest: 'day2-2.webp',
      },
    },
  },
  '0000129': {
    name: 'Baltimore Pokémon TCG Regional Championship 2025',
    logo: RegionalLogo2024,
    streams: {
      day1: 'https://www.youtube.com/watch?v=foyiQqsBV3k',
      day2: 'https://www.youtube.com/watch?v=-Sxb45T3Gfk',
    },
    deckAnalysis: {
      masters: {
        day1: 'day1.webp',
        day1BestOfTheRest: 'day1-2.webp',
        day2: 'day2.webp',
      },
    },
  },
  '0000128': {
    name: '2024 Pokémon TCG World Championship',
    logo: Worlds2024Logo,
    streams: {
      day1: 'https://www.youtube.com/watch?v=rgE9nxOKots',
      day2: 'https://www.youtube.com/watch?v=1dvNxsjIzlY',
      day3: 'https://www.youtube.com/watch?v=M-tQC1AFomU&t=6752s',
    },
    deckAnalysis: {
      masters: {
        day1: 'day1.webp',
        day1BestOfTheRest: 'day1-2.webp',
        day2: 'day2.webp',
      },
    },
  },
  '0000127': {
    name: 'North America Pokémon TCG International Championship 2024',
    logo: InternationalsLogo,
    streams: {
      day1: 'https://www.youtube.com/live/hyob_XuipNY?si=u6OLH6qm7HB_-pAV',
      day2: 'https://www.youtube.com/live/TmhltagmUTE?si=4v9A3XgvERJBd3AA',
      day3: 'https://www.youtube.com/live/WPREQd_mU_0?si=1-MgdtC-PvuiXSHr',
    },
  },
  '0000126': {
    name: 'Bologna Pokémon TCG Special Event 2024',
    logo: PlayPokemonLogo,
    streams: {
      day1: 'https://www.youtube.com/live/oRg1fIzUkGg?si=yk-1dPmixDIzCPQB',
      day2: 'https://www.youtube.com/live/G9axeevXqbU?si=rpZqQ1ifLtgYiG4D',
    },
  },
  '0000125': {
    name: 'Los Angeles Pokémon TCG Regional Championship 2024',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/UkrX8HeNy8Y?si=YehxFZRsECh-JoHz',
      day2: 'https://www.youtube.com/live/LeyUoWOcPVY?si=m2ad4qAl0iH688_z',
    },
  },
  '0000124': {
    logo: RegionalLogo,
  },
  '0000123': {
    name: 'Stockholm Pokémon TCG Regional Championships 2024',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/R6Yzu7f8Huk?si=mx9jyXcnCuD58P7A',
      day2: 'https://www.youtube.com/live/0ad_oRZdjsc?si=eJan32ZgKMk2QpAF',
    },
  },
  '0000122': {
    logo: CupLogo,
  },
  '0000121': {
    name: 'Indianapolis Pokémon TCG Regional Championship 2024',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/-J0klluJdtA?si=nL-hdSNxbjw4d45S',
      day2: 'https://www.youtube.com/live/xet6I-WtoMU?si=RemvFGFEn1lwhLMt',
    },
  },
  '0000120': {
    logo: RegionalLogo,
  },
  // NOTE: check this one as it says its still running
  '0000119': {
    name: 'Charlotte TCG Regionals - Master',
    logo: RegionalLogo,
  },
  '0000118': {
    name: 'Orlando Pokémon TCG Regional Championships 2024',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/v5lXd5hInRs?si=eqeEfskbDFTDwUID',
      day2: 'https://www.youtube.com/live/zvWx9xUFyck?si=2k3pON3_CMUHLW0k',
    },
  },
  '0000117': {
    logo: RegionalLogo,
  },
  '0000116': {
    name: 'Europe Pokémon TCG International Championship 2024',
    logo: InternationalsLogo,
    streams: {
      day1: 'https://www.youtube.com/live/l2XAWWGrC_c?si=AZUBsNhU1Jf-muZJ',
      day2: 'https://www.youtube.com/live/yuEr___E9o0?si=JT2UL2FTy4-26KnZ',
      day3: 'https://www.youtube.com/live/XSYf8J205h8?si=_kGi90cKN0T5O7zP',
    },
  },
  '0000115': {
    name: 'Vancouver Pokémon TCG Regional Championship 2024',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/8ncC-VSiMhQ?si=eK0ZJOTTrNe6e7R-',
      day2: 'https://www.youtube.com/live/nn6bENR5Dhc?si=qLbAseR_4LR2MAsj',
    },
  },
  '0000114': {
    logo: RegionalLogo,
  },
  '0000113': {
    name: 'Utrecht Pokémon TCG Regional Championships 2024',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/jNBkPChtozI?si=GgnRGBkbZ1pn0LUb',
      day2: 'https://www.youtube.com/live/ib6Npo1TcMg?si=ZtAK5z5Pr1V_se7I',
    },
  },
  '0000112': {
    logo: CupLogo,
  },
  '0000111': {
    name: 'Dortmund Pokémon TCG Regional Championship 2024',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/Z5-MunuFlbo?si=F11dzZ2YO8b_mHnK',
      day2: 'https://www.youtube.com/live/Zh6aQdu4R4I?si=yamVCN6NXqgdY-rW',
    },
  },
  '0000110': {
    name: 'Knoxville Pokémon TCG Regional Championship 2024',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/-F4U7Op632k?si=Sdf_saXeKJdK6-nS',
      day2: 'https://www.youtube.com/live/iRL4iq0Samg?si=aYEuci5rcQYA_iEF',
    },
  },
  '0000109': {
    logo: RegionalLogo,
  },
  '0000108': {
    logo: CupLogo,
  },
  '0000107': {
    name: 'Liverpool Pokémon TCG Regional Championships 2024',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/Pcdd3Z_kDmc?si=RyKAHy-HLGpK3D6K2',
      day2: 'https://www.youtube.com/live/ZjXkG550-sQ?si=1rLfkt5BC3q-UcIi',
    },
  },
  '0000106': {
    name: 'Charlotte Pokémon TCG Regional Championships 2024',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/AROobya-y5U?si=OVCpWQPskGLVtpr6',
      day2: 'https://www.youtube.com/live/nZwIQ5hNJL0?si=yp82mswlUpiJ34aP',
    },
  },
  '0000105': {
    name: 'Portland Pokémon TCG Regional Championship 2024',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/pejSE7ww3Og?si=x2KykIc8El5X-SXr',
      day2: 'https://www.youtube.com/live/yn88g-h6xyE?si=8an6AAgukWEHe2QV',
    },
  },
  '0000104': {
    name: 'San Antonio Pokémon TCG Regional Championship 2024',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/D1O9_ZAYxmg?si=QO5BEojSzUvGZqUI',
      day2: 'https://www.youtube.com/live/cBPEAxZgbKA?si=ZkQu_2NpLI9eIwld',
    },
  },
  '0000103': {
    logo: CupLogo,
  },
  '0000102': {
    name: 'Stuttgart Pokémon TCG Regional Championship 2024',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/tKY91zudh2k?si=zFxCXIQPfFEmBF2w',
      day2: 'https://www.youtube.com/live/mQM_nt-zbkc?si=83IMtTFw16H-wsWa',
    },
  },
  '0000101': {
    logo: CupLogo,
  },
  '0000100': {
    logo: RegionalLogo,
  },
  '0000099': {
    name: 'Gdansk Pokémon TCG Regional Championship 2024',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/4y2VRFDd1Us?si=PGSSRDoA8dseWWLX',
      day2: 'https://www.youtube.com/live/T0O9rX7igTg?si=c8Ca5_NXJZnj1VGZ',
    },
  },
  '0000098': {
    logo: CupLogo,
  },
  '0000097': {
    logo: ChallengeLogo,
  },
  '0000096': {
    name: 'Latin America Pokémon TCG International Championship 2024',
    logo: InternationalsLogo,
    streams: {
      day1: 'https://www.youtube.com/live/wL5QLR8XosI?si=Jg_MX2rFq84zglv6',
      day2: 'https://www.youtube.com/live/MGJzz9kG3J4?si=CSNqcHNK56fXRV3C',
      day3: 'https://www.youtube.com/live/4IORXgJo5Kc?si=hB37WcywoE0lBbH6',
    },
  },
  '0000095': {
    name: 'Toronto Pokémon TCG Regional Championships 2024',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/ZSET2iIoMGA?si=1qhVHC6lCg_8kY3D',
      day2: 'https://www.youtube.com/live/-zLt9n-KuCI?si=Wn2qODs5L3dizmeO',
    },
  },
  '0000094': {
    logo: CupLogo,
  },
  '0000093': {
    name: 'Lille Pokémon TCG Regional Championships 2024',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/KbGwD_BzgM4?si=iDuBL4RoTDpXPMCK',
      day2: 'https://www.youtube.com/live/qTU0VHEn38o?si=LWOixezJ58wv7M78',
    },
  },
  '0000092': {
    name: 'Sacramento Pokémon TCG Regional Championship 2024',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/JAU52li5eyk?si=0OHmQ_C-dmVgsK_D',
      day2: 'https://www.youtube.com/live/5rk9E-Teqik?si=mpLwKaNugu0fWqBE',
    },
  },
  '0000091': {
    logo: RegionalLogo,
  },
  '0000090': {
    name: 'Barcelona Pokémon TCG Special Event 2024',
    logo: PlayPokemonLogo,
    streams: {
      day1: 'https://www.youtube.com/live/VrCVh3As0dg?si=pXiDE8eCwUtp94P2',
      day2: 'https://www.youtube.com/live/D21r0u6ayaI?si=EM2xdMO31l_BZIHB',
    },
  },
  '0000089': {
    logo: CupLogo,
  },
  '0000088': {
    name: 'Pittsburgh Pokémon TCG Regional Championships 2024',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/NaCNeOxWPTA?si=FvDPOVmPrq9gzhdE',
      day2: 'https://www.youtube.com/live/T5WApf6T8xc?si=UTjlom-VlwGkJfmT',
    },
  },
  '0000087': {
    name: '2023 Pokémon TCG World Championships Day 2',
    logo: Worlds2023Logo,
    streams: {
      day1: 'https://www.youtube.com/live/TPCZwMOAq-s?si=n-jZIjh-WxNohDun',
      day2: 'https://www.youtube.com/live/fyE7MHrXsow?si=uQvzJETxZ8gGHab2',
      day3: 'https://www.youtube.com/live/gE0JqjVllsM?si=UbqoMN5T0KTQUiey',
    },
  },
  // NOTE: check this one as it says its still running
  '0000086': {
    name: '2023 Pokémon TCG World Championships Day 1',
    logo: Worlds2023Logo,
    streams: {
      day1: 'https://www.youtube.com/live/TPCZwMOAq-s?si=n-jZIjh-WxNohDun',
      day2: 'https://www.youtube.com/live/fyE7MHrXsow?si=uQvzJETxZ8gGHab2',
      day3: 'https://www.youtube.com/live/gE0JqjVllsM?si=UbqoMN5T0KTQUiey',
    },
  },
  '0000085': {},
  '0000084': {
    logo: PlayPokemonLogo,
  },
  '0000083': {
    logo: PlayPokemonLogo,
  },
  '0000082': {
    logo: PlayPokemonLogo,
  },
  '0000081': {
    logo: CupLogo,
  },
  '0000080': {
    logo: CupLogo,
  },
  '0000079': {
    logo: RegionalLogo,
  },
  '0000078': {
    name: 'North America Pokémon TCG International Championship',
    logo: InternationalsLogo,
    streams: {
      day1: 'https://www.youtube.com/live/WVIvYnJWJuA?si=9B9UOSe9bUD3AYdP',
      day2: 'https://www.youtube.com/live/YM4rygL2-TM?si=Gn3mJmnF1GgeMGIk',
      day3: 'https://www.youtube.com/live/ciou1z0a97g?si=ft_Dkow3t-7CVxt8',
    },
  },
  '0000077': {
    name: 'Fresno Pokémon TCG Regional Championship',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/g-_obSyesyY?si=fq2jDxpLhKbF5vna',
      day2: 'https://www.youtube.com/live/3O1GRuoT-oQ?si=seCCA51i78rxFA_m',
    },
  },
  '0000076': {
    name: 'Milwaukee Pokémon TCG Regional Championship',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/wZNzZ7ImuOw?si=EDTMh4UCqI4zxm3a',
      day2: 'https://www.youtube.com/live/slkkadA7vXs?si=5DVZqevgTNZSgVpd',
    },
  },
  '0000075': {
    logo: PlayPokemonLogo,
  },
  '0000074': {
    name: 'Hartford Pokémon TCG Regional Championship',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/3p-_5ayWYJY?si=ccStPXf3V9odx230',
    },
  },
  '0000073': {
    logo: RegionalLogo,
  },
  '0000072': {
    logo: CupLogo,
  },

  '0000071': {
    logo: RegionalLogo,
  },
  '0000070': {
    logo: RegionalLogo,
  },
  '0000069': {
    logo: RegionalLogo,
  },
  '0000068': {
    logo: RegionalLogo,
  },
  '0000067': {
    logo: RegionalLogo,
  },
  '0000066': {
    logo: PlayPokemonLogo,
  },
  '0000065': {
    logo: RegionalLogo,
  },
  '0000064': {},
  '0000063': {
    logo: InternationalsLogo,
  },
  '0000062': {
    logo: InternationalsLogo,
  },
  '0000061': {
    logo: RegionalLogo,
  },
  '0000060': {
    logo: RegionalLogo,
  },
  '0000059': {
    logo: InternationalsLogo,
  },
  '0000058': {
    logo: RegionalLogo,
  },
  '0000057': {
    logo: RegionalLogo,
  },
  '0000056': {
    logo: RegionalLogo,
  },
  '0000055': {
    logo: InternationalsLogo,
  },
  '0000054': {
    logo: RegionalLogo,
  },
  // Dont know why this is out of order this "should" be after 0000092
  '0000053': {
    name: 'Peoria Pokémon TCG Regional Championship 2024',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/ds2ChgOzEx0?si=owI7mGUsZEgyLi-1',
      day2: 'https://www.youtube.com/live/nw6-SAz6-S8?si=AhdFaVYMDfcnH28-',
    },
  },
  '0000052': {
    name: 'Portland Pokémon TCG Regional Championship',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/P9MgmBV0Ck8?si=U4k2-MsoCr650uhi',
      day2: 'https://www.youtube.com/live/bmSN1RdGATM?si=sb81U-CgI3RrBJUB',
    },
  },
  '0000051': {
    logo: RegionalLogo,
  },
  '0000050': {
    logo: CupLogo,
  },
  '0000049': {
    name: 'Europe Pokémon TCG International Championship 2023',
    logo: InternationalsLogo,
    streams: {
      day1: 'https://www.youtube.com/live/PuYUI3xDnkQ?si=EfpC3FnXyJAPr6v4',
      day2: 'https://www.youtube.com/live/H5lJiMFXZBo?si=zmycYShIvL-46Aop',
      day3: 'https://www.youtube.com/live/SUqenw0Bg0U?si=YiyrmFGDptQbH2Bw',
    },
  },
  '0000048': {
    name: 'Fort Wayne Pokémon TCG Regional Championship',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/yxOfKb6lhww?si=mbbHnIVjJ_qVOpPF',
      day2: 'https://www.youtube.com/live/9lMDuugG49c?si=YuoQztdIwhUuYdKh',
    },
  },
  '0000047': {
    logo: RegionalLogo,
  },
  '0000046': {
    name: 'Charlotte Pokémon TCG Regional Championship',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/NHKaYvjCdNU?si=r4QE25ppL6wRKW1v',
      day2: 'https://www.youtube.com/live/o7hvh6xxt8c?si=Pm-AQbLOqyUaOwHZ',
    },
  },
  '0000045': {
    logo: PlayPokemonLogo,
  },
  '0000044': {
    name: 'Vancouver Pokémon TCG Regional Championship',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/3nT5-ZDIl5U?si=MJCpN1XLGNkt2JtX',
      day2: 'https://www.youtube.com/live/SvQsAeHQYfM?si=Yo1Disle2KVc5DTU',
    },
  },
  '0000043': {
    logo: RegionalLogo,
  },
  '0000042': {
    logo: RegionalLogo,
  },
  '0000041': {
    name: 'Knoxville Pokémon TCG Regional Championship',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/vtxZ_juKc6I?si=n2crLS9n7cKm_mDc',
      day2: 'https://www.youtube.com/live/7otlrLUmXbE?si=Bf45hFqaLv49c6FV',
    },
  },
  '0000040': {
    logo: RegionalLogo,
  },
  '0000039': {
    name: 'Oceania Pokémon TCG International Championship',
    logo: InternationalsLogo,
    streams: {
      day1: 'https://www.youtube.com/live/RRcPBSX2hqU?si=kunP5ZE4TLw6uRZa',
      day2: 'https://www.youtube.com/live/SOgaVQ_XxS0?si=Uw4jqmy7e4tFQXEl',
      day3: 'https://www.youtube.com/live/wqo1ZqBFquw?si=cCRASQR6AVJM2xmw',
    },
  },
  '0000038': {
    name: 'Orlando Pokémon TCG Regional Championship',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/mqrR-xpZNyk?si=Bw6qwxii-yLqZ-r5',
      day2: 'https://www.youtube.com/live/MRPiKRusafw?si=4dMJjfl1ogqdv5yI',
    },
  },
  '0000037': {
    logo: RegionalLogo,
  },
  '0000036': {
    name: 'San Diego Pokémon TCG Regional Championship',
    logo: RegionalLogo,
    streams: {
      day2: 'https://www.youtube.com/live/Kahu0ZJomdY?si=dFMIttbOEhynHZrI',
      day1: 'https://www.youtube.com/live/2CibbCEaBjk?si=8DxfF5qc-JqQ7KrG',
    },
  },
  '0000035': {
    name: 'Arlington Pokémon TCG Regional Championship',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/8Ja2uZ4_P7w?si=AsReyf3RrKUYgXZa',
      day2: 'https://www.youtube.com/live/maR5Ub3qYtw?si=4iwl61GwD13XT95z',
    },
  },
  '0000034': {
    name: 'Toronto Pokémon TCG Regional Championship',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/2k8blQ0Z4_s?si=e9-5k9hwWsesZUwu',
      day2: 'https://www.youtube.com/live/XRCYGd_C1SM?si=hqg6EYQZxewDz9xi',
    },
  },
  '0000033': {
    logo: RegionalLogo,
  },
  '0000032': {
    logo: RegionalLogo,
  },
  '0000031': {
    name: 'Latin America Pokémon TCG International Championship',
    logo: InternationalsLogo,
    streams: {
      day1: 'https://www.youtube.com/live/_hvHrPvAKJw?si=hpF7VvNHt-FRjRKB',
      day2: 'https://www.youtube.com/live/Z7LzC83Xf_Q?si=gT5UabNxzdNcMqJS',
      day3: 'https://www.youtube.com/live/B-A2hu7O_AE?si=Gy3VspSxA8CT3CkO',
    },
  },
  '0000030': {
    logo: RegionalLogo,
  },
  '0000029': {
    logo: RegionalLogo,
  },
  '0000028': {
    name: 'Salt Lake City Pokémon TCG Regional Championship 2023',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/5FHFqrXdGiU?si=SNHYgtfH8r-UwOd8',
      day2: 'https://www.youtube.com/live/aXJl0rSNuaY?si=IkQg-s1XiE9l4rm7',
    },
  },
  '0000027': {
    name: 'Peoria Pokémon TCG Regional Championship',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/5FHFqrXdGiU?si=vxKzEmWhKpHtfHTt',
      day2: 'https://www.youtube.com/live/EEWkrNxkXNE?si=Cln5uKAcXcttw-CE',
    },
  },
  '0000026': {
    name: 'Baltimore Pokémon TCG Regional Championship',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/Ec-LN13YJY4?si=tRNa1v0CRqWLcwQc',
      day2: 'https://www.youtube.com/live/wL2ECPxs45o?si=bP7CQuXNnqs1UTXI',
    },
  },
  '0000025': {
    logo: RegionalLogo,
  },
  '0000024': {
    logo: PlayPokemonLogo,
  },
  '0000023': {
    name: 'Day 1 2022 Pokémon TCG World Championships',
    logo: WorldsLogo,
    streams: {
      day4: 'https://www.youtube.com/live/kvMjvtzIQao?si=d6VWyVis-ShvMa4K',
      day3: 'https://www.youtube.com/live/ZjSnjLdbcGQ?si=t7j1_flYoNuAimgS',
      day2: 'https://www.youtube.com/live/prRcEW_hR48?si=HMAauZxLLDFP-fza',
      day1: 'https://www.youtube.com/live/ucApsm78D4g?si=4b9YhW7VK9GP5gKx',
    },
  },
  '0000022': {
    name: '2022 Pokémon TCG World Championships',
    logo: WorldsLogo,
    streams: {
      day4: 'https://www.youtube.com/live/kvMjvtzIQao?si=d6VWyVis-ShvMa4K',
      day3: 'https://www.youtube.com/live/ZjSnjLdbcGQ?si=t7j1_flYoNuAimgS',
      day2: 'https://www.youtube.com/live/prRcEW_hR48?si=HMAauZxLLDFP-fza',
      day1: 'https://www.youtube.com/live/ucApsm78D4g?si=4b9YhW7VK9GP5gKx',
    },
  },
  '0000021': {},
  '0000020': {},
  '0000019': {},
  '0000018': {
    name: '2022 Pokémon TCG North America International Championships',
    logo: InternationalsLogo,
    streams: {
      day1: 'https://www.youtube.com/live/c2iEVFjbnKI?si=RMWPFnt26zqB-ce4',
      day2: 'https://www.youtube.com/live/lIGjm7PfzAI?si=2Azb2rLewPoj2lCj',
      day3: 'https://www.youtube.com/live/CNr_WN-IKlA?si=mcZ5Iw1jNPe9DvN5',
    },
  },
  '0000017': {
    name: 'Milwaukee TCG Regional Championship 2022',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/rHWEyVXegB4?si=P_wA_r1910B7W19V',
      day2: 'https://www.youtube.com/live/aYRL3tb2s6A?si=ubD_5K32g4yjKafE',
    },
  },
  '0000016': {
    logo: RegionalLogo,
  },
  '0000015': {
    logo: PlayPokemonLogo,
  },
  '0000014': {
    logo: RegionalLogo,
  },
  '0000013': {
    name: 'Vancouver TCG Regional Championship 2022',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/iorLAeyoNIU?si=c8vFetPBc5qxDXJN',
    },
  },
  '0000012': {
    logo: RegionalLogo,
  },
  '0000011': {
    logo: RegionalLogo,
  },
  '0000010': {
    logo: RegionalLogo,
  },
  '0000009': {
    name: 'Secaucus TCG Regional Championship 2022',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/dfPCSXT7OLA?si=ae3i0_IorC-xgVdB',
      day2: 'https://www.youtube.com/live/3x7vbDJKYGo?si=bOv9M21JTUYe5isn',
    },
  },
  '0000008': {
    logo: RegionalLogo,
  },
  '0000007': {
    logo: PlayPokemonLogo,
  },
  '0000006': {
    name: 'Indianapolis TCG Regional Championship 2022',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/3rcQitovFRc?si=9hcObfajDOvKT6lS',
      day2: 'https://www.youtube.com/live/MVYhJDI4SXQ?si=6CVuuauWaNRZemA-',
    },
  },
  '0000005': {
    name: '2022 Pokémon TCG European International Championships',
    logo: InternationalsLogo,
    streams: {
      day1: 'https://www.youtube.com/watch?v=GohFWugguKs',
      day2: 'https://www.youtube.com/watch?v=pGMFKZooeT4',
      day3: 'https://www.youtube.com/watch?v=KaVpD6qY0C0',
    },
  },
  '0000004': {
    logo: RegionalLogo,
  },
  '0000003': {
    logo: RegionalLogo,
  },
  '0000002': {
    name: 'Salt Lake City TCG Regional Championship 2022',
    logo: RegionalLogo,
    streams: {
      day1: 'https://www.youtube.com/live/yRmzYiIdC4g?si=Y6byFQ52YO1Ho4lK',
      day2: 'https://www.youtube.com/live/SeCtWrrvxmg?si=Dpu4grvTMVw8wLdo',
    },
  },
  '0000001': {
    logo: RegionalLogo,
  },
};
