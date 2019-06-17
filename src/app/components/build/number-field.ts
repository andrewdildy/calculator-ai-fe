import { FieldBase } from './field-base';

export class NumberField extends FieldBase<string> {
  fieldType = 'Number';

  constructor(options: {} = {}) {
    super(options);
  }
}
