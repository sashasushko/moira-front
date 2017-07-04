// @flow
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    children?: React.Element<*>;
};

export default function Layout(props: Props): React.Element<*> {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to='/'>Triggers</Link></li>
                        <li><Link to='/settings'>Settings</Link></li>
                    </ul>
                </nav>
            </header>
            <main>
                {props.children}
            </main>
            <footer>
                <p>© Moira, SKB Kontur</p>
            </footer>
        </div>
    );
}
