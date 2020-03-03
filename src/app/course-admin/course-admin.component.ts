import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CoursesService} from '../shared/courses.service';
import {ICourse} from '../main-admin/courses/types';

@Component({
  selector: 'app-course-admin',
  templateUrl: './course-admin.component.html',
  styleUrls: ['./course-admin.component.css']
})
export class CourseAdminComponent implements OnInit {
  course: ICourse;

  constructor(private activatedRoute: ActivatedRoute, private coursesService: CoursesService) {
    activatedRoute.params
      .subscribe(
        ({ id }) => this.init(id)
      );
  }

  init(id) {
    this.coursesService.getCourse(id)
      .subscribe(
        course => {
          console.log(course);
          this.course = course;
        }
      );
  }

  ngOnInit() {
  }

}
