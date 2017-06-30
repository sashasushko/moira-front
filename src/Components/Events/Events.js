// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';

const Events = (props: ContextRouter) => {
    const { params } = props.match;
    const { id }: { id?: string } = params;
    return (
        <div>
            <p>Events {id}</p>
        </div>
    );
};

export default Events;
