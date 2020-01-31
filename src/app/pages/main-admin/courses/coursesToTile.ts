import {ICourse} from './types';

export const coursesToTile = (courses: ICourse[]) => {
  return courses.map(({name, imgSrc}) => {
    return {
      text: name,
      imgSrc
    };
  });
};

