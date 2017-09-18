import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { IngressoService } from "../../core/ingresso.service";
import { Ingresso } from "../../ingressos/ingresso.model";

@Component({
  selector: 'app-venda-ingresso-list',
  templateUrl: './venda-ingresso-list.component.html',
  styleUrls: ['./venda-ingresso-list.component.css']
})
export class VendaIngressoListComponent implements OnInit, OnDestroy {

  ingressos: Ingresso[];
  selectedIndex = -1;
  ingressoSubscription: Subscription;

  constructor(private ingressoService: IngressoService) { }

  ngOnInit() {
    this.ingressos = this.ingressoService.getIngressos();
    this.ingressoSubscription = this.ingressoService.ingressosSubject.subscribe(
      (ingressos: Ingresso[]) => {
        this.ingressos = ingressos;
        this.selectedIndex = -1;
      }
    );
  }

  ngOnDestroy() {
    this.ingressoSubscription.unsubscribe();
  }

  onSelect(index: number) {
    this.selectedIndex = index;
  }

  onCancel(){
    this.selectedIndex = -1;
  }

}
