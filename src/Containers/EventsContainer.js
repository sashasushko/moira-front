// @flow
import React from 'react';
import Tabs from 'retail-ui/components/Tabs';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';
import { withMoiraApi } from '../Api/MoiraApiInjection';
import type { Trigger, TriggerState } from '../Domain/Trigger';
import type { EventList } from '../Domain/Event';
import TriggerView from '../Components/Trigger/Trigger';
import TriggerCurrentState from '../Components/TriggerCurrentState/TriggerCurrentState';
import TriggerTotalState from '../Components/TriggerTotalState/TriggerTotalState';
import TriggerEvents from '../Components/TriggerEvents/TriggerEvents';

type Props = ContextRouter & { moiraApi: IMoiraApi };
type State = {|
    loading: boolean;
    activeTab: 'current' | 'total' | 'history';
    trigger: ?Trigger;
    triggerState: ?TriggerState;
    triggerEvents: ?EventList;
|};

class EventsContainer extends React.Component {
    props: Props;
    state: State = {
        loading: true,
        activeTab: 'current',
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
        const { loading, activeTab, trigger, triggerState, triggerEvents } = this.state;
        return (
            <div>
                {loading && <p>Loading...</p>}
                {!loading &&
                    <div>
                        <TriggerView data={trigger || {}} />
                        <Tabs
                            value={activeTab}
                            onChange={(targer, activeTab) => {
                                this.setState({ activeTab });
                            }}>
                            <Tabs.Tab id='current'>Current state</Tabs.Tab>
                            <Tabs.Tab id='total'>Total state</Tabs.Tab>
                            <Tabs.Tab id='history'>Events history</Tabs.Tab>
                        </Tabs>
                        {activeTab === 'current' && <TriggerCurrentState data={triggerState || {}} />}
                        {activeTab === 'total' && <TriggerTotalState />}
                        {activeTab === 'history' && <TriggerEvents data={triggerEvents || {}} />}
                    </div>}
            </div>
        );
    }
}

export default withMoiraApi(EventsContainer);
