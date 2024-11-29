import { Outlet, Link } from 'react-router-dom';
// import { SEO } from 'components/SEO';
import { TournamentContextProvider } from 'providers/TournamentProvider';

import WorldsLogo from 'images/eventLogos/tcgWorlds2024.webp';
import { Heading } from 'components/Heading';

const worldsCode = '0000128';

export const RawWorlds2025Outlet = () => {
  return (
    <div className="flex flex-col gap-4">
      {/* <SEO title="Worlds 2024" /> */}
      <div className="flex flex-col gap-4 text-center">
        <img
          className="mx-auto h-auto max-w-xs rounded-lg"
          src={WorldsLogo}
          alt="worlds 2024"
        />
        <Link to="/worlds-2024">
          <Heading>Pokemon Worlds 2024</Heading>
        </Link>
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
