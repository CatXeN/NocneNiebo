import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'stars',
        loadChildren: () => import('./modules/stars/stars.module').then(m => m.StarModule)
      },
      {
        path: 'constellations',
        loadChildren: () => import('./modules/constellations/constellations.module').then(m => m.ConstellationsModule)
      },
      {
        path: 'simulation',
        loadChildren: () => import('./modules/simulation/simulation.module').then(m => m.SimulationModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
