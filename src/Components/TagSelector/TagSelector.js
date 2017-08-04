// @flow
import React from 'react';
import Input from 'retail-ui/components/Input';
import TagList from '../TagList/TagList';
import classNames from 'classnames/bind';
import cn from './TagSelector.less';

type Props = {|
    selectedTags?: ?Array<string>;
    subscribedTags?: ?Array<string>;
    remainedTags: Array<string>;
    onSelect: (tag: string) => void;
    onRemove: (tag: string) => void;
|};

export default function TagSelector(props: Props): React.Element<*> {
    const { selectedTags, subscribedTags, remainedTags, onSelect, onRemove } = props;
    return (
        <div>
            {selectedTags && <TagList tags={selectedTags} onRemove={tag => onRemove(tag)} />}
            <Input value='' onChange={() => {}} placeholder='Type or select tags to filter' width='100%' />
            {subscribedTags && <TagList onClick={tag => onSelect(tag)} tags={subscribedTags} />}
            <TagList onClick={tag => onSelect(tag)} tags={remainedTags} />
        </div>
    );
}
