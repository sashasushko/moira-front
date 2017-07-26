// @flow
import React from 'react';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';
import type { Trigger } from '../Domain/Trigger';
import { withMoiraApi } from '../Api/MoiraApiInjection';
import queryString from 'query-string';
import { concat, difference } from 'lodash';
import Paging from 'retail-ui/components/Paging';
import Toggle from 'retail-ui/components/Toggle';
import Triggers from '../Components/Triggers/Triggers';
import TagSelector from '../Components/TagSelector/TagSelector';

type Props = ContextRouter & { moiraApi: IMoiraApi };
type State = {|
    loading: boolean;
    triggers: ?Array<Trigger>;
    tags: ?Array<string>;
    pages: number;
|};
type ParsedSearch = { [key: string]: string | Array<string> };

class TriggerListContainer extends React.Component {
    props: Props;
    state: State = {
        loading: true,
        triggers: null,
        tags: null,
        pages: 1,
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
                {/* ToDo: добавить проверку на то, что берется из УРЛа */}
                {loading && <p>Loading...</p>}
                {/*
                    ToDo: привести к правильной схеме
                    TriggerFilter
                        TagSelector
                            TagList
                                Tag
                        ProblemToggle
                    TriggerList
                        TriggerItem
                            StatusIndicator
                            StatusCounter
                            data
                            MetricList
                                Tabs
                            TagList
                                Tag
                    TriggerPaging
                */}
                {!loading &&
                    <div>
                        <div
                            style={{
                                display: 'flex',
                                marginBottom: '20px',
                                paddingBottom: '20px',
                                borderBottom: '1px solid #ccc',
                            }}>
                            {tags &&
                                <TagSelector
                                    tags={tags}
                                    selectedTags={Array.isArray(selectedTags) ? selectedTags : []}
                                    onSelect={tag => this.handleChangeSearch({ tags: concat(selectedTags, tag) })}
                                    onRemove={tag => this.handleChangeSearch({ tags: difference(selectedTags, [tag]) })}
                                />}
                            <div style={{ marginLeft: 'auto', width: '140px', flexShrink: 0 }}>
                                <Toggle
                                    checked={notOkMetrics === 'true'}
                                    onChange={checked => this.handleChangeSearch({ notOkMetrics: checked })}
                                />{' '}
                                Only problems
                            </div>
                        </div>
                        {triggers && <Triggers items={triggers} />}
                        <div style={{ marginTop: '30px' }}>
                            <Paging
                                activePage={Number(page) || 1}
                                onPageChange={page => this.handleChangeSearch({ page })}
                                pagesCount={pages}
                            />
                        </div>
                    </div>}
            </div>
        );
    }
}

export default withMoiraApi(TriggerListContainer);
