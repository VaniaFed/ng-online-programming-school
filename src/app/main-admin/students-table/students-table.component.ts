import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {Subject} from 'rxjs';

import {IStudent} from '../courses/types';
import {DialogCreateStudentComponent} from './dialog-create-student/dialog-create-student.component';

interface TableRow {
  fullName: string;
  course: string;
}

@Component({
  selector: 'students-table',
  templateUrl: './students-table.component.html',
  styleUrls: []
})
export class StudentsTableComponent {
  tableColumns: string[] = ['fullName', 'course'];
  students$: Subject<IStudent> = new Subject<IStudent>();
  tableRow: TableRow[] = [];
  studentsForm: FormGroup;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder) {
    this.studentsForm = formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      course: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
    });
    // fetch students
    const tmpStudent: IStudent = {
      id: '1',
      fullName: 'Ivan',
      course: 'Angular'
    };
    this.students$
      .subscribe((student) => {
        this.tableRow = [...this.tableRow, student];
      });
    this.students$.next(tmpStudent);
  }

  addStudent(student: IStudent) {}

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

