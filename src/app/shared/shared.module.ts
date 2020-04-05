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
import {SafePipe} from './safe.pipe';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {SectionComponent} from './section/section.component';
import {CardComponent} from './card/card.component';
import {LessonsListComponent} from './lessons-list/lessons-list.component';

const components = [
  TileGalleryComponent,
  TileComponent,
  OverlayComponent,
  BreadcrumbsComponent,
  SectionComponent,
  CardComponent,
  LessonsListComponent,
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

const pipes = [
  CoursesToTilePipe,
  SafePipe
];

@NgModule({
  declarations: [
    ...components,
    ...pipes,
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules,
    ...pipes
  ],
  providers: [CoursesService, LessonsService]
})
export class SharedModule { }
