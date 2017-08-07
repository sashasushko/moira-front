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
type State = {
    query: string;
};

export default class TriggerFilter extends React.Component {
    props: Props;
    state: State = { query: '' };
    handleFilter(tags: Array<string>): Array<string> {
        const { query } = this.state;
        return tags.filter(x => x.toLowerCase().indexOf(query.toLowerCase()) !== -1);
    }
    render(): React.Element<*> {
        const { selectedTags, subscribedTags, remainedTags, onSelect, onRemove } = this.props;
        const { query } = this.state;
        return (
            <div className={cn('filter')}>
                <div className={cn('container')}>
                    <TagSelector
                        selectedTags={selectedTags}
                        subscribedTags={this.handleFilter(subscribedTags)}
                        remainedTags={this.handleFilter(remainedTags)}
                        value={query}
                        onInput={query => this.setState({ query })}
                        onSelect={tag => onSelect(tag)}
                        onRemove={tag => onRemove(tag)}
                    />
                </div>
            </div>
        );
    }
}
