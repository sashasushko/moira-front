// @flow
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    children?: React.Element<*>;
};

export default function MainLayout(props: Props): React.Element<*> {
    return (
        <div>
            <header>
                <h1>
                    <Link to='/'>Moira</Link>
                </h1>
                <nav>
                    <p>
                        <i>Pages:</i> <Link to='/'>Triggers</Link> <Link to='/settings'>Settings</Link>
                    </p>
                    <p>
                        <i>Hidden pages:</i> <Link to='/tags'>Tags</Link> <Link to='/notifications'>Notifications</Link>{' '}
                        <Link to='/patterns'>Patterns</Link>
                    </p>
                </nav>
            </header>
            <hr />
            <main>
                {props.children}
            </main>
            <hr />
            <footer>
                <p>© Moira, SKB Kontur</p>
            </footer>
        </div>
    );
}
