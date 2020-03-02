import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICourse} from '../main-admin/courses/types';

@Injectable({providedIn: 'root'})
export class CoursesService {
  courses$: Observable<any>;
  constructor(private httpClient: HttpClient) {}

  getCourses() {
    return this.httpClient.get<ICourse[]>(`api/courses/`);
  }
  getCourse(id) {
    return this.httpClient.get<ICourse>(`api/courses/${id}`);
  }
}
