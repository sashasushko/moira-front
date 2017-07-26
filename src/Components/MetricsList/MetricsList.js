// @flow
import React from 'react';
import Link from 'retail-ui/components/Link';
import Tabs from 'retail-ui/components/Tabs';
import type { State } from '../../Domain/State';
import type { MetricList } from '../../Domain/Metric';
import parseTimestamp from '../../Helpers/parseTimestamp';
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
        // ToDo: Спросить, как вызывать одну и ту же функцию в constructor и componentWillReceiveProps
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
                    <Tabs
                        value={state}
                        onChange={(target, value) => {
                            this.setState({ state: value });
                        }}>
                        {Object.keys(data).map(x =>
                            <Tabs.Tab key={x} id={x}>
                                {x}
                            </Tabs.Tab>
                        )}
                    </Tabs>}
                {state &&
                    <div>
                        <div className={cx({ row: true, header: true })}>
                            <div className={styles.title}>Metric</div>
                            <div className={styles.eventTime}>Last event</div>
                            <div className={styles.value}>Value</div>
                        </div>
                        {data[state].map(metric =>
                            Object.entries(metric).map(([name, data], i) => {
                                const { value = '—', event_timestamp } = data;
                                return (
                                    <div key={i} className={styles.row}>
                                        <div className={styles.title}>
                                            {name}
                                        </div>
                                        <div className={styles.eventTime}>
                                            {event_timestamp ? parseTimestamp(event_timestamp) : '—'}
                                        </div>
                                        <div className={styles.value}>
                                            {/* ToDo: посмотреть, как в текущей версии округляют значения */}
                                            {value}
                                        </div>
                                        <div className={styles.controls}>
                                            <Link icon='Settings'>Off</Link>
                                            <Link icon='Delete' />
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
