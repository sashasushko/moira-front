// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import TriggersContainer from './Containers/TriggersContainer';
import EventsContainer from './Containers/EventsContainer';
import TriggerContainer from './Containers/TriggerContainer';

export default function App(): React.Element<*> {
    return (
        <MainLayout>
            <Switch>
                <Route exact path='/' component={TriggersContainer} />
                <Route exact path='/events/:id' component={EventsContainer} />
                <Route exact path='/trigger/:id?' component={TriggerContainer} />
                <Route render={() => <p>404. Page not found</p>} />
            </Switch>
        </MainLayout>
    );
}
