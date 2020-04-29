import { NgModule } from '@angular/core';

import {CoursesComponent} from './courses/courses.component';
import {MainAdminRoutingModule} from './main-admin-routing.module';
import {MainAdminComponent} from './main-admin.component';
import {StudentsTableComponent} from './students-table/students-table.component';
import {SharedModule} from '@shared/shared.module';
import { DialogCreateCourseComponent } from './courses/dialog-create-course/dialog-create-course.component';
import { DialogCreateStudentComponent } from './students-table/dialog-create-student/dialog-create-student.component';
import {StudentsService} from './students-table/students.service';

@NgModule({
  declarations: [
    MainAdminComponent,
    CoursesComponent,
    StudentsTableComponent,
    DialogCreateCourseComponent,
    DialogCreateStudentComponent
  ],
  imports: [
    SharedModule,
    MainAdminRoutingModule
  ],
  entryComponents: [
    DialogCreateCourseComponent,
    DialogCreateStudentComponent
  ],
  providers: [StudentsService]
})
export class MainAdminModule {}
