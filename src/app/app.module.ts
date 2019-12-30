import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {ModalComponent} from './modal/modal.component';
import {AppComponent} from './app.component';
import {TileComponent} from './tile/tile.component';
import {GalleryComponent} from './gallery/gallery.component';
import {DialogCreateCourse, MainAdminComponent} from './pages/main-admin/main-admin.component';
import {RoutingModule} from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    GalleryComponent,
    MainAdminComponent,
    ModalComponent,
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
