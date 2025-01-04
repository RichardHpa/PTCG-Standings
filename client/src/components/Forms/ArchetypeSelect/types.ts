import { StyledSelectProps } from '../Select/types';

export interface ArchetypesSelectProps
  extends Pick<StyledSelectProps, 'onChange' | 'value'> {
  archetypes: string[];
}
