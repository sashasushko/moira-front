// @flow
import React from 'react';
import type { Trigger } from '../../Domain/Trigger';
import TriggerListItem from '../TriggerListItem/TriggerListItem';
import styles from './TriggerList.less';

type Props = {|
    triggers: Array<Trigger>;
|};

export default function TriggerList(props: Props): React.Element<*> {
    const { triggers } = props;
    return (
        <div className={styles.triggerList}>
            {triggers.map(trigger => <TriggerListItem key={trigger.id} trigger={trigger} />)}
        </div>
    );
}
