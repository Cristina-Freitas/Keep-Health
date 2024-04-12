import { Component } from '@angular/core';
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
export class DietDetailComponent {
    alimentos: any = {};
    nomeAlimento: string = '';

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private location: Location
    ){};

    ngOnInit(){
        this.activatedRoute.params.subscribe((parameters)=>{
            this.nomeAlimento = parameters['id'];
        });

        let listaAlimentos = this.getStorage('alimentos')
        let pesquisado = listaAlimentos.filter((pesquisado: {name: string | undefined;}) =>
                                                pesquisado.name === this.alimentos);
        this.nomeAlimento = pesquisado[0];
    };

    getStorage(alimentos: string){
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
