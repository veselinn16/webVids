import React from 'react';
import { Provider } from 'react-redux'; // the react-redux export allowing us to subscribe automatically to store updates
import store from '../store';
import DevTools from './DevTools';

const Root = () => {
    return(
        <Provider store={store}>
            <div>
                <h1>Hello, Root Component</h1>
                <DevTools />
            </div>
        </Provider>
    )
}

export default Root;