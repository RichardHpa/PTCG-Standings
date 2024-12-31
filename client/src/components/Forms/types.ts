export interface BaseInputProps<T> {
  label: string;
  name: string;
  hideLabel?: boolean;
  value: string;
  required?: boolean;
  onChange: (e: T) => void;
}
