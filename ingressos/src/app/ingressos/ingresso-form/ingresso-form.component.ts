import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Ingresso } from '../ingresso.model';

@Component({
  selector: 'app-ingresso-form',
  templateUrl: './ingresso-form.component.html',
  styleUrls: ['./ingresso-form.component.css']
})
export class IngressoFormComponent implements OnInit {

  @Output('onSave') ingressoSalvo = new EventEmitter<Ingresso>();
  @Output('onCancel') cancelar = new EventEmitter();

  ingresso: Ingresso = new Ingresso();

  constructor() { }

  ngOnInit() {
  }

  onSave() {
    console.log('IngressoFormComponent.onSave()', this.ingresso);
    this.ingressoSalvo.emit(this.ingresso);
  }

  onCancel() {
    this.cancelar.emit();
  }

}
