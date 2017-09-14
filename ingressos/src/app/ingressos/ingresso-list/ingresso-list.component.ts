import { Component, OnChanges, OnInit, DoCheck, AfterContentInit,
         AfterContentChecked, OnDestroy } from '@angular/core';

import { Ingresso } from '../ingresso.model';
import { IngressoService } from "../ingresso.service";

@Component({
    selector: 'app-ingresso-list',
    templateUrl: './ingresso-list.component.html',
    styleUrls: [ './ingresso-list.component.css' ],
    providers: [
        IngressoService
    ]
})
export class IngressoListComponent implements OnChanges, OnInit,
    DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {

    ingressoSelecionado: Ingresso;
    indexSelecionado = -1;

    ingressos: Ingresso[];

    constructor(private ingressoService: IngressoService) {}

    ngOnChanges() {
        console.log('OnChanges');
    }

    ngOnInit() {
        this.ingressos = this.ingressoService.getIngressos();
    }

    ngDoCheck() {
        console.log('DoCheck');
    }

    ngAfterContentInit() {
        console.log('AfterContentInit');
    }

    ngAfterContentChecked() {
        console.log('AfterContentChecked');
    }

    ngOnDestroy() {
        console.log('OnDestroy');
    }

    onNew() {
        this.ingressoSelecionado = new Ingresso();
        this.indexSelecionado = -1;
    }

    onSave(ingresso: Ingresso) {
        this.ingressos.push(ingresso);
        this.ingressoSelecionado = undefined;
    }

    onUpdate(ingresso: Ingresso) {
        this.ingressos.splice(this.indexSelecionado, 1, ingresso);
        this.ingressoSelecionado = undefined;
    }

    onCancel() {
        this.ingressoSelecionado = undefined;
    }

    onSelect(index: number) {
        this.ingressoSelecionado = { ...this.ingressos[index] };
        this.indexSelecionado = index;
    }

    onDelete(index: number) {
        this.ingressos.splice(index, 1);
    }
}