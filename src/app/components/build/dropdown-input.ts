import { InputBase } from './input-base';

export class DropdownInput extends InputBase<string> {
  fieldType = 'Dropdown';

  constructor(options: {} = {}) {
    super(options);
  }
}
