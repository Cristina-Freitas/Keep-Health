import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    CommonModule
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  cadastro = {
    nomeUsuario: '',
    emailUsuario: '',
    dataNascimentoUsuario: '',
    senhaUsuario: '',
    confirmarSenhaUsuario: ''
  };

  constructor(private router: Router){}

  camposValidos(): boolean {
    return !!(
           this.cadastro.nomeUsuario && 
           this.cadastro.emailUsuario && 
           this.cadastro.dataNascimentoUsuario && 
           this.cadastro.senhaUsuario &&
           this.cadastro.confirmarSenhaUsuario
    );
  };

  senhasIguais(): boolean {
    return this.cadastro.senhaUsuario === this.cadastro.confirmarSenhaUsuario
    
  }
  cadastrar(){
    if(this.camposValidos() && this.senhasIguais()){
       
       let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        usuarios.push(this.cadastro);
        localStorage.setItem('usuarios', JSON.stringify(usuarios)); 
        this.router.navigate(['']);
    }else{
      window.alert('Preencha todos os campos corretamente e verifique se as senhas conferem para prosseguir!')
    }
  }

  }

