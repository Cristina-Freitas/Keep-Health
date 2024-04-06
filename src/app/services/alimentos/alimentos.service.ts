import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlimentosService {
  private alimentos: any[] = [
    {
      id: 1,
      name: 'Abacate',
      description: '...',
      qttCalories: 0,
      qttDaysFeed: 3,
      imageLink: ''
    }
    
  ];

  constructor() { }

  getAlimentos(): any[] {
    return this.alimentos;
  }
}
