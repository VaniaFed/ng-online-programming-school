import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IStudent} from '../courses/types';
import {Observable} from 'rxjs';

@Injectable()
export class StudentsService {
  constructor(private http: HttpClient) {}

  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>('/api/students/');
  }

  addStudent(student: IStudent) {
    const studentString = JSON.stringify(student);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<string>('api/add-student/', studentString, httpOptions);
  }
}
