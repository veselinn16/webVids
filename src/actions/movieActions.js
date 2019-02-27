import { createAction } from 'redux-actions';
import { apiPayloadCreator } from '../utils/appUtils';
import { API } from '../constants/actionTypes';

const getMoviesAC = () => createAction(API, apiPayloadCreator); // retruns action

//calls the action creator and specifies the required properties of the network request
export const getMovies = () => getMoviesAC({
    url: '/vcvx0',
    onSuccess: setMovies
})

// let f = createAction(API, apiPayloadCreator);
// console.log(f);

function setMovies(movies) {
    console.log(movies); // result from server
    return { type: '' }; // dummy aciton. Returned because action creator is expected to return an action
}