// @flow
import React from 'react';
import TagList from '../TagList/TagList';
import cn from './TagSelector.less';

type Props = {|
    selectedTags: Array<string>;
    subscribedTags: Array<string>;
    remainedTags: Array<string>;
    value: ?string;
    onInput: (query: string) => void;
    onSelect: (tag: string) => void;
    onRemove: (tag: string) => void;
|};

export default function TagSelector(props: Props): React.Element<*> {
    const { value, selectedTags, subscribedTags, remainedTags, onInput, onSelect, onRemove } = props;
    return (
        <div>
            <div className={cn('input-area')}>
                {selectedTags.length !== 0 &&
                    <div className={cn('selected-tags')}>
                        <TagList tags={selectedTags} onRemove={tag => onRemove(tag)} />
                    </div>}
                <input
                    type='text'
                    className={cn('search-input')}
                    placeholder='Type or select tags to filter'
                    value={value}
                    onChange={event => onInput(event.target.value)}
                />
            </div>
            {subscribedTags.length !== 0 &&
                <div className={cn('tags-group')}>
                    <h3 className={cn('title')}>Subscribed</h3>
                    <TagList onClick={tag => onSelect(tag)} tags={subscribedTags} />
                </div>}
            {remainedTags.length !== 0 &&
                <div className={cn('tags-group')}>
                    <h3 className={cn('title')}>All tags</h3>
                    <TagList onClick={tag => onSelect(tag)} tags={remainedTags} />
                </div>}
        </div>
    );
}
