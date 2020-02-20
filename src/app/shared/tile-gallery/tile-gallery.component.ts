import {Component, Input} from '@angular/core';
import {Tile} from '../tile/tile.component';

@Component({
  selector: 'tile-gallery',
  templateUrl: './tile-gallery.component.html',
  styleUrls: ['./tile-gallery.component.css']
})
export class TileGalleryComponent {
  @Input() tiles: Tile[];
}
