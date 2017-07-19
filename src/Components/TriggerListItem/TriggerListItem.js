// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import Tag from '../Tag/Tag';
import { States, StatesColors } from '../../Domain/State';
import type { State } from '../../Domain/State';
import type { Trigger } from '../../Domain/Trigger';
import styles from './TriggerListItem.less';

type Props = {|
    trigger: Trigger;
|};

export default function TriggerListItem(props: Props): React.Element<*> {
    const { id, name, targets, tags } = props.trigger;

    function countMetrics(): Array<{ state: State; length: number }> {
        const { last_check = {} } = props.trigger;
        const { metrics } = last_check;
        return Object.keys(States)
            .map(state => {
                return {
                    state,
                    length: Object.keys(metrics).filter(x => metrics[x].state === state).length,
                };
            })
            .filter(x => x.length !== 0);
    }

    function separateMetricState(): Array<string> {
        const notOkMetrics = countMetrics().filter(x => x.state !== States.OK).map(x => x.state);
        return notOkMetrics.length === 0 ? [States.OK] : notOkMetrics;
    }

    function renderMetricState(): React.Element<*> {
        const states = separateMetricState();
        const [color1, color2, color3] = states;
        switch (states.length) {
            case 1:
                return (
                    <svg viewBox='-1 -1 2 2'>
                        <circle cx='0' cy='0' r='1' fill={StatesColors[color1]} />
                    </svg>
                );
            case 2:
                return (
                    <svg viewBox='-1 -1 2 2'>
                        <path d='M 1 0 A 1 1 0 0 1 -1 1.2246467991473532e-16 L 0 0' fill={StatesColors[color1]} />
                        <path
                            d='M -1 1.2246467991473532e-16 A 1 1 0 0 1 1 -2.4492935982947064e-16 L 0 0'
                            fill={StatesColors[color2]}
                        />
                    </svg>
                );
            case 3:
                return (
                    <svg viewBox='-1 -1 2 2'>
                        <path
                            d='M 1 0 A 1 1 0 0 1 -0.48175367410171543 0.8763066800438635 L 0 0'
                            fill={StatesColors[color1]}
                        />
                        <path
                            d='M -0.48175367410171543 0.8763066800438635 A 1 1 0 0 1 -0.48175367410171527 -0.8763066800438636 L 0 0'
                            fill={StatesColors[color2]}
                        />
                        <path
                            d='M -0.48175367410171527 -0.8763066800438636 A 1 1 0 0 1 1 -2.4492935982947064e-16 L 0 0'
                            fill={StatesColors[color3]}
                        />
                    </svg>
                );
            default:
                return <div />;
        }
    }

    function renderMetricCounters(): Array<React.Element<*>> {
        return countMetrics().map((item, i) =>
            <span key={i} data-state={item.state}>
                {item.length}
            </span>
        );
    }

    return (
        <section className={styles.row}>
            <div className={styles.chart}>
                {renderMetricState()}
                <div className={styles.counters}>
                    {renderMetricCounters()}
                </div>
            </div>
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
            <div className={styles.tags}>
                {tags.map((tag, i) => <Tag key={i} title={tag} />)}
            </div>
        </section>
    );
}
