import { Component } from '@angular/core';

import { Ingresso } from './ingresso.model';

@Component({
    selector: 'app-ingresso-list',
    templateUrl: './ingresso-list.component.html'
})
export class IngressoListComponent {

    modo = 'listagem';

    ingressos: Ingresso[] = [
        {
            titulo: 'It',
            preco: 23,
            sala: 3,
            data: new Date(2017, 8, 15),
            horario: '21:00'
        },
        {
            titulo: 'Bingo',
            preco: 19.75,
            sala: 2,
            data: new Date(2017, 8, 15),
            horario: '19:55'
        },
        {
            titulo: 'Transformers',
            preco: 1.99,
            sala: 1,
            data: new Date(2017, 8, 14),
            horario: '18:35'
        }
    ];

    onNew() {
        this.modo = 'cadastro';
    }
}