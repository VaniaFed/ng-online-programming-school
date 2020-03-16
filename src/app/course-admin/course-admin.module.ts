import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CourseAdminRoutingModule} from './course-admin-routing.module';
import {CourseAdminComponent} from './course-admin.component';
import {CoursesService} from '../shared/courses.service';
import { CourseLessonsComponent } from './course-lessons/course-lessons.component';

@NgModule({
  declarations: [
    CourseAdminComponent,
    CourseLessonsComponent,
  ],
  imports: [
    SharedModule,
    CourseAdminRoutingModule
  ],
  providers: [CoursesService]
})
export class CourseAdminModule { }
