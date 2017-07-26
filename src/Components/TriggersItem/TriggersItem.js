// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { Trigger } from '../../Domain/Trigger.js';
import StateIndicator from '../StateIndicator/StateIndicator';
import MetricsList from '../MetricsList/MetricsList';
import Tag from '../Tag/Tag';
import type { MetricList } from '../../Domain/Metric';
import type { State } from '../../Domain/State';
import { States, getStateColor } from '../../Domain/State';
import classNames from 'classnames/bind';
import styles from './TriggersItem.less';

const cx = classNames.bind(styles);
type Props = {|
    data: Trigger;
    showMetrics?: boolean;
|};

export default class TriggersItem extends React.Component {
    state: {
        showMetrics: boolean;
    } = {
        showMetrics: this.props.showMetrics || false, // ToDo: как правильно?
    };
    props: Props;

    handleShowMetrics() {
        const { showMetrics } = this.state;
        this.setState({ showMetrics: !showMetrics });
    }

    composeMetrics(): { [state: State]: Array<MetricList> } {
        const { last_check = {} } = this.props.data;
        const { metrics } = last_check;
        const sorted = {};
        Object.keys(States).map(state => {
            const filtred = Object.keys(metrics).filter(x => metrics[x].state === state);
            if (filtred.length !== 0) {
                sorted[state] = filtred.map(x => {
                    return {
                        [x]: metrics[x],
                    };
                });
            }
        });
        return sorted;
    }

    composeStates(): Array<State> {
        const metrics = this.composeMetrics();
        const notOkMetrics = Object.keys(metrics).filter(x => x !== States.OK);
        return notOkMetrics.length === 0 ? [States.OK] : notOkMetrics;
    }

    render(): React.Element<*> {
        const { showMetrics } = this.state;
        const { id, name, targets, tags } = this.props.data;
        const metrics = this.composeMetrics();
        const states = this.composeStates();

        return (
            <div className={cx({ row: true, active: showMetrics })}>
                <div className={styles.state} onClick={() => this.handleShowMetrics()}>
                    <div className={styles.indicator}>
                        <StateIndicator states={states} />
                    </div>
                    <div className={styles.counters}>
                        {Object.entries(metrics).map(([state, items], i) =>
                            <div key={i} style={{ color: getStateColor(state) }}>
                                {items.length}
                            </div>
                        )}
                    </div>
                </div>
                <div className={styles.data}>
                    <Link to={'/events/' + id}>
                        <div className={styles.title}>
                            {name}
                        </div>
                        <div className={cx({ targets: true, dark: showMetrics })}>
                            {targets.map((target, i) =>
                                <div key={i} className={styles.target}>
                                    {target}
                                </div>
                            )}
                        </div>
                    </Link>
                </div>
                <div className={styles.tags}>
                    {tags.map((tag, i) => <Tag key={i} title={tag} />)}
                </div>
                {showMetrics &&
                    <div className={styles.metrics}>
                        <MetricsList data={metrics} />
                    </div>}
            </div>
        );
    }
}
