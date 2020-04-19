import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ILesson} from '../course-admin/course-lessons/course-lessons.component';
import {map} from 'rxjs/operators';
import {formBodyAndHeaders} from '../../libs/formBodyAndHeaders';

@Injectable()
export class LessonsService {
  constructor(private http: HttpClient) {}
  /*
  * TODO:
  * add more complex validators to login and registration
  * add user
  * add angular guard and make authentication
  * add login and registration logic
  * add user profile page
  */

  getLessonsByCourseId(courseId: string, isAdmin = false) {
    return this.http.get<ILesson[]>(`api/courses/${courseId}/lessons/`)
      .pipe(
        map(lessons => {
          return lessons.map((lesson): ILesson => ({
              ...lesson,
              linkHref: (isAdmin)
                ? ['/', 'admin', 'lessons', lesson._id]
                : ['/', 'lessons', lesson._id]
          }));
        })
      );
  }

  getLessonById(lessonId) {
    return this.http.get<ILesson>(`api/lessons/${lessonId}/`)
      .pipe(
        map(lesson => ({
          ...lesson,
            videoUrl: this.makeVideoUrlFull(lesson.videoUrl)
        }))
      );
  }

  addLesson(lesson: ILesson, courseId: string) {
    const lessonWithCourseId = {
      ...lesson,
      courseId
    };
    const { body, httpOptions } = formBodyAndHeaders({lesson: lessonWithCourseId});
    return this.http.post<any>(`api/add-lesson`, body, httpOptions);
  }

  editLesson(lesson: ILesson) {
    const { body, httpOptions } = formBodyAndHeaders({lesson});
    return this.http.patch<ILesson>(`api/edit-lesson`, body, httpOptions);
  }

  makeVideoUrlFull(video) {
    return `https://www.youtube.com/embed/${video}`;
  }

}

/*
*
* add mongo for students
* add additional fields for forms
* */
