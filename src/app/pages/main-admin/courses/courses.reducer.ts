import {Action, createReducer, on} from '@ngrx/store';
import {addCourse} from './courses.actions';
import {ICourse} from './types';

export interface AppState {
  courses: ICourse[];
}

const initialState: AppState = {
  courses: []
};

// tslint:disable-next-line:variable-name
const _addCourseReducer = createReducer(
  initialState,
  on(addCourse,
    (state: AppState, {course}) => {
    return {
      courses: [...state.courses, course]
    };
  })
);

export const addCourseReducer = (state: AppState | undefined, action: Action) => _addCourseReducer(state, action);
