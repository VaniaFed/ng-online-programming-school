import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CourseAdminRoutingModule} from './course-admin-routing.module';
import {CourseAdminComponent} from './course-admin.component';
import {CoursesService} from './courses.service';

@NgModule({
  declarations: [
    CourseAdminComponent,
  ],
  imports: [
    SharedModule,
    CourseAdminRoutingModule
  ],
  providers: [CoursesService]
})
export class CourseAdminModule { }
