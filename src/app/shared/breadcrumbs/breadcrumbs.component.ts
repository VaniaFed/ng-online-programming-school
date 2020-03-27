import {Component, Input} from '@angular/core';

export interface BreadcrumbItem {
  url: string;
  title: string;
}

@Component({
  selector: 'breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent {
  @Input() breadcrumbs: BreadcrumbItem[];
  @Input() separator: string;
  constructor() { }
}
