import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IStudent} from '../courses/types';
import {Observable} from 'rxjs';
import {formBodyAndHeaders} from '../../../libs/formBodyAndHeaders';

@Injectable()
export class StudentsService {
  constructor(private http: HttpClient) {}

  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>('/api/students/');
  }

  addStudent(student: IStudent) {
    const { body, httpOptions } = formBodyAndHeaders({student});
    return this.http.post<string>('api/add-student/', body, httpOptions);
  }
}
