import {ICourse, ITile} from '@myTypes/index';
import {courseToTile} from '@libs/courseToTile';

export const coursesToTile = (courses: ICourse[], urlPrefix?: string): ITile[] => {
  return courses.map((course: ICourse) => courseToTile(course, urlPrefix));
};

