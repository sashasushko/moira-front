// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import './style.less';
import App from './App/App';

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <BrowserRouter>
                <Component />
            </BrowserRouter>
        </AppContainer>,
        document.getElementById('root'),
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./App/App', () => {
        render(App);
    });
}
