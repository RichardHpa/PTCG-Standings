import { firstLetterToUppercase } from 'helpers/firstLetterToUppercase';

import type { Division } from 'types/divisions';

export const formatDivisionName = (division: Division) => {
  if (division === 'juniorsseniors') {
    return 'Juniors & Seniors';
  }
  return firstLetterToUppercase(division);
};
