import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DialogCreateLessonComponent} from './dialog-create-lesson/dialog-create-lesson.component';
import {LessonsService} from '../../shared/lessons.service';
import {MatTableDataSource} from '@angular/material';

export interface ILesson {
  id: string;
  name: string;
  description: string;
  textContent: string;
  courseId: string;
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
              private lessonsService: LessonsService) {
    this.lessonsForm = formBuilder.group({
      name: [],
      description: [],
      textContent: []
    });
  }

  ngOnInit(): void {
    this.lessonsService.getLessonsByCourseId(this.courseId)
      .subscribe(lessons => {
        this.dataSource.data = lessons;
      });
  }

  addLesson(lesson: ILesson) {
    this.lessonsService.addLesson(lesson).subscribe(() => {
      const lessons = this.lessons;
      lessons.push({
        id: String(Math.floor(Math.random() * 100)),
        ...lesson
      });
      this.lessons = lessons;
      this.dataSource.data = lessons;
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
