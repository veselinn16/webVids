import React from 'react';
import { Provider } from 'react-redux'; // the react-redux export allowing us to subscribe automatically to store updates
import { BrowserRouter } from 'react-router-dom';
import DevTools from './DevTools';
import StyledContainer from '../components/StyledContainer'; // the container for the styled components
import { GlobalStyle } from '../injectGlobalStyles'; // the global styles

import { ThemeProvider } from 'styled-components'; // for making the theme object accessible to all styled components
import theme from '../constants/theme'; // theme object holding all 'CSS variables'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { PersistGate } from "redux-persist/integration/react";
import store, { persistedStore } from '../store';

import App from '../components/App';

const Root = () => {
    return(
        <Provider store={store}>
            <PersistGate persistor={persistedStore} loading={null}>
                <ThemeProvider theme={theme}>
                    <StyledContainer>
                        <BrowserRouter>
                            <App/>
                        </BrowserRouter>
                        <GlobalStyle/>
                        <DevTools />
                        <ToastContainer/>
                    </StyledContainer>
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}

export default Root;