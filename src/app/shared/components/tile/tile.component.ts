import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

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
