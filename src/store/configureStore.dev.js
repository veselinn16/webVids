import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/';
import logger from 'redux-logger';
import api from '../middleware/api';
import DevTools from '../containers/DevTools';
import { persistStore } from 'redux-persist';
import toastMiddleware from '../middleware/toasts';

const configureStore = initialState => { // if initialState is passed, add it to the store
    const store = createStore(
        rootReducer,
        initialState,
        compose( // used for adding multiple store enhancers
            applyMiddleware(api, toastMiddleware, logger), 
            DevTools.instrument() // adds the DevTools via the instrument prop
        )
    );
    if(module.hot) {
        // enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer);
        })
    }

    const persistedStore = persistStore(store); // use persisted store
    return { store, persistedStore };
}

export default configureStore;