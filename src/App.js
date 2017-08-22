// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import TriggerListContainer from './Containers/TriggerListContainer';
import TriggerContainer from './Containers/TriggerContainer';
import TriggerEditContainer from './Containers/TriggerEditContainer';
import SettingsContainer from './Containers/SettingsContainer';

export default function App(): React.Element<*> {
    return (
        <Layout>
            <Switch>
                <Route exact path='/' component={TriggerListContainer} />
                <Route exact path='/events/:id' component={TriggerContainer} />
                <Route exact path='/trigger/:id?' component={TriggerEditContainer} />
                <Route exact path='/settings' component={SettingsContainer} />
                <Route render={() => <p>404. Page not found</p>} />
            </Switch>
        </Layout>
    );
}
