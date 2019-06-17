import { FieldBase } from './field-base';

export class TextField extends FieldBase<string> {
  fieldType = 'Text';

  constructor(options: {} = {}) {
    super(options);
  }
}
