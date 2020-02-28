import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICourse} from '../main-admin/courses/types';

@Injectable()
export class CoursesService {
  courses$: Observable<any>;
  constructor(httpClient: HttpClient) {
    this.courses$ = httpClient.get<ICourse>('/api/courses');
  }
}
