import { Pipe, PipeTransform } from '@angular/core';
import {ICourse} from '../main-admin/courses/types';
import {coursesToTile} from '../main-admin/courses/coursesToTile';

@Pipe({
  name: 'coursesToTile'
})
export class CoursesToTilePipe implements PipeTransform {
  transform(courses: ICourse[], urlPrefix?: string): any {
    return coursesToTile(courses, urlPrefix);
  }
}
