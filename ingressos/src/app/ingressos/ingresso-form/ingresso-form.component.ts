import { Component, OnChanges, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { Ingresso } from '../ingresso.model';
import { IngressoService } from "../ingresso.service";

@Component({
  selector: 'app-ingresso-form',
  templateUrl: './ingresso-form.component.html',
  styleUrls: ['./ingresso-form.component.css']
})
export class IngressoFormComponent implements OnChanges, OnInit {

  // @Output('onSave') ingressoSalvo = new EventEmitter<Ingresso>();
  // @Output('onSave') ingressoSalvo = new EventEmitter();
  // @Output('onUpdate') ingressoAtualizado = new EventEmitter<Ingresso>();
  // @Output('onUpdate') ingressoAtualizado = new EventEmitter();
  @Output('onCancel') cancelar = new EventEmitter();

  //@Input()
  ingresso: Ingresso = new Ingresso();

  @Input() index: number;

  constructor(private ingressoService: IngressoService) { }

  ngOnChanges() {
    console.log('OnChanges');
    if(this.index > -1) {
      this.ingresso = this.ingressoService.getIngresso(this.index);
    }
  }

  ngOnInit() {
  }

  onSave() {
    console.log('IngressoFormComponent.onSave()', this.ingresso);
    if(this.index > -1) {
      this.ingressoService.atualizar(this.index, this.ingresso);
      // this.ingressoAtualizado.emit();
      // this.ingressoAtualizado.emit(this.ingresso);
    } else {
      this.ingressoService.adicionar(this.ingresso);
      // this.ingressoSalvo.emit();
      // this.ingressoSalvo.emit(this.ingresso);
    }
  }

  onCancel() {
    this.cancelar.emit();
  }

}
