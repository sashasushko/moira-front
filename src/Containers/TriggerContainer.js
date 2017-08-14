// @flow
import React from 'react';
import Tabs from 'retail-ui/components/Tabs';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';
import { withMoiraApi } from '../Api/MoiraApiInjection';
import type { Trigger, TriggerState } from '../Domain/Trigger';
import type { EventList } from '../Domain/Event';
import TriggerInfo from '../Components/TriggerInfo/TriggerInfo';
import TriggerCurrentState from '../Components/TriggerCurrentState/TriggerCurrentState';
import TriggerEvents from '../Components/TriggerEvents/TriggerEvents';

const Tab = Tabs.Tab;
type Props = ContextRouter & { moiraApi: IMoiraApi };
type State = {|
    loading: boolean;
    activeTab: string;
    trigger: ?Trigger;
    triggerState: ?TriggerState;
    triggerEvents: ?EventList;
|};

class TriggerContainer extends React.Component {
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
        const { moiraApi, match } = this.props;
        const { id } = match.params;
        if (typeof id !== 'string') {
            return;
        }
        const trigger = await moiraApi.getTrigger(id);
        const triggerState = await moiraApi.getTriggerState(id);
        const triggerEvents = await moiraApi.getTriggerEvents(id);
        this.setState({ loading: false, trigger, triggerState, triggerEvents });
    }

    render(): React.Element<*> {
        const { loading, activeTab, trigger, triggerState, triggerEvents } = this.state;

        return (
            <div>
                {loading && <p>Loading...</p>}
                {!loading &&
                    <div>
                        {trigger && <TriggerInfo data={trigger} />}
                        <div className='container'>
                            <Tabs
                                value={activeTab}
                                onChange={(targer, activeTab) => {
                                    this.setState({ activeTab });
                                }}>
                                <Tab id='current'>Current state</Tab>
                                <Tab id='history'>Events history</Tab>
                            </Tabs>
                            {activeTab === 'current' && triggerState && <TriggerCurrentState data={triggerState} />}
                            {activeTab === 'history' && triggerEvents && <TriggerEvents data={triggerEvents} />}
                        </div>
                    </div>}
            </div>
        );
    }
}

export default withMoiraApi(TriggerContainer);
