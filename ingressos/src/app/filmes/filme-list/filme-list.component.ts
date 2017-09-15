import { Component, OnInit } from '@angular/core';
import { Filme } from "../filme.model";
import { FilmeService } from "../filme.service";

@Component({
  selector: 'app-filme-list',
  templateUrl: './filme-list.component.html',
  styleUrls: ['./filme-list.component.css']
})
export class FilmeListComponent implements OnInit {

  filmes: Filme[];

  constructor(private filmeService: FilmeService) { }

  ngOnInit() {
    this.filmeService.getFilmes().subscribe(
      (filmes: Filme[]) => this.filmes = filmes
    );
  }

}
