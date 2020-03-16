import {Injectable} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {DialogComponent} from './dialog.component';

@Injectable()
export class DialogService {
  constructor(private dialog: MatDialog) {}
  dialogRef: MatDialogRef<DialogComponent>;

  public open(options) {
    this.dialogRef = this.dialog.open(DialogComponent, {
      data: {
        title: options.title,
        content: options.content,
        cancelText: options.cancelText,
        confirmText: options.confirmText
      }
    });
  }

  public confirmed(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(take(1), map(res => {
        return res;
      }
    ));
  }
}
