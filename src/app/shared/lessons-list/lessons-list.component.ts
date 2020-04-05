import {Component, Input} from '@angular/core';
import {ILesson} from '../../course-admin/course-lessons/course-lessons.component';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent {
  @Input() lessons: ILesson[];
}
