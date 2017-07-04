// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import type { IMoiraApi } from './Api/MoiraAPI';
import MainLayout from './Layout/MainLayout';
import Triggers from './Containers/TriggersContainer';
import Events from './Containers/EventsContainer';
import Trigger from './Containers/TriggerContainer';
import Settings from './Containers/SettingsContainer';
import Tags from './Containers/TagsContainer';
import Notifications from './Containers/NotificationsContainer';
import Patterns from './Containers/PatternsContainer';

type Props = {
    api: IMoiraApi;
};

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
        return (
            <Route
                exact={exact}
                path={path}
                render={props => <Component {...props} {...rest} />}
            />
        );
    }

    return (
        <MainLayout>
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
                <RouteWithCustomProps
                    exact
                    path='/settings'
                    component={Settings}
                    api={props.api}
                />
                <RouteWithCustomProps
                    exact
                    path='/tags'
                    component={Tags}
                    api={props.api}
                />
                <RouteWithCustomProps
                    exact
                    path='/notifications'
                    component={Notifications}
                    api={props.api}
                />
                <RouteWithCustomProps
                    exact
                    path='/patterns'
                    component={Patterns}
                    api={props.api}
                />
                <Route render={() => <p>404. Page not found</p>} />
            </Switch>
        </MainLayout>
    );
}
