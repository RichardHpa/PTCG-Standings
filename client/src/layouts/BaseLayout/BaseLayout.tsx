import { useEffect } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import { useAnalytics } from 'hooks/useAnalytics';

import { Navbar } from 'components/Navbar';

import type { FC } from 'react';
import type { BaseLayoutProps } from './types';

export const RawBaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  const { sendPageView } = useAnalytics();

  useEffect(() => {
    sendPageView();
  }, [sendPageView]);

  return (
    <div className="flex min-h-screen flex-col">
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
