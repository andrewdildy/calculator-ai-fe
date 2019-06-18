import { ResultBase } from './result-base';

export class NumberResult extends ResultBase<string> {
  fieldType = 'Number';
  label = 'result';
  expression: string;

  constructor(options: {} = {}) {
    super(options);
    this.value = options['value'] || 0;
    this.expression = options['expression'] || '';
  }
}
