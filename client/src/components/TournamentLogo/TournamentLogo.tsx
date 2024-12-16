import { useMemo } from 'react';

import { tournamentsMap } from 'constants/tournaments';

import InternationalsLogo from 'images/eventLogos/tcgIC.png';
import RegionalLogo from 'images/eventLogos/tcgRegional.png';
import CupLogo from 'images/eventLogos/tcgCup.png';
import ChallengeLogo from 'images/eventLogos/tcgChallenge.png';
import PlayPokemonLogo from 'images/eventLogos/playPokemon.png';
import Worlds2024Logo from 'images/eventLogos/tcgWorlds2024.webp';
import Worlds2023Logo from 'images/eventLogos/tcgWorlds2023.png';

import RegionalLogo2024 from 'images/eventLogos/tcgRegionals2024.png';
import InternationalsLogo2024 from 'images/eventLogos/tcgInternationals2024.png';

import type { FC } from 'react';
import type { TournamentLogoProps } from './types';

const tournamentLogoMap = {
  '2025': {
    Internationals: InternationalsLogo2024,
    Regionals: RegionalLogo2024,
  },
  'pre-2025': {
    Internationals: InternationalsLogo,
    Regionals: RegionalLogo,
  },
  Cup: CupLogo,
  Challenge: ChallengeLogo,
  PlayPokemon: PlayPokemonLogo,
  '2024Worlds': Worlds2024Logo,
  '2023Worlds': Worlds2023Logo,
};

const ifStringContains = (str: string, substr: string) =>
  str.toLowerCase().includes(substr.toLowerCase());

export const TournamentLogo: FC<TournamentLogoProps> = ({ tournamentName }) => {
  const logo = useMemo(() => {
    if (tournamentsMap[tournamentName]?.logo) {
      return tournamentsMap[tournamentName].logo;
    }

    if (ifStringContains(tournamentName, 'World')) {
      if (ifStringContains(tournamentName, '2024')) {
        return tournamentLogoMap['2024Worlds'];
      }
      if (ifStringContains(tournamentName, '2023')) {
        return tournamentLogoMap['2023Worlds'];
      }
    }

    if (ifStringContains(tournamentName, '2025')) {
      if (ifStringContains(tournamentName, 'International')) {
        return tournamentLogoMap['2025'].Internationals;
      }
      if (ifStringContains(tournamentName, 'Regional')) {
        return tournamentLogoMap['2025'].Regionals;
      }
    }

    if (ifStringContains(tournamentName, 'International')) {
      return tournamentLogoMap['pre-2025'].Internationals;
    }
    if (ifStringContains(tournamentName, 'Regional')) {
      return tournamentLogoMap['pre-2025'].Regionals;
    }
    if (ifStringContains(tournamentName, 'Cup')) {
      return tournamentLogoMap.Cup;
    }
    if (ifStringContains(tournamentName, 'Challenge')) {
      return tournamentLogoMap.Challenge;
    }

    return tournamentLogoMap.PlayPokemon;
  }, [tournamentName]);
  if (!logo) return null;
  return <img src={logo} alt={tournamentName} className="w-16 self-start" />;
};
