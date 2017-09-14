import { Ingresso } from './ingresso.model';

export class IngressoService {
    private ingressos: Ingresso[] = [
        new Ingresso('It', 23, 3, new Date(2017, 8, 15), '21:00'),
        new Ingresso('Bingo', 19.75, 2, new Date(2017, 8, 15)),
        new Ingresso('Transformers', 1.99, 1, new Date(2017, 8, 14), '18:35')
    ];

    getIngressos() {
        return [ ...this.ingressos ];
    }

    adicionar(ingresso: Ingresso) {
        this.ingressos.push(ingresso);
    }

    atualizar(index: number, ingresso: Ingresso) {
        this.ingressos.splice(index, 1, ingresso);
    }

    remover(index: number) {
        this.ingressos.splice(index, 1);
    }
}