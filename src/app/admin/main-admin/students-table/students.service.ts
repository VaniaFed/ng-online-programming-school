import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IStudent} from '@myTypes/index';
import {Observable} from 'rxjs';

@Injectable()
export class StudentsService {
  constructor(private http: HttpClient) {}

  getStudents(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>('/api/students/');
  }

  addStudent(student: IStudent) {
    return this.http.post<string>('api/add-student/', {student});
  }
}
