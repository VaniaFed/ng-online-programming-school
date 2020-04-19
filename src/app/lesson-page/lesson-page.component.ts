import {Component, OnInit} from '@angular/core';
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
export class LessonPageComponent implements OnInit {
  lesson: ILesson;
  course: ICourse;
  lessonId: string;
  breadcrumbsData: BreadcrumbItem[];
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
