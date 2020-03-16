import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Tile} from '../../shared/tile/tile.model';
import {TableRow} from '../../main-admin/students-table/students-table.component';

export interface ILesson {
  id: string;
  name: string;
  description: string;
  textContent: string;
  courseId: string;
}

@Component({
  selector: 'course-lessons',
  templateUrl: './course-lessons.component.html',
  styleUrls: ['./course-lessons.component.css']
})
export class CourseLessonsComponent {
  tableColumns: string[] = ['Name', 'Description', 'Text content'];
  @Input() tableRow: TableRow[] = [];
  // create an ILesson type
  // and complete pure component
  constructor() { }
  addLesson(e) {
    console.log(e);
    console.log('adding a lesson');
  }

}
