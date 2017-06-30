// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';

const Trigger = (props: ContextRouter) => {
    const { params } = props.match;
    const { id }: { id?: string } = params;
    return (
        <div>
            <p>Trigger {id}</p>
        </div>
    );
};

export default Trigger;
