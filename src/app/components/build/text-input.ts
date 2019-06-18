import { InputBase } from './input-base';

export class TextInput extends InputBase<string> {
  fieldType = 'Text';

  constructor(options: {} = {}) {
    super(options);
  }
}
