import { render as baseRender } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { ColorModeProvider } from 'providers/ColorModeProvider';
import { PinnedPlayersProvider } from 'providers/PinnedPlayersProvider';

export * from '@testing-library/react';

import type { RenderOptions } from '@testing-library/react';
import type { ReactElement, ReactNode } from 'react';

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  // define a `QueryClient` instance to ensure we can test components that make use of `@tanstack/react-query`
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // means the api will only be called once per test
        retry: false,
      },
    },
  });

  return (
    <ColorModeProvider>
      <QueryClientProvider client={queryClient}>
        <PinnedPlayersProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </PinnedPlayersProvider>
      </QueryClientProvider>
    </ColorModeProvider>
  );
};

export const render = (ui: ReactElement, options?: RenderOptions) =>
  baseRender(ui, { wrapper: AllTheProviders, ...options });
