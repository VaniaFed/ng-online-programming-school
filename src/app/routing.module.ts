import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainAdminComponent} from './pages/main-admin/main-admin.component';
import {CourseAdminComponent} from './pages/course-admin/course-admin.component';

const routingSchematics: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    component: MainAdminComponent,
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
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routingSchematics)
  ]
})
export class RoutingModule { }
