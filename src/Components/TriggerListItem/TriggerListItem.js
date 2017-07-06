// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { Trigger } from '../../Domain/Trigger';
import type { MetricState } from '../../Domain/Metric';
import Tag from '../Tag/Tag';
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

    render(): React.Element<*> {
        const { id, name, is_simple_trigger, tags } = this.props.item;
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
            </div>
        );
    }
}
