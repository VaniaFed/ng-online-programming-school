import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseAdminComponent} from '../course-admin/course-admin.component';
import {MainAdminComponent} from './main-admin.component';


const routes: Routes = [
  {
    path: '',
    component: MainAdminComponent
  },
  {
    path: 'courses/:id',
    component: CourseAdminComponent
  },
  {
    path: 'course/:id',
    redirectTo: 'courses/:id'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAdminRoutingModule { }
