import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ICourse} from '../main-admin/courses/types';

@Injectable()
export class CoursesService {
  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get<ICourse[]>(`api/courses/`);
  }
  getCourse(id) {
    return this.http.get<ICourse>(`api/courses/${id}`);
  }
  addCourse(course: ICourse) {
    const courseString = JSON.stringify(course);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<string>('api/add-course/', courseString, httpOptions);
  }

  editCourse(course: ICourse) {
    const courseString = JSON.stringify(course);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post<string>('api/edit-course/', courseString, httpOptions);
  }
}
