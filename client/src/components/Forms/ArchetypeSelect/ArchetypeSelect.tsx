import { useMemo } from 'react';

import { StyledSelect } from 'components/Forms/Select';
import { Archetypes } from 'components/Archetypes';

import { breakCamelCase } from 'utils/breakCamelCase';

import type { StyledOptionProps } from 'components/Forms/Select/types';
import type { ArchetypesSelectProps } from './types';
import type { FC } from 'react';

export const firstArchetypeOption: StyledOptionProps = {
  value: 'all',
  label: 'All decks',
  render: <>All decks</>,
};

export const lastArchetypeOption: StyledOptionProps = {
  value: '',
  label: 'No list available',
  render: <>No list available</>,
};

export const ArchetypeSelect: FC<ArchetypesSelectProps> = ({
  archetypes,
  onChange,
  value,
}) => {
  const styledOptions: StyledOptionProps[] = useMemo(() => {
    const options: StyledOptionProps[] = [firstArchetypeOption];
    archetypes.forEach(archetype => {
      options.push({
        label: archetype,
        value: archetype,
        render: (
          <div className="flex w-full items-center justify-between">
            {breakCamelCase(archetype)}
            <Archetypes size="xs" archetype={archetype} />
          </div>
        ),
        renderSelected: (
          <div className="flex w-full items-center gap-2">
            <Archetypes size="xs" archetype={archetype} />
            {breakCamelCase(archetype)}
          </div>
        ),
      });
    });
    options.push(lastArchetypeOption);
    return options;
  }, [archetypes]);

  return (
    <StyledSelect
      name="archetype"
      label="Archetype"
      hideLabel
      options={styledOptions}
      onChange={onChange}
      value={value}
    />
  );
};
