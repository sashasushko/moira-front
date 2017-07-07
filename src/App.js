// @flow
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import type { IMoiraApi } from './Api/MoiraAPI';
import MainLayout from './Layout/MainLayout';
import TriggersContainer from './Containers/TriggersContainer';

export default function App(): React.Element<*> {
    return (
        <MainLayout>
            <Switch>
                <Route exact path='/' component={TriggersContainer} />
                <Route render={() => <p>404. Page not found</p>} />
            </Switch>
        </MainLayout>
    );
}
