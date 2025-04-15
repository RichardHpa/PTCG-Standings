import { getEmojiFlag } from 'countries-list';

import type { TCountryCode } from 'countries-list';

export const getCountryFlag = (countryCode: TCountryCode | string) => {
  // NOTE: This is a workaround for the UK country code, which is not recognized by the countries-list package.
  if (countryCode === 'UK') {
    return getEmojiFlag('GB');
  }
  const resolvedCode = countryCode as TCountryCode;

  return getEmojiFlag(resolvedCode);
};
