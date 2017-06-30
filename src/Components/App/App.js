// @flow
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Triggers from '../Triggers/Triggers';
import Settings from '../Settings/Settings';

const App = () => {
    return (
        <Layout>
            <Redirect to='/triggers' />
            <Route path='/triggers' component={Triggers} />
            <Route path='/patterns' component={Triggers} />
            <Route path='/tags' component={Triggers} />
            <Route path='/notifications' component={Triggers} />
            <Route path='/settings' component={Settings} />
        </Layout>
    );
};

export default App;
