import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { environment } from '../../environments/environment';
import { Filme } from "../filmes/filme.model";

@Injectable()
export class FilmeService {

  private filmes: Filme[] = [
    new Filme('It', 'http://via.placeholder.com/100x300', 'terror'),
    new Filme('Bingo', 'http://via.placeholder.com/100x300', 'drama'),
    new Filme('Transformers', 'http://via.placeholder.com/100x300', 'acao')
  ];

  constructor(private http: Http) { }

  getFilmes() {
    return this.http.get(environment.apiUrl + 'filmes.json').map(
      (res: Response) => {
        const data = res.json();
        const filmes: Filme[] = [];
        for(let key in data) {
          filmes.push({
            ...data[key],
            '$key': key
          });
        };
        return filmes;
      }
    );
  }

  getFilme(index: number) {
    return Observable.of({ ...this.filmes[index] });
  }

  cadastrar(filme: Filme) {
    return this.http.post(environment.apiUrl + 'filmes.json', filme);
  }
  
  atualizar(index: number, filme: Filme) {
    this.filmes.splice(index, 1, filme);
    return Observable.of({ ...filme });
  }

  deletar(index: number) {
    const filme = this.filmes.splice(index, 1)[0];
    return Observable.of({ ...filme });
  }

  isTituloDisponivel(titulo: string) {
    return new Observable((observer: Observer<boolean>) => {
      setTimeout(() => {
        const found = this.filmes.filter((filme: Filme) => {
          return filme.titulo.toUpperCase() === titulo.toUpperCase();
        });
        observer.next(found.length === 0);
      }, 1500);
    });
  }

}
