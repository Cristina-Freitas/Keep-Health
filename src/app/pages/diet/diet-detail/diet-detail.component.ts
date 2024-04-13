import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../../shared/components/header/header.component";
import { SidebarComponent } from "../../../shared/components/sidebar/sidebar.component";
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
    selector: 'app-diet-detail',
    standalone: true,
    templateUrl: './diet-detail.component.html',
    styleUrl: './diet-detail.component.css',
    imports: [HeaderComponent, 
              SidebarComponent
            ]
})
export class DietDetailComponent implements OnInit{
  alimento: any;  
  alimentos: any = {};
  nomeAlimento: string = '';

    constructor(private route: ActivatedRoute,
                private location: Location
    ){};

    ngOnInit(){
       // Captura o id do alimento da rota
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Carrega as informações do alimento com base no id (pode ser obtido do localStorage)
      const alimentosLocalStorage = localStorage.getItem('alimentos');
      if (alimentosLocalStorage) {
        const alimentos: any[] = JSON.parse(alimentosLocalStorage);
        this.alimento = alimentos.find(alimento => 
                          alimento.id === Number(id));       
    };
  });
}
    getStorage(){
        const alimentoLocalStorage = localStorage.getItem("alimentos");
        if(!!alimentoLocalStorage){
          return JSON.parse(alimentoLocalStorage);
        }else{
          return[];
        }
      };

voltar() {
this.location.back();
}


}
