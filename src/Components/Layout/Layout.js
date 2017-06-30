// @flow
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    children: React$Element<any>;
};

const Triggers = (props: Props) => {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li><Link to='/triggers'>Triggers</Link></li>
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
};

export default Triggers;
