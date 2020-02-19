import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {StudentsState} from './students.reducer';
import {select, Store} from '@ngrx/store';
import {addStudent} from './students.actions';
import {IStudent} from '../courses/types';
import {Observable} from 'rxjs';

interface TableRow {
  fullName: string;
  course: string;
}

@Component({
  selector: 'students-table',
  templateUrl: './students.table.component.html',
  styleUrls: ['./students.table.component.css']
})
export class StudentsTableComponent implements OnInit {
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

  ngOnInit() {
  }

  addStudent(student: IStudent) {
    this.store.dispatch(addStudent({ student }));
  }

  openDialogCreateStudent() {
    const dialogCreateStudentRef = this.dialog.open(DialogCreateStudent, {
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

interface DialogData {
  form: FormGroup;
}
@Component({
  selector: 'dialog-create-student',
  templateUrl: 'dialog-create-student.html',
})
// tslint:disable-next-line:component-class-suffix
export class DialogCreateStudent {
  form: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<DialogCreateStudent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.form = data.form;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
