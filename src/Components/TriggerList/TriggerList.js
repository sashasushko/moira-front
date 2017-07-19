// @flow
import React from 'react';
import type { Trigger } from '../../Domain/Trigger';
import TriggerListItem from '../TriggerListItem/TriggerListItem';

type Props = {|
    triggers: Array<Trigger>;
|};

export default function TriggerList(props: Props): React.Element<*> {
    const { triggers } = props;
    return (
        <div>
            {triggers.map(trigger => <TriggerListItem key={trigger.id} trigger={trigger} />)}
        </div>
    );
}
