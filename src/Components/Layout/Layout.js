// @flow
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import cn from './Layout.less';

type Props = {
    children?: React.Element<*>;
};

export default function Layout(props: Props): React.Element<*> {
    return (
        <div className={cn('layout')}>
            <Header className={cn('header')} />
            <main className={cn('content')}>
                {props.children}
            </main>
            <Footer className={cn('footer')} />
        </div>
    );
}
