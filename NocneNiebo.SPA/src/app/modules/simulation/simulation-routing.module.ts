import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimulationContainerComponent } from './container/simulation-container/simulation-container.component';

const routes: Routes = [
  {
    path: '',
    component: SimulationContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulationRoutingModule {}
