import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

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
  tableRow: TableRow[] = [
    {
      fullName: 'Ivan Fedyakov',
      course: 'Angular full advanced course'
    },
    {
      fullName: 'Vladimir Artemev',
      course: 'Angular full advanced course'
    },
    {
      fullName: 'Roman Achilov',
      course: 'React full advanced course'
    },
  ];
  studentsForm: FormGroup;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder) {
    this.studentsForm = formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      course: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(100)]]
    });
  }

  ngOnInit() {
  }

  openDialogCreateStudent() {
    const dialogCreateStudentRef = this.dialog.open(DialogCreateStudent, {
      data: { form: this.studentsForm }
    });
    // replace with IStudent
    dialogCreateStudentRef.afterClosed().subscribe((student: any) => {
      if (student !== undefined) {
        console.log('adding a student');
        // this.addStudent(student);
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
