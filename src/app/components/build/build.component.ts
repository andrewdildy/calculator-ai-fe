import {Component, OnDestroy, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {FormGroup} from '@angular/forms';
import {NumberField} from './number-field';
import {TextField} from './text-field';
import {DropdownField} from './dropdown-field';
import {FieldBase} from './field-base';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})

export class BuildComponent implements OnInit, OnDestroy {

  library = {
    input: [
      new NumberField(),
      new TextField(),
      new DropdownField(),
    ],
    result: [
      new NumberField(),
    ]
  };

  calculator = {
    input: [],
    result: [],
  };

  selectedList = 'input';
  selectedField: FieldBase<any>;

  form: FormGroup;

  constructor() {}

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
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

}
