import {Action, createReducer, on} from '@ngrx/store';
import {addCourse} from './courses.actions';
import {ICourse} from './types';

export interface CoursesState {
  courses: ICourse[];
}

const initialState: CoursesState = {
  courses: []
};

// tslint:disable-next-line:variable-name
const _addCourseReducer = createReducer(
  initialState,
  on(addCourse,
    (state: CoursesState, {course}) => {
    const courseWithId = {
      ...course,
      id: String(Math.random())
    };
    return {
      courses: [...state.courses, courseWithId]
    };
  })
);

export const addCourseReducer = (state: CoursesState | undefined, action: Action) =>
  _addCourseReducer(state, action);
