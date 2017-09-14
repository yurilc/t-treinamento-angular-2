export class Ingresso {
    titulo: string;
    preco: number;
    sala: number;
    data: Date;
    horario: string;
    quantidade: number;

    constructor(titulo?: string, preco?: number, sala?: number,
                data?: Date, horario?: string, quantidade?: number) {
        this.titulo = titulo;
        this.preco = preco;
        this.sala = sala;
        this.data = data;
        this.horario = horario;
        this.quantidade = quantidade;
    }
}