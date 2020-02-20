import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule, MatTableModule} from '@angular/material';
import {RouterModule} from '@angular/router';

import {TileGalleryComponent} from './tile-gallery/tile-gallery.component';
import {TileComponent} from './tile/tile.component';

const components = [
  TileGalleryComponent,
  TileComponent,
];

const modules = [
  CommonModule,
  RouterModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatDialogModule,
  MatTableModule,
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules
  ]
})
export class SharedModule { }
