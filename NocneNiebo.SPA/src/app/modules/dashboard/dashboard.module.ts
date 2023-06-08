import { SharedModule } from './../../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './container/dashboard-container/dashboard-container.component';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxMatTimepickerModule
  ],
  declarations: [
    DashboardContainerComponent
  ]
})
export class DashboardModule { }
