// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { ContextRouter } from 'react-router-dom';
import type { Trigger } from '../Domain/Trigger';
import type { IMoiraApi } from '../Api/MoiraAPI';
import parsePathSearch from '../Helpers/parsePathSearch';

type Props = ContextRouter & { api: IMoiraApi };
type State = {
    loading: boolean;
    triggers: ?Array<Trigger>;
};

// Отвечает за
// + получение списка триггеров и передачу на вывод
// - пагинацию

export default class Triggers extends React.Component {
    props: Props;
    state: State;

    constructor() {
        super();
        this.state = {
            loading: true,
            triggers: null,
        };
    }

    componentDidMount() {
        this.getTriggers();
    }

    async getTriggers(): Promise<void> {
        const { location, api } = this.props;
        const parsedPath = parsePathSearch(location.search);
        const page = typeof parsedPath.page === 'number' ? parsedPath.page : 0;
        const triggers = await api.getTriggerList(page);
        this.setState({ loading: false, triggers: triggers.list });
    }

    renderTriggersList(): React.Element<*> {
        // ToDo: вынести в отдельный компонент
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