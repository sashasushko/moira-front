// @flow
import React from 'react';
import Tag from '../Tag/Tag';
import classNames from 'classnames/bind';
import styles from './TagSelector.less';

const cx = classNames.bind(styles);
type Props = {|
    tags: Array<string>;
    selectedTags: Array<string>;
    onSelect: (tag: string) => void;
    onRemove: (tag: string) => void;
|};

export default function TagSelector(props: Props): React.Element<*> {
    const { tags, selectedTags, onSelect, onRemove } = props;
    return (
        <div className={cx({ wrap: true })}>
            <select
                className={cx({ selector: true })}
                onChange={(event: Event) =>
                    event.target instanceof HTMLSelectElement ? onSelect(event.target.value) : null}
                value='0'>
                <option value='0' disabled>
                    Select tag...
                </option>
                {tags.filter(tag => !selectedTags.includes(tag)).map((tag, i) =>
                    <option key={i} value={tag}>
                        {tag}
                    </option>
                )}
            </select>
            <div className={cx({ selectedTags: true })}>
                {selectedTags.map((tag, i) => <Tag key={i} title={tag} onRemove={() => onRemove(tag)} />)}
            </div>
        </div>
    );
}
