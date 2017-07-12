// @flow
import React from 'react';
import styles from './Tag.less';

type Props = {| title: string |};

export default function Tag(props: Props): React.Element<*> {
    return (
        <div className={styles.tag}>
            {props.title}
        </div>
    );
}
