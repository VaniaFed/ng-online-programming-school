import {Component, Input, OnInit} from '@angular/core';

export interface Tile {
  text: string;
  imgPath: string;
}

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() text: string;
  @Input() imgPath: string;
  constructor() { }

  ngOnInit() {
  }

}
