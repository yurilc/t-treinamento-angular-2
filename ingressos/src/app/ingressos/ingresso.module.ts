import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IngressoListComponent } from './ingresso-list/ingresso-list.component';
import { IngressoFormComponent } from './ingresso-form/ingresso-form.component';
import { IngressoDetailComponent } from './ingresso-detail/ingresso-detail.component';
import { IngressoRoutingModule } from "./ingresso-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        IngressoListComponent,
        IngressoFormComponent,
        IngressoDetailComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        IngressoRoutingModule
    ]
})
export class IngressoModule {}