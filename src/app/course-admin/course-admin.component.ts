import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CoursesService} from '../shared/courses.service';
import {ICourse} from '../main-admin/courses/types';
import {Tile as ITile} from '../shared/tile/tile.component';
import {courseToTile} from '../../libs/courseToTile';
import {Tile} from '../shared/tile/tile.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Course} from '../main-admin/courses/course.model';

@Component({
  selector: 'app-course-admin',
  templateUrl: './course-admin.component.html',
  styleUrls: ['./course-admin.component.css']
})
export class CourseAdminComponent {
  course: ICourse = new Course();
  courseAsTile: ITile = new Tile();
  form: FormGroup;
  constructor(private activatedRoute: ActivatedRoute,
              private coursesService: CoursesService,
              private formBuilder: FormBuilder) {
    activatedRoute.params
      .subscribe(
        ({ id }) => this.init(id)
      );
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      price: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(10)]],
      imgSrc: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
    });
  }

  init(id) {
    this.coursesService.getCourse(id)
      .subscribe(
        course => {
          this.course = course;
          this.courseAsTile = courseToTile(course);
          this.form.controls.name.setValue(course.name);
          this.form.controls.price.setValue(course.price);
          this.form.controls.imgSrc.setValue(course.imgSrc);
        }
      );
  }

  changeCourse(value: any) {
    console.log(value);
  }
}
