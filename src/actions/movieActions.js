import { createAction } from 'redux-actions';
import { API, SET_MOVIES, SELECT_MOVIE } from '../constants/actionTypes';
import { GET_MOVIES } from '../constants/label';
import { normalize, schema } from 'normalizr';

export const getMovies = () => {
    return {
        type: API,
        payload: {
            url: '/vcvx0',
            method: 'GET',
            onSuccess: setMovies,
            onFail: () => ({ type: 'NO_OP'}),
            label: GET_MOVIES,
            data: null,
        }
    }
}

//this function will be called upon a successful data fetch  - movies is the retrieved data.
function setMovies(movies) {
    // movies is the result from server and it is an array of movie objects
    // normalize the list of movie objects into an object with keys being the movie objects
    const movieSchema = new schema.Entity('movies'); // defines the movie object to be an entity
    const movieListSchema = new schema.Array(movieSchema); // defines that the data from the server is an array
    const normalizedData = normalize(movies, movieListSchema); // normalizes the data
    
    // action that has the normalized data as its payload
    return { 
        type: SET_MOVIES,
        payload: normalizedData.entities.movies
    };
}

export const selectMovie = createAction(SELECT_MOVIE);