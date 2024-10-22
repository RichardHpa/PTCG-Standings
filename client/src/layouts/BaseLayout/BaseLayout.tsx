import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Navbar } from 'components/Navbar';

import type { FC } from 'react';
import type { BaseLayoutProps } from './types';

export const RawBaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black dark:bg-gray-900 dark:text-gray-200">
      <Navbar />

      <div className="container mx-auto flex flex-grow flex-col px-4 py-24">
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
