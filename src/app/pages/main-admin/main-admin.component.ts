import {Component, Inject, OnInit} from '@angular/core';
import {Tile} from '../../tile/tile.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

interface DialogFormControl {
  text: string;
  key: string;
}
@Component({
  selector: 'app-main-admin',
  templateUrl: './main-admin.component.html',
  styleUrls: ['./main-admin.component.css']
})
export class MainAdminComponent implements OnInit {
  controls: DialogFormControl[];
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

  constructor(private dialog: MatDialog, formBuilder: FormBuilder) {
    this.controls = [
      {
        text: 'Image path',
        key: 'imgPath'
      },
      {
        text: 'Name',
        key: 'name'
      }
    ];
  }

  ngOnInit() {
  }

  openDialogCreateCourse() {
    const dialogCreateCourseRef = this.dialog.open(DialogCreateCourse, {
      data: {
        controls: this.controls
      }
    });
    dialogCreateCourseRef.afterClosed().subscribe(fields => {
      // TODO:
      // add course
      // http request
      // rx operations
      console.log(fields);
    });
  }
}

interface DialogData {
  controls: DialogFormControl[];
}
@Component({
  selector: 'dialog-create-course',
  templateUrl: 'dialog-create-course.html',
})
// tslint:disable-next-line:component-class-suffix
export class DialogCreateCourse {
  form: FormArray;
  constructor(
    public dialogRef: MatDialogRef<DialogCreateCourse>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.form = new FormArray(data.controls.map(control => new FormControl(control.key)));
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
