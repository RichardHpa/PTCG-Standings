import { StyledSelectProps } from '../Select/types';

export interface CountrySelectProps
  extends Pick<StyledSelectProps, 'onChange' | 'value'> {
  countries: string[];
}
