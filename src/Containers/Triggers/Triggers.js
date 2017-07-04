// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { ContextRouter } from 'react-router-dom';
import type { Trigger, TriggerList } from '../../Domain/Trigger';
import type { IMoiraApi } from '../../Api/MoiraAPI';
import parsePathSearch from '../../Helpers/parsePathSearch';

type Props = ContextRouter & { api: IMoiraApi };
type State = {
    loading: boolean;
    triggers: Array<Trigger> | [];
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
            triggers: [],
        };
    }

    componentDidMount() {
        this.getTriggers();
    }

    async getTriggers(): Promise<void> {
        const { location } = this.props;
        const { page }: { page: number } = parsePathSearch(location.search);
        const triggers: TriggerList = await this.props.api.trigger.page(
            page || 0
        );
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
