// @flow
import React from 'react';
import type { Trigger } from '../../Domain/Trigger';
import TriggersItem from '../TriggersItem/TriggersItem';

type Props = {|
    items: Array<Trigger>;
|};

export default function TriggerList(props: Props): React.Element<*> {
    const { items } = props;
    return (
        <div>
            {items.length === 0 && 'No results'}
            {items.length !== 0 && items.map(item => <TriggersItem key={item.id} data={item} />)}
        </div>
    );
}
