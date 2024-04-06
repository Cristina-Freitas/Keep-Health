import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, SidebarComponent]
})
export class AppComponent implements OnInit {
  title = 'Keep-Health';

  ngOnInit() {
    console.log('Teste');
    const alimentos = [
      {
        id: 1,
      name: 'Abacate',
      description: '...',
      qttCalories: 0,
      qttDaysFeed: 3,
      imageLink: ''
      }
    ];
    localStorage.setItem('alimentos', JSON.stringify(alimentos));
  }
}
