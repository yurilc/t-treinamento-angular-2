import { ActivatedRoute, Params } from "@angular/router";

import { Component, OnInit } from '@angular/core';
import { FilmeService } from "../../core/filme.service";
import { Filme } from "../filme.model";

@Component({
  selector: 'app-filme-detail',
  templateUrl: './filme-detail.component.html',
  styleUrls: ['./filme-detail.component.css']
})
export class FilmeDetailComponent implements OnInit {

  key: string;
  filme: Filme;

  constructor(private filmeService: FilmeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.key = params['id'];
        if(this.key != undefined) {
          this.filmeService.getFilme(this.key).subscribe(
            (filme: Filme) => this.filme = filme
          );
        }
      }
    );
  }

}
