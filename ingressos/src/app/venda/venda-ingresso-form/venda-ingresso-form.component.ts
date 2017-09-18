import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Ingresso } from "../../ingressos/ingresso.model";
import { IngressoService } from "../../core/ingresso.service";

@Component({
  selector: 'app-venda-ingresso-form',
  templateUrl: './venda-ingresso-form.component.html',
  styleUrls: ['./venda-ingresso-form.component.css']
})
export class VendaIngressoFormComponent implements OnChanges {

  @Output('onCancel') cancelEmitter = new EventEmitter();
  @Input() index: number;

  ingresso: Ingresso;
  quantidade: number;

  constructor(private ingressoService: IngressoService) { }

  ngOnChanges() {
    if(this.index > -1) {
      this.ingresso = this.ingressoService.getIngresso(this.index);
    }
  }

  comprar() {
    this.ingressoService.comprar(this.index, this.quantidade);
  }

  onCancel() {
    this.cancelEmitter.emit();
  }

}
