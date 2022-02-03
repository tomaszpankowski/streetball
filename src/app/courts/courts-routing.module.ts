import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourtsComponent } from './courts/courts.component';

const routes: Routes = [
  {
    path:"courts",
    component: CourtsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourtsRoutingModule { }
