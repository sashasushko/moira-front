// @flow
import React from 'react';
import { concat } from 'lodash';
import TagList from '../TagList/TagList';
import Tag from '../Tag/Tag';
import cn from './TagSelector.less';

type Props = {|
    subscribedTags?: Array<string>;
    remainedTags?: Array<string>;
    selectedTags?: Array<string>;
    onSelect: (tag: string) => void;
    onRemove: (tag: string) => void;
|};
type State = {|
    value: string;
    isFocused: boolean;
|};

/*
    По нажатию ArrowLeft последовательный фокус на выбранном теге
    По нажатию Backspace или Delete при фокусе на теге его удаление
    По нажатию ArrowDown последовательный фокус на теге из подписок и общего списка
 */

export default class TagSelector extends React.Component {
    props: Props;
    state: State = {
        value: '',
        isFocused: false,
    };

    filterTags(tags: Array<string>): Array<string> {
        const { value } = this.state;
        return tags.filter(x => x.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }

    handleKeyDown(key: string, caretPosition: number, value: string) {
        const { subscribedTags = [], remainedTags = [], selectedTags = [], onSelect, onRemove } = this.props;
        const filtredTags = this.filterTags(concat(subscribedTags, remainedTags));
        switch (key) {
            case 'Delete':
                break;
            case 'Backspace':
                if (caretPosition === 0 && selectedTags.length !== 0) {
                    onRemove(selectedTags[selectedTags.length - 1]);
                }
                break;
            case 'ArrowLeft':
                break;
            case 'ArrowRight':
                break;
            case 'ArrowDown':
                break;
            case 'Enter':
                if (filtredTags.length !== 0) {
                    onSelect(filtredTags[0]);
                }
                break;
            default:
                break;
        }
    }

    render(): React.Element<*> {
        const { subscribedTags = [], remainedTags = [], selectedTags = [], onSelect, onRemove } = this.props;
        const { value, isFocused } = this.state;
        const filtredTags = this.filterTags(concat(subscribedTags, remainedTags));
        return (
            <div>
                <div className={cn('input-area')}>
                    {selectedTags.length !== 0 &&
                        selectedTags.map((tag, i) =>
                            <span className={cn('tag-wrap')} key={i}>
                                <Tag title={tag} onRemove={() => onRemove(tag)} />
                            </span>
                        )}
                    <input
                        className={cn('input')}
                        value={value}
                        onFocus={() => this.setState({ isFocused: true })}
                        onBlur={() => this.setState({ isFocused: false })}
                        onKeyDown={(event: Event) =>
                            event.target instanceof HTMLInputElement
                                ? this.handleKeyDown(event.key, event.target.selectionStart, event.target.value)
                                : null}
                        onChange={(event: Event) =>
                            event.target instanceof HTMLInputElement
                                ? this.setState({ value: event.target.value })
                                : null}
                    />
                </div>
                {isFocused &&
                    <div>
                        {subscribedTags.length !== 0 &&
                            value.length === 0 &&
                            <div className={cn('group')}>
                                <b className={cn('title')}>Subscribtions</b>
                                <TagList tags={subscribedTags} onClick={tag => onSelect(tag)} />
                            </div>}
                        {remainedTags.length !== 0 &&
                            value.length === 0 &&
                            <div className={cn('group')}>
                                <b className={cn('title')}>All tags</b>
                                <TagList tags={remainedTags} onClick={tag => onSelect(tag)} />
                            </div>}
                        {value.length !== 0 &&
                            <div className={cn('group')}>
                                <b className={cn('title')}>
                                    Search results {filtredTags.length}
                                </b>
                                <TagList tags={filtredTags} onClick={tag => onSelect(tag)} />
                            </div>}
                    </div>}
            </div>
        );
    }
}
