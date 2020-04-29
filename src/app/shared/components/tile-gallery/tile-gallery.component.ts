import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ITile} from '@myTypes/index';

@Component({
  selector: 'tile-gallery',
  templateUrl: './tile-gallery.component.html',
  styleUrls: ['./tile-gallery.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TileGalleryComponent {
  @Input() tiles: ITile[];
  track(_, item) {
    if (!item) {
      return null;
    }
    return item._id;
  }
}
