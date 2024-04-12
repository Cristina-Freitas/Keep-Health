import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { LoginComponent } from '../login/login.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [HeaderComponent,
            SidebarComponent,
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

  constructor(private router: Router) {
    // Carrega os alimentos do localStorage ao inicializar o componente
    const alimentosLocalStorage = localStorage.getItem('alimentos');
    if (alimentosLocalStorage) {
      this.listaAlimentos = JSON.parse(alimentosLocalStorage);
      this.listaDeAlimentos = this.listaAlimentos;
    }
  }

  // Função para buscar alimentos com base no termo de busca
  textoPesquisa: string | undefined;
  filtrar = this.listaAlimentos
  buscarAlimentos(){
    if(!this.textoPesquisa){
      this.filtrar = this.listaAlimentos;
    }else{
      this.filtrar = this.listaAlimentos.filter(alimentos => alimentos.description === this.textoPesquisa);
    }
  
  }

  // Função para redirecionar para a página de detalhes do alimento
  redirectToDetail(name: string): void {
    this.router.navigate(['diet', name]);
  }
}