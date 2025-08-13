export interface Expansion {
  id: string;
  name: string;
  series: string;
  printedTotal: number;
  total: number;
  legalities: {
    unlimited?: 'Legal';
    standard?: 'Legal';
    expanded?: 'Legal';
  };
  ptcgoCode?: string;
  releaseDate: string;
  updatedAt: string;
  images: {
    symbol: string;
    logo: string;
  };
}

export interface ExpansionsApiResponse {
  data: Expansion[];
  page: number;
  pageSize: number;
  count: number;
  totalCount: number;
}
