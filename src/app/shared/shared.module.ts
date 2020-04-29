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

import {
  BreadcrumbsComponent,
  CardComponent,
  LessonsListComponent,
  OverlayComponent,
  SectionComponent,
  TileComponent,
  TileGalleryComponent,
  HeaderComponent
} from './components';
import {CoursesToTilePipe, SafePipe} from './pipes';
import {httpInterceptorProviders} from '../security/interceptors';
import {UserGuard, AdminGuard} from '../security/guards';

const components = [
  TileGalleryComponent,
  TileComponent,
  OverlayComponent,
  BreadcrumbsComponent,
  SectionComponent,
  CardComponent,
  LessonsListComponent,
  HeaderComponent
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
