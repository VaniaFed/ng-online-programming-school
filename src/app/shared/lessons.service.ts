import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LessonsService {
  constructor(private http: HttpClient) {}

  getLessonsByCourseId(courseId: string) {
    return this.http.get(`api/courses/${courseId}/lessons/`);
  }

  getLessonsById(id) {}

  addLesson(lesson) {}

  editLesson(lesson) {}
}
