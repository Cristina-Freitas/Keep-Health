import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alturaEmMetros',
  standalone: true
})
export class AlturaEmMetrosPipe implements PipeTransform {

  transform(value: number) {
    let alturaEmMetros = value/100
    console.log('Altura em metros:', alturaEmMetros);
    return alturaEmMetros + ' m';
  }

}
