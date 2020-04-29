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
import {HttpClientModule} from '@angular/common/http';

import {TileGalleryComponent} from './tile-gallery/tile-gallery.component';
import {TileComponent} from './tile/tile.component';
import {CoursesToTilePipe} from './courses-to-tile.pipe';
import {OverlayComponent} from './overlay/overlay.component';
import {SafePipe} from './safe.pipe';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {SectionComponent} from './section/section.component';
import {CardComponent} from './card/card.component';
import {LessonsListComponent} from './lessons-list/lessons-list.component';
import {httpInterceptorProviders} from '../security/interceptors';
import {UserGuard} from '../security/guards';
import {AdminGuard} from '../security/guards';

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
  providers: [
    httpInterceptorProviders,
    UserGuard,
    AdminGuard
  ]
})
export class SharedModule { }
