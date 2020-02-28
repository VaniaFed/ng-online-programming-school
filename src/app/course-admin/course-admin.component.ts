import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CoursesService} from './courses.service';

@Component({
  selector: 'app-course-admin',
  templateUrl: './course-admin.component.html',
  styleUrls: ['./course-admin.component.css']
})
export class CourseAdminComponent implements OnInit {
  courseId: string;

  constructor(private activatedRoute: ActivatedRoute, coursesService: CoursesService) {
    activatedRoute.params.subscribe(({ id }) => {
      this.courseId = id;
      coursesService.courses$.subscribe(courses => {
        console.log(courses);
      });
      // coursesService.courses$.subscribe((courses) => {
      //   console.log(courses);
      // });
      // http request in fucking service
      // make a queryToBackend for getting
      // get a course
      // give a course in redux
      // take a course from redux and render it
    });
  }

  ngOnInit() {
  }

}
