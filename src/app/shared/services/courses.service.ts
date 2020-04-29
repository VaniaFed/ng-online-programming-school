import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ICourse} from '@myTypes/index';
import {SharedModule} from '@shared/shared.module';

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
    return this.http.post<string>('api/add-course/', {course});
  }

  editCourse(course: ICourse) {
    return this.http.patch<string>('api/edit-course/', {course});
  }
}
