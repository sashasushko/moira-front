// @flow
import React from 'react';

const Trigger = props => {
    return (
        <div>
            <p>Trigger {props.match.params.id}</p>
        </div>
    );
};

export default Trigger;
