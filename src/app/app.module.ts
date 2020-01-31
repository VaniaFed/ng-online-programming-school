import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


import {AppComponent} from './app.component';
import {TileComponent} from './tile/tile.component';
import {TileGalleryComponent} from './tile-gallery/tile.gallery.component';
import {MainAdminComponent} from './pages/main-admin/main-admin.component';
import {RoutingModule} from './routing.module';
import {StudentsTableComponent, DialogCreateStudent} from './pages/main-admin/students-table/students-table.component';
import {CoursesComponent, DialogCreateCourse} from './pages/main-admin/courses/courses.component';
import {addCourseReducer} from './pages/main-admin/courses/courses.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    TileGalleryComponent,
    MainAdminComponent,
    DialogCreateCourse,
    StudentsTableComponent,
    CoursesComponent,
    DialogCreateStudent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    StoreModule.forRoot({courses: addCourseReducer}),
    StoreDevtoolsModule.instrument({maxAge: 10})
  ],
  exports: [
    MatDialogModule
  ],
  entryComponents: [
    DialogCreateCourse,
    DialogCreateStudent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
