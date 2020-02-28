import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CourseAdminComponent} from './course-admin/course-admin.component';

const routingSchematics: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'admin',
    pathMatch: 'full',
    loadChildren: () => import('./main-admin/main-admin.module').then(m => m.MainAdminModule)
  },
  {
    path: 'admin/course/:id',
    redirectTo: 'courses/:id'
  },
  {
    path: 'admin/courses/:id',
    loadChildren: () => import('./course-admin/course-admin.module').then(m => m.CourseAdminModule)
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routingSchematics)
  ]
})
export class AppRoutingModule { }
