import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FilmeListComponent } from "./filme-list/filme-list.component";
import { FilmeFormComponent } from "./filme-form/filme-form.component";
import { FilmeDetailComponent } from "./filme-detail/filme-detail.component";

const routes: Routes = [
    { path: '', component: FilmeListComponent },
    { path: 'new', component: FilmeFormComponent },
    { path: ':id/edit', component: FilmeFormComponent },
    { path: ':id', component: FilmeDetailComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ], exports: [
        RouterModule
    ]
})
export class FilmeRoutingModule {

}