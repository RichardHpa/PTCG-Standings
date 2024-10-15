import { Link } from 'react-router-dom';

import { Button, IconButton } from 'components/Button';
import { BuyMeABoosterButton } from 'components/BuyMeABoosterButton';
import { ThemeToggle } from 'components/ThemeToggle';
import { NavLink } from 'components/NavLink';

import { PinIcon } from 'icons/PinIcon';

export const Navbar = () => {
  return (
    <nav className="border-gray-200 bg-white dark:bg-gray-900">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4 md:justify-center lg:justify-between">
        <Link
          to="/"
          className="flex items-center space-x-3 hover:underline rtl:space-x-reverse"
        >
          <img src="/logo192.png" className="h-10" alt="PTCG Standings.live" />
          <span
            className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white"
            role="heading"
          >
            PTCG Standings
          </span>
        </Link>

        <div className="flex gap-2">
          <ul className="flex items-center gap-2">
            <li>
              <Button>Worlds 2024</Button>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="tournaments">Tournaments</NavLink>
            </li>
            <li>
              <BuyMeABoosterButton />
            </li>
            <li>
              <ThemeToggle />
            </li>
            <li>
              <IconButton
                icon={<PinIcon />}
                alt="View pinned players"
                variant="ghost"
                color="alternative"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
