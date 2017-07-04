// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';

type Props = ContextRouter & { api: IMoiraApi };
type State = {
    loading: boolean;
};

// Отвечает за
// - получение информации о подписках и отправку их на вывод
// - управление подписками

export default class Notifications extends React.Component {
    props: Props;
    state: State;

    constructor() {
        super();
        this.state = {
            loading: false,
        };
    }

    render(): React.Element<*> {
        const { loading } = this.state;
        return (
            <div>
                {loading && <p>Loading...</p>}
                {!loading && <p>notifications list</p>}
            </div>
        );
    }
}
