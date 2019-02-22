import { combineReducers } from 'redux';
import movies from './movies';
import selectMovie from './selectMovie';

export default combineReducers({
    movies,
    selectMovie
})