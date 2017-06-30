// @flow
import React from 'react';
import { Link } from 'react-router-dom';

const Triggers = () => {
    return (
        <div>
            <p>Search</p>
            <p>Triggers list:</p>
            <ul>
                <li>
                    <Link to='/trigger/id1'>Trigger</Link>
                </li>
            </ul>
        </div>
    );
};

export default Triggers;
