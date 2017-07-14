// @flow
import React from 'react';
import styles from './Tag.less';

type Props = {|
    title: string;
    onRemove?: () => void;
|};

export default function Tag(props: Props): React.Element<*> {
    const { title, onRemove } = props;
    return (
        <div className={styles.tag}>
            {title}
            {onRemove && <button onClick={onRemove}>×</button>}
        </div>
    );
}
