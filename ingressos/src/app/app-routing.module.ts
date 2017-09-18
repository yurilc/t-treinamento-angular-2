import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VendaIngressoListComponent } from "./venda/venda-ingresso-list/venda-ingresso-list.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./core/auth.guard";

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
    {
        path: 'admin/filmes',
        loadChildren: './filmes/filme.module#FilmeModule',
        canLoad: [AuthGuard],
        canActivateChild: [AuthGuard]
    },
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