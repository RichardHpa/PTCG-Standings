import { Outlet, ScrollRestoration } from 'react-router-dom';

import { Navbar } from 'components/Navbar';

export const BaseLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-white text-black dark:bg-gray-900 dark:text-gray-200">
      <Navbar />

      <div className="container mx-auto flex flex-grow flex-col px-4 py-12">
        <Outlet />
      </div>

      <ScrollRestoration />
    </div>
  );
};
