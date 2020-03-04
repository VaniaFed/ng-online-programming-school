import {ICourse} from './types';
import {courseToTile} from '../../../libs/courseToTile';
import {Tile} from '../../shared/tile/tile.component';

export const coursesToTile = (courses: ICourse[]): Tile[] => {
  return courses.map((course: ICourse) => courseToTile(course));
};

