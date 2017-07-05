// @flow
import React from 'react';
import type { Event } from '../../Domain/Events';

type Props = {|
    data: Array<Event>;
|};

// Уточнить: Считается по событиям, алгоритм забрать из текущей версии

export default function TriggerStateTotal(props: Props): React.Element<*> {
    return <div>Trigger Total State</div>;
}
