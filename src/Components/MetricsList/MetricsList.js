// @flow
import React from 'react';
import Link from 'retail-ui/components/Link';
import Tabs from 'retail-ui/components/Tabs';
import { Statuses } from '../../Domain/Status';
import type { Status } from '../../Domain/Status';
import type { Metric, MetricList } from '../../Domain/Metric';
import parseTimestamp from '../../Helpers/parseTimestamp';
import cn from './MetricsList.less';

type Props = {|
    data: MetricList;
|};
type State = {|
    status: ?Status;
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
                            <Tabs.Tab key={status} id={status}>
                                {status}
                            </Tabs.Tab>
                        )}
                    </Tabs>}
                {status &&
                    <div>
                        <div className={cn({ row: true, header: true })}>
                            <div className={cn({ title: true })}>Metric</div>
                            <div className={cn({ eventTime: true })}>Last event</div>
                            <div className={cn({ value: true })}>Value</div>
                            <div className={cn({ controls: true })} />
                        </div>
                        {metrics.filter(x => x.status === status).map(({ items }) =>
                            items.map(({ name, data }) => {
                                const { value, event_timestamp: eventTimestamp } = data;
                                return (
                                    <div className={cn({ row: true })}>
                                        <div className={cn({ title: true })}>
                                            {name}
                                        </div>
                                        <div className={cn({ eventTime: true })}>
                                            {eventTimestamp ? parseTimestamp(eventTimestamp) : '—'}
                                        </div>
                                        <div className={cn({ value: true })}>
                                            {value || '—'}
                                        </div>
                                        <div className={cn({ controls: true })}>
                                            <div className={cn({ maintenance: true })}>
                                                <Link icon='Settings'>Off</Link>
                                            </div>
                                            <div className={cn({ delete: true })}>
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
