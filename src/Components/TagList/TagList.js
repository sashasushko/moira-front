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
        <div>
            {tags.map(tag => {
                return typeof onRemove === 'function'
                    ? <Tag key={tag} title={tag} onRemove={() => onRemove(tag)} />
                    : <Tag key={tag} title={tag} />;
            })}
        </div>
    );
}
