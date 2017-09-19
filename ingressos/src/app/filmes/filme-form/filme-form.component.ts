import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Response } from '@angular/http';

import { FilmeService } from "../../core/filme.service";
import { Filme } from "../filme.model";

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.css']
})
export class FilmeFormComponent implements OnInit {

  formFilme = new FormGroup({
    'titulo': new FormControl(null, [
      Validators.required,
      this.titulosProibidos
    ], this.tituloDisponivelAsyc.bind(this)),
    'cartaz': new FormControl('http://', [
      Validators.required,
      Validators.pattern(/^http[s]?:\/\//)
    ]),
    'genero': new FormControl(null, Validators.required)
  });

  generos = [
    { value: '', label: 'Selecione' },
    { value: 'terror', label: 'Terror' },
    { value: 'drama', label: 'Drama' },
    { value: 'acao', label: 'Ação' }
  ];

  key: string;

  constructor(private filmeService: FilmeService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.key = params['id'];
        if(this.key != undefined) {
          this.filmeService.getFilme(this.key).subscribe(
            (filme: Filme) => {
              // this.formFilme.setValue(filme);
              this.formFilme.get('titulo').setValue(filme.titulo);
              this.formFilme.get('cartaz').setValue(filme.cartaz);
              this.formFilme.get('genero').setValue(filme.genero);
              // this.filme = filme;
            }
          )
        }
      }
    );
  }

  onSave() {
    const filme = this.formFilme.value;
    if(this.key != undefined) {
      this.filmeService.atualizar(this.key, filme).subscribe(
        (res: Response) => {
          console.log(res.json());
        }
      );
    } else {
      this.filmeService.cadastrar(filme).subscribe(
        (filme: Filme) => {
          console.log(filme);
        }
      );
    }
  }

  titulosProibidos(control: FormControl): { [key: string]: any } {
    if(control.value != null && control.value.indexOf('panda') > -1){
      return {
        'tituloInvalido': 'panda'
      }
    } else {
      return null;
    }
  }

  tituloDisponivelAsyc(control: FormControl)
    : Promise<{[key: string]: any}> {
      return new Promise<{[key: string]: any}>(
        (resolve, reject)=>{
          this.filmeService.isTituloDisponivel(control.value).subscribe(
            (val: boolean) => {
              if(val) {
                resolve(null);
              } else {
                resolve({ 'tituloIndisponivel': true });
              }
            }
          );
      });
  }

}
