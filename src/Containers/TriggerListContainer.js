// @flow
import React from 'react';
import Paging from 'retail-ui/components/Paging';
import type { ContextRouter } from 'react-router-dom';
import type { IMoiraApi } from '../Api/MoiraAPI';
import type { TriggerList } from '../Domain/Trigger';
import type { TagList } from '../Domain/Tag';
// import type { Maintenance } from '../Domain/Maintenance';
// import { getMaintenanceTime } from '../Domain/Maintenance';
import { withMoiraApi } from '../Api/MoiraApiInjection';
import queryString from 'query-string';
// import moment from 'moment';
import { concat, difference, flatten } from 'lodash';
import TagSelector from '../Components/TagSelector/TagSelector';
import TriggerListView from '../Components/TriggerList/TriggerList';
import Layout from '../Components/Layout/Layout';

type Props = ContextRouter & { moiraApi: IMoiraApi };
type State = {|
    loading: boolean;
    triggers: ?TriggerList;
    tags: ?TagList;
    subscribedTags: ?Array<string>;
|};
class TriggerListContainer extends React.Component {
    props: Props;
    state: State = {
        loading: true,
        triggers: null,
        tags: null,
        subscribedTags: null,
    };

    componentDidMount() {
        this.getData(this.props);
    }

    componentWillReceiveProps(nextProps: Props) {
        this.getData(nextProps);
    }

    async getData(props: Props): Promise<void> {
        const { moiraApi, location } = props;
        const { page } = this.parseLocationSearch(location.search);
        const triggers = await moiraApi.getTriggerList(page - 1);
        const tags = await moiraApi.getTagList();
        const settings = await moiraApi.getSettings();
        this.setState({
            loading: false,
            triggers,
            tags,
            subscribedTags: flatten(settings.subscriptions.map(x => x.tags)),
        });
    }

    changeTags(tags: Array<string>) {
        const { location, history } = this.props;
        const search = {
            ...this.parseLocationSearch(location.search),
            tags,
        };
        history.push('?' + queryString.stringify(search, { arrayFormat: 'index', encode: true }));
    }

    changePage(page: number) {
        const { location, history } = this.props;
        const search = {
            ...this.parseLocationSearch(location.search),
            page,
        };
        history.push('?' + queryString.stringify(search, { arrayFormat: 'index', encode: true }));
    }

    parseLocationSearch(
        search: string
    ): {
        page: number;
        tags: Array<string>;
        onlyProblems: boolean;
    } {
        const { page, tags, onlyProblems }: { [key: string]: string | Array<string> } = queryString.parse(search, {
            arrayFormat: 'index',
        });
        return {
            page: Number(page) || 1,
            tags: Array.isArray(tags) ? tags : [],
            onlyProblems: onlyProblems === 'true' || false,
        };
    }

    render(): React.Element<*> {
        const { loading, triggers, tags, subscribedTags = [] } = this.state;
        const { list: allTags = [] } = tags || {};
        const { list, size = 1, total = 1 } = triggers || {};
        const { page, tags: selectedTags } = this.parseLocationSearch(location.search);

        return (
            <Layout loading={loading}>
                <Layout.GreyPlate>
                    <TagSelector
                        selected={selectedTags}
                        subscribed={difference(subscribedTags, selectedTags)}
                        remained={difference(allTags, concat(selectedTags, subscribedTags))}
                        onSelect={tag => this.changeTags(concat(selectedTags, tag))}
                        onRemove={tag => this.changeTags(difference(selectedTags, [tag]))}
                    />
                </Layout.GreyPlate>
                <Layout.Content>
                    {Array.isArray(list) && <TriggerListView items={list} onChange={() => {}} onRemove={() => {}} />}
                </Layout.Content>
                <Layout.Paging>
                    <Paging
                        activePage={page}
                        pagesCount={Math.ceil(total / size)}
                        onPageChange={page => this.changePage(page)}
                    />
                </Layout.Paging>
            </Layout>
        );
    }
}

export default withMoiraApi(TriggerListContainer);

// async removeTriggerMetric(triggerId: string, metric: string): Promise<void> {
//     const { moiraApi } = this.props;
//     this.setState({ loading: true });
//     const status = await moiraApi.delMetric(triggerId, metric);
//     if (status === 200) {
//         this.getData(this.props);
//     }
// }

// async setTriggerMetricMaintenance(triggerId: string, maintenance: Maintenance, metric: string): Promise<void> {
//     const { moiraApi } = this.props;
//     const maintenanceTime = getMaintenanceTime(maintenance);
//     const data = {};
//     this.setState({ loading: true });
//     if (maintenanceTime > 0) {
//         data[metric] = moment.utc().add(maintenanceTime, 'minutes').unix();
//     }
//     else {
//         data[metric] = maintenanceTime;
//     }
//     const status = await moiraApi.setMaintenance(triggerId, data);
//     if (status === 200) {
//         this.getData(this.props);
//     }
// }
