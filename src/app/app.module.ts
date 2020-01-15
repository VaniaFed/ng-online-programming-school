import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {TileComponent} from './tile/tile.component';
import {TileGalleryComponent} from './tile-gallery/tile.gallery.component';
import {DialogCreateCourse, MainAdminComponent} from './pages/main-admin/main-admin.component';
import {RoutingModule} from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    TileGalleryComponent,
    MainAdminComponent,
    DialogCreateCourse
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
    MatDialogModule
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
