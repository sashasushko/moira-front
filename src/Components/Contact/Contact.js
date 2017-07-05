// @flow
import React from 'react';

type Props = {|
    type: string;
    title: string;
    onRemove?: () => void;
|};

export default function Contact(props: Props): React.Element<*> {
    return <div>Contact</div>;
}
