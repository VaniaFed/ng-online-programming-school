import {Action, createReducer, on} from '@ngrx/store';
import { addStudent } from './students.actions';
import {IStudent} from '../courses/types';

// tslint:disable-next-line:variable-name
export interface StudentsState {
  students: IStudent[];
}
const initialState: StudentsState = {
  students: []
};

// tslint:disable-next-line:variable-name
const _addStudentReducer = createReducer(
  initialState,
  on(addStudent,
    (state: StudentsState, {student}) => {
    return {
      students: [...state.students, student]
    };
  })
);

export const addStudentReducer = (state: StudentsState | undefined, action: Action) =>
  _addStudentReducer(state, action);
