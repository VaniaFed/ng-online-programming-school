import {ICourse} from '@myTypes/index';
import {Tile} from '@shared/components/tile/tile.model';

export const courseToTile = (course: ICourse, urlPrefix = '') => {
  const {name, imgSrc, _id} = course;
  return new Tile(name, imgSrc, `${urlPrefix}${_id}`);
};
