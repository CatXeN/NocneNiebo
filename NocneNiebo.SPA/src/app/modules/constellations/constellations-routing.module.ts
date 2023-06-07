import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstellationsContainerComponent } from './container/constellations-container/constellations-container.component';
import { ConstellationEditComponent } from './container/constellation-edit/constellation-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ConstellationsContainerComponent
  },
  {
    path: 'edit/:id',
    component: ConstellationEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConstellationsRoutingModule {}
