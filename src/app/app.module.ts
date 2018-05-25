import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConjuntoComponent } from './conjunto/conjunto.component';

@NgModule({
  declarations: [
    AppComponent,
    ConjuntoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
