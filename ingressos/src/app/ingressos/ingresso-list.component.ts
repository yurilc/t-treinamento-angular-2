import { Component } from '@angular/core';

import { Ingresso } from './ingresso.model';

@Component({
    selector: 'app-ingresso-list',
    templateUrl: './ingresso-list.component.html'
})
export class IngressoListComponent {

    modo = 'listagem';

    ingressos: Ingresso[] = [
        new Ingresso('It', 23, 3, new Date(2017, 8, 15), '21:00'),
        new Ingresso('Bingo', 19.75, 2, new Date(2017, 8, 15)),
        new Ingresso('Transformers', 1.99, 1, new Date(2017, 8, 14), '18:35')
    ];

    onNew() {
        this.modo = 'cadastro';
    }

    onSave(ingresso: Ingresso) {
        this.ingressos.push(ingresso);
        this.modo = 'listagem';
    }

    onCancel() {
        this.modo = 'listagem';
    }
}