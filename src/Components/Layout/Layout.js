// @flow
import React from 'react';
import Loader from 'retail-ui/components/Loader';
import cn from './Layout.less';
type LayoutProps = {|
    children: any;
    loading?: boolean;
|};
type GreyPlateProps = {|
    children: any;
|};
type ContentProps = {|
    children: any;
|};
type PagingProps = {|
    children: any;
|};
export default class Layout extends React.Component {
    props: LayoutProps;

    static GreyPlate = function GreyPlate({ children }: GreyPlateProps): React.Element<*> {
        return (
            <div className={cn('grey-plate')}>
                <div className={cn('container')}>
                    {children}
                </div>
            </div>
        );
    };

    static Content = function Content({ children }: ContentProps): React.Element<*> {
        return (
            <div className={cn('content')}>
                <div className={cn('container')}>
                    {children}
                </div>
            </div>
        );
    };

    static Paging = function Paging({ children }: PagingProps): React.Element<*> {
        return (
            <div className={cn('paging')}>
                <div className={cn('container')}>
                    {children}
                </div>
            </div>
        );
    };

    render(): React.Element<*> {
        const { loading = false, children } = this.props;
        return (
            <main className={cn('layout')}>
                <Loader className={cn('loading')} active={loading}>
                    {children}
                </Loader>
            </main>
        );
    }
}
