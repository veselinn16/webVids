import { combineReducers } from 'redux';
import movies from './movies';
import selectMovie from './selectMovie';
import isLoading from './isLoading';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// root reducer
const rootReducer = combineReducers({
    movies,
    selectMovie,
    isLoading
});

// configurations for the persisted reducer
const persistConfig = {
    key: 'webvids',
    storage
}

// persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;