import {Component, Inject} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

interface DialogData {
  form: FormGroup;
}
@Component({
  selector: 'dialog-create-course',
  templateUrl: 'dialog-create-course.component.html',
})
// tslint:disable-next-line:component-class-suffix
export class DialogCreateCourseComponent {
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogCreateCourseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.form = data.form;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
