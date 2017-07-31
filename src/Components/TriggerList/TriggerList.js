// @flow
import React from 'react';
import type { Trigger } from '../../Domain/Trigger';
import TriggerItem from '../TriggerItem/TriggerItem';
import classNames from 'classnames/bind';
import styles from './TriggerList.less';

const cx = classNames.bind(styles);
type Props = {|
    items: Array<Trigger>;
|};

export default function TriggerList(props: Props): React.Element<*> {
    const { items } = props;
    return (
        <div className={cx({ list: true })}>
            {items.length === 0 && 'No results'}
            {items.length !== 0 &&
                items.map(item =>
                    <div className={cx({ item: true })} key={item.id}>
                        <TriggerItem data={item} />
                    </div>
                )}
        </div>
    );
}
