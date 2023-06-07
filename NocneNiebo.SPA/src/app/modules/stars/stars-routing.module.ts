import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StarContainerComponent } from './container/star-container/star-container.component';
import { StarEditComponent } from './container/star-edit/star-edit.component';

const routes: Routes = [
  {
    path: '',
    component: StarContainerComponent
  },
  {
    path: 'edit/:id',
    component: StarEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarsRoutingModule {}
