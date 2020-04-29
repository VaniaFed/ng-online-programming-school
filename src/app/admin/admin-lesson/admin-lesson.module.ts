import { NgModule } from '@angular/core';

import { AdminLessonRoutingModule } from './admin-lesson-routing.module';
import { AdminLessonComponent } from './admin-lesson.component';
import {SharedModule} from '@shared/shared.module';


@NgModule({
  declarations: [AdminLessonComponent],
  imports: [
    SharedModule,
    AdminLessonRoutingModule
  ]
})
export class AdminLessonModule { }
