import { Pipe, PipeTransform } from '@angular/core';
import {ICourse} from './types';
import {coursesToTile} from './coursesToTile';

@Pipe({
  name: 'coursesToTile'
})
export class CoursesToTilePipe implements PipeTransform {
  transform(courses: ICourse[]): any {
    return coursesToTile(courses);
  }
}
