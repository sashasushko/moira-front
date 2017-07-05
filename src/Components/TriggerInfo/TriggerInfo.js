// @flow
import React from 'react';
import type { Trigger } from '../../Domain/Trigger';

type Props = {|
    data: Trigger;
|};

// Расписание выводится в зависимости: либо all days, либо список дней
// Если триггер сложный, выводятся T1, T2, ..., Tn
// Если триггер простой, выводится одна цель и её значения

export default function TriggerInfo(props: Props): React.Element<*> {
    return <div>Trigger</div>;
}
