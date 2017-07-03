// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';

export default function Trigger(props: ContextRouter): React.Element<*> {
    const { params } = props.match;
    const { id }: { id?: string } = params;
    return (
        <div>
            <p>Trigger {id}</p>
        </div>
    );
}
