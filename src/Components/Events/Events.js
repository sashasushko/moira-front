// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { ContextRouter } from 'react-router-dom';

const Events = (props: ContextRouter) => {
    const { params } = props.match;
    const { id }: { id: string } = params;
    return (
        <div>
            <p>Events {id}</p>
            <p>
                <Link to={'/trigger/' + id}>Edit</Link>
            </p>
        </div>
    );
};

export default Events;
