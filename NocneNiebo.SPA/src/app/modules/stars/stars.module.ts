import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarContainerComponent } from './container/star-container/star-container.component';
import { StarsRoutingModule } from './stars-routing.module';
import { StarEditComponent } from './container/star-edit/star-edit.component';

@NgModule({
  imports: [
    CommonModule,
    StarsRoutingModule,
    SharedModule
  ],
  declarations: [
    StarContainerComponent,
    StarEditComponent
  ]
})
export class StarModule { }
