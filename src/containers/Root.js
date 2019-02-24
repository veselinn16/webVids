import React from 'react';
import { Provider } from 'react-redux'; // the react-redux export allowing us to subscribe automatically to store updates
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import DevTools from './DevTools';
import StyledContainer from '../components/StyledContainer'; // the container for the styled components
import { GlobalStyle } from '../injectGlobalStyles'; // the global styles

import { ThemeProvider } from 'styled-components'; // for making the theme object accessible to all styled components
import theme from '../constants/theme'; // theme object holding all 'CSS variables'

import App from '../components/App';

const Root = () => {
    return(
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <StyledContainer>
                    <BrowserRouter>
                        <App/>
                    </BrowserRouter>
                    <GlobalStyle/>
                    <DevTools />
                </StyledContainer>
            </ThemeProvider>
        </Provider>
    )
}

export default Root;