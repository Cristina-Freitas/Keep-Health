import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login = {
    emailUsuario: '',
    senha: ''
  };

  constructor(private router: Router ){}

  entrar(){
const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
console.log('Email fornecido:', this.login.emailUsuario);
console.log('Senha fornecida:', this.login.senha);
const encontrado = usuarios.find((usuario: any) => {
  console.log('Email armazenado:', usuario.emailUsuario);
  console.log('Senha armazenada:', usuario.senhaUsuario);
  return usuario.emailUsuario === this.login.emailUsuario && usuario.senhaUsuario === this.login.senha
});

    if(encontrado){
      this.router.navigate(['/home']);
    }else{
      window.alert('Usuário ou senha inválidos!')
    }
  }

  esqueciAsenha(){
    const senhaPadrao = 'a1b2c4d4';
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const encontrado = usuarios.find((usuario: any) => 
      usuario.emailUsuario === this.login.emailUsuario
    );
    if(encontrado){
      encontrado.senhaUsuario = senhaPadrao;
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      window.alert('Sua senha foi alterada para a senha padrão: '+ senhaPadrao);
    }else{
      window.alert('Usuário não encontrado!');
    }
    
  }

}
