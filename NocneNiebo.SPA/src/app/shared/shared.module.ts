import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material';
import {NgxMatTimepickerModule} from 'ngx-mat-timepicker';

@NgModule({
    declarations: [
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        ReactiveFormsModule,
        MaterialModule,
        FormsModule,
        NgxMatTimepickerModule
    ],
    exports: [
        CommonModule,
        HttpClientModule,
        RouterModule,
        ReactiveFormsModule,
        MaterialModule,
        FormsModule
    ],
    providers: [],
    bootstrap: []
  })
  export class SharedModule { }
