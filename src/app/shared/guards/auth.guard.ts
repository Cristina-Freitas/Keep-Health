import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let usuarios = localStorage.getItem("usuarios");
  let usuario = null;
  if (!!usuarios) {
    let usuariosSt = JSON.parse(usuarios);
    if (!!usuariosSt) {
      usuario = usuariosSt.find((usuario: { auth: boolean | null | undefined; }) => 
                                     usuario.auth == true);
    };
  };
  if (usuario) {
    return true;
  } else {
    router.navigate(["login"]);
    return false;
  };

};
