// @flow
import React from 'react';
import Container from '../Container/Container';
import cn from './Footer.less';
type Props = {|
    className?: string;
|};
export default function Footer(props: Props): React.Element<*> {
    return (
        <footer className={cn('footer', props.className)}>
            <Container>© SKB Kontur</Container>
        </footer>
    );
}
