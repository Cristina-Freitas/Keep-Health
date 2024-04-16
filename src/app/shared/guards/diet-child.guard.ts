import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, CanActivateChildFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

// export const dietChildGuard: CanActivateChildFn = (childRoute, state) => {
//   return true;
// };
@Injectable({
  providedIn: 'root'
})
export class DietChildGuard implements CanActivateChild {

  constructor(private router: Router) {}

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | 
                                 Promise<boolean | UrlTree> | 
                                 boolean | UrlTree {
      
    // Verificar se o usuário está logado
    const estaLogado = localStorage.getItem('estaLogado') === 'true';

    // Verificar se o parâmetro da rota é um número
    const id = next.params['id'];
    const eNum = /^\d+$/.test(id);

    // Se o usuário estiver logado e o parâmetro da rota for um número, liberar o acesso
    if (estaLogado && eNum) {
      this.router.navigate(['/dietas', 'detalhes/', id]);
      return true;
    } else {
      // Caso contrário, redirecionar para a página de login
      this.router.navigate(['/login']);
      return false;
    }
  }
}