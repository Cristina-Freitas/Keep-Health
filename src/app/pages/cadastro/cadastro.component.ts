import { CommonModule, DOCUMENT, DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    CommonModule,
    DatePipe
  ],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.scss'
})
export class CadastroComponent {
  cadastro = new FormGroup({
    nomeUsuario: new FormControl(''),
    emailUsuario: new FormControl(''),
    dataNascimentoUsuario: new FormControl(''),
    pesoUsuario: new FormControl(0),
    alturaUsuario: new FormControl(0),
    cepUsuario: new FormControl(''),
    senhaUsuario: new FormControl(''),
    confirmarSenhaUsuario: new FormControl('')
  });

  localStorage;

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document){
    this.localStorage = document.defaultView?.localStorage;
  }

  camposValidos(): boolean {
    return !!(
           this.cadastro.value.nomeUsuario && 
           this.cadastro.value.emailUsuario && 
           this.cadastro.value.dataNascimentoUsuario && 
           this.cadastro.value.pesoUsuario &&
           this.cadastro.value.alturaUsuario &&
           this.cadastro.value.cepUsuario &&
           this.cadastro.value.senhaUsuario &&
           this.cadastro.value.confirmarSenhaUsuario
    );
  };

  senhasIguais(): boolean {
    return this.cadastro.value.senhaUsuario === this.cadastro.value.confirmarSenhaUsuario
    
  }
  cadastrar(){
    if(this.camposValidos() && this.senhasIguais()){
       
       let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        usuarios.push(this.cadastro.value);
        localStorage.setItem('usuarios', JSON.stringify(usuarios)); 
        this.router.navigate(['']);
    }else{
      window.alert('Preencha todos os campos corretamente e verifique se as senhas conferem para prosseguir!')
    }
  }

  }

