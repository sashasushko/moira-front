// @flow
import React from 'react';
import type { Trigger } from '../../Domain/Trigger';
import TriggerListItem from '../TriggerListItem/TriggerListItem';
import styles from './TriggerList.less';

type Props = {|
    items: Array<Trigger>;
|};

export default function TriggerList(props: Props): React.Element<*> {
    return (
        <section>
            <header className={styles.header}>
                <div className={styles.tags}>Tags</div>
                <div className={styles.trigger}>Trigger</div>
            </header>
            {props.items.map(item => <TriggerListItem key={item.id} item={item} />)}
        </section>
    );
}
