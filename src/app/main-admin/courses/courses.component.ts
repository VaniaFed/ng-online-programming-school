import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {ICourse} from './types';
import { DialogCreateCourseComponent } from './dialog-create-course/dialog-create-course.component';
import {CoursesService} from '../../shared/courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  coursesForm: FormGroup;
  public courses: ICourse[] = [];

  constructor(private dialog: MatDialog, formBuilder: FormBuilder, private coursesService: CoursesService) {
    this.coursesForm = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      imgSrc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
    });
    coursesService.getCourses()
      .subscribe(
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
          this.addCourse(course);
        }
        this.coursesForm.reset();
      });
  }
}
