import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatTableModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {RouterModule} from '@angular/router';

import {TileGalleryComponent} from './tile-gallery/tile-gallery.component';
import {TileComponent} from './tile/tile.component';
import {HttpClientModule} from '@angular/common/http';
import {CoursesService} from './courses.service';
import {CoursesToTilePipe} from './courses-to-tile.pipe';
import {OverlayComponent} from './overlay/overlay.component';
import {LessonsService} from './lessons.service';

const components = [
  TileGalleryComponent,
  TileComponent,
  OverlayComponent
];

const modules = [
  CommonModule,
  HttpClientModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
  MatProgressSpinnerModule
];

@NgModule({
  declarations: [
    ...components,
    CoursesToTilePipe
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules,
    CoursesToTilePipe
  ],
  providers: [CoursesService, LessonsService]
})
export class SharedModule { }
