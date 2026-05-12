export type FieldOption = {
  label: string;
  value: string;
};

export type FieldType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'multiline'
  | 'radio'
  | 'checkbox'
  | 'switch'
  | 'select'
  | 'date';

export type FieldConfig = {
  id: string;
  label: string;
  type: FieldType;
  required: boolean;
  options?: FieldOption[];
};

export type FormConfig = {
  title: string;
  fields: FieldConfig[];
};

export type FormValues = Record<string, string | boolean | string[]>;
