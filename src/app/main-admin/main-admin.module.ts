import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatDialogModule, MatInputModule, MatTableModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material';

import {CoursesComponent, DialogCreateCourse} from './courses/courses.component';
import {TileGalleryComponent} from '../shared/tile-gallery/tile.gallery.component';
import {TileComponent} from '../shared/tile/tile.component';
import {CourseAdminComponent} from '../course-admin/course-admin.component';
import {MainAdminRoutingModule} from './main-admin-routing-module';
import {MainAdminComponent} from './main-admin.component';
import {DialogCreateStudent, StudentsTableComponent} from './students-table/students-table.component';

@NgModule({
  declarations: [
    CourseAdminComponent,
    MainAdminComponent,
    CoursesComponent,
    StudentsTableComponent,
    TileGalleryComponent,
    TileComponent,
    DialogCreateCourse,
    DialogCreateStudent
  ],
  imports: [
    CommonModule,
    MainAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    MatTableModule,
  ],
  exports: [
    MatDialogModule
  ],
  entryComponents: [
    DialogCreateCourse,
    DialogCreateStudent
  ]
})
export class MainAdminModule {}
