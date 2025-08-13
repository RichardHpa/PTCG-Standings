export interface useGetCardsProps {
  pageSize?: number;
  query?: string;
  orderBy?: string;
}

export interface useGetCardsInfiniteProps extends useGetCardsProps {
  enabled?: boolean;
}
