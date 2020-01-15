import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TileComponent} from './tile/tile.component';
import {TileGalleryComponent} from './tile-gallery/tile.gallery.component';
import {MainAdminComponent} from './pages/main-admin/main-admin.component';
import {RoutingModule} from './routing.module';
import {CoursesTableComponent} from './pages/main-admin/courses-table/courses-table.component';
import {CoursesComponent, DialogCreateCourse} from './pages/main-admin/courses/courses.component';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    TileGalleryComponent,
    MainAdminComponent,
    DialogCreateCourse,
    CoursesTableComponent,
    CoursesComponent
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
    MatTableModule
  ],
  exports: [
    MatDialogModule
  ],
  entryComponents: [
    DialogCreateCourse
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
