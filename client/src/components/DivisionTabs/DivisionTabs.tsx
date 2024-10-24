import { useMemo } from 'react';
import clsx from 'clsx';
import { Link, useParams } from 'react-router-dom';

import { divisionTabClasses } from './divisionTabClasses';

import { formatDivisionName } from 'helpers/formatDivisionName';

import { orderedDivisions } from 'constants/divisions';

import type { FC } from 'react';
import type { DivisionTabsProps } from './types';
import type { Division } from 'types/divisions';

export const DivisionTabs: FC<DivisionTabsProps> = ({ divisions }) => {
  const { division = 'masters' } = useParams() as { division: Division };

  const validTabs = useMemo(() => {
    const test = Object.keys(divisions) as Array<
      keyof DivisionTabsProps['divisions']
    >;
    const filtered = test.filter(key => {
      const division = divisions[key];
      return division;
    });

    const fixNames = filtered.map(division => {
      const label = formatDivisionName(division);
      return {
        division: division,
        label,
      };
    });

    const sorted = fixNames.sort((a, b) => {
      return (
        orderedDivisions.indexOf(a.division) -
        orderedDivisions.indexOf(b.division)
      );
    });

    return sorted;
  }, [divisions]);

  if (validTabs.length <= 1) {
    return null;
  }

  return (
    <div>
      <ul className="flex rounded-lg text-center text-sm font-medium text-gray-500 shadow dark:divide-gray-700 dark:text-gray-400">
        {validTabs.map((tab, index) => {
          return (
            <li key={index} className="focus-within:z-10">
              <Link
                to={`${tab.division}`}
                onClick={e => {
                  e.currentTarget.blur();
                }}
                className={clsx(
                  divisionTabClasses.base,
                  index === 0 && divisionTabClasses.first,
                  index === validTabs.length - 1 && divisionTabClasses.last,
                  tab.division === division && divisionTabClasses.active,
                  tab.division !== division && divisionTabClasses.inactive,
                )}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
