// @flow
import React from 'react';
import TagSelector from '../TagSelector/TagSelector';
import cn from './TriggerFilter.less';

type Props = {|
    selectedTags: Array<string>;
    subscribedTags: Array<string>;
    remainedTags: Array<string>;
    onSelect: (tag: string) => void;
    onRemove: (tag: string) => void;
|};

export default function TriggerFilter(props: Props): React.Element<*> {
    const { selectedTags, subscribedTags, remainedTags, onSelect, onRemove } = props;
    return (
        <div className={cn('filter')}>
            <div className={cn('container')}>
                <TagSelector
                    selectedTags={selectedTags}
                    subscribedTags={subscribedTags}
                    remainedTags={remainedTags}
                    onSelect={tag => onSelect(tag)}
                    onRemove={tag => onRemove(tag)}
                />
            </div>
        </div>
    );
}
