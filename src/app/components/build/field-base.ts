export class FieldBase<T> {
  value: T;
  key: string;
  label: string;
  required: boolean;
  selected: boolean;
  fieldType: string;


  constructor(options: {
    value?: T,
    key?: string,
    label?: string,
    required?: boolean,
    selected?: boolean,
    fieldType?: string,
  } = {}) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.required = !!options.required;
    this.selected = !!options.selected;
    this.fieldType = options.fieldType || '';
  }
}
