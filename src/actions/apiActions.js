// Action Creators
import { createAction } from 'redux-actions';
import { API_START, API_END } from '../constants/actionTypes';

export const apiStart = createAction(API_START); // creates the following action {
//     type: API_START,
//     payload: whatever is put in as an argument in the function call
// }
export const apiEnd = createAction(API_END);