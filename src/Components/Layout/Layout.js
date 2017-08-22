// @flow
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import cn from './Layout.less';

type LayoutProps = {
    children?: React.Element<*>;
};
export function Layout(props: LayoutProps): React.Element<*> {
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

type ContainerProps = {
    className?: string;
    children?: React.Element<*>;
};
export function Container(props: ContainerProps): React.Element<*> {
    return (
        <div className={cn('container', props.className)}>
            {props.children}
        </div>
    );
}

type ColumnStackProps = {|
    className?: string;
    children?: React.Element<*>;
    gap?: number;
    marginTop?: number;
    marginBottom?: number;
|};
export function ColumnStack(props: ColumnStackProps): React.Element<*> {
    const {
        children,
        className = '',
        gap = 0,
        marginTop,
        marginBottom,
    } = props;
    return (
        <div className={cn('column-stack', 'gap-' + gap.toString(), className)} style={{ marginTop, marginBottom }}>
            {children}
        </div>
    );
}

type StackItemProps = {
    className?: string;
    children?: React.Element<*>;
};
export function StackItem(props: StackItemProps): React.Element<*> {
    return (
        <div className={cn('stack-item', props.className)}>
            {props.children}
        </div>
    );
}
