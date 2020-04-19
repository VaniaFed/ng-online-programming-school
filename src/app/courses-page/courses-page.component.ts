import { Component, OnInit } from '@angular/core';
import {CoursesService} from '../shared/courses.service';
import {ICourse} from '../main-admin/courses/types';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html'
})
export class CoursesPageComponent implements OnInit {
  courses: ICourse[];
  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.coursesService.getCourses().subscribe(courses => {
      this.courses = courses;
    });
  }
}
