import {Component, OnInit} from '@angular/core';
import {concatMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

import {LessonsService, CoursesService} from '@shared/services';
import {ICourse, ILesson, IBreadcrumb} from '@myTypes/index';

@Component({
  selector: 'app-lesson-page',
  templateUrl: './lesson-page.component.html',
  styles: []
})
export class LessonPageComponent implements OnInit {
  lesson: ILesson;
  course: ICourse;
  lessonId: string;
  breadcrumbsData: IBreadcrumb[];
  constructor(
    private lessonsService: LessonsService,
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe(params => {
        const {lessonId} = params;
        this.lessonId = lessonId;
      });

    const lesson$ = this.lessonsService.getLessonById(this.lessonId);
    const course$ = lesson$
      .pipe(
        concatMap(lesson => {
          this.lesson = lesson;
          return this.coursesService.getCourse(lesson.courseId);
        })
      );

    course$.subscribe((course) => {
      this.course = course;
      this.breadcrumbsData = [
        {
          url: '/courses',
          title: 'Courses'
        },
        {
          url: `/courses/${course._id}`,
          title: course.name
        },
        {
          url: `/lessons/${this.lesson._id}`,
          title: this.lesson.name
        }
      ];
    });
  }
}
