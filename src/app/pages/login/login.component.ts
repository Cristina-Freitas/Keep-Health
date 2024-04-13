import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{
  login = new FormGroup({
    emailUsuario: new FormControl(''),
    senhaUsuario: new FormControl('')
  }) 

  usuarios: any[] = [];

  localStorage;

  constructor(private router: Router, @Inject(DOCUMENT) private document: Document ){
    this.localStorage = document.defaultView?.localStorage;
  };

ngOnInit(): void {
  this.usuarios = this.getStorage();
  this.criarUsuario();
}

novoUsuario: any = {
  nomeUsuario: 'Cris',
  emailUsuario: 'crisjf.tina@gmail.com',
  dataNascimentoUsuario: '1979-06-17',
  pesoUsuario: 50,
  alturaUsuario: 160,
  cepUsuario: '88015-600',
  auth: false
};

criarUsuario(){
  let usuarios = this.getStorage();
  if(usuarios.find((usuario:{emailUsuario: string}) => usuario.emailUsuario == this.novoUsuario.emailUsuario)){
     window.alert('Email ja existe!');
  }else{
    usuarios.push(this.novoUsuario);
    this.localStorage?.setItem('usuarios', JSON.stringify(usuarios));
    window.alert('Usuário criado com sucesso!');

  };
}

getStorage(){
  const dadosUsuario: string[] = [];
  const usuarios = this.localStorage?.getItem('usuarios');
  if(!!usuarios){
    return JSON.parse(usuarios);
  }else{
    this.localStorage?.setItem('usuarios', JSON.stringify(dadosUsuario));
    return [];
  }
}

  entrar(){
    if(this.login.value.emailUsuario &&
       this.login.value.senhaUsuario
    ){
      let usuarioEncontrado = this.verificaEmail()
      if(usuarioEncontrado){
        if(usuarioEncontrado.senhaUsuario === this.login.value.senhaUsuario){
          this.usuarios = this.getStorage();
  
          const usuarioLogado = this.usuarios.map((usuario)=>{
            if(usuario.emailUsuario === usuarioEncontrado.emailUsuario){
                return {...usuario, auth: true};
            }
            return usuario;
          });
          this.usuarios = usuarioLogado;
          this.localStorage?.setItem("usuarios", JSON.stringify(this.usuarios))
          this.router.navigate(['/home']);
        }else{
          window.alert('Usuário ou senha inválidos!')
        }
      }
    }
  }

  verificaEmail(){
    let usuarios = this.getStorage();
    return usuarios.find((usuario: {emailUsuario: string | null | undefined;})=> usuario.emailUsuario === this.login.value.emailUsuario);
  };

// const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
// console.log('Email fornecido:', this.login.emailUsuario);
// console.log('Senha fornecida:', this.login.senha);
// const encontrado = usuarios.find((usuario: any) => {
//   console.log('Email armazenado:', usuario.emailUsuario);
//   console.log('Senha armazenada:', usuario.senhaUsuario);
//   return usuario.emailUsuario === this.login.emailUsuario && usuario.senhaUsuario === this.login.senha
// });
   
  esqueciAsenha(){
    if(this.login.value.emailUsuario){
      let usuarioEncontrado = this.verificaEmail();
      if(usuarioEncontrado){
        let usuarios = this.getStorage();
          const usuarioLogado = usuarios.map((usuario: {emailUsuario: any;})=>{
              if(usuario.emailUsuario === usuarioEncontrado.emailUsuario){
                return {...usuario, senha: "a1b2c4d4"};
              };
              return usuario;
          });
          this.localStorage?.setItem("usuarios", JSON.stringify(usuarioLogado));
          window.alert('Sua senha foi alterada para a senha padrão "a1b2c4d4"');
       }else{
        window.alert('Usuário não encontrado!');
      }
    }
      
  //   const senhaPadrao = 'a1b2c4d4';
  //   const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
  //   const encontrado = usuarios.find((usuario: any) => 
  //     usuario.emailUsuario === this.login.value.emailUsuario
  //   );
  //   if(encontrado){
  //     encontrado.senhaUsuario = senhaPadrao;
  //     localStorage.setItem('usuarios', JSON.stringify(usuarios));
  //     window.alert('Sua senha foi alterada para a senha padrão: '+ senhaPadrao);
  //   }else{
  //     window.alert('Usuário não encontrado!');
  //   }
    
  }

}
