// @flow
import React from 'react';
import type { Event } from '../../Domain/Event';
import moment from 'moment';
import Icon from 'retail-ui/components/Icon';
import StatusIndicator from '../StatusIndicator/StatusIndicator';
import cn from './EventList.less';

type Props = {|
    items: Array<Event>;
|};

export default function EventList(props: Props): React.Element<*> {
    return (
        <div className={cn('list')}>
            {props.items.filter(item => item.state !== item.old_state).map((data, i) => {
                const { metric, old_state: oldState, state, timestamp } = data;
                return (
                    <div key={i} className={cn('row')}>
                        <div className={cn('name')}>{metric}</div>
                        <div className={cn('state-change')}>
                            <div className={cn('prev-state')}>
                                <span className={cn('state-value')} />
                                <StatusIndicator statuses={[oldState]} size={14} />
                            </div>
                            <div className={cn('arrow')}>
                                <Icon name='ArrowBoldRight' />
                            </div>
                            <div className={cn('next-state')}>
                                <StatusIndicator statuses={[state]} size={14} />
                                <span className={cn('state-value')} />
                            </div>
                        </div>
                        <div className={cn('date')}>{moment(timestamp).format('MMMM D, HH:mm:ss')}</div>
                    </div>
                );
            })}
        </div>
    );
}
