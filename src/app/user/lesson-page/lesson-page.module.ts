import { NgModule } from '@angular/core';

import { LessonPageRoutingModule } from './lesson-page-routing.module';
import { LessonPageComponent } from './lesson-page.component';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  declarations: [LessonPageComponent],
  imports: [
    SharedModule,
    LessonPageRoutingModule
  ]
})
export class LessonPageModule { }
