import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {ServerComponent} from './server/server.component';
import { Temp2Component } from './temp2/temp2.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Temp2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
