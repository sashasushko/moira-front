// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { Trigger } from '../../Domain/Trigger.js';
import type { Status } from '../../Domain/Status';
import { Statuses, getStatusColor } from '../../Domain/Status';
import StatusIndicator from '../StatusIndicator/StatusIndicator';
import TagList from '../TagList/TagList';
import MetricsListView from '../MetricsList/MetricsList';
import cn from './TriggerItem.less';

type Props = {|
    data: Trigger;
    showMetrics?: boolean;
|};
type State = {|
    showMetrics: ?boolean;
|};

export default class TriggerItem extends React.Component {
    props: Props;
    state: State;

    constructor() {
        super();
        this.state = {
            showMetrics: false,
        };
    }

    handleShowMetrics() {
        const { showMetrics } = this.state;
        this.setState({ showMetrics: !showMetrics });
    }

    composeStatuses(): Array<Status> {
        const { last_check: lastCheck } = this.props.data;
        const { metrics } = lastCheck || {};
        const statuses = Object.keys(Statuses).filter(
            x => Object.keys(metrics).filter(y => metrics[y].state === x).length > 0
        );
        const notOkStatuses = statuses.filter(x => x !== Statuses.OK);
        return notOkStatuses.length === 0 ? statuses : notOkStatuses;
    }

    composeCounters(): Array<{ status: Status; value: number }> {
        const { last_check: lastCheck } = this.props.data;
        const { metrics } = lastCheck || {};
        return Object.keys(Statuses)
            .map(x => {
                return {
                    status: x,
                    value: Object.keys(metrics).filter(y => metrics[y].state === x).length,
                };
            })
            .filter(x => x.value !== 0);
    }

    render(): React.Element<*> {
        const { id, name, targets, tags, last_check: lastCheck } = this.props.data;
        const { showMetrics } = this.state;
        const { metrics } = lastCheck || {};

        return (
            <div className={cn({ row: true, active: showMetrics })}>
                <div className={cn({ state: true })} onClick={() => this.handleShowMetrics()}>
                    <div className={cn({ indicator: true })}>
                        <StatusIndicator statuses={this.composeStatuses()} />
                    </div>
                    <div className={cn({ counters: true })}>
                        {this.composeCounters().map(({ status, value }) =>
                            <div key={status} style={{ color: getStatusColor(status) }}>
                                {value}
                            </div>
                        )}
                    </div>
                </div>
                <div className={cn({ data: true })}>
                    <div className={cn({ header: true })}>
                        <Link to={'/events/' + id}>
                            <div className={cn({ title: true })}>
                                {name}
                            </div>
                            <div className={cn({ targets: true, dark: showMetrics })}>
                                {targets.map((target, i) =>
                                    <div key={i} className={cn({ target: true })}>
                                        {target}
                                    </div>
                                )}
                            </div>
                        </Link>
                    </div>
                    <div className={cn({ tags: true })}>
                        <TagList tags={tags} />
                    </div>
                    {showMetrics &&
                        <div className={cn({ metrics: true })}>
                            <MetricsListView data={metrics} />
                        </div>}
                </div>
            </div>
        );
    }
}
