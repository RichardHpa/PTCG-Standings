import { useMemo } from 'react';

import { StyledSelect } from 'components/Forms/Select';

import { getCountryFromCode } from 'helpers/getCountryFromCode';
import { getCountryFlag } from 'helpers/getCountryFlag';

import type { StyledOptionProps } from 'components/Forms/Select/types';
import type { CountrySelectProps } from './types';
import type { FC } from 'react';

export const firstCountryOption: StyledOptionProps = {
  value: 'all',
  label: 'All countries',
  render: <>All countries</>,
};

export const CountrySelect: FC<CountrySelectProps> = ({
  countries,
  onChange,
  value,
}) => {
  const styledOptions: StyledOptionProps[] = useMemo(() => {
    const options: StyledOptionProps[] = [firstCountryOption];
    countries.forEach(country => {
      options.push({
        label: getCountryFromCode(country.toUpperCase()),
        value: country,
        render: (
          <>
            <div className="flex items-center gap-2">
              <span>{getCountryFlag(country.toUpperCase())}</span>
              <span>{getCountryFromCode(country.toUpperCase())}</span>
            </div>
          </>
        ),
      });
    });
    return options;
  }, [countries]);

  return (
    <StyledSelect
      name="country"
      label="Country"
      hideLabel
      options={styledOptions}
      onChange={onChange}
      value={value}
    />
  );
};
