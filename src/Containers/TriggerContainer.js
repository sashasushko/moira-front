// @flow
import React from 'react';
import Tabs from 'retail-ui/components/Tabs';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';
import type { Trigger, TriggerState } from '../Domain/Trigger';
import type { EventList } from '../Domain/Event';
import { withMoiraApi } from '../Api/MoiraApiInjection';
import TriggerInfo from '../Components/TriggerInfo/TriggerInfo';
import TriggerCurrentState from '../Components/TriggerCurrentState/TriggerCurrentState';
import TriggerEvents from '../Components/TriggerEvents/TriggerEvents';
import Layout from '../Components/Layout/Layout';

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
        const { total = 0 } = triggerEvents || {};

        return (
            <Layout loading={loading}>
                {trigger &&
                    <Layout.GreyPlate>
                        <TriggerInfo data={trigger} />
                    </Layout.GreyPlate>}
                {triggerState &&
                    <Layout.Content>
                        <TriggerCurrentState data={triggerState} />
                    </Layout.Content>}
                {triggerEvents &&
                    <Layout.Content>
                        <TriggerEvents data={triggerEvents} />
                    </Layout.Content>}
            </Layout>
        );
    }
}

export default withMoiraApi(TriggerContainer);
