import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resumo'
})
export class ResumoPipe implements PipeTransform {

  transform(value: any, limite: number = 20): any {
    if(value && value != null && value.length > limite) {
      return value.substring(0, limite - 3) + '...';
    } else {
      return value;
    }
  }

}
