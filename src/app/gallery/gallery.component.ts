import {Component, Input, OnInit} from '@angular/core';
import {Tile} from '../app.component';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  @Input() tiles: Tile[];
  constructor() { }

  ngOnInit() {
  }

}
