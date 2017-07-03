// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Settings from '../Settings/Settings';
import Triggers from '../Triggers/Triggers';
import Trigger from '../Trigger/Trigger';
import Events from '../Events/Events';
import Patterns from '../Patterns/Patterns';
import Tags from '../Tags/Tags';
import Notifications from '../Notifications/Notifications';

const App = () => {
    return (
        <Layout>
            <Route path='/settings' component={Settings} />
            <Route path='/triggers' component={Triggers} />
            <Route exact path='/trigger' component={Trigger} />
            <Route exact path='/trigger/:id' component={Trigger} />
            <Route path='/events/:id' component={Events} />
            <Route path='/patterns' component={Patterns} />
            <Route path='/tags' component={Tags} />
            <Route path='/notifications' component={Notifications} />
        </Layout>
    );
};

export default App;
