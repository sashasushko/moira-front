// @flow
import React from 'react';
import Input from 'retail-ui/components/Input';
import TagList from '../TagList/TagList';
import cn from './TagSelector.less';

type Props = {|
    selectedTags: Array<string>;
    subscribedTags: Array<string>;
    remainedTags: Array<string>;
    onSelect: (tag: string) => void;
    onRemove: (tag: string) => void;
|};

export default function TagSelector(props: Props): React.Element<*> {
    const { selectedTags, subscribedTags, remainedTags, onSelect, onRemove } = props;
    return (
        <div>
            {/* <Input value='' onChange={() => {}} placeholder='Type or select tags to filter' width='100%' /> */}
            <div className={cn('input-area')}>
                {selectedTags.length !== 0 &&
                    <div className={cn('selected-tags')}>
                        <TagList tags={selectedTags} onRemove={tag => onRemove(tag)} />
                    </div>}
                <input type='text' className={cn('search-input')} placeholder='Type or select tags to filter' />
            </div>
            {subscribedTags.length !== 0 &&
                <div className={cn('tags-group')}>
                    <h3 className={cn('title')}>Subscribed</h3>
                    <TagList onClick={tag => onSelect(tag)} tags={subscribedTags} />
                </div>}
            <div className={cn('tags-group')}>
                <h3 className={cn('title')}>All tags</h3>
                <TagList onClick={tag => onSelect(tag)} tags={remainedTags} />
            </div>
        </div>
    );
}
