// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import type { IMoiraApi } from './Api/MoiraAPI';
import Layout from './Containers/Layout/Layout';
import Triggers from './Containers/Triggers/Triggers';
import Events from './Containers/Events/Events';
import Trigger from './Containers/Trigger/Trigger';

type Props = {
    api: IMoiraApi;
};

export default function App(props: Props): React.Element<*> {
    function RouteWithCustomProps({
        component: Component,
        exact,
        path,
        strict,
        ...rest
    }): React.Element<*> {
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
                <RouteWithCustomProps
                    exact
                    path='/'
                    component={Triggers}
                    api={props.api}
                />
                <RouteWithCustomProps
                    exact
                    path='/events/:id'
                    component={Events}
                    api={props.api}
                />
                <RouteWithCustomProps
                    exact
                    path='/trigger/:id?'
                    component={Trigger}
                    api={props.api}
                />
                <Route render={() => <p>404. Page not found</p>} />
            </Switch>
        </Layout>
    );
}
