import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers/';
import logger from 'redux-logger';
import api from '../middleware/api';
import DevTools from '../containers/DevTools';

const configureStore = initialState => { // if initialState is passed, add it to the store
    const store = createStore(
        rootReducer,
        initialState,
        compose( // used for adding multiple store enhancers
            applyMiddleware(logger, api), 
            DevTools.instrument() // adds the DevTools via the instrument prop
        )
    );
    if(module.hot) {
        // enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer);
        })
    }
    return store;
}

export default configureStore;