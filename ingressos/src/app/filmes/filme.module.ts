import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { FilmeListComponent } from "./filme-list/filme-list.component";
import { FilmeFormComponent } from "./filme-form/filme-form.component";
import { FilmeDetailComponent } from "./filme-detail/filme-detail.component";
import { FilmeRoutingModule } from "./filme-routing.module";

@NgModule({
    declarations: [
        FilmeListComponent,
        FilmeFormComponent,
        FilmeDetailComponent
    ],
    imports: [
        CommonModule,
        FilmeRoutingModule
    ]
})
export class FilmeModule {}