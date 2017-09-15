import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

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


/**
 * Rotas do CRUD de Ingresso
 * listagem -> admin/ingressos        -> IngressoListComponent
 * cadastro -> admin/ingressos/new    -> IngressoFormComponent
 * edição -> admin/ingressos/123/edit -> IngressoFormComponent
 * detalhe -> admin/ingressos/123     -> IngressoDetailComponent
 */
const routes: Routes = [
  { path: '', component: VendaIngressoListComponent },
  { 
    path: 'admin/ingressos',
    component: IngressoListComponent,
    children: [
      { path: 'new', component: IngressoFormComponent },
      { path: ':id/edit', component: IngressoFormComponent }
    ]
  },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    IngressoService,
    LoggingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
