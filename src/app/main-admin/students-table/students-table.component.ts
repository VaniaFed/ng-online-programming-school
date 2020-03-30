import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';

import {IStudent} from '../courses/types';
import {DialogCreateStudentComponent} from './dialog-create-student/dialog-create-student.component';
import {StudentsService} from './students.service';

export interface TableRow {
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
  tableRow: TableRow[] = [];
  studentsForm: FormGroup;

  constructor(
    private dialog: MatDialog,
    private formBuilder: FormBuilder,
    private studentsService: StudentsService
  ) {
    this.studentsForm = formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      course: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
    });

    const students$ = studentsService.getStudents();
    students$.subscribe(students => {
      this.tableRow = students;
    });
  }

  addStudent(student: IStudent) {
    this.studentsService.addStudent(student)
      .subscribe(
        () => this.tableRow = [...this.tableRow, student]
      );
  }

  // use when registration
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

