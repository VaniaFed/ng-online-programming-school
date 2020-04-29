import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICourse} from '../../main-admin/courses/types';
import {formBodyAndHeaders} from '../../../libs/formBodyAndHeaders';
import {SharedModule} from '../shared.module';

@Injectable({
  providedIn: SharedModule
})
export class CoursesService {
  constructor(private http: HttpClient) {}

  getCourses() {
    return this.http.get<ICourse[]>(`api/courses/`);
  }
  getCourse(id) {
    return this.http.get<ICourse>(`api/courses/${id}`);
  }
  addCourse(course: ICourse) {
    const { body, httpOptions } = formBodyAndHeaders({course});
    return this.http.post<string>('api/add-course/', body, httpOptions);
  }

  editCourse(course: ICourse) {
    const { body, httpOptions } = formBodyAndHeaders({course});
    return this.http.patch<string>('api/edit-course/', body, httpOptions);
  }
}
