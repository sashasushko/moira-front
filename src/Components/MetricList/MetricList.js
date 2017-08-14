// @flow
import React from 'react';
import Link from 'retail-ui/components/Link';
import Tabs from 'retail-ui/components/Tabs';
import { Statuses } from '../../Domain/Status';
import type { Status } from '../../Domain/Status';
import type { Metric, MetricList } from '../../Domain/Metric';
import parseTimestamp from '../../Helpers/parseTimestamp';
import cn from './MetricList.less';

const Tab = Tabs.Tab;
type Props = {|
    data: MetricList;
|};
type State = {|
    status: ?string;
|};

export default class MetricListView extends React.Component {
    props: Props;
    state: State;

    constructor() {
        super();
        this.state = {
            status: null,
        };
    }

    render(): React.Element<*> {
        const { data } = this.props;
        const metrics = composeMetrics();
        const status = this.state.status || metrics[0].status;

        function composeMetrics(): Array<{ status: Status; items: Array<{ name: string; data: Metric }> }> {
            return Object.keys(Statuses)
                .map(status => {
                    return {
                        status,
                        items: Object.keys(data).filter(x => data[x].state === status).map(x => {
                            return { name: x, data: data[x] };
                        }),
                    };
                })
                .filter(x => x.items.length !== 0);
        }

        return (
            <div>
                {metrics.length > 1 &&
                    <Tabs
                        value={status}
                        onChange={(target, value) => {
                            this.setState({ status: value });
                        }}>
                        {metrics.map(({ status }) =>
                            <Tab key={status} id={status}>
                                {status}
                            </Tab>
                        )}
                    </Tabs>}
                {status &&
                    <div>
                        <div className={cn('row', 'header')}>
                            <div className={cn('title')}>Metric</div>
                            <div className={cn('event-time')}>Last event</div>
                            <div className={cn('value')}>Value</div>
                            <div className={cn('controls')} />
                        </div>
                        {metrics.filter(x => x.status === status).map(({ items }) =>
                            items.map(({ name, data }) => {
                                const { value, event_timestamp: eventTimestamp } = data;
                                return (
                                    <div className={cn('row')}>
                                        <div className={cn('title')}>
                                            {name}
                                        </div>
                                        <div className={cn('event-time')}>
                                            {eventTimestamp ? parseTimestamp(eventTimestamp) : '—'}
                                        </div>
                                        <div className={cn('value')}>
                                            {value || '—'}
                                        </div>
                                        <div className={cn('controls')}>
                                            <div className={cn('maintenance')}>
                                                <Link icon='Settings'>Off</Link>
                                            </div>
                                            <div>
                                                <Link icon='Delete' />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>}
            </div>
        );
    }
}
