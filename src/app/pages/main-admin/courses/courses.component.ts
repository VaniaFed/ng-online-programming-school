import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Store, select } from '@ngrx/store';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {Observable} from 'rxjs';
import {addCourse} from './courses.actions';
import { CoursesState } from './courses.reducer';
import {ICourse} from './types';
import {coursesToTile} from './coursesToTile';
import {Tile} from '../../../tile/tile.component';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  coursesForm: FormGroup;
  courses$: Observable<any>;
  coursesAsTile: Tile[];

  constructor(private dialog: MatDialog, formBuilder: FormBuilder, private store: Store<CoursesState>) {
    this.coursesForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      imgSrc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
    });
    this.courses$ = store.pipe(select('courses'));
    this.courses$.subscribe(({courses}) => {
      this.coursesAsTile = coursesToTile(courses);
    });
  }

  addCourse(course: ICourse) {
    this.store.dispatch(addCourse({course}));
  }

  openDialogCreateCourse() {
    const dialogCreateCourseRef = this.dialog.open(DialogCreateCourse, {
      data: { form: this.coursesForm }
    });
    dialogCreateCourseRef.afterClosed().subscribe((course: ICourse) => {
      if (course !== undefined) {
        this.addCourse(course);
      }
      this.coursesForm.reset();
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
