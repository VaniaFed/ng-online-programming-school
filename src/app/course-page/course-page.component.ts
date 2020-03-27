import { Component, OnInit } from '@angular/core';
import {ICourse} from '../main-admin/courses/types';
import {ActivatedRoute} from '@angular/router';
import {CoursesService} from '../shared/courses.service';
import {LessonsService} from '../shared/lessons.service';
import {ILesson} from '../course-admin/course-lessons/course-lessons.component';
import {BreadcrumbItem} from '../shared/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-course-papge',
  templateUrl: './course-page.component.html',
  styleUrls: ['./course-page.component.css']
})
export class CoursePageComponent implements OnInit {
  courseId: string;
  course: ICourse;
  lessons: ILesson[];
  breadcrumbsData: BreadcrumbItem[];
  constructor(private activatedRoute: ActivatedRoute,
              private coursesService: CoursesService,
              private lessonsService: LessonsService) {
    activatedRoute.params.subscribe(params => {
      const {courseId} = params;
      this.courseId = courseId;
    });
    coursesService.getCourse(this.courseId).subscribe(course => {
      this.course = course;
      this.breadcrumbsData = [
        {
          url: '/courses',
          title: 'Courses'
        },
        {
          url: `/courses/${course.id}`,
          title: course.name
        }
      ];
    });
    lessonsService.getLessonsByCourseId(this.courseId).subscribe(lessons => {
      this.lessons = lessons;
    });
  }

  ngOnInit() {
  }

}