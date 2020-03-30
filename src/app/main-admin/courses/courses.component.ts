import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {ICourse} from './types';
import { DialogCreateCourseComponent } from './dialog-create-course/dialog-create-course.component';
import {CoursesService} from '../../shared/courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html'
})
export class CoursesComponent {
  coursesForm: FormGroup;
  public courses: ICourse[] = [];

  constructor(private dialog: MatDialog, formBuilder: FormBuilder, private coursesService: CoursesService) {
    this.coursesForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      description: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(300)]],
      price: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      imgSrc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(200)]],
    });
    const courses$ = coursesService.getCourses();
    courses$.subscribe(
      courses => this.courses = courses
    );
  }

  addCourse(course: ICourse) {
    this.coursesService.addCourse(course)
      .subscribe(
        () => this.courses = [...this.courses, course]
      );
  }

  openDialogCreateCourse() {
    const dialogCreateCourseRef = this.dialog.open(DialogCreateCourseComponent, {
      data: { form: this.coursesForm }
    });
    dialogCreateCourseRef.afterClosed()
      .subscribe((course: ICourse) => {
        if (course !== undefined) {
          console.log(course);
          this.addCourse(course);
        }
        this.coursesForm.reset();
      });
  }
}
