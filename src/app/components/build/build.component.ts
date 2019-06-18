import {Component, OnDestroy, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {FormGroup} from '@angular/forms';
import {NumberInput} from './number-input';
import {TextInput} from './text-input';
import {DropdownInput} from './dropdown-input';
import {InputBase} from './input-base';
import {NumberResult} from './number-result';
import {ResultBase} from './result-base';
import {evaluate} from 'mathjs';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})

export class BuildComponent implements OnInit, OnDestroy {

  library = {
    input: [
      new NumberInput(),
      new TextInput(),
      new DropdownInput(),
    ],
    result: [
      new NumberResult(),
    ]
  };

  calculator = {
    name: 'Calculator0',
    input: [],
    result: [],
  };

  selectedList = 'input';
  selectedField: ResultBase<any> | InputBase<any>;

  form: FormGroup;

  constructor() {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  drop(event: CdkDragDrop<any>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      const to = Math.max(0, Math.min(event.currentIndex, event.container.data.length));
      if (event.previousContainer.data.length) {
        event.container.data.splice(to, 0, Object.assign({}, event.previousContainer.data[event.previousIndex]));
      }
    }
  }

  selectList(pane: string) {
    if (this.selectedList !== pane) {
      this.calculator[this.selectedList].forEach(
        field => {
          field.selected = false;
        }
      );
      this.selectedList = pane;
    }
  }

  selectField(item) {
    this.selectedField = item;
    this.calculator[this.selectedList].forEach(
      field => {
        field.selected = item === field;
      }
    );
  }

  filter(arr: Array<any>) {
    return arr.filter(template => template.id === this.selectedList);
  }

  delete(x) {
    this.calculator[this.selectedList] = this.calculator[this.selectedList].filter( y => y !== x);
  }

  eval() {
    let str = this.selectedField.expression.slice();
    this.calculator.input.forEach( item => {
      const pattern = new RegExp(item.label, 'gi');
      str = str.replace(pattern, item.value);
    });
    this.selectedField.value = evaluate(str);
    return evaluate(str);
  }

}
