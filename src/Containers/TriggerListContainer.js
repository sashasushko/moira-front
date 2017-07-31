// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';
import type { Trigger } from '../Domain/Trigger';
import { withMoiraApi } from '../Api/MoiraApiInjection';
import queryString from 'query-string';
import { concat, difference } from 'lodash';
import Paging from 'retail-ui/components/Paging';
import TriggerList from '../Components/TriggerList/TriggerList';
import TriggerFilter from '../Components/TriggerFilter/TriggerFilter';

type Props = ContextRouter & { moiraApi: IMoiraApi };
type State = {|
    loading: boolean;
    triggers: ?Array<Trigger>;
    tags: ?Array<string>;
    pages: ?number;
|};
type ParsedSearch = { [key: string]: string | Array<string> };

class TriggerListContainer extends React.Component {
    props: Props;
    state: State = {
        loading: true,
        triggers: null,
        tags: null,
        pages: null,
    };

    componentDidMount() {
        this.getData();
    }

    async getData(): Promise<void> {
        const { location, moiraApi } = this.props;
        const parsedPath = this.handleParseSearch(location.search);
        const page = Number(parsedPath.page) || 0;
        const triggerList = await moiraApi.getTriggerList(page);
        const tagList = await moiraApi.getTagList();
        const pages = Math.ceil(triggerList.total / triggerList.size);
        this.setState({ loading: false, triggers: triggerList.list, tags: tagList.list, pages });
    }

    handleParseSearch(search: string): ParsedSearch {
        return queryString.parse(search, { arrayFormat: 'index' });
    }

    handleBuildSearch(search: ParsedSearch): string {
        return '?' + queryString.stringify(search, { arrayFormat: 'index', encode: true });
    }

    handleChangeSearch(update: ParsedSearch) {
        const { location, history } = this.props;
        const search = {
            ...this.handleParseSearch(location.search),
            ...update,
        };
        history.push(this.handleBuildSearch(search));
    }

    render(): React.Element<*> {
        const { loading, triggers, tags, pages } = this.state;
        const { location } = this.props;
        const { page, notOkMetrics, tags: selectedTags } = this.handleParseSearch(location.search);

        return (
            <div>
                {loading && <p>Loading...</p>}
                {!loading &&
                    <div>
                        <TriggerFilter
                            remainedTags={Array.isArray(tags) ? difference(tags, selectedTags) : []}
                            selectedTags={Array.isArray(selectedTags) ? selectedTags : []}
                            notOkMetrics={notOkMetrics === 'true'}
                            onSelect={tag => this.handleChangeSearch({ tags: concat(selectedTags, tag) })}
                            onRemove={tag => this.handleChangeSearch({ tags: difference(selectedTags, [tag]) })}
                            onChange={checked => this.handleChangeSearch({ notOkMetrics: checked ? 'true' : 'false' })}
                        />
                        {triggers && <TriggerList items={triggers} />}
                    </div>}
            </div>
        );
    }
}

export default withMoiraApi(TriggerListContainer);
