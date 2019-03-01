import { createAction } from 'redux-actions';
import { apiPayloadCreator } from '../utils/appUtils';
import { API, SET_MOVIES } from '../constants/actionTypes';
import { normalize, schema } from 'normalizr';

const getMoviesAC = () => createAction(API, apiPayloadCreator); // retruns an action creator function
//calls the action creator and specifies the required properties of the network request
export const getMovies = () => getMoviesAC({
    url: '/vcvx0',
    onSuccess: setMovies,
})

console.log(getMovies());

function setMovies(movies) {
    // normalize the list of movie objects into an object with keys being the movie objects
    const movieSchema = new schema.Entity('movies'); // defines the movie object to be an entity
    const movieListSchema = new schema.Array(movieSchema); // defines that the data from the server is an array
    const normalizedData = normalize(movies, movieListSchema); // normalizes the data
    
    console.log(movies); // result from server
    
    // action that has the normalized data as its payload
    return { 
        type: SET_MOVIES,
        payload: normalizedData.entities.movies
    };
}