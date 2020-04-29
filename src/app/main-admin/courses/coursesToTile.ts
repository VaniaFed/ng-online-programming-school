import {ICourse} from './types';
import {courseToTile} from '../../../libs/courseToTile';
import {Tile} from '../../shared/components/tile/tile.component';

export const coursesToTile = (courses: ICourse[], urlPrefix?: string): Tile[] => {
  return courses.map((course: ICourse) => courseToTile(course, urlPrefix));
};

