import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { Ingresso } from './ingresso.model';
import { LoggingService } from "../logging.service";

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
        this.ingressos.push(ingresso);
        this.ingressosSubject.next(this.getIngressos());
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
}