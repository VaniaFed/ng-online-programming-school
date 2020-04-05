import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminLessonComponent} from './admin-lesson.component';


const routes: Routes = [
  {
    path: '',
    component: AdminLessonComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminLessonRoutingModule { }
