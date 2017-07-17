// @flow
import React from 'react';

type Props = {|
    title: string;
    onRemove?: () => void;
|};

export default function Contact(props: Props): React.Element<*> {
    const { title, onRemove } = props;
    return (
        <div>
            {title}
            {onRemove && <button onClick={onRemove}>×</button>}
        </div>
    );
}
