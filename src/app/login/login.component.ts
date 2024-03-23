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
    if(this.login.emailUsuario && this.login.senha){
      this.router.navigate(['/home']);
    }else{
      window.alert('Digite seu email e senha para prosseguir!')
    }
  }

}
