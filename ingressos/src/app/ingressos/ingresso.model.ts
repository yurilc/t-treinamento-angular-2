export class Ingresso {
    titulo: string;
    preco: number;
    sala: number;
    data: Date;
    horario: string;

    constructor(titulo?: string, preco?: number, sala?: number,
                data?: Date, horario?: string) {
        this.titulo = titulo;
        this.preco = preco;
        this.sala = sala;
        this.data = data;
        this.horario = horario;
    }
}