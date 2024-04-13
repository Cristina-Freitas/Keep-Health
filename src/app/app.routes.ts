import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DietComponent } from './pages/diet/diet.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DietDetailComponent } from './pages/diet/diet-detail/diet-detail.component';

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
        children:[
            { path: '', component: DietComponent},
            { path: ':alimento', component: DietDetailComponent},
            { path: ':id', component: DietDetailComponent}
        ]
    },

    {
        path: 'detalhes',
        component: DietDetailComponent
    },

    {
        path: 'perfil',
        component: ProfileComponent
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