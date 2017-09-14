import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IngressoListComponent } from './ingressos/ingresso-list/ingresso-list.component';
import { IngressoFormComponent } from './ingressos/ingresso-form/ingresso-form.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './dropdown.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    IngressoListComponent,
    IngressoFormComponent,
    HeaderComponent,
    DropdownDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
