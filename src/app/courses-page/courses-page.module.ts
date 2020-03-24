import {NgModule} from '@angular/core';
import {CoursesPageComponent} from './courses-page.component';
import {CoursesPageRoutingModule} from './courses-page-routing.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [CoursesPageComponent],
  imports: [
    SharedModule,
    CoursesPageRoutingModule
  ]
})
export class CoursesPageModule { }
