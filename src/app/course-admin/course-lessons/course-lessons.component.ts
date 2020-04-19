import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DialogCreateLessonComponent} from './dialog-create-lesson/dialog-create-lesson.component';
import {LessonsService} from '../../shared/lessons.service';
import {MatTableDataSource} from '@angular/material';
import {map} from 'rxjs/operators';

export interface ILesson {
  _id: string;
  name: string;
  description: string;
  videoUrl?: string;
  textContent: string;
  courseId: string;
  linkHref?: string[];
}

@Component({
  selector: 'course-lessons',
  templateUrl: './course-lessons.component.html'
})
export class CourseLessonsComponent implements OnInit {
  tableColumns: string[] = ['name', 'description', 'textContent'];
  lessonsForm: FormGroup;
  // make Subject lesons$ in service
  lessons: ILesson[];
  dataSource = new MatTableDataSource<ILesson>([]);
  @Input() courseId: string;
  @Output() lessonAdded: EventEmitter<ILesson> = new EventEmitter<ILesson>();
  constructor(private dialog: MatDialog,
              private formBuilder: FormBuilder,
              private lessonsService: LessonsService) {}
  ngOnInit(): void {
    this.lessonsForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(20)]],
      description: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      textContent: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(299)]],
      videoUrl: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]]
    });
    this.lessonsService.getLessonsByCourseId(this.courseId, true)
      .subscribe(lessons => {
        this.lessons = lessons;
        this.dataSource.data = lessons;
      });
  }

  addLesson(lesson: ILesson) {
    this.lessonsService.addLesson(lesson, this.courseId).subscribe(() => {
      const newLesson = {
        _id: String(Math.floor(Math.random() * 100)),
        ...lesson
      };
      this.lessons = [
        ...this.lessons,
        newLesson
      ];
      this.dataSource.data = this.lessons;
    });
  }

  openDialogCreateLesson() {
    const dialogCreateStudentRef = this.dialog.open(DialogCreateLessonComponent, {
      data: { form: this.lessonsForm }
    });
    dialogCreateStudentRef.afterClosed().subscribe((lesson: any) => {
      if (lesson !== undefined) {
        this.addLesson(lesson);
      }
      this.lessonsForm.reset();
    });
  }
}
