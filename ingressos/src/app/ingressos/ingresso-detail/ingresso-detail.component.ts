import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Ingresso } from "../ingresso.model";
import { IngressoService } from "../../core/ingresso.service";

@Component({
  selector: 'app-ingresso-detail',
  templateUrl: './ingresso-detail.component.html',
  styleUrls: ['./ingresso-detail.component.css']
})
export class IngressoDetailComponent implements OnInit {

  ingresso: Ingresso;
  index: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private ingressoService: IngressoService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.index = params['id'];
        if(this.index != undefined) {
          this.ingresso = this.ingressoService.getIngresso(this.index);
        }
      }
    );
  }

  onRemove() {
    this.ingressoService.remover(this.index);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

}
