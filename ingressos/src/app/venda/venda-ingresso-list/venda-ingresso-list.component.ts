import { Component, OnInit } from '@angular/core';

import { IngressoService } from "../../ingressos/ingresso.service";
import { Ingresso } from "../../ingressos/ingresso.model";

@Component({
  selector: 'app-venda-ingresso-list',
  templateUrl: './venda-ingresso-list.component.html',
  styleUrls: ['./venda-ingresso-list.component.css']
})
export class VendaIngressoListComponent implements OnInit {

  ingressos: Ingresso[];
  selectedIndex = -1;

  constructor(private ingressoService: IngressoService) { }

  ngOnInit() {
    this.ingressos = this.ingressoService.getIngressos();
    this.ingressoService.ingressosSubject.subscribe(
      (ingressos: Ingresso[]) => {
        this.ingressos = ingressos;
        this.selectedIndex = -1;
      }
    );
  }

  onSelect(index: number) {
    this.selectedIndex = index;
  }

  onCancel(){
    this.selectedIndex = -1;
  }

}
