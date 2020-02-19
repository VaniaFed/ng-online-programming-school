import { createAction, props } from '@ngrx/store';
import {ICourse} from './types';

export const addCourse = createAction(
  '[COURSE] Add',
  props<{course: ICourse}>()
);
