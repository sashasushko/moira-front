// @flow
import React from 'react';
import cn from './TriggerFilter.less';

type Props = {|
    children?: React.Element<*>;
|};

export default function TriggerFilter(props: Props): React.Element<*> {
    return (
        <div className={cn('filter')}>
            <div className={cn({ container: true })}>
                {props.children}
            </div>
        </div>
    );
}
