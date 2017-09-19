import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { Filme } from "../filme.model";
import { FilmeService } from "../../core/filme.service";

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.css']
})
export class FilmeListComponent implements OnInit {

  filmes: Filme[];
  erro: string;

  constructor(private filmeService: FilmeService) { }

  ngOnInit() {
    this.filmeService.getFilmes().subscribe(
      (filmes: Filme[]) => this.filmes = filmes
    );
  }

  onDelete(index: number) {
    this.filmeService.deletar(this.filmes[index]['$key'])
      .catch(
        (res: any) => {
          this.erro = 'Erro ao comunicar com o servidor.';
          return res;
        }
      )
      .subscribe(
        (res: Response) => {
          console.log(res.json());
          this.filmes.splice(index, 1);
        }
      );
  }

}
