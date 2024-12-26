import { Outlet, Link } from 'react-router-dom';
import { SEO } from 'components/SEO';
import { TournamentContextProvider } from 'providers/TournamentProvider';

import { Tabs, NavTab } from 'components/Tabs';

import WorldsLogo from 'images/eventLogos/tcgWorlds2024.webp';
import { Heading } from 'components/Heading';
import { Paragraph } from 'components/Paragraph';

const worldsCode = '0000128';

export const RawWorlds2025Outlet = () => {
  return (
    <div className="flex flex-col gap-4">
      <SEO title="Worlds 2024" />

      <div className="flex flex-col gap-4 text-center">
        <img
          className="mx-auto h-auto max-w-xs rounded-lg"
          src={WorldsLogo}
          alt="worlds 2024"
        />
        <Link to="/worlds-2024">
          <Heading>Pokemon Worlds 2024</Heading>
        </Link>

        <Paragraph align="center">
          View the players who competed in the 2024 Pokemon World Championships
          and see the decks they used to compete.
        </Paragraph>
      </div>

      <div>
        <Tabs>
          <NavTab to="/worlds/2024/standings">Standings</NavTab>
          <NavTab to="/worlds/2024/qualified">Qualified players</NavTab>
        </Tabs>
      </div>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export const Worlds2024Outlet = () => {
  return (
    <TournamentContextProvider tournamentId={worldsCode}>
      <RawWorlds2025Outlet />
    </TournamentContextProvider>
  );
};
