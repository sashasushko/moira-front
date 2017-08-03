// @flow
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
    children?: React.Element<*>;
};

export default function MainLayout(props: Props): React.Element<*> {
    return (
        <div>
            <header className='site-header'>
                <div className='container'>
                    <Link to='/'>
                        <img className='site-logo' src='/logo.png' alt='Moira' />
                    </Link>
                </div>
            </header>
            <main>
                {props.children}
            </main>
            <footer className='site-footer'>
                <div className='container'>© SKB Kontur</div>
            </footer>
        </div>
    );
}
