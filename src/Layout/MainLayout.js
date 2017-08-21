// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import cn from './MainLayout.less';
import logo from '../logo.png';

type Props = {
    children?: React.Element<*>;
};

export default function MainLayout(props: Props): React.Element<*> {
    return (
        <div className={cn('site')}>
            <header className={cn('site-header')}>
                <div className={cn('container')}>
                    <Link to='/'>
                        <img className={cn('site-logo')} src={logo} alt='Moira' />
                    </Link>
                </div>
            </header>
            <main className={cn('site-content')}>
                {props.children}
            </main>
            <footer className={cn('site-footer')}>
                <div className={cn('container')}>© SKB Kontur</div>
            </footer>
        </div>
    );
}
