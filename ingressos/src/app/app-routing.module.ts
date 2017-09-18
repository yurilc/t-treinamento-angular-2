import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VendaIngressoListComponent } from "./venda/venda-ingresso-list/venda-ingresso-list.component";
import { IngressoListComponent } from "./ingressos/ingresso-list/ingresso-list.component";
import { IngressoFormComponent } from "./ingressos/ingresso-form/ingresso-form.component";
import { IngressoDetailComponent } from "./ingressos/ingresso-detail/ingresso-detail.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

/**
 * Rotas do CRUD de Ingresso
 * listagem -> admin/ingressos        -> IngressoListComponent
 * cadastro -> admin/ingressos/new    -> IngressoFormComponent
 * edição -> admin/ingressos/123/edit -> IngressoFormComponent
 * detalhe -> admin/ingressos/123     -> IngressoDetailComponent
 */
const routes: Routes = [
    { path: '', component: VendaIngressoListComponent },
    { path: 'admin/ingressos', loadChildren: './ingressos/ingresso.module#IngressoModule' },
    { path: 'admin/filmes', loadChildren: './filmes/filme.module#FilmeModule' },
    { path: 'not-found', component: PageNotFoundComponent },
    { path: '**', redirectTo: '/not-found' }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}