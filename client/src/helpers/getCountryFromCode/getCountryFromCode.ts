import { getCountryData } from 'countries-list';

import type { TCountryCode } from 'countries-list';

const overrideCountryCodes: Record<string, string> = {
  UK: 'GB',
};

export const getCountryFromCode = (code: string) => {
  const resolvedCode = code as TCountryCode;
  if (overrideCountryCodes[code]) {
    return getCountryData(overrideCountryCodes[code] as TCountryCode).name;
  }

  return getCountryData(resolvedCode).name;
};
