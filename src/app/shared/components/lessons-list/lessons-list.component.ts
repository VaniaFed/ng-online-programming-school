import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ILesson} from '@myTypes/index';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonsListComponent {
  @Input() lessons: ILesson[];
}
