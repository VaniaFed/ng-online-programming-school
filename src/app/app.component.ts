import { Component } from '@angular/core';

export interface Tile {
  text: string;
  imgPath: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
    },

  ];
}
