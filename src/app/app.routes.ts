import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DietasComponent } from './pages/dietas/dietas.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { HeaderComponent } from './shared/components/header/header.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
     
    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'cadastro',
        component: CadastroComponent
    },

    {
        path: 'sidebar',
        component: SidebarComponent
    },

    {
        path: 'header',
        component: HeaderComponent
    },

    {
        path: 'inicio',
        component: InicioComponent
    },
    
    {
        path: 'dietas',
        component: DietasComponent
    },

    {
        path: 'dietas',
        component: DietasComponent
    },

    {
        path: 'perfil',
        component: PerfilComponent
    }
    // {
    //     path: '**', redirectTo: ''
    // }
];

// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })
//   export class AppRoutingModule { }