// @flow
import React from 'react';
import type { TriggerState } from '../../Domain/Trigger';
import styles from './TriggerCurrentState.less';
import parseTimestamp from '../../Helpers/parseTimestamp';

type Props = {|
    data: TriggerState;
|};

export default function TriggerCurrentState(props: Props): React.Element<*> {
    const { metrics } = props.data;

    return (
        <section width='100%'>
            <header className={styles.header}>
                <div className={styles.state}>Sate</div>
                <div className={styles.metric}>Metric</div>
                <div className={styles.value}>Value</div>
                <div className={styles.time}>Event time</div>
            </header>
            {Object.keys(metrics).map((key, index) => {
                const { state, value, event_timestamp } = metrics[key];
                return (
                    <div key={index} className={styles.row}>
                        <div className={styles.state}>
                            {state}
                        </div>
                        <div className={styles.metric}>
                            {key}
                        </div>
                        <div className={styles.value}>
                            {value || (!value && '—')}
                        </div>
                        <div className={styles.time}>
                            <small>
                                {typeof event_timestamp === 'number' && parseTimestamp(event_timestamp)}
                            </small>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}
