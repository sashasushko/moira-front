// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import Api from './Api/MoiraAPI';
import App from './App';
import { ApiProvider } from './Api/MoiraApiInjection';

class ApiProvider extends React.Component {
    static childContextTypes = {
        moiraApi: React.PropTypes.object,
    };

    getChildContext() {
        return {
            moiraApi: this.props.moiraApi,
        };
    }

    render() {
        const { children } = this.props;
        return children;
    }
}

const api = new Api();

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <BrowserRouter>
                <ApiProvider moiraApi={api}>
                    <Component />
                </ApiProvider>
            </BrowserRouter>
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./App', () => {
        render(App);
    });
}
