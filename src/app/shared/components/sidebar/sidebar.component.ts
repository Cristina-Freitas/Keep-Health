import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  // imports: [RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  constructor(private router: Router) { }
dietas() {
this.router.navigate(['dietas']);
}
perfil() {
this.router.navigate(['perfil']);
}
home() {
this.router.navigate(['home']);
}
sair() {
  this.router.navigate(['login']);
  }

}
