// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { Trigger } from '../../Domain/Trigger.js';
import type { Status } from '../../Domain/Status';
import { Statuses, getStatusColor } from '../../Domain/Status';
import StatusIndicator from '../StatusIndicator/StatusIndicator';
import TagList from '../TagList/TagList';
import MetricListView from '../MetricList/MetricList';
import cn from './TriggerListItem.less';

type Props = {|
    data: Trigger;
|};
type State = {|
    showMetrics: boolean;
|};

export default class TriggerListItem extends React.Component {
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
        if (notOkStatuses.length === 0) {
            return statuses.length === 0 ? [Statuses.OK] : statuses;
        }
        return notOkStatuses;
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
        const isMetrics = Object.keys(metrics).length !== 0;

        return (
            <div className={cn({ row: true, active: showMetrics })}>
                <div
                    className={cn('state', { 'is-metrics': isMetrics })}
                    onClick={isMetrics && (() => this.handleShowMetrics())}>
                    <div className={cn('indicator')}>
                        <StatusIndicator statuses={this.composeStatuses()} />
                    </div>
                    <div className={cn('counters')}>
                        {isMetrics
                            ? this.composeCounters().map(({ status, value }) =>
                                  <div key={status} style={{ color: getStatusColor(status) }}>
                                      {value}
                                  </div>
                              )
                            : <div className={cn('na-counter')}>N/A</div>}
                    </div>
                </div>
                <div className={cn('data')}>
                    <div className={cn('header')}>
                        <Link className={cn('link')} to={'/events/' + id}>
                            <div className={cn('title')}>
                                {name}
                            </div>
                            <div className={cn({ targets: true, dark: showMetrics })}>
                                {targets.map((target, i) =>
                                    <div key={i} className={cn('target')}>
                                        {target}
                                    </div>
                                )}
                            </div>
                        </Link>
                    </div>
                    <div className={cn('tags')}>
                        <TagList tags={tags} />
                    </div>
                    {showMetrics &&
                        <div className={cn('metrics')}>
                            <MetricListView data={metrics} />
                        </div>}
                </div>
            </div>
        );
    }
}
