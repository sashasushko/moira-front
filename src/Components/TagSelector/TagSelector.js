// @flow
import React from 'react';
import TagList from '../TagList/TagList';
import classNames from 'classnames/bind';
import styles from './TagSelector.less';

const cx = classNames.bind(styles);
type Props = {|
    remainedTags: Array<string>;
    selectedTags?: ?Array<string>;
    onSelect: (tag: string) => void;
    onRemove: (tag: string) => void;
|};

export default function TagSelector(props: Props): React.Element<*> {
    const { remainedTags, selectedTags, onSelect, onRemove } = props;
    return (
        <div>
            <select
                value='default'
                onChange={(event: Event) =>
                    event.target instanceof HTMLSelectElement ? onSelect(event.target.value) : null}>
                <option disabled value='default'>
                    Select tag...
                </option>
                {remainedTags.map(tag =>
                    <option key={tag} value={tag}>
                        {tag}
                    </option>
                )}
            </select>
            {selectedTags && <TagList tags={selectedTags} onRemove={tag => onRemove(tag)} />}
        </div>
    );
}
