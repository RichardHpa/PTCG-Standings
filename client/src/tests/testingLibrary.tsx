import { render as baseRender } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ColorModeProvider } from 'providers/ColorModeProvider';

export * from '@testing-library/react';

import type { RenderOptions } from '@testing-library/react';
import type { ReactElement, ReactNode } from 'react';

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <ColorModeProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </ColorModeProvider>
  );
};

export const render = (ui: ReactElement, options?: RenderOptions) =>
  baseRender(ui, { wrapper: AllTheProviders, ...options });
