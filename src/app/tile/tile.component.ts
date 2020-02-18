import {Component, Input, OnInit} from '@angular/core';

export interface Tile {
  text: string;
  imgSrc: string;
  linkHref?: string;
}

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css']
})
export class TileComponent implements OnInit {
  @Input() text: string;
  @Input() imgSrc: string;
  @Input() linkHref: string | any[];
  constructor() { }

  ngOnInit() {
  }

}
