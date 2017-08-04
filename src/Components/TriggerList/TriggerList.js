// @flow
import React from 'react';
import type { Trigger } from '../../Domain/Trigger';
import TriggerItem from '../TriggerItem/TriggerItem';
import cn from './TriggerList.less';

type Props = {|
    items: Array<Trigger>;
|};

export default function TriggerList(props: Props): React.Element<*> {
    const { items } = props;
    return (
        <div className={cn({ list: true })}>
            {items.length === 0 && 'Empty list'}
            {items.length !== 0 &&
                items.map(item =>
                    <div className={cn({ item: true })} key={item.id}>
                        <TriggerItem data={item} />
                    </div>
                )}
        </div>
    );
}
