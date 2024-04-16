import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { DietDetailComponent } from './diet-detail/diet-detail.component';
import { authGuard } from '../../shared/guards/auth.guard';
import { RouterModule } from '@angular/router';

const dietRoutes: Routes = [
  { path: "/detalhes/:id",
    component: DietDetailComponent,
    canActivate: [authGuard],
  },
]


@NgModule({
  declarations: [],
  imports: [ CommonModule,
             RouterModule.forChild(dietRoutes),
  ]
})
export class DietModule { }
