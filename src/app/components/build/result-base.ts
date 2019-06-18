export class ResultBase<T> {
  value: T;
  label: string;
  selected: boolean;
  fieldType: string;

  constructor(options: {
    value?: T,
    label?: string,
    selected?: boolean,
    fieldType?: string,
  } = {}) {
    this.value = options.value;
    this.label = options.label || '';
    this.selected = !!options.selected;
    this.fieldType = options.fieldType || '';
  }
}
