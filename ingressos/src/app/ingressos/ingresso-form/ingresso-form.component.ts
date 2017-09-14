import { Component, OnChanges, OnInit, Output, Input, EventEmitter } from '@angular/core';

import { Ingresso } from '../ingresso.model';

@Component({
  selector: 'app-ingresso-form',
  templateUrl: './ingresso-form.component.html',
  styleUrls: ['./ingresso-form.component.css']
})
export class IngressoFormComponent implements OnChanges, OnInit {

  @Output('onSave') ingressoSalvo = new EventEmitter<Ingresso>();
  @Output('onUpdate') ingressoAtualizado = new EventEmitter<Ingresso>();
  @Output('onCancel') cancelar = new EventEmitter();

  @Input()
  ingresso: Ingresso = new Ingresso();

  @Input() index: number;

  constructor() { }

  ngOnChanges() {
    console.log('OnChanges');
  }

  ngOnInit() {
  }

  onSave() {
    console.log('IngressoFormComponent.onSave()', this.ingresso);
    if(this.index > -1) {
      this.ingressoAtualizado.emit(this.ingresso);
    } else {
      this.ingressoSalvo.emit(this.ingresso);
    }
  }

  onCancel() {
    this.cancelar.emit();
  }

}