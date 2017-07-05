// @flow
import React from 'react';
import type { TriggerState as TriggerStateType } from '../../Domain/Trigger';

type Props = {|
    data: TriggerStateType;
|};

export default function TriggerState(props: Props): React.Element<*> {
    return <div>Trigger State</div>;
}
