// @flow
import React from 'react';
import type { Trigger } from '../../Domain/Trigger';
import TriggerListItem from '../TriggerListItem/TriggerListItem';
import cn from './TriggerList.less';

type Props = {|
    items: Array<Trigger>;
    onRemove: (triggerId: string, metric: string) => void;
|};

export default function TriggerList(props: Props): React.Element<*> {
    const { items, onRemove } = props;
    return (
        <div>
            {items.length === 0
                ? <div className={cn('no-result')}>No results :-(</div>
                : items.map(item =>
                      <div className={cn('item')} key={item.id}>
                          <TriggerListItem data={item} onRemove={metric => onRemove(item.id, metric)} />
                      </div>
                  )}
        </div>
    );
}
