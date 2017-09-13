import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IngressoListComponent } from './ingressos/ingresso-list.component';
import { IngressoFormComponent } from './ingressos/ingresso-form/ingresso-form.component';

@NgModule({
  declarations: [
    AppComponent,
    IngressoListComponent,
    IngressoFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
