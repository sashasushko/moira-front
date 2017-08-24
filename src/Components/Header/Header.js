// @flow
import React from 'react';
import { Link } from 'react-router-dom';
import RouterLinkWithIcon from '../RouterLink/RouterLink';
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
                <RouterLinkWithIcon to='//moira.readthedocs.org/' className={cn('gapped-link')} icon='help'>
                    Help
                </RouterLinkWithIcon>
            </Container>
        </header>
    );
}
