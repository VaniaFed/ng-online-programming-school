import {Component, Input, OnInit} from '@angular/core';
import {Tile} from '../tile/tile.component';

@Component({
  selector: 'tile-gallery',
  templateUrl: './tile.gallery.component.html',
  styleUrls: ['./tile.gallery.component.css']
})
export class TileGalleryComponent implements OnInit {
  @Input() tiles: Tile[];
  constructor() { }

  ngOnInit() {
  }

}
