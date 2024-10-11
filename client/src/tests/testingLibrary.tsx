import { render as baseRender } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

export * from '@testing-library/react';

import type { RenderOptions } from '@testing-library/react';
import type { ReactElement } from 'react';

export const render = (ui: ReactElement, options?: RenderOptions) =>
  baseRender(ui, { wrapper: BrowserRouter, ...options });
