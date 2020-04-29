import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

export interface Tile {
  text: string;
  imgSrc: string;
  linkHref?: string;
}

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileComponent {
  @Input() text: string;
  @Input() imgSrc: string;
  @Input() linkHref: string | any[];
}
