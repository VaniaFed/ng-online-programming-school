import {ICourse} from '../app/main-admin/courses/types';
import {Tile} from '../app/shared/tile/tile.model';

export const courseToTile = (course: ICourse) => {
  const {name, imgSrc, id} = course;
  return new Tile(name, imgSrc, `courses/${id}`);
};
