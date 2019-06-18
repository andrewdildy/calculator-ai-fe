import { NgModule } from '@angular/core';
import {BuildComponent} from '../components/build/build.component';
import {BrowserModule} from '@angular/platform-browser';
import {BuildRoutingModule} from '../routing/build-routing.module';
import {MatIconModule, MatSidenavModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { ResizableModule } from 'angular-resizable-element';



@NgModule({
  declarations: [
    BuildComponent
  ],
  imports: [
    BrowserModule,
    BuildRoutingModule,
    MatSidenavModule,
    DragDropModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    ResizableModule,
    MatIconModule,
  ],
  exports: [
    BuildComponent
  ],
  providers: []
})
export class BuildModule { }
