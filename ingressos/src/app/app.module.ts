import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IngressoListComponent } from './ingressos/ingresso-list/ingresso-list.component';
import { IngressoFormComponent } from './ingressos/ingresso-form/ingresso-form.component';
import { HeaderComponent } from './header/header.component';
import { DropdownDirective } from './dropdown.directive';
import { HighlightDirective } from './highlight.directive';
import { VendaIngressoListComponent } from './venda/venda-ingresso-list/venda-ingresso-list.component';
import { IngressoService } from "./ingressos/ingresso.service";
import { LoggingService } from "./logging.service";
import { VendaIngressoFormComponent } from './venda/venda-ingresso-form/venda-ingresso-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { IngressoDetailComponent } from './ingressos/ingresso-detail/ingresso-detail.component';
import { AppRoutingModule } from "./app-routing.module";
import { FilmeService } from "./filmes/filme.service";

@NgModule({
  declarations: [
    AppComponent,
    IngressoListComponent,
    IngressoFormComponent,
    HeaderComponent,
    DropdownDirective,
    HighlightDirective,
    VendaIngressoListComponent,
    VendaIngressoFormComponent,
    PageNotFoundComponent,
    IngressoDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    IngressoService,
    LoggingService,
    FilmeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
