import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';

import { AppRoutingModule } from '../routing/app-routing.module';
import { AppComponent } from '../app.component';
import {BuildModule} from './build.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    BuildModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
