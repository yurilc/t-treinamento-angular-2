import {  Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Filme } from "../filmes/filme.model";

export class FilmeService {

  private filmes: Filme[] = [
    new Filme('It', 'http://via.placeholder.com/100x300', 'Terror'),
    new Filme('Bingo', 'http://via.placeholder.com/100x300', 'Drama'),
    new Filme('Transformers', 'http://via.placeholder.com/100x300', 'Ação')
  ];

  constructor() { }

  getFilmes() {
    return Observable.of([ ...this.filmes ]);
  }

  getFilme(index: number) {
    return Observable.of({ ...this.filmes[index] });
  }

  cadastrar(filme: Filme) {
    this.filmes.push(filme);
    return Observable.of({ ...filme });
  }
  
  atualizar(index: number, filme: Filme) {
    this.filmes.splice(index, 1, filme);
    return Observable.of({ ...filme });
  }

  deletar(index: number) {
    const filme = this.filmes.splice(index, 1)[0];
    return Observable.of({ ...filme });
  }

}
