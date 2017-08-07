// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';
import type { Trigger } from '../Domain/Trigger';
import { withMoiraApi } from '../Api/MoiraApiInjection';
import queryString from 'query-string';
import { concat, difference, flatten } from 'lodash';
// import Toggle from 'retail-ui/components/Toggle';
import TriggerFilter from '../Components/TriggerFilter/TriggerFilter';
import TriggerList from '../Components/TriggerList/TriggerList';
import TriggerPaging from '../Components/TriggerPaging/TriggerPaging';

type Props = ContextRouter & { moiraApi: IMoiraApi };
type State = {|
    loading: boolean;
    triggers: ?Array<Trigger>;
    tags: ?Array<string>;
    pages: ?number;
    subscribedTags: ?Array<string>;
|};

class TriggerListContainer extends React.Component {
    props: Props;
    state: State = {
        loading: true,
        triggers: null,
        tags: null,
        pages: null,
        subscribedTags: null,
    };

    componentDidMount() {
        this.getData(this.props);
    }

    componentWillReceiveProps(nextProps: Props) {
        this.getData(nextProps);
    }

    async getData(props: Props): Promise<void> {
        const { location, moiraApi } = props;
        const parsedPath = this.handleParseSearch(location.search);
        const page = Number(parsedPath.page) || 0;
        const triggerList = await moiraApi.getTriggerList(page);
        const tagList = await moiraApi.getTagList();
        const settings = await moiraApi.getSettings();
        const pages = Math.ceil(triggerList.total / triggerList.size);
        const subscribedTags = flatten(settings.subscriptions.map(x => x.tags));
        this.setState({
            loading: false,
            triggers: triggerList.list,
            tags: tagList.list,
            subscribedTags,
            pages,
        });
    }

    handleParseSearch(search: string): { [key: string]: string | Array<string> } {
        return queryString.parse(search, { arrayFormat: 'index' });
    }

    handleBuildSearch(search: { [key: string]: number | string | Array<number | string> }): string {
        return '?' + queryString.stringify(search, { arrayFormat: 'index', encode: true });
    }

    handleChangeSearch(update: { [key: string]: number | string | Array<number | string> }) {
        const { location, history } = this.props;
        const search = {
            ...this.handleParseSearch(location.search),
            ...update,
        };
        history.push(this.handleBuildSearch(search));
    }

    render(): React.Element<*> {
        const { loading, triggers, tags: allTags, pages, subscribedTags } = this.state;
        const { location } = this.props;
        const { page, tags: selectedTags } = this.handleParseSearch(location.search);

        return (
            <div>
                {loading && <p>Loading...</p>}
                {!loading &&
                    <div>
                        <TriggerFilter
                            selectedTags={Array.isArray(selectedTags) ? selectedTags : []}
                            subscribedTags={difference(subscribedTags, selectedTags)}
                            remainedTags={difference(allTags, concat(selectedTags, subscribedTags))}
                            onSelect={tag => this.handleChangeSearch({ tags: concat(selectedTags, tag) })}
                            onRemove={tag => this.handleChangeSearch({ tags: difference(selectedTags, [tag]) })}
                        />
                        {triggers && <TriggerList items={triggers} />}
                        {typeof pages === 'number' &&
                            pages > 1 &&
                            <TriggerPaging
                                activePage={Number(page) || 1}
                                pagesCount={pages}
                                onChange={page => this.handleChangeSearch({ page })}
                            />}
                    </div>}
            </div>
        );
    }
}

export default withMoiraApi(TriggerListContainer);
