import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Lavoro1Component } from './lavoro1/lavoro1.component';

@NgModule({
  declarations: [
    AppComponent,
    Lavoro1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
