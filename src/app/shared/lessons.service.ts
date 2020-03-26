import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ILesson} from '../course-admin/course-lessons/course-lessons.component';
import {map} from 'rxjs/operators';

@Injectable()
export class LessonsService {
  private static getBodyAndOptions(lesson: ILesson) {
    const lessonString = JSON.stringify(lesson);
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
  constructor(private http: HttpClient) {}

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

  addLesson(lesson: ILesson) {
    const { lessonString, httpOptions } = LessonsService.getBodyAndOptions(lesson);
    return this.http.post<any>(`api/add-lesson`, lessonString, httpOptions);
  }

  editLesson(lesson: ILesson) {
    const { lessonString, httpOptions } = LessonsService.getBodyAndOptions(lesson);
    return this.http.post<ILesson>(`api/edit-lesson`, lessonString, httpOptions);
  }

  makeVideoUrlFull(video) {
    return `https://www.youtube.com/embed/${video}`;
  }

}
