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

export default function App(): React.Element<*> {
    return (
        <Layout>
            <Switch>
                <Route exact path='/' component={Triggers} />
                <Route exact path='/trigger/:id?' component={Trigger} />
                <Route exact path='/events/:id' component={Events} />
                <Route exact path='/patterns' component={Patterns} />
                <Route exact path='/tags' component={Tags} />
                <Route exact path='/settings' component={Settings} />
                <Route exact path='/notifications' component={Notifications} />
                <Route render={() => <p>404</p>} />
            </Switch>
        </Layout>
    );
}
