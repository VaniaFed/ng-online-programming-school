import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    loadChildren: () => import('./main-admin/main-admin.module').then(m => m.MainAdminModule)
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
