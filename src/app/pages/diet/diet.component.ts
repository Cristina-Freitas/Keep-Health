import { Component, Input } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [SharedModule,
            LoginComponent,
            FormsModule,
            CommonModule,
            RouterModule
            
  ],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.css'
})
export class DietComponent {

  listaAlimentos: any[] = [];
  listaDeAlimentos: any[] = [];
  buscarAlimento: string = '';
  textoPesquisa: string = '';

  @Input() alimentos: {image: string; name: string; description: string;} | undefined
alimento: any;

  constructor(private router: Router) {
    // Carrega os alimentos do localStorage ao inicializar o componente
    const alimentosLocalStorage = localStorage.getItem('alimentos');
    if (alimentosLocalStorage) {
      this.listaAlimentos = JSON.parse(alimentosLocalStorage);
      this.listaDeAlimentos = this.listaAlimentos;
    }
  }

  // filtrar = this.listaAlimentos
  buscarAlimentos(){
    if(!this.textoPesquisa){
      this.listaDeAlimentos = this.listaAlimentos;
    }else{
      this.listaDeAlimentos = this.listaAlimentos.filter(alimento =>
         alimento.name.includes(this.textoPesquisa));
    }
    this.textoPesquisa = '';
  }

  // Função para redirecionar para a página de detalhes do alimento
  redirectToDetail(id: number){
    this.router.navigate(['dietas', 'detalhes', id]);
  }
}