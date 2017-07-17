// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { Trigger } from '../../Domain/Trigger';
import type { MetricList, MetricState } from '../../Domain/Metric';
import Tag from '../Tag/Tag';
import parseTimestamp from '../../Helpers/parseTimestamp';
import styles from './TriggerListItem.less';

type Props = {|
    trigger: Trigger;
|};

type State = {|
    showedMetrics: ?MetricState;
|};

export default class TriggerListItem extends React.Component {
    props: Props;
    state: State = {
        showedMetrics: null,
    };

    // countMetrics(items: MetricList, state: MetricState): number {
    //     return Object.keys(items).filter(key => items[key].state === state).length;
    // }

    // renderPatterns(): Array<React.Element<*>> {
    //     const { patterns } = this.props.trigger;
    //     return patterns.map((pattern, index) => {
    //         return (
    //             <div key={index} className={styles.code}>
    //                 {pattern}
    //             </div>
    //         );
    //     });
    // }

    // renderTargets(): Array<React.Element<*>> {
    //     const { targets } = this.props.trigger;
    //     return targets.map((target, index) => {
    //         return (
    //             <div key={index} className={styles.code}>
    //                 {target}
    //             </div>
    //         );
    //     });
    // }

    // renderToggles(): React.Element<*> {
    //     const { last_check } = this.props.trigger;
    //     const { showedMetrics } = this.state;
    //     const { metrics } = last_check ? last_check : {};
    //     const okMetrics = this.countMetrics(metrics, 'OK');
    //     const nodataMetrics = this.countMetrics(metrics, 'NODATA');
    //     const warningMetrics = this.countMetrics(metrics, 'WARNING');
    //     const errorMetrics = this.countMetrics(metrics, 'ERROR');
    //     return (
    //         <div className={styles.toggles}>
    //             {okMetrics !== 0 &&
    //                 <button onClick={() => this.setState({ showedMetrics: 'OK' })}>
    //                     OK {okMetrics}
    //                 </button>}
    //             {nodataMetrics !== 0 &&
    //                 <button onClick={() => this.setState({ showedMetrics: 'NODATA' })}>
    //                     NODATA {nodataMetrics}
    //                 </button>}
    //             {warningMetrics !== 0 &&
    //                 <button onClick={() => this.setState({ showedMetrics: 'WARNING' })}>
    //                     WARNING {warningMetrics}
    //                 </button>}
    //             {errorMetrics !== 0 &&
    //                 <button onClick={() => this.setState({ showedMetrics: 'WARNING' })}>
    //                     ERROR {errorMetrics}
    //                 </button>}
    //             {showedMetrics && <button onClick={() => this.setState({ showedMetrics: null })}>×</button>}
    //         </div>
    //     );
    // }

    // renderMetrics(): React.Element<*> {
    //     const { last_check } = this.props.trigger;
    //     const { metrics } = last_check ? last_check : {};
    //     const { showedMetrics } = this.state;
    //     const metricsList = Object.keys(metrics).filter(key => metrics[key].state === showedMetrics).map((key, i) => {
    //         const { event_timestamp, value } = metrics[key];
    //         return (
    //             <tr key={i}>
    //                 <td width='45%'>
    //                     {key}
    //                 </td>
    //                 <td width='35%'>
    //                     <small>
    //                         {typeof event_timestamp === 'number' && parseTimestamp(event_timestamp)}
    //                     </small>
    //                 </td>
    //                 <td width='20%'>
    //                     {value || (!value && '—')}
    //                 </td>
    //             </tr>
    //         );
    //     });
    //     return (
    //         <table className={styles.metrics}>
    //             <thead>
    //                 <tr>
    //                     <td>
    //                         <i>Metric</i>
    //                     </td>
    //                     <td>
    //                         <i>Last event</i>
    //                     </td>
    //                     <td>
    //                         <i>Value</i>
    //                     </td>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {metricsList}
    //             </tbody>
    //         </table>
    //     );
    // }

    render(): React.Element<*> {
        const { id, name, targets } = this.props.trigger;
        return (
            <section className={styles.row}>
                <div className={styles.chart}>chart</div>
                <div className={styles.data}>
                    <h2 className={styles.title}>
                        <Link to={'/events/' + id}>
                            {name}
                        </Link>
                    </h2>
                    <div className={styles.targets}>
                        {targets.map((target, i) =>
                            <div key={i} className={styles.target}>
                                {target}
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}
