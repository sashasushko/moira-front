// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { Trigger } from '../../Domain/Trigger';
import type { MetricList, MetricState } from '../../Domain/Metric';
import Tag from '../Tag/Tag';
import parseTimestamp from '../../Helpers/parseTimestamp';
import styles from './TriggerListItem.less';

type Props = {|
    item: Trigger;
|};

type State = {|
    showedMetrics: ?MetricState;
|};

export default class TriggerListItem extends React.Component {
    state: State;

    constructor(props: Props) {
        super(props);
        this.state = {
            showedMetrics: null,
        };
    }

    countMetrics(items: MetricList, state: MetricState): number {
        return Object.keys(items).filter(key => items[key].state === state).length;
    }

    renderPatterns(): Array<React.Element<*>> {
        const { patterns } = this.props.item;
        return patterns.map((pattern, index) => {
            return (
                <div key={index} className={styles.code}>
                    {pattern}
                </div>
            );
        });
    }

    renderTargets(): Array<React.Element<*>> {
        const { targets } = this.props.item;
        return targets.map((target, index) => {
            return (
                <div key={index} className={styles.code}>
                    {target}
                </div>
            );
        });
    }

    renderToggles(): React.Element<*> {
        const { last_check } = this.props.item;
        const { showedMetrics } = this.state;
        const { metrics } = last_check ? last_check : {};
        const okMetrics = this.countMetrics(metrics, 'OK');
        const nodataMetrics = this.countMetrics(metrics, 'NODATA');
        const warningMetrics = this.countMetrics(metrics, 'WARNING');
        const errorMetrics = this.countMetrics(metrics, 'ERROR');
        return (
            <div className={styles.toggles}>
                {okMetrics !== 0 &&
                    <button onClick={() => this.setState({ showedMetrics: 'OK' })}>
                        OK {okMetrics}
                    </button>}
                {nodataMetrics !== 0 &&
                    <button onClick={() => this.setState({ showedMetrics: 'NODATA' })}>
                        NODATA {nodataMetrics}
                    </button>}
                {warningMetrics !== 0 &&
                    <button onClick={() => this.setState({ showedMetrics: 'WARNING' })}>
                        WARNING {warningMetrics}
                    </button>}
                {errorMetrics !== 0 &&
                    <button onClick={() => this.setState({ showedMetrics: 'WARNING' })}>
                        ERROR {errorMetrics}
                    </button>}
                {showedMetrics && <button onClick={() => this.setState({ showedMetrics: null })}>×</button>}
            </div>
        );
    }

    renderMetrics(): React.Element<*> {
        const { last_check } = this.props.item;
        const { metrics } = last_check ? last_check : {};
        const { showedMetrics } = this.state;
        const metricsList = Object.keys(metrics).filter(key => metrics[key].state === showedMetrics).map((key, i) => {
            const { event_timestamp, value } = metrics[key];
            return (
                <tr key={i}>
                    <td width='45%'>
                        {key}
                    </td>
                    <td width='35%'>
                        <small>
                            {typeof event_timestamp === 'number' && parseTimestamp(event_timestamp)}
                        </small>
                    </td>
                    <td width='20%'>
                        {value || (!value && '—')}
                    </td>
                </tr>
            );
        });
        return (
            <table className={styles.metrics}>
                <thead>
                    <tr>
                        <td>
                            <i>Metric</i>
                        </td>
                        <td>
                            <i>Last event</i>
                        </td>
                        <td>
                            <i>Value</i>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {metricsList}
                </tbody>
            </table>
        );
    }

    render(): React.Element<*> {
        const { id, name, is_simple_trigger, tags } = this.props.item;
        const { showedMetrics } = this.state;
        return (
            <div className={styles.item}>
                <div className={styles.tags}>
                    {tags.map((tag: string, index) => <Tag key={index} title={tag} />)}
                </div>
                <div className={styles.trigger}>
                    <Link to={'/events/' + id}>
                        <div className={styles.title}>
                            {name}
                        </div>
                        {is_simple_trigger && this.renderPatterns()}
                        {!is_simple_trigger && this.renderTargets()}
                    </Link>
                </div>
                {this.renderToggles()}
                {showedMetrics && this.renderMetrics()}
            </div>
        );
    }
}
