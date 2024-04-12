import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/components/header/header.component';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-diet',
  standalone: true,
  imports: [HeaderComponent,
            SidebarComponent,
            LoginComponent
  ],
  templateUrl: './diet.component.html',
  styleUrl: './diet.component.css'
})
export class DietComponent {

}
