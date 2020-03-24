import { NgModule } from '@angular/core';

import { CoursePageRoutingModule } from './course-page-routing.module';
import { CoursePageComponent } from './course-page.component';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [CoursePageComponent],
  imports: [
    SharedModule,
    CoursePageRoutingModule
  ]
})
export class CoursePageModule { }
