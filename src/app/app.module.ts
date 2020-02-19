import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {addCourseReducer} from './main-admin/courses/courses.reducer';
import {addStudentReducer} from './main-admin/students-table/students.reducer';
import {MainAdminModule} from './main-admin/main-admin.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      courses: addCourseReducer,
      students: addStudentReducer
    }),
    StoreDevtoolsModule.instrument({maxAge: 10}),
    MainAdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
