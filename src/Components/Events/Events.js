// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { ContextRouter } from 'react-router-dom';
import Api from '../../Api/Api';
import type { IMoiraApi } from '../../Api/Api';

type State = {};

export default class Triggers extends React.Component {
    props: ContextRouter;
    api: IMoiraApi;
    state: State;

    constructor() {
        super();
        this.api = new Api();
        this.state = {
            trigger: {},
        };
    }

    componentDidMount() {
        this.getTriggers(); // ???
    }

    async getTriggers(): Promise<void> {
        const trigger = await this.api.trigger.get(this.props.match.id);
        this.setState({ trigger });
        console.log(trigger);
    }

    render(): React.Element<*> {
        const { trigger } = this.state;
        return (
            <div>
                <h3>{trigger.name}</h3>
                <p>Edit</p>
            </div>
        );
    }
}
