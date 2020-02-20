import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Store, select} from '@ngrx/store';
import {MatDialog} from '@angular/material';
import {Observable} from 'rxjs';
import {addCourse} from './courses.actions';
import { CoursesState } from './courses.reducer';
import {ICourse} from './types';
import {coursesToTile} from './coursesToTile';
import {Tile} from '../../shared/tile/tile.component';
import { DialogCreateCourseComponent } from './dialog-create-course/dialog-create-course.component';

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
    const dialogCreateCourseRef = this.dialog.open(DialogCreateCourseComponent, {
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

