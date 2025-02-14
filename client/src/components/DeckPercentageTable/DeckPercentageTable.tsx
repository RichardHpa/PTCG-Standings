import { useMemo, useState } from 'react';
import { VirtualizedTable } from 'components/VirtualizedTable';
import { Archetypes } from 'components/Archetypes';

import { breakCamelCase } from 'utils/breakCamelCase';

import type { FC } from 'react';
import type { DeckPercentageTableProps, FormattedDataObject } from './types';
import type { ColumnProps } from 'components/VirtualizedTable/types';

interface PercentageRow {
  name: string;
  count: number;
  percentage: string;
}

const calculatePercentages = (data: FormattedDataObject) => {
  const totalAvailableDecklists = data.totalCount - data.noDecklist;
  const percentages: PercentageRow[] = data.formattedData.map(deck => {
    return {
      name: deck.name,
      count: deck.y,
      percentage: ((deck.y / totalAvailableDecklists) * 100).toFixed(1),
    };
  });
  return percentages;
};

export const DeckPercentageTable: FC<DeckPercentageTableProps> = ({ data }) => {
  const [listRef, setListRef] = useState<HTMLElement | null>(null);
  const calculatedPercentages = useMemo(() => {
    return calculatePercentages(data);
  }, [data]);

  const columns: ColumnProps<PercentageRow>[] = useMemo(() => {
    return [
      {
        key: 'Archetype',
        header: '',
        render: row => (
          <div>
            <Archetypes size="small" archetype={row.name} />
          </div>
        ),
        size: 'small',
      },
      {
        key: 'name',
        header: '',
        render: row => <div>{breakCamelCase(row.name)}</div>,
      },
      {
        key: 'count',
        header: 'Count',
        render: row => <div>{row.count}</div>,
      },
      {
        key: 'percentage',
        header: 'Percentage',
        render: row => <div>{row.percentage}%</div>,
      },
    ];
  }, []);

  return (
    <div ref={setListRef}>
      <VirtualizedTable<PercentageRow>
        tableId="archetypes"
        data={calculatedPercentages}
        columns={columns}
        estimateSize={40}
        containerRef={listRef}
      />
    </div>
  );
};
