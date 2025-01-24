import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Navbar } from 'components/Navbar';
import { Notice } from 'components/Notice';

import type { FC } from 'react';
import type { BaseLayoutProps } from './types';

export const RawBaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <div className="container mx-auto flex flex-grow flex-col px-4 py-24">
        <div className="mb-2">
          <Notice dismissible>
            Welcome to the beta launch of V2 of PTCG Standings. As you an see
            there has been quite a few changes to the site. The big one is the
            ability to filter tournaments more, as well as being able to check
            out some statistics about tournaments that have already finished.
            <br />I have done quite a bit of testing myself but there are bound
            to be some bugs. If you find any please let me know on via our new X
            account at{' '}
            <a
              href="https://x.com/PTCG_Standing"
              target="_blank"
              className="underline"
            >
              @PTCG_Standing
            </a>
            .
            <br /> <br />
            I hope you enjoy the new site and I look forward to hearing any
            feedback you have. <br /> <br />- Richard from Ptcg Standings
          </Notice>
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
