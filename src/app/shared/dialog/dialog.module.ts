import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DialogComponent} from './dialog.component';
import {SharedModule} from '../shared.module';
import {DialogService} from './dialog.service';

@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    DialogComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  providers: [DialogService]
})
export class DialogModule { }
