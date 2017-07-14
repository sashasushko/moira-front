// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';
import { withMoiraApi } from '../Api/MoiraApiInjection';
import type { Trigger } from '../Domain/Trigger';
import parsePathSearch from '../Helpers/parsePathSearch';
import TagSelector from '../Components/TagSelector/TagSelector';
import TriggerList from '../Components/TriggerList/TriggerList';

type Props = ContextRouter & { moiraApi: IMoiraApi };
type State = {|
    loading: boolean;
    triggers: ?Array<Trigger>;
    tags: ?Array<string>;
|};

class TriggersContainer extends React.Component {
    props: Props;
    state: State = {
        loading: true,
        triggers: null,
        tags: null,
    };

    componentDidMount() {
        this.getData();
    }

    async getData(): Promise<void> {
        const { location, moiraApi } = this.props;
        const parsedPath = parsePathSearch(location.search);
        const page = typeof parsedPath.page === 'number' ? parsedPath.page : 0;
        const triggerList = await moiraApi.getTriggerList(page);
        const tagList = await moiraApi.getTagList();
        this.setState({ loading: false, triggers: triggerList.list, tags: tagList.list });
    }

    handleSelectTag(tag: string) {
        const { search } = this.props.location;
        const { tags: parsedTags } = parsePathSearch(search);
        // выделить в отдельный компонент
        const tags = typeof parsedTags === 'string' ? parsedTags.split(',') : [];
        const separator = tags.length !== 0 ? ',' : '';
        const tagsUrl = '?tags=' + tags.join() + separator + tag;
        this.props.history.push(tagsUrl);
    }

    handleRemoveTag(tag: string) {
        const { search } = this.props.location;
        const { tags: parsedTags } = parsePathSearch(search);
        const tags = typeof parsedTags === 'string' ? parsedTags.split(',') : [];
        const filtredTags = tags.filter(item => item !== tag);
        const tagsUrl = filtredTags.length !== 0 ? '?tags=' + filtredTags.join() : '/';
        this.props.history.push(tagsUrl);
    }

    render(): React.Element<*> {
        const { loading, triggers, tags } = this.state;
        const { search } = this.props.location;
        const { tags: parsedTags } = parsePathSearch(search);
        const selectedTags = typeof parsedTags === 'string' ? parsedTags.split(',') : [];
        return (
            <div>
                {loading && <p>Loading...</p>}
                {tags &&
                    <TagSelector
                        tags={tags}
                        selectedTags={selectedTags}
                        onSelect={tag => this.handleSelectTag(tag)}
                        onRemove={tag => this.handleRemoveTag(tag)}
                    />}
                {triggers && <TriggerList items={triggers} />}
            </div>
        );
    }
}

export default withMoiraApi(TriggersContainer);
