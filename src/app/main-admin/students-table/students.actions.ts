import {createAction, props} from '@ngrx/store';
import {IStudent} from '../courses/types';

export const addStudent = createAction(
  '[Students] Add',
  props<{student: IStudent}>()
);
