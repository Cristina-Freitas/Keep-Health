import { CommonModule, DOCUMENT, DatePipe } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
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
    nomeUsuario: new FormControl('', Validators.required),
    emailUsuario: new FormControl('', Validators.required),
    dataNascimentoUsuario: new FormControl('', Validators.required),
    pesoUsuario: new FormControl('', [Validators.required]),
    alturaUsuario: new FormControl('', [Validators.required]),
    cepUsuario: new FormControl('', Validators.required),
    senhaUsuario: new FormControl('', [Validators.minLength(4), Validators.required]),
    confirmarSenhaUsuario: new FormControl('', [Validators.minLength(4), Validators.required])
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
    return this.cadastro.value.senhaUsuario === 
           this.cadastro.value.confirmarSenhaUsuario    
  }
  cadastrar(){
    if(this.camposValidos() && this.senhasIguais()){
       
       let usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
        usuarios.push(this.cadastro.value);
        localStorage.setItem('usuarios', JSON.stringify(usuarios)); 
        this.router.navigate(['']);
        this.cadastro.reset();
    }else{
      window.alert('Preencha todos os campos corretamente e verifique se as senhas conferem para prosseguir!')
    }
  }

  }

