import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {IBreadcrumb} from '@myTypes/breadcrumb';

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: IBreadcrumb[];
  @Input() separator: string;
  constructor() {}
}
