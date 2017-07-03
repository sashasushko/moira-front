// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import type { ContextRouter } from 'react-router-dom';

export default class Triggers extends React.Component {
    props: ContextRouter;

    render(): React.Element<*> {
        return (
            <div>
                <p>Search</p>
                <label>
                    <input
                        type='checkbox'
                        onChange={(event: Event) => {
                            return (
                                event.target instanceof HTMLInputElement &&
                                event.target.checked
                            );
                        }}
                    />
                    Only problems
                </label>
                <p>Triggers list:</p>
                <ul>
                    <li>
                        <Link to='/events/id1'>Trigger</Link>
                    </li>
                </ul>
            </div>
        );
    }
}
