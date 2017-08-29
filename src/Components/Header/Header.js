// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import RouterLinkWithIcon from '../RouterLink/RouterLink';
import cn from './Header.less';
import logo from '../../logo.png';
type Props = {|
    className?: string;
|};
export default function Header(props: Props): React.Element<*> {
    return (
        <header className={cn('header', props.className)}>
            <div className={cn('container')}>
                <Link to='/' className={cn('logo-link')}>
                    <img className={cn('logo-img')} src={logo} alt='Moira' />
                </Link>
                <nav className={cn('menu')}>
                    <RouterLinkWithIcon to='/settings' className={cn('menu-link')} icon='Settings'>
                        Sushko Settings
                    </RouterLinkWithIcon>
                    <RouterLinkWithIcon to='//moira.readthedocs.org/' className={cn('menu-link')} icon='HelpBook'>
                        Help
                    </RouterLinkWithIcon>
                </nav>
            </div>
        </header>
    );
}
