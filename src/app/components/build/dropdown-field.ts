import { FieldBase } from './field-base';

export class DropdownField extends FieldBase<string> {
  fieldType = 'Dropdown';

  constructor(options: {} = {}) {
    super(options);
  }
}
