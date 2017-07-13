// @flow
import React from 'react';
import Tag from '../Tag/Tag';

type Props = {|
    tags: Array<string>;
    selectedTags: Array<string>;
    onSelect: (tag: string) => void;
|};

export default function TriggerTotalState(props: Props): React.Element<*> {
    const { tags, selectedTags, onSelect } = props;
    return (
        <div>
            <select
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
            <div>
                {selectedTags.map((tag, i) => <Tag key={i} title={tag} />)}
            </div>
            <hr />
        </div>
    );
}
