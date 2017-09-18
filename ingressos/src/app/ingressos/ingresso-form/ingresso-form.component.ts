import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NgForm } from '@angular/forms';
 
import { Ingresso } from '../ingresso.model';
import { IngressoService } from "../../core/ingresso.service";

@Component({
  selector: 'app-ingresso-form',
  templateUrl: './ingresso-form.component.html',
  styleUrls: ['./ingresso-form.component.css']
})
export class IngressoFormComponent implements OnInit {

  // @Output('onSave') ingressoSalvo = new EventEmitter<Ingresso>();
  // @Output('onSave') ingressoSalvo = new EventEmitter();
  // @Output('onUpdate') ingressoAtualizado = new EventEmitter<Ingresso>();
  // @Output('onUpdate') ingressoAtualizado = new EventEmitter();
  // @Output('onCancel') cancelar = new EventEmitter();

  //@Input()
  ingresso: Ingresso = new Ingresso();
  mensagem: string;

  
  @ViewChild('f') form: NgForm;

  index: number;

  constructor(private ingressoService: IngressoService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    //this.index = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params) => {
        this.index = params['id'];
        if(this.index !== undefined) {
          this.ingresso = this.ingressoService.getIngresso(this.index);
        }
      }
    );
  }

  onSave() {
    console.log('IngressoFormComponent.onSave()', this.form.value);
    if(this.index > -1) {
      this.ingressoService.atualizar(this.index, this.form.value);
      // this.ingressoAtualizado.emit();
      // this.ingressoAtualizado.emit(this.ingresso);
    } else {
      this.ingressoService.adicionar(this.form.value).subscribe(
        (ingresso: Ingresso) => {
          this.router.navigate(['admin', 'ingressos']);
        },
        (erro: string) => {
          this.mensagem = erro;
        }
      );
      // this.ingressoSalvo.emit();
      // this.ingressoSalvo.emit(this.ingresso);
    }
  }

  // onCancel() {
  //   this.cancelar.emit();
  // }

}
