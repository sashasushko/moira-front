// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { ContextRouter } from 'react-router-dom';
import Api from '../../Api/Api';
import type { IMoiraApi } from '../../Api/Api';
import type { Trigger } from '../../Domain/Trigger';

type State = {
    triggers: Array<Trigger>;
};

export default class Triggers extends React.Component {
    props: ContextRouter;
    api: IMoiraApi;
    state: State;

    constructor() {
        super();
        this.api = new Api();
        this.state = {
            triggers: [],
        };
    }

    componentDidMount() {
        this.getTriggers(); // ???
    }

    async getTriggers(): Promise<void> {
        const triggers = await this.api.trigger.page();
        this.setState({ triggers: triggers.list });
    }

    render(): React.Element<*> {
        const { triggers } = this.state;
        return (
            <div>
                <p>Search</p>
                <label>
                    <input
                        type='checkbox'
                        onChange={(event: Event) => {
                            return (
                                event.target instanceof HTMLInputElement &&
                                event.target.checked
                            );
                        }}
                    />
                    Only problems
                </label>
                <h3>Triggers list:</h3>
                <ul>
                    {triggers.map(({ id, name }) => (
                        <li key={id}>
                            <Link to={'/events/' + id}>{name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
