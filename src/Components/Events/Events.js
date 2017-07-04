// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../../Api/Api';
import type {
    Trigger,
    TriggerState as TriggerStateType,
} from '../../Domain/Trigger';
import TriggerState from '../TriggerState/TriggerState';

type Props = ContextRouter & { api: IMoiraApi };
type State = {
    loading: boolean;
    trigger: Trigger;
    triggerState: TriggerStateType;
};

export default class Events extends React.Component {
    props: Props;
    state: State;

    constructor() {
        super();
        this.state = {
            loading: true,
            trigger: {},
            triggerState: {},
        };
    }

    componentDidMount() {
        this.getTriggerData();
    }

    async getTriggerData(): Promise<void> {
        const { api } = this.props;
        const { id }: { id: string } = this.props.match.params;
        const trigger: Trigger = await api.trigger.get(id);
        const triggerState: TriggerStateType = await api.trigger.state(id);
        this.setState({ loading: false, trigger, triggerState });
    }

    renderTriggerInfo(): React.Element<*> {
        const { triggerState, trigger } = this.state;
        const { name, id } = trigger;
        return (
            <div>
                <h3>{name}</h3>
                <p>id: {id}</p>
                <p>
                    <Link to={'/trigger/' + id}>Edit</Link>
                </p>
                <TriggerState data={triggerState} />
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
