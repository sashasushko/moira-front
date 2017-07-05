// @flow
import React from 'react';
import type { Event } from '../../Domain/Events';

type Props = {|
    data: Array<Event>;
|};

export default function TriggerInfo(props: Props): React.Element<*> {
    return <div>Trigger Events</div>;
}
