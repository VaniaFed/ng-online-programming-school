import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CoursesService} from '../shared/courses.service';
import {ICourse} from '../main-admin/courses/types';
import {courseToTile} from '../../libs/courseToTile';
import {Tile} from '../shared/tile/tile.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Course} from '../main-admin/courses/course.model';

@Component({
  selector: 'app-course-admin',
  templateUrl: './course-admin.component.html'
})
export class CourseAdminComponent {
  course = new Course();
  courseAsTile = new Tile();
  form: FormGroup;
  shouldShowSpinner = false;
  courseId: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private coursesService: CoursesService,
    private formBuilder: FormBuilder
  ) {
    activatedRoute.params
      .subscribe(
        ({ id: courseId }) => this.init(courseId)
      );
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      price: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      imgSrc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
    });
  }

  init(courseId) {
    this.shouldShowSpinner = true;
    this.courseId = courseId;
    const course$ = this.coursesService.getCourse(courseId);
    course$.subscribe(
      course => {
        this.course = course;
        this.courseAsTile = courseToTile(course);
        this.form.controls.name.setValue(course.name);
        this.form.controls.price.setValue(course.price);
        this.form.controls.imgSrc.setValue(course.imgSrc);
        this.shouldShowSpinner = false;
      }
    );
  }

  changeCourse(editedCourse: any) {
    this.shouldShowSpinner = true;
    const course: ICourse = {
      _id: this.course._id,
      ...editedCourse
    };
    this.coursesService.editCourse(course).subscribe(() => {
      this.shouldShowSpinner = false;
    });
  }
}
