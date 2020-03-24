import {Component, Inject} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

interface DialogData {
  form: FormGroup;
}

@Component({
  selector: 'app-dialog-create-lesson',
  templateUrl: './dialog-create-lesson.component.html'
})
export class DialogCreateLessonComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<DialogCreateLessonComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.form = data.form;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
