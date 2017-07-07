// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import type { IMoiraApi } from './Api/MoiraAPI';
import MainLayout from './Layout/MainLayout';
import TriggersContainer from './Containers/TriggersContainer';

type Props = {|
    api: IMoiraApi;
|};

export default function App(props: Props): React.Element<*> {
    function RouteWithCustomProps({
        component: Component,
        exact,
        path,
        ...rest
    }: {
        exact?: boolean;
        path?: string;
        strict?: boolean;
    }): React.Element<*> {
        return <Route exact={exact} path={path} render={props => <Component {...props} {...rest} />} />;
    }

    return (
        <MainLayout>
            <Switch>
                <RouteWithCustomProps exact path='/' component={TriggersContainer} api={props.api} />
                <Route render={() => <p>404. Page not found</p>} />
            </Switch>
        </MainLayout>
    );
}
