import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalculaIdadePipe } from '../../pipes/calcula-idade.pipe';
import { Router, RouterLink } from '@angular/router';
import { CadastroComponent } from '../cadastro/cadastro.component';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { LoginComponent } from '../login/login.component';
import { AlturaEmMetrosPipe } from '../../pipes/altura-em-metros.pipe';
import { AddressService } from '../../services/address.service';

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    imports: [CalculaIdadePipe,
              AlturaEmMetrosPipe,
              HeaderComponent,
              SidebarComponent,
              LoginComponent,
              RouterLink,
              CadastroComponent,
              CommonModule,
              FormsModule
    ]
})
export class ProfileComponent {
  idade: any | undefined;
  usuario: any = [] ;
  address: any | undefined;
  cep: string = '';

constructor(private router: Router, 
  private addressService: AddressService) {
const usuariosLocalStorage = localStorage.getItem('usuarios');
if(usuariosLocalStorage){
const usuarios = JSON.parse(usuariosLocalStorage);
const usuarioLogado = usuarios.find((usuario: any) => usuario.auth === true);
if(usuarioLogado){
this.usuario = usuarioLogado
};
}
}

  getStorage(){
    const usuarios = localStorage.getItem("usuarios");
    if(!!usuarios){
      return JSON.parse(usuarios);
    }else{
      return[];
    }
  };

  verificaUsuarioLogado(){
    let usuarios = this.getStorage();
    return usuarios.find((usuario: {auth: boolean | null | undefined;})=>{
      usuario.auth === true
    })
  }

  buscarCep(): void {
    if (this.cep) {
      this.addressService.getAddress(this.cep).subscribe({
        next: (response: any): void => {
          this.address = response;
        },
        error: (error: any) => {
          console.error('Erro ao buscar endereço:', error);
        }
      });
    } else {
      console.error('CEP não especificado.');
    }
  }


};



