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

  getFilme(key: string) {
    return this.http.get(environment.apiUrl + 'filmes/' + key + '.json')
      .map(
        (res: Response) => {
          return {
            ...res.json(),
            '$key': key
          };
        }
      );
  }

  cadastrar(filme: Filme) {
    return this.http.post(environment.apiUrl + 'filmes.json', filme)
      .map(
        (res: Response) =>{
          if(res.ok){
            return res.json();
          } else {
            console.error('Erro ao comunicar com o servidor');
            return null;
          }
        }
      );
  }
  
  atualizar(key: string, filme: Filme) {
    return this.http.put(
      environment.apiUrl + 'filmes/' + key + '.json',
      filme
    );
  }

  deletar(key: string) {
    return this.http.delete(
      environment.apiUrl + 'filmes/' + key + '.json'
    );
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
