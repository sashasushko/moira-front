// @flow
import React from 'react';
import Icon from 'retail-ui/components/Icon';
import { Link } from 'react-router-dom';
import cn from './MainLayout.less';
import logo from '../logo.png';

type Props = {
    children?: React.Element<*>;
};

export default function MainLayout(props: Props): React.Element<*> {
    return (
        <div className={cn('wrap')}>
            <header className={cn('header')}>
                <div className={cn('container')}>
                    <Link to='/'>
                        <img className={cn('logo')} src={logo} alt='Moira' />
                    </Link>
                    <Link className={cn('settings')}  to={'/settings/'}>
                        <Icon name='Settings' /> Settings
                    </Link>
                </div>
            </header>
            <main className={cn('content')}>
                {props.children}
            </main>
            <footer className={cn('footer')}>
                <div className={cn('container')}>© SKB Kontur</div>
            </footer>
        </div>
    );
}
