// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';
import type { Trigger, TriggerState } from '../Domain/Trigger';
import type { Metric } from '../Domain/Metric';
import type { EventList } from '../Domain/Event';
import { withMoiraApi } from '../Api/MoiraApiInjection';
import TriggerInfo from '../Components/TriggerInfo/TriggerInfo';
import MetricList from '../Components/MetricList/MetricList';
import Tabs from '../Components/Tabs/Tabs';
import TriggerEvents from '../Components/TriggerEvents/TriggerEvents';
import Layout from '../Components/Layout/Layout';

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

    composeMetrics(): Array<{ name: string; data: Metric }> {
        const { metrics } = this.state.triggerState || {};
        return metrics ? Object.keys(metrics).map(x => ({ name: x, data: metrics[x] })) : []; // TODO
    }

    render(): React.Element<*> {
        const { loading, trigger, triggerState, triggerEvents } = this.state;
        return (
            <Layout loading={loading}>
                {trigger &&
                    <Layout.GreyPlate>
                        <TriggerInfo data={trigger} />
                    </Layout.GreyPlate>}
                {this.composeMetrics().length !== 0 &&
                    <Layout.Content>
                        <Tabs value='1'>
                            <Tabs.Tab
                                id='1'
                                label='Current state'
                                component={MetricList}
                                items={this.composeMetrics()}
                                status
                            />
                            <Tabs.Tab
                                id='2'
                                label='Events history'
                                component={TriggerEvents}
                                data={triggerEvents}
                                status
                            />
                        </Tabs>
                    </Layout.Content>}
            </Layout>
        );
    }
}

export default withMoiraApi(TriggerContainer);
