// @flow
import React from 'react';
import parsePathSearch from '../../Helpers/parsePath';
import { Link } from 'react-router-dom';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../../Api/Api';
import type { TriggersList } from '../../Domain/TriggersList';
import type { Trigger } from '../../Domain/Trigger';

type Props = ContextRouter & { api: IMoiraApi };
type State = {
    loading: boolean;
    triggers: Array<Trigger>;
};

export default class Triggers extends React.Component {
    props: Props;
    state: State;

    constructor() {
        super();
        this.state = {
            loading: true,
            triggers: [],
        };
    }

    componentDidMount() {
        this.getTriggers();
    }

    async getTriggers(): Promise<void> {
        const { location, api } = this.props;
        const { page }: { page: number } = parsePathSearch(location.search);
        const triggers: TriggersList = await api.trigger.page(page || 0);
        this.setState({ loading: false, triggers: triggers.list });
    }

    renderTriggersList(): React.Element<*> {
        const { triggers } = this.state;
        const triggersList = triggers.map(trigger => (
            <li key={trigger.id}>
                <Link to={'/events/' + trigger.id}>
                    {trigger.name}
                </Link>
            </li>
        ));
        return <ul>{triggersList}</ul>;
    }

    render(): React.Element<*> {
        const { loading } = this.state;
        return (
            <div>
                {loading && <p>Loading...</p>}
                {!loading && this.renderTriggersList()}
            </div>
        );
    }
}
