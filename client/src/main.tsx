import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import './index.css';

import { LoadingPokeball } from 'components/LoadingPokeball';
import { Heading } from 'components/Heading';
import { FallbackError } from 'errors/FallbackError';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <FallbackError />,
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

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex min-h-screen flex-col bg-white text-black dark:bg-gray-900 dark:text-gray-200">
      <RouterProvider router={router} fallbackElement={<FallbackLoader />} />
    </div>
  </StrictMode>,
);
