import { useCallback, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { Button } from 'components/Button';
import { BuyMeABoosterButton } from 'components/BuyMeABoosterButton';
import { ThemeToggle } from 'components/ThemeToggle';
import { NavLink } from 'components/NavLink';
import { PinnedPlayerDrawer } from 'components/PinPlayer/PinnedPlayerDrawer';

export const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 960) {
        setIsExpanded(false);
      }
    });
  }, []);

  const onNavItemClick = useCallback(() => {
    if (isExpanded) {
      setIsExpanded(false);
    }
  }, [isExpanded]);

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="border-b border-gray-200 bg-white py-2.5 dark:border-gray-600 dark:bg-gray-800">
        <div className="container mx-auto flex flex-wrap items-center px-4 lg:gap-4">
          <Link to="/" className="flex flex-1 items-center hover:underline">
            <img
              src="/logo192.png"
              className="mr-3 h-9"
              alt="PTCG Standings.live"
            />
            <span
              className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
              role="heading"
            >
              PTCG Standings
            </span>
          </Link>

          <div className="flex items-center lg:order-2">
            <PinnedPlayerDrawer />

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
              onClick={e => {
                e.currentTarget.blur();
                toggleExpanded();
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={clsx(
              'w-full items-center justify-between lg:order-1 lg:flex lg:w-auto',
              !isExpanded && 'hidden',
            )}
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col gap-2 font-medium lg:mt-0 lg:flex-row lg:items-center lg:gap-4">
              <li className="order-1 lg:hidden">
                <NavLink to="/" onClick={onNavItemClick}>
                  Home
                </NavLink>
              </li>
              <li className="order-4 lg:order-1">
                <Link to="worlds/2024" onClick={onNavItemClick}>
                  <Button color="secondary">Worlds 2024</Button>
                </Link>
              </li>
              <li className="order-2 lg:order-2">
                <NavLink to="about" onClick={onNavItemClick}>
                  About
                </NavLink>
              </li>
              <li className="order-3 lg:order-3">
                <NavLink to="tournaments" onClick={onNavItemClick}>
                  Tournaments
                </NavLink>
              </li>
              <li className="order-5 lg:order-4">
                <BuyMeABoosterButton />
              </li>
              <li className="order-6 lg:order-5">
                <ThemeToggle />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
