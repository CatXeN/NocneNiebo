import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimulationContainerComponent } from './container/simulation-container/simulation-container.component';
import { SimulationRoutingModule } from './simulation-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SimulationRoutingModule,
    SharedModule
  ],
  declarations: [
    SimulationContainerComponent
  ]
})
export class SimulationModule { }
