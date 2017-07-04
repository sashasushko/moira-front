// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { ContextRouter } from 'react-router-dom';
import type { Event } from '../Domain/Events';
import type { Trigger, TriggerState } from '../Domain/Trigger';
import type { IMoiraApi } from '../Api/MoiraAPI';

type Props = ContextRouter & { api: IMoiraApi };
type State = {
    loading: boolean;
    trigger: ?Trigger;
    triggerState: ?TriggerState;
    triggerEvents: ?Array<Event>;
};

// Отвечает за
// + получение информации о триггере и передачу на вывод
// + получение состояния метрик триггера и передачу на вывод
// - получение и расчёт общего состояния и передачу на вывод
// ~ получение событий, их пагинацию и передачу на вывод

export default class Events extends React.Component {
    props: Props;
    state: State;

    constructor() {
        super();
        this.state = {
            loading: true,
            trigger: null,
            triggerState: null,
            triggerEvents: null,
        };
    }

    componentDidMount() {
        this.getTriggerData();
    }

    async getTriggerData(): Promise<void> {
        const { id }: { id: string } = this.props.match.params;
        const { api } = this.props;
        const trigger = await api.getTrigger(id);
        const triggerState = await api.getTriggerState(id);
        const triggerEvents = await api.getTriggerEvents(id, 0);
        this.setState({
            loading: false,
            trigger,
            triggerState,
            triggerEvents: triggerEvents.list,
        });
    }

    renderTriggerInfo(): React.Element<*> {
        // ToDo: вынести в отдельный компонент
        const { id, name }: $Shape<Trigger> = this.state.trigger;
        return (
            <div>
                <h2>{name}</h2>
                <p><Link to={'/trigger/' + id}>Edit</Link></p>
                <p>id: {id}</p>
            </div>
        );
    }

    render(): React.Element<*> {
        const { loading } = this.state;
        return (
            <div>
                {loading && <p>Loading...</p>}
                {!loading && this.renderTriggerInfo()}
            </div>
        );
    }
}
