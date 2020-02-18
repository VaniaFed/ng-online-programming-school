import {ICourse} from './types';

export const coursesToTile = (courses: ICourse[]) => {
  return courses.map(({name, imgSrc, id}) => {
    return {
      text: name,
      imgSrc,
      linkHref: id
    };
  });
};

