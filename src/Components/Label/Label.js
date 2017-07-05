// @flow
import React from 'react';

type Props = {|
    title: string;
    type: 'ok' | 'nodata' | 'warning' | 'error';
|};

export default function Label(props: Props): React.Element<*> {
    return <div>Label</div>;
}
