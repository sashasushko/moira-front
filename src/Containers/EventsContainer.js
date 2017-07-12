// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';
import { withMoiraApi } from '../Api/MoiraApiInjection';
import type { Trigger, TriggerState } from '../Domain/Trigger';
import type { EventList } from '../Domain/Event';
import TriggerInfo from '../Components/TriggerInfo/TriggerInfo';
import TriggerCurrentState from '../Components/TriggerCurrentState/TriggerCurrentState';
import TriggerTotalState from '../Components/TriggerTotalState/TriggerTotalState';
import TriggerEvents from '../Components/TriggerEvents/TriggerEvents';

type Props = ContextRouter & { moiraApi: IMoiraApi };
type State = {|
    loading: boolean;
    trigger: ?Trigger;
    triggerState: ?TriggerState;
    triggerEvents: ?EventList;
|};

class EventsContainer extends React.Component {
    props: Props;
    state: State = {
        loading: true,
        trigger: null,
        triggerState: null,
        triggerEvents: null,
    };

    componentDidMount() {
        this.getData();
    }

    async getData(): Promise<void> {
        const { moiraApi } = this.props;
        const { id }: { id: string } = this.props.match.params;
        const trigger = await moiraApi.getTrigger(id);
        const triggerState = await moiraApi.getTriggerState(id);
        const triggerEvents = await moiraApi.getTriggerEvents(id, 0); // 0 - номер страницы, который нужно заменить после
        this.setState({ loading: false, trigger, triggerState, triggerEvents });
    }

    render(): React.Element<*> {
        const { loading, trigger, triggerState, triggerEvents } = this.state;
        return (
            <div>
                {loading && <p>Loading...</p>}
                {trigger && <TriggerInfo data={trigger} />}
                <hr />
                <h4>Current state</h4>
                {triggerState && <TriggerCurrentState data={triggerState} />}
                <hr />
                <h4>Total state</h4>
                {triggerEvents && <TriggerTotalState />}
                <hr />
                <h4>Events history</h4>
                {triggerEvents && <TriggerEvents data={triggerEvents} />}
            </div>
        );
    }
}

export default withMoiraApi(EventsContainer);
