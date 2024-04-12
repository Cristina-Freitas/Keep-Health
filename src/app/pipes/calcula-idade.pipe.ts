import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculaIdade',
  standalone: true
})
export class CalculaIdadePipe implements PipeTransform {

   transform(dataNascimento: string): string {
    const dataNascimentoDate = new Date(dataNascimento);
    const diff = Date.now() - dataNascimentoDate.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970).toString();
  }

}
