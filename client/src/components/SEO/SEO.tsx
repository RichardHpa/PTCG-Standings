import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import type { ReactNode } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  children?: ReactNode;
}

export const SEO = ({
  title,
  description = 'Stay ahead of the curve in the Pokemon TCG tournament scene! Effortlessly track tournament standings, follow top players, and plan your strategies with our comprehensive web app.',
  children,
}: SEOProps) => {
  const location = useLocation();

  const pageTitle = useMemo(() => {
    if (location.pathname === '/' || !title) {
      return 'PTCG Standings';
    }

    return `PTCG Standings - ${title}`;
  }, [location.pathname, title]);

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />

      {children}
    </Helmet>
  );
};
