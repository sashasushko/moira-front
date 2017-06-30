// @flow
import React from 'react';
import { Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Triggers from '../Triggers/Triggers';
import Trigger from '../Trigger/Trigger';
import Events from '../Events/Events';
import Settings from '../Settings/Settings';

const App = () => {
    return (
        <Layout>
            <Route path='/settings' component={Settings} />
            <Route path='/triggers' component={Triggers} />
            <Route exact path='/trigger' component={Trigger} />
            <Route exact path='/trigger/:id' component={Trigger} />
            <Route path='/events/:id' component={Events} />
            <Route path='/patterns' component={Triggers} />
            <Route path='/tags' component={Triggers} />
            <Route path='/notifications' component={Triggers} />
        </Layout>
    );
};

export default App;
