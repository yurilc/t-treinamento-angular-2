import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { HeaderComponent } from "../header/header.component";
import { VendaIngressoListComponent } from "../venda/venda-ingresso-list/venda-ingresso-list.component";
import { VendaIngressoFormComponent } from "../venda/venda-ingresso-form/venda-ingresso-form.component";
import { PageNotFoundComponent } from "../page-not-found/page-not-found.component";
import { DropdownModule } from "../dropdown/dropdown.module";
import { IngressoService } from "./ingresso.service";
import { LoggingService } from "./logging.service";
import { FilmeService } from "./filme.service";
import { AppRoutingModule } from "../app-routing.module";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";

@NgModule({
    declarations: [
        HeaderComponent,
        VendaIngressoListComponent,
        VendaIngressoFormComponent,
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        DropdownModule,
        AppRoutingModule
    ],
    providers: [
        IngressoService,
        LoggingService,
        FilmeService,
        AuthService,
        AuthGuard
    ],
    exports: [
        HeaderComponent,
        VendaIngressoListComponent,
        VendaIngressoFormComponent,
        PageNotFoundComponent,
        FormsModule,
        DropdownModule,
        AppRoutingModule
    ]
})
export class CoreModule {}