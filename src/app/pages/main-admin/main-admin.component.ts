import {Component, OnInit} from '@angular/core';
import {Tile} from '../../tile/tile.component';

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

  constructor() { }

  ngOnInit() {
  }
}
