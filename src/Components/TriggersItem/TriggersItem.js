// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { Trigger } from '../../Domain/Trigger.js';
import StateIndicator from '../StateIndicator/StateIndicator';
import Tag from '../Tag/Tag';
import type { State } from '../../Domain/State';
import { States, getStateColor } from '../../Domain/State';
import styles from './TriggersItem.less';

type Props = {|
    data: Trigger;
|};

export default function TriggersItem(props: Props): React.Element<*> {
    const { id, name, targets, tags } = props.data;

    function countMetrics(): Array<{ state: State; length: number }> {
        const { last_check } = props.data;
        const { metrics } = last_check ? last_check : {};
        return Object.keys(States)
            .map(state => {
                return {
                    state,
                    length: Object.keys(metrics).filter(x => metrics[x].state === state).length,
                };
            })
            .filter(x => x.length !== 0);
    }

    function composeMetricState(): Array<State> {
        const notOkMetrics = countMetrics().filter(x => x.state !== States.OK).map(x => x.state);
        return notOkMetrics.length === 0 ? [States.OK] : notOkMetrics;
    }

    // function separateMetricState(): Array<State> {
    //     const notOkMetrics = countMetrics().filter(x => x.state !== States.OK).map(x => x.state);
    //     return notOkMetrics.length === 0 ? [States.OK] : notOkMetrics;
    // }

    return (
        <div className={styles.row}>
            <div className={styles.state}>
                <StateIndicator state={composeMetricState()} />
            </div>
            <div className={styles.counters}>
                {countMetrics().map((item, i) =>
                    <div key={i} style={{ color: getStateColor(item.state) }}>
                        {item.length}
                    </div>
                )}
            </div>
            <div className={styles.data2}>
                <div className={styles.title}>
                    <Link to={'/events/' + id}>
                        {name}
                    </Link>
                </div>
                <div className={styles.targets}>
                    {targets.map((target, i) =>
                        <div key={i} className={styles.target}>
                            {target}
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.tags2}>
                {tags.map((tag, i) => <Tag key={i} title={tag} />)}
            </div>
        </div>
    );
}
