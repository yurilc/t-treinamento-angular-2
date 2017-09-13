import { Component, OnChanges, OnInit, DoCheck, AfterContentInit,
         AfterContentChecked, OnDestroy } from '@angular/core';

import { Ingresso } from './ingresso.model';

@Component({
    selector: 'app-ingresso-list',
    templateUrl: './ingresso-list.component.html'
})
export class IngressoListComponent implements OnChanges, OnInit,
    DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {

    ingressoSelecionado: Ingresso;
    indexSelecionado = -1;

    ingressos: Ingresso[] = [
        new Ingresso('It', 23, 3, new Date(2017, 8, 15), '21:00'),
        new Ingresso('Bingo', 19.75, 2, new Date(2017, 8, 15)),
        new Ingresso('Transformers', 1.99, 1, new Date(2017, 8, 14), '18:35')
    ];

    ngOnChanges() {
        console.log('OnChanges');
    }

    ngOnInit() {
        console.log('OnInit');
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