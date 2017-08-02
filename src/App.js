// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './style.less';
import MainLayout from './Layout/MainLayout';
import TriggerListContainer from './Containers/TriggerListContainer';
import EventContainer from './Containers/EventContainer';
import TriggerContainer from './Containers/TriggerContainer';
import SettingsContainer from './Containers/SettingsContainer';

export default function App(): React.Element<*> {
    return (
        <MainLayout>
            <Switch>
                <Route exact path='/' component={TriggerListContainer} />
                <Route exact path='/events/:id' component={EventContainer} />
                <Route exact path='/trigger/:id?' component={TriggerContainer} />
                <Route exact path='/settings' component={SettingsContainer} />
                <Route render={() => <p>404. Page not found</p>} />
            </Switch>
        </MainLayout>
    );
}
