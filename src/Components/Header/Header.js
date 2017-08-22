// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import cn from './Header.less';
import logo from '../../logo.png';
type Props = {|
    className?: string;
|};
export default function Header(props: Props): React.Element<*> {
    return (
        <header className={cn('header', props.className)}>
            <Container className={cn('container')}>
                <Link to='/' className={cn('logo-link')}>
                    <img className={cn('logo-img')} src={logo} alt='Moira' />
                </Link>
                <Link to='//moira.readthedocs.org/' className={cn('gapped-link')}>Help</Link>
                <Link to='/settings'>Settings</Link>
            </Container>
        </header>
    );
}
