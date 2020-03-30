import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ILesson} from '../course-admin/course-lessons/course-lessons.component';
import {map} from 'rxjs/operators';

@Injectable()
export class LessonsService {
  constructor(private http: HttpClient) {}
  /*
  * TODO: make function getBodyAndOptions more abstract and use in other requests (services)
  * replace table of lessons at admin/courses with rows of lessons like at /courses/1
  * add user
  * add angular guard and make authentication
  * add login and registration logic
  * add user profile page
  */
  private static getBodyAndOptions(lesson: ILesson) {
    const lessonString = JSON.stringify( {lesson });
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return {
      lessonString,
      httpOptions
    };
  }

  getLessonsByCourseId(courseId: string) {
    return this.http.get<ILesson[]>(`api/courses/${courseId}/lessons/`);
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
    const { lessonString, httpOptions } = LessonsService.getBodyAndOptions(lessonWithCourseId);
    return this.http.post<any>(`api/add-lesson`, lessonString, httpOptions);
  }

  editLesson(lesson: ILesson) {
    const { lessonString, httpOptions } = LessonsService.getBodyAndOptions(lesson);
    return this.http.patch<ILesson>(`api/edit-lesson`, lessonString, httpOptions);
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
