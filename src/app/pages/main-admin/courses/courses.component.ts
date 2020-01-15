import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Tile} from '../../../tile/tile.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  coursesForm: FormGroup;
  courses: Tile[] = [
    {
      text: 'React course',
      imgPath: 'https://reactjs.org/logo-og.png'
    },
    {
      text: 'Vue course',
      imgPath: 'https://miro.medium.com/max/2560/1*Ht8T-vqbqy5iG7FzNQGjFA.png'
    },
    {
      text: 'Angular course',
      imgPath: 'https://miro.medium.com/max/3200/1*Guedpz-wJ5fdffg75bNuIQ.png'
    }
  ];

  constructor(private dialog: MatDialog, formBuilder: FormBuilder) {
    this.coursesForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      imgPath: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
    });
  }

  openDialogCreateCourse() {
    const dialogCreateCourseRef = this.dialog.open(DialogCreateCourse, {
      data: { form: this.coursesForm }
    });
    dialogCreateCourseRef.afterClosed().subscribe(fields => {
      // TODO:
      // add course
      // http request
      // rx operations
      console.log(fields);
    });
  }
}

interface DialogData {
  form: FormGroup;
}
@Component({
  selector: 'dialog-create-course',
  templateUrl: 'dialog-create-course.html',
})
// tslint:disable-next-line:component-class-suffix
export class DialogCreateCourse {
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogCreateCourse>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.form = data.form;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
