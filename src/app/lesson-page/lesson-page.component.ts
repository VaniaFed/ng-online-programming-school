import {Component} from '@angular/core';
import {LessonsService} from '../shared/lessons.service';
import {ILesson} from '../course-admin/course-lessons/course-lessons.component';
import {ActivatedRoute} from '@angular/router';
import {ICourse} from '../main-admin/courses/types';
import {CoursesService} from '../shared/courses.service';

@Component({
  selector: 'app-lesson-page',
  templateUrl: './lesson-page.component.html',
  styles: []
})
export class LessonPageComponent {
  lesson: ILesson;
  course: ICourse;
  lessonId: string;
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
    lessonsService.getLessonById(this.lessonId)
      .subscribe(lesson => {
        this.lesson = lesson;
        coursesService.getCourse(this.lesson.courseId)
          .subscribe(course => {
            this.course = course;
          });
      });
  }
}
