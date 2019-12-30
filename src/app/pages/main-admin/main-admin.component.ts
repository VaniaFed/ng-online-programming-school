import {Component, Inject, OnInit} from '@angular/core';
import {Tile} from '../../tile/tile.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.css']
})
export class MainAdminComponent implements OnInit {
  courses: Tile[] = [
    {
      text: 'React course',
      imgPath: 'https://reactjs.org/logo-og.png'
    },
    {
      text: 'Vue course',
      imgPath: 'https://miro.medium.com/max/2560/1*Ht8T-vqbqy5iG7FzNQGjFA.png'
    },
    {
      text: 'Angular course',
      imgPath: 'https://miro.medium.com/max/3200/1*Guedpz-wJ5fdffg75bNuIQ.png'
    }
  ];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialogCreateCourse() {
    const dialogCreateCourseRef = this.dialog.open(DialogCreateCourse);
    dialogCreateCourseRef.afterClosed().subscribe(form => {
      // TODO:
      // add course
      // http request
      // rx operations
      console.log(form);
    });
  }
}

@Component({
  selector: 'dialog-create-course',
  templateUrl: 'dialog-create-course.html',
})

// tslint:disable-next-line:component-class-suffix
export class DialogCreateCourse {
  formCreateCourseFields: FormGroup;
  imgPath: AbstractControl;
  name: AbstractControl;

  constructor(
    public dialogRef: MatDialogRef<DialogCreateCourse>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    formBuilder: FormBuilder
  ) {
    this.formCreateCourseFields = formBuilder.group({
      imgPath: '',
      name: ''
    });
    this.imgPath = this.formCreateCourseFields.controls.imgPath;
    this.name = this.formCreateCourseFields.controls.name;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
