import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Navbar } from 'components/Navbar';
import { Heading } from 'components/Heading';

import { usePinnedPlayersContext } from 'providers/PinnedPlayersProvider';

import type { FC } from 'react';
import type { BaseLayoutProps } from './types';

export const RawBaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  const { localStorageValue } = usePinnedPlayersContext();

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-black dark:bg-gray-900 dark:text-gray-200">
      <Navbar />

      <div className="container mx-auto flex flex-grow flex-col px-4 py-24">
        {/* THIS IS JUST FOR TESTING */}

        <div className="mb-4 flex flex-col gap-4 rounded-lg bg-slate-800 p-4">
          <Heading>Local Storage Values</Heading>
          <pre>{JSON.stringify(localStorageValue, null, 2)}</pre>

          {/* <Heading>Active pinned players</Heading> */}
          {/* {JSON.stringify(activePinnedPlayers)} */}
        </div>

        {children}
      </div>

      <ScrollRestoration />
    </div>
  );
};

export const BaseLayout = () => {
  return (
    <RawBaseLayout>
      <Outlet />
    </RawBaseLayout>
  );
};
