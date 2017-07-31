// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { Trigger } from '../../Domain/Trigger.js';
import type { Status } from '../../Domain/Status';
import { Statuses, getStatusColor } from '../../Domain/Status';
import StatusIndicator from '../StatusIndicator/StatusIndicator';
import TagList from '../TagList/TagList';
import MetricsList from '../MetricsList/MetricsList';
import classNames from 'classnames/bind';
import styles from './TriggerItem.less';

const cx = classNames.bind(styles);
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
        const { last_check } = this.props.data;
        const { metrics } = last_check || {};
        const statuses = Object.keys(Statuses).filter(
            x => Object.keys(metrics).filter(y => metrics[y].state === x).length > 0
        );
        const notOkStatuses = statuses.filter(x => x !== Statuses.OK);
        return notOkStatuses.length === 0 ? statuses : notOkStatuses;
    }

    composeCounters(): Array<{ status: Status; value: number }> {
        const { last_check } = this.props.data;
        const { metrics } = last_check || {};
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
        const { id, name, targets, tags, last_check } = this.props.data;
        const { showMetrics } = this.state;
        const { metrics } = last_check || {};

        return (
            <div className={cx({ row: true, active: showMetrics })}>
                <div className={cx({ state: true })} onClick={() => this.handleShowMetrics()}>
                    <div className={cx({ indicator: true })}>
                        <StatusIndicator statuses={this.composeStatuses()} />
                    </div>
                    <div className={cx({ counters: true })}>
                        {this.composeCounters().map(({ status, value }) =>
                            <div key={status} style={{ color: getStatusColor(status) }}>
                                {value}
                            </div>
                        )}
                    </div>
                </div>
                <div className={cx({ data: true })}>
                    <div className={cx({ header: true })}>
                        <Link to={'/events/' + id}>
                            <div className={cx({ title: true })}>
                                {name}
                            </div>
                            <div className={cx({ targets: true, dark: showMetrics })}>
                                {targets.map((target, i) =>
                                    <div key={i} className={cx({ target: true })}>
                                        {target}
                                    </div>
                                )}
                            </div>
                        </Link>
                    </div>
                    <div className={cx({ tags: true })}>
                        <TagList tags={tags} />
                    </div>
                    {showMetrics &&
                        <div className={cx({ metrics: true })}>
                            <MetricsList data={metrics} />
                        </div>}
                </div>
            </div>
        );
    }
}
