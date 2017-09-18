import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/observable/throw';

import { Ingresso } from '../ingressos/ingresso.model';
import { LoggingService } from "./logging.service";

@Injectable()
export class IngressoService {
    private ingressos: Ingresso[] = [
        new Ingresso('It', 23, 3, new Date(2017, 8, 15), '21:00', 30),
        new Ingresso('Bingo', 19.75, 2, new Date(2017, 8, 15), '19:15', 45),
        new Ingresso('Transformers', 1.99, 1, new Date(2017, 8, 14), '18:35', 20)
    ];

    ingressosSubject = new Subject<Ingresso[]>();

    constructor(private loggingService: LoggingService) {}

    getIngressos() {
        this.loggingService.log('Recuperando ingressos...');
        return [ ...this.ingressos ];
    }

    getIngresso(index: number) {
        return { ...this.ingressos[index] };
    }

    adicionar(ingresso: Ingresso) {
        const obs = new Observable((observer: Observer<Ingresso>) => {
            setTimeout(() => {
                if(ingresso.preco < 0) {
                    observer.error('Preço não pode ser menor que 0');
                } else {
                    this.ingressos.push(ingresso);
                    this.ingressosSubject.next(this.getIngressos());
                    observer.next(ingresso);
                }
            }, 1000);
        });
        return obs;
        // ingressosEventEmitter.emit(this.getIngressos());
    }

    atualizar(index: number, ingresso: Ingresso) {
        this.ingressos.splice(index, 1, ingresso);
        this.ingressosSubject.next(this.getIngressos());
    }
    
    remover(index: number) {
        this.ingressos.splice(index, 1);
        this.ingressosSubject.next(this.getIngressos());
    }
    
    comprar(index: number, quantidade: number) {
        let ingresso = this.ingressos[index];
        ingresso.quantidade -= quantidade;
        this.ingressosSubject.next(this.getIngressos());

        // ingresso.quantidade = ingresso.quantidade - quantidade;
    }

    getObservable() {
        const obs = new Observable((observer: Observer<string>) => {
            setTimeout(() => {
                observer.next('Mundo !!');
            }, 1000);
            setTimeout(() => {
                observer.next('Enviado de:');
            }, 2000);
            setTimeout(() => {
                //observer.error('Volta que deu ruim');
                //Observable.throw(new Error('Volta que deu ruim'));
                observer.complete();
            }, 2500);
            setTimeout(() => {
                observer.next('Marte');
            }, 3000);
        });
        return obs;
    }
}