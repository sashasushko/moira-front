// @flow
import React from 'react';
import type { Trigger } from '../../Domain/Trigger';
import TriggersItem from '../TriggersItem/TriggersItem';
import styles from './Triggers.less';

type Props = {|
    items: Array<Trigger>;
|};

export default function TriggerList(props: Props): React.Element<*> {
    const { items } = props;
    return (
        <div className={styles.triggers}>
            {items.length === 0 && 'No results'}
            {items.length !== 0 && items.map(item => <TriggersItem key={item.id} data={item} />)}
        </div>
    );
}
