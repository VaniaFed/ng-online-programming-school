import { Pipe, PipeTransform } from '@angular/core';
import {ICourse} from '@myTypes/index';
import {coursesToTile} from '../../admin/main-admin/courses/coursesToTile';

@Pipe({
  name: 'coursesToTile'
})
export class CoursesToTilePipe implements PipeTransform {
  transform(courses: ICourse[], urlPrefix?: string): any {
    return coursesToTile(courses, urlPrefix);
  }
}
