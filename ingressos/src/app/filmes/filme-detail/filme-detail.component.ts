import { ActivatedRoute, Params } from "@angular/router";

import { Component, OnInit } from '@angular/core';
import { FilmeService } from "../filme.service";
import { Filme } from "../filme.model";

@Component({
  selector: 'app-filme-detail',
  templateUrl: './filme-detail.component.html',
  styleUrls: ['./filme-detail.component.css']
})
export class FilmeDetailComponent implements OnInit {

  index: number;
  filme: Filme;

  constructor(private filmeService: FilmeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.index = params['id'];
        if(this.index != undefined) {
          this.filmeService.getFilme(this.index).subscribe(
            (filme: Filme) => this.filme = filme
          );
        }
      }
    );
  }

}
