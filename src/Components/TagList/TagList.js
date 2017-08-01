// @flow
import React from 'react';
import Tag from '../Tag/Tag';
import classNames from 'classnames/bind';
import styles from './TagList.less';

const cx = classNames.bind(styles);
type Props = {|
    tags: Array<string>;
    onRemove?: (tag: string) => void;
|};

export default function TagList(props: Props): React.Element<*> {
    const { tags, onRemove } = props;
    return (
        <div className={cx({ list: true })}>
            {tags.map(tag => {
                return (
                    <div key={tag} className={cx({ item: true })}>
                        <Tag title={tag} onRemove={onRemove && (() => onRemove(tag))} />
                    </div>
                );
            })}
        </div>
    );
}
