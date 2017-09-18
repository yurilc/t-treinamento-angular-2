import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { FilmeListComponent } from "./filme-list/filme-list.component";
import { FilmeFormComponent } from "./filme-form/filme-form.component";
import { FilmeDetailComponent } from "./filme-detail/filme-detail.component";
import { FilmeRoutingModule } from "./filme-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        FilmeListComponent,
        FilmeFormComponent,
        FilmeDetailComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        FilmeRoutingModule
    ]
})
export class FilmeModule {}