import {ICourse} from '../app/main-admin/courses/types';
import {Tile} from '../app/shared/components/tile/tile.model';

export const courseToTile = (course: ICourse, urlPrefix = '') => {
  const {name, imgSrc, _id} = course;
  return new Tile(name, imgSrc, `${urlPrefix}${_id}`);
};
