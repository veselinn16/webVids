import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/';
import api from '../middleware/api';
import { persistStore } from 'redux-persist';
import toastMiddleware from '../middleware/toasts';

const configureStore = initialState => { // if initialState is passed, add it to the store
    const store = createStore(
        rootReducer,
        initialState,
        compose( // used for adding multiple store enhancers
            applyMiddleware(api, toastMiddleware), 
        )
    );

    const persistedStore = persistStore(store); // use persisted store
    return { store, persistedStore };
}

export default configureStore;