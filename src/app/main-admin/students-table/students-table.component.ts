import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import {StudentsState} from './students.reducer';
import {addStudent} from './students.actions';
import {IStudent} from '../courses/types';
import {DialogCreateStudentComponent} from './dialog-create-student/dialog-create-student.component';

interface TableRow {
  fullName: string;
  course: string;
}

@Component({
  selector: 'students-table',
  templateUrl: './students.table.component.html',
  styleUrls: []
})
export class StudentsTableComponent {
  tableColumns: string[] = ['fullName', 'course'];
  students$: Observable<any>;
  tableRow: TableRow[] = [];
  studentsForm: FormGroup;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private store: Store<StudentsState>) {
    this.studentsForm = formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      course: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
    });
    this.students$ = store.pipe(select('students'));
    this.students$.subscribe(({students}) => {
      if (students.length !== 0) {
        this.tableRow = students;
      }
    });
  }

  addStudent(student: IStudent) {
    this.store.dispatch(addStudent({ student }));
  }

  openDialogCreateStudent() {
    const dialogCreateStudentRef = this.dialog.open(DialogCreateStudentComponent, {
      data: { form: this.studentsForm }
    });
    dialogCreateStudentRef.afterClosed().subscribe((student: any) => {
      if (student !== undefined) {
        this.addStudent(student);
      }
      this.studentsForm.reset();
    });
  }
}

