import {Component} from '@angular/core';
import {LessonsService} from '../shared/lessons.service';
import {ILesson} from '../course-admin/course-lessons/course-lessons.component';
import {ActivatedRoute} from '@angular/router';
import {ICourse} from '../main-admin/courses/types';
import {CoursesService} from '../shared/courses.service';
import {BreadcrumbItem} from '../shared/breadcrumbs/breadcrumbs.component';
import {concatMap} from 'rxjs/operators';

@Component({
  selector: 'app-lesson-page',
  templateUrl: './lesson-page.component.html',
  styles: []
})
export class LessonPageComponent {
  lesson: ILesson;
  course: ICourse;
  lessonId: string;
  breadcrumbsData: BreadcrumbItem[];
  constructor(
    private lessonsService: LessonsService,
    private coursesService: CoursesService,
    private activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.params
      .subscribe(params => {
        const {lessonId} = params;
        this.lessonId = lessonId;
      });

    const lesson$ = lessonsService.getLessonById(this.lessonId);
    const course$ = lesson$
      .pipe(
        concatMap(lesson => {
          this.lesson = lesson;
          return coursesService.getCourse(lesson.courseId);
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
          url: `/courses/${course.id}`,
          title: course.name
        },
        {
          url: `/lessons/${this.lesson.id}`,
          title: this.lesson.name
        }
      ];
    });
  }
}
