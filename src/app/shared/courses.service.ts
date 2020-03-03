import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ICourse} from '../main-admin/courses/types';

@Injectable()
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  getCourses() {
    return this.httpClient.get<ICourse[]>(`api/courses/`);
  }
  getCourse(id) {
    return this.httpClient.get<ICourse>(`api/courses/${id}`);
  }
  addCourse(course: ICourse) {
    const courseString = JSON.stringify(course);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.post<string>('api/add-course/', courseString, httpOptions);
  }
}
