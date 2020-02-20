import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CoursesComponent, DialogCreateCourse} from './courses/courses.component';
import {CourseAdminComponent} from '../course-admin/course-admin.component';
import {MainAdminRoutingModule} from './main-admin-routing.module';
import {MainAdminComponent} from './main-admin.component';
import {DialogCreateStudent, StudentsTableComponent} from './students-table/students-table.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    CourseAdminComponent,
    MainAdminComponent,
    CoursesComponent,
    StudentsTableComponent,
    DialogCreateCourse,
    DialogCreateStudent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MainAdminRoutingModule
  ],
  entryComponents: [
    DialogCreateCourse,
    DialogCreateStudent
  ]
})
export class MainAdminModule {}
