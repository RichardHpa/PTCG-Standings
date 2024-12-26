import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { worker } from 'mocks/browser';
import { HelmetProvider } from 'react-helmet-async';

import './index.css';

import { ColorModeProvider } from 'providers/ColorModeProvider';
import { PinnedPlayersProvider } from 'providers/PinnedPlayersProvider';

import { BaseLayout } from 'layouts/BaseLayout';

import { Home } from 'pages/Home';
import { About } from 'pages/About';
import { Tournaments } from 'pages/Tournaments';
import {
  // Tournament,
  tournamentLoader,
  TournamentOutlet,
} from 'pages/Tournament';
import { Streams } from 'pages/Tournament/Streams';
import { Stats } from 'pages/Tournament/Stats';
import { Standings, StandingsError } from 'pages/Tournament/Standings';
import { Rounds } from 'pages/Tournament/Rounds';
import { Parings } from 'pages/Tournament/Parings';
import { TopCut } from 'pages/Tournament/TopCut';
import { DivisionOutlet, divisionLoader } from 'pages/Tournament/Division';
import {
  Player,
  playerLoader,
  PlayerOutlet,
  Decklist,
} from 'pages/Tournament/Division/Player';
import {
  // Worlds2024,
  Worlds2024Outlet,
  Qualified,
} from 'pages/Worlds/Worlds2024';

import { LoadingPokeball } from 'components/LoadingPokeball';
import { Heading } from 'components/Heading';
import { FallbackError } from 'errors/FallbackError';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10, // 10 minutes
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <FallbackError />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'worlds',
        element: <Outlet />,
        children: [
          {
            path: '2024',
            element: <Worlds2024Outlet />,
            children: [
              {
                index: true,
                element: <Navigate to="standings" replace />,
              },
              {
                path: 'standings',
                element: <DivisionOutlet />,
                children: [
                  {
                    index: true,
                    element: <Standings />,
                  },
                  {
                    path: ':division',
                    element: <Standings />,
                  },
                ],
              },
              {
                path: 'qualified',
                element: <DivisionOutlet />,
                children: [
                  {
                    index: true,
                    element: <Qualified />,
                  },
                  {
                    path: ':division',
                    element: <Qualified />,
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: 'tournaments',
        children: [
          {
            index: true,
            element: <Tournaments />,
          },
          {
            path: ':tournamentId',
            element: <TournamentOutlet />,
            loader: tournamentLoader,

            children: [
              {
                index: true,
                // element: <Tournament />,
                element: <Navigate to="standings" replace />,
              },
              {
                path: 'streams',
                element: <Streams />,
              },
              {
                path: 'stats',
                element: <DivisionOutlet />,
                children: [
                  {
                    index: true,
                    element: <Stats />,
                  },
                  {
                    path: ':division',
                    loader: divisionLoader,
                    element: <Stats />,
                  },
                ],
              },
              {
                path: 'rounds',
                element: <DivisionOutlet />,
                children: [
                  {
                    index: true,
                    element: <Rounds />,
                  },
                  {
                    path: ':division',
                    loader: divisionLoader,
                    element: <Rounds />,
                  },
                ],
              },
              {
                path: 'standings',
                errorElement: <StandingsError />,
                element: <DivisionOutlet />,
                children: [
                  {
                    index: true,
                    element: <Standings />,
                  },
                  {
                    path: ':division',
                    loader: divisionLoader,
                    element: <Standings />,
                  },
                ],
              },
              {
                path: 'top_cut',
                element: <DivisionOutlet />,
                children: [
                  {
                    index: true,
                    element: <TopCut />,
                  },
                  {
                    path: ':division',
                    loader: divisionLoader,
                    element: <TopCut />,
                  },
                ],
              },
              {
                path: 'live',
                element: <DivisionOutlet />,
                children: [
                  {
                    index: true,
                    element: <Parings />,
                  },
                  {
                    path: ':division',
                    loader: divisionLoader,
                    element: <Parings />,
                  },
                ],
              },
              {
                path: ':division/:playerName',
                loader: playerLoader,
                element: <PlayerOutlet />,
                children: [
                  {
                    index: true,
                    loader: playerLoader,
                    element: <Player />,
                  },
                  {
                    path: 'decklist',
                    element: <Decklist />,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <FallbackError />,
  },
]);

const FallbackLoader = () => (
  <div className="flex h-full w-full flex-1 flex-col items-center justify-center">
    <LoadingPokeball alt="Loading app" size="100" />
    <Heading level="2" className="mt-4">
      Loading PTCG Standings...
    </Heading>
  </div>
);

const ReactQueryDevtoolsProduction = lazy(() =>
  import('@tanstack/react-query-devtools/build/modern/production.js').then(
    d => ({
      default: d.ReactQueryDevtools,
    }),
  ),
);

const allowedPaths = [
  '/sprites/',
  '/logo192.png',
  'src/images/',
  '/localData/',
  '/node_modules/',
  'chrome-extension://',
];

const deferRender = async () => {
  // we only want MSW to start if we are only running the client
  if (import.meta.env.VITE_MSW === 'true') {
    await worker.start({
      onUnhandledRequest(request, print) {
        if (allowedPaths.some(path => request.url.includes(path))) {
          return;
        }

        // Otherwise, print an unhandled request warning.
        print.warning();
      },
    });
  }
};

deferRender().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <HelmetProvider>
        <ColorModeProvider>
          <QueryClientProvider client={queryClient}>
            <PinnedPlayersProvider>
              <RouterProvider
                router={router}
                fallbackElement={<FallbackLoader />}
              />
              {import.meta.env.MODE === 'development' && (
                <Suspense fallback={null}>
                  <ReactQueryDevtoolsProduction />
                </Suspense>
              )}
            </PinnedPlayersProvider>
          </QueryClientProvider>
        </ColorModeProvider>
      </HelmetProvider>
    </StrictMode>,
  );
});
