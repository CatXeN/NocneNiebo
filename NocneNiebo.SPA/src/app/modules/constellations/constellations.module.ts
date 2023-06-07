import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConstellationsRoutingModule } from './constellations-routing.module';
import { ConstellationsContainerComponent } from './container/constellations-container/constellations-container.component';
import { ConstellationEditComponent } from './container/constellation-edit/constellation-edit.component';

@NgModule({
  imports: [
    CommonModule,
    ConstellationsRoutingModule,
    SharedModule
  ],
  declarations: [
    ConstellationsContainerComponent,
    ConstellationEditComponent
  ]
})
export class ConstellationsModule { }
