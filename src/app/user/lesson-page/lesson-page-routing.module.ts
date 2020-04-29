import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LessonPageComponent} from './lesson-page.component';

const routes: Routes = [
  {
    path: '',
    component: LessonPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonPageRoutingModule { }
