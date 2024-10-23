import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

import { navTabClasses } from './navTabClasses';

import type { FC } from 'react';
import type { NavTab as NavTabProps } from './types';

export const NavTab: FC<NavTabProps> = ({ to, children, active }) => {
  return (
    <li className="me-2">
      <NavLink
        to={to}
        className={({ isActive }) =>
          clsx(navTabClasses.base, (isActive || active) && navTabClasses.active)
        }
      >
        {children}
      </NavLink>
    </li>
  );
};
