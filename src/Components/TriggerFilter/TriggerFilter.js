// @flow
import React from 'react';
import TagSelector from '../TagSelector/TagSelector';
import Toggle from 'retail-ui/components/Toggle';
import classNames from 'classnames/bind';
import styles from './TriggerFilter.less';

const cx = classNames.bind(styles);
type Props = {|
    remainedTags: Array<string>;
    selectedTags?: ?Array<string>;
    notOkMetrics: boolean;
    onSelect: (tag: string) => void;
    onRemove: (tag: string) => void;
    onChange: (checked: boolean) => void;
|};

export default function TriggerFilter(props: Props): React.Element<*> {
    const { remainedTags, selectedTags, notOkMetrics, onSelect, onRemove, onChange } = props;
    return (
        <div className={cx({ filter: true })}>
            <div className={cx({ tags: true })}>
                <TagSelector
                    remainedTags={remainedTags}
                    selectedTags={selectedTags}
                    onSelect={tag => onSelect(tag)}
                    onRemove={tag => onRemove(tag)}
                />
            </div>
            <div className={cx({ toggle: true })}>
                <Toggle checked={notOkMetrics} onChange={checked => onChange(checked)} /> Only problems
            </div>
        </div>
    );
}
