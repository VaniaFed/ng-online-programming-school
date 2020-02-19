import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-admin',
  templateUrl: './course-admin.component.html',
  styleUrls: ['./course-admin.component.css']
})
export class CourseAdminComponent implements OnInit {
  courseId: string;

  constructor(private activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe(({ id }) => {
      console.log(id);
      this.courseId = id;
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
