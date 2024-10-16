import { StrictMode, lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { worker } from 'mocks/browser';

import './index.css';

import { ColorModeProvider } from 'providers/ColorModeProvider';

import { BaseLayout } from 'layouts/BaseLayout';

import { Home } from 'pages/Home';
import { About } from 'pages/About';

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
      <ColorModeProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider
            router={router}
            fallbackElement={<FallbackLoader />}
          />
          {import.meta.env.MODE === 'development' && (
            <Suspense fallback={null}>
              <ReactQueryDevtoolsProduction />
            </Suspense>
          )}
        </QueryClientProvider>
      </ColorModeProvider>
    </StrictMode>,
  );
});
