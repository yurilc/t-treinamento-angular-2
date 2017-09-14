import { Component, OnChanges, OnInit, DoCheck, AfterContentInit,
         AfterContentChecked, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { Ingresso } from '../ingresso.model';
import { IngressoService } from "../ingresso.service";

@Component({
    selector: 'app-ingresso-list',
    templateUrl: './ingresso-list.component.html',
    styleUrls: [ './ingresso-list.component.css' ]
})
export class IngressoListComponent implements OnChanges, OnInit,
    DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {

    //ingressoSelecionado: Ingresso;
    indexSelecionado = -1;

    ingressos: Ingresso[];

    ingressoSubscription: Subscription;

    constructor(private ingressoService: IngressoService) {}

    ngOnChanges() {
        console.log('OnChanges');
    }

    ngOnInit() {
        this.ingressos = this.ingressoService.getIngressos();
        this.ingressoSubscription = this.ingressoService.ingressosSubject.subscribe(
            (ingressos: Ingresso[]) => {
                this.ingressos = ingressos;
                this.indexSelecionado = -1;
                console.log("dentro do subject")
            }
        );
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
        this.ingressoSubscription.unsubscribe();
    }

    onNew() {
        //this.ingressoSelecionado = new Ingresso();
        this.indexSelecionado = undefined;
    }

    //onSave(/*ingresso: Ingresso*/) {
        //this.ingressoService.adicionar(ingresso);
        //this.ingressos = this.ingressoService.getIngressos();
        //this.ingressoSelecionado = undefined;
    //}

    //onUpdate(/*ingresso: Ingresso*/) {
        // this.ingressoService.atualizar(this.indexSelecionado, ingresso);
        //this.ingressos = this.ingressoService.getIngressos();
        //this.ingressoSelecionado = undefined;
    //}

    onCancel() {
        // this.ingressoSelecionado = undefined;
        this.indexSelecionado = -1;
    }

    onSelect(index: number) {
        // this.ingressoSelecionado = { ...this.ingressos[index] };
        this.indexSelecionado = index;
    }

    onDelete(index: number) {
        this.ingressoService.remover(index);
        // this.ingressos = this.ingressoService.getIngressos();
    }
}