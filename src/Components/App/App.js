// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Triggers from '../Triggers/Triggers';
import Trigger from '../Trigger/Trigger';
import Events from '../Events/Events';
import Patterns from '../Patterns/Patterns';
import Tags from '../Tags/Tags';
import Settings from '../Settings/Settings';
import Notifications from '../Notifications/Notifications';
import type { IMoiraApi } from './Api/Api';

export default function App(props: IMoiraApi): React.Element<*> {
    const { api } = props;

    function RouteWithProps({ component: Component, exact, path, ...rest }) {
        return (
            <Route
                exact={exact}
                path={path}
                render={props => <Component {...props} {...rest} />}
            />
        );
    }

    return (
        <Layout>
            <Switch>
                <RouteWithProps exact path='/' component={Triggers} api={api} />
                <RouteWithProps
                    exact
                    path='/events/:id'
                    component={Events}
                    api={api}
                />
                <Route exact path='/trigger/:id?' component={Trigger} />
                <Route exact path='/patterns' component={Patterns} />
                <Route exact path='/tags' component={Tags} />
                <Route exact path='/settings' component={Settings} />
                <Route exact path='/notifications' component={Notifications} />
                <Route render={() => <p>404</p>} />
            </Switch>
        </Layout>
    );
}
