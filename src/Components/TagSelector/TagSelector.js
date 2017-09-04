// @flow
import * as React from 'react';
import { concat } from 'lodash';
import TagList from '../TagList/TagList';
import Tag from '../Tag/Tag';
import cn from './TagSelector.less';

type Props = {|
    subscribed: Array<string>;
    remained: Array<string>;
    selected: Array<string>;
    onSelect: (tag: string) => void;
    onRemove: (tag: string) => void;
|};
type State = {|
    value: string;
    focusedIndex: number;
    isFocused: boolean;
|};

export default class TagSelector extends React.Component {
    props: Props;
    state: State = {
        value: '',
        focusedIndex: 0,
        isFocused: false,
    };

    filterTags(tags: Array<string>): Array<string> {
        const { value } = this.state;
        return tags.filter(x => x.toLowerCase().indexOf(value.toLowerCase()) !== -1);
    }

    selectTag(tag: string) {
        this.props.onSelect(tag);
        this.setState({ value: '', focusedIndex: 0 });
    }

    removeTag(tag: string) {
        this.props.onRemove(tag);
    }

    handleKeyDown(key: string, caretPosition: number) {
        const { value, focusedIndex, isFocused } = this.state;
        const { selected, subscribed, remained } = this.props;
        const filtredTags = this.filterTags(concat(subscribed, remained));
        if (isFocused) {
            switch (key) {
                case 'Delete':
                    break;
                case 'Backspace':
                    if (caretPosition === 0 && selected.length !== 0) {
                        this.removeTag(selected[selected.length - 1]);
                    }
                    break;
                case 'ArrowUp':
                    if (value.length !== 0) {
                        const newIndex = focusedIndex > 0 ? focusedIndex - 1 : filtredTags.length;
                        this.setState({ focusedIndex: newIndex });
                    }
                    break;
                case 'ArrowDown':
                    if (value.length !== 0) {
                        const newIndex = focusedIndex < filtredTags.length ? focusedIndex + 1 : 0;
                        this.setState({ focusedIndex: newIndex });
                    }
                    break;
                case 'Enter':
                    if (focusedIndex !== 0 && value.length !== 0) {
                        this.selectTag(filtredTags[focusedIndex - 1]);
                    }
                    if (focusedIndex === 0 && value.length !== 0) {
                        this.selectTag(filtredTags[filtredTags.length - 1]);
                    }
                    break;
                default:
                    break;
            }
        }
    }

    render(): React.Element<*> {
        const { selected, subscribed, remained } = this.props;
        const { value, focusedIndex, isFocused } = this.state;
        const filtredTags = this.filterTags(concat(subscribed, remained));
        return (
            <div>
                <div className={cn('input-area', { focused: isFocused })}>
                    {selected.length !== 0 &&
                        selected.map((tag, i) => (
                            <span className={cn('tag-wrap')} key={i}>
                                <Tag title={tag} onRemove={() => this.removeTag(tag)} />
                            </span>
                        ))}
                    <input
                        className={cn('input')}
                        value={value}
                        onKeyDown={(event: Event) =>
                            event.target instanceof HTMLInputElement
                                ? this.handleKeyDown(event.key, event.target.selectionStart)
                                : null}
                        onChange={(event: Event) =>
                            event.target instanceof HTMLInputElement
                                ? this.setState({ value: event.target.value, focusedIndex: 0 })
                                : null}
                        onFocus={() => this.setState({ isFocused: true })}
                        onBlur={() => this.setState({ isFocused: false })}
                    />
                </div>
                {subscribed.length !== 0 &&
                value.length === 0 && (
                    <div className={cn('group')}>
                        <b className={cn('title')}>Subscribtions</b>
                        <TagList tags={subscribed} onClick={tag => this.selectTag(tag)} />
                    </div>
                )}
                {remained.length !== 0 &&
                value.length === 0 && (
                    <div className={cn('group')}>
                        <b className={cn('title')}>All tags</b>
                        <TagList tags={remained} onClick={tag => this.selectTag(tag)} />
                    </div>
                )}
                {value.length !== 0 && (
                    <div className={cn('group')}>
                        <b className={cn('title')}>Search results</b>
                        <div className={cn('tag-list')}>
                            {filtredTags.map((tag, i) => (
                                <Tag
                                    key={i}
                                    focus={i === focusedIndex - 1}
                                    title={tag}
                                    onClick={() => this.selectTag(tag)}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
