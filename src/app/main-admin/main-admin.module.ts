import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {CoursesComponent} from './courses/courses.component';
import {CourseAdminComponent} from '../course-admin/course-admin.component';
import {MainAdminRoutingModule} from './main-admin-routing.module';
import {MainAdminComponent} from './main-admin.component';
import {StudentsTableComponent} from './students-table/students-table.component';
import {SharedModule} from '../shared/shared.module';
import { DialogCreateCourseComponent } from './courses/dialog-create-course/dialog-create-course.component';
import { DialogCreateStudentComponent } from './students-table/dialog-create-student/dialog-create-student.component';

@NgModule({
  declarations: [
    CourseAdminComponent,
    MainAdminComponent,
    CoursesComponent,
    StudentsTableComponent,
    DialogCreateCourseComponent,
    DialogCreateStudentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MainAdminRoutingModule
  ],
  entryComponents: [
    DialogCreateCourseComponent,
    DialogCreateStudentComponent
  ]
})
export class MainAdminModule {}