import { getCountryFlag } from 'helpers/getCountryFlag';

const removeCountryFromName = (name: string) => {
  const newName = name.replace(/\s\[(\w+)\]$/, '');

  if (newName.endsWith('.')) {
    return newName.slice(0, newName.length - 1);
  }

  return newName;
};

const getCountryCode = (name: string) => {
  const countryCode = name.match(/\[(\w+)\]$/);
  return countryCode ? countryCode[1] : '';
};

export const formatPlayerName = (name: string) => {
  const removedCountry = removeCountryFromName(name);
  const countryCode = getCountryCode(name);
  const countryFlag = getCountryFlag(countryCode);
  return `${countryFlag} ${removedCountry}`;
};
