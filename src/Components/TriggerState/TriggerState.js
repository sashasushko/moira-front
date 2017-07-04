// @flow
import React from 'react';
import type { TriggerState } from '../../Domain/Trigger';

type Props = {
    data: TriggerState;
};

export default function Trigger(props: Props): React.Element<*> {
    const { state } = props.data;
    return (
        <div>
            <p>Trigger state <b>{state}</b></p>
        </div>
    );
}
