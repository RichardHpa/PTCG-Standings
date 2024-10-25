import clsx from 'clsx';
import { NavLink as RouterNavLink } from 'react-router-dom';

import { navLinkClasses } from './navLinkClasses';

import type { FC } from 'react';
import type { NavLinkProps } from './types';

export const NavLink: FC<NavLinkProps> = ({ to, children, onClick }) => {
  return (
    <RouterNavLink
      to={to}
      end
      onClick={onClick}
      className={({ isActive, isPending }) =>
        clsx(
          navLinkClasses.base,
          isActive && navLinkClasses.isActive,
          !isActive && navLinkClasses.isInactive,
          isPending && navLinkClasses.isPending,
        )
      }
    >
      {children}
    </RouterNavLink>
  );
};
