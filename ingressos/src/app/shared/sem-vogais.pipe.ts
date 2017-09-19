import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'semVogais'
})
export class SemVogaisPipe implements PipeTransform {

    transform(value: any, ...args: any[]) {
        return value.replace(/[aAeEiIoOuU]/g, '');
    }
}