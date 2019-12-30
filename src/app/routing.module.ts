import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MainAdminComponent} from './pages/main-admin/main-admin.component';

const routingSchematics: Routes = [
  {
    path: 'admin',
    component: MainAdminComponent
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
