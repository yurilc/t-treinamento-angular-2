import { Component, OnChanges, OnInit, DoCheck, AfterContentInit,
         AfterContentChecked, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Subscription } from 'rxjs/Subscription';

import { Ingresso } from '../ingresso.model';
import { IngressoService } from "../../core/ingresso.service";

@Component({
    selector: 'app-ingresso-list',
    templateUrl: './ingresso-list.component.html',
    styleUrls: [ './ingresso-list.component.css' ]
})
export class IngressoListComponent implements OnChanges, OnInit,
    DoCheck, AfterContentInit, AfterContentChecked, OnDestroy {

    //ingressoSelecionado: Ingresso;
    // indexSelecionado = -1;

    ingressos: Ingresso[];

    ingressoSubscription: Subscription;

    mensagem = 'Olá ';
    searchText = '';

    constructor(private ingressoService: IngressoService,
                private router: Router,
                private route: ActivatedRoute) {}

    ngOnChanges() {
        console.log('OnChanges');
    }

    ngOnInit() {
        this.route.queryParams.subscribe(
            (params: Params) => {
                console.log('search: ', params['search']);
                console.log('limit: ', params['limit']);
                console.log('start: ', params['start']);
                this.searchText = params['search'];
            }
        );
        this.ingressos = this.ingressoService.getIngressos();
        this.ingressoSubscription = this.ingressoService.ingressosSubject.subscribe(
            (ingressos: Ingresso[]) => {
                this.ingressos = ingressos;
                // this.indexSelecionado = -1;
                console.log("dentro do subject")
            }
        );
        // Observable
        this.ingressoService.getObservable().subscribe(
            (mensagem: string) => {
                console.log('MENSAGEM RECEBIDA:', mensagem);
                this.mensagem += mensagem;
            },
            (erro: Error) => {
                console.error('ERRO: ', erro);
            },
            () => {
                console.log('Observable completado');
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

    search() {
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: {
                search: this.searchText,
                limit: 10,
                start: 0
            }
        })
    }

    // onNew() {
    //     //this.ingressoSelecionado = new Ingresso();
    //     this.indexSelecionado = undefined;
    // }

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

    // onCancel() {
    //     // this.ingressoSelecionado = undefined;
    //     this.indexSelecionado = -1;
    // }

    // onSelect(index: number) {
    //     // this.ingressoSelecionado = { ...this.ingressos[index] };
    //     this.indexSelecionado = index;
    // }

    onDelete(index: number) {
        this.ingressoService.remover(index);
        // this.ingressos = this.ingressoService.getIngressos();
    }
}