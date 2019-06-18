import { InputBase } from './input-base';

export class NumberInput extends InputBase<string> {
  fieldType = 'Number';

  constructor(options: {} = {}) {
    super(options);
  }
}
