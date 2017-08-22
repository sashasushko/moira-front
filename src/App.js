// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Layout } from './Components/Layout/Layout';
import TriggerListContainer from './Containers/TriggerListContainer';
import TriggerContainer from './Containers/TriggerContainer';
import TriggerEditContainer from './Containers/TriggerEditContainer';
import SettingsContainer from './Containers/SettingsContainer';
import NotificationsContainer from './Containers/NotificationsContainer';
import TagListContainer from './Containers/TagListContainer';
import PatternListContainer from './Containers/PatternListContainer';

export default function App(): React.Element<*> {
    return (
        <Layout>
            <Switch>
                <Route exact path='/' component={TriggerListContainer} />
                <Route exact path='/trigger/:id' component={TriggerContainer} />
                <Route exact path='/trigger/:id/edit' component={TriggerEditContainer} />
                <Route exact path='/trigger/new' component={TriggerEditContainer} />
                <Route exact path='/settings' component={SettingsContainer} />
                <Route exact path='/notifications' component={NotificationsContainer} />
                <Route exact path='/tags' component={TagListContainer} />
                <Route exact path='/patterns' component={PatternListContainer} />
                <Route render={() => <p>404. Page not found</p>} />
            </Switch>
        </Layout>
    );
}
