export interface ArchetypesProps {
  archetype: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  size?: 'small' | 'large';
}
