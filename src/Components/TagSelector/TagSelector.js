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
        const { value } = this.state;
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
            </div>
        );
    }
}

// {selectedTags !== 0 && selectedTags.map(tag => <Tag key={tag} title={tag} />)}

// value={query}
// type='text'
// onKeyDown={(event: Event) => handleKeyDown(event)}
// onChange={event => onChange(event.target.value)}

// const { query = '', selectedTags = [], onRemove, onChange } = props;

//     function handleKeyDown(event: Event) {
//         const isCaretAtStart = event.target.selectionStart === 0;
//         const isSelectedTags = selectedTags.length !== 0;
//         switch (event.key) {
//             case 'Enter':
//                 break;
//             case 'Backspace':
//                 if (isCaretAtStart && isSelectedTags) {
//                     onRemove(selectedTags[selectedTags.length - 1]);
//                 }
//                 break;
//             case 'ArrowLeft':
//                 if (isCaretAtStart && isSelectedTags) {
//                     console.log('focus on tag');
//                 }
//                 break;
//             case 'ArrowDown':
//                 break;
//             case 'ArrowRight':
//                 break;
//             default:
//                 break;
//         }
//     }
