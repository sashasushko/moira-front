// @flow
import React from 'react';
import type { Schedule } from '../../Domain/Schedule';

type Props = {|
    schedule: Schedule;
    onChange: () => void; // ??? подумать, что возвращать
|};

export default function Schedule(props: Props): React.Element<*> {
    return <div>Schedule</div>;
}
