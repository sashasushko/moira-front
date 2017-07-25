// @flow
import React from 'react';
import type { State } from '../../Domain/State';
import type { MetricList } from '../../Domain/Metric';
import classNames from 'classnames/bind';
import styles from './MetricsList.less';

const cx = classNames.bind(styles);
type Props = {|
    data: {
        [state: State]: Array<MetricList>;
    };
|};

export default class MetricsList extends React.Component {
    props: Props;
    state: {
        state: ?State;
    };

    constructor(props: Props) {
        super(props);
        // Как вызывать одну и ту же функцию в constructor и componentWillReceiveProps
        this.state = {
            state: Object.keys(this.props.data)[0],
        };
    }

    render(): React.Element<*> {
        const { data } = this.props;
        const { state } = this.state;
        return (
            <div>
                {/* Табы лишь в том случае, если типов метрик больше одного */}
                {Object.keys(data).length > 1 &&
                    Object.keys(data).map(x =>
                        <button
                            key={x}
                            className={cx({ button: true, active: x === state })}
                            onClick={() => this.setState({ state: x })}>
                            {x}
                        </button>
                    )}
                {state &&
                    <div>
                        <div className={cx({ row: true, header: true })}>
                            <div className={styles.title}>Metric</div>
                            <div className={styles.eventTime}>Last event</div>
                            <div className={styles.value}>Value</div>
                        </div>
                        {data[state].map(metric =>
                            Object.entries(metric).map(([name, data], i) => {
                                return (
                                    <div key={i} className={styles.row}>
                                        <div className={styles.title}>
                                            {name}
                                        </div>
                                        <div className={styles.eventTime}>—</div>
                                        <div className={styles.value}>—</div>
                                        <div className={styles.controls}>
                                            <button>Off</button>
                                            <button>×</button>
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
