import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IngressoListComponent } from "./ingresso-list/ingresso-list.component";
import { IngressoFormComponent } from "./ingresso-form/ingresso-form.component";
import { IngressoDetailComponent } from "./ingresso-detail/ingresso-detail.component";
import { AuthGuard } from "../core/auth.guard";

const routes: Routes = [
    { 
        path: '',
        component: IngressoListComponent,
        canActivateChild: [AuthGuard],
        children: [
            { path: 'new', component: IngressoFormComponent },
            { path: ':id/edit', component: IngressoFormComponent },
            { path: ':id', component: IngressoDetailComponent }
        ]
    },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class IngressoRoutingModule {}