import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourtsRoutingModule } from './courts-routing.module';
import { CourtsComponent } from './courts/courts.component';
import { CourtsS1Component } from './courts-s1/courts-s1.component';
import { CourtsS2Component } from './courts-s2/courts-s2.component';


@NgModule({
  declarations: [
    CourtsComponent,
    CourtsS1Component,
    CourtsS2Component
  ],
  imports: [
    CommonModule,
    CourtsRoutingModule
  ]
})
export class CourtsModule { }
