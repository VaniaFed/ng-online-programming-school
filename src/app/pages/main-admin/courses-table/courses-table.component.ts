import { Component, OnInit } from '@angular/core';

interface TableRow {
  fullName: string;
  course: string;
}

@Component({
  selector: 'courses-table',
  templateUrl: './courses.table.component.html',
  styleUrls: ['./courses.table.component.css']
})
export class CoursesTableComponent implements OnInit {
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

  constructor() { }

  ngOnInit() {
  }

}
