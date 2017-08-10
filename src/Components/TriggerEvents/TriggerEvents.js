// @flow
import React from 'react';
import type { EventList } from '../../Domain/Event';
import parseTimestamp from '../../Helpers/parseTimestamp';

type Props = {|
    data: EventList;
|};

export default function TriggerEvents(props: Props): React.Element<*> {
    const { list } = props.data;
    return (
        <div>
            {list.filter(item => item.state !== item.old_state).map((data, i) => {
                const { metric, old_state: oldState, state, timestamp } = data;
                return (
                    <p key={i}>
                        <i>{metric}</i>
                        <br />
                        {oldState} → {state}
                        <br />
                        <small>{typeof timestamp === 'number' && parseTimestamp(timestamp)}</small>
                    </p>
                );
            })}
        </div>
    );
}
