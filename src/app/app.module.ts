import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TileComponent } from './tile/tile.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MainAdminComponent } from './pages/main-admin/main-admin.component';
import {RouterModule} from '@angular/router';
import {RoutingModule} from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    GalleryComponent,
    MainAdminComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
