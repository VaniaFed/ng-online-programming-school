import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CourseAdminRoutingModule} from './course-admin-routing.module';
import {CourseAdminComponent} from './course-admin.component';
import {CoursesService} from '../shared/courses.service';
import { CourseLessonsComponent } from './course-lessons/course-lessons.component';
import { DialogCreateLessonComponent } from './course-lessons/dialog-create-lesson/dialog-create-lesson.component';

@NgModule({
  declarations: [
    CourseAdminComponent,
    CourseLessonsComponent,
    DialogCreateLessonComponent,
  ],
  imports: [
    SharedModule,
    CourseAdminRoutingModule
  ],
  entryComponents: [DialogCreateLessonComponent],
  providers: [CoursesService]
})
export class CourseAdminModule { }
