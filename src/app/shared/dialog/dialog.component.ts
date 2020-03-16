import {Component, Inject} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

export interface Field {
  formControlName: string;
  placeholder: string;
}
interface DialogData {
  form: FormGroup;
  title: string;
  actionName: string;
  fields: Field[];
}
@Component({
  selector: 'dialog',
  templateUrl: 'dialog.component.html',
})
export class DialogComponent {
  form: FormGroup;
  title: string;
  actionName: string;
  fields: any;
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.title = data.title;
    this.form = data.form;
    this.actionName = data.actionName;
    this.fields = data.fields;

    console.group('dialog props');
    console.log(data);
    console.groupEnd();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
